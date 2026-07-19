---
slug: christie-lake
generated_at: 2026-07-19
schema_valid: true
species_emitted: 6
regs_verified: 2 / regs_unverified: 0
gaps: 4
---
# Validation: Christie Lake

Stage 7 conversion of the passed Bite Club-register copy (04-lake-copy.md / 04b-species-subguides.md, Stage 5 passed) into a `LakeProfile` module. Overview, notable facts, regulations, species cards, sub-guides, and key-resource labels are carried verbatim from the verified substrate. Morphology, launches, and sources trace to the verified 1a/02 substrate. The profile was hand-checked field-for-field against `lib/lakeProfiles/types.ts` and mirrors the conventions of `lib/lakeProfiles/conestogo-lake.ts`.

## Schema conformance
- slug / lake / province / fmz / waterbodyType — PASS ("christie-lake" / "Christie Lake" / "Ontario" / 16 / "reservoir")
- coordinates — PASS ({ lat: 43.283, lng: -80.011 } — reservoir centre per 1a LIO point query)
- morphology — PASS (surfaceArea set; maxDepth/meanDepth/clarity/trophicStatus null — reported under Gaps)
- bestSeason — PASS ("Summer through fall; fishing opens the fourth Saturday in June", from 04 frontmatter)
- overview — PASS (verbatim from 04-copy Overview)
- notableFacts — PASS (3 facts, verbatim with source URLs; angler-report "most-logged pike" deliberately excluded)
- regulations — PASS (2 carded species — Largemouth Bass, Northern Pike — effective-dated, sourced, verified true)
- regsDisclaimer — PASS (verbatim from 04-copy Regulations snapshot intro)
- launches — PASS (2 entries from 1a Access & launches; types "trailer-and-carry-in" and "carry-in" from the LakeLaunch enum)
- species — PASS (6 of 6 taxonomy gamefish emitted, all tiers)
- keyResources — PASS (4 entries, verbatim Bite Club labels from 04-copy)
- speciesCount — PASS (2 = Destination 0 + Strong 2, matches 04 frontmatter species_count and the two carded species)
- lastVerified / factCheckStatus / regsGate — PASS ("2026-07-19" / "passed" / "passed", from Stage 2)
- No live/conditions fields emitted — PASS
- Type-check: module hand-verified against types.ts field-for-field and against conestogo-lake.ts shape; JSON audit form parses cleanly (species 6, speciesCount 2, regs 2, launches 2, keyResources 4). Per run instructions, no project-wide `tsc`/build was executed (index.ts is not wired to this file in this run).

## Regulations
- Verified species regs: Largemouth Bass (combined bass reg); Northern Pike — both verified verbatim against ontario.ca FMZ 16 (page updated 2025-12-08; carried effective 2026-01-01, 2026 licence year); Stage 2 regs gate passed.
- Unverified (pointer only): none — matches Stage 2, which flags zero `[UNVERIFIED]` regs.
- Notes:
  - Only Largemouth Bass and Northern Pike are carded (the two Strong species), so only these two appear as `LakeRegulation` rows. The zone bass reg is combined largemouth/smallmouth; the row is labelled "Largemouth Bass" (the documented species) with "(combined with Smallmouth Bass)" in the limit field, verbatim from 04-copy.
  - The waterbody-exception, HCA spring-closure, electric-only, no-ice, and Southern Bait Management Zone lines are carried as per-species `speciesRules` entries (verbatim from 04b) rather than as separate top-level rows, matching the conestogo-lake convention (the schema's `LakeRegulation` row is per-species with season/limit fields). HCA property rules carry effectiveDate "2026-07-19" (verification date); provincial regs carry "2026-01-01".
  - The HCA "fish sanctuary" spring closure is emitted as an HCA-attributed property rule, explicitly distinguished from provincial regulation — never as a provincial sanctuary.

## Species mapping
- Smallmouth Bass — absent — tier only (undocumented on waterbody + poor habitat; powers inverse search)
- Largemouth Bass — strong — full card + 04b sub-guide (lede, howItFishes, 3 structureDetails, 4 speciesRules)
- Northern Pike — strong — full card + 04b sub-guide (lede, howItFishes, 2 structureDetails, 4 speciesRules)
- Walleye — absent — tier only (undocumented + wrong habitat + zero stocking)
- Black Crappie — present — tier only (HCA-listed; no differentiator)
- Yellow Perch — absent — tier only (presence undocumented for this reservoir; HCA list omits it, Fish ON-Line unreachable)
- Mapping note: the 04-copy "Also swimming around down there: Black Crappie …" line maps to the single Present-tier entry (Black Crappie). Present/Absent species carry no copy or sub-guide fields by rule.

## Gaps (null fields)
- morphology.maxDepth — null because 1a records max depth as [NOT FOUND] (no bathymetry located; Fish ON-Line unreachable)
- morphology.meanDepth — null because 1a records mean depth as [NOT FOUND] (the ~3 m volume-derived figure in 1a is flagged inference and deliberately not carried)
- morphology.clarity — null because 1a records water clarity as [NOT FOUND] for this reservoir (the "clear water" rating in search results belongs to the Perth Christie Lake and was excluded)
- morphology.trophicStatus — null because 1a records trophic status as [NOT FOUND]
- species[*].qualitySignal — null for both Strong species: 1b found no reservoir-specific citable quality signal (no MNR CPUE, documented trophy, tournament, or stocking); the pike "most-logged" Fishbrain figure is user-contributed and deliberately excluded, which is why both cap at Strong
- species[smallmouth-bass|walleye|black-crappie|yellow-perch].* copy/sub-guide fields — null/empty by rule (Present/Absent tiers carry no copy)

## Warnings
- morphology.clarity is null rather than a WaterClarity enum value: 1a has no documented clarity measurement for this reservoir. A shallow, warm, weedy impoundment is likely stained, but no source states it, so null is the honest emission. Human may confirm if a clarity source surfaces.
- Effective-date representation: 1a frontmatter records `regs_effective_date: 2025-12-08` (the FMZ 16 page's "Updated" date); the profile carries provincial regs at "2026-01-01" (2026 licence-year start), consistent with the FMZ 16 lake set and the gold-standard conestogo-lake profile. The underlying reg wording is unchanged and verbatim from the official source (re-fetched and cached this run at sources/ontario-fmz16-regs.md). Flagged per Stage 2 schema-deviation note.
- HCA vs provincial regs: the spring closure and no-ice/electric-only rules are HCA property rules, not provincial regulations. They are emitted as such in speciesRules with HCA source URLs. This distinction is load-bearing and should be preserved by any downstream renderer.
- Registry: per run instructions, `lib/lakeProfiles/index.ts` was NOT modified (the orchestrator registers profiles centrally; other lakes run in parallel). `lib/lakeProfiles/christie-lake.ts` is written and default-exports the profile, but is not yet imported in index.ts — this is expected and must be wired up centrally before the page renders.
- Waterbody card artwork: `public/waterbodies/christie-lake.webp` already exists — no generation needed (and image generation is out of scope for this run).
