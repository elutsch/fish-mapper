---
slug: wildwood-reservoir
generated_at: 2026-07-19
schema_valid: true
species_emitted: 6
regs_verified: 2
regs_unverified: 0
gaps: 5
---
# Validation: Wildwood Reservoir

## Schema conformance
- `slug`, `lake`, `province`, `fmz` (16), `waterbodyType` ("reservoir") — PASS
- `coordinates` { lat: 43.2519, lng: -81.0376 } — PASS (from 1a; verbatim)
- `morphology` — PASS (surfaceArea present; maxDepth/meanDepth/clarity/trophicStatus/thermalBehaviour null — see Gaps)
- `bestSeason`, `overview` — PASS (verbatim from 04-copy)
- `notableFacts[4]` — PASS (verbatim from 04-copy; all official sources; angler-report facts excluded)
- `regulations[2]` — PASS (Northern Pike, Yellow Perch; exact wording, official source, effective-dated, verified:true)
- `regsDisclaimer` — PASS (verbatim, template wording)
- `launches[2]` — PASS (trailer + carry-in; UTRCA boating source)
- `species[6]` — PASS (all six canonical gamefish emitted for inverse search)
- `keyResources[4]` — PASS (official regs first; task-specific pages; no forums/operators)
- `speciesCount: 2` — PASS (matches Destination+Strong cards: Northern Pike, Yellow Perch)
- `lastVerified` (2026-07-19), `factCheckStatus` ("passed"), `regsGate` ("passed") — PASS (from Stage 2)
- No live/conditions fields emitted — PASS
- TypeScript: `lib/lakeProfiles/wildwood-reservoir.ts` compiles clean under `tsc --strict --noEmit` (isolated check against `./types`). — PASS

## Regulations
- Verified species regs (verified: true): **Northern Pike**, **Yellow Perch** — both traced verbatim to the official Government of Ontario FMZ 16 summary (effective Dec 08, 2025; expressed as the 2026 licence year 2026-01-01 per the Conestogo/repo convention) and confirmed in Stage 2 Audit 4 (regs_gate passed).
- Unverified (pointer only): **none** — no `[UNVERIFIED]` flags exist in Stage 2. Matches Stage 2 exactly.
- Note: only carded (Strong) species carry a `regulations[]` entry, per schema. Smallmouth/Largemouth Bass (Present, combined bass reg) and Walleye/Black Crappie (Absent) are verified-accurate in 1a but not carded, so they are not emitted as `regulations[]` rows. Each carded species also carries its 3 effective-dated reg bullets in `speciesRules[]` (season/limit, waterbody exceptions, Southern BMZ bait).

## Species by tier (all emitted for inverse search)
- **Strong (carded, full copy + sub-guides):** Northern Pike, Yellow Perch
- **Present (no copy):** Smallmouth Bass, Largemouth Bass
- **Absent (no copy):** Walleye, Black Crappie
- Array order follows taxonomy order (smallmouth → largemouth → pike → walleye → black crappie → yellow perch).

## Gaps (null fields)
- `morphology.maxDepth` — null: 1a `[NOT FOUND — no bathymetric survey located]` (ice-angler 8–15 ft is an angler-report reference level, not a surveyed max depth).
- `morphology.meanDepth` — null: 1a not documented.
- `morphology.clarity` — null: 1a `[NOT FOUND]`; the primer's "turbid" signal was explicitly unverified, so no clarity enum is asserted.
- `morphology.trophicStatus` — null: 1a `[NOT FOUND — not formally documented]`.
- `morphology.thermalBehaviour` — null: 1a `[NOT FOUND — no stratification or winterkill documentation]`. (The downstream aerator is a Trout-Creek feature, not reservoir thermal behaviour — not asserted here.)

## Warnings
- **Also-present line mapping (Stage 5 FLAG V.6):** the copy's stylized "Also down there: smallmouth and largemouth bass ..." line maps to the two Present species — emitted here as `smallmouth-bass` and `largemouth-bass` with tier "present" and empty copy. Handled.
- **Effective-date convention:** the official source header states "Effective Date: December 08, 2025"; this profile expresses it as `2026-01-01` (2026 licence year) to match the gold-standard Conestogo profile. The underlying regs are identical and verified either way (Stage 2 Schema-deviation flag). Flag for human review only if cross-lake date-string consistency is required — 1a's frontmatter still reads `2025-12-08`.
- **Angler-sourced structure:** the dam-basin depths for pike and perch (15 ft; 12–15 ft) come from a single angler report (The Scientific Fisherman), carried as documented evergreen patterns with an explicit "no bathymetric chart exists" caveat in `structureDetails`. No named landmarks were invented.
- **Index registration:** per orchestration rules, `lib/lakeProfiles/index.ts` was NOT modified (the orchestrator registers profiles centrally). `wildwood-reservoir.ts` is written and type-correct but not yet wired into `lakeProfiles`; registration is the orchestrator's step.
- **Card art:** `public/waterbodies/wildwood-reservoir.webp` already exists — no image generated.
