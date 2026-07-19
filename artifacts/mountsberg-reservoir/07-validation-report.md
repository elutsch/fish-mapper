---
slug: mountsberg-reservoir
generated_at: 2026-07-19
schema_valid: true
species_emitted: 6
regs_verified: 2 / regs_unverified: 0
gaps: 4
---
# Validation: Mountsberg Reservoir

Stage 7 conversion of the Stage 5-passed Bite Club copy (04-lake-copy.md) and sub-guides (04b-species-subguides.md) into a `LakeProfile` module. Overview, notable facts, regulations, species cards, sub-guides, and key-resource labels are carried verbatim from the verified substrate. Morphology, launches, and sources trace to 1a/02.

## Schema conformance (against lib/lakeProfiles/types.ts)
- slug / lake / province / fmz / waterbodyType — PASS
- coordinates — PASS (43.46, -80.0434 — Angler's Atlas, re-fetched Stage 2)
- morphology — PASS (nulls reported under Gaps)
- bestSeason — PASS ("Late-June bass opener through fall; pike in spring and fall", from 04 frontmatter)
- overview — PASS (verbatim from 04-copy Overview)
- notableFacts — PASS (4 facts, verbatim with source URLs)
- regulations — PASS (2 carded species — Largemouth Bass, Northern Pike — effective-dated, sourced, verified)
- regsDisclaimer — PASS (verbatim from 04-copy Regulations snapshot intro)
- launches — PASS (2 carry-in entries from 1a Access & launches)
- species — PASS (6 of 6 gamefish emitted, all tiers)
- keyResources — PASS (4 entries, verbatim Bite Club labels from 04-copy)
- speciesCount — PASS (2 = Destination 0 + Strong 2, matches 04 frontmatter species_count and 1b counts 0/2/3/1)
- lastVerified / factCheckStatus / regsGate — PASS (2026-07-19 / passed / passed, from Stage 2)
- No live/conditions fields emitted — PASS
- JSON audit form parses and mirrors the module — PASS
- Type-correctness — matched field-for-field against types.ts and conestogo-lake.ts; project-wide `tsc` intentionally NOT run per orchestrator coordination rule (index.ts not yet wired to this file)

## Regulations
- Verified species regs: Largemouth Bass; Northern Pike — both verified verbatim against ontario.ca FMZ 16 (updated 2025-12-08; effective 2026-01-01), re-fetched and confirmed at Stage 2 Audit 4; regs gate passed.
- Unverified (pointer only): none — matches Stage 2, which flags zero `[UNVERIFIED]` regs.
- Notes:
  - Both carded species carry `sizeLimit: "no size limit"` because 04-copy states "Size: no size limit" for each (FMZ 16 sets no size restriction on bass or pike). No size clause was invented.
  - Walleye is emitted as `absent` — the FMZ 16 walleye/sauger reg exists zone-wide but is not carried as a `LakeRegulation` row because walleye is not documented in Mountsberg (Stage 1b Absent; carried only for schema/inverse-search completeness).
  - Waterbody-exception ("none") and Southern Bait Management Zone / Conservation Halton live-bait lines are carried as per-species `speciesRules` entries (verbatim from 04b) rather than separate `LakeRegulation` rows, since the schema's regulation row is per-species with season/limit fields.

## Species mapping
- Smallmouth Bass — present — tier only (Conservation Halton lists it, but no smallmouth-specific structure or catch logs; powers inverse search)
- Largemouth Bass — strong — full card + 04b sub-guide (lede, howItFishes, 2 structureDetails, 3 speciesRules)
- Northern Pike — strong — full card + 04b sub-guide (lede, howItFishes, 2 structureDetails, 3 speciesRules)
- Walleye — absent — tier only (undocumented; habitat wrong)
- Black Crappie — present — tier only
- Yellow Perch — present — tier only
- Mapping note (per Stage 5): the 04-copy "Also finning around in the salad: smallmouth bass … black crappie … yellow perch" line is the stylized also-present line; it maps to the three Present-tier entries above and is NOT carried as bodyCopy (Present-tier species carry no copy by rule 5).

## Gaps (null fields)
- morphology.maxDepth — null because 1a records max/mean depth as [NOT FOUND] (no bathymetry located anywhere)
- morphology.meanDepth — null because 1a records max/mean depth as [NOT FOUND]
- morphology.clarity — null: the only clarity note in 1a is a low-trust angler "clear and heavily weeded" snippet, which conflicts with the shallow-marsh character; emitting any enum value would be a guess, so null (never a guess per rule 7)
- morphology.trophicStatus — null because 1a records no formal trophic classification ("functionally a shallow, weedy, warmwater marsh-reservoir")
- species[*].qualitySignal — null for both Strong species: 1b found no citable Destination-grade quality signal (no MNR CPUE, trophy, tournament, or stocking record; Fish ON-Line TLS cert expired, GeoHub stocking layer unreachable). Pike's watershed-study "management strategy" is a documented-abundance signal that supports Strong but is not a trophy/tournament signal; the promotional "5 lb largemouth / angler's mecca" line is excluded.
- species[smallmouth-bass|walleye|black-crappie|yellow-perch].* copy/sub-guide fields — null/empty by rule 5 (Present/Absent tiers carry no copy)

## Warnings
- Structure entries are feature-type / habitat-character (weedbeds, marsh bays, weed edges, weedless pockets), not named landmarks — the reservoir has no publicly documented named fishing structure; this is faithful to 1a, not a defect.
- The largemouth structureDetails entry carries the 04b parenthetical disclosure that the "overgrown side / weedless pockets" detail is an angler-report observation sitting inside the officially documented whole-lake marsh character.
- Standing FLAG 1.16 (CP Rail corridor): 1a lists a "shoreline along the CP rail line" structure for largemouth. It is intentionally NOT emitted as structure — the active rail corridor is illegal and dangerous to fish from; Stage 4 omitted it from the page and Stage 4b documented the omission. Human reviewers should keep it off any rendered structure list.
- Stocking / Fish ON-Line: no stocking record could be confirmed or ruled out (official source unreachable — TLS cert expired). No stocking claim is made; no Fish ON-Line Key Resource link is emitted (unlike the Conestogo gold standard, whose Fish ON-Line link was reachable).
- Waterbody card artwork: `public/waterbodies/mountsberg-reservoir.webp` already exists in the repo — no generation needed this run.
- Registry: `lib/lakeProfiles/mountsberg-reservoir.ts` was created and default-exports the profile, but per the orchestrator coordination rule it was NOT registered in `lib/lakeProfiles/index.ts` (the orchestrator registers profiles centrally to avoid parallel-run conflicts). This lake will not resolve via `getLakeProfile('mountsberg-reservoir')` until the orchestrator adds the import — expected and by design.
