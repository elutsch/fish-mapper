---
slug: pittock-lake
lake: Pittock Lake
generated_at: 2026-07-19
iteration: 1
paragraphs_audited: 9
cards_audited: 4
voice_pass / voice_fail / voice_flag: 7/2/1
quality_pass / quality_fail / quality_flag: 6/0/0
live_data_leaks_found: 0
regs_integrity: passed
edits_applied: 2
edits_deferred: 0
re_audit_recommended: false
overall_status: passed
---

# Voice/Quality Audit & Revise: Pittock Lake — Iteration 1

## Summary
- Voice PASS/FAIL/FLAG: 7/2/1
- Quality PASS/FAIL/FLAG: 6/0/0
- Live-data leaks: 0 | Regs integrity: passed
- Edits applied: 2 | deferred: 0
- Re-audit recommended: no — both FAILs were anti-repetition hits fixed in-pass at HIGH confidence from verified substrate; 0 live leaks; regs verbatim
- Overall status: passed

The page reads in the Bite Club register throughout — punch riding on sourced specifics (the 2016 UTRCA habitat build, the east-end cattail marsh, the main west basin, the dam-end deep water, the managed drawdown), no brochure language, no filler-adverb openers, no exclamation spam, and regulations kept voice-quiet and verbatim. Two FAILs, both under voice.md's anti-repetition rule: the Smallmouth card restated the Overview's exact "300 tonnes / 125 metres" habitat figures, and the Largemouth card restated the Overview's "50-hectare" marsh figure. Both openers were rewritten to reference the same structure without re-spending the number. No live-data leaks; regs integrity passed.

## Audit V — Per-paragraph voice checks

| ID | Section | Para (≤80 chars) | Names ≥1 specific? | No filler adverbs? | No brochure phrases? | No unsourced superlatives? | Substantive w/o proper nouns? | Verdict | Category | Required action | Action applied | Confidence | Notes |
|----|---------|-------------------|----|----|----|----|----|---------|----------|-----------------|----------------|------------|-------|
| V.1 | Overview | "Pittock Lake is the Thames River backed up behind a flood-control dam..." | ✓ | ✓ | ✓ | ✓ | ✓ | PASS | — | — | — | HIGH | ~155 words (90–180 ✓). Names Thames River, Woodstock, UTRCA, Pittock Dam, cattail marsh, Pittock Conservation Area, Roth Park. Drawdown framed as evergreen reservoir dynamic. |
| V.2 | Notable Facts | "In 2016 UTRCA and partners built a purpose-made fish-habitat complex..." | ✓ | ✓ | ✓ | ✓ | ✓ | PASS | — | — | — | HIGH | 4 facts (3–6 ✓), all sourced, carried verbatim-in-meaning from 1a. Angler-report pike "most-reported" fact correctly kept OUT of Notable Facts. |
| V.3 | Regulations snapshot | "_Regulations effective 2025-12-08, FMZ 16..._" | ✓ | ✓ | ✓ | ✓ | ✓ | PASS | — | — | — | HIGH | Voice correctly goes quiet. Substance verified in Audit R. |
| V.4 | Smallmouth Bass card | "Pittock is soft bottom almost everywhere, so smallmouth crowd..." | ✓ | ✓ | ✓ | ✓ | ✓ | FAIL | restated_fact (anti-repetition) | REWRITE | Opener restated the Overview's exact "300 tonnes of river stone and 125 metres of wood cover." Rewrote to "the 2016 UTRCA build handed them a lot of it, dropping rock shoals and wood cover into a mud-bottomed lake" — same structure, number not re-spent. Body now ~90 words. | HIGH | All five binary checks pass; FAIL is purely the anti-repetition rule ("a fact stated once is spent"). |
| V.5 | Largemouth Bass card | "Head the other way for largemouth. That east-end cattail marsh..." | ✓ | ✓ | ✓ | ✓ | ✓ | FAIL | restated_fact (anti-repetition) | REWRITE | Opener restated the Overview's "50-hectare cattail marsh" figure. Rewrote "The east end is a 50-hectare cattail marsh" → "That east-end cattail marsh is the one big slab of vegetated shallow" — references the marsh without re-quoting the size. Body ~95 words. | HIGH | Marsh is legitimately the LMB's primary structure; it may be named, just not re-numbered. Opener still varies from the other cards (imperative/direction). |
| V.6 | Northern Pike card | "More anglers log pike here than any other fish..." | ✓ | ✓ | ✓ | ✓ | ✓ | PASS | — | — | — | HIGH | ~98 words. Opener is the angler-log comparative ("more anglers log pike here than any other fish") — traces exactly to 1a's Fishbrain data (99 pike vs 70 SMB / 52 LMB) and is framed as log data, the honest hedge; passes check 4 under the punch-vs-hype line. Names east-end marsh, main west basin, campground narrows. Sanctuary correctly scoped as the downstream Thames tailwater, not the reservoir. Verbs (spawn/fan/hunt) distinct from other cards. |
| V.7 | Yellow Perch card | "Perch are the year-round play here — one of the three species UTRCA..." | ✓ | ✓ | ✓ | ✓ | ✓ | PASS | — | — | — | HIGH | ~100 words. "One of the three species UTRCA puts at the top of its fishing page" is sourced (UTRCA lists perch/bass/pike). Names 2016 gravel shoals, weed edges, north-shore day-use waterfront, Roth Park. "come ice-up, jiggers work the same flats" is an evergreen seasonal pattern, not a today-reading. |
| V.8 | Also-present line | "Also swimming around down there: walleye — named a target of the 2016..." | ✓ | ✓ | ✓ | ✓ | ✓ | FLAG | — | — | — | — | Voice passes and the honesty is exemplary (walleye "evidence stays thin"; crappie "in angler catch logs more than in any official record"). FLAG (non-blocking): template.md specifies a literal `Also present: [species], [species].` line; this is the Bite Club stylization. Stage 7 must map this line to the Present-species fields (walleye, black-crappie). Not edited (FLAG rows are not edited). |
| V.9 | Key Resources | "The actual regs, straight from the source — FMZ 16..." | ✓ | ✓ | ✓ | ✓ | ✓ | PASS | — | — | — | HIGH | 5 bullets (3–6 ✓); official regs link first; task-specific Pittock CA day-use, UTRCA boating, UTRCA level gauge, and Fish ON-Line pages; no forums, no operators. The level-gauge link is a trip-planning task page (a pointer), not a live reading on our page. |

