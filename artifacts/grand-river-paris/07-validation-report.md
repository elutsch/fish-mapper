---
slug: grand-river-paris
generated_at: 2026-07-20
schema_valid: true
species_emitted: 6
regs_verified: 3
regs_unverified: 0
gaps: 5
---

# Validation: Grand River at Paris

## Schema conformance
- slug / lake / province / fmz — PASS
- waterbodyType: "river" — PASS (WaterbodyType enum includes "river")
- coordinates { lat: 43.1946, lng: -80.3849 } — PASS (authoritative lat/lng from data/spots.json grand-river-paris entry)
- morphology (all six fields present, river-appropriate nulls + documented mean depth) — PASS
- bestSeason / overview — PASS (verbatim from 04-copy)
- notableFacts[5] { fact, sourceUrl } — PASS (verbatim from 04-copy)
- regulations[3] { species, season, limit, sizeLimit, sourceUrl, effectiveDate, verified } — PASS
- regsDisclaimer — PASS (includes catch-and-release + sanctuary note)
- launches[4] { name, type: "carry-in", notes, sourceUrl } — PASS
- species[6] LakeProfileSpecies (all gamefish, taxonomy order) — PASS
- keyResources[4] { label, url } — PASS
- speciesCount: 3 — PASS (matches Destination+Strong carded species)
- lastVerified / factCheckStatus "passed" / regsGate "passed" — PASS (from Stage 2)

Field-for-field match against lib/lakeProfiles/types.ts and lib/lakeProfiles/conestogo-lake.ts conventions. Waterbody type set to "river" per the schema and lakes.md.

## Regulations
- Verified species regs (verified: true): Smallmouth Bass, Walleye, Northern Pike — all carry the Grand River (Paris) catch-and-release special regulation (S-0 / C-0, artificial lures only, single barbless hook) plus base FMZ 16 seasons, sourced to the official Government of Ontario FMZ 16 summary, effective 2025-12-08.
- Unverified (pointer only): none. (Matches Stage 2 — no species flagged [UNVERIFIED].)
- Note: the exact "extended open-season" wording for the Exceptional Waters special-reg zone was not isolated on the official page; per pipeline rules it was NOT invented. Base seasons + the verified C&R exception + the two sanctuary closures are carried instead.

## Gaps (null fields)
- morphology.surfaceArea — null: river reach, not a basin (1a [NOT FOUND — river reach]).
- morphology.maxDepth — null: no basin max-depth figure; deeper holes above dams noted qualitatively in meanDepth.
- morphology.clarity — null: clarity-as-basin does not cleanly apply to a flowing reach (1a: "clear-to-lightly-stained flowing water" — no clean enum fit).
- morphology.trophicStatus — null: not applicable to a river reach.
- morphology.thermalBehaviour — null: no lake-style stratification (flowing river; cold-water inflows noted in copy instead).
- species qualitySignal null for Northern Pike and Walleye (Strong tier — no quality signal required); Present species (largemouth, crappie, perch) carry empty structure/sources and null sub-guide fields by design (inverse-search rows).

## Warnings
- Index registration: NOT modified per run coordination rules (lib/lakeProfiles/index.ts is registered centrally by the orchestrator). grandRiverParis default-exports a LakeProfile and is ready to register as 'grand-river-paris'.
- Destination quality signal for Smallmouth Bass is the provincial "Exceptional Waters" management designation + species-specific catch-and-release special regulation, not a published CPUE/trophy figure. Flagged (non-blocking) at Stage 2 Audit 3.1 — a human reviewer may wish to confirm comfort with a designation-based Destination signal.
- Card art public/waterbodies/grand-river-paris.webp already exists — not regenerated.
- Regulatory sensitivity: this reach is strictly catch-and-release for smallmouth, walleye, and pike, with artificial-lure/barbless-hook restrictions and two seasonal sanctuary closures. All carried exactly; a reader-facing error here is high-consequence — human spot-check recommended before publish.
- Largemouth Bass and Yellow Perch are not specifically documented for the flowing Paris reach; scored Present (conservative) rather than Absent. Notable river species outside the six-gamefish scope (channel catfish, carp, rock bass, redhorse suckers incl. species-at-risk black/river redhorse) are present but intentionally not scored.
