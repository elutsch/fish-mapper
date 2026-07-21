# Bite Club

**Today's on-water fishing & boating conditions for Southern Ontario lakes and rivers.**

Bite Club reads the weather, the launch, and the shape of each lake, then gives anglers a
straight answer before they leave the driveway: is the bite on, which shore fishes clean, and
can you safely put a powerboat, kayak, or canoe on the water today. Every waterbody gets a
plain-language **Prime / Marginal / Tough** call, an hourly conditions table, a 7‑day outlook,
and **separate launch verdicts per craft** — plus researched lake pages with access, species,
structure, and regulation guidance.

Coverage starts in the Kitchener–Waterloo and Grand River watershed (FMZ 16) and expands across
Southern Ontario. 20 waterbodies are live today.

---

## Table of contents

- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Routes](#routes)
- [The conditions engine](#the-conditions-engine) — how a forecast becomes a verdict
- [How forecasts are updated & stored](#how-forecasts-are-updated--stored) — the daily static build
- [The content layer](#the-content-layer) — lake profiles & the research pipeline
- [SEO & AEO](#seo--aeo)
- [Contact CTA & Discord webhook](#contact-cta--discord-webhook)
- [Analytics (PostHog)](#analytics-posthog)
- [Environment variables](#environment-variables)
- [Commands, scripts & tests](#commands-scripts--tests)
- [Deployment](#deployment)
- [Data status & caveats](#data-status--caveats)

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | **Next.js 15** (App Router) + **React 19**, TypeScript (strict) |
| Rendering | Static generation (SSG) + **on-demand revalidation** (once/day) |
| Styling | A single global stylesheet, `app/globals.css` — pop-art / neo-brutalist comic look (Anton + Comic Neue). No Tailwind, no CSS-in-JS |
| Maps | **MapLibre GL** (`SpotMap`, `LaunchMap` — the only client components) |
| Forecast | **Open-Meteo** (GEM model), no API key |
| Storage | **Vercel KV** (daily snapshots), with an in-memory fallback for local dev |
| Validation | **Zod** |
| Hosting | **Vercel** (cron + KV) |
| Tests | **Vitest** |

Path alias: `@/*` → repo root (`tsconfig.json`, mirrored in `vitest.config.ts`). `next.config.mjs`
enables `typedRoutes`.

---

## Project structure

```
app/
  layout.tsx                     Root shell: header/nav, footer, global <ContactCta>, site metadata
  page.tsx                       "/" → redirect to /fishing
  globals.css                    THE stylesheet (~3.3k lines)
  fishing/page.tsx               Home: map + lake browse ("Today's Fishing Conditions")
  [waterbody]/fishing/page.tsx           Per-lake conditions dashboard (20 pages)
  [waterbody]/fishing/[species]/page.tsx Per-species guide (91 pages)
  about/  faq/  disclaimer/       Static content pages
  robots.ts  sitemap.ts  llms.txt/route.ts   SEO/AEO routes
  api/
    cron/fishing/route.ts        Daily refresh + revalidation job
    contact/route.ts             Contact form → Discord webhook
  components/                     SpotMap, LaunchMap, SpeciesCards, RatingBadge, LakeImage, ContactCta
lib/
  spots.ts  types.ts             The 20-waterbody seed loader + core types
  seo.ts                         SITE_URL, absoluteUrl(), speciesIsIndexable(tier)
  forecast/                      Open-Meteo client + forecast helpers
  snapshot.ts  storage.ts        Snapshot build/read + Vercel KV persistence
  verdict/                       Per-craft verdict rules + Zod schema
  rating.ts  conditions.ts  week.ts   Grade math, dashboard assembly, 7-day outlook
  lakeProfiles/                  20 evergreen lake profiles (+ types, index)
  species.ts  launch.ts  format.ts   Display/format helpers
data/spots.json                  The 20-waterbody launch seed (source data)
artifacts/                       Per-lake research audit trail (Stages 0–7) → lakeProfiles
agents/                          Per-stage research agent prompts
taxonomy/                        Editorial standards (voice, gold-standard, templates)
scripts/                         Maintenance CLIs (validate, drift-check, reconcile, inspect)
test/                            Vitest suites
public/                          Static assets: brand/, hero/, waterbodies/, species/, og/, previews/
```

---

## Routes

| Route | Type | Notes |
|---|---|---|
| `/` | redirect | → `/fishing` |
| `/fishing` | static | Home — MapLibre map + lake carousel |
| `/[waterbody]/fishing` | SSG (20) | Lake dashboard: grade, craft verdicts, hourly table, weekly outlook, profile |
| `/[waterbody]/fishing/[species]` | SSG (91) | Species guide (tactics, structure, regs). Thin ones are `noindex` — see [SEO](#seo--aeo) |
| `/about`, `/faq`, `/disclaimer` | static | Content pages |
| `/robots.txt`, `/sitemap.xml`, `/llms.txt` | generated | SEO/AEO |
| `/api/cron/fishing` | route handler | Daily refresh + revalidate (auth via `CRON_SECRET`) |
| `/api/contact` | route handler | Contact form → Discord |

---

## The conditions engine

A page never talks to Open-Meteo directly. Data flows:

```
data/spots.json ─► forecast (Open-Meteo) ─► snapshot (Vercel KV) ─► verdict + grade ─► dashboard / week
```

### 1. Forecast source — `lib/forecast/`

`fetchOpenMeteoForecast()` (`lib/forecast/openMeteo.ts`) calls Open-Meteo with:

- **Model:** `gem_seamless`; **timezone:** `America/Toronto`; `forecast_days=7`, `past_days=2`.
- **Hourly:** temperature, wind speed/gusts/direction, surface pressure, precipitation, cloud cover.
- **Daily:** sunrise/sunset, temperature max/min. A second call pulls **UV index** (hourly + daily max).

Helpers in `lib/forecast/index.ts`:
- `defaultValidFor()` — the "which day" key, formatted as the **Toronto** calendar date (`YYYY-MM-DD`).
- `hoursForDate()` — the hours belonging to a given day.
- `computePressureTrend()` — over the 48 hours *before* the day starts, computes `hPa/24h` and labels it
  **rising** (> +2), **falling** (< −2), or **steady**.

UV is a **separate** Open-Meteo request (the GEM model doesn't carry UV) and degrades to empty on failure.
All scoring uses the **daylight window** (local hours 5–21).

### 2. Snapshot + storage — `lib/snapshot.ts`, `lib/storage.ts`

A **snapshot** = `{ forecast, pressureTrend, verdict, week }` for one lake on one Toronto day.

- `getOrCreateSnapshot(spot)` — read the day's snapshot from KV; if missing, build and save it.
- `refreshSnapshot(spot)` — always rebuild from a **live** forecast pull (used by the daily cron).
- Stored in **Vercel KV** under `fishing:{spotId}:{YYYY-MM-DD}` (`lib/storage.ts`), **no TTL** — once a
  day's snapshot exists it's frozen for that day. Without KV env vars, an in-memory `Map` is used
  (fine for local dev; not shared across serverless instances).
- If a forecast fetch fails, `snapshotInputs()` returns a conservative **fallback** forecast + caveat
  rather than erroring.

### 3. Scoring — `lib/rating.ts`, `lib/verdict/`

Two independent scores combine into the daily grade.

**Fish Activity** (`fishActivity`) ranks three signals 1–4 and averages them → `low / fair / high / maximum`:

| Signal | 4 | 3 | 2 | 1 |
|---|---|---|---|---|
| Air temp (°C) | ≥22 | ≥15 | ≥8 | <8 |
| UV (inverse — fish feed in low light) | ≤1 | ≤4 | ≤7 | >7 |
| Pressure trend | falling | — | steady | rising |

**Launch Read** (`launchFromWind`) bands wind and gusts; **severity = the worse of the two** →
`0 All Clear · 1 Fishable · 2 Caution · 3 Do Not Launch`:

| | 3 | 2 | 1 | 0 |
|---|---|---|---|---|
| Wind km/h | >30 | >18 | >12 | ≤12 |
| Gust km/h | >48 | >30 | >22 | ≤22 |

**Fetch penalty** (`fetchPenaltyFor`) makes bigger, more exposed water read rougher for the same wind.
"Fetch" is the open-water distance wind travels before hitting the launch (`spot.maxFetchKm`). The
penalty is **added to wind** (and ×1.4 to gusts) before banding:

| Max fetch | Penalty (km/h added to wind) |
|---|---|
| ≥ 6 km | +14 |
| ≥ 3 km | +9 |
| ≥ 1.5 km | +4 |
| < 1.5 km | 0 |

**Daily grade** (`dayGrade`) uses the day's **average** wind/gust (a brief gust shouldn't tank the day),
converts Launch severity to a 1–4 rank (All Clear = 4), and blends **70% launch / 30% activity**:

```
rating = 0.7 · (4 − launchSeverity) + 0.3 · avgFishActivityRank
tier   = rating < 2 → Tough (F+) · < 3 → Marginal (C+) · else Prime (A+)
```

Weighting toward launch is deliberate: it lets lakes differentiate by size/exposure.

**Per-craft verdicts** (`lib/verdict/rules.ts`) grade each craft against its own tolerances
(`adjustedWind = avgWind + fetchPenalty`, `adjustedGust = avgGust + fetchPenalty·1.4`) → `go / marginal / no-go`:

| Craft | go (wind / gust) | marginal (wind / gust) | Access required |
|---|---|---|---|
| Powerboat | ≤30 / ≤48 | ≤44 / ≤66 | trailer ramp |
| Kayak | ≤18 / ≤30 | ≤30 / ≤48 | carry-in |
| Canoe | ≤12 / ≤22 | ≤18 / ≤30 | carry-in |

A craft with no matching launch type at that lake is a hard **no-go**. The verdict also names the
**leeward shore** (`leewardShore`) — the edge wind pushes the cleanest water toward — and a `bestWindow`.

**Verdict shape** (`lib/verdict/schema.ts`, validated with Zod):

```ts
{ spotId, activity: "on-water-fishing", generatedAt, validFor,
  byCraft: { powerboat, kayak, canoe },   // each: { rating, bestWindow?, note }
  confidence: "low" | "medium" | "high",
  summaryMd, caveats: string[] }
```

### 4. Assembly — `lib/conditions.ts`, `lib/week.ts`

- `buildConditionsDashboard()` composes the lake page's dashboard — grade + tiles for temp (daily
  high/low), UV (daily max), wind (avg + direction + peak gust), pressure (value + trend), sun
  (sunrise/sunset + daylight length), moon (phase), and precip (total + peak + wet hours) — plus the
  hourly rows. `gradeNarrative()` writes the plain-language call from the score mappings.
- `buildWeek()` grades each of the next **7 days** (today first, skipping any partial trailing day with
  < 4 daylight hours) with the same day-grade → the weekly outlook calendar.

Verdict `confidence` is `medium` when the day has ≥ 8 daylight hours of data, otherwise `low`.

> This is a **transparent, deterministic heuristic** on real weather data and each lake's geometry —
> not an AI catch-probability model. It will also tell you when to stay home.

---

## How forecasts are updated & stored

**Goal:** refresh everything once a day just after midnight, then serve **fully static** pages for the
rest of the day — so Open-Meteo is only ever called server-side by the cron, never when a user opens a page.

### The daily job — `app/api/cron/fishing/route.ts`

Triggered by **Vercel Cron** at `1 5 * * *` (05:01 UTC). That lands at **00:01 EST** / **01:01 EDT** —
always just after Toronto midnight in either DST state, so `defaultValidFor()` has rolled to the new day.
(04:01 UTC was avoided: in winter it would fire at 23:01 the *previous* day.) On Hobby, cron fires within
the hour, once/day — fine here, since anywhere in that window is still after midnight.

Each run, in order:
1. `revalidateTag("forecast")` — invalidate the cached forecast data.
2. For all 20 lakes: `refreshSnapshot()` — a **live** Open-Meteo pull → write the day's snapshot to KV.
3. `revalidatePath()` on `/fishing`, `/[waterbody]/fishing`, and `/[waterbody]/fishing/[species]` — the
   static conditions pages regenerate **once** from the fresh KV data.

It's authenticated with `CRON_SECRET`, `maxDuration = 60`, and idempotent (re-running just overwrites the
day's KV key).

### Why the pages are truly static

- The three conditions pages export **`revalidate = false`** — fully static, no time-based ISR.
- The Open-Meteo fetch is, by default, **cached indefinitely under the `forecast` tag** (`lib/forecast/openMeteo.ts`),
  so a page render never leaks a revalidate window. The cron passes `fresh: true` for a `no-store` live pull
  and busts the tag. Net: pages change **only** when the cron says so.

```
00:01 Toronto ─ cron ─► live Open-Meteo ─► KV snapshots ─► revalidate ─► static HTML on the CDN all day
```

A user visit reads static HTML (worst case, the first hit after the cron regenerates from KV — never an
Open-Meteo call).

---

## The content layer

Beyond live conditions, each lake has an **evergreen profile** (`lib/lakeProfiles/{slug}.ts`, typed by
`lib/lakeProfiles/types.ts`) — deliberately decoupled from the daily engine. A `LakeProfile` carries:
`overview`, `notableFacts` (each cited), `morphology`, `bestSeason`, `regulations` (per-species, dated,
sourced to Ontario), `launches` (access notes), `keyResources`, and a `species[]` list.

Each species is tiered **destination / strong / present / absent**. Destination/strong carry rich tactical
copy (`lede`, `howItFishes`, `structureDetails`, `speciesRules`); present/absent don't (present = confirmed
but no tactics; absent = "what's not here", no page).

### The research pipeline (`artifacts/`, `taxonomy/`)

Profiles are the output of a staged research pipeline; the audit trail lives in `artifacts/{slug}/`:

| Stage | File | Purpose |
|---|---|---|
| 0 | `00-primer.md` | Scope/primer |
| 1a / 1b | `01a-lake-research.md`, `01b-species-fit.md` | Lake research + species scoring |
| 2 | `02-fact-check-and-correct.md` | Fact-check & regulation gate |
| 4 / 4b | `04-lake-copy.md`, `04b-species-subguides.md` | Editorial copy + species sub-guides |
| 5 | `05-voice-quality-and-revise.md` | Voice/quality pass |
| 7 | `07-data.json`, `07-validation-report.md` | Structured emit → `lib/lakeProfiles/*.ts` + validation |

The per-stage agent prompts live in `agents/` (there is no Stage 3 or 6). Stage 7 is a mechanical
translator — it restructures the verified copy into the `LakeProfile` shape and never invents content or
emits conditions fields, keeping the profile a purely **evergreen** layer. `07-data.json` is the JSON
twin of the TS profile; `check-profile-drift.ts` / `reconcile-artifacts.ts` keep them in sync (the TS
profile is source of truth).

`taxonomy/` holds the editorial standards (`voice.md`, `gold-standard.md`, `lakes.md`, `species.md`,
`template.md`). See `AGENTS.md` for the waterbody-artwork convention when adding a lake.

---

## SEO & AEO

The site is built to rank for queries like *today's fishing conditions*, *southern ontario fishing*,
*boating conditions*, and per-lake terms like *conestogo lake fishing*. Because pages are static,
fully-rendered HTML with structured data, they're also ideal for **AEO** (AI answer engines that don't
run JS get complete content).

**Foundations** (`lib/seo.ts`): `SITE_URL` (from `NEXT_PUBLIC_SITE_URL`, default `https://biteclub.ca`),
`absoluteUrl()`, `speciesIsIndexable(tier)`. `app/layout.tsx` sets `metadataBase` + default Open Graph /
Twitter cards + a 1200×630 default OG image (`public/og/default.jpg`).

**Generated routes:**
- `app/robots.ts` — allow all, disallow `/api/`, link the sitemap.
- `app/sitemap.ts` — **indexable URLs only** (73): 4 core + 20 lakes + 49 destination/strong species.
- `app/llms.txt/route.ts` — a curated, data-driven map for LLMs (value prop, coverage, lake links).

**Per-page metadata:** keyword-optimized titles/descriptions, `canonical`, and Open Graph on every page.
Lake descriptions draw from `profile.overview`; lake OG images use the waterbody art.

**Structured data (JSON-LD):** `Place` + `Article` on lake pages, `BreadcrumbList` on lake and species
pages, `FAQPage` on `/faq`.

**Thin-content strategy:** only `destination` / `strong` species pages are indexed. `present`-tier pages
are thin/templated, so they render **`noindex, follow`** and are excluded from the sitemap — protecting
site-level authority while keeping them crawlable so link equity still flows to the lake pages. The gate is
`speciesIsIndexable(tier)`; it flips automatically if a species later gains real copy.

**Post-deploy:** submit `https://biteclub.ca/sitemap.xml` in Google Search Console.

---

## Contact CTA & Discord webhook

A global **"Missing Your Lake?"** CTA (`app/components/ContactCta.tsx`, mounted above the footer in the
layout) opens a native `<dialog>` form (Name, Email, Comments). It POSTs to `app/api/contact/route.ts`,
which Zod-validates and forwards the submission to a **Discord channel** as an embed via
`CONTACT_WEBHOOK_URL`. If the env var is unset, forwarding is a no-op and the form still works end-to-end.

---

## Analytics (PostHog)

Product analytics via **PostHog** — `posthog-js` for the browser (initialized in
`instrumentation-client.ts`, with exception autocapture) and `posthog-node` for server events
(`lib/posthog-server.ts`). It no-ops cleanly when the `NEXT_PUBLIC_POSTHOG_*` env vars are unset.
No PII (names, emails, comments, coordinates) is ever sent in event properties; client and server
contact events are correlated via PostHog distinct/session IDs.

| Event | Where |
|---|---|
| `contact_dialog_opened` | Contact CTA opened (`ContactCta.tsx`) |
| `contact_form_submitted` | Server accepted a valid contact request (`api/contact`) |
| `lake_map_marker_selected` | Lake marker clicked on the map (`SpotMap.tsx`) |
| `lake_map_location_requested` | "Locate me" on the map (`SpotMap.tsx`) |
| `lake_directions_opened` | "Get Directions" on a lake page (`TrackedDirectionsLink.tsx`) |
| `forecast_refresh_completed` | Daily cron finished, with success/failure counts (`api/cron/fishing`) |

## Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `KV_REST_API_URL` + `KV_REST_API_TOKEN` | **Yes (prod)** | Vercel KV — persists daily snapshots. Without them, snapshots use per-instance memory and won't survive/​share across invocations. |
| `CRON_SECRET` | **Yes (prod)** | Authenticates `/api/cron/fishing`. Vercel Cron sends it automatically; the route is open to anyone if it's unset. |
| `CONTACT_WEBHOOK_URL` | Optional | Discord webhook that receives contact-form submissions. |
| `NEXT_PUBLIC_SITE_URL` | Optional | Overrides the canonical origin (defaults to `https://biteclub.ca`). Useful for preview deploys. |
| `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` | Analytics | PostHog project token (publishable `phc_…`). Enables product analytics; analytics no-op if unset. |
| `NEXT_PUBLIC_POSTHOG_HOST` | Analytics | PostHog ingestion host (e.g. `https://us.i.posthog.com`). |

Local dev works with none set (in-memory snapshots, deterministic scoring). Put secrets in `.env.local`
(gitignored).

---

## Commands, scripts & tests

```bash
npm run dev              # local dev server
npm run build            # production build
npm start                # serve the production build
npm run lint             # next lint
npm test                 # vitest run
npm run validate:spots   # validate the launch seed (data/spots.json)
```

**Maintenance scripts** (`scripts/`, run with `npx tsx scripts/<file>`):
- `validate-spots.ts` — checks `data/spots.json` for duplicate ids and required launch/fetch fields.
- `check-profile-drift.ts` — deep-diffs `lib/lakeProfiles/*` against `artifacts/{slug}/07-data.json`, reporting dot-path differences.
- `reconcile-artifacts.ts` — back-fills each `07-data.json` from its corrected profile (profiles are source of truth).
- `inspect-access-points.ts` — inspects the live Ontario Fishing Access Points layer.

**Tests** (`test/`, Vitest):
- `verdict.test.ts` — craft-divergence & safety gates (e.g. long-fetch lakes downgrade small craft; all-no-go handling).
- `launch.test.ts` — launch/access label formatting (trailer/carry-in, electric-only, fees).
- `species.test.ts` — species name normalization and URL slugs (`pike` → Northern Pike → `northern-pike`).

---

## Deployment

- **Vercel** with **Vercel KV** provisioned and `CRON_SECRET` set. The daily cron is declared in `vercel.json`.
- On first deploy, pages build with the current day's live data (cached under the `forecast` tag); the cron
  takes over refreshing daily.
- **Plan note:** Vercel **Hobby** cron fires once/day within the hour and is **non-commercial** per Vercel's
  ToS. For a commercial launch use **Pro** (~$20/mo) — minute-precise cron and ToS compliance. Open-Meteo's
  free tier is likewise non-commercial; check their terms if monetizing. Otherwise runtime cost is ~$0
  (a handful of KV ops + ~115 revalidations per day).

---

## Data status & caveats

- `data/spots.json` is a 20-waterbody launch-candidate seed with manual fetch fields. Before scaling,
  confirm launchability against Ontario Fishing Access Points / conservation-authority rules and replace
  manual fetch values with polygon-derived bearings/chords.
- Regulations shown are **dated convenience summaries** of Government of Ontario FMZ 16 rules, not the
  official source. Conditions change quickly — always check official forecasts and assess the water before
  launching (see `/disclaimer`).
