---
slug: grand-river-west-montrose
generated_at: 2026-07-20
schema_valid: true
species_emitted: 6
regs_verified: 2
regs_unverified: 0
gaps: 6
---
# Validation: Grand River at West Montrose

## Schema conformance
- slug / lake / province / fmz — PASS
- waterbodyType — PASS ("river"; supported by types.ts WaterbodyType)
- coordinates — PASS ({ lat: 43.5866, lng: -80.4824 } — authoritative value from data/spots.json)
- morphology (all six fields present, all null) — PASS (river reach; no lake-basin fields apply)
- bestSeason / overview — PASS (verbatim from 04-copy)
- notableFacts[] (4, each fact + sourceUrl) — PASS
- regulations[] (2 carded species; season/limit/sizeLimit/sourceUrl/effectiveDate/verified) — PASS
- regsDisclaimer — PASS (effective 2025-12-08)
- launches[] (1; type "carry-in") — PASS
- species[] (6 gamefish, all tiers emitted) — PASS
- keyResources[] (3) — PASS
- speciesCount (2) matches Destination+Strong cards — PASS
- lastVerified / factCheckStatus ("passed") / regsGate ("passed") — PASS (from Stage 2)
- No live/conditions fields emitted — PASS

## Regulations
- Verified species regs: Smallmouth Bass, Northern Pike (both `verified: true`, official ontario.ca FMZ 16 source, effective 2025-12-08)
- Unverified (pointer only): none — no `[UNVERIFIED]` flags from Stage 2
- Note: the reach-specific special-regs boundary (upper-Grand artificial-lure/single-barbless-hook trout section ending "100 metres upstream of Highway 86 bridge," upstream of the covered bridge) is carried in each carded species' `speciesRules` as an official-source caution; the covered-bridge reach follows FMZ 16 zone defaults. The Paris–Brantford Grand River sanctuary is a downstream reach and is correctly NOT applied here.

## Gaps (null fields)
- morphology.surfaceArea — null (not applicable to a river reach)
- morphology.maxDepth — null (not applicable / no lake bathymetry; reach is qualitatively wide-and-shallow)
- morphology.meanDepth — null (not applicable to a river reach)
- morphology.clarity — null (running water; no lake-basin turbidity figure in 1a)
- morphology.trophicStatus — null (not applicable to a river reach)
- morphology.thermalBehaviour — null (no lake stratification; reach is a cold-to-warm transition — captured in overview, not a basin field)
- Present/Absent species (Largemouth Bass, Walleye, Black Crappie, Yellow Perch) carry empty structure/sources and null copy/sub-guide fields by design (only Destination/Strong carry copy).

## Warnings
- Waterbody type is `river` (not reservoir/natural-lake). Lake-basin morphology is intentionally all null; downstream renderers must handle a river profile with no surfaceArea/depth. Consistent with types.ts.
- Regulatory boundary (human review): the covered-bridge reach is placed BELOW the upper-Grand special-regs section based on the Highway 86 bridge being upstream of the covered bridge (corroborated by the covered-bridge access description and a canoe-account source, but not surveyed to the metre). The special-regs section terminus is quoted verbatim from ontario.ca. The `speciesRules` caution is written so anglers verify which side of the Highway 86 line they fish — this is the safe treatment regardless of metre-level position.
- Out-of-scope species (human review): the reach holds carp, white sucker, and bullhead (forage/rough fish), and the cold tailwater immediately upstream holds stocked brown and rainbow trout under special regs. None are among the six canonical gamefish and none are emitted.
- index.ts NOT modified (per coordination rules — orchestrator registers the slug centrally).
- Card art public/waterbodies/grand-river-west-montrose.webp already exists — not regenerated.
