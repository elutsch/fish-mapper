---
slug: wildwood-reservoir
lake: Wildwood Reservoir
generated_at: 2026-07-19
iteration: 1
paragraphs_audited: 7
cards_audited: 2
voice_pass / voice_fail / voice_flag: 6/0/1
quality_pass / quality_fail / quality_flag: 6/0/0
live_data_leaks_found: 0
regs_integrity: passed
edits_applied: 0
edits_deferred: 0
re_audit_recommended: false
overall_status: passed
---

# Voice/Quality Audit & Revise: Wildwood Reservoir — Iteration 1

## Summary
- Voice PASS/FAIL/FLAG: 6/0/1
- Quality PASS/FAIL/FLAG: 6/0/0
- Live-data leaks: 0 | Regs integrity: passed
- Edits applied: 0 | deferred: 0
- Re-audit recommended: no — 0 FAILs, 0 live-data leaks, regs verbatim; the single FLAG is a non-blocking Stage-7 parsing note.
- Overall status: passed

The Stage 4 copy lands the Bite Club register cleanly. Every paragraph rides on a sourced specific (Wildwood Dam, Trout Creek, the 3.5-metre drawdown, the dam basin, 12–15 ft, the Line 9 launch), the drawdown dynamic that defines the fishery is the connective tissue rather than filler, and the two cards open differently with rotated verbs. No brochure language, no filler-adverb openers, no unsourced superlatives, no exclamation spam, no live/today readings. The Regulations snapshot stays voice-quiet and verbatim against the official FMZ 16 source. One non-blocking FLAG: the "Also down there:" line is the Bite Club stylization of the template's literal "Also present" line — Stage 7 must map it to the Present-species field.

## Audit V — Per-paragraph voice checks

| ID | Section | Para (≤80 chars) | Names ≥1 specific? | No filler adverbs? | No brochure phrases? | No unsourced superlatives? | Substantive w/o proper nouns? | Verdict | Category | Required action | Action applied | Confidence | Notes |
|----|---------|-------------------|----|----|----|----|----|---------|----------|-----------------|----------------|------------|-------|
| V.1 | Overview | "Wildwood is flood control first, fishery second..." | ✓ | ✓ | ✓ | ✓ | ✓ | PASS | — | — | — | HIGH | ~149 words (90–180 ✓, aim 120–150 ✓). Names Trout Creek, Wildwood Dam, Stratford, St. Marys, UTRCA, dam end, Wildwood Conservation Area, Line 9, the 3.5 m swing. "flood control first, fishery second" is punch on the documented governing dynamic, not hype. |
| V.2 | Notable Facts | "Wildwood Dam (built 1962–1965) ... cut Trout Creek's peak flow..." | ✓ | ✓ | ✓ | ✓ | ✓ | PASS | — | — | — | HIGH | 4 facts (3–6 ✓), all from official sources (UTRCA ×3, Fish ON-Line), carried verbatim-in-meaning from 1a. Angler-report facts (Fishbrain 370 catches, IBA) correctly excluded from this section per Stage 2 FLAG 1.24/1.25. |
| V.3 | Regulations snapshot | "_Regulations effective 2026-01-01, FMZ 16. This is a summary..._" | ✓ | ✓ | ✓ | ✓ | ✓ | PASS | — | — | — | HIGH | Voice correctly goes quiet. Substance verified in Audit R. |
| V.4 | Northern Pike card | "Pike own the deep end. When the spring refill floods..." | ✓ | ✓ | ✓ | ✓ | ✓ | PASS | — | — | — | HIGH | ~95 words (40–110 ✓). Opens on a blunt characterization. Dam basin + spring drawdown shallows from 1a. "most-logged fish" is card colour from Fishbrain (FLAG 1.24 — allowed in prose, not as a Notable Fact). ~15 ft depth is a documented evergreen angler pattern, not a today-reading. No quality-signal claim → consistent with Strong. |
| V.5 | Yellow Perch card | "Winter is perch time. As the reservoir drops to its holding level..." | ✓ | ✓ | ✓ | ✓ | ✓ | PASS | — | — | — | HIGH | ~90 words. Opens on a season (varied from V.4's characterization opener). Dam-wall basin, 12–15 ft from 1a. Verbs rotated (stack/hold/drill vs pike's own/slide/shift). "grocery store" is dry wit on the documented forage relationship. Minnows-off-bottom is a documented method from 1a (angler report), not a gear brand. Evergreen. |
| V.6 | Also-present line | "Also down there: smallmouth and largemouth bass..." | ✓ | ✓ | ✓ | ✓ | ✓ | FLAG | — | — | — | — | Voice passes: honest about no named structure (matches 1a/1b — both Present, no structure). FLAG (non-blocking): template.md specifies a literal `Also present: [species], [species].` line; this is the Bite Club stylization. Stage 7 must map this to the Present-species field (smallmouth-bass, largemouth-bass). Not edited (FLAG rows are not edited). |
| V.7 | Key Resources | "The actual regs, straight from the source — FMZ 16..." | ✓ | ✓ | ✓ | ✓ | ✓ | PASS | — | — | — | HIGH | 4 bullets (3–6 ✓); official regs link first; task-specific UTRCA boating + fees pages + Fish ON-Line stocking. No forums, no operators. |

