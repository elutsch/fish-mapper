---
slug: saugeen-river-durham
lake: Saugeen River at Durham
province: Ontario
fmz: 16
generated_at: 2026-07-20
iteration: 1
total_claims_checked: 22
pass_count: 22
fail_count: 0
flag_count: 2
regs_gate: passed
edits_applied: 0
edits_deferred: 0
re_audit_recommended: false
overall_status: passed
---

# Fact-Check & Correct: Saugeen River at Durham — Iteration 1

## Summary
- Claims audited: 22
- PASS / FAIL / FLAG: 22 / 0 / 2
- Regs gate: passed — all five FMZ 16 species regs verified against the official Government of Ontario FMZ 16 summary, effective 2025-12-08; no Destination/Strong species carry an unresolved regs FAIL.
- Edits applied: 0 | deferred: 0
- Re-audit recommended: no — all PASS, regs gate passed, no live-data leaks.
- Overall status: passed

The Durham reach is honestly scored as a thin six-gamefish profile (smallmouth Present, five Absent) with the out-of-scope trout fishery acknowledged but un-tiered. Morphology basin fields are correctly [NOT FOUND] for a river reach. Regulations are exact and sourced to the official FMZ 16 summary. Two non-blocking FLAGs record the river-reach thinness and the reliance on angler/guide editorial for character.

## Audit 1 — Per-claim verification

| ID | File | Section | Claim (≤120 chars) | Source URL | Verdict | Category | Required action | Action applied | Confidence | Notes |
|----|------|---------|--------------------|------------|---------|----------|-----------------|----------------|------------|-------|
| 1.1 | 1a | Morphology | Small flood-control dam at Durham holds a shallow recreational reservoir + controls ice | saugeenconservation.ca/.../durham | PASS | — | — | — | — | SVCA page |
| 1.2 | 1a | Morphology | River-reach basin fields NOT FOUND (area/depth/trophic) | — | PASS | — | — | — | — | correct null for a river reach |
| 1.3 | 1a | Species present | Upper Durham reach is trout water (brook above dam; brown/rainbow below) | ontariotroutandsteelhead.com | PASS | — | — | — | — | angler/guide editorial (out-of-scope species) |
| 1.4 | 1a | Species present | Smallmouth on record for spot; documented Saugeen smallmouth is Walkerton downstream | ontariotroutandsteelhead.com; spots.json | PASS | — | — | — | — | supports Present tier only |
| 1.5 | 1a | Species present | Crayfish are the primary bass forage on the lower Saugeen | ontariotroutandsteelhead.com | PASS | — | — | — | — | lower-river context |
| 1.6 | 1a | Notable facts | Durham CA protects over 61 ha (150 acres), 3+ km river frontage | saugeenconservation.ca | PASS | — | — | — | — | corroborated by Visit Grey |
| 1.7 | 1a | Notable facts | McGowan Falls cascade beside a flood-control dam | saugeenconservation.ca | PASS | — | — | — | — | — |
| 1.8 | 1a | Access | Durham CA — carry-in/paddle-friendly, boat ramp, day-use fee $5/day | saugeenconservation.ca | PASS | — | — | — | — | — |
| 1.9 | 1a | Gotchas | Saugeen = Lake Huron drainage, NOT the Grand; SVCA-managed | en.wikipedia.org/wiki/Saugeen_River | PASS | — | — | — | — | basic geography |
| 1.10 | 1a | Structure > Smallmouth | No Durham-specific named structure; McGowan Falls impoundment plausible only | saugeenconservation.ca | PASS | — | — | — | — | correctly not asserted as evidenced structure |
| 1.11 | 1a | Seasonal | Warmwater angling ~early July–early October (documented downstream) | ontariotroutandsteelhead.com | PASS | — | — | — | — | flagged as lower-river/general |

## Audit 2 — Cross-file reconciliation (1a ↔ 1b)

| ID | Topic | 1a says | 1b says | Verdict | Required action | Action applied | Confidence | Notes |
|----|-------|---------|---------|---------|-----------------|-----------------|------------|-------|
| 2.1 | Smallmouth | On record; no Durham structure/evidence | Present, no structure, no signal | PASS — compatible | — | — | — | consistent |
| 2.2 | Largemouth/Pike/Walleye/Crappie | NOT FOUND / not documented at Durham | Absent | PASS — compatible | — | — | — | consistent |
| 2.3 | Yellow Perch | NOT FOUND (impoundment plausible, unconfirmed) | Absent (undocumented) | PASS — compatible | — | — | — | taxonomy allows Absent for undocumented presence |
| 2.4 | Trout | Recorded, marked OUT OF SCOPE, no tier | No tier/entry | PASS | — | — | — | handled per task |

