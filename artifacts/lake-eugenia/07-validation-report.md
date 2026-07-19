---
slug: lake-eugenia
generated_at: 2026-07-19
schema_valid: true
species_emitted: 6
regs_verified: 2
regs_unverified: 0
gaps: 3
---

# Validation: Lake Eugenia

## Schema conformance
- `slug`, `lake`, `province`, `fmz`, `waterbodyType` — PASS (lake-eugenia / Lake Eugenia / Ontario / 16 / reservoir)
- `coordinates` — PASS ({ lat: 44.32667, lng: -80.49806 }, from Wikipedia; 1a carried no coordinate, fetched at Stage 7 to satisfy the non-nullable field)
- `morphology` — PASS (surfaceArea, maxDepth, meanDepth strings; clarity/trophicStatus/thermalBehaviour null — see Gaps)
- `bestSeason`, `overview` — PASS (verbatim from 04-copy)
- `notableFacts[3]` — PASS (each `fact` + `sourceUrl`, verbatim from 04-copy)
- `regulations[2]` — PASS (bass combined + yellow perch; season/limit/sizeLimit/sourceUrl/effectiveDate/verified all present; both `verified: true`)
- `regsDisclaimer` — PASS (verbatim template disclaimer)
- `launches[1]` — PASS (Canrobert St; type `trailer-and-carry-in`; notes + sourceUrl)
- `species[6]` — PASS (all six taxonomy gamefish emitted; see tiers below)
- `keyResources[4]` — PASS (official regs first; managing authorities; no forums/Tripadvisor)
- `speciesCount: 3` — PASS (matches Destination+Strong carded species: Smallmouth, Largemouth, Yellow Perch)
- `lastVerified` / `factCheckStatus` / `regsGate` — PASS (2026-07-19 / passed / passed, from Stage 2)
- Isolated `tsc --noEmit --strict` against types.ts — PASS (no errors). index.ts intentionally not modified (orchestrator registers centrally).

## Species (by tier)
- **strong (carded, full copy + sub-guide fields):** smallmouth-bass, largemouth-bass, yellow-perch
- **absent (empty structure/sources, null copy + sub-guide fields):** northern-pike, walleye, black-crappie
- No destination-tier or present-tier species. Absent species power "what's NOT here" inverse search.

## Regulations
- **Verified species regs (`verified: true`):** Largemouth & Smallmouth Bass (combined) — fourth Saturday in June to November 30, S-6 / C-2, no size limit; Yellow Perch — open all year, S-50 / C-25, no size limit. Both traced to ontario.ca FMZ 16, effective 2026-01-01.
- **Unverified (pointer only):** none. (Matches Stage 2 — no carded species was flagged `[UNVERIFIED]`.)
- Rainbow trout is NOT emitted: it is outside the six-gamefish taxonomy, was not carded, and its put-and-take/stocking reputation failed official verification in 1a/Stage 2.

## Gaps (null fields)
- `morphology.clarity` — null because 1a recorded [NOT FOUND] (no documented Secchi/clarity; character is heavily vegetated/soft-bottom but no measured value).
- `morphology.trophicStatus` — null because 1a recorded [NOT FOUND] (no MNR document; shallow flooded-farmland character is consistent with eutrophic but undocumented — not inferred per Stage 7 rules).
- `morphology.thermalBehaviour` — null because 1a recorded [NOT FOUND] (mean depth ~1.4 m implies little stratification, but no official confirmation; not inferred).

## Warnings
- **Surface area is a range, not a point value:** sources conflict (679.4 ha Angler's Atlas; 723 ha Adventure Fishing; 1,557 acres GPS Nautical Charts) and no official MNR figure exists — carried as "~680–720 ha (sources vary; no official figure)".
- **Coordinates sourced at Stage 7:** 1a carried no coordinate; lat/lng fetched from Wikipedia (44.32667, -80.49806) to satisfy the non-nullable schema field. Human reviewer may wish to confirm against the launch/lake-centre.
- **Regulations combine two carded species in one entry:** Largemouth and Smallmouth Bass share the single official combined FMZ 16 row, so `regulations[]` has 2 entries for 3 carded species (bass combined + perch) — mirrors 04-copy's Regulations snapshot exactly.
- **Access rule effectiveDate:** the per-species "Access" rule uses effectiveDate 2026-05-08 (the 2026 launch season open date) with the Grey Highlands source; it is a lake-specific access constraint, not a regulation, and is sourced to the municipality rather than ontario.ca.
- **Non-taxonomy "also present" species** (rock bass, pumpkinseed, brown bullhead, common carp) appear only as prose colour in 04-copy; they are not scored gamefish and are not emitted in `species[]`.
- **Northern pike:** emitted `absent` (not present) — presence rests only on an unverified forum claim with no documented catch; Stage 2 concurred. Revisit if an MNR/Fish ON-Line record later confirms presence.