### Voice check definitions
1. **Names ≥1 specific?** A named structure, species, launch, dam, arm, or a sourced measurement.
2. **No filler adverbs?** Naturally, Notably, Ideally, Interestingly, Of course, etc.
3. **No brochure phrases?** "trophy waters," "angler's paradise," "hidden gem," "world-class," "discover," "the perfect spot."
4. **No unsourced superlatives?** "best," "biggest," "only" without a citation or sourced hedge. ("most-logged" is a sourced Fishbrain observation with an explicit hedge — passes.)
5. **Substantive without proper nouns?** Strip the names — concrete info must remain.

Anti-repetition check applied: no two cards open alike (characterization vs season); verbs rotated (own/slide/shift vs stack/hold/drill); the Overview's drawdown fact is built on, not restated, in each card. No card-opener collisions or crutch phrases.

## Audit Q — Quality & substrate checks
| ID | Check | Verdict | Required action | Action applied | Confidence | Notes |
|----|-------|---------|-----------------|----------------|------------|-------|
| Q.1 | species_count matches Destination+Strong card count | PASS | — | — | HIGH | Frontmatter species_count: 2 = 2 cards (Northern Pike, Yellow Perch — both Strong; 0 Destination, matching 1b counts 0/2/2/2). Taxonomy order (pike #3 before perch #6). Present species (smallmouth, largemouth) on the also-present line; Absent (walleye, black crappie) omitted. |
| Q.2 | Every species card names a real structure from 1a | PASS | — | — | HIGH | Pike: dam basin (deepest water, west end) + spring-refill drawdown shallows (1a). Perch: dam-wall basin, 12–15 ft (1a). |
| Q.3 | Every Destination card reflects a quality signal | PASS | — | — | HIGH | Vacuous — 0 Destination cards, correct per 1b (no CPUE/trophy/tournament/stocking for any species). Neither card makes a tier-escalating claim. |
| Q.4 | No structure invented beyond 1a | PASS | — | — | HIGH | All structure is 1a's dam-basin feature set; no invented landmarks, no Minnesota "Wildwood Lake" contamination imported. |
| Q.5 | Overview 90–180 words; cards 40–110 | PASS | — | — | HIGH | Overview ~149; cards ~95 / ~90. |
| Q.6 | Standing FLAGs from Stage 2 handled | PASS | — | — | HIGH | 1.13/1.15 (angler-sourced structure): kept grounded, no invented landmark. 1.24 (Fishbrain volume): card colour only, not a Notable Fact. 1.8/3.4 (largemouth thin): also-present line only. 1.28/1.25/1.26: not surfaced. All per Stage 4 metadata. |

## Audit L — No-live-data check (LAKE-SPECIFIC)
| ID | Location | Offending text | Verdict | Action applied | Notes |
|----|----------|----------------|---------|----------------|-------|
| L.1 | Full page scan | (none found) | PASS | — | No current temp/wind/level/AQ or "bite is on" language. "The reservoir fills to summer pool ... then draws down all season," "drops to its holding level," and the ~15 ft / 12–15 ft depths are evergreen reservoir dynamics and documented seasonal patterns, not today-readings. The 2018 flood figure is a dated historical fact. |

`live_data_leaks_found` = 0.

## Audit R — Regulations integrity check (LAKE-SPECIFIC, BLOCKING)
| ID | Check | Verdict | Action applied | Notes |
|----|-------|---------|----------------|-------|
| R.1 | Every carded species' reg matches 1a exactly | PASS | — | Pike: Jan 1–Mar 31 and 2nd Sat May–Dec 31 (2026: May 9–Dec 31); S-6/C-2; no size limit. Perch: open all year; S-50/C-25. Both verbatim against 1a and the official FMZ 16 source (Stage 2 Audit 4.1/4.2). No punch-up leaked into this section. |
| R.2 | Each reg carries the official source URL | PASS | — | Every line links the official ontario.ca FMZ 16 page. |
| R.3 | Effective date present | PASS | — | "Regulations effective 2026-01-01, FMZ 16" in the snapshot header; frontmatter matches. (Source summary states Dec 08, 2025; expressed as the 2026 licence year per the repo/Conestogo convention — Stage 2 Schema-deviation flag.) |
| R.4 | Disclaimer line present and unaltered | PASS | — | Mandatory disclaimer present, wording intact per template.md. |
| R.5 | Any `[UNVERIFIED]` species shows the pointer, NOT a stated season/limit | PASS | — | No `[UNVERIFIED]` regs exist — both carded species verified verbatim (Stage 2 regs_gate passed). Waterbody-exceptions ("none documented") and Southern Bait Management Zone lines carried from 1a with sources. |

`regs_integrity` = **passed**.

## Edits applied summary
| ID | Section | Action | Before (truncated) | After (truncated) |
|----|---------|--------|--------------------|-------------------|
| (none) | — | — | — | — |

## Edits deferred
| ID | Section | Action | Reason |
|----|---------|--------|--------|
| (none) | — | — | — |

## Iteration history
- **Iteration 1** (2026-07-19): voice 6/0/1; quality 6/0/0; live leaks 0; regs integrity passed; 0 edits; 0 deferred. The Stage 4 Bite Club copy passed on first audit with no FAILs; one non-blocking FLAG (stylized also-present line for Stage 7 mapping).

## Verdict
**passed** — 0 FAILs, 0 live-data leaks, regs_integrity passed, all quality checks green. The energy rides on sourced specifics (the drawdown cycle, the dam basin, documented ice-fishery depths, the most-logged-species observation) rather than superlatives. Re-audit not recommended. Ready for Stage 4b (species sub-guides) and Stage 7 (profile generator) — Stage 7 should note the V.6 FLAG: the stylized "Also down there:" line maps to the template's Present-species field (Smallmouth Bass, Largemouth Bass).
