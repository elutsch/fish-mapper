---
slug: laurel-creek-reservoir
generated_at: 2026-07-19
schema_valid: true
species_emitted: 6
regs_verified: 1 / regs_unverified: 0
gaps: 3
---
# Validation: Laurel Creek Reservoir

Stage 7 conversion of the Stage 5-passed Bite Club copy (04-lake-copy.md) and 04b sub-guides into a `LakeProfile` module. Overview, notable facts, regulations, the Largemouth card, its sub-guide, and key-resource labels are carried verbatim from the verified substrate. Regulations, launch, morphology, and species tiers trace to the verified 1a / 02 substrate. The module was written to match `lib/lakeProfiles/conestogo-lake.ts` field-for-field against `lib/lakeProfiles/types.ts`.

## Schema conformance
- slug / lake / province / fmz / waterbodyType — PASS (laurel-creek-reservoir / Laurel Creek Reservoir / Ontario / 16 / reservoir)
- coordinates — PASS (43.48642, -80.57513 — from 1a, Wikipedia CA coordinates)
- morphology — PASS (surfaceArea "101 ha", clarity "turbid", thermalBehaviour set; nulls reported under Gaps)
- bestSeason — PASS ("Late-June bass opener through fall", from 04 frontmatter)
- overview — PASS (verbatim from 04-copy Overview)
- notableFacts — PASS (5 facts, verbatim with source URLs)
- regulations — PASS (1 carded species — Largemouth & Smallmouth Bass combined — effective-dated 2025-12-08, sourced, verified true)
- regsDisclaimer — PASS (verbatim from 04-copy Regulations snapshot intro)
- launches — PASS (1 entry — carry-in / non-motorized, from 1a Access & launches)
- species — PASS (6 of 6 gamefish emitted, all tiers; taxonomy order)
- keyResources — PASS (4 entries, verbatim Bite Club labels from 04-copy)
- speciesCount — PASS (1 = Destination 0 + Strong 1, matches 04 frontmatter species_count and 1b counts 0/1/1/4)
- lastVerified / factCheckStatus / regsGate — PASS (2026-07-19 / passed / passed, from Stage 2)
- No live/conditions fields emitted — PASS
- Type-correctness — confirmed by field-for-field parity with the type-checked conestogo-lake.ts against types.ts (per coordination rule, no project-wide tsc run; index.ts intentionally left unmodified)

## Regulations
- Verified species regs: Largemouth & Smallmouth Bass (combined) — fourth Saturday in June to November 30; S-6 / C-2; no size limit — verified verbatim against ontario.ca FMZ 16 (effective 2025-12-08); regs gate passed in Stage 2 iteration 1.
- Unverified (pointer only): none — matches Stage 2, which flags zero `[UNVERIFIED]` regs.
- Notes:
  - Only one `LakeRegulation` row is emitted because Largemouth is the sole carded (Strong) species; Smallmouth is Present (no card). The single row is the combined bass regulation that governs both.
  - regulations[0].sizeLimit is null — the FMZ 16 bass regulation states no size limit.
  - The waterbody-exception ("none documented") and Southern Bait Management Zone lines from the Regulations snapshot are carried as per-species `speciesRules` entries on Largemouth (verbatim from 04b), matching the conestogo convention, since the `LakeRegulation` row is per-species with season/limit fields.

## Species mapping
- Smallmouth Bass — present — tier only (documented present but habitat-poor; no card by rule; powers inverse search). Maps the Stage 5 V.5 FLAG: the stylized "Also swimming around down there: Smallmouth Bass…" line is this Present-tier entry; the sentence itself is not a schema field and is not carried as bodyCopy.
- Largemouth Bass — strong — full card + 04b sub-guide (lede, howItFishes, 4 structureDetails, 3 speciesRules)
- Northern Pike — absent — tier only (undocumented; primer mention was a cross-lake mix-up — Stage 2 FLAG 1.14)
- Walleye — absent — tier only (undocumented, not stocked, wrong habitat)
- Black Crappie — absent — tier only (undocumented; GRCA lists crappie for Guelph Lake / Shade's Mills, not Laurel Creek)
- Yellow Perch — absent — tier only (not in MNRF ARA summary or any GRCA source)

## Gaps (null fields)
- morphology.maxDepth — null because 1a records max depth as [NOT FOUND] (no provincial bathymetry; ARA depth fields null)
- morphology.meanDepth — null because 1a publishes no single mean-depth figure (only a depth distribution: ~40% at 1.5–3 m, ~60% at ~1 m; ARA MEAN_DEPTH null)
- morphology.trophicStatus — null because 1a records trophic status as [NOT FOUND — not formally classified]
- regulations[0].sizeLimit — null (no size restriction stated in the FMZ 16 bass reg; listed for completeness, not counted among the 3 morphology gaps)
- species[largemouth-bass].qualitySignal — null: 1b found no citable quality signal (no MNR CPUE, trophy, tournament, or stocking); GRCA's "under-producing / limited" assessment is a quality ceiling, which is why Largemouth caps at Strong rather than Destination
- species[smallmouth-bass|northern-pike|walleye|black-crappie|yellow-perch].* copy/sub-guide fields — null/empty by rule (Present/Absent tiers carry no copy)

## Warnings
- morphology.clarity emitted as "turbid" — 1a documents the reservoir as "quite shallow, turbid" (GRCA Master Plan) and warm (MNRF ARA), so "turbid" is the correct enum, unambiguous here (unlike the stained/clear gradient at deeper GRCA reservoirs).
- Structure is habitat-type inferred, not landmark-named (standing Stage 2 FLAG 1.13) — no source ties species to structure; the Largemouth structure entries are documented cover types (stump fields, reedy shallows, submerged stumps, weeds) rather than named smallmouth-style landmarks. No invented structure.
- Storage figure suppressed (Stage 2 FLAG 1.2) — the Master Plan's "1.5 trillion litre" figure is a source typo and appears nowhere in the profile.
- Aggregator contamination excluded (Stage 2 FLAG 1.14) — no pike/walleye/crappie/perch/"lake trout"/"flathead catfish" presence imported; the four are emitted Absent for inverse search only.
- Regs effective date is 2025-12-08 (the FMZ 16 summary's stated effective date), differing from conestogo's module value of 2026-01-01; this matches Laurel Creek's own verified 1a/04 substrate and the live-fetched source. Human may wish to standardize the effective-date convention across the FMZ 16 lake set.
- Waterbody card artwork: `public/waterbodies/laurel-creek-reservoir.webp` already exists — no generation needed (and image generation is unavailable in this environment regardless).
- Registry: `lib/lakeProfiles/index.ts` was NOT modified per the run's coordination rule (orchestrator registers profiles centrally). `lib/lakeProfiles/laurel-creek-reservoir.ts` is written and default-exports the `LakeProfile`; it must be registered centrally before the build can resolve it.
- No project-wide `tsc`/build was run per coordination rule; type-correctness rests on field-for-field parity with the passing conestogo-lake.ts module.
