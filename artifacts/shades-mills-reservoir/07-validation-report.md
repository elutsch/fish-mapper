---
slug: shades-mills-reservoir
generated_at: 2026-07-18
schema_valid: true
species_emitted: 6
regs_verified: 4 / regs_unverified: 0
gaps: 5
---
# Validation: Shades Mills Reservoir

## Schema conformance
- slug — PASS ("shades-mills-reservoir")
- lake — PASS ("Shades Mills Reservoir")
- province — PASS ("Ontario")
- fmz — PASS (16)
- waterbodyType — PASS ("reservoir")
- coordinates — PASS (lat 43.377629, lng -80.2836082; from data/spots.json OBJECTID 85121)
- morphology — PASS (surfaceArea set; maxDepth/meanDepth/clarity/trophicStatus/thermalBehaviour null — see Gaps)
- bestSeason — PASS
- overview — PASS (verbatim from 04-copy)
- notableFacts — PASS (5 facts, each with sourceUrl, verbatim from 04-copy)
- regulations — PASS (4 carded species; all verified:true, effectiveDate 2025-12-08)
- regsDisclaimer — PASS (verbatim from 04-copy snapshot header)
- launches — PASS (2 entries; types trailer-and-carry-in and carry-in)
- species — PASS (6 entries: 4 strong, 1 present, 1 absent)
- keyResources — PASS (5 entries, verbatim from 04-copy)
- speciesCount — PASS (4 = Destination + Strong; 0 destination + 4 strong)
- lastVerified — PASS ("2026-07-18", from Stage 2 generated_at)
- factCheckStatus — PASS ("passed", from Stage 2 overall_status)
- regsGate — PASS ("passed", from Stage 2 regs_gate)

## Regulations
- Verified species regs (verified: true): Largemouth & Smallmouth Bass (combined), Northern Pike, Black Crappie, Yellow Perch
- Unverified (pointer only): none — no [UNVERIFIED] regs in Stage 2; regs gate passed with all six FMZ 16 species verified verbatim against ontario.ca (effective 2025-12-08)
- Note: sizeLimit is null for all four carded regs — the substrate states "none stated" / no size limit for each, which maps to null per schema.

## Species carried through (by tier)
- Destination: (none)
- Strong (carded, full copy + sub-guides): Largemouth Bass, Northern Pike, Black Crappie, Yellow Perch
- Present (presence only, empty structure/sources, null sub-guides): Smallmouth Bass
- Absent (inverse search, empty/null): Walleye

## Gaps (null fields)
- morphology.maxDepth — null because 1a records [NOT FOUND]: no published bathymetry; Fish ON-Line depth contours unreachable (expired TLS cert).
- morphology.meanDepth — null because 1a records [NOT FOUND] (same reason).
- morphology.clarity — null because 1a records [NOT FOUND]: no documented clarity/colour data.
- morphology.trophicStatus — null because 1a records [NOT FOUND]: not documented.
- morphology.thermalBehaviour — null because 1a records [NOT FOUND]: no stratification/turnover documentation (a shallow 32-ha impoundment may mix rather than strongly stratify — general, unverified — so not asserted).

## Warnings
- All named structure derives from the official GRCA park-map layout plus one user-contributed angler report (OFC thread), not bathymetry or MNR survey data (Stage 2 non-blocking FLAG). Deep-water references are framed as general reservoir pattern; no card claims Destination and no quality signal is asserted (qualitySignal null on all species).
- Launch typing: schema has no "electric-only" launch type. The single ramp (electric/non-motorized only, trailerable) is typed "trailer-and-carry-in"; the electric-only property rule is preserved in notes and in each species' speciesRules.
- Smallmouth Bass is documented "plentiful" by GRCA but has zero located structure, so it is held at Present per Stage 1b (not carded).
- Card artwork: public/waterbodies/shades-mills-reservoir.webp EXISTS (present at generation time) — no missing-asset action required.
