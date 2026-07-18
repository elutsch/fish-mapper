---
slug: conestogo-lake
lake: Conestogo Lake
province: Ontario
fmz: 16
generated_at: 2026-07-18
iteration: 1
total_claims_checked: 28
pass_count: 24
fail_count: 2
flag_count: 2
regs_gate: passed
edits_applied: 4
edits_deferred: 0
re_audit_recommended: false
overall_status: passed
---

# Fact-Check & Correct: Conestogo Lake — Iteration 1

## Summary
- Claims audited: 28
- PASS / FAIL / FLAG: 24 / 2 / 2
- Regs gate: passed — every target-species reg matches the official Ontario FMZ 16 summary exactly (effective 2025-12-08 / 2026 licence year).
- Edits applied: 4 | deferred: 0
- Re-audit recommended: no — both FAILs resolved this pass with HIGH confidence; regs gate passed.
- Overall status: passed

The two prior-run concerns both resolved cleanly. The 1a/1b Largemouth Bass conflict was reconciled toward Absent (authoritative sources — GRCA official list and Angler's Atlas — do not list it; only a single user-contributed FishAngler catch exists), and 1a was softened to match 1b. The coordinate discrepancy was reconciled: the FishAngler pin (43.7056, -80.7157) is an east-shore user marker that matches no authoritative source; Wikipedia (43.687, -80.735) and Angler's Atlas (43.697, -80.732) place the lake centre well west of it, and the repo seed (43.7078767, -80.7707069) is the GRCA west-shore launch — that GRCA value is now flagged as the access pin in 1a. All six target-species regs verified verbatim against ontario.ca FMZ 16. Nebraska "Conestoga" contamination stayed out (confirmed excluded).

## Audit 1 — Per-claim verification

| ID | File | Section | Claim (≤120 chars) | Source URL | Verdict | Category | Required action | Action applied | Confidence | Notes |
|----|------|---------|--------------------|------------|---------|----------|-----------------|----------------|------------|-------|
| 1.1 | 1a | Morphology | Surface area 628 ha / ~1,550 ac (AA 628.6 ha) | wikipedia; anglersatlas | PASS | — | — | — | — | Both sources agree. |
| 1.2 | 1a | Morphology | Shape: Y-shaped, two arms ~6 km each | grandriver.ca | PASS | — | — | — | — | GRCA reservoir description. |
| 1.3 | 1a | Morphology | Max/mean depth [NOT FOUND] | — | PASS | — | — | — | — | Honest gap, not a claim. |
| 1.4 | 1a | Morphology | Cold-water release from depth at dam (tailwater) | grandriver.ca tailwater | PASS | — | — | — | — | Supports stratification inference. |
| 1.5 | 1a | Morphology | Dam rehab 2024/2025 drew levels down | grandriver.ca | PASS | — | — | — | — | — |
| 1.6 | 1a | Coordinates | FishAngler pin 43.7056, -80.7157 | fishangler | FAIL | wrong_attribution | REPLACE_SOURCE | Flagged pin as non-authoritative east-shore marker; added lake-centre coords (Wiki/AA) + GRCA seed launch pin | HIGH | Wiki 43.687,-80.735; AA 43.697,-80.732; seed 43.7079,-80.7707. |
| 1.7 | 1a | Species | Walleye present (GRCA + AA 9 obs) | grandriver.ca; anglersatlas | PASS | — | — | — | — | AA confirms 9. |
| 1.8 | 1a | Species | Northern Pike present (AA 11, most-observed) | anglersatlas | PASS | — | — | — | — | AA confirms 11. |
| 1.9 | 1a | Species | Smallmouth present (GRCA + AA 8 + FishAngler most-caught) | grandriver.ca; fishangler | PASS | — | — | — | — | AA confirms 8. |
| 1.10 | 1a | Species | Largemouth present (angler-report only) | fishangler | FAIL | contradicted_by_source | REWRITE_CLAIM | Softened to "NOT confirmed / Absent-unconfirmed" — not on GRCA or AA lists | HIGH | See Audit 2.1; reconciled toward 1b Absent. |
| 1.11 | 1a | Species | Black Crappie present (GRCA + AA 3) | grandriver.ca; anglersatlas | PASS | — | — | — | — | AA confirms 3. |
| 1.12 | 1a | Species | Yellow Perch present (GRCA + AA 5) | grandriver.ca; anglersatlas | PASS | — | — | — | — | AA confirms 5. |
| 1.13 | 1a | Species | Common Carp (AA 3 obs) | anglersatlas | PASS | — | — | — | — | AA confirms 3. |
| 1.14 | 1a | Species | Brown Trout tailwater (below dam, not lake) | grandriver.ca tailwater | PASS | — | — | — | — | Correctly scoped to river. |
| 1.15 | 1a | Structure | Smallmouth: rocky points/hard structure toward dam | fishangler | FLAG | overclaimed | — | — | — | Feature-type inference from angler data; non-blocking, disclosed as conservative in 1a. |
| 1.16 | 1a | Structure | Pike: weedy bays / stained upper arms | anglersatlas | PASS | — | — | — | — | Matches habitat + AA most-observed. |
| 1.17 | 1a | Structure | Walleye: drowned channel/basin + river inflows | grandriver.ca; anglersatlas | PASS | — | — | — | — | Consistent reservoir pattern. |
| 1.18 | 1a | Access | GRCA CA, 6580 Wellington Rd 11, concrete double ramp | grandriver.ca | PASS | — | — | — | — | Address + double ramp confirmed by multiple listings. |
| 1.19 | 1a | Access | Boat launch $14.50/day, $117 season pass | grandriver.ca fees | PASS | — | — | — | — | Fees page cited. |
| 1.20 | 1a | Access | Horsepower rule [NOT FOUND]; powerboating permitted | grandriver.ca | PASS | — | — | — | — | Honest gap; powerboating confirmed. |
| 1.21 | 1a | Stocking | No lake stocking record in Fish ON-Line FMZ 16 | lioapplications FishONLine | PASS | — | — | — | — | Reservoir not stocked; self-sustaining. |
| 1.22 | 1a | Stocking | Brown Trout stocked Conestogo River (Woolwich), began 2003 | lioapplications; grandriver.ca | PASS | — | — | — | — | River/tailwater, not lake. |
| 1.23 | 1a | Notable | PB walleye 6 lb 5 oz late June (angler report) | fishangler | FLAG | overclaimed | — | — | — | User-contributed; disclosed as angler report. Non-blocking. |
| 1.24 | 1a | Notable | Dam built 1955–1958, first flooded Oct 1958, submerged Hollen | wikipedia | PASS | — | — | — | — | Wiki confirms 1955-05-30 to 1958-10-15, flooded Oct 15 1958, Hollen. |
| 1.25 | 1a | Gotchas | Nebraska "Conestoga" is a different lake — excluded | outdoornebraska.gov | PASS | — | — | — | — | Confirmed: no Nebraska structure imported. Contamination stayed out. |
| 1.26 | 1a | Notable | Best season late spring–summer, weedlines/points | grandriver.ca fishing | PASS | — | — | — | — | General GRCA fishing guidance. |
| — | 1a | Live-data | (scan for today/current temp/wind/level readings) | — | PASS | — | — | — | — | None found; profile is evergreen. No live-data leak. |

### Verdict definitions
- PASS — source loads and supports the claim
- FAIL — source dead, contradicts, or doesn't support
- FLAG — source supports a weaker claim; non-blocking, surfaced for Stage 4

## Audit 2 — Cross-file reconciliation (1a ↔ 1b)

| ID | Topic | 1a says | 1b says | Verdict | Required action | Action applied | Confidence | Notes |
|----|-------|---------|---------|---------|-----------------|-----------------|------------|-------|
| 2.1 | Largemouth Bass presence | "present but uncommon (angler report)" | "Absent — not on GRCA list" | FAIL — conflict | RECONCILE | Rewrote 1a Species + Structure entries to "NOT confirmed / Absent-unconfirmed"; 1b Absent stands | HIGH | GRCA official list (perch/pike/walleye/crappie/smallmouth) + Angler's Atlas (6 species, no LMB) both exclude it. Official > angler-report → Absent. Both files now consistent. |
| 2.2 | Smallmouth structure | "rocky points toward dam" | "deeper main-lake water/points toward dam" | PASS — compatible | — | — | — | Same feature-type framing. |
| 2.3 | Pike structure | "weedy bays / stained upper arms" | "weedy back-arm water, weedlines/inflows" | PASS — compatible | — | — | — | Consistent. |
| 2.4 | Walleye structure | "drowned channel/basin + inflows toward dam" | "deeper water/points toward dam, inflows" | PASS — compatible | — | — | — | Consistent. |
| 2.5 | Species tiers/counts | 6 target gamefish documented | destination 0 / strong 3 / present 2 / absent 1 | PASS — consistent | — | — | — | Frontmatter counts intact; no tier change. |
| 2.6 | Walleye/pike/smallmouth as lead species | "three most-observed/caught" | "Strong ×3 (SMB, pike, walleye)" | PASS — consistent | — | — | — | Aligned. |

Reconciliation rule applied: official/managing-authority sources (GRCA, Angler's Atlas) outrank angler-report platforms (FishAngler). 1a was the file out of step and was corrected; 1b's Absent verdict was already correct.

## Audit 3 — Species tier-evidence sufficiency

| ID | Species | Tier | Structure in 1b | Matching in 1a | Quality signal | Sources | sigReqEvidence? | Verdict | Required action | Action applied | Confidence | Notes |
|----|---------|------|-----------------|-----------------|----------------|---------|-----------------|---------|-----------------|----------------|------------|-------|
| 3.1 | Smallmouth Bass | Strong | dam-end points / hard structure | YES | none reservoir-specific | 2 | yes | PASS | — | — | HIGH | Named structure present; no CPUE/trophy → correctly capped at Strong (not Destination). |
| 3.2 | Northern Pike | Strong | weedy arms / weedlines | YES | 33rd annual GRCA C&R tourney, longest-pike category | 2 | yes | PASS | — | — | HIGH | Tournament confirmed (Wellington Advertiser). Named structure + tournament, but no survey/trophy → Strong is defensible and not over-tiered. |
| 3.3 | Walleye | Strong | basin/points toward dam, inflows | YES | tailwater C&R management (river, not lake) | 3 | yes | PASS | — | — | HIGH | Quality signal applies to river, not reservoir → correctly capped at Strong. |
| 3.4 | Black Crappie | Present | weedy back-arms | YES | none | — | yes | PASS | — | — | HIGH | On GRCA list; no differentiator → Present correct. |
| 3.5 | Yellow Perch | Present | weed edges/flats | YES | none (forage role) | — | yes | PASS | — | — | HIGH | On GRCA list; Present correct. |
| 3.6 | Largemouth Bass | Absent | (none) | (none) | none | 0 | yes | PASS | — | — | HIGH | Not on authoritative lists; Absent correct. Habitat (weedy back-bays exist) does not override absence of documentation. |

No tier changes required. No Destination tiers claimed (correct — no reservoir-specific survey CPUE/trophy located). No habitat-mismatch over-tiering found.

## Audit 4 — Regulations integrity gate (BLOCKING)

Verified live against the official Ontario Fishing Regulations Summary, FMZ 16 (ontario.ca), effective date **December 8, 2025** (2026 licence year). Every target-species line matches the source wording exactly.

| ID | Species | Reg (season/limit/size) | Source | Official source? | Effective-dated? | Matches source exactly? | Verdict | Action applied | Notes |
|----|---------|--------------------------|--------|------------------|------------------|--------------------------|---------|----------------|-------|
| 4.1 | Walleye (+Sauger) | Jan 1–Mar 15 & 2nd Sat May–Dec 31; S-4/C-2, not >1 over 46 cm | ontario.ca FMZ16 | YES | YES (2026-01-01; summary 2025-12-08) | YES | PASS | — | Combined with Sauger; "not more than 1 greater than 46 centimetres" verbatim. 2026 open = May 9 (correct). |
| 4.2 | Northern Pike | Jan 1–Mar 31 & 2nd Sat May–Dec 31; S-6/C-2, no size limit | ontario.ca FMZ16 | YES | YES | YES | PASS | — | Matches exactly. 2026 open = May 9 (correct). |
| 4.3 | Smallmouth Bass | 4th Sat Jun–Nov 30; S-6/C-2 (combined w/ Largemouth) | ontario.ca FMZ16 | YES | YES | YES | PASS | — | Source: "Largemouth and Smallmouth Bass Combined." 2026 open = Jun 27 (correct). |
| 4.4 | Largemouth Bass | 4th Sat Jun–Nov 30; S-6/C-2 (combined w/ Smallmouth) | ontario.ca FMZ16 | YES | YES | YES | PASS | — | Same combined rule. (Species itself not confirmed present, but the zone reg is accurate.) |
| 4.5 | Black Crappie | open all year; S-30/C-10 | ontario.ca FMZ16 | YES | YES | YES | PASS | — | Source lists "Crappie … open all year … S-30 and C-10." 1a's "(combined with White Crappie)" is a harmless clarifier; limit/season exact. |
| 4.6 | Yellow Perch | open all year; S-50/C-25 | ontario.ca FMZ16 | YES | YES | YES | PASS | — | Matches exactly. |
| 4.7 | Waterbody exception (Conestogo) | None — zone-wide regs apply | ontario.ca FMZ16 | YES | YES | YES | PASS | — | Confirmed: neither Conestogo Lake nor River appears in exceptions/sanctuaries. |
| 4.8 | Bait note | FMZ 16 in Southern Bait Management Zone | ontario.ca FMZ16 | YES | YES | YES | PASS | — | Confirmed. |

**Regs gate: PASSED.** All target (Strong/Present) species regs trace to the official Government of Ontario FMZ 16 source, are effective-dated (2026 licence year, summary updated 2025-12-08), and are worded exactly. No `[UNVERIFIED]` flags needed. No regs were invented.

## Schema-deviation flags
- None blocking. 1a frontmatter `regs_source_verified: true` and `regs_effective_date: 2026-01-01` are consistent with the verified source (summary published 2025-12-08, in force for the 2026 licence year). 1b tier counts (0/3/2/1) match its body. No count drift.

## Edits applied summary
| FC ID | File | Action | Before | After | Source change |
|-------|------|--------|--------|-------|---------------|
| 1.6 | 1a | REPLACE_SOURCE | Coordinates only from FishAngler pin 43.7056,-80.7157 | Added authoritative lake-centre coords (Wiki 43.687,-80.735; AA 43.697,-80.732) + GRCA seed launch 43.7078767,-80.7707069; FishAngler pin flagged non-authoritative | No new URL; demoted angler pin |
| 2.1 / 1.10 | 1a | RECONCILE / REWRITE_CLAIM | Largemouth "present but uncommon (angler report)" in Species present | "NOT confirmed present … treated as Absent/unconfirmed (see Stage 1b)" | Kept URL, added authoritative-absence note |
| 2.1 | 1a | RECONCILE | Largemouth structure entry implied possible presence | Rewrote to "presence NOT established … do not surface structure" | Kept URL |
| 1.1(src) | 1a | REPLACE_SOURCE | FishAngler source line carried the misleading coordinate | Coordinate removed from source line; cross-ref note to Morphology added | Same URL |

## Edits deferred
| FC ID | File | Action | Reason |
|-------|------|--------|--------|
| (none) | — | — | — |

## Tier downgrades summary
| Species | Before | After |
|---------|--------|-------|
| (none) | — | — |

## Iteration history
- **Iteration 1** (2026-07-18): 24 PASS / 2 FAIL / 2 FLAG; regs gate passed; 4 edits; 0 deferred. Both FAILs (coordinate attribution, Largemouth 1a↔1b conflict) resolved HIGH-confidence in-pass.

## Verdict
- **passed** — 0 FAILs remaining AND regs_gate passed. Both prior-run concerns resolved: Largemouth reconciled to Absent across both files; coordinate discrepancy reconciled toward the authoritative GRCA/lake-centre location with the FishAngler pin demoted. Nebraska contamination confirmed excluded. Downstream (Stage 4) may proceed.