### Voice check definitions
1. **Names ≥1 specific?** A named structure, species, launch, dam, arm, or a sourced measurement.
2. **No filler adverbs?** Naturally, Notably, Ideally, Interestingly, Primarily, Curiously, Indeed, Of course.
3. **No brochure phrases?** "trophy waters," "angler's paradise," "hidden gem," "something for every angler," "discover," "world-class" (unsourced), "the perfect spot."
4. **No unsourced superlatives?** "best," "biggest," "only," "premier" without a citation or sourced hedge. A sourced/hedged superlative delivered with punch PASSES.
5. **Substantive without proper nouns?** Strip the names — concrete info must remain.

Additional check applied per voice.md: **anti-repetition** (no two cards opening alike; rotate verbs; a fact stated once is spent; kill crutch phrases). V.4 and V.5 were the only hits (both number-restatements from the Overview), fixed via REWRITE. Post-fix: card openers vary (habitat / direction / angler-log data / season) and verbs stay rotated (crowd–stacked / bury–ambush / spawn–fan–hunt / school–cruise). No crutch phrase ("known for," "relate to," "hold on") appears.

## Audit Q — Quality & substrate checks
| ID | Check | Verdict | Required action | Action applied | Confidence | Notes |
|----|-------|---------|-----------------|----------------|------------|-------|
| Q.1 | species_count matches Destination+Strong card count | PASS | — | — | HIGH | Frontmatter species_count: 4 = 4 cards (Smallmouth, Largemouth, Pike, Perch — all Strong; 0 Destination, matching 1b counts 0/4/2/0). Card order follows taxonomy order; Present species (walleye, crappie) on the also-present line; no Absent species to omit. |
| Q.2 | Every species card names a real structure from 1a | PASS | — | — | HIGH | SMB: 2016 rock shoals/wood cover, dam-end basin. LMB: east-end cattail marsh, 2016 plantings/wood cover, shallow arm above campground. Pike: east-end marsh, main west basin, campground narrows. Perch: 2016 gravel shoals, weed edges, north-shore day-use waterfront, Roth Park. All in 1a. |
| Q.3 | Every Destination card reflects a quality signal | PASS | — | — | HIGH | Vacuous — 0 Destination cards, correct per 1b (no reservoir survey CPUE/trophy/tournament/stocking). |
| Q.4 | No structure invented beyond 1a | PASS | — | — | HIGH | All structure traces to 1a. No named landmarks or depths fabricated; no bathymetry asserted (none in 1a). |
| Q.5 | Overview 90–180 words; cards 40–110 | PASS | — | — | HIGH | Overview ~155; cards ~90 / ~95 / ~98 / ~100 (all 40–110). |
| Q.6 | Standing FLAGs from Stage 2 handled | PASS | — | — | HIGH | FLAG 1.2 (surface-area): 452 ha summer used; no 209 ha asserted; max_depth omitted. FLAG 1.12/1.14 (walleye/crappie thin): kept off cards, honest also-present line. FLAG 4.7 (sanctuary): framed as downstream tailwater, not the reservoir, in both the snapshot and the pike card. All as Stage 4 metadata states. |

