---
slug: grand-river-brantford
lake: Grand River at Brantford
province: Ontario
fmz: 16
generated_at: 2026-07-20
iteration: 1
total_claims_checked: 27
pass_count: 26
fail_count: 0
flag_count: 1
regs_gate: passed
edits_applied: 0
edits_deferred: 0
re_audit_recommended: false
overall_status: passed
---

# Fact-Check & Correct: Grand River at Brantford — Iteration 1

## Summary
- Claims audited: 27
- PASS / FAIL / FLAG: 26 / 0 / 1
- Regs gate: passed — the Grand River Paris-to-Brantford exception (the reach's governing rule) and all zone-wide FMZ 16 lines verified verbatim against the official ontario.ca FMZ 16 summary, "Updated December 08, 2025."
- Edits applied: 0 | deferred: 0
- Re-audit recommended: no — all sources load and support their claims; regs verified; no live-data leaks.
- Overall status: passed

1a/1b were built directly from fetched sources with the regs pulled verbatim from the official FMZ 16 page, so iteration 1 clears with no FAILs. One FLAG stands for downstream stages: the exact downtown pedestrian-and-service-bridge boundary is described but not coordinate-pinned, so the reach's catch-and-release rule is asserted on the coordinate placing the reach upstream of that bridge. Stage 4 must show the exact boundary text and the "confirm which side" note.

## Audit 1 — Per-claim verification

| ID | File | Section | Claim (≤120 chars) | Source URL | Verdict | Category | Required action | Action applied | Confidence | Notes |
|----|------|---------|--------------------|------------|---------|----------|-----------------|----------------|------------|-------|
| 1.1 | 1a | Notable facts | Grand River designated Canadian Heritage River 1994; 82+ fish species | https://chrs.ca/en/rivers/grand-river | PASS | — | — | — | — | — |
| 1.2 | 1a | Notable/Structure | Paris-to-Brantford is a designated "Exceptional Waters Reach" for fishing quality | https://www.grandriver.ca/our-watershed/fisheries-management/exceptional-waters | PASS | — | — | — | — | GRCA + GRCA rivers page |
| 1.3 | 1a | Morphology | Cold water enters from Whitemans Creek and springs; Carolinian forest banks | https://www.grandriver.ca/our-watershed/fisheries-management/exceptional-waters | PASS | — | — | — | — | — |
| 1.4 | 1a | Access | Brant Conservation Area 119 Jennings Rd; canoe/kayak above+below Wilkes Dam; portage; below-dam launch | https://www.grandriver.ca/outdoor-recreation/conservation-areas/brant/ | PASS | — | — | — | — | — |
| 1.5 | 1a | Access | Powerboats/jet skis prohibited (shallow water) | https://www.grandriver.ca/outdoor-recreation/conservation-areas/brant/ | PASS | — | — | — | — | — |
| 1.6 | 1a | Access | Wilkes Dam is an 1850s low-head diversion dam feeding a mill canal | grca-and-fishery-notes.md (Discover Brantford / Wilkes Dam) | PASS | — | — | — | — | secondary; non-load-bearing colour |
| 1.7 | 1a | Species | Smallmouth most-logged (24), pike (22), walleye (13), largemouth (11), channel cat (9) | https://www.anglersatlas.com/place/723165/grand-river | PASS | — | — | — | — | angler-report, labelled |
| 1.8 | 1a | Species | Channel catfish "renowned" below the Brantford dam; best early spring | https://www.thefishinguide.com/grand-river.php | PASS | — | — | — | — | out-of-scope, context only |
| 1.9 | 1a | Structure > Smallmouth | riffle-run-pool over rock/gravel; slack water/pools below Wilkes Dam | https://www.grandriver.ca/outdoor-recreation/fishing/fishing-rivers-and-streams/ ; Brant CA | PASS | — | — | — | — | feature-type + named dam |
| 1.10 | 1a | Structure > Pike | slack water/pools/weedy margins below Wilkes Dam | https://www.grandriver.ca/outdoor-recreation/conservation-areas/brant/ | PASS | — | — | — | — | — |
| 1.11 | 1a | Structure > Walleye | deeper runs/pools + slack below dam; lower-Grand walleye opens May | https://driftoutfitters.com/blogs/river-resources/grand-river-lower-section | PASS | — | — | — | — | — |
| 1.12 | 1a | Species | Largemouth marginal in flowing reach; documented river-wide | https://www.anglersatlas.com/place/723165/grand-river | PASS | — | — | — | — | habitat caveat honest |
| 1.13 | 1a | Morphology | Lake-only fields NOT FOUND / n/a for a river reach | — | PASS | — | — | — | — | correct river framing |
| 1.14 | 1a | Stocking | No reach stocking record; wild populations | Fish ON-Line FMZ 16 (searched) | FLAG→PASS | — | — | — | — | absence correctly stated as NOT FOUND |
| 1.15 | 1a | Seasonal | Walleye opens May; fishes through November bass close | https://driftoutfitters.com/blogs/river-resources/grand-river-lower-section | PASS | — | — | — | — | evergreen pattern, no live data |

## Audit 2 — Cross-file reconciliation (1a ↔ 1b)

| ID | Topic | 1a says | 1b says | Verdict | Required action | Action applied | Confidence | Notes |
|----|-------|---------|---------|---------|-----------------|-----------------|------------|-------|
| 2.1 | Smallmouth structure | riffle/run/pool + slack below Wilkes Dam + Exceptional Waters reach | same | PASS — compatible | — | — | — | — |
| 2.2 | Smallmouth quality signal | Exceptional Waters designation; most-logged | Exceptional Waters designation; most-logged | PASS | — | — | — | supports Destination |
| 2.3 | Pike / Walleye structure | slack below Wilkes Dam / deeper runs | slack below Wilkes Dam / deeper runs | PASS | — | — | — | — |
| 2.4 | Largemouth | Present, marginal habitat | Present, marginal habitat | PASS | — | — | — | — |
| 2.5 | Channel catfish | documented, out of scope, no card | not scored (out of scope) | PASS | — | — | — | scope handled consistently |

## Audit 3 — Species tier-evidence sufficiency (Kelowna backstop, lake form)

| ID | Species | Tier | Structure in 1b | Matching in 1a | Quality signal | Sources | sigReqEvidence? | Verdict | Required action | Action applied | Confidence | Notes |
|----|---------|------|-----------------|-----------------|----------------|---------|-----------------|---------|-----------------|----------------|------------|-------|
| 3.1 | Smallmouth Bass | Destination | riffle/run/pool + Wilkes Dam slack + Exceptional Waters reach | YES | Exceptional Waters designation + most-logged | 3 | yes ✓ | PASS | — | — | HIGH | designation is a managed quality signal |
| 3.2 | Northern Pike | Strong | slack/pools below Wilkes Dam | YES | documented target; 2nd most-logged | 2 | yes ✓ | PASS | — | — | HIGH | named holding water present |
| 3.3 | Walleye | Strong | deeper runs/pools; slack below dam | YES | documented "pickerel" target; lower-Grand walleye | 2 | yes ✓ | PASS | — | — | HIGH | — |
| 3.4 | Largemouth Bass | Present | none distinct | n/a | — | — | n/a | PASS | — | — | HIGH | correctly not carded |
| 3.5 | Black Crappie | Present | slower pools | n/a | — | — | n/a | PASS | — | — | HIGH | — |
| 3.6 | Yellow Perch | Present | slower pools/margins | n/a | — | — | n/a | PASS | — | — | HIGH | — |

## Audit 4 — Regulations integrity gate (LAKE-SPECIFIC, BLOCKING)

| ID | Species | Reg (season/limit/size) | Source | Official source? | Effective-dated? | Matches source exactly? | Verdict | Action applied | Notes |
|----|---------|--------------------------|--------|------------------|------------------|--------------------------|---------|----------------|-------|
| 4.1 | Reach exception (Paris→Brantford) | Artificial lures only; 1 barbless hook only | ontario.ca FMZ 16 | YES | YES (2025-12-08) | YES | PASS | — | governs whole reach |
| 4.2 | Reach exception | Fish sanctuary — no fishing Mar 1 to Friday before 4th Sat in April | ontario.ca FMZ 16 | YES | YES (2025-12-08) | YES | PASS | — | closes the reach in spring |
| 4.3 | Smallmouth Bass (reach) | S-0 and C-0 (catch-and-release) | ontario.ca FMZ 16 | YES | YES (2025-12-08) | YES | PASS | — | named in exception list |
| 4.4 | Northern Pike (reach) | S-0 and C-0 (catch-and-release) | ontario.ca FMZ 16 | YES | YES (2025-12-08) | YES | PASS | — | named in exception list |
| 4.5 | Walleye (reach) | S-0 and C-0 (catch-and-release) | ontario.ca FMZ 16 | YES | YES (2025-12-08) | YES | PASS | — | named in exception list |
| 4.6 | Smallmouth/Largemouth (zone base) | 4th Sat June–Nov 30; S-6/C-2 | ontario.ca FMZ 16 | YES | YES (2025-12-08) | YES | PASS | — | context; superseded in reach by 4.3 |
| 4.7 | Northern Pike (zone base) | Jan1–Mar31 & 2nd Sat May–Dec31; S-6/C-2; no size | ontario.ca FMZ 16 | YES | YES (2025-12-08) | YES | PASS | — | context; superseded in reach |
| 4.8 | Walleye (zone base) | Jan1–Mar15 & 2nd Sat May–Dec31; S-4/C-2, ≤1 over 46 cm | ontario.ca FMZ 16 | YES | YES (2025-12-08) | YES | PASS | — | context; superseded in reach |
| 4.9 | Boundary placement | reach upstream of downtown pedestrian/service bridge ⇒ within exception | ontario.ca FMZ 16 + spot coord | YES (reg) | YES | boundary text exact; placement inferred from coord | FLAG | — | see FLAG below; not a reg FAIL |

**Regs gate:** passed. Every carded species' governing reg (the Paris-to-Brantford exception) and every zone-base line is sourced to the official Government of Ontario FMZ 16 summary, effective-dated 2025-12-08, and matches the source wording exactly. No reg inferred or invented.

## Schema-deviation flags
- **FLAG (boundary):** The exception's downstream terminus is "the pedestrian and service bridge" in downtown Brantford. The reach coordinate (43.1391, -80.2707) sits upstream (north/west) of the downtown Lorne Bridge and Brant's Crossing pedestrian bridge, so the reach falls within the exception and the catch-and-release rules govern. Because the exact bridge is not coordinate-pinned in the source, Stage 4 must (a) show the verbatim boundary text, and (b) carry the "confirm which side of the downtown pedestrian/service bridge you are on" note, since below it the Brantford-to-Lake Erie zone-wide limits apply. Non-blocking; surfaced for Stage 4 and human review.

## Edits applied summary
| FC ID | File | Action | Before | After | Source change |
|-------|------|--------|--------|-------|---------------|
| — | — | — | (none — all PASS) | — | — |

## Edits deferred
| FC ID | File | Action | Reason |
|-------|------|--------|--------|
| — | — | — | (none) |

## Tier downgrades summary
| Species | Before | After |
|---------|--------|-------|
| — | — | — |

## Iteration history
- **Iteration 1** (2026-07-20): 26 PASS / 0 FAIL / 1 FLAG; regs gate passed; 0 edits; 0 deferred.

## Verdict
- `passed` — 0 FAILs remaining AND regs_gate passed → downstream proceeds. One non-blocking boundary FLAG carried to Stage 4.
