---
slug: guelph-lake
lake: Guelph Lake
generated_at: 2026-07-18
iteration: 1
paragraphs_audited: 7
cards_audited: 3
voice_pass / voice_fail / voice_flag: 7/0/0
quality_pass / quality_fail / quality_flag: 6/0/0
live_data_leaks_found: 0
regs_integrity: passed
edits_applied: 0
edits_deferred: 0
re_audit_recommended: false
overall_status: passed
---

# Voice/Quality Audit & Revise: Guelph Lake — Iteration 1

## Summary
- Voice PASS/FAIL/FLAG: 7/0/0
- Quality PASS/FAIL/FLAG: 6/0/0
- Live-data leaks: 0 | Regs integrity: passed
- Edits applied: 0 | deferred: 0
- Re-audit recommended: no — every row PASS, all checks clear, no live data, regs integrity passed
- Overall status: passed

Stage 4's `04-lake-copy.md` for Guelph Lake passes cleanly on the first pass. Every paragraph and card leads with named structure pulled from 1a (Speed River, Guelph Dam, Wellington Rd 124, the conservation-area basin, Fishbrain counts), carries no filler adverbs, brochure phrases, or unsourced superlatives, and stays evergreen. Counts reconcile (species_count 3 = three Strong cards), no live-data leaks, and the two carded regs match 1a's official FMZ 16 wording exactly with source, date, and disclaimer intact. No edits required.

## Audit V — Per-paragraph voice checks

| ID | Section | Para (≤80 chars) | Names ≥1 specific? | No filler adverbs? | No brochure phrases? | No unsourced superlatives? | Substantive w/o proper nouns? | Verdict | Category | Required action | Action applied | Confidence | Notes |
|----|---------|-------------------|----|----|----|----|----|---------|----------|-----------------|----------------|------------|-------|
| V.1 | Overview | "Guelph Lake is a mid-sized flood-control reservoir on the Speed River..." | ✓ | ✓ | ✓ | ✓ | ✓ | PASS | — | — | — | HIGH | Names Speed River, Guelph Dam, GRCA, Wellington Rd 124, Guelph Lake CA, Conservation Drive; explains habitat split, electric-only rule, drawdown. 136 words. |
| V.2 | Notable Facts | "Guelph Lake is one of the main flood-control reservoirs...; Fishbrain 173..." | ✓ | ✓ | ✓ | ✓ | ✓ | PASS | — | — | — | HIGH | Sourced-claim bullets; every claim carries a URL. "single most-logged" sourced to Fishbrain; no brochure/superlative filler. |
| V.3 | Smallmouth card | "Smallmouth are the single most-logged species on Guelph Lake (Fishbrain: 173)..." | ✓ | ✓ | ✓ | ✓ | ✓ | PASS | — | — | — | HIGH | Dam basin, rubble conservation-area basin, Wellington Rd 124, autumn drawdown pattern. Superlative "most-logged" is sourced. 84 words. |
| V.4 | Largemouth card | "Largemouth live in the shallow, weed-choked water of Guelph Lake's back bays..." | ✓ | ✓ | ✓ | ✓ | ✓ | PASS | — | — | — | HIGH | Back bays, river-arm flats, eastern portion, Wellington Rd 124, spinnerbaits/crankbaits. "top three most-reported" sourced (Fishbrain). 79 words. |
| V.5 | Pike card | "Pike are the second-most-reported species on the lake (Fishbrain: 146)..." | ✓ | ✓ | ✓ | ✓ | ✓ | PASS | — | — | — | HIGH | Weed edges, vegetated bays, shallow upper end, GRCA ice-fishing. "classic pike habitat" idiom has named specifics attached. 82 words. |
| V.6 | Regulations snapshot | "Regulations effective 2026-01-01, FMZ 16... Smallmouth & Largemouth (combined)..." | ✓ | ✓ | ✓ | ✓ | ✓ | PASS | — | — | — | HIGH | See Audit R for reg-value integrity. Disclaimer + FMZ 16 + dated + sourced. |
| V.7 | Also present line | "Also present: Black Crappie, Yellow Perch." | ✓ | ✓ | ✓ | ✓ | ✓ | PASS | — | — | — | HIGH | Names both Present species per template; correctly demoted to one line. |

### Voice check result
7/7 paragraphs PASS (100%). No filler adverbs, brochure phrases, or unsourced superlatives found. Every card and the overview name real structure from 1a and remain substantive after stripping proper nouns.