## Audit L — No-live-data check (LAKE-SPECIFIC)
| ID | Location | Offending text | Verdict | Action applied | Notes |
|----|----------|----------------|---------|----------------|-------|
| L.1 | Full page scan | (none found) | PASS | — | No current temp/wind/level reading or "the bite is on" language. "Draws down from mid-June through fall," "before the drawdown drains the skinny water," and "come ice-up" are evergreen seasonal patterns; the 2016 habitat build and 1964–1967 dam construction are dated historical facts. The UTRCA level-gauge link in Key Resources is a trip-planning pointer, not an embedded reading. |

`live_data_leaks_found` = 0.

## Audit R — Regulations integrity check (LAKE-SPECIFIC, BLOCKING)
| ID | Check | Verdict | Action applied | Notes |
|----|-------|---------|----------------|-------|
| R.1 | Every carded species' reg matches 1a exactly (no rounded/paraphrased limit) | PASS | — | Bass (combined): fourth Saturday in June to November 30 (2026: Jun 27–Nov 30); S-6/C-2; no size limit. Pike: January 1 to March 31 and second Saturday in May to December 31 (2026: May 9–Dec 31); S-6/C-2; no size limit. Perch: open all year; S-50/C-25. All verbatim against 1a's verified Regulations section and the cached official source — no Bite Club punch-up leaked in. |
| R.2 | Each reg carries the official source URL | PASS | — | Every line links the official ontario.ca FMZ 16 page. |
| R.3 | Effective date present | PASS | — | "Regulations effective 2025-12-08, FMZ 16" in the snapshot header; frontmatter regs_effective_date matches 1a. |
| R.4 | Disclaimer line present and unaltered | PASS | — | Mandatory disclaimer present, wording intact per template.md. |
| R.5 | Any `[UNVERIFIED]` species shows the pointer, NOT a stated season/limit | PASS | — | No `[UNVERIFIED]` regs exist — all carded species verified verbatim (fact-check Audit 4 passed, regs_gate passed). Sanctuary line and VHS baitfish note carried from verified substrate with sources. |

`regs_integrity` = **passed**.

## Edits applied summary
| ID | Section | Action | Before (truncated) | After (truncated) |
|----|---------|--------|--------------------|-------------------|
| V.4 | Smallmouth Bass card | REWRITE | "...smallmouth crowd what little hard structure there is. In 2016 UTRCA sank 300 tonnes of river stone and 125 metres of wood cover into the reservoir — instant rock and rubble..." | "...smallmouth crowd what little hard structure there is — and the 2016 UTRCA build handed them a lot of it, dropping rock shoals and wood cover into a mud-bottomed lake. The bass took to it fast..." |
| V.5 | Largemouth Bass card | REWRITE | "Head the other way for largemouth. The east end is a 50-hectare cattail marsh — the one big slab of vegetated shallow..." | "Head the other way for largemouth. That east-end cattail marsh is the one big slab of vegetated shallow..." |

Both fixes remove a number/figure already spent in the Overview while keeping the structure named; nothing invented, energy preserved.

## Edits deferred
| ID | Section | Action | Reason |
|----|---------|--------|--------|
| (none) | — | — | — |

## Iteration history
- **Iteration 1** (2026-07-19): voice 7/2/1; quality 6/0/0; live leaks 0; regs integrity passed; 2 edits (both HIGH); 0 deferred. Both FAILs were anti-repetition number-restatements fixed in-pass.

## Verdict
**passed** — 0 FAILs remaining after edits (two anti-repetition rewrites, HIGH confidence, from verified substrate), 0 live-data leaks, regs_integrity passed, all quality checks green. Re-audit not recommended. Ready for Stage 4b (species sub-guides) and Stage 7 (profile generator). Note for Stage 7: the V.8 FLAG — the stylized "Also swimming around down there:" line maps to the template's Present-species field (walleye, black-crappie).
