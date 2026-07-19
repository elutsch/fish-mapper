---
slug: valens-lake
generated_at: 2026-07-19
schema_valid: true
species_emitted: 6
regs_verified: 2
regs_unverified: 0
gaps: 3
---

# Validation: Valens Lake

## Schema conformance
- PASS — `lib/lakeProfiles/valens-lake.ts` satisfies the current `LakeProfile` TypeScript schema.
- PASS — `artifacts/valens-lake/07-data.json` parses and is deeply equal to the TypeScript profile.
- PASS — all six taxonomy species were emitted in taxonomy order: two Strong, two Present, two Absent.
- PASS — `speciesCount: 2` matches the two carded Strong species.
- PASS — no live weather, water level, ice status, air-quality, or verdict fields were emitted.
- PASS — `valens-lake` is registered in `lib/lakeProfiles/index.ts` and resolves through `getLakeProfile`.
- PASS — the production build statically generated the Valens hub and four non-absent species routes.

## Regulations
- Verified species regs: Largemouth and Smallmouth Bass combined; Northern Pike.
- Unverified (pointer only): none.
- PASS — both profile regulations preserve the Ontario FMZ 16 season/limit wording, official URL, effective date, and `verified: true` state.
- PASS — the HCA April-to-late-June closure remains a separately labeled property/access rule and is not emitted as an Ontario waterbody exception.

## Gaps (null fields)
- `morphology.meanDepth` — null because no official mean depth was found.
- `morphology.trophicStatus` — null because no source documented a trophic classification.
- `morphology.thermalBehaviour` — null because no source documented stratification or turnover.

## Warnings
- Water clarity is emitted as `stained` from a 2021 paddler description; HCA records show that clarity has varied with carp abundance and vegetation.
- Bass and pike structure depends on a 2015 Canadian Sportfishing expert answer. HCA independently verifies the dam depth, bridge, and fish community, but does not publish a species-by-structure map.
- The current 800×450 `public/waterbodies/valens-lake.webp` asset already matches the `LakeImage` path `/waterbodies/valens-lake.webp`; no artwork replacement was required.

## Verification run
- `npx tsc --noEmit` — passed.
- `npm run validate:spots` — passed; 20 launch-capable spots.
- `npm test` — passed; 4 tests.
- `npm run build` — passed; 52 static pages generated.
- `git diff --check` — passed.
