---
slug: pittock-lake
generated_at: 2026-07-19
schema_valid: true
species_emitted: 6
regs_verified: 3
regs_unverified: 0
gaps: 3
---
# Validation: Pittock Lake

## Schema conformance
Validated field-for-field against `lib/lakeProfiles/types.ts` (the source of truth) and matched against `lib/lakeProfiles/conestogo-lake.ts` conventions. Not run through project-wide `tsc` per coordination rules (index.ts is not wired to this file yet); `07-data.json` parses cleanly and mirrors the module.

- `slug`, `lake`, `province`, `fmz`, `waterbodyType` — PASS (pittock-lake / Pittock Lake / Ontario / 16 / reservoir)
- `coordinates {lat,lng}` — PASS (43.1625, -80.732)
- `morphology {surfaceArea, maxDepth, meanDepth, clarity, trophicStatus, thermalBehaviour}` — PASS (maxDepth, meanDepth null; clarity "turbid" ∈ WaterClarity)
- `bestSeason`, `overview` — PASS (carried verbatim from 04-copy)
- `notableFacts[]` (fact, sourceUrl) — PASS (4 entries, verbatim from 04-copy)
- `regulations[]` (species, season, limit, sizeLimit, sourceUrl, effectiveDate, verified) — PASS (3 entries; all verified: true)
- `regsDisclaimer` — PASS (template wording, effective 2025-12-08)
- `launches[]` (name, type ∈ trailer|carry-in|trailer-and-carry-in, notes, sourceUrl) — PASS (3 entries: 2 trailer, 1 carry-in)
- `species[]` (LakeProfileSpecies) — PASS (6 entries, all six taxonomy gamefish, taxonomy order)
- `keyResources[]` (label, url) — PASS (5 entries, official regs first)
- `speciesCount` — PASS (4 = Destination+Strong card count)
- `lastVerified`, `factCheckStatus`, `regsGate` — PASS (2026-07-19 / passed / passed, from Stage 2)
- No live/conditions fields present — PASS

## Regulations
- **Verified species regs (verified: true):** Largemouth & Smallmouth Bass (combined), Northern Pike, Yellow Perch — all sourced to the official ontario.ca FMZ 16 summary, effective 2025-12-08, re-verified via WebFetch in Stage 2 (Audit 4, regs_gate passed) and cached at `artifacts/pittock-lake/sources/ontario-fmz16-regs.md`.
- **Unverified (pointer only):** none. No species carries an `[UNVERIFIED]` flag — matches Stage 2 exactly (0 regs FAILs).
- **Waterbody exception carried:** the FMZ 16 spring fish sanctuary on the Thames River between the Gordon Pittock dam and the Highway 59 bridge — captured in each carded species' `speciesRules` and correctly scoped as the downstream tailwater, NOT the reservoir.

## Gaps (null fields)
- `morphology.maxDepth` — null because 1a marked max depth [NOT FOUND] (no fetchable bathymetry; a Great Lakes Guide "~30 ft" snippet was [UNVERIFIED] and not carried).
- `morphology.meanDepth` — null because 1a had no mean-depth figure.
- Species sub-guide fields on Present species (`walleye`, `black-crappie`): `bestSeason`, `bodyCopy`, `qualitySignal`, `lede`, `howItFishes`, `structureDetails`, `speciesRules` all null and `structure`/`sources` empty — correct per schema (only Destination/Strong carry copy; these two are Present).
- `qualitySignal` null on all four carded species — correct: 1b found named structure for each but no reservoir-specific survey CPUE / trophy / tournament / stocking signal, so all capped at Strong (0 Destination).

## Warnings
- **Surface area is the summer pool.** `surfaceArea: "~452 ha (summer pool)"` uses the better-provenanced IBA summer figure; Anglers Atlas lists 209 ha, consistent with the large seasonal drawdown (per Stage 2 FLAG 1.2). The 209 ha figure is deliberately not carried.
- **Yellow Perch is the weakest Strong.** Its Strong tier rests on managing-authority (UTRCA) headline billing + the 2016 constructed spawning habitat + a documented shore/ice fishery, not a survey-grade signal (Stage 2 Audit 3.6, MEDIUM confidence). Flagged for a human eye if a stricter Present reading is preferred; does not affect regs or schema validity.
- **Walleye presence is thin.** Walleye is emitted as Present (per 1b/Stage 2): named as a 2016 habitat-project target and in angler species lists, but with no confirmed catch base, MNR survey, or stocking record. It powers inverse search only; no copy is attached.
- **`speciesRules` access/bait bullet effectiveDate.** The third `speciesRules` bullet on each carded species (VHS baitfish + north-shore-only launch / drawdown / swimming-advisory) is a standing advisory sourced to the Pittock CA day-use page, not a dated statute; its `effectiveDate` is set to the verification date "2026-07-19". The two statutory reg bullets per species use the official effective date "2025-12-08".
- **Also-present line mapping.** The 04-copy stylized "Also swimming around down there: …" line was mapped to the two Present species fields (walleye, black-crappie) per the Stage 5 V.8 FLAG.
- **Not registered in index.ts.** Per coordination rules, `lib/lakeProfiles/index.ts` was NOT modified — the orchestrator registers `pittock-lake` centrally. Card art `public/waterbodies/pittock-lake.webp` already exists; no image generated.
