---
slug: island-lake-orangeville
lake: Island Lake
province: Ontario
fmz: 16
generated_at: 2026-07-19
iteration: 1
total_claims_checked: 28
pass_count: 24
fail_count: 0
flag_count: 4
regs_gate: passed
edits_applied: 0
edits_deferred: 0
re_audit_recommended: false
overall_status: passed
---

# Fact-Check & Correct: Island Lake (Orangeville Reservoir) — Iteration 1

## Summary
- Claims audited: 28
- PASS / FAIL / FLAG: 24 / 0 / 4
- Regs gate: passed — every carded/target-species reg matches the official ontario.ca FMZ 16 summary (effective 2025-12-08) exactly.
- Edits applied: 0 | deferred: 0
- Re-audit recommended: no — 0 FAILs, regs gate passed, all FLAGs non-blocking.
- Overall status: passed

Research substrate is well-sourced and internally consistent. Regulations verified against the official Government of Ontario FMZ 16 summary. Four non-blocking FLAGs surfaced for Stage 4: a surface-area range across sources, blog/angler-sourced morphology and history, feature-typed (not landmark-named) structure, and an angler-platform coordinate that must not override the authoritative data/spots.json pin. No tier changes.

## Audit 1 — Per-claim verification

| ID | File | Section | Claim (≤120 chars) | Source URL | Verdict | Category | Required action | Action applied | Confidence | Notes |
|----|------|---------|--------------------|------------|---------|----------|-----------------|----------------|------------|-------|
| 1.1 | 1a | Morphology | Reservoir created 1967 by two dams flooding cedar swamp/thicket/small lake | orangeville.ca | PASS | — | — | — | — | Corroborated by hikingthegta |
| 1.2 | 1a | Morphology | Surface area ~182 ha (~443–450 ac); AA 179.4 ha; CA 300+ ha/820 ac | adventurefishing.ca ; anglersatlas ; orangeville.ca | FLAG | overclaimed-risk | — | — | — | Multiple figures; lake ~180 ha vs conservation area 820 ac — Stage 4 must not conflate |
| 1.3 | 1a | Morphology | Max depth ~20–22 ft in eastern-arm hole (old kettle lake) | hikingthegta ; adventurefishing.ca | FLAG | source-tier | — | — | — | Blog + commercial map; two independent sources agree (~20 vs 22 ft) |
| 1.4 | 1a | Morphology | "Much of the lake is about 6 feet deep" | hikingthegta | FLAG | source-tier | — | — | — | Blog-sourced; no official bathymetry — keep as documented, not measured mean |
| 1.5 | 1a | Morphology | Water clarity NOT FOUND; stained inferred | orangeville.ca | PASS | — | — | — | — | Correctly marked inference, not measurement |
| 1.6 | 1a | Species present | Northern Pike present, most-observed (15) | cvc.ca ; anglersatlas | PASS | — | — | — | — | Official list + angler tally |
| 1.7 | 1a | Species present | Largemouth Bass present (11) | cvc.ca ; orangeville.ca ; anglersatlas | PASS | — | — | — | — | Official lists |
| 1.8 | 1a | Species present | Black Crappie present; derby category | cvc.ca ; cvcfoundation.ca | PASS | — | — | — | — | Official list + derby |
| 1.9 | 1a | Species present | Yellow Perch present (10); derby category | cvc.ca ; cvcfoundation.ca | PASS | — | — | — | — | — |
| 1.10 | 1a | Species present | Smallmouth & Walleye NOT documented present | (absence) | PASS | — | — | — | — | Correct — not in any source; consistent with 1b Absent |
| 1.11 | 1a | Species present | Historical trout fishery ~25 yrs ago; displaced by pike/bass | ifishontario (404) | FLAG | source-tier | — | — | — | Angler-report; page 404, via search; AA "brook trout disputed" loosely corroborates. Colour only |
| 1.12 | 1a | Structure > Largemouth | Eastern-arm fallen trees/logs/stumps over 20'+ hole | adventurefishing.ca | PASS | — | — | — | — | — |
| 1.13 | 1a | Structure > Pike | Weed edges, wetland margins, island shallows; east-arm timber | anglersatlas ; adventurefishing.ca | PASS | — | — | — | — | Feature-typed (see FLAG 3 in summary) |
| 1.14 | 1a | Structure > Crappie | Eastern-arm submerged timber/stumps | adventurefishing.ca | PASS | — | — | — | — | — |
| 1.15 | 1a | Notable facts | East end holds submerged/standing timber; heavy weed in shallows | adventurefishing.ca | PASS | — | — | — | — | — |
| 1.16 | 1a | Notable facts | Ice Derby 2026 Feb 7–16; pike 825 mm winner; crappie/perch/catfish cats | cvcfoundation.ca | PASS | — | — | — | — | Quality signal for pike |
| 1.17 | 1a | Stocking | No Island Lake stocking record in Fish ON-Line FMZ 16 dataset | lioapplications (Fish ON-Line) | PASS | — | — | — | — | Official; self-sustaining fishery |
| 1.18 | 1a | Stocking | Credit River salmon/trout stocking is at Caledon, downstream/distinct | lioapplications | PASS | — | — | — | — | Correctly kept distinct |
| 1.19 | 1a | Access | Trailer launch P1 $8+HST concrete+dock; free hand launch P1 | cvc.ca boating | PASS | — | — | — | — | — |
| 1.20 | 1a | Access | Gas motors prohibited; electric-boat rentals discontinued | cvc.ca boating | PASS | — | — | — | — | Electric status for private boats unstated — noted as gap |
| 1.21 | 1a | Access | 10 accessible south-shore piers; shore fishing south side only | cvc.ca fishing | PASS | — | — | — | — | — |
| 1.22 | 1a | Gotchas | Multiple "Island Lake" in Ontario; this is CVC Orangeville Reservoir | anglersatlas | PASS | — | — | — | — | Disambiguation correct |
| 1.23 | 1a | Morphology | Coordinates: use data/spots.json 43.9273,-80.0751; AA pin 43.9388,-80.0813 not used | data/spots.json | FLAG→resolved | wrong_attribution-risk | — | noted | HIGH | Profile MUST use spots.json pin; AA pin is angler-contributed. Recorded for Stage 7 |

