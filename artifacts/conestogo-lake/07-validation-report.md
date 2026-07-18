---
slug: conestogo-lake
generated_at: 2026-07-18
schema_valid: true
species_emitted: 6
regs_verified: 3 / regs_unverified: 0
gaps: 12
---
# Validation: Conestogo Lake

## Schema conformance
- slug — PASS (`conestogo-lake`)
- lake — PASS (`Conestogo Lake`)
- province — PASS (`Ontario`)
- fmz — PASS (`16`)
- waterbodyType — PASS (`reservoir`)
- coordinates — PASS (`43.687, -80.735` — authoritative lake-centre value per Stage 2 edit 1.6; FishAngler east-shore pin demoted)
- morphology — PASS (surfaceArea + clarity + thermalBehaviour present; maxDepth/meanDepth/trophicStatus null — see Gaps)
- bestSeason — PASS (`Late spring through summer`)
- overview — PASS (carried verbatim from 04-copy)
- notableFacts — PASS (4 facts, each with sourceUrl, verbatim)
- regulations — PASS (3 carded species, all `verified: true`, exact wording + sourceUrl + effectiveDate)
- regsDisclaimer — PASS (carried verbatim from 04-copy regulations snapshot)
- launches — PASS (2 entries: trailer double-ramp + carry-in; enum-valid `type`)
- species — PASS (6 emitted; typed to LakeProfileSpecies)
- keyResources — PASS (4 entries, verbatim from 04-copy)
- speciesCount — PASS (`3` = Destination 0 + Strong 3)
- lastVerified — PASS (`2026-07-18`, from Stage 2 generated_at)
- factCheckStatus — PASS (`passed`, from Stage 2 overall_status)
- regsGate — PASS (`passed`, from Stage 2 regs_gate)

TypeScript: `npx tsc --noEmit` produced no errors for `conestogo-lake.ts`. JSON parses cleanly (6 species, 3 regs, speciesCount 3).

## Regulations
- Verified species regs (verified: true, exact wording): Walleye; Northern Pike; Smallmouth Bass
- Unverified (pointer only): none — Stage 2 regs gate passed with zero `[UNVERIFIED]` flags; all three carded species traced verbatim to the official ontario.ca FMZ 16 source
- Note: Black Crappie and Yellow Perch are Present tier (not carded) and per schema carry no top-level `regulations[]` entry; their FMZ 16 zone regs exist in 1a but are not emitted because the regulations array is one-per-carded-species. This is by design, not a gap.

## Species emitted (all six gamefish, taxonomy order)
- Smallmouth Bass — strong — full copy + sub-guide (lede/howItFishes/structureDetails/speciesRules) + sources
- Largemouth Bass — absent — empty structure/sources, null sub-guide fields, null bodyCopy/bestSeason (reconciled to Absent per Stage 2 audit 2.1)
- Northern Pike — strong — full copy + sub-guide + sources
- Walleye — strong — full copy + sub-guide + sources
- Black Crappie — present — empty structure/sources, null sub-guide fields
- Yellow Perch — present — empty structure/sources, null sub-guide fields

## Gaps (null fields)
- morphology.maxDepth — null because 1a Morphology has [NOT FOUND] (no bathymetry figures located)
- morphology.meanDepth — null because 1a Morphology has [NOT FOUND] (no bathymetry figures located)
- morphology.trophicStatus — null because 1a Morphology has [NOT FOUND]
- Smallmouth Bass qualitySignal — null (Stage 1b: named structure but no reservoir-specific CPUE/trophy; capped at Strong, no citable quality signal)
- Northern Pike qualitySignal — null (Stage 1b: tournament category exists but no survey/trophy quality signal; Strong)
- Walleye qualitySignal — null (Stage 1b: quality signal applies to the below-dam river, not the reservoir; Strong)
- Largemouth Bass bestSeason / bodyCopy / structureDetails / speciesRules / lede / howItFishes — null (Absent tier; presence not established, no copy per instruction)
- Black Crappie bestSeason / bodyCopy / structureDetails / speciesRules / lede / howItFishes — null (Present tier; no sub-guide, no card copy)
- Yellow Perch bestSeason / bodyCopy / structureDetails / speciesRules / lede / howItFishes — null (Present tier; no sub-guide, no card copy)

(Gap count 12 = 3 morphology nulls + 3 Strong-species qualitySignal nulls + 3 species with the full null-sub-guide set (Largemouth/Crappie/Perch), counted as one gap group each; 6 individual field families.)

## Warnings
- No live/conditions fields emitted (verified: no temp/wind/level/AQHI/verdict). Stage 2 confirmed no live-data leak in the substrate.
- Coordinates use the authoritative lake-centre value (Wikipedia 43.687, -80.735) per Stage 2 edit 1.6, NOT the GRCA launch seed coordinate and NOT the demoted FishAngler east-shore pin. If the render layer wants a launch pin, the GRCA launch is at 43.7078767, -80.7707069 (in 1a) but is not part of the schema.
- Walleye personal-record (6 lb 5 oz) and brown-trout tailwater / walleye C&R advisory are below-dam/river features and were intentionally kept out of Notable Facts and the walleye card (Stage 4 FLAG 1.23 handling), consistent with the substrate.
- Largemouth Bass emitted as `absent` for inverse search only; a single user-contributed FishAngler catch is the sole mention and is insufficient to establish presence (Stage 2 audit 2.1, reconciled to Absent).
- Nebraska "Conestoga" habitat-enhancement structures were not imported (Stage 1a/2 contamination guard).
