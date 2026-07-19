---
slug: island-lake-orangeville
generated_at: 2026-07-19
schema_valid: true
species_emitted: 6
regs_verified: 3
regs_unverified: 0
gaps: 4
---
# Validation: Island Lake (Orangeville Reservoir)

## Schema conformance
- slug / lake / province / fmz / waterbodyType — PASS
- coordinates {lat, lng} — PASS (43.9273, -80.0751 from data/spots.json — authoritative pin, NOT the Anglers Atlas angler pin)
- morphology {surfaceArea, maxDepth, meanDepth, clarity, trophicStatus, thermalBehaviour} — PASS (3 populated, 3 null; clarity null is a valid WaterClarity|null)
- bestSeason / overview — PASS (verbatim from 04-copy)
- notableFacts[] (6) — PASS (each has fact + sourceUrl, verbatim from 04-copy)
- regulations[] (3) — PASS (each carded species; season/limit/sizeLimit/sourceUrl/effectiveDate/verified present)
- regsDisclaimer — PASS (verbatim; effective 2025-12-08)
- launches[] (2) — PASS (types "trailer" and "carry-in" are valid LakeLaunch types)
- species[] (6) — PASS (all six taxonomy gamefish parents emitted; tiers match 1b/Stage 2)
- keyResources[] (5) — PASS
- speciesCount (3) — PASS (matches Destination + Strong cards: Pike + Largemouth + Crappie)
- lastVerified / factCheckStatus / regsGate — PASS ("2026-07-19" / "passed" / "passed" from Stage 2)
- No live/conditions fields emitted — PASS
- Registered in lib/lakeProfiles/index.ts — PASS (import + record entry already present; added centrally by the orchestrator, not modified by this run)

## Regulations
- Verified species regs (verified: true): Northern Pike; Largemouth & Smallmouth Bass (combined); Black Crappie — all on the official ontario.ca FMZ 16 summary, effective 2025-12-08.
- Unverified (pointer only): none. (Matches Stage 2 — no `[UNVERIFIED]` regs flags.)
- CVC property rules (largemouth catch-and-release, boat-access-only, bait/shore restrictions) carried as species speciesRules and launch notes, sourced to cvc.ca and kept distinct from the provincial season/limit — not stated as provincial law.

## Gaps (null fields)
- morphology.meanDepth — null: 1a has no formal mean depth (only "much of the lake ~6 ft", a qualitative descriptor, not a survey mean).
- morphology.clarity — null: 1a marked water clarity [NOT FOUND]; stained is an origin-based inference, not a measured value, so not emitted.
- morphology.trophicStatus — null: 1a [NOT FOUND].
- morphology.thermalBehaviour — null: 1a [NOT FOUND] (shallow reservoir; stratification/winterkill undocumented).
- Present/Absent species (Smallmouth, Walleye, Yellow Perch) carry empty structure/sources and null copy/sub-guide fields by design — they power inverse "what's NOT here" search.

## Warnings
- ACCESS DISCREPANCY (human review): data/spots.json marks this waterbody `launch.trailer: false, carryIn: true`, and its reviewNotes say "Confirm carry-in/rental launch assumptions with current CVC access rules." The CVC boating page (authoritative) documents BOTH a trailer boat launch ($8+HST, concrete + dock) and a free hand launch at lot P1, so the profile emits both launches per CVC. Recommend reconciling the spots.json `trailer` flag with the CVC page.
- COORDINATE NOTE: Anglers Atlas lists an angler-platform pin (43.9388, -80.0813) that differs from the spots.json pin used here (43.9273, -80.0751). Per run conventions, the authoritative spots.json coordinate is used; the AA pin was not used.
- MORPHOLOGY SOURCE TIER: surfaceArea (~180 ha) and maxDepth (~20–22 ft) rest on a commercial fishing-map product description and a hiking blog (two independent sources agreeing), plus Anglers Atlas — not an official bathymetric survey. Carried as documented character; flagged for a human to upgrade if an MNR bathymetry source is later found.
- ELECTRIC-MOTOR RULE: gas motors are confirmed banned, but CVC does not explicitly state whether privately launched electric motors are permitted (rentals discontinued). Launch note says "paddle or electric only" reflecting the gas ban; confirm the electric-motor allowance if it becomes material.
- Card artwork public/waterbodies/island-lake-orangeville.webp already exists per run instructions — no image generated.
