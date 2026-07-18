---
slug: guelph-lake
lake: Guelph Lake
province: Ontario
fmz: 16
generated_at: 2026-07-18
iteration: 1
total_claims_checked: 34
pass_count: 30
fail_count: 2
flag_count: 2
regs_gate: passed
edits_applied: 6
edits_deferred: 0
re_audit_recommended: false
overall_status: passed
---

# Fact-Check & Correct: Guelph Lake — Iteration 1

## Summary
- Claims audited: 34 (Audit 1: 21, Audit 2: 3, Audit 3: 6, Audit 4: 4 reg lines + gate)
- PASS / FAIL / FLAG: 30 / 2 / 2
- Regs gate: passed — every target-species reg matches the official Ontario FMZ 16 summary exactly; effective date normalized to 2026-01-01 (licence-year start) to match the Conestogo run.
- Edits applied: 6 | deferred: 0
- Re-audit recommended: no — all fixes HIGH confidence, 0 deferred, regs gate passed.
- Overall status: passed

Guelph Lake 1a/1b hold up well. The two FAILs were both mechanical/attribution issues, not fabrications: (1) the regs `effective_date` was set to the summary publish date (2025-12-08) instead of the licence-year start (2026-01-01) — normalized so lake pages are consistent with Conestogo; (2) the "50%+ flood peak reduction" fact was attributed to Wikipedia, which does not carry that figure — the GRCA dams page (which does) was added. All six target/present-species regs verified verbatim against the official Government of Ontario FMZ 16 source. Walleye is consistently treated as not-present across both files (Audit 2 PASS) and its Absent tier is well-justified. The three Strong species are correctly capped at Strong (no over-tiering to Destination). Stocking / Fish ON-Line GIS endpoints remain unreachable (infrastructure gap) and are correctly left [UNVERIFIED], not invented.

## Audit 1 — Per-claim verification