## Audit 3 — Species tier-evidence sufficiency (Kelowna backstop)

| ID | Species | Tier | Structure in 1b | Matching in 1a | Quality signal | Sources | sigReqEvidence? | Verdict | Required action | Action applied | Confidence | Notes |
|----|---------|------|-----------------|-----------------|----------------|---------|-----------------|---------|-----------------|----------------|------------|-------|
| 3.1 | Smallmouth Bass | Present | none | n/a | none | 0 | yes | PASS | — | — | HIGH | Present needs no structure/signal; correctly not elevated |
| 3.2 | Largemouth Bass | Absent | — | — | — | — | yes | PASS | — | — | HIGH | habitat wrong |
| 3.3 | Northern Pike | Absent | — | — | — | — | yes | PASS | — | — | HIGH | documented downstream only |
| 3.4 | Walleye | Absent | — | — | — | — | yes | PASS | — | — | HIGH | not documented at Durham |
| 3.5 | Black Crappie | Absent | — | — | — | — | yes | PASS | — | — | HIGH | habitat wrong |
| 3.6 | Yellow Perch | Absent | — | — | — | — | yes | PASS | — | — | MEDIUM | undocumented; impoundment plausible but unconfirmed |

No Destination/Strong tiers claimed → no tier-evidence FAIL possible. Correct thin outcome.

## Audit 4 — Regulations integrity gate (BLOCKING)

| ID | Species | Reg (season/limit/size) | Source | Official source? | Effective-dated? | Matches source exactly? | Verdict | Action applied | Notes |
|----|---------|--------------------------|--------|------------------|------------------|--------------------------|---------|----------------|-------|
| 4.1 | Bass (S&L combined) | 4th Sat June–Nov 30; S-6/C-2; no size | ontario.ca FMZ16 | YES | YES (2025-12-08) | YES | PASS | — | — |
| 4.2 | Northern Pike | Jan 1–Mar 31 & 2nd Sat May–Dec 31; S-6/C-2; no size | ontario.ca FMZ16 | YES | YES (2025-12-08) | YES | PASS | — | — |
| 4.3 | Walleye | Jan 1–Mar 15 & 2nd Sat May–Dec 31; S-4/C-2, not >1 over 46 cm | ontario.ca FMZ16 | YES | YES (2025-12-08) | YES | PASS | — | — |
| 4.4 | Black Crappie | open all year; S-30/C-10; no size | ontario.ca FMZ16 | YES | YES (2025-12-08) | YES | PASS | — | — |
| 4.5 | Yellow Perch | open all year; S-50/C-25; no size | ontario.ca FMZ16 | YES | YES (2025-12-08) | YES | PASS | — | — |
| 4.6 | Bait / exceptions | Southern BMZ transport rule; no waterbody exception at Durham | ontario.ca FMZ16 | YES | YES (2025-12-08) | YES | PASS | — | — |

**regs_gate = passed.** Every FMZ 16 reg line traces to the official Government of Ontario summary, effective 2025-12-08, wording-exact. No target (Destination/Strong) species exist, so no target reg is unresolved.

## Schema-deviation flags
- None requiring mechanical reconciliation. Frontmatter counts in 1b (0/0/1/5) match the scoring body.

## Edits applied summary
| FC ID | File | Action | Before | After | Source change |
|-------|------|--------|--------|-------|---------------|
| — | — | — | — | — | — |

## Edits deferred
| FC ID | File | Action | Reason |
|-------|------|--------|--------|
| — | — | — | — |

## Tier downgrades summary
| Species | Before | After |
|---------|--------|-------|
| — | — | — |

## Standing FLAGs (non-blocking, for Stage 4)
- FLAG A — The six-gamefish substrate is genuinely thin (0 Destination/Strong, smallmouth Present, five Absent). Stage 4 must write a short, honest page with no species cards and must acknowledge the out-of-scope trout fishery so the page is not misleading.
- FLAG B — Reach character (trout water, river widths, deep pools/fast runs, crayfish forage) is sourced to angler/guide editorial. Use only for evergreen character/colour, never for regs or as a quality signal.

## Iteration history
- **Iteration 1** (2026-07-20): 22 PASS / 0 FAIL / 2 FLAG; regs gate passed; 0 edits; 0 deferred.

## Verdict
- `passed` — 0 FAILs, regs_gate passed. Downstream (Stage 4) proceeds with a thin, honest profile.