## Audit Q — Quality & substrate checks
| ID | Check | Verdict | Required action | Action applied | Confidence | Notes |
|----|-------|---------|-----------------|----------------|------------|-------|
| Q.1 | species_count matches Destination+Strong card count | PASS | — | — | HIGH | Frontmatter species_count: 3 = three Strong cards (SMB, LMB, Pike). No Destination. |
| Q.2 | Every species card names a real structure from 1a | PASS | — | — | HIGH | SMB: dam basin + conservation-area rubble shoreline. LMB: weedy back bays + river-arm flats. Pike: weed edges/beds + shallow river arms. All present in 1a In-lake structure. |
| Q.3 | Every Destination card reflects a quality signal | PASS | — | — | HIGH | Zero Destination cards (1b found no citable quality signal). Vacuously satisfied — no over-tiering. |
| Q.4 | No structure invented beyond 1a | PASS | — | — | HIGH | No shoal/point/depth names invented; only geographic/habitat structure from 1a (no public bathymetry, correctly respected). |
| Q.5 | Overview 90–180 words; cards 40–110 | PASS | — | — | HIGH | Overview 136; SMB 84, LMB 79, Pike 82 — all in range. |
| Q.6 | Standing FLAGs from Stage 2 handled | PASS | — | — | HIGH | FC 1.14 (hooklineandsinker 403) leads (Wellington Rd 124 split, weedy east-side habitat) used only as non-load-bearing structure/geo context, per Stage 2 note. Walleye omitted (Absent). Depth gaps respected — no depth figures written. |

## Audit L — No-live-data check
| ID | Location | Offending text | Verdict | Action applied | Notes |
|----|----------|----------------|---------|----------------|-------|
| L.1 | Overview | "Reservoir levels are drawn down through autumn and refilled in spring" | PASS | — | Seasonal pattern, not a current reading — retained. |
| L.2 | Smallmouth card | "As the reservoir draws down through autumn, expect fish to concentrate..." | PASS | — | Seasonal drawdown pattern — evergreen, retained. |

No current/today live-conditions or "bite is on" language anywhere. `live_data_leaks_found` = 0.

## Audit R — Regulations integrity check (BLOCKING)
| ID | Check | Verdict | Action applied | Notes |
|----|-------|---------|----------------|-------|
| R.1 | Every carded species' reg matches 1a exactly | PASS | — | Bass (combined): "fourth Saturday in June to November 30 — S-6 / C-2 — none" matches 1a verbatim. Pike: "January 1 to March 31, and second Saturday in May to December 31 — S-6 / C-2 — none" matches 1a verbatim. No rounding/paraphrase. Bait/BMZ note and "no waterbody exception" also match 1a. |
| R.2 | Each reg carries the official source URL | PASS | — | Both reg lines + bait note + exception line carry ontario.ca FMZ 16 / Variation Order URLs. |
| R.3 | Effective date present | PASS | — | Header: "Regulations effective 2026-01-01, FMZ 16" — matches 1a's normalized licence-year start. |
| R.4 | Disclaimer line present and unaltered | PASS | — | Matches template disclaimer word-for-word. |
| R.5 | Any [UNVERIFIED] species shows the pointer, not a stated season/limit | PASS | — | No carded species is [UNVERIFIED]; all carded regs are fully verified in 1a. No pointer needed. |

**Regs integrity: PASSED.** Both carded regulations trace to the official FMZ 16 source, are worded exactly as 1a, dated, sourced, and disclaimed. No invented or paraphrased limits.

## Edits applied summary
| ID | Section | Action | Before (truncated) | After (truncated) |
|----|---------|--------|--------------------|--------------------|
| — | — | — | (none — 0 FAIL rows) | — |

## Edits deferred
| ID | Section | Action | Reason |
|----|---------|--------|--------|
| — | — | — | (none) |

## Iteration history
- **Iteration 1** (2026-07-18): voice 7/0/0; quality 6/0/0; live leaks 0; regs integrity passed; 0 edits; 0 deferred. Clean pass — no FAIL rows.

## Verdict
- `passed` — 0 FAILs after audit, 0 live-data leaks, regs_integrity passed. All rows HIGH confidence, no deferred fixes. `re_audit_recommended: false`. `04-lake-copy.md` left unmodified (already conformant to voice, schema, substrate, and regs rules). Handoff to Stage 4b / Stage 7 may proceed on the existing copy.
