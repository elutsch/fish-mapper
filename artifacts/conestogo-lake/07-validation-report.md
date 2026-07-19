---
slug: conestogo-lake
generated_at: 2026-07-18
schema_valid: true
species_emitted: 6
regs_verified: 3 / regs_unverified: 0
gaps: 3
---
# Validation: Conestogo Lake

Regeneration run — the profile module was rebuilt so the rendered copy matches the new "Bite Club"-register 04-lake-copy.md and 04b-species-subguides.md (Stage 5 passed). Overview, notable facts, regulations, species cards, sub-guides, and key-resource labels are carried verbatim from the new substrate. Regulations, launches, morphology, and sources are unchanged from the verified 1a/02 substrate.

## Schema conformance
- slug / lake / province / fmz / waterbodyType — PASS
- coordinates — PASS (43.687, -80.735 — authoritative lake-centre value per fact-check edit 1.6)
- morphology — PASS (nulls reported under Gaps)
- bestSeason — PASS ("Late spring through summer", from 04 frontmatter)
- overview — PASS (verbatim from 04-copy Overview)
- notableFacts — PASS (4 facts, verbatim with source URLs)
- regulations — PASS (3 carded species, effective-dated, sourced)
- regsDisclaimer — PASS (verbatim from 04-copy Regulations snapshot intro)
- launches — PASS (2 entries from 1a Access & launches)
- species — PASS (6 of 6 gamefish emitted, all tiers)
- keyResources — PASS (4 entries, verbatim Bite Club labels from 04-copy)
- speciesCount — PASS (3 = Destination 0 + Strong 3, matches 04 frontmatter species_count)
- lastVerified / factCheckStatus / regsGate — PASS (2026-07-18 / passed / passed, from Stage 2)
- No live/conditions fields emitted — PASS
- `npx tsc --noEmit` — PASS (see Warnings for run record)

## Regulations
- Verified species regs: Walleye; Northern Pike; Smallmouth Bass — all verified verbatim against ontario.ca FMZ 16 (effective 2026-01-01); regs gate passed in Stage 2 iteration 1.
- Unverified (pointer only): none — matches Stage 2, which flags zero `[UNVERIFIED]` regs.
- Notes:
  - Walleye `sizeLimit` ("not more than 1 over 46 cm (18\")") is the size clause extracted from the verified limit line, which also remains intact in `limit`; no wording was altered.
  - Smallmouth Bass `sizeLimit` is null — no size restriction is stated in the substrate.
  - The waterbody-exception ("none documented") and Southern Bait Management Zone lines from the Regulations snapshot are carried as per-species `speciesRules` entries (verbatim from 04b) rather than as separate `LakeRegulation` rows, since the schema's regulation row is per-species with season/limit fields.

## Species mapping
- Smallmouth Bass — strong — full card + 04b sub-guide (lede, howItFishes, 2 structureDetails, 3 speciesRules)
- Largemouth Bass — absent — tier only (reconciled Absent per fact-check 2.1; powers inverse search)
- Northern Pike — strong — full card + 04b sub-guide
- Walleye — strong — full card + 04b sub-guide
- Black Crappie — present — tier only
- Yellow Perch — present — tier only
- Mapping note (per Stage 5): the 04-copy "Also swimming around down there: Black Crappie … Yellow Perch …" line is the stylized also-present line; it maps to the two Present-tier species entries above. The stylized sentence itself is not a schema field and is not carried as bodyCopy (Present-tier species carry no copy by rule 5); this was flagged by Stage 5 as a mapping note, not a defect.

## Gaps (null fields)
- morphology.maxDepth — null because 1a records max/mean depth as [NOT FOUND] (no bathymetry located)
- morphology.meanDepth — null because 1a records max/mean depth as [NOT FOUND]
- morphology.trophicStatus — null because 1a records trophic status as [NOT FOUND]
- regulations[Smallmouth Bass].sizeLimit — null (no size restriction stated in substrate; not counted as a gap, listed for completeness)
- species[*].qualitySignal — null for all three Strong species: 1b found no reservoir-specific citable quality signal (no MNR CPUE, trophy, or stocking), which is why all cap at Strong; FLAG 1.23 (angler PB walleye) is user-contributed and deliberately excluded
- species[largemouth-bass|black-crappie|yellow-perch].* copy/sub-guide fields — null/empty by rule 5 (Present/Absent tiers carry no copy)

## Warnings
- morphology.clarity is emitted as "stained", but the substrate describes a gradient — "stained up the river arms, clearer toward the dam". The enum ("clear" | "stained" | "turbid") cannot express the gradient; "stained" is the dominant character per 1a. The gradient is fully described in the overview and thermalBehaviour context. Human may wish to confirm this enum choice.
- Structure remains feature-type inferred, not landmark-named (standing FLAG 1.15) — the smallmouth structureDetails entry carries the 04b parenthetical disclosure verbatim.
- Waterbody card artwork: `public/waterbodies/conestogo-lake.webp` already exists in the repo — no generation needed this run (and image generation is unavailable in this environment regardless).
- Registry check: `lib/lakeProfiles/index.ts` contains exactly one entry each for `conestogo-lake` and `guelph-lake` — no changes required this run.
- `npx tsc --noEmit` run after regeneration: passed with no errors.
