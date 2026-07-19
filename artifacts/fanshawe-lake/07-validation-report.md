---
slug: fanshawe-lake
generated_at: 2026-07-19
schema_valid: true
species_emitted: 6
regs_verified: 3
regs_unverified: 0
gaps: 3
---
# Validation: Fanshawe Lake

## Schema conformance
- `slug`, `lake`, `province`, `fmz`, `waterbodyType` — PASS (fanshawe-lake / Fanshawe Lake / Ontario / 16 / reservoir)
- `coordinates` `{ lat, lng }` — PASS (43.0583, -81.1786)
- `morphology` (all six keys present) — PASS
- `bestSeason` — PASS ("Late spring through fall")
- `overview` — PASS (carried verbatim from 04-copy)
- `notableFacts[]` (fact + sourceUrl) — PASS (4 facts, all sourced)
- `regulations[]` (species, season, limit, sizeLimit, sourceUrl, effectiveDate, verified) — PASS (3 entries, all verified true, all dated 2025-12-08)
- `regsDisclaimer` — PASS (verbatim from 04-copy)
- `launches[]` (name, type ∈ {trailer, carry-in, trailer-and-carry-in}, notes, sourceUrl) — PASS (1 trailer + 1 carry-in)
- `species[]` (LakeProfileSpecies × 6 — all gamefish in 1b, every tier) — PASS
- `keyResources[]` (label + url) — PASS (4 resources)
- `speciesCount` — PASS (4 = Destination 0 + Strong 4; matches carded species and 1b/04-copy)
- `lastVerified`, `factCheckStatus`, `regsGate` — PASS (2026-07-19 / passed / passed, from Stage 2)
- No live/conditions fields emitted — PASS
- Type-correctness: field-for-field match against `lib/lakeProfiles/types.ts` and `conestogo-lake.ts`; module evaluates cleanly to JSON (6 species objects, speciesCount 4). Per coordination rules, `npx tsc` / project build not run and `index.ts` not modified.

## Regulations
- Verified species regs (verified: true, dated 2025-12-08, official ontario.ca FMZ 16 source):
  - Smallmouth & Largemouth Bass — fourth Saturday in June to November 30 — S-6 / C-2 — no size limit
  - Northern Pike — January 1 to March 31 and second Saturday in May to December 31 — S-6 / C-2 — no size limit
  - Walleye — January 1 to March 15 and second Saturday in May to December 31 — S-4 / C-2, not more than 1 greater than 46 cm (combined with Sauger)
- Unverified (pointer only): none — Stage 2 flagged no `[UNVERIFIED]` regs; regs gate passed. No reg was invented, rounded, or completed.

## Species emitted (all six gamefish, for inverse search)
- Smallmouth Bass — strong — full copy + sub-guide (2 structure, 2 rules, 3 sources)
- Largemouth Bass — strong — full copy + sub-guide (2 structure, 2 rules, 2 sources)
- Northern Pike — strong — full copy + sub-guide (2 structure, 2 rules, 2 sources)
- Walleye — strong — full copy + sub-guide (2 structure, 2 rules, 4 sources)
- Black Crappie — present — no copy/sub-guide, empty structure/sources (correct per schema)
- Yellow Perch — present — no copy/sub-guide, empty structure/sources (correct per schema)
- No Absent gamefish in 1b — all six taxonomy parents are documented present.

## Gaps (null fields)
- `morphology.thermalBehaviour` — null: 1a marked stratification/turnover [NOT FOUND] for Fanshawe (no documented thermocline/winterkill data).
- `species[].bestSeason` / `bodyCopy` / `lede` / `howItFishes` / `structureDetails` / `speciesRules` for Black Crappie and Yellow Perch — null: Present-tier species carry no card or sub-guide by design.
- `regulations[].sizeLimit` for bass and pike is "no size limit" (explicit, from the copy), not null — noted for clarity; only informational, not a gap.

## Warnings
- Black crappie presence is angler-reported only (TripAdvisor forum), NOT on the official UTRCA species table — carried at tier `present` per 1b, with empty structure/sources. A human reviewer may wish to downgrade to `absent` if official survey data never confirms it; kept at `present` because angler documentation exists (Stage 2 FLAG 1.13, non-blocking).
- Stocking status unverified: Fish ON-Line / stocking GIS endpoints were unreachable during Stage 1a (TLS certificate expired), so no stocking Notable Fact or Fish ON-Line Key Resource is emitted (unlike the Conestogo profile). Walleye stocked-vs-native status is unknown. Not a schema gap.
- In-lake structure is anchored to documented reservoir morphology + per-species habitat notes rather than a labelled bathymetric map; structure strings are feature-type descriptions, not named landmarks (Stage 2 FLAG 1.17). No landmark was invented.
- Surface area differs between sources (~565 ac Anglers Atlas vs ~537 ac Adventure Fishing Maps); the profile uses the Anglers Atlas 228.6 ha / ~565 ac figure (Stage 2 FLAG 1.2). No reconciled number was invented.
- Per-species `speciesRules` intentionally carry only the two effective-dated official FMZ items (season/limit + waterbody-exceptions). The lake-specific motor rule and the UTRCA crayfish/baitfish caution from 04b are represented in `launches[].notes` and the 04b markdown but omitted from the typed `speciesRules[]` because they are standing conservation-area rules with no official effective date, and `SpeciesRule.effectiveDate` is a required non-null string — no date was invented to fill the field.
- Registration: `lib/lakeProfiles/index.ts` was NOT modified, per the parallel-run coordination rules — the orchestrator registers profiles centrally. `lib/lakeProfiles/fanshawe-lake.ts` is written and default-exports a `LakeProfile`.
