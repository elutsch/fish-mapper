---
slug: pinehurst-lake
generated_at: 2026-08-02
schema_valid: true
species_emitted: 6
regs_verified: 2
regs_unverified: 0
gaps: 4
---
# Validation: Pinehurst Lake

## Schema conformance
- slug / lake / province / fmz / waterbodyType — PASS (waterbodyType "natural-lake")
- coordinates — PASS ({ lat: 43.26741, lng: -80.39394 } — authoritative from data/spots.json)
- morphology (surfaceArea, maxDepth, meanDepth, clarity, trophicStatus, thermalBehaviour) — PASS (nullable fields null where 1a had no source)
- bestSeason / overview — PASS (overview carried verbatim from 04-copy)
- notableFacts[] (fact, sourceUrl) — PASS (5 facts, verbatim from 04-copy)
- regulations[] (species, season, limit, sizeLimit, sourceUrl, effectiveDate, verified) — PASS (2 carded species; both verified: true)
- regsDisclaimer — PASS (standard wording, effective 2025-12-08, FMZ 16)
- launches[] (name, type, notes, sourceUrl) — PASS (1 launch; type "carry-in"; non-motorized)
- species[] (LakeProfileSpecies × 6, all tiers) — PASS (all six canonical gamefish emitted for inverse search)
- keyResources[] (label, url) — PASS (3 resources; official regs first)
- speciesCount / lastVerified / factCheckStatus / regsGate — PASS (2 / 2026-08-02 / passed / passed)
- Matched field-for-field against lib/lakeProfiles/conestogo-lake.ts and lib/lakeProfiles/types.ts. No live/conditions fields emitted.

## Regulations
- Verified species regs (verified: true): Largemouth & Smallmouth Bass (fourth Saturday in June to Nov 30; S-6 / C-2; no size); Black Crappie (open all year; S-30 / C-10; no size). Both sourced to ontario.ca FMZ 16, effectiveDate 2025-12-08.
- Unverified (pointer only): none — matches Stage 2 (no `[UNVERIFIED]` flags). regsGate: passed.

## Gaps (null fields)
- morphology.meanDepth — null because 1a had no sourced mean-depth figure ([NOT FOUND]).
- morphology.clarity — null because 1a had no sourced Secchi/colour figure ([NOT FOUND]).
- morphology.trophicStatus — null because 1a found no documented trophic classification ([NOT FOUND]).
- morphology.thermalBehaviour — null because 1a found no sourced stratification/thermocline statement (only inference from ~35 ft depth; [NOT FOUND]).
- Per-species null sub-guide fields (bestSeason/bodyCopy/qualitySignal/lede/howItFishes/structureDetails/speciesRules) on Smallmouth Bass, Northern Pike, Walleye (absent) and Yellow Perch (present) — correct: only Destination/Strong carry copy + sub-guides.
- qualitySignal null on both Strong species — correct: no citable official quality signal exists (tiers cap at Strong per Stage 1b / Stage 2 Audit 3).

## Warnings
- HUMAN REVIEW — Yellow Perch presence is thinly documented: it is in the data/spots.json species list but is NOT named by GRCA, Anglers Atlas, or Fishbrain. Emitted as tier "present" (powers inverse search) per the seed record + plausibility, but consider whether data/spots.json should drop yellow perch. (Do not edit spots.json in this run.)
- Source disagreements (non-blocking, GRCA preferred): surface area 9 ha (GRCA) vs 10.7 ha (Anglers Atlas community); boat-launch count one (GRCA) vs three (Anglers Atlas community). Profile uses GRCA figures.
- No named in-lake structure (points/shoals/bays) is published for this small kettle lake; structure entries are habitat-type (weedy shallows, dock/pier cover, the ~35 ft basin). data_richness: MEDIUM.
- Coordinates: profile lat/lng (43.26741, -80.39394) taken from data/spots.json per convention; nearby published points differ slightly (Anglers Atlas 43.2695/-80.3899; Fishbrain 43.2698/-80.3903) — spots.json is authoritative and the seed note recommends a field-check before production.
- Card art: public/waterbodies/pinehurst-lake.webp EXISTS (109 KB) — no image generation needed.
- lib/lakeProfiles/index.ts NOT modified (per coordination rules — orchestrator registers centrally). The module default-exports a LakeProfile and is ready to register as 'pinehurst-lake'.