## Audit 2 — Cross-file reconciliation (1a ↔ 1b)
| ID | Topic | 1a says | 1b says | Verdict | Required action | Action applied | Confidence | Notes |
|----|-------|---------|---------|---------|-----------------|-----------------|------------|-------|
| 2.1 | Pike structure | weed edges/margins/island shallows + east-arm timber | same | PASS — compatible | — | — | HIGH | — |
| 2.2 | Largemouth structure | east-arm timber + weed beds/coves/island shallows | same | PASS — compatible | — | — | HIGH | — |
| 2.3 | Crappie structure | east-arm submerged timber | east-arm submerged timber | PASS — compatible | — | — | HIGH | — |
| 2.4 | Smallmouth/Walleye | not present | Absent | PASS — compatible | — | — | HIGH | — |
| 2.5 | Perch | present, weed flats | Present | PASS — compatible | — | — | HIGH | — |

## Audit 3 — Species tier-evidence sufficiency (Kelowna backstop)
| ID | Species | Tier | Structure in 1b | Matching in 1a | Quality signal | Sources | sigReqEvidence? | Verdict | Required action | Action applied | Confidence | Notes |
|----|---------|------|-----------------|-----------------|----------------|---------|-----------------|---------|-----------------|----------------|------------|-------|
| 3.1 | Northern Pike | Destination | weed/margin/island + east-arm timber | YES | Ice Derby (tournament, 825 mm winner) + most-observed | 2 | yes ✓ | PASS | — | — | HIGH | Structure + citable quality signal + sources — valid Destination |
| 3.2 | Largemouth Bass | Strong | east-arm timber + weed beds/coves | YES | 2nd most-observed + habitat | 2 | yes ✓ | PASS | — | — | HIGH | Named structure present — valid Strong; correctly held below Destination (no survey/record) |
| 3.3 | Black Crappie | Strong | east-arm submerged timber | YES | derby category | 2 | yes ✓ | PASS | — | — | HIGH | Named structure — valid Strong |
| 3.4 | Yellow Perch | Present | generic weed flats | YES | — | 0 | yes | PASS | — | — | HIGH | Present needs no source; generic structure correctly keeps it below Strong |
| 3.5 | Smallmouth / Walleye | Absent | none | n/a | — | 0 | yes | PASS | — | — | HIGH | Habitat + absence justify Absent |

