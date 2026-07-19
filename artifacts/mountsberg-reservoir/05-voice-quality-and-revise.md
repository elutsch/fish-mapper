---
slug: mountsberg-reservoir
lake: Mountsberg Reservoir
generated_at: 2026-07-19
iteration: 1
paragraphs_audited: 5
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

# Voice/Quality Audit & Revise: Mountsberg Reservoir — Iteration 1

## Summary
- Voice PASS/FAIL/FLAG: 6/0/1
- Quality PASS/FAIL/FLAG: 6/0/0
- Live-data leaks: 0 | Regs integrity: passed
- Edits applied: 0 | deferred: 0
- Re-audit recommended: no — no FAILs; the page rides on sourced specifics, regs are verbatim, no live data leaked
- Overall status: passed

The Stage 4 copy lands in the Bite Club register on the first pass. Every paragraph and card carries a named specific (Mountsberg Dam, Bronte Creek, Conservation Halton, the overgrown marsh side, the dam breakwall), the two Strong cards open differently and rotate verbs (largemouth own/bury/slide/ambush; pike hunt), superlatives are sourced ("most-logged catch," tied to Angler's Atlas), and there is no brochure language, filler-adverb opener, or exclamation spam. The Regulations snapshot is voice-quiet and matches 1a verbatim. One non-blocking FLAG: the "Also finning around in the salad:" sentence is the Bite Club stylization of template.md's literal `Also present:` line — Stage 7 must map it to the three Present-tier species.

## Audit V — Per-paragraph voice checks

| ID | Section | Para (≤80 chars) | Names ≥1 specific? | No filler adverbs? | No brochure phrases? | No unsourced superlatives? | Substantive w/o proper nouns? | Verdict | Category | Required action | Action applied | Confidence | Notes |
|----|---------|-------------------|----|----|----|----|----|---------|----------|-----------------|----------------|------------|-------|
| V.1 | Overview | "Mountsberg Reservoir is a shallow, weed-choked marsh with a flood-control dam..." | ✓ | ✓ | ✓ | ✓ | ✓ | PASS | — | — | — | HIGH | 138 words (90–180 ✓). Names Mountsberg Dam (1967), Bronte Creek, Conservation Halton, Mountsberg Conservation Area, Campbellville, ~190 ha. Drawdown, electric-only, live-bait ban, gate hours all substantive. No live reading. |
| V.2 | Notable Facts | "The reservoir's marsh is a provincially significant waterfowl staging area..." | ✓ | ✓ | ✓ | ✓ | ✓ | PASS | — | — | — | HIGH | 4 facts (3–6 ✓), all official-sourced, carried verbatim-in-meaning from 1a. Promotional "5 lb / angler's mecca" correctly excluded (FLAG 1.27). |
| V.3 | Regulations snapshot | "_Regulations effective 2026-01-01, FMZ 16. This is a summary..._" | ✓ | ✓ | ✓ | ✓ | ✓ | PASS | — | — | — | HIGH | Voice goes quiet per voice.md. Substance verified in Audit R. |
| V.4 | Largemouth Bass card | "Largemouth own this marsh. They bury in the dense weedbeds..." | ✓ | ✓ | ✓ | ✓ | ✓ | PASS | — | — | — | HIGH | ~95 words (40–110 ✓). Structure (dense weedbeds, weedless pockets on the overgrown side, weed edges) from 1a. "This is largemouth water, full stop." is punch on a documented species-dominance pattern, not hype. Spinnerbaits/surface baits are 1a-sourced technique (lure types, not brands/operators). |
| V.5 | Northern Pike card | "There are enough pike here that Conservation Halton's own watershed study..." | ✓ | ✓ | ✓ | ✓ | ✓ | PASS | — | — | — | HIGH | ~100 words. Opens on the verified watershed-study management-strategy signal (distinct from the LMB opener). "most-logged catch" is a sourced superlative (Angler's Atlas 11) — passes check 4 under the punch-vs-hype line. Structure (marsh bays, weed edges, open weed pockets) from 1a. Verbs rotated vs LMB card. |
| V.6 | Also-present line | "Also finning around in the salad: smallmouth bass (Conservation Halton lists them...)" | ✓ | ✓ | ✓ | ✓ | ✓ | FLAG | — | — | — | — | Voice passes: smallmouth (CH list), black crappie (dam breakwall, 1a), yellow perch (weed, 1a) all trace to substrate. FLAG (non-blocking): template.md specifies a literal `Also present:` line; this is the stylized form. Stage 7 must map it to the three Present-tier species. Not edited (FLAG rows are not edited). |
| V.7 | Key Resources | "The actual regs, straight from the source — FMZ 16, Government of Ontario..." | ✓ | ✓ | ✓ | ✓ | ✓ | PASS | — | — | — | HIGH | 4 bullets (3–6 ✓); official regs link first; task-specific CH fishing/park pages + watershed study; no forums, no operators. Fish ON-Line intentionally not linked (source TLS cert expired per 1a). |

### Voice check definitions
1. **Names ≥1 specific?** A named structure, species, launch, dam, arm, or a sourced measurement.
2. **No filler adverbs?** Naturally, Notably, Ideally, Interestingly, Primarily, Curiously, Indeed, Of course.
3. **No brochure phrases?** "trophy waters," "angler's paradise," "hidden gem," "something for every angler," "discover," "world-class" (unsourced), "the perfect spot."
4. **No unsourced superlatives?** "best," "biggest," "only," "premier" without a citation or sourced hedge. A sourced superlative with punch PASSES; loud-about-nothing FAILS.
5. **Substantive without proper nouns?** Strip the names — concrete info must remain.

Anti-repetition applied: no two cards open alike (LMB = characterization; pike = documented signal); verbs rotate (own/bury/slide/ambush vs hunt); Overview facts are not restated in the cards. No card-opener collisions or crutch phrases.

## Audit Q — Quality & substrate checks
| ID | Check | Verdict | Required action | Action applied | Confidence | Notes |
|----|-------|---------|-----------------|----------------|------------|-------|
| Q.1 | species_count matches Destination+Strong card count | PASS | — | — | HIGH | Frontmatter species_count: 2 = 2 cards (Largemouth, Pike — both Strong; 0 Destination, matching 1b counts 0/2/3/1). Card order follows taxonomy (Largemouth #2 before Pike #3; no Smallmouth card as it's Present). |
| Q.2 | Every species card names a real structure from 1a | PASS | — | — | HIGH | LMB: dense weedbeds, weedless pockets on the overgrown marsh side, whole-lake weed-edge flats (1a). Pike: shallow marsh bays, weed edges throughout, open weed pockets (1a). |
| Q.3 | Every Destination card reflects a quality signal | PASS | — | — | HIGH | Vacuous — 0 Destination cards, correct per 1b (no citable survey CPUE/trophy/tournament/stocking; the only quality claim is promotional and excluded). |
| Q.4 | No structure invented beyond 1a | PASS | — | — | HIGH | No invented structure. CP Rail corridor deliberately omitted (FLAG 1.16 — never direct anglers onto active tracks). |
| Q.5 | Overview 90–180 words; cards 40–110 | PASS | — | — | HIGH | Overview 138; cards ~95 / ~100. |
| Q.6 | Standing FLAGs from Stage 2 handled | PASS | — | — | HIGH | FLAG 1.16 (rail line) omitted; FLAG 1.27 (promo 5 lb) kept out of Notable Facts and not used as a signal; FLAG 1.13/1.2 (redbreast misID / area discrepancy) — ~190 ha used, redbreast not surfaced. All per Stage 4 metadata. |

## Audit L — No-live-data check (LAKE-SPECIFIC)
| ID | Location | Offending text | Verdict | Action applied | Notes |
|----|----------|----------------|---------|----------------|-------|
| L.1 | Full page scan | (none found) | PASS | — | No current temp/wind/level/AQ or "bite is on" language. "The bite stacks up early and late when the surface cools" is a diurnal/seasonal pattern; winter drawdown/spring refill are evergreen reservoir dynamics; "gate opens at 8:30" is a park fact. All retained correctly. |

`live_data_leaks_found` = 0.

## Audit R — Regulations integrity check (LAKE-SPECIFIC, BLOCKING)
| ID | Check | Verdict | Action applied | Notes |
|----|-------|---------|----------------|-------|
| R.1 | Every carded species' reg matches 1a exactly | PASS | — | Largemouth: fourth Saturday in June to November 30 (2026: Jun 27–Nov 30); S-6/C-2 (combined with Smallmouth); no size limit. Pike: January 1 to March 31 and second Saturday in May to December 31 (2026: May 9–Dec 31); S-6/C-2; no size limit. Both verbatim against 1a's verified section and the re-fetched official FMZ 16 source; no Bite Club punch-up leaked in. |
| R.2 | Each reg carries the official source URL | PASS | — | Every line links ontario.ca FMZ 16; the CH live-bait park rule additionally links the Conservation Halton fishing page. |
| R.3 | Effective date present | PASS | — | "Regulations effective 2026-01-01, FMZ 16" in the header; frontmatter regs_effective_date matches 1a. |
| R.4 | Disclaimer line present and unaltered | PASS | — | Mandatory disclaimer present, wording intact per template.md. |
| R.5 | Any `[UNVERIFIED]` species shows the pointer, NOT a stated season/limit | PASS | — | No `[UNVERIFIED]` regs exist — both carded species verified verbatim (Stage 2 Audit 4, regs_gate passed). Waterbody-exceptions and Southern Bait Management Zone lines carried from 1a with sources. |

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
- **Iteration 1** (2026-07-19): voice 6/0/1; quality 6/0/0; live leaks 0; regs integrity passed; 0 edits; 0 deferred. Clean first-pass close on Bite Club copy.

## Verdict
**passed** — 0 FAILs, 0 live-data leaks, regs_integrity passed, all quality checks green. The energy rides on sourced specifics (watershed-study pike-management signal, most-logged catch data, drawdown dynamics, the electric-only/live-bait park rules) rather than superlatives. Re-audit not recommended. Ready for Stage 4b (species sub-guides) and Stage 7 (profile generator). Stage 7 note: the stylized "Also finning around in the salad:" line maps to the Present-tier species (smallmouth bass, black crappie, yellow perch); it is not carried as bodyCopy.
