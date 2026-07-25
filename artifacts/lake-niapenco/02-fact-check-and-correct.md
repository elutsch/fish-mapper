---
slug: lake-niapenco
lake: Lake Niapenco
province: Ontario
fmz: 16
generated_at: 2026-07-24
iteration: 1
total_claims_checked: 29
pass_count: 26
fail_count: 0
flag_count: 3
regs_gate: passed
edits_applied: 0
edits_deferred: 0
re_audit_recommended: false
overall_status: passed
---

# Fact-Check & Correct: Lake Niapenco — Iteration 1

## Summary
- Claims audited: 29
- PASS / FAIL / FLAG: 26 / 0 / 3
- Regs gate: passed — every carded/in-scope species reg verified verbatim against the official Government of Ontario FMZ 16 summary (effective 2025-12-08).
- Edits applied: 0 | deferred: 0
- Re-audit recommended: no — 0 FAILs, regs gate passed, 3 non-blocking FLAGs handed to Stage 4.
- Overall status: passed

Research and scoring were internally consistent and conservatively tiered. FMZ is CONFIRMED as 16 (matches the taxonomy assumption). The three FLAGs are the coarse (feature-type, not landmark) structure on this shallow reservoir, the smallmouth "top-caught but Present" call, and the inconsistent catch-and-release policy wording — all surfaced for the writer, none blocking.

## Audit 1 — Per-claim verification

| ID | File | Section | Claim (≤120 chars) | Source URL | Verdict | Category | Required action | Action applied | Confidence | Notes |
|----|------|---------|--------------------|------------|---------|----------|-----------------|----------------|------------|-------|
| 1.1 | 1a | Morphology | Surface area 168 ha (~415 acres) | anglersatlas.com/place/124339 | PASS | — | — | — | — | — |
| 1.2 | 1a | Morphology | Max/mean depth [NOT FOUND] | — | PASS | — | — | — | — | Honest gap; no bathymetry located |
| 1.3 | 1a | Morphology | Eutrophic, stained/turbid, phosphorus-loaded | ourniagarariver.ca Welland Eutrophication Study | PASS | — | — | — | — | — |
| 1.4 | 1a | Morphology | Impounded 1971, Welland River, low-flow + flood control | openwaterpedia.com/wiki/Lake_Niapenco | PASS | — | — | — | — | Corroborated by kayak-ontario |
| 1.5 | 1a | Species | 2017 survey: white crappie 76% / LMB 12% / black crappie 7% / SMB 5% / pike ~0% / walleye ~0% | biotactic.com/lake-niapenco-sport-fish-population-estimates | PASS | — | — | — | — | Primary quality signal |
| 1.6 | 1a | Species | Total sport-fish estimate ~27,149 | biotactic.com/... | PASS | — | — | — | — | — |
| 1.7 | 1a | Structure > LMB | weedy shallow bays + islands/offshoots | biotactic + kayak-ontario | FLAG | overclaimed-precision | — | — | — | Feature-type, not landmark; fine for a shallow weedy lake — surfaced to Stage 4 |
| 1.8 | 1a | Structure > SMB | harder-bottom shorelines/island edges (not documented) | anglersatlas.com | FLAG | overclaimed-precision | — | — | — | Structure inferred; card must stay conservative |
| 1.9 | 1a | Structure > Walleye | drowned Welland River channel (inferred) | biotactic.com | PASS | — | — | — | — | Framed as inferred holding water |
| 1.10 | 1a | Notable | Largest inland lake in Niagara Peninsula watershed | openwaterpedia.com | PASS | — | — | — | — | Corroborated across sources |
| 1.11 | 1a | Notable | Hosts annual spring + ice-fishing derbies | npca.ca/.../binbrook/ice-fishing.htm | PASS | — | — | — | — | — |
| 1.12 | 1a | Notable | Consumption advisory: PFAS / mercury / PCBs | npca.ca/.../ice-fishing.htm | PASS | — | — | — | — | — |
| 1.13 | 1a | Access | Electric/non-motorized only; gas motors prohibited | npca.ca/.../ice-fishing.htm | PASS | — | — | — | — | Confirmed on two NPCA pages |
| 1.14 | 1a | Access | Day-use fee ~$15/vehicle (~$9 off-season) | npca.ca/.../binbrook | PASS | — | — | — | — | — |
| 1.15 | 1a | Access | Accessible fishing pier + paddlecraft rentals | ontariofamilyfishing.com | PASS | — | — | — | — | — |
| 1.16 | 1a | Gotchas | Pickerel Island eagle-nest boat boundary | kayak-ontario.com | PASS | — | — | — | — | — |
| 1.17 | 1a | Gotchas | Catch-and-release policy wording inconsistent across sources | npca.ca / ontariofamilyfishing.com | FLAG | ambiguous_source | — | — | — | Encouraged generally; species scope varies — Stage 4 states conservatively |
| 1.18 | 1a | Stocking | No stocking record located | — | PASS | — | — | — | — | Honest [NOT FOUND] |
| 1.19 | 1a | Coordinates | 43.101435, -79.835263 (spots.json authoritative) | data/spots.json | PASS | — | — | — | — | Angler's Atlas centre (43.1051,-79.8498) noted but not used |

