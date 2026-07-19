---
slug: fairy-lake-acton
lake: Fairy Lake
province: Ontario
fmz: 16
generated_at: 2026-07-19
iteration: 1
total_claims_checked: 27
pass_count: 22
fail_count: 2
flag_count: 3
regs_gate: passed
edits_applied: 4
edits_deferred: 0
re_audit_recommended: false
overall_status: passed
---

# Fact-Check & Correct: Fairy Lake (Acton) — Iteration 1

## Summary
- Claims audited: 27
- PASS / FAIL / FLAG: 22 / 2 / 3
- Regs gate: passed — every documented-species reg matches the official Ontario FMZ 16 summary (updated Dec 08, 2025) exactly; Fairy Lake confirmed absent from FMZ 16 exceptions/sanctuaries.
- Edits applied: 4 | deferred: 0
- Re-audit recommended: no — both FAILs resolved this pass at HIGH confidence; regs gate passed.
- Overall status: passed

Fairy Lake (Acton) is a small, shallow (mean ~1 m), warm-water 1830 mill-pond impoundment; its species record rests on angler-contributed databases (Angler's Atlas, Fishbrain) and angler blogs — no MNR assessment exists, correctly capping every tier at Strong (0 Destination). Two FAILs were fixed in-pass: the round-goby "August 2024" first-identification date is not supported by the cited CVC source (softened to CVC-confirmed presence, reported Oct 2024), and the max/mean-depth source PDF that 404s on direct fetch was re-verified via search ("average lake depth is 1 m") and its trophic descriptor upgraded to the WQ Study's sourced "shallow, alkaline, productive" characterization. The FMZ 16 regs verified verbatim against ontario.ca. Parry Sound District "Fairy Lake" data confirmed excluded.

## Audit 1 — Per-claim verification

| ID | File | Section | Claim (≤120 chars) | Source URL | Verdict | Category | Required action | Action applied | Confidence | Notes |
|----|------|---------|--------------------|------------|---------|----------|-----------------|----------------|------------|-------|
| 1.1 | 1a | Morphology | Surface area ~26 ha (LTHH) / 27.2 ha, 67 ac (AA) | letstalkhaltonhills; anglersatlas | PASS | — | — | — | HIGH | Both cached; LTHH "approximately 26 hectares", AA "27.2 hectares (~67 acres)". ~69 ac heritage figure disclosed as variant. |
| 1.2 | 1a | Morphology | Coordinates ~43.6248, -80.0485 | anglersatlas | PASS | — | — | — | HIGH | AA confirms 43.6248, -80.0485. |
| 1.3 | 1a | Morphology | Perimeter ~4.6 km | haltonhills WQ PDF (404) | FLAG | unverifiable | — | — | — | Direct PDF 404; not load-bearing; disclosed. Non-blocking. |
| 1.4 | 1a | Morphology | Max/mean depth: avg ~1 m; south end <2 m | haltonhills WQ PDF (404) | FAIL | unverifiable | REPLACE_SOURCE | Re-verified via search: WQ Study "average lake depth is 1 m"; annotated corroboration, kept PDF ref | HIGH | Direct PDF fetch 404, but figure confirmed via WQ Study search snippet 2026-07-19. |
| 1.5 | 1a | Morphology | Trophic status likely eutrophic/mesotrophic [NOT FOUND explicit] | letstalkhaltonhills | FLAG→fixed | overclaimed(gap) | REWRITE_CLAIM | Upgraded to WQ Study's sourced "shallow, alkaline, productive system … productive conditions" | HIGH | Now positively sourced rather than inferred; still no single-word classification. |
| 1.6 | 1a | Morphology | Too shallow to stratify; fully-mixed warm-water pond | inferred | PASS | — | — | — | HIGH | Sound inference from verified ~1 m mean depth; disclosed as inferred. |
| 1.7 | 1a | Morphology | Named basins: main + Prospect Park (14-ac peninsula) | haltonhills | PASS | — | — | — | MEDIUM | Peninsula/park description on haltonhills page. |
| 1.8 | 1a | Species | Largemouth Bass present (AA 8; Fishbrain 56) | anglersatlas; fishbrain | PASS | — | — | — | HIGH | AA cache lists LMB (8); "most popular … Largemouth Bass". |
| 1.9 | 1a | Species | Black Crappie present, "excellent" fishery (AA 8) | anglersatlas; argosgirl | PASS | — | — | — | HIGH | AA cache: Black Crappie (8), listed most-popular species. |
| 1.10 | 1a | Species | Northern Pike present (AA 5; Fishbrain 26) | anglersatlas; fishbrain | PASS | — | — | — | HIGH | AA cache confirms Northern Pike (5), most-popular species. |
| 1.11 | 1a | Species | Yellow Perch present (AA list) | anglersatlas | PASS | — | — | — | HIGH | AA cache confirms Yellow Perch (2). |
| 1.12 | 1a | Species | Smallmouth Bass marginal/incidental (AA only, LOW conf) | anglersatlas | PASS | — | — | — | HIGH | AA cache confirms SMB (3); 1a correctly hedges as marginal. |
| 1.13 | 1a | Species | Walleye anecdotal/incidental (few Fishbrain logs, LOW conf) | fishbrain | PASS | — | — | — | HIGH | Correctly treated as anecdotal; not on AA list. Habitat unsuitable (Audit 3). |
| 1.14 | 1a | Species | Pumpkinseed / Rock Bass / Brown Bullhead / Common Carp present | anglersatlas; fishbrain | PASS | — | — | — | HIGH | All on AA cache (Pumpkinseed 5, Rock Bass 2, Brown Bullhead 3, Common Carp 2). |
| 1.15 | 1a | Species | Round Goby (invasive), first identified Aug 2024, CVC-confirmed | cvc.ca | FAIL | contradicted_by_source | REWRITE_CLAIM | Softened to "CVC-confirmed present, reported Oct 2024"; removed unsupported Aug-2024 first-ID date | HIGH | CVC page confirms presence but states no first-ID month; posted Oct 17 2024. Aug-2024 traced to 404'd derby page. |
| 1.16 | 1a | Structure | Largemouth: north-end weed beds + submerged stumps, milfoil cover | argosgirl; haltonhills | PASS | — | — | — | MEDIUM | Angler-sourced; consistent with dominant-vegetation habitat on haltonhills page. |
| 1.17 | 1a | Structure | Black Crappie: north-end weed beds, spring/summer sight-fishing | argosgirl | PASS | — | — | — | MEDIUM | Angler-sourced named pattern; consistent. |
| 1.18 | 1a | Structure | Pike: weedy shallow bays/vegetated shoreline (no named spot) | argosgirl | PASS | — | — | — | MEDIUM | General ambush cover; correctly not named — caps pike at Present in 1b. |
| 1.19 | 1a | Access | Prospect Park carry-in launch; gas motors prohibited | argosgirl; anglersatlas | PASS | — | — | — | HIGH | AA cache: "no Motors allowed" (user); 1a hedges electric status honestly. |
| 1.20 | 1a | Access | Holy Cow Canoe on-site rentals (Sat/Sun/holidays May–mid-Sep) | insauga | FLAG | overclaimed | — | — | — | Secondary source (insauga); operator-adjacent detail, out of scope for Stage 4 (operators). Non-blocking. |
| 1.21 | 1a | Stocking | No stocking record located; Fish ON-Line not reached | — | PASS | — | — | — | HIGH | Honest [UNVERIFIED] gap; small urban pond, self-sustaining assumed. Not a fabricated claim. |
| 1.22 | 1a | Notable | 1830 Adams-brothers mill-pond dam on Black Creek | letstalkhaltonhills | PASS | — | — | — | HIGH | LTHH cache verbatim: "originated in 1830 when the Adams brothers built a dam on Black Creek". |
| 1.23 | 1a | Notable | Heritage designation for Prospect Park / Fairy Lake | haltonhills news | PASS | — | — | — | MEDIUM | Consistent with LTHH Implementation Plan / heritage framing. |
| 1.24 | 1a | Notable | Mayor's Fishing Derby ("Go for the Goby"); Implementation Plan 2025 | letstalkhaltonhills | PASS | — | — | — | HIGH | LTHH cache: "The Mayor's Fishing Derby - (2025)"; Plan approved May 2025 (CSE-2025-013). |
| 1.25 | 1a | Notable | Fairy Lake Revival / 2023 WQ Study Update / 2025 Implementation Plan | letstalkhaltonhills | PASS | — | — | — | HIGH | LTHH cache confirms 2010 study, 2023 update, 2025 plan. |
| 1.26 | 1a | Gotchas | Eurasian Water Milfoil + stonewort/hornwort/pondweed dominate cover | haltonhills | PASS | — | — | — | MEDIUM | Aquatic-vegetation dominance consistent with "productive system dominated by aquatic plants" (WQ Study). |
| 1.27 | 1a | Live-data | (scan for today/current temp/wind/level readings) | — | PASS | — | — | — | HIGH | None found; profile is evergreen. No live-data leak. |

### Verdict definitions
- PASS — source loads and supports the claim
- FAIL — source dead, contradicts, or doesn't support
- FLAG — source supports a weaker claim; non-blocking, surfaced for Stage 4

## Audit 2 — Cross-file reconciliation (1a ↔ 1b)

| ID | Topic | 1a says | 1b says | Verdict | Required action | Action applied | Confidence | Notes |
|----|-------|---------|---------|---------|-----------------|-----------------|------------|-------|
| 2.1 | Largemouth structure | north-end weed beds / stumps / lily-pad flat | same north-end weed/stump/lily-pad cover | PASS — compatible | — | — | HIGH | Consistent; Strong tier. |
| 2.2 | Black Crappie structure | north-end weed beds, sight-fishing | north-end weed beds | PASS — compatible | — | — | HIGH | Consistent; Strong tier. |
| 2.3 | Northern Pike | weedy bays, no named spot | Present — no named structure → capped | PASS — consistent | — | — | HIGH | 1a's "no specific named spot" is why 1b holds pike at Present, not Strong. Defensible. |
| 2.4 | Smallmouth / Walleye | marginal/incidental, LOW conf | Present / Absent (habitat eliminate) | PASS — consistent | — | — | HIGH | Both files agree these are not real fisheries. |
| 2.5 | Species tiers/counts | 10 species documented | destination 0 / strong 2 / present 3 / absent 1 | PASS — consistent | — | — | HIGH | 1b frontmatter counts intact; no tier change. |
| 2.6 | Lead species | "Black Crappie, Largemouth Bass, Northern Pike" | Strong: Largemouth, Black Crappie | PASS — compatible | — | — | MEDIUM | Pike is a lead species by angler volume but lacks named structure, so 1b caps it Present — a defensible rubric call, not a conflict. |

Reconciliation rule applied: official/managing-authority sources (Halton Hills, CVC, LTHH) outrank angler-report platforms (Fishbrain, Angler's Atlas, argosgirl). No cross-file conflicts required an edit.

## Audit 3 — Species tier-evidence sufficiency

| ID | Species | Tier | Structure in 1b | Matching in 1a | Quality signal | Sources | sigReqEvidence? | Verdict | Required action | Action applied | Confidence | Notes |
|----|---------|------|-----------------|-----------------|----------------|---------|-----------------|---------|-----------------|----------------|------------|-------|
| 3.1 | Largemouth Bass | Strong | north-end weed beds/stumps, lily-pad flat | YES | highest angler catch volume; lead community-fishery species (angler-sourced) | 3 | yes | PASS | — | — | HIGH | Named structure present; no MNR/trophy/stocking signal → correctly capped Strong, not Destination. |
| 3.2 | Black Crappie | Strong | north-end weed beds | YES | "excellent" crappie fishery + repeatable spring/summer sight pattern (angler-sourced) | 2 | yes | PASS | — | — | HIGH | Named structure + distinct pattern; angler-only signal → Strong is the ceiling. |
| 3.3 | Northern Pike | Present | (none named) | NO | angler reports only | 0 | yes | PASS | — | — | HIGH | Correctly held at Present: no named structure clears the Strong bar. Not over-tiered. |
| 3.4 | Smallmouth Bass | Present | (none) | NO | single-DB listing, LOW conf | 0 | yes | PASS | — | — | HIGH | Habitat eliminate profile (no rock/gravel, warm/weedy); Present is charitable. |
| 3.5 | Walleye | Absent | (none) | NO | anecdotal Fishbrain only | 0 | yes | PASS | — | — | HIGH | Matches taxonomy "eliminate" (small, clear, warm, weedy, mean ~1 m); Absent correct. |
| 3.6 | Yellow Perch | Present | (none named) | NO | AA list | 0 | yes | PASS | — | — | HIGH | Documented panfish, no differentiator → Present correct. |

No tier changes required. No Destination tiers claimed (correct — the fishery rests entirely on angler-contributed data; no official CPUE/trophy/stocking/tournament quality signal exists — the "Go for the Goby" derby targets invasive removal, not a gamefish signal). No habitat-mismatch over-tiering.

## Audit 4 — Regulations integrity gate (BLOCKING)

Verified live against the official Ontario Fishing Regulations Summary, FMZ 16 (ontario.ca), **updated December 08, 2025** (2026 licence year). Cached at `sources/fmz16-regulations.md`. Every documented-species line matches the source wording exactly.

| ID | Species | Reg (season/limit/size) | Source | Official source? | Effective-dated? | Matches source exactly? | Verdict | Action applied | Notes |
|----|---------|--------------------------|--------|------------------|------------------|--------------------------|---------|----------------|-------|
| 4.1 | Largemouth & Smallmouth Bass (combined) | 4th Sat Jun–Nov 30; S-6/C-2; no size | ontario.ca FMZ16 | YES | YES (2025-12-08) | YES | PASS | — | Source: "fourth Saturday in June to November 30 … S-6 and C-2." Carries both Strong Largemouth and Present Smallmouth. |
| 4.2 | Black Crappie | open all year; S-30/C-10; no size | ontario.ca FMZ16 | YES | YES | YES | PASS | — | Source: "Crappie … open all year … S-30 and C-10." Exact. |
| 4.3 | Northern Pike | Jan 1–Mar 31 & 2nd Sat May–Dec 31; S-6/C-2; no size | ontario.ca FMZ16 | YES | YES | YES | PASS | — | Exact. (Pike is Present, but reg verified for completeness.) |
| 4.4 | Walleye (+Sauger) | Jan 1–Mar 15 & 2nd Sat May–Dec 31; S-4/C-2, not >1 over 46 cm | ontario.ca FMZ16 | YES | YES | YES | PASS | — | Exact; "not more than 1 greater than 46 centimetres." (Walleye Absent — not carded.) |
| 4.5 | Yellow Perch | open all year; S-50/C-25 | ontario.ca FMZ16 | YES | YES | YES | PASS | — | Exact. |
| 4.6 | Sunfish (incl. Pumpkinseed) | open all year; S-50/C-25 | ontario.ca FMZ16 | YES | YES | YES | PASS | — | Exact. |
| 4.7 | Muskellunge (reference) | 1st Sat Jun–Dec 15; S-1 (>91 cm)/C-0 | ontario.ca FMZ16 | YES | YES | YES | PASS | — | Exact. Musky not documented in Fairy Lake — reference only. |
| 4.8 | Waterbody exception (Fairy Lake) | None — zone-wide regs apply | ontario.ca FMZ16 | YES | YES | YES | PASS | — | Confirmed: Fairy Lake absent from FMZ 16 exceptions and sanctuaries. |
| 4.9 | Bait note | FMZ 16 in Southern Bait Management Zone | ontario.ca FMZ16 | YES | YES | YES | PASS | — | "Live or dead baitfish or leeches may not be transported into or out of a BMZ." |

**Regs gate: PASSED.** All carded (Strong) species — Largemouth Bass and Black Crappie — plus every other documented species trace to the official Government of Ontario FMZ 16 source, are effective-dated (updated 2025-12-08, 2026 licence year), and are worded exactly. No `[UNVERIFIED]` flags needed. No regs invented.

## Schema-deviation flags
- Non-blocking. 1a frontmatter `regs_source_verified: true` and `regs_effective_date: 2025-12-08` are consistent with the verified source (summary updated Dec 08, 2025). 1b tier counts (0/2/3/1) match its body. No count drift.

## Edits applied summary
| FC ID | File | Action | Before | After | Source change |
|-------|------|--------|--------|-------|---------------|
| 1.15 | 1a | REWRITE_CLAIM | Round goby "first identified in Fairy Lake Aug 2024; CVC-confirmed" (×2: Species list + Gotchas) | "confirmed present … by CVC (reported Oct 2024); a specific first-identification month is not confirmed by the CVC source" | Same CVC URL; unsupported date removed |
| 1.4 | 1a | REPLACE_SOURCE | Depth cite: WQ Study PDF "(via search; direct fetch 404)" | Same PDF ref annotated: "'The average lake depth is 1 m' corroborated via search 2026-07-19; direct PDF fetch 404s" | Search-corroborated, PDF ref retained |
| 1.5 | 1a | REWRITE_CLAIM | Trophic "likely eutrophic/mesotrophic but [NOT FOUND] as an explicit designation" | WQ Study sourced: "shallow, alkaline, and productive system dominated by aquatic plants … productive conditions" (eutrophic-leaning) | Added WQ Study PDF source |

(Edits 1.15 counts as two textual replacements in one FAIL; total distinct file edits applied = 4.)

## Edits deferred
| FC ID | File | Action | Reason |
|-------|------|--------|--------|
| (none) | — | — | — |

## Tier downgrades summary
| Species | Before | After |
|---------|--------|-------|
| (none) | — | — |

## Iteration history
- **Iteration 1** (2026-07-19): 22 PASS / 2 FAIL / 3 FLAG; regs gate passed; 4 edits; 0 deferred. Both FAILs (round-goby date unsupported by CVC source; depth-source PDF 404) resolved HIGH-confidence in-pass. Regs verified verbatim against ontario.ca FMZ 16.

## Verdict
- **passed** — 0 FAILs remaining AND regs_gate passed. Every FMZ 16 reg matches the official source exactly; both Strong species (Largemouth Bass, Black Crappie) have named 1a structure; no Destination over-tiering; round-goby claim softened to what CVC supports; depth/trophic re-sourced from the WQ Study. Species evidence remains angler-sourced (no MNR assessment) — correctly capping the lake at Strong — and Stage 4 should carry that ceiling forward. Downstream (Stage 4) may proceed.
