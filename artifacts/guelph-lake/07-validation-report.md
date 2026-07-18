---
slug: guelph-lake
generated_at: 2026-07-18
schema_valid: true
species_emitted: 6
regs_verified: 2 / regs_unverified: 0
gaps: 8
---
# Validation: Guelph Lake

## Schema conformance
- slug — PASS ("guelph-lake")
- lake — PASS ("Guelph Lake")
- province — PASS ("Ontario")
- fmz — PASS (16)
- waterbodyType — PASS ("reservoir", matches taxonomy/lakes.md)
- coordinates — PASS ({ lat: 43.6123454, lng: -80.2508237 }, from data/spots.json)
- morphology — PASS (surfaceArea + clarity present; maxDepth/meanDepth/trophicStatus/thermalBehaviour null — see Gaps)
- bestSeason — PASS (carried from 04-copy frontmatter, verbatim)
- overview — PASS (carried verbatim from 04-copy)
- notableFacts — PASS (5 facts, each with sourceUrl; carried verbatim from 04-copy)
- regulations — PASS (2 carded-species regs; both verified)
- regsDisclaimer — PASS (carried verbatim from 04-copy snapshot)
- launches — PASS (2 launches; type enum values valid)
- species — PASS (6 objects, one per gamefish in Stage 1b taxonomy order)
- keyResources — PASS (4 resources; carried verbatim from 04-copy Key Resources)
- speciesCount — PASS (3 = Destination + Strong carded species)
- lastVerified — PASS ("2026-07-18", from Stage 2 generated_at)
- factCheckStatus — PASS ("passed", from Stage 2 overall_status)
- regsGate — PASS ("passed", from Stage 2 regs_gate)

## Regulations
- Verified species regs: Smallmouth & Largemouth Bass (combined); Northern Pike
- Unverified (pointer only): (none) — Stage 2 Audit 4 marked the regs gate PASSED with zero [UNVERIFIED] flags; every carded-species reg traced to the official Government of Ontario FMZ 16 summary and matched verbatim.
- Note: Walleye & Sauger, Black Crappie, and Yellow Perch zone regs exist in FMZ 16 but are NOT emitted as LakeProfile.regulations entries because those species are not carded (Walleye = Absent; Crappie/Perch = Present). Per the instruction, only carded (Destination/Strong) species carry regulations. This matches the Conestogo precedent (only its 3 carded species carried regs).

## Gaps (null fields)
- morphology.maxDepth — null because 1a marked it [NOT FOUND] (no published bathymetry in accessible public sources; contour maps only at GRCA gatehouse / paid apps).
- morphology.meanDepth — null because 1a marked it [NOT FOUND].
- morphology.trophicStatus — null because 1a marked it [NOT FOUND] (not formally documented by an authoritative source).
- morphology.thermalBehaviour — null because 1a marked it [NOT FOUND] as explicit stratification data (no turnover/thermocline data published; only inference, which is not carried).
- species[smallmouth-bass].qualitySignal — null because 1b found no citable quality signal (no MNR CPUE / official trophy / stocking / tournament); differentiator is angler-report popularity only.
- species[largemouth-bass].qualitySignal — null (same reason as above).
- species[northern-pike].qualitySignal — null (same reason as above).
- Walleye / Black Crappie / Yellow Perch sub-guide + copy fields (bestSeason, bodyCopy, qualitySignal, lede, howItFishes, structureDetails, speciesRules) — null, and structure/sources empty, by design: Walleye is Absent and Crappie/Perch are Present, so per schema they carry tier + empty structure/sources + null copy/sub-guide fields. (Counted as one design-driven gap group, not individual field gaps.)

## Warnings
- Surface area is a range, not a single figure: "~178.7 ha (Anglers Atlas; ~240 ha at full pool per GRCA)". Carried verbatim as a single string; the discrepancy reflects pool-level variation, not a data error (Stage 2 Audit 1.1/1.2 PASS).
- Coordinates (lat 43.6123454, lng -80.2508237) are the published Guelph Lake Boat Launch ramp coordinate from data/spots.json; spots.json reviewNotes flag it should be field-checked against the preferred fishing launch. Not a blocker.
- Walleye zone regulation (S-4/C-2, not more than 1 over 46 cm) is documented in FMZ 16 and in 1a, but Walleye is Absent in-lake and not carded, so no walleye regulation is emitted — consistent with the "only carded species carry regs" rule.
- One standing Stage 2 FLAG (hooklineandsinker.ca HTTP 403) underlies some largemouth/pike structure and the east-side carry-in access; these are angler-report leads, non-tier-load-bearing, and already tagged as such upstream. Carried as-is (no reg or tier rests on them).
- launches[1] (east-side carry-in) is sourced to an angler report; its sourceUrl points to the GRCA CA page (the official source for the CA), with the angler-report provenance noted in the notes field, since the schema requires a non-null sourceUrl.
- No waterbody card artwork (public/waterbodies/guelph-lake.webp) was generated this run — image generation not available in this environment. Recorded here as a missing asset for handoff.
