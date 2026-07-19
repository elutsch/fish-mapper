---
slug: laurel-creek-reservoir
lake: Laurel Creek Reservoir
province: Ontario
fmz: 16
generated_at: 2026-07-19
iteration: 1
total_claims_checked: 30
pass_count: 27
fail_count: 0
flag_count: 3
regs_gate: passed
edits_applied: 0
edits_deferred: 0
re_audit_recommended: false
overall_status: passed
---

# Fact-Check & Correct: Laurel Creek Reservoir — Iteration 1

## Summary
- Claims audited: 30
- PASS / FAIL / FLAG: 27 / 0 / 3
- Regs gate: passed — every FMZ 16 line in 1a matches the official Government of Ontario FMZ 16 summary (effective December 08, 2025) verbatim; no waterbody exceptions for Laurel Creek.
- Edits applied: 0 | deferred: 0
- Re-audit recommended: no — zero FAILs, regs gate passed, all FLAGs non-blocking and already disclosed in 1a.
- Overall status: passed

The 1a research is unusually clean: it is built on four official MNRF/LIO open-data services, five GRCA pages/documents, and the ontario.ca FMZ 16 regs page, and it proactively disarmed the two biggest risks itself — the primer's cross-lake species mix-up (pike/crappie/perch/walleye traced to GRCA's Guelph Lake / Shade's Mills entries, not Laurel Creek) and the internally implausible "1.5 trillion litre" storage figure (flagged suspect, do-not-propagate). Both are carried as FLAGs here, not FAILs, because 1a already resolved them correctly. All six FMZ 16 regulation lines were re-verified live against ontario.ca and match exactly. No edits to 1a or 1b were required.

## Audit 1 — Per-claim verification

