---
slug: kelso-reservoir
generated_at: 2026-07-19
schema_valid: true
species_emitted: 6
regs_verified: 2
regs_unverified: 0
gaps: 5
---

# Validation: Kelso Reservoir

## Schema conformance
- `slug`, `lake`, `province`, `fmz`, `waterbodyType` — PASS (kelso-reservoir / Kelso Reservoir / Ontario / 16 / reservoir)
- `coordinates` — PASS ({ lat: 43.5101, lng: -79.9467 })
- `morphology` (surfaceArea, maxDepth, meanDepth, clarity, trophicStatus, thermalBehaviour) — PASS (all keys present; nulls where 1a had no data)
- `bestSeason` — PASS
- `overview` — PASS (verbatim from 04-copy)
- `notableFacts[]` — PASS (4 items, each { fact, sourceUrl }; carried verbatim from 04-copy)
- `regulations[]` — PASS (2 items = carded species; each carries species/season/limit/sizeLimit/sourceUrl/effectiveDate/verified)
- `regsDisclaimer` — PASS (verbatim from snapshot header)
- `launches[]` — PASS (1 item; type "trailer-and-carry-in" ∈ enum)
- `species[]` — PASS (6 items = all gamefish scored in 1b; tiers ∈ enum)
- `keyResources[]` — PASS (3 items)
- `speciesCount` — PASS (2 = Destination + Strong cards; matches 04-copy frontmatter and the two carded species)
- `lastVerified`, `factCheckStatus`, `regsGate` — PASS (2026-07-19 / passed / passed, from Stage 2)
- No live/conditions fields emitted — PASS
- Isolated `tsc --noEmit --strict` against types.ts — PASS (exit 0)

## Regulations
- Verified species regs (verified: true): **Largemouth Bass** (fourth Saturday in June to November 30; S-6 / C-2 combined with Smallmouth; no size) and **Yellow Perch** (open all year; S-50 / C-25; no size). Both trace to the official ontario.ca FMZ 16 summary, effective 2025-12-08, re-verified live in Stage 2 Audit 4.
- Unverified (pointer only): **none** — matches Stage 2, which recorded zero `[UNVERIFIED]` regs and a passed regs gate.
- Per-species `speciesRules` (Largemouth, Yellow Perch) each carry the season/limit line (effective 2025-12-08), a "no waterbody exception" line (2025-12-08), and the Conservation Halton park-rule line (dated 2026-07-18, the source access date, since it is a park rule rather than a provincially dated regulation).

## Gaps (null fields)
- `morphology.maxDepth` — null: 1a max depth [NOT FOUND]; only an angler-reported "≥20 ft mid-lake" exists (user-contributed, not carried as an official figure).
- `morphology.meanDepth` — null: [NOT FOUND] in 1a.
- `morphology.clarity` — null: water clarity/colour [NOT FOUND] in 1a.
- `morphology.trophicStatus` — null: [NOT FOUND] in 1a.
- Per-species `qualitySignal` (both Strong species) — null: 1b found no citable quality signal (no survey/CPUE, trophy, tournament, or verified reservoir stocking); both species are correctly capped at Strong.
- (Present/Absent species — Smallmouth Bass, Northern Pike, Walleye, Black Crappie — carry empty `structure`/`sources` and null copy/sub-guide fields by schema design, for inverse search; not counted as data gaps.)

## Warnings
- **thermalBehaviour** is a substrate-faithful characterization ("shallow warm-water creek impoundment; no deep cold-water habitat and no documented stratification data"), not measured stratification data — carried because 1a explicitly characterizes the reservoir this way. No numbers invented.
- **Area 8 / Kelso Quarry conflation** (Stage 2 gotcha): the widely mis-attributed 2022–2025 stocking (brook/rainbow trout, perch, smallmouth) belongs to the adjacent, closed-to-fishing Area 8 quarry and is deliberately excluded from this profile. Any future edit must not import it into Kelso Reservoir.
- **Trout excluded from the reservoir profile**: reservoir trout are low-confidence; the documented trout story (steelhead below the dam, resident browns upstream) belongs to Sixteen Mile Creek, not the reservoir, and is not represented here.
- **Official stocking record UNVERIFIED at research time**: Fish ON-Line returned an expired TLS certificate and the stocking dataset endpoints 404'd (Stage 1a). No stocking is claimed for the reservoir; a future run should re-attempt Fish ON-Line. This does not affect any emitted field.
- **index.ts NOT modified** per orchestration rules — the orchestrator registers `kelso-reservoir` centrally. The profile is written and default-exported but not yet wired into `getLakeProfile`.
- **`launches[0].type`** set to "trailer-and-carry-in" to reflect the small ramp plus gravel-beach carry-in; note the reservoir is non-motorized (electric trolling motors excepted), captured in `notes`.
