---
slug: grand-river-brantford
generated_at: 2026-07-20
schema_valid: true
species_emitted: 6
regs_verified: 3 / regs_unverified: 0
gaps: 5
---
# Validation: Grand River at Brantford

## Schema conformance
- slug / lake / province / fmz — PASS
- waterbodyType: "river" — PASS (matches WaterbodyType union; correct for this reach)
- coordinates { lat: 43.1391, lng: -80.2707 } — PASS (authoritative lat/lng from data/spots.json)
- morphology (all fields present; nulls where n/a) — PASS
- bestSeason / overview — PASS (verbatim from 04-copy)
- notableFacts[4] { fact, sourceUrl } — PASS (verbatim from 04-copy)
- regulations[3] { species, season, limit, sizeLimit, sourceUrl, effectiveDate, verified } — PASS
- regsDisclaimer — PASS (template disclaimer + reach-boundary caveat; effective 2025-12-08)
- launches[1] { name, type:"carry-in", notes, sourceUrl } — PASS
- species[6] (all gamefish, taxonomy order) — PASS
- keyResources[4] { label, url } — PASS
- speciesCount: 3 (= Destination+Strong cards) — PASS
- lastVerified / factCheckStatus:"passed" / regsGate:"passed" — PASS (from Stage 2)
- Module loads and serializes cleanly via tsx (default export is a LakeProfile) — PASS
- No live/conditions fields emitted — PASS

## Regulations
- Verified species regs (verified: true): Smallmouth Bass, Northern Pike, Walleye — all governed by the official Grand River Paris-to-Brantford waterbody exception (S-0 / C-0 catch-and-release; artificial lures only; 1 barbless hook only; fish sanctuary March 1 to the Friday before the fourth Saturday in April), sourced to ontario.ca FMZ 16, effective 2025-12-08.
- Unverified (pointer only): none. (Matches Stage 2 — no [UNVERIFIED] flags.)
- Note: the reach's governing rule is the EXCEPTION, not the FMZ 16 zone-wide limits. The zone-wide limits are documented in the regsDisclaimer/species rules as the downstream (Brantford-to-Lake Erie) fallback with the "confirm which side of the pedestrian/service bridge" caveat.

## Gaps (null fields)
- morphology.surfaceArea — null (not applicable; flowing river reach, 1a NOT FOUND/n/a)
- morphology.maxDepth — null (not applicable; river reach — shallow wadeable riffles with deeper pools, no figure)
- morphology.meanDepth — null (not applicable; river reach)
- morphology.trophicStatus — null (not applicable; river reach)
- morphology.thermalBehaviour — null (no basin stratification; flowing reach with cold tributary input — no measured behaviour to state)
- (clarity set to "clear" from 1a's "generally clear to lightly stained flowing water" — rocky riffle-run reach.)
- Present-tier species (largemouth bass, black crappie, yellow perch) carry empty structure/sources and null copy/sub-guide fields by design (power inverse search).

## Warnings
- BOUNDARY (human review): The reach's catch-and-release exception applies upstream of the downtown Brantford "pedestrian and service bridge." The reach coordinate (43.1391, -80.2707) sits upstream (north/west) of the downtown Lorne Bridge and Brant's Crossing pedestrian bridge, placing it within the exception — but the exact bridge boundary is not coordinate-pinned in the official source. The profile shows the verbatim boundary and the "confirm which side" caveat. A human should confirm the exact downstream boundary bridge before publish.
- CHANNEL CATFISH (out of scope): Documented and locally renowned below the Brantford dam, but not in the six-species taxonomy — deliberately given no tier and no species entry; appears only as Overview prose (fishery character), per instructions.
- LARGEMOUTH BASS: Marked Present (not Absent) on documented river-wide angler logs despite marginal habitat in this flowing riffle-run reach; carries no card, empty structure/sources.
- Card art public/waterbodies/grand-river-brantford.webp already exists — not regenerated.
- index.ts NOT modified (central orchestrator registers the slug); profile is otherwise complete and self-consistent.
