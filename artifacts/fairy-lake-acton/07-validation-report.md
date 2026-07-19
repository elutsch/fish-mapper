---
slug: fairy-lake-acton
generated_at: 2026-07-19
schema_valid: true
species_emitted: 6
regs_verified: 2 / regs_unverified: 0
gaps: 3
---
# Validation: Fairy Lake (Acton)

Stage 7 conversion of the Stage 5-passed Bite Club copy (04-lake-copy.md) and sub-guides (04b-species-subguides.md) into `lib/lakeProfiles/fairy-lake-acton.ts`. Overview, notable facts, regulations, species cards, sub-guides, and key-resource labels are carried verbatim from the verified substrate. Morphology, launches, and sources are carried from the verified 1a/02 substrate.

## Schema conformance
- slug / lake / province / fmz / waterbodyType — PASS
- coordinates — PASS (43.6248, -80.0485 — Angler's Atlas, verified Stage 2 Audit 1.2)
- morphology — PASS (nulls reported under Gaps; meanDepth "~1 m" and trophicStatus carried from the WQ Study, re-verified in Stage 2)
- bestSeason — PASS (from 04 frontmatter)
- overview — PASS (verbatim from 04-copy Overview)
- notableFacts — PASS (4 facts, verbatim, each with a non-angler source URL)
- regulations — PASS (2 carded species, effective-dated 2025-12-08, sourced to ontario.ca FMZ 16, verified: true)
- regsDisclaimer — PASS (verbatim from 04-copy Regulations snapshot intro)
- launches — PASS (1 carry-in entry from 1a Access & launches; gas motors prohibited)
- species — PASS (6 of 6 gamefish emitted, all tiers — powers inverse search)
- keyResources — PASS (4 entries, verbatim Bite Club labels; official regs link first; no angler forums, no operators)
- speciesCount — PASS (2 = Destination 0 + Strong 2, matches 04 frontmatter species_count and 1b counts 0/2/3/1)
- lastVerified / factCheckStatus / regsGate — PASS (2026-07-19 / passed / passed, from Stage 2)
- No live/conditions fields emitted — PASS
- Isolated type-check (`tsc fairy-lake-acton.ts types.ts --noEmit --strict --skipLibCheck`) — PASS (exit 0)

## Regulations
- Verified species regs: Largemouth Bass (bass combined; fourth Saturday in June to November 30; S-6/C-2); Black Crappie (open all year; S-30/C-10) — both verified verbatim against ontario.ca FMZ 16 (updated 2025-12-08); regs gate passed in Stage 2 Audit 4.
- Unverified (pointer only): none — matches Stage 2, which flags zero `[UNVERIFIED]` regs.
- Notes:
  - `regulations[]` carries one row per carded (Strong) species per the schema (per-species season/limit fields). The waterbody-exceptions ("none documented") and Southern Bait Management Zone lines from the 04-copy Regulations snapshot are carried as per-species `speciesRules` entries (verbatim from 04b), mirroring the conestogo-lake convention.
  - Both carded species carry `sizeLimit: null` — the FMZ 16 summary states no size limit for bass or crappie.

## Species mapping
- Smallmouth Bass — present — tier only (habitat eliminate profile; single-DB angler listing; powers inverse search)
- Largemouth Bass — strong — full card + 04b sub-guide (lede, howItFishes, 2 structureDetails, 3 speciesRules)
- Northern Pike — present — tier only (angler-documented but no named structure → capped at Present per 1b)
- Walleye — absent — tier only (habitat eliminate; anecdotal Fishbrain logs only)
- Black Crappie — strong — full card + 04b sub-guide (lede, howItFishes, 1 structureDetail, 3 speciesRules)
- Yellow Perch — present — tier only
- Mapping note (per Stage 5 FLAG V.6): the 04-copy "Also swimming around down there: northern pike … yellow perch … the odd smallmouth …" line is the stylized also-present line; it maps to the three Present-tier species above. The stylized sentence is not a schema field and is not carried as bodyCopy (Present-tier species carry no copy by rule 5).

## Gaps (null fields)
- morphology.maxDepth — null: 1a records no maximum-depth figure (only mean ~1 m; south end <2 m); the WQ Study PDF that would hold a max value 404s on direct fetch.
- regulations[Largemouth Bass].sizeLimit / regulations[Black Crappie].sizeLimit — null (no size restriction stated in the FMZ 16 summary; listed for completeness, not counted as data gaps).
- species[*].qualitySignal — null for both Strong species: the fishery rests entirely on angler-contributed data (Angler's Atlas, Fishbrain, angler blogs); no official MNR CPUE, trophy, stocking, or tournament quality signal exists, which is why both cap at Strong and none reaches Destination. The "Go for the Goby" derby targets invasive removal, not a gamefish quality signal.
- species[smallmouth-bass|northern-pike|walleye|yellow-perch].* copy/sub-guide fields — null/empty by rule 5 (Present/Absent tiers carry no copy).

## Warnings
- morphology.clarity is emitted as "clear" (1a: "clear, shallow-water ecosite"; crappie sight-fishing in "clear, shallow water"). Note the same water is heavily vegetated and characterized by the WQ Study as "productive … dominated by aquatic plants" — clear but weed-choked, not oligotrophic-clear. The enum cannot express that nuance; the overview and trophicStatus carry the full picture. Human may wish to confirm the enum choice.
- Species evidence ceiling: no MNR/MNRF fisheries assessment, creel survey, or stocking record was located for the Acton waterbody (Fish ON-Line not reached in Stage 1a). All tiers rest on angler-contributed data — the profile correctly caps at Strong with 0 Destination. Human reviewer should be aware the species list is community-sourced.
- Round goby first-identification date: 1a's original "August 2024" was softened in Stage 2 to "confirmed present by CVC (reported 2024)" because the cited CVC source confirms presence but states no month; the profile reflects the softened wording.
- Registry: per orchestrator coordination rules, `lib/lakeProfiles/index.ts` was NOT modified — the orchestrator registers profiles centrally. `fairy-lake-acton` is not yet wired into `index.ts` (confirmed absent). ACTION REQUIRED (orchestrator): add `import fairyLakeActon from './fairy-lake-acton';` and register `'fairy-lake-acton': fairyLakeActon`.
- Waterbody card artwork: `public/waterbodies/fairy-lake-acton.webp` already exists — no generation needed (and image generation is out of scope this run).
- Project-wide `tsc`/build intentionally NOT run (index.ts not wired to this file yet, per coordination rules). Type-correctness confirmed via isolated compile of `fairy-lake-acton.ts` + `types.ts` (exit 0) and field-for-field match against `conestogo-lake.ts`.
