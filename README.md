# AER Fishing Conditions MVP

Next.js App Router scaffold for per-waterbody on-water fishing pages. Each page renders one substantial waterbody page with separate powerboat, kayak, and canoe verdicts.

## Commands

- `npm run dev` starts the local app.
- `npm run build` verifies the Next.js build.
- `npm test` runs craft-divergence and safety-gate tests.
- `npm run validate:spots` checks the launch-capable seed list.
- `npx tsx scripts/inspect-access-points.ts` inspects the live Ontario Fishing Access Points layer.

## Environment

- `ANTHROPIC_API_KEY` enables agent-written verdict JSON.
- `ANTHROPIC_MODEL` defaults to `claude-sonnet-4-6`.
- `KV_REST_API_URL` and `KV_REST_API_TOKEN` enable Vercel KV snapshots.
- `CRON_SECRET` protects `/api/cron/fishing` when set.

Without Anthropic or KV env vars, pages still render using the deterministic fallback and in-memory snapshots.

## Data Status

`data/spots.json` is a 20-waterbody launch-candidate seed with non-empty fetch fields. Before production, confirm launchability against Ontario Fishing Access Points/current conservation authority rules and replace manual fetch values with polygon-derived bearings/chords from Aquatic Resource Areas.
