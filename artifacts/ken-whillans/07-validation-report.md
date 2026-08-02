---
slug: ken-whillans
generated_at: 2026-08-01
schema_valid: true
species_emitted: 6
regs_verified: 2 / regs_unverified: 0
gaps: 7
---

# Validation: Ken Whillans Resource Management Area

## Schema conformance
- `slug`, `lake`, `province` — PASS (strings)
- `fmz: 16` — PASS (number)
- `waterbodyType: "reservoir"` — PASS (enum member) — closest-fit label for small managed ponds; see Warnings
- `coordinates` — PASS ({ lat: 43.812677, lng: -79.931809 }, from data/spots.json authoritative pin)
- `morphology` — PASS (all six fields present; all null — see Gaps)
- `bestSeason`, `overview` — PASS (non-empty strings, verbatim from 04-copy)
- `notableFacts[]` — PASS (5 objects; each { fact, sourceUrl })
- `regulations[]` — PASS (2 objects, one per carded species; each fully typed and `verified: true`)
- `regsDisclaimer` — PASS (verbatim template disclaimer, dated 2025-12-08)
- `launches[]` — PASS (1 object; type "carry-in")
- `species[]` — PASS (6 objects — all six canonical gamefish, taxonomy order)
- `keyResources[]` — PASS (4 objects; each { label, url })
- `speciesCount: 2` — PASS (equals Destination+Strong = 2)
- `lastVerified: "2026-08-01"` — PASS (Stage 2 generated_at)
- `factCheckStatus: "passed"` — PASS (Stage 2 overall_status)
- `regsGate: "passed"` — PASS (Stage 2 regs_gate)
- No live/conditions fields emitted — PASS

## Species (tiers, inverse-search coverage)
- smallmouth-bass — absent
- largemouth-bass — **strong** (full copy + sub-guide fields; structureDetails ×1, speciesRules ×2)
- northern-pike — **strong** (full copy + sub-guide fields; structureDetails ×1, speciesRules ×2)
- walleye — absent
- black-crappie — absent
- yellow-perch — present
All six canonical gamefish emitted so Present/Absent power inverse search. Rainbow trout (the site's
actual headline fishery) is deliberately NOT emitted — out of the six-gamefish scope.

## Regulations
- Verified species regs: Largemouth & Smallmouth Bass (combined); Northern Pike — both `verified: true`, official ontario.ca FMZ 16 source, effective 2025-12-08.
- Unverified (pointer only): none.
- Note: Yellow Perch is Present (not carded), so it carries no regulation entry (matches the "one per carded species" schema comment); its FMZ 16 season/limit is recorded in 01a for reference.

## Gaps (null fields)
- `morphology.surfaceArea` — null (1a NOT FOUND; two small ponds, no documented water area).
- `morphology.maxDepth` — null (1a NOT FOUND; no bathymetry).
- `morphology.meanDepth` — null (1a NOT FOUND).
- `morphology.clarity` — null (1a NOT FOUND; no Secchi/clarity measurement).
- `morphology.trophicStatus` — null (1a NOT FOUND).
- `morphology.thermalBehaviour` — null (1a NOT FOUND; small warm ponds, no data; no winter fishery).
- `species[].qualitySignal` — null for both Strong species (no MNR survey / trophy / tournament exists; Strong rests on named pond + differentiator, not a quality signal — correct, no in-scope species reaches Destination).

## Warnings
- **Waterbody type is an imperfect fit.** Ken Whillans is two small managed CVC ponds (Orchard Pond, Kidd Pond), not a lake or a dam reservoir. The WaterbodyType enum offers only reservoir | natural-lake | river, and pond origin (kettle / former aggregate pit / dug-impounded) is undocumented. "reservoir" is used as the closest honest label (a small constructed/managed impoundment) and overstates their scale. If a "pond" enum is ever added, this should switch.
- **LOW data richness.** No morphology figures and no quality signals. The page is intentionally short; do not treat null morphology as a defect.
- **Out-of-scope headline fishery.** The primary draw is a spring-stocked put-and-take rainbow trout program. It is referenced only as factual context in the overview and pike sub-guide; it carries no species entry, no tier, and no regulation line. This is by design (project "Option B").
- **Index registration deferred.** Per this run's coordination rules, `lib/lakeProfiles/index.ts` was NOT modified — the orchestrator registers `"ken-whillans": kenWhillans` centrally. The profile module is otherwise complete and default-exports a `LakeProfile`.
- **Card art present.** `public/waterbodies/ken-whillans.webp` exists (~110 KB). No image generation was needed or attempted.
- **Seed spots.json corrections to apply (orchestrator):** species should be largemouth bass (not smallmouth) + northern pike + yellow perch; waterbody type is an imperfect "reservoir"; the `electricOnly` motor rule is unconfirmed (CVC documents carry-in paddlecraft only).
