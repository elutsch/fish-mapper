---
slug: saugeen-river-durham
generated_at: 2026-07-20
schema_valid: true
species_emitted: 6
regs_verified: 1
regs_unverified: 0
gaps: 6
---
# Validation: Saugeen River at Durham

## Schema conformance
- slug / lake / province / fmz — PASS
- waterbodyType: "river" — PASS (types.ts WaterbodyType includes "river")
- coordinates { lat: 44.1746, lng: -80.8184 } — PASS (from data/spots.json saugeen-river-durham entry — authoritative source per run instructions)
- morphology (all six fields present, all null) — PASS (river reach; lake-only basin fields correctly null)
- bestSeason (string) — PASS
- overview (string, verbatim from 04-copy) — PASS
- notableFacts[4] { fact, sourceUrl } — PASS
- regulations[1] { species, season, limit, sizeLimit, sourceUrl, effectiveDate, verified } — PASS
- regsDisclaimer (string) — PASS
- launches[1] { name, type: "carry-in", notes, sourceUrl } — PASS
- species[6] LakeProfileSpecies — PASS (all six taxonomy gamefish emitted, taxonomy order)
- keyResources[2] { label, url } — PASS
- speciesCount: 0 — PASS (Destination + Strong = 0; matches carded species)
- lastVerified / factCheckStatus "passed" / regsGate "passed" — PASS (from Stage 2)

## Regulations
- Verified species regs: Smallmouth & Largemouth Bass (fourth Saturday in June to November 30; S-6 / C-2; no size; effective 2025-12-08; official Government of Ontario FMZ 16 source).
- Unverified (pointer only): none — matches Stage 2 (no `[UNVERIFIED]` flags).
- Note: The bass reg is carried because smallmouth bass is the one in-scope species Present on this reach and is the applicable rule an angler would need; there are zero carded (Destination/Strong) species. Pike/walleye/crappie/perch regs are omitted from the profile because those species are Absent here.

## Gaps (null fields)
- morphology.surfaceArea — null (1a NOT FOUND: river reach, no basin surface area)
- morphology.maxDepth — null (1a NOT FOUND: no bathymetry for a flowing reach)
- morphology.meanDepth — null (1a NOT FOUND)
- morphology.clarity — null (river reach; not characterized as a still-water clarity class)
- morphology.trophicStatus — null (not applicable to a river reach)
- morphology.thermalBehaviour — null (river reach, not a stratified basin)
- species[].bodyCopy/lede/howItFishes/structureDetails/speciesRules — null for all six (no Destination/Strong species; nothing carded)

## Warnings
- Intentionally THIN profile: speciesCount 0, no species cards, no sub-guides. This is the correct, honest outcome — the Durham reach is a coldwater trout river and that headline fishery is OUT OF SCOPE for the six-gamefish taxonomy. Smallmouth is Present (marginal); the other five in-scope gamefish are Absent. Trout receive no tier and no species entry, per the run instructions.
- The trout-out-of-scope disclosure appears in the overview, notable facts, and the regulations note so the page is not misleading.
- Reach character (trout water, river widths, forage) is sourced to angler/guide editorial (ontariotroutandsteelhead.com), used for evergreen character only — never for regs or as a quality signal.
- index.ts was NOT modified (per coordination rules — the orchestrator registers the slug centrally).
- Card art public/waterbodies/saugeen-river-durham.webp already exists — not regenerated.
