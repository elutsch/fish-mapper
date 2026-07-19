---
slug: belwood-lake
generated_at: 2026-07-19
schema_valid: true
species_emitted: 6
regs_verified: 2
regs_unverified: 0
gaps: 2
---

# Validation: Belwood Lake

## Schema conformance
All required `LakeProfile` fields present and typed per `lib/lakeProfiles/types.ts` (field-for-field against `conestogo-lake.ts`):
- `slug`, `lake`, `province`, `fmz` (number 16), `waterbodyType` ("reservoir") — PASS
- `coordinates` { lat: 43.768, lng: -80.336 } — PASS (from Wikipedia; 1a carried no numeric lat/lng — see Warnings)
- `morphology` — PASS (all 6 keys present; `meanDepth` null)
- `bestSeason`, `overview` — PASS (overview carried verbatim from 04-copy)
- `notableFacts` [4], `regulations` [2], `regsDisclaimer` — PASS
- `launches` [3] — PASS (types: trailer, trailer-and-carry-in, carry-in — all in the type union)
- `species` [6] `LakeProfileSpecies` — PASS (every gamefish scored in 1b, all 12 keys each)
- `keyResources` [4] — PASS
- `speciesCount` 2, `lastVerified` "2026-07-19", `factCheckStatus` "passed", `regsGate` "passed" — PASS
- No live/conditions fields emitted — PASS
- JSON audit trail (`07-data.json`) parses cleanly — PASS

`speciesCount` (2) equals the count of Destination + Strong carded species (Northern Pike — destination; Smallmouth Bass — strong). PASS.

## Regulations
- Verified species regs (verified: true): **Northern Pike**, **Smallmouth Bass** — both carried verbatim from 04-copy / 1a, effective-dated 2025-12-08, sourced to the official ontario.ca FMZ 16 summary. Regs gate passed at Stage 2.
- Unverified (pointer only): **none** — no carded species' reg was marked `[UNVERIFIED]`.
- Note on the Stage 2 `[UNVERIFIED]` flag: the flag applied to a *possible extended pre-opener catch-and-release bass season* (edit 4.4), which is NOT a stated reg. The profile emits only the verified fourth-Saturday-in-June harvest bass season; the unverified extended window is not stated anywhere. A Smallmouth `speciesRules` note points anglers to confirm any pre-opener C&R provision with the official summary — a pointer, not a stated limit. This matches the Stage 2 flag exactly.

## Gaps (null fields)
- `morphology.meanDepth` — null: 1a documented station soundings and max depth (20.7 m at the dam) but no mean/average depth figure.
- `species[].qualitySignal` for Smallmouth Bass — null: 1b found named rock structure but no citable quality signal (no CPUE survey / trophy / tournament / stocking), which is exactly why it was capped at Strong. (Northern Pike carries a non-null qualitySignal — the Lions Pike Derby.)
- Present-tier species (Largemouth Bass, Walleye, Black Crappie, Yellow Perch): `bestSeason`, `bodyCopy`, `qualitySignal`, `lede`, `howItFishes`, `structureDetails`, `speciesRules` all null and `structure`/`sources` empty — by design (Present/Absent carry no copy/sub-guide fields; they exist to power "what's not here" inverse search).

## Warnings
- **Coordinates source:** 1a did not carry a clean numeric lat/lng. Coordinates (43.768, -80.336) were taken from the Wikipedia "Lake Belwood" article (43.76806, -80.33556, cited in 1a's Authoritative sources), rounded to 3 decimals to match the repo convention (cf. conestogo 43.687, -80.735). Human reviewer may wish to confirm the pin against the GRCA launch location if a precise access marker is preferred.
- **index.ts NOT modified** per orchestration coordination rules — the orchestrator registers profiles centrally. `lib/lakeProfiles/belwood-lake.ts` default-exports `belwoodLake: LakeProfile` and is ready to import as `import belwoodLake from './belwood-lake';` with record key `'belwood-lake'`.
- **No project-wide tsc/build run** per coordination rules (index.ts not yet wired to this file). Type-correctness ensured by field-for-field matching against `types.ts` and `conestogo-lake.ts`; JSON structural validation passed.
- **Card art:** `public/waterbodies/belwood-lake.webp` already exists — no image generated.
- **Largemouth Bass** is emitted at tier "present" per 1b's scoring (user-logged/unconfirmed by official inventory); it was intentionally omitted from the lake page's "also present" narrative line but is retained in the profile species array for inverse-search completeness.
- **Walleye** framed as small/unpredictable in the page's also-present line (FLAG 1.21, user-report structure); emitted at tier "present" with no copy, consistent with 1b.

## Summary
Schema-valid `LakeProfile` emitted for Belwood Lake. 6 gamefish species (1 destination, 1 strong, 4 present, 0 absent). 2 carded species with full copy + sub-guides. 2 regulations, both verified against the official FMZ 16 source (effective 2025-12-08). No live-data fields. Ready for central registration in `index.ts` by the orchestrator.
