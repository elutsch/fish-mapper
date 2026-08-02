---
slug: ken-whillans
lake: Ken Whillans
province: Ontario
fmz: 16
generated_at: 2026-08-01
iteration: 1
total_claims_checked: 24
pass_count: 24
fail_count: 0
flag_count: 1
regs_gate: passed
edits_applied: 0
edits_deferred: 0
re_audit_recommended: false
overall_status: passed
---

# Fact-Check & Correct: Ken Whillans Resource Management Area — Iteration 1

## Summary
- Claims audited: 24
- PASS / FAIL / FLAG: 24 / 0 / 1
- Regs gate: passed — every in-scope reg (bass, pike, perch) verified against the official ontario.ca FMZ 16 summary, effective 2025-12-08.
- Edits applied: 0 | deferred: 0
- Re-audit recommended: no — regs verified; one non-blocking FLAG-set carried to Stage 4.
- Overall status: passed

Small-pond LOW-richness record built almost entirely on official CVC and Government-of-Ontario
sources. Regulations verified exactly against the FMZ 16 summary; frontmatter counts in 1a/1b
verified consistent (no edit required). The out-of-scope stocked-trout handling and the seed
spots.json discrepancies are recorded as FLAG/notes for the orchestrator, not fixed here (out of
this stage's file scope).

## Audit 1 — Per-claim verification

| ID | File | Section | Claim (≤120 chars) | Source URL | Verdict | Category | Required action | Action applied | Confidence | Notes |
|----|------|---------|--------------------|------------|---------|----------|-----------------|----------------|------------|-------|
| 1.1 | 1a | Notable | 215-acre CVC park, former Kidd property, CA since 1954, named for Ken Whillans | ontarioconservationareas.ca; hikingthegta | PASS | — | — | — | — | — |
| 1.2 | 1a | Notable | Two ponds: Kidd Pond + Orchard Pond, stream link at west end, Credit River on west side | hikingthegta; ourroutes | PASS | — | — | — | — | angler/blog-sourced but consistent across two sources |
| 1.3 | 1a | Species | Kidd Pond = largemouth bass | ourroutes | PASS | — | — | — | — | editorial source; corroborated by CVC "bass" listing |
| 1.4 | 1a | Species | Orchard Pond = northern pike (+ spring-stocked rainbow trout) | ourroutes | PASS | — | — | — | — | trout out of scope, context only |
| 1.5 | 1a | Species | "perch" present in the ponds | visitcaledon | PASS | — | — | — | — | generic, no pond specified |
| 1.6 | 1a | Species | Smallmouth / walleye / black crappie NOT documented | (absence) | PASS | — | — | — | — | no source lists them |
| 1.7 | 1a | Morphology | area/depth/clarity/trophic/thermal all NOT FOUND | — | PASS | — | — | — | — | honest gaps, not invented |
| 1.8 | 1a | Structure | Both ponds have small fishing piers | cvc RMA page; ourroutes | PASS | — | — | — | — | — |
| 1.9 | 1a | Structure | Orchard Pond is the boat-able pond (carry-in canoe/kayak) | cvc canoeing page | PASS | — | — | — | — | — |
| 1.10 | 1a | Access | Address 16026 Hurontario St; hours 7a–9p; open May–Oct; paid admission | cvc RMA; ontarioconservationareas | PASS | — | — | — | — | — |
| 1.11 | 1a | Access | Carry-in access: walk boat from parking to Orchard Pond shoreline | cvc canoeing page | PASS | — | — | — | — | — |
| 1.12 | 1a | Gotchas | Ice fishing NOT permitted at Ken Whillans | visitcaledon | PASS | — | — | — | — | — |
| 1.13 | 1a | Gotchas | Electric-motor rule for private boats not stated by CVC | cvc canoeing page | PASS | — | — | — | — | supports seed flag |
| 1.14 | 1a | Stocking | Rainbow trout stocked each spring in Orchard Pond (out of scope) | ourroutes; visitcaledon | PASS | — | — | — | — | context only |
| 1.15 | 1a | Stocking | No warmwater-species stocking record found | (absence) | PASS | — | — | — | — | — |

## Audit 2 — Cross-file reconciliation (1a ↔ 1b)

| ID | Topic | 1a says | 1b says | Verdict | Required action | Action applied | Confidence | Notes |
|----|-------|---------|---------|---------|-----------------|-----------------|------------|-------|
| 2.1 | Largemouth structure | Kidd Pond (bass pond, pier, C&R) | Kidd Pond (designated largemouth water) | PASS — compatible | — | — | HIGH | — |
| 2.2 | Pike structure | Orchard Pond (pike water, pier, boat-able) | Orchard Pond (named pike pond, paddle-able) | PASS — compatible | — | — | HIGH | — |
| 2.3 | Perch | present, generic, no structure | Present tier | PASS | — | — | HIGH | — |
| 2.4 | Absent set | smallmouth/walleye/crappie not documented | all three Absent | PASS | — | — | HIGH | — |
| 2.5 | 1b absent_count frontmatter | — | absent_count: 3 (smallmouth, walleye, crappie) | PASS — consistent | — | — | HIGH | counts verified, no edit needed |

## Audit 3 — Species tier-evidence sufficiency (Kelowna backstop, lake form)

| ID | Species | Tier | Structure in 1b | Matching in 1a | Quality signal | Sources | sigReqEvidence? | Verdict | Required action | Action applied | Confidence | Notes |
|----|---------|------|-----------------|-----------------|----------------|---------|-----------------|---------|-----------------|----------------|------------|-------|
| 3.1 | Largemouth Bass | Strong | Kidd Pond | YES | none (Strong needs none) | 2 | yes ✓ (Strong ⇒ structure only) | PASS | — | — | HIGH | named pond + C&R-managed-pond differentiator |
| 3.2 | Northern Pike | Strong | Orchard Pond | YES | none (Strong needs none) | 2 | yes ✓ | PASS | — | — | HIGH | named pond + paddle-access differentiator |
| 3.3 | Yellow Perch | Present | generic | n/a | n/a | 0 | n/a | PASS | — | — | HIGH | Present needs no source |
| 3.4 | Smallmouth/Walleye/Crappie | Absent | none | n/a | n/a | 0 | n/a | PASS | — | — | HIGH | correctly Absent |
| 3.5 | (Rainbow trout) | none | out of scope | — | — | — | — | PASS | — | — | HIGH | correctly no tier/entry (out of scope) |

No in-scope species is tiered Destination — correct, since none has a citable quality signal. No warmwater tier was inflated to compensate for the excluded trout.

## Audit 4 — Regulations integrity gate (BLOCKING)

| ID | Species | Reg (season/limit/size) | Source | Official source? | Effective-dated? | Matches source exactly? | Verdict | Action applied | Notes |
|----|---------|--------------------------|--------|------------------|------------------|--------------------------|---------|----------------|-------|
| 4.1 | Largemouth & Smallmouth Bass (combined) | fourth Saturday in June to Nov 30; S-6 / C-2; no size limit | ontario.ca FMZ 16 | YES | YES (2025-12-08) | YES | PASS | — | verified against official page |
| 4.2 | Northern Pike | Jan 1–Mar 31 and second Saturday in May to Dec 31; S-6 / C-2; no size limit | ontario.ca FMZ 16 | YES | YES (2025-12-08) | YES | PASS | — | — |
| 4.3 | Yellow Perch | open all year; S-50 / C-25; no size | ontario.ca FMZ 16 | YES | YES (2025-12-08) | YES | PASS | — | — |
| 4.4 | Waterbody exception | none for Ken Whillans | ontario.ca FMZ 16 | YES | YES | YES | PASS | — | zone-wide applies |
| 4.5 | CVC property rule | bass catch-and-release at Ken Whillans | cvc.ca/fishing-regulations | YES (CVC official, property rule not provincial law) | dated by CVC page | YES | PASS | — | kept distinct from provincial limit |
| 4.6 | Bait | FMZ 16 in Southern Bait Management Zone | ontario.ca FMZ 16 | YES | YES | YES | PASS | — | — |

`regs_gate` = **passed** — every in-scope target-species reg is on an official, effective-dated Government of Ontario source and matches the source wording exactly. CVC property rules (bass C&R, worms-in-ponds-only, no ice fishing) are correctly attributed to CVC, not to provincial law.

## Schema-deviation flags
- None. Frontmatter counts in 1a and 1b verified consistent with the scored tiers.

## Edits applied summary
| FC ID | File | Action | Before | After | Source change |
|-------|------|--------|--------|-------|---------------|
| — | — | — | — | — | none |

## Edits deferred
| FC ID | File | Action | Reason |
|-------|------|--------|--------|
| — | — | — | none |

## Tier downgrades summary
| Species | Before | After |
|---------|--------|-------|
| — | — | — |

## Standing FLAGs (for Stage 4)
- **FLAG-1 (out-of-scope trout):** the site's headline fishery is stocked put-and-take rainbow trout — acknowledge it factually in the Overview/prose so the page is not misleading, but do NOT card it, tier it, or state a trout limit as an in-scope reg. Trout keep rule (youth <17 / seniors >64) may be mentioned as context but is not a scored regulation.
- **FLAG-2 (LOW richness / thin substrate):** no morphology figures and no quality signals — the page must stay short and honest; do not pad the two Strong cards.
- **FLAG-3 (CVC property vs provincial regs):** keep CVC bass catch-and-release, worms-in-ponds-only, and no-ice-fishing visibly distinct from the FMZ 16 provincial season/limit.
- **FLAG-4 (seed corrections — orchestrator, not Stage 4):** spots.json lists smallmouth (should be largemouth) and omits northern pike; waterbody type "reservoir" is an imperfect fit for small ponds; electric-motor rule unconfirmed.

## Iteration history
- **Iteration 1** (2026-08-01): 24 PASS / 0 FAIL / 1 FLAG-set; regs gate passed; 0 edits; 0 deferred.

## Verdict
- `passed` — 0 FAILs remaining AND regs_gate passed → downstream proceeds to Stage 4.