## Audit 4 — Regulations integrity gate (BLOCKING)
Verified live against the official Government of Ontario FMZ 16 summary via WebFetch (accessed 2026-07-19; page states effective 2025-12-08).

| ID | Species | Reg (season/limit/size) | Source | Official source? | Effective-dated? | Matches source exactly? | Verdict | Action applied | Notes |
|----|---------|--------------------------|--------|------------------|------------------|--------------------------|---------|----------------|-------|
| 4.1 | Northern Pike | Jan 1–Mar 31 & 2nd Sat May–Dec 31; S-6/C-2; no size limit | ontario.ca FMZ 16 | YES | YES (2025-12-08) | YES | PASS | — | — |
| 4.2 | Largemouth & Smallmouth Bass (combined) | 4th Sat June–Nov 30; S-6/C-2; no size limit | ontario.ca FMZ 16 | YES | YES (2025-12-08) | YES | PASS | — | Carded species Largemouth is under the combined-bass line |
| 4.3 | Black Crappie | open all year; S-30/C-10 | ontario.ca FMZ 16 | YES | YES (2025-12-08) | YES | PASS | — | — |
| 4.4 | Yellow Perch | open all year; S-50/C-25 | ontario.ca FMZ 16 | YES | YES (2025-12-08) | YES | PASS | — | Present species; reg carried for completeness |
| 4.5 | Sunfish (Pumpkinseed/Bluegill) | open all year; S-50/C-25 | ontario.ca FMZ 16 | YES | YES (2025-12-08) | YES | PASS | — | Non-carded; forage/panfish context |
| 4.6 | Walleye (reference only) | Jan 1–Mar 15 & 2nd Sat May–Dec 31; S-4/C-2, ≤1 over 46 cm | ontario.ca FMZ 16 | YES | YES (2025-12-08) | YES | PASS | — | Not present in lake; kept for reference only |
| 4.7 | Waterbody exception (Island Lake) | none in FMZ 16 exceptions/sanctuaries | ontario.ca FMZ 16 | YES | YES (2025-12-08) | YES | PASS | — | Zone-wide regs apply |
| 4.8 | CVC property rules (LM catch-and-release, boat-access-only, bait) | property rules, not provincial law | cvc.ca | N/A (not fishery law) | — | — | PASS | — | Correctly labelled as CVC property rules, distinct from provincial regs |

**regs_gate = passed.** No target/carded species has an unresolved regs FAIL. All regs on the official ontario.ca source, effective-dated 2025-12-08, wording exact.

## Schema-deviation flags
None. Frontmatter counts in 1b (1 Destination / 2 Strong / 1 Present / 2 Absent) sum to the six taxonomy gamefish and match the scoring detail.

## Edits applied summary
| FC ID | File | Action | Before | After | Source change |
|-------|------|--------|--------|-------|---------------|
| — | — | — | — | — | none |

## Edits deferred
| FC ID | File | Action | Reason |
|-------|------|--------|--------|
| — | — | — | none |

## Tier downgrades summary
| Species | Before | After |
|---------|--------|-------|
| — | — | — |

## Standing FLAGs for Stage 4 / Stage 4b
- **FLAG-1 (surface area):** State the lake at ~180 ha / ~443 acres; the "300+ ha / 820 acres" figure is the whole conservation area (lake + wetland + forest), not open water. Do not conflate.
- **FLAG-2 (morphology source tier):** Depth figures ("much of the lake ~6 ft", "~20–22 ft eastern-arm hole") are blog/commercial-map sourced, two independent sources agreeing. Present as documented character, not an official survey mean.
- **FLAG-3 (structure specificity):** In-lake structure is feature-typed (east-arm timber, weed beds, island shallows), not named landmarks. Write to feature type; do not invent named points/shoals.
- **FLAG-4 (CVC vs provincial regs):** Largemouth catch-and-release, boat-access-only, and the bait rules are CVC property rules layered on FMZ 16 — keep visibly distinct from the provincial season/limit. Historical trout is angler-report colour only, not a Notable Fact citation.

## Iteration history
- **Iteration 1** (2026-07-19): 24 PASS / 0 FAIL / 4 FLAG; regs gate passed; 0 edits; 0 deferred.

## Verdict
- `passed` — 0 FAILs remaining AND regs_gate passed → downstream proceeds to Stage 4.
