---
slug: puslinch-lake
generated_at: 2026-07-19
schema_valid: true
species_emitted: 6
regs_verified: 2
regs_unverified: 0
gaps: 3
---
# Validation: Puslinch Lake

## Schema conformance
- **slug / lake / province / fmz** — PASS ("puslinch-lake" / "Puslinch Lake" / "Ontario" / 16)
- **waterbodyType** — PASS ("natural-lake", a valid `WaterbodyType`; confirmed by Stage 1a, kettle lake, no dam)
- **coordinates** — PASS ({ lat: 43.4166, lng: -80.2651 } from 1a)
- **morphology** — PASS (surfaceArea, maxDepth, meanDepth, trophicStatus, thermalBehaviour populated; `clarity: null` — see Gaps)
- **bestSeason** — PASS ("Spring through fall")
- **overview** — PASS (carried verbatim from 04-lake-copy.md, post-Stage-5)
- **notableFacts** — PASS (5 entries, each `{ fact, sourceUrl }`, verbatim from copy; no angler-report facts)
- **regulations** — PASS (2 carded species; each carries season, limit, sizeLimit, sourceUrl, effectiveDate, verified)
- **regsDisclaimer** — PASS (mandatory disclaimer, verbatim)
- **launches** — PASS (empty array — no public launch exists; see Warnings)
- **species** — PASS (6 `LakeProfileSpecies`, all taxonomy gamefish, taxonomy order; Strong carry full copy + sub-guide fields; Present carry empty structure/sources and null sub-guide fields)
- **keyResources** — PASS (4 entries `{ label, url }`; official regs link first)
- **speciesCount** — PASS (2 = Destination + Strong carded species = Largemouth Bass + Northern Pike)
- **lastVerified / factCheckStatus / regsGate** — PASS ("2026-07-19" / "passed" / "passed", from Stage 2)
- Type-correctness confirmed by field-for-field match against `lib/lakeProfiles/types.ts` and the `conestogo-lake.ts` reference (no project-wide build run, per coordination rules; JSON form validated to parse).

## Regulations
- **Verified species regs (verified: true):** Largemouth & Smallmouth Bass (combined); Northern Pike. Both match the official Government of Ontario FMZ 16 summary verbatim (Stage 2 Audit 4 PASS; page updated 2025-12-08, 2026 licence year).
- **Unverified (pointer only):** none — matches Stage 2 exactly (no `[UNVERIFIED]` regs flags were raised).

## Gaps (null fields)
- **morphology.clarity — null** — Stage 1a explicitly recorded water clarity/Secchi as `[NOT FOUND]` (no sourced figure). Eutrophic character with algal blooms implies reduced summer clarity, but no sourced value exists, so `null` per the "null for missing, never a guess" rule. (The eutrophic status is captured in `trophicStatus`.)
- **species[].qualitySignal — null for all species** — no citable official quality signal (MNR broadscale survey, tournament, active stocking, or documented trophy) exists for any species in the substrate; correctly `null`. This is the ceiling that caps Largemouth and Pike at Strong (0 Destination), consistent with Stage 1b and Stage 2 Audit 3.
- **Present species (Smallmouth Bass, Walleye, Black Crappie, Yellow Perch) — copy/sub-guide fields null; structure/sources empty** — correct by schema: only Destination/Strong carry copy and sub-guide fields. These four are emitted at `tier: "present"` to power inverse ("what's not here") search.

## Warnings
- **launches: [] (empty)** — Puslinch Lake has had NO public boat launch since the McClintock's closure of July 14, 2020; the shoreline is private and the Travelled Road right-of-way is pedestrian-only (Stage 1a: "There is currently no public boat launch on Puslinch Lake"). An empty `launches` array is the honest representation. Downstream renderers/UI should not imply drive-up boat access. This access constraint is surfaced in the Overview, the Key Resources access link, and both carded species' `speciesRules` (access bullet, effective 2020-07-14).
- **Present-species mapping** — the Stage 4/5 "Also finning around the weeds:" line (Bite Club styling of template's `Also present:` line) covers Walleye, Black Crappie, Yellow Perch, and Smallmouth Bass; all four are emitted as `tier: "present"`. No card copy was carried onto them (correct).
- **Smallmouth Bass Present vs Absent** — kept `present` per Stage 1b/Stage 2 (documented but rare, failed 1946–1960 stockings; poor eutrophic/weed/silt habitat fit). A defensible borderline call, flagged here for human awareness; not emitted as `absent` because presence is documented.
- **index.ts NOT modified** — per coordination rules, `lib/lakeProfiles/index.ts` was left untouched; the orchestrator registers `puslinch-lake` centrally. This profile is not yet wired into the build.
- **Card art** — `public/waterbodies/puslinch-lake.webp` already exists; no image generated.

## Files written
- `lib/lakeProfiles/puslinch-lake.ts` (default-exports a `LakeProfile`)
- `artifacts/puslinch-lake/07-data.json`
- `artifacts/puslinch-lake/07-validation-report.md`
