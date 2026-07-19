---
slug: island-lake-orangeville
lake: Island Lake
generated_at: 2026-07-19
iteration: 1
paragraphs_audited: 5
cards_audited: 3
voice_pass / voice_fail / voice_flag: 4/1/0
quality_pass / quality_fail / quality_flag: 6/0/0
live_data_leaks_found: 0
regs_integrity: passed
edits_applied: 1
edits_deferred: 0
re_audit_recommended: false
overall_status: passed
---

# Voice/Quality Audit & Revise: Island Lake (Orangeville Reservoir) — Iteration 1

## Summary
- Voice PASS/FAIL/FLAG: 4/1/0
- Quality PASS/FAIL/FLAG: 6/0/0
- Live-data leaks: 0 | Regs integrity: passed
- Edits applied: 1 | deferred: 0
- Re-audit recommended: no — the single voice FAIL was fixed HIGH-confidence; no live-data leaks; regs integrity passed.
- Overall status: passed

One brochure-phrase FAIL (the largemouth card opened "This is a bass factory…" — the exact hype register the voice guide bans) was rewritten to a specific, sourced opener. Everything else passes: three cards each open differently and name real structure, regs are exact/sourced/dated/disclaimered, and no live conditions appear anywhere.

## Audit V — Per-paragraph voice checks
| ID | Section | Para (≤80 chars) | Names ≥1 specific? | No filler adverbs? | No brochure phrases? | No unsourced superlatives? | Substantive w/o proper nouns? | Verdict | Category | Required action | Action applied | Confidence | Notes |
|----|---------|-------------------|----|----|----|----|----|---------|----------|-----------------|----------------|------------|-------|
| V.1 | Overview | "Island Lake isn't so much a lake as a drowned cedar swamp…" | ✓ | ✓ | ✓ | ✓ | ✓ | PASS | — | — | — | HIGH | Names lake, Credit River, 1967, eastern arm, kettle lake, lot P1, south shore |
| V.2 | Pike card | "Nothing on this reservoir gets logged more than pike…" | ✓ | ✓ | ✓ | ✓ | ✓ | PASS | — | — | — | HIGH | Opens on characterization + derby signal; verbs vary |
| V.3 | Largemouth card | "This is a bass factory built out of a flooded swamp…" | ✓ | ✓ | ✗ | ✗ | ✓ | FAIL | brochure_phrase | CUT_BROCHURE | rewrote opener to "Flood a cedar swamp and you build largemouth habitat by accident…" | HIGH | "bass factory" is the banned hype register |
| V.4 | Crappie card | "Follow the wood. Crappie stack in the fallen trees…" | ✓ | ✓ | ✓ | ✓ | ✓ | PASS | — | — | — | HIGH | Distinct opener (imperative); east-arm timber named |
| V.5 | Also-present line | "Also swimming down there: yellow perch…" | ✓ | ✓ | ✓ | ✓ | ✓ | PASS | — | — | — | HIGH | In-voice, names species |

## Audit Q — Quality & substrate checks
| ID | Check | Verdict | Required action | Action applied | Confidence | Notes |
|----|-------|---------|-----------------|----------------|------------|-------|
| Q.1 | species_count (3) matches Destination+Strong card count (3) | PASS | — | — | HIGH | Pike + Largemouth + Crappie |
| Q.2 | Every species card names a real structure from 1a | PASS | — | — | HIGH | Weed edges/east-arm timber/etc. all in 1a |
| Q.3 | Destination card (Pike) reflects a quality signal | PASS | — | — | HIGH | Ice Derby 825 mm winner cited |
| Q.4 | No structure invented beyond 1a | PASS | — | — | HIGH | All feature-typed structure traces to 1a |
| Q.5 | Overview 90–180 words (~150); cards 40–110 (~85–95 each) | PASS | — | — | HIGH | All within limits |
| Q.6 | Standing FLAGs from Stage 2 handled | PASS | — | — | HIGH | FLAG-1..4 all addressed in Stage 4 footer |

## Audit L — No-live-data check
| ID | Location | Offending text | Verdict | Action applied | Notes |
|----|----------|----------------|---------|----------------|-------|
| L.1 | (whole page) | (none found) | PASS | — | No current temp/wind/level/ice-thickness-today; "through the winter ice"/"when it warms" are seasonal patterns, allowed |

`live_data_leaks_found` = 0.

## Audit R — Regulations integrity check (BLOCKING)
| ID | Check | Verdict | Action applied | Notes |
|----|-------|---------|----------------|-------|
| R.1 | Each carded species' reg matches 1a exactly | PASS | — | Pike, combined-bass, crappie wording exact |
| R.2 | Each reg carries the official source URL | PASS | — | ontario.ca FMZ 16 on every line |
| R.3 | Effective date present | PASS | — | 2025-12-08 in disclaimer + frontmatter |
| R.4 | Disclaimer line present and unaltered | PASS | — | verbatim |
| R.5 | Any [UNVERIFIED] species shows pointer, not a stated limit | PASS | — | none unverified; N/A |

`regs_integrity` = passed.

## Edits applied summary
| ID | Section | Action | Before (truncated) | After (truncated) |
|----|---------|--------|--------------------|-------------------|
| V.3 | Largemouth card | CUT_BROCHURE | "This is a bass factory built out of a flooded swamp…" | "Flood a cedar swamp and you build largemouth habitat by accident — which is exactly what happened here…" |

## Edits deferred
| ID | Section | Action | Reason |
|----|---------|--------|--------|
| — | — | — | none |

## Iteration history
- **Iteration 1** (2026-07-19): voice 4/1/0; quality 6/0/0; live leaks 0; regs integrity passed; 1 edit; 0 deferred.

## Verdict
- `passed` — 0 FAILs after edits, 0 live-data leaks, regs_integrity passed → Stage 4b and Stage 7 proceed.