| ID | File | Section | Claim (≤120 chars) | Source URL | Verdict | Category | Required action | Action applied | Confidence | Notes |
|----|------|---------|--------------------|------------|---------|----------|-----------------|----------------|------------|-------|
| 1.1 | 1a | Morphology | Surface area 101 ha | grandriver.ca Master Plan | PASS | — | — | — | — | Master Plan quotes "surface area of 101 hectares". |
| 1.2 | 1a | Morphology | Storage "1.5 trillion litres" flagged suspect, do-not-propagate | grandriver.ca Master Plan | FLAG | overclaimed | — | — | — | 1a correctly flags the source figure as physically implausible for a 101 ha, 1–3 m reservoir and instructs downstream not to cite. Non-blocking. |
| 1.3 | 1a | Morphology | Depth distribution: 40% at 1.5–3 m, 60% ~1 m; max/mean [NOT FOUND] | grandriver.ca Master Plan | PASS | — | — | — | — | Quoted verbatim; ARA depth fields null; no provincial bathymetry (verified negative). Honest gap. |
| 1.4 | 1a | Morphology | Turbid, slow turnover | grandriver.ca Master Plan | PASS | — | — | — | — | "quite shallow, turbid and relatively slow in its average turnover rate." |
| 1.5 | 1a | Morphology | Warm thermal regime, no stable stratification | MNRF ARA; uwaterloo | PASS | — | — | — | — | ARA THERMAL_REGIME: Warm; mostly ≤3 m. |
| 1.6 | 1a | Morphology | Rule-curve reservoir: summer 342.4 m; fall drawdown to 339.2 m (~3.2 m) | grandriver.ca Master Plan | PASS | — | — | — | — | Elevations and drawdown from Master Plan. |
| 1.7 | 1a | Species | Official MNRF ARA species summary (16 spp.), LID 17-5350-48144, FMZ 16 | LIO ARA query | PASS | — | — | — | — | Official open-data layer feeding Fish ON-Line. |
| 1.8 | 1a | Species | Largemouth & Smallmouth Bass documented (only 2 of 6 target gamefish) | MNRF ARA; Fishbrain | PASS | — | — | — | — | Both on ARA; also user-logged. |
| 1.9 | 1a | Species | Pike/Walleye/Crappie/Perch [NOT FOUND] in any official record | MNRF ARA; GRCA | PASS | — | — | — | — | Six-gamefish negative check; aggregator claims discarded as unreliable. See Gotchas FLAG 1.14. |
| 1.10 | 1a | Species | GRCA fishing page lists Laurel Creek fishery as "Carp, bullhead", limited | grandriver.ca fishing | PASS | — | — | — | — | Both GRCA "Carp, bullhead" and ARA bass presence are official and non-contradictory (bass present; fishery limited). |
| 1.11 | 1a | Structure | Largemouth: stump fields S of island (<1 m), SW reedy shallows, reservoir-wide stumps, weed growth | grandriver.ca Master Plan; uwaterloo | PASS | — | — | — | — | Structure physically documented; species-to-structure pairing flagged in 1a as habitat-type inference (see FLAG 1.13). |
| 1.12 | 1a | Structure | Smallmouth: 1.5–3 m deeper band toward dam; NE Laurel Creek inflow; no rock/gravel documented | grandriver.ca Master Plan | PASS | — | — | — | — | 1a explicitly states no smallmouth-suitable structure documented; honest. |
| 1.13 | 1a | Structure | Species-to-structure pairings are habitat-type inferences | grandriver.ca Master Plan | FLAG | overclaimed | — | — | — | 1a discloses this; no source ties species to structure. Non-blocking; Stage 4 must keep structure conservative. |
| 1.14 | 1a | Gotchas | Third-party aggregators claiming pike/walleye/crappie/perch/"lake trout"/"flathead catfish" discarded | hookandbullet; fishangler; fishboxapp | FLAG | contradicted_by_source | — | — | — | 1a correctly discards auto-generated aggregator content conflicting with the official record. Non-blocking. |
| 1.15 | 1a | Access | Gravel non-motorized launch, 625 Westmount Rd N; May 1–Oct 15; 3 trailer spots | grandriver.ca CA; Master Plan | PASS | — | — | — | — | Address, season, and capacity from GRCA. |
| 1.16 | 1a | Access | Motor rule: sail/windsurf/electric trolling only, no power boats | grandriver.ca boating | PASS | — | — | — | — | Quoted verbatim. |
| 1.17 | 1a | Access | Fee-access CA; camping May 1–Oct 15; fee amounts not stated | grandriver.ca CA | PASS | — | — | — | — | Honest under-bound (no fee figure claimed). |
| 1.18 | 1a | Stocking | No records in either official MNRF stocking dataset (name + geometry, verified negative) | MNRF stocking services | PASS | — | — | — | — | Not a stocked fishery; self-sustaining. |
| 1.19 | 1a | Notable | Dam completed 1966; flood control / low-flow / pollution abatement | grandriver.ca Master Plan; uwaterloo | PASS | — | — | — | — | Consistent across two sources. |
| 1.20 | 1a | Notable | One of only seven large multi-purpose flood-control reservoirs operated by GRCA | grandriver.ca reservoir-levels | PASS | — | — | — | HIGH | Re-verified live: GRCA operates exactly seven (Conestogo, Guelph, Laurel, Luther, Shade's Mills, Shand, Woolwich); Laurel is one. Superlative confirmed. |
| 1.21 | 1a | Notable | GRCA Master Plan: fishery "under-producing due to water level fluctuations (winter drawdown)" | grandriver.ca Master Plan | PASS | — | — | — | — | Quality ceiling, not a quality signal — correctly framed in 1a/1b. |
| 1.22 | 1a | Notable | SW corner reedy shallows/stump fields = waterfowl/shorebird staging / conservation-priority area | grandriver.ca Master Plan | PASS | — | — | — | — | Master Plan designation. |
| 1.23 | 1a | Gotchas | Distinct from Laurel Creek (stream below dam) and US same-name reservoirs | taxonomy; uwaterloo | PASS | — | — | — | — | Disambiguation correct; matches taxonomy/lakes.md. |
| 1.24 | 1a | Gotchas | Submerged/emergent stumps <1 m, navigation hazard, worse at drawdown | grandriver.ca CA; Master Plan | PASS | — | — | — | — | Documented paddler hazard. |
| 1.25 | 1a | Gotchas | Indigenous fisheries authority [NOT FOUND] | — | PASS | — | — | — | — | Honest gap; no source consulted addressed it. |
| 1.26 | 1a | Seasonal | Best bass window: late-June opener through fall at full summer pool; panfish all year | grandriver.ca Master Plan; FMZ 16 | PASS | — | — | — | — | Consistent with regs + reservoir operation. |
| 1.27 | 1a | Seasonal | Winter ~3.2 m drawdown dewaters most shallow habitat; cited cause of under-production | grandriver.ca Master Plan | PASS | — | — | — | — | Matches morphology + Master Plan assessment. |
| — | 1a | Live-data | Scan for today/current temp/wind/level readings | — | PASS | — | — | — | — | None found. Reservoir elevations (342.4 m / 339.2 m) are rule-curve design values, not live readings. Profile is evergreen. |

### Verdict definitions
- PASS — source loads and supports the claim
- FAIL — source dead, contradicts, or doesn't support
- FLAG — source supports a weaker claim; non-blocking, surfaced for Stage 4

## Audit 2 — Cross-file reconciliation (1a ↔ 1b)

| ID | Topic | 1a says | 1b says | Verdict | Required action | Action applied | Confidence | Notes |
|----|-------|---------|---------|---------|-----------------|-----------------|------------|-------|
| 2.1 | Largemouth structure | stump fields, SW reedy shallows, reservoir-wide stumps, weed growth | same set (Strong) | PASS — consistent | — | — | HIGH | Identical structure set; both mark pairing as habitat-type inference. |
| 2.2 | Smallmouth tier/structure | present, habitat-poor, 1.5–3 m band + NE inflow, no rock/gravel | Present; no smallmouth-suitable structure | PASS — consistent | — | — | HIGH | Both agree structure is unsuitable → Present, not higher. |
| 2.3 | Pike/Walleye/Crappie/Perch | [NOT FOUND] / undocumented | Absent ×4 | PASS — consistent | — | — | HIGH | Cross-lake mix-up handled identically in both files. |
| 2.4 | Tiers/counts | 2 target gamefish documented | destination 0 / strong 1 / present 1 / absent 4 | PASS — consistent | — | — | HIGH | 1b frontmatter counts match its body and 1a species list. |
| 2.5 | Quality ceiling | GRCA "under-producing / limited" | caps Largemouth below Destination | PASS — consistent | — | — | HIGH | Same reasoning in both. |

Reconciliation rule applied: official MNRF/GRCA sources govern throughout; both files already agree. No file was out of step; no edits.

## Audit 3 — Species tier-evidence sufficiency (Kelowna backstop, lake form)

| ID | Species | Tier | Structure in 1b | Matching in 1a | Quality signal | Sources | sigReqEvidence? | Verdict | Required action | Action applied | Confidence | Notes |
|----|---------|------|-----------------|-----------------|----------------|---------|-----------------|---------|-----------------|----------------|------------|-------|
| 3.1 | Largemouth Bass | Strong | stump fields, SW reedy shallows, reservoir-wide stumps, weeds | YES | none (GRCA "under-producing" = ceiling) | 2 | yes | PASS | — | — | HIGH | Named structure present and habitat-correct (warm/turbid/weedy/stump-filled). No quality signal → correctly capped at Strong, not Destination. |
| 3.2 | Smallmouth Bass | Present | 1.5–3 m band, NE inflow (no rock/gravel) | YES (structure exists but unsuitable) | none | 1 | yes | PASS | — | — | HIGH | Documented present but habitat-poor and no smallmouth-suitable structure → cannot exceed Present. Correct. |
| 3.3 | Northern Pike | Absent | (none) | NO | none | 0 | yes | PASS | — | — | HIGH | Undocumented in all official sources; primer mention is cross-lake mix-up. Absent correct. |
| 3.4 | Walleye | Absent | (none) | NO | none | 0 | yes | PASS | — | — | HIGH | Undocumented + not stocked + wrong habitat. Absent correct. |
| 3.5 | Black Crappie | Absent | (none) | NO | none | 0 | yes | PASS | — | — | HIGH | Undocumented; GRCA lists crappie for Guelph Lake / Shade's Mills, not Laurel Creek. Absent correct. |
| 3.6 | Yellow Perch | Absent | (none) | NO | none | 0 | yes | PASS | — | — | HIGH | Not in ARA summary or any GRCA source despite being tolerant/widespread → treated undocumented/absent. Defensible. |

No tier changes required. No Destination tiers claimed (correct — no survey CPUE, trophy, tournament, or stocking exists; GRCA rates the fishery "limited/under-producing"). No habitat-mismatch over-tiering.

## Audit 4 — Regulations integrity gate (LAKE-SPECIFIC, BLOCKING)

Re-verified live 2026-07-19 against the official Ontario Fishing Regulations Summary, FMZ 16 (ontario.ca), effective **December 08, 2025**. Source cached at `sources/ontario-fmz16-regs.md`. Every line in 1a matches the source wording exactly.

| ID | Species | Reg (season/limit/size) | Source | Official source? | Effective-dated? | Matches source exactly? | Verdict | Action applied | Notes |
|----|---------|--------------------------|--------|------------------|------------------|--------------------------|---------|----------------|-------|
| 4.1 | Largemouth & Smallmouth Bass (combined) | 4th Sat Jun–Nov 30; S-6/C-2; no size | ontario.ca FMZ16 | YES | YES (2025-12-08) | YES | PASS | — | Carded species = Largemouth (Strong); Smallmouth (Present) shares the combined reg. Both covered by this line. |
| 4.2 | Northern Pike | Jan 1–Mar 31 & 2nd Sat May–Dec 31; S-6/C-2 | ontario.ca FMZ16 | YES | YES | YES | PASS | — | Species not documented in this reservoir; reg carried for completeness only. |
| 4.3 | Walleye & Sauger (combined) | Jan 1–Mar 15 & 2nd Sat May–Dec 31; S-4/C-2, not >1 over 46 cm | ontario.ca FMZ16 | YES | YES | YES | PASS | — | Species not documented; completeness only. |
| 4.4 | Black Crappie (Crappie) | open all year; S-30/C-10 | ontario.ca FMZ16 | YES | YES | YES | PASS | — | Species not documented; completeness only. |
| 4.5 | Yellow Perch | open all year; S-50/C-25 | ontario.ca FMZ16 | YES | YES | YES | PASS | — | Species not documented; completeness only. |
| 4.6 | Sunfish | open all year; S-50/C-25 | ontario.ca FMZ16 | YES | YES | YES | PASS | — | Covers documented panfish (rock bass, pumpkinseed, bluegill, green sunfish). |
| 4.7 | Waterbody exception (Laurel Creek) | None — zone-wide regs apply | ontario.ca FMZ16 | YES | YES | YES | PASS | — | Confirmed: no Laurel Creek / Laurel Creek Reservoir / Waterloo entry in FMZ 16 exceptions or sanctuaries. |
| 4.8 | Bait note | FMZ 16 in Southern Bait Management Zone | ontario.ca FMZ16 | YES | YES | YES | PASS | — | Confirmed on source. |

**Regs gate: PASSED.** The only carded (Strong) species — Largemouth Bass — has its regulation on an official, effective-dated Government of Ontario source worded exactly. No `[UNVERIFIED]` flags needed. No regulation was invented.

## Schema-deviation flags
- None blocking. 1a frontmatter (`regs_source_verified: true`, `regs_effective_date: 2025-12-08`, `species_documented: 16`, `data_richness: MEDIUM`) is internally consistent with the body. 1b frontmatter counts (0/1/1/4) match its body and 1a's species list. No count drift.

## Edits applied summary
| FC ID | File | Action | Before | After | Source change |
|-------|------|--------|--------|-------|---------------|
| (none) | — | — | — | — | — |

## Edits deferred
| FC ID | File | Action | Reason |
|-------|------|--------|--------|
| (none) | — | — | — |

## Tier downgrades summary
| Species | Before | After |
|---------|--------|-------|
| (none) | — | — |

## Iteration history
- **Iteration 1** (2026-07-19): 27 PASS / 0 FAIL / 3 FLAG; regs gate passed; 0 edits; 0 deferred. FMZ 16 regs re-verified live; "seven GRCA reservoirs" superlative re-verified live; the two carried risks (cross-lake species mix-up, 1.5-trillion-litre storage typo) were already correctly disarmed by 1a and are logged as non-blocking FLAGs.

## Standing FLAGs for Stage 4 (carry forward)
- **FLAG 1.2 — storage figure:** Do not cite the Master Plan's "1.5 trillion litre" storage figure anywhere; it is a source typo (1a: do-not-propagate).
- **FLAG 1.13 — habitat-type inference:** No source ties species to structure. Keep species-to-structure framing conservative (stump fields / reedy shallows / deeper band as habitat types, not documented associations).
- **FLAG 1.14 — aggregator contamination:** Never reintroduce pike/walleye/crappie/perch/"lake trout"/"flathead catfish" — those are auto-generated aggregator claims contradicting the official record; they are Absent/undocumented here.

## Verdict
- **passed** — 0 FAILs remaining AND regs_gate passed. The 1a/1b substrate is accurate, internally consistent, and honestly under-bound (only 2 documented target gamefish; 1 Strong, 1 Present; no Destination). Downstream (Stage 4) may proceed. The three standing FLAGs are non-blocking and already disclosed in 1a; Stage 4 must honour them (no storage figure, conservative structure framing, no aggregator species).