| ID | File | Section | Claim (≤120 chars) | Source URL | Verdict | Category | Required action | Action applied | Confidence | Notes |
|----|------|---------|--------------------|------------|---------|----------|-----------------|----------------|------------|-------|
| 1.1 | 1a | Morphology | Surface area ~178.7 ha (442 ac) | anglersatlas.com/place/729045 | PASS | — | — | — | — | Confirmed verbatim: "178.7 hectares (approximately 442 acres or 1.8 square kilometers)". |
| 1.2 | 1a | Morphology | GRCA fishing page cites 240-ha reservoir; treat ~180–240 ha | grandriver.ca fishing-grca | PASS | — | — | — | — | Range-hedged; consistent with full-pool vs Anglers Atlas figure. |
| 1.3 | 1a | Morphology | Max/mean depth [NOT FOUND]; no public bathymetry | (n/a) | PASS | — | — | — | — | Honestly marked NOT FOUND; not a claim. |
| 1.4 | 1a | Morphology | Water stained/murky per angler reports | argosgirloutdoors.com | PASS | — | — | — | — | Consistent with Grand-system reservoir; hedged. |
| 1.5 | 1a | Morphology | Reservoir on Speed River behind Guelph Dam (completed 1974–1976) | en.wikipedia.org/wiki/Guelph_Lake | PASS | — | — | — | — | Wiki: reservoir created 1974; GRCA: dam completed 1976. 1a's "1974–1976" reconciles both. |
| 1.6 | 1a | Morphology | Flood-control reservoir, cut flood peaks by 50%+ | en.wikipedia.org/wiki/Guelph_Lake | FAIL | wrong_attribution | REPLACE_SOURCE (add) | added GRCA dams page (carries the 50%+ figure); Wiki retained for flood-control role | HIGH | Wikipedia describes flood-control role but does NOT state 50%+; GRCA dams page does. |
| 1.7 | 1a | Species present | 6 gamefish incl. smallmouth, largemouth, pike, crappie, perch | grandriver.ca CA page | PASS | — | — | — | — | GRCA lists: N. pike, smallmouth, largemouth, black crappie, yellow perch, carp. Exact. |
| 1.8 | 1a | Species present | Anglers Atlas 11 species; walleye & gar "disputed" | anglersatlas.com/place/729045 | PASS | — | — | — | — | Confirmed: 11 species; both walleye and longnose gar marked disputed. |
| 1.9 | 1a | Species present | Carp, pumpkinseed, brown bullhead, white sucker present | anglersatlas.com/place/729045 | PASS | — | — | — | — | All in the Anglers Atlas species list. |
| 1.10 | 1a | Notable facts | Smallmouth single most-logged species (Fishbrain 173 anglers) | fishbrain.com/…/guelph-lake | PASS | — | — | — | — | Confirmed: smallmouth 173 members, #1 ranked; "most popular for … Smallmouth bass". |
| 1.11 | 1a | Structure/Notable | Pike 146 anglers; largemouth 123 anglers (Fishbrain) | fishbrain.com/…/guelph-lake | PASS | — | — | — | — | Confirmed verbatim (pike 146 #2, largemouth 123 #3). |
| 1.12 | 1a | Notable facts | Trophy smallmouth >50 cm (20 in) reported in summer | trekandangle.com | PASS | — | — | — | — | Angler report; page loads; "Trophy-sized fish over 50cm (20in) … deep-water structures". Tagged as angler report in 1a. |
| 1.13 | 1a | Structure > SMB | Deep-water structure toward dam arm; fan-cast shoreline | trekandangle.com | PASS | — | — | — | — | Angler-report structure lead, tagged as such. |
| 1.14 | 1a | Structure > LMB/Pike | Weedy bays; spinnerbaits/crankbaits; east/west split at Wellington Rd 124 | hooklineandsinker.ca | FLAG | unverifiable | REPLACE_SOURCE (deferred) | left as-is; angler-report lead only, corroborated by search cache | MEDIUM | URL returns HTTP 403 (soft-wall); 1a already read via search cache and tagged angler-report lead. Not tier-load-bearing. |
| 1.15 | 1a | Access | Electric-motor-only; outboards & PWC prohibited | grandriver.ca CA page | PASS | — | — | — | — | Confirmed verbatim. |
| 1.16 | 1a | Access | Boat launches: 4 on CA page (3 w/ docks); fishing page says 3 (2 docks) | grandriver.ca CA + fishing | PASS | — | — | — | — | CA page confirms "four boat launches, with three equipped with docks". Both figures cited. |
| 1.17 | 1a | Access | CA 420 ha; camping May 1–Oct 15; open year-round | grandriver.ca CA page | PASS | — | — | — | — | Confirmed: 420 ha, "camping from May 1 to October 15", open year-round. |
| 1.18 | 1a | Morphology/Notable | Dam has small 100 kW hydro facility | en.wikipedia.org/wiki/Guelph_Lake | PASS | — | — | — | — | Confirmed verbatim: "produces 100 kilowatts (KW) of power". |
| 1.19 | 1a | Seasonal | Spring fill / summer release / autumn drawdown | en.wikipedia.org/wiki/Guelph_Lake | PASS | — | — | — | — | Confirmed verbatim. |
| 1.20 | 1a | Seasonal/Notable | Official GRCA ice-fishing water: pike, perch, crappie | grandriver.ca ice-fishing | PASS | — | — | — | — | Confirmed: "Fish: northern pike, perch, black crappie". |
| 1.21 | 1a | Stocking | No stocking record retrievable; Fish Stocking API TLS/unreachable | geohub.lio.gov.on.ca | PASS | — | — | — | — | Re-checked: endpoint returns title only, no queryable data. [UNVERIFIED] correctly retained (infra gap, not fabrication). |

## Audit 2 — Cross-file reconciliation (1a ↔ 1b)

| ID | Topic | 1a says | 1b says | Verdict | Required action | Action applied | Confidence | Notes |
|----|-------|---------|---------|---------|-----------------|-----------------|------------|-------|
| 2.1 | Walleye presence | "disputed / UNCONFIRMED presence — do not tier as present" | "Absent (undocumented)" | PASS — compatible | — | — | HIGH | Both treat walleye as not-present. 1a's "unconfirmed" + explicit "do not tier as present" is consistent with 1b's Absent. No contradiction. |
| 2.2 | Smallmouth structure | "deep-water structure toward dam arm; conservation-area basin" | "deeper main-lake basin toward dam with points/drop-offs/weedbed edges" | PASS — compatible | — | — | HIGH | Same source basis (angler report + GRCA); descriptions align. |
| 2.3 | Most-reported ranking | smallmouth > pike > largemouth (Fishbrain 173/146/123) | smallmouth most-reported; pike 2nd; largemouth top-3 | PASS — compatible | — | — | HIGH | Consistent with verified Fishbrain data. |

## Audit 3 — Species tier-evidence sufficiency

| ID | Species | Tier | Structure in 1b | Matching in 1a | Quality signal | Sources | sigReqEvidence? | Verdict | Required action | Action applied | Confidence | Notes |
|----|---------|------|-----------------|-----------------|----------------|---------|-----------------|---------|-----------------|----------------|------------|-------|
| 3.1 | Smallmouth Bass | Strong | deeper dam basin, points/drop-offs, weed edges | YES | most-reported species (Fishbrain 173) — differentiator, NOT an official CPUE/trophy/stocking | 2 | yes | PASS | — | — | HIGH | Correctly NOT Destination (no official quality signal). Named structure present in 1a. Strong justified. |
| 3.2 | Largemouth Bass | Strong | shallow weedy upper arms, weedy bays | YES | top-3 reported (Fishbrain 123) + named weedy habitat fit | 2 | yes | PASS | — | — | HIGH | Correctly NOT Destination. Named structure in 1a. Strong justified. |
| 3.3 | Northern Pike | Strong | weedy bays, weedlines, river-arm inflows, weedbed drop-offs | YES | 2nd-most reported (Fishbrain 146) + "good-sized pike" (angler/guide, not official) | 2 | yes | PASS | — | — | HIGH | "Good-sized" correctly treated as non-official; not lifted to Destination. Named structure in 1a. |
| 3.4 | Walleye | Absent | (none) | (none — presence unconfirmed) | none | 0 | yes | PASS | — | — | HIGH | Absent justified: not on GRCA list, disputed on Anglers Atlas, documented in nearby GRCA reservoirs (Conestogo/Belwood) → meaningful negative. Consistent w/ 1a. |
| 3.5 | Black Crappie | Present | weedy bays / weed edges | YES (partial) | present-level only; no differentiator | 0 (in 1b) | yes | PASS | — | — | HIGH | Correctly Present; angler 12"+ PB is not a citable quality signal. |
| 3.6 | Yellow Perch | Present | weed edges, mid-depth flats | YES | present-level only; also forage | 0 (in 1b) | yes | PASS | — | — | HIGH | Correctly Present; no differentiator. |

Sufficiency check: All three Strong species have named structure in 1a (required for Strong) — confirmed. None reached Destination, and none should have — no MNR CPUE, official trophy, stocking, or tournament signal exists for any species. No over-tiering. No downgrades required.

## Audit 4 — Regulations integrity gate (BLOCKING)

| ID | Species | Reg (season/limit/size) | Source | Official source? | Effective-dated? | Matches source exactly? | Verdict | Action applied | Notes |
|----|---------|--------------------------|--------|------------------|------------------|--------------------------|---------|----------------|-------|
| 4.1 | Smallmouth & Largemouth Bass (combined) | 4th Sat Jun–Nov 30; S-6/C-2; no size | ontario.ca FMZ16 | YES | YES (2026-01-01; summary updated 2025-12-08) | YES | PASS | REWRITE_CLAIM (date normalize) | Official: "fourth Saturday in June to November 30", S-6/C-2. Exact. |
| 4.2 | Northern Pike | Jan 1–Mar 31 & 2nd Sat May–Dec 31; S-6/C-2; no size | ontario.ca FMZ16 | YES | YES (2026-01-01) | YES | PASS | REWRITE_CLAIM (date normalize) | Official: "January 1 to March 31 and second Saturday in May to December 31", S-6/C-2. Exact. |
| 4.3 | Walleye & Sauger (combined) | Jan 1–Mar 15 & 2nd Sat May–Dec 31; S-4/C-2; not >1 over 46 cm | ontario.ca FMZ16 | YES | YES (2026-01-01) | YES | PASS | REWRITE_CLAIM (date normalize) | Official: "not more than 1 greater than 46 centimetres" — matches. (Walleye not-present in-lake, but zone reg documented correctly.) |
| 4.4 | Black Crappie / Yellow Perch | open all year; S-30/C-10 (crappie), S-50/C-25 (perch); no size | ontario.ca FMZ16 | YES | YES (2026-01-01) | YES | PASS | REWRITE_CLAIM (date normalize) | Both "open all year"; limits match official exactly. |
| 4.5 | Bait / BMZ | Southern BMZ — no transport of live/dead baitfish or leeches (preserved-dead OK) | ontario.ca FMZ16 | YES | YES (2026-01-01) | YES | PASS | — | Official wording confirmed verbatim. |
| 4.6 | Waterbody exception | NONE for Guelph Lake (FMZ summary + Variation Order) | ontario.ca FMZ16 + Variation Order | YES | YES | YES | PASS | — | No Guelph Lake / Speed River / Guelph Dam exception — zone-wide regs apply. |

**Regs gate: PASSED.** Every target-species regulation traces to the official Government of Ontario FMZ 16 source, is worded exactly as the source, and is effective-dated. The only correction was the effective-date normalization (see below). No `[UNVERIFIED]` flags needed. No regs were invented.

### Effective-date resolution (the cross-lake inconsistency)
The official FMZ 16 summary states it "was updated December 08, 2025, and applies to the 2026 fishing season." The `2025-12-08` value used in Guelph 1a was the summary **publish/update** date, not the effective date. The regulations take effect for the 2026 licence year, whose start is **2026-01-01** — which is what the Conestogo run in this pipeline used for the identical FMZ 16 regs, and matches Audit 4's own example row `(2026-01-01)`. **Normalized Guelph 1a to `2026-01-01`** (retaining "summary updated 2025-12-08" as context) so lake pages are consistent.

## Schema-deviation flags
- None blocking. 1a frontmatter now `regs_effective_date: 2026-01-01` (was 2025-12-08), consistent with the verified source and the Conestogo run. `regs_source_verified: true` unchanged. 1b tier counts (0/3/2/1 = 6 scored gamefish) match its body exactly — no count drift. `species_documented: 10` in 1a matches its body.

## Edits applied summary
| FC ID | File | Action | Before | After | Source change |
|-------|------|--------|--------|-------|---------------|
| 4.x | 1a | REWRITE_CLAIM | frontmatter `regs_effective_date: 2025-12-08` | `2026-01-01` | none |
| 4.x | 1a | REWRITE_CLAIM | Regs section header + 5 reg lines "effective 2025-12-08" | "effective 2026-01-01" (header notes summary updated 2025-12-08, applies to 2026 season) | none |
| 4.x | 1a | REWRITE_CLAIM | Confidence "Regs source verified … effective 2025-12-08" | "… effective 2026-01-01 (licence-year start)" | none |
| 4.x | 1a | REWRITE_CLAIM | Downstream note "effective 2025-12-08" | "effective 2026-01-01 for the 2026 season; summary updated 2025-12-08" | none |
| 1.6 | 1a | REPLACE_SOURCE (add) | Notable fact "50%+ flood peaks — Wikipedia only" | attributes 50%+ to GRCA dams page; Wiki kept for flood-control role | + grandriver.ca/our-watershed/dams-and-reservoirs/grca-dams/ |
| 1.6 | 1a | REPLACE_SOURCE (add) | Morphology reservoir-dynamics "cut flood peaks 50%+ — Wikipedia" | same attribution fix in morphology line | + grandriver.ca/our-watershed/dams-and-reservoirs/grca-dams/ |

## Edits deferred
| FC ID | File | Action | Reason |
|-------|------|--------|--------|
| 1.14 | 1a | REPLACE_SOURCE | hooklineandsinker.ca returns HTTP 403 (soft-wall). Claims it supports (weedy bays, east/west split at Wellington Rd 124, east-side carry-in) are angler-report leads already tagged as such and corroborated by search cache; not tier-load-bearing. FLAG only — no clean authoritative replacement found this pass; not worth blocking. |

## Tier downgrades summary
| Species | Before | After |
|---------|--------|-------|
| (none) | — | — |

## Iteration history
- **Iteration 1** (2026-07-18): 30 PASS / 2 FAIL / 2 FLAG; regs gate passed; 6 edits applied; 0 deferred (1 FLAG deferred as non-blocking). Both FAILs resolved (effective-date normalization; flood-peak attribution). No tier changes.

## Verdict
- `passed` — 0 FAILs remaining, regs_gate passed, all fixes HIGH confidence. Downstream (Stage 4) proceeds. 1b required no edits. The one standing FLAG (hooklineandsinker 403) is angler-report structure only and non-blocking; Stage 4 may treat those leads accordingly. Stocking / Fish ON-Line remain [UNVERIFIED] due to unreachable government GIS endpoints — infrastructure gap, not fabrication.
