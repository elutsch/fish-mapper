---
slug: kelso-reservoir
lake: Kelso Reservoir
generated_at: 2026-07-19
iteration: 1
paragraphs_audited: 7
cards_audited: 2
voice_pass / voice_fail / voice_flag: 6/1/0
quality_pass / quality_fail / quality_flag: 6/0/0
live_data_leaks_found: 0
regs_integrity: passed
edits_applied: 1
edits_deferred: 0
re_audit_recommended: false
overall_status: passed
---

# Voice/Quality Audit & Revise: Kelso Reservoir — Iteration 1

## Summary
- Voice PASS/FAIL/FLAG: 6/1/0
- Quality PASS/FAIL/FLAG: 6/0/0
- Live-data leaks: 0 | Regs integrity: passed
- Edits applied: 1 | deferred: 0
- Re-audit recommended: no — the single FAIL was a minor phrase-echo fixed in-pass at HIGH confidence from verified substrate; 0 leaks; regs verbatim.
- Overall status: passed

The Stage 4 copy lands cleanly in the Bite Club register: energy rides on sourced specifics (the 1964 flood-control dam, Pirate's Cove, the escarpment cliffs, the community catch data) rather than superlatives, no brochure language or filler-adverb openers appear, and the regulations stay voice-quiet and verbatim. One voice FAIL under the anti-repetition rule: the Largemouth card echoed the Overview's "weedy … juts" phrasing for Pirate's Cove ("the weedy jut of Pirate's Cove"). Rewrote to "the cover in Pirate's Cove," keeping the named structure while removing the duplicated phrasing. All standing Stage 2 FLAGs are honoured, the Area 8 stocking conflation stays out, and no reservoir trout claim appears.

## Audit V — Per-paragraph voice checks

| ID | Section | Para (≤80 chars) | Names ≥1 specific? | No filler adverbs? | No brochure phrases? | No unsourced superlatives? | Substantive w/o proper nouns? | Verdict | Category | Required action | Action applied | Confidence | Notes |
|----|---------|-------------------|----|----|----|----|----|---------|----------|-----------------|----------------|------------|-------|
| V.1 | Overview | "Kelso Reservoir is a small warm-water impoundment — about 30 ha…" | ✓ | ✓ | ✓ | ✓ | ✓ | PASS | — | — | — | HIGH | 133 words (90–180 ✓). Names Sixteen Mile Creek, Niagara Escarpment, Milton, the 1964 dam, Pirate's Cove, Kelso Conservation Area. "casual family fishery" is a sourced characterization, not brochure. |
| V.2 | Notable Facts | "Kelso Dam and Reservoir opened in 1964…" | ✓ | ✓ | ✓ | ✓ | ✓ | PASS | — | — | — | HIGH | 4 facts (3–6 ✓), carried verbatim-in-meaning from 1a. Fishbrain "most-logged largemouth" (angler-report) correctly excluded from Notable Facts. |
| V.3 | Regulations snapshot | "_Regulations effective 2025-12-08, FMZ 16…_" | ✓ | ✓ | ✓ | ✓ | ✓ | PASS | — | — | — | HIGH | Voice correctly goes quiet. Substance verified in Audit R. |
| V.4 | Largemouth Bass card | "Largemouth own this reservoir — most-logged catch here…" | ✓ | ✓ | ✓ | ✓ | ✓ | FAIL | restated_fact (voice.md anti-repetition) | REWRITE | Rewrote "the weedy jut of Pirate's Cove" → "the cover in Pirate's Cove," removing the echo of the Overview's "shallow, weedy 'Pirate's Cove' juts off the middle." Named structure retained; body now ~90 words. | HIGH | All five binary checks green; FAIL is under anti-repetition only. "most-logged … by a wide margin" is punch on sourced community data (Fishbrain 39 vs 24 vs 11), hedged as an angler-log fact. |
| V.5 | Yellow Perch card | "Perch are the sure thing at Kelso…" | ✓ | ✓ | ✓ | ✓ | ✓ | PASS | — | — | — | HIGH | ~95 words. Opens differently from the Largemouth card (fish characterization vs ownership claim); verbs rotated (own/work/stick vs fan/push/worked). "gets confirmed more often" sourced to Angler's Atlas community confirmation. "puts a kid's first fish on the dock" is evergreen colour, not a live reading. |
| V.6 | Also-present line | "Also swimming around down there: smallmouth bass hugging…" | ✓ | ✓ | ✓ | ✓ | ✓ | PASS | — | — | — | HIGH | In voice; names Present species (smallmouth, black crappie) with feature-type structure only (dam-end riprap, escarpment rubble, basin) per Stage 2 FLAGs — no invented landmark. Maps to the template's "Also present" field for Stage 7. |
| V.7 | Key Resources | "The actual regs, straight from the source — FMZ 16…" | ✓ | ✓ | ✓ | ✓ | ✓ | PASS | — | — | — | HIGH | 3 bullets (3–6 ✓); official regs link first; task-specific Conservation Halton park + fishing pages; no forums, no operators. |

### Voice check definitions
1. Names ≥1 specific? — a named structure, species, launch, dam, arm, or sourced measurement.
2. No filler adverbs? — Naturally, Notably, Ideally, Interestingly, Of course, etc.
3. No brochure phrases? — trophy waters, angler's paradise, hidden gem, world-class, discover, the perfect spot.
4. No unsourced superlatives? — best/biggest/only/premier without a citation or sourced hedge. Sourced superlative with punch PASSES.
5. Substantive without proper nouns? — strip names; concrete info must remain.

Anti-repetition check applied per voice.md (no two cards open alike; rotate verbs; a fact stated once is spent; kill crutch phrases). Only V.4 hit (phrase echo of Pirate's Cove); fixed. Post-fix, card openers vary and no crutch phrase repeats down the page.

## Audit Q — Quality & substrate checks
| ID | Check | Verdict | Required action | Action applied | Confidence | Notes |
|----|-------|---------|-----------------|----------------|------------|-------|
| Q.1 | species_count matches Destination+Strong card count | PASS | — | — | HIGH | Frontmatter species_count: 2 = 2 cards (Largemouth, Yellow Perch — both Strong; 0 Destination, matching 1b 0/2/2/2). Taxonomy order (Largemouth #2 before Yellow Perch #6). Present species on also-present line; Pike/Walleye (Absent) omitted. |
| Q.2 | Every species card names a real structure from 1a | PASS | — | — | HIGH | Largemouth: NW weedy flats, Pirate's Cove, boardwalk margins (1a). Yellow Perch: boardwalk/shoreline margins, mid-lake basin (1a). |
| Q.3 | Every Destination card reflects a quality signal | PASS | — | — | HIGH | Vacuous — 0 Destination cards, correct per 1b (no survey CPUE/trophy/tournament/stocking for the reservoir). Neither Strong card claims a quality signal. |
| Q.4 | No structure invented beyond 1a | PASS | — | — | HIGH | All structure is 1a feature-type/named-feature; no invented landmarks. Area 8 / Kelso Quarry habitat and stocking stayed out. |
| Q.5 | Overview 90–180 words; cards 40–110 | PASS | — | — | HIGH | Overview 133; cards ~90 / ~95. |
| Q.6 | Standing FLAGs from Stage 2 handled | PASS | — | — | HIGH | FLAG 1.9/1.14 (thin crappie, inference-based smallmouth): both kept off cards, on also-present line with feature-type structure only. FLAG 1.10/1.28 (trout): no reservoir trout card or fact. FLAG 1.11 (carp/catfish): out of Notable Facts and cards. Area 8 conflation: no Kelso Quarry stocking cited. |

## Audit L — No-live-data check (LAKE-SPECIFIC)
| ID | Location | Offending text | Verdict | Action applied | Notes |
|----|----------|----------------|---------|----------------|-------|
| L.1 | Full page scan | (none found) | PASS | — | No current temp/wind/level/"bite is on" language. "May-through-October run" is the park's operating season (evergreen); "late-June opener through fall" and "season never closes on paper" are seasonal/regulatory patterns, not today-readings. |

`live_data_leaks_found` = 0.

## Audit R — Regulations integrity check (LAKE-SPECIFIC, BLOCKING)
| ID | Check | Verdict | Action applied | Notes |
|----|-------|---------|----------------|-------|
| R.1 | Every carded species' reg matches 1a exactly | PASS | — | Largemouth: fourth Saturday in June to November 30; S-6/C-2 (combined with Smallmouth); no size. Yellow Perch: open all year; S-50/C-25; no size. Both verbatim against 1a's verified Regulations section and Stage 2 Audit 4 — no punch-up leaked. |
| R.2 | Each reg carries the official source URL | PASS | — | Every line links the official ontario.ca FMZ 16 page. |
| R.3 | Effective date present | PASS | — | "Regulations effective 2025-12-08, FMZ 16" in the header; frontmatter regs_effective_date matches 1a. |
| R.4 | Disclaimer line present and unaltered | PASS | — | Mandatory disclaimer present, wording intact per template.md. |
| R.5 | Any `[UNVERIFIED]` species shows the pointer, NOT a stated season/limit | PASS | — | No `[UNVERIFIED]` regs exist — both carded species verified verbatim (Stage 2 regs_gate passed). Waterbody-exceptions and park-rule lines carried from 1a with the official source. |

`regs_integrity` = **passed**.

## Edits applied summary
| ID | Section | Action | Before (truncated) | After (truncated) |
|----|---------|--------|--------------------|-------------------|
| V.4 | Largemouth Bass card | REWRITE | "…the weedy jut of Pirate's Cove, and the shaded margins along the boardwalk shore." | "…the cover in Pirate's Cove, and the shaded margins along the boardwalk shore." |

Fix provenance: removed the anti-repetition echo of the Overview's "shallow, weedy 'Pirate's Cove' juts off the middle." Pirate's Cove is a named 1a structure; nothing invented.

## Edits deferred
| ID | Section | Action | Reason |
|----|---------|--------|--------|
| (none) | — | — | — |

## Iteration history
- **Iteration 1** (2026-07-19): voice 6/1/0; quality 6/0/0; live leaks 0; regs integrity passed; 1 edit (HIGH); 0 deferred.

## Verdict
**passed** — 0 FAILs remaining after edits (single anti-repetition FAIL fixed in-pass at HIGH confidence from substrate), 0 live-data leaks, regs_integrity passed, all quality checks green. The copy honours every Stage 2 FLAG (thin crappie/smallmouth to the also-present line, trout scoped out, Area 8 stocking excluded). Ready for Stage 4b (species sub-guides) and Stage 7 (profile generator). Stage 7 note: the "Also swimming around down there:" line maps to the Present-species field (Smallmouth Bass, Black Crappie).