## Audit 2 — Cross-file reconciliation (1a ↔ 1b)
| ID | Topic | 1a says | 1b says | Verdict | Required action | Action applied | Confidence | Notes |
|----|-------|---------|---------|---------|-----------------|-----------------|------------|-------|
| 2.1 | Largemouth | ~12% survey, weedy/island structure | Strong, same structure/signal | PASS — compatible | — | — | — | — |
| 2.2 | Black Crappie | ~7% survey, weedy/brushy edges | Strong, same | PASS — compatible | — | — | — | — |
| 2.3 | Smallmouth | present, ~5%, no named rock | Present (marginal habitat) | PASS — compatible | — | — | — | Honest downgrade held at Present |
| 2.4 | Pike / Walleye | present, ~0% survey | Present each | PASS — compatible | — | — | — | — |
| 2.5 | Yellow Perch | present, forage + panfish | Present | PASS — compatible | — | — | — | — |

## Audit 3 — Species tier-evidence sufficiency
| ID | Species | Tier | Structure in 1b | Matching in 1a | Quality signal | Sources | sigReqEvidence? | Verdict | Required action | Action applied | Confidence | Notes |
|----|---------|------|-----------------|-----------------|----------------|---------|-----------------|---------|-----------------|----------------|------------|-------|
| 3.1 | Largemouth Bass | Strong | weedy bays/islands | YES | 2017 survey ~12% | 2 | yes ✓ | PASS | — | — | HIGH | Named (feature-type) structure + signal |
| 3.2 | Black Crappie | Strong | brushy island edges | YES | 2017 survey ~7% | 1 | yes ✓ | PASS | — | — | HIGH | — |
| 3.3 | Smallmouth Bass | Present | island edges (inferred) | n/a | — | 0 | — | PASS | — | — | HIGH | Correctly held at Present (no named rock) |
| 3.4 | Northern Pike | Present | weedy bays | n/a | — | 0 | — | PASS | — | — | HIGH | ~0% survey; Present correct |
| 3.5 | Walleye | Present | river channel | n/a | — | 0 | — | PASS | — | — | HIGH | ~0% survey; Present correct |
| 3.6 | Yellow Perch | Present | weed edges | n/a | — | 0 | — | PASS | — | — | HIGH | — |

No Destination tiers claimed → the Kelowna backstop has nothing to downgrade. Both Strong tiers carry named (feature-type) structure and a survey signal.

## Audit 4 — Regulations integrity gate (BLOCKING)
| ID | Species | Reg (season/limit/size) | Source | Official? | Effective-dated? | Matches source exactly? | Verdict | Action applied | Notes |
|----|---------|--------------------------|--------|-----------|------------------|--------------------------|---------|----------------|-------|
| 4.1 | Walleye | Jan 1–Mar 15 & 2nd Sat May–Dec 31; S-4/C-2, not >1 over 46 cm | ontario.ca FMZ 16 | YES | YES (2025-12-08) | YES | PASS | — | — |
| 4.2 | Northern Pike | Jan 1–Mar 31 & 2nd Sat May–Dec 31; S-6/C-2; no size limit | ontario.ca FMZ 16 | YES | YES (2025-12-08) | YES | PASS | — | — |
| 4.3 | Largemouth & Smallmouth Bass | 4th Sat Jun–Nov 30; S-6/C-2 | ontario.ca FMZ 16 | YES | YES (2025-12-08) | YES | PASS | — | — |
| 4.4 | Black Crappie (Crappie) | open all year; S-30/C-10 | ontario.ca FMZ 16 | YES | YES (2025-12-08) | YES | PASS | — | — |
| 4.5 | Yellow Perch | open all year; S-50/C-25 | ontario.ca FMZ 16 | YES | YES (2025-12-08) | YES | PASS | — | — |
| 4.6 | Bait | Southern Bait Management Zone transport restriction | ontario.ca FMZ 16 | YES | YES (2025-12-08) | YES | PASS | — | — |
| 4.7 | Waterbody exception | none documented for Lake Niapenco | ontario.ca FMZ 16 | YES | YES (2025-12-08) | YES | PASS | — | — |

**regs_gate = passed.** FMZ CONFIRMED as 16; every in-scope species regulation matches the official Government of Ontario FMZ 16 summary verbatim, effective 2025-12-08. The NPCA catch-and-release "policy" is a property practice, not an MNR regulation, and is kept out of the Regulations section as a stated season/limit.

## Schema-deviation flags
None. Frontmatter counts in 1b (0 Destination / 2 Strong / 4 Present / 0 Absent) match the scoring detail.

## Edits applied summary
| FC ID | File | Action | Before | After | Source change |
|-------|------|--------|--------|-------|---------------|
| — | — | — | — | — | — |

(No edits required — both files passed as written.)

## Edits deferred
None.

## Tier downgrades summary
None.

## Iteration history
- **Iteration 1** (2026-07-24): 26 PASS / 0 FAIL / 3 FLAG; regs gate passed; 0 edits; 0 deferred.

## Verdict
- `passed` — 0 FAILs remaining AND regs_gate passed → downstream proceeds. Three non-blocking FLAGs (1.7 coarse largemouth structure, 1.8 inferred smallmouth structure, 1.17 catch-and-release wording) handed to Stage 4.
