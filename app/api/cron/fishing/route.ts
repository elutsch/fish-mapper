import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { spots } from "@/lib/spots";
import { refreshSnapshot } from "@/lib/snapshot";
import { getPostHogClient } from "@/lib/posthog-server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
// Refreshing every lake's forecast can take longer than the default budget; Hobby
// allows up to 60s.
export const maxDuration = 60;

// Once-daily job (Vercel Cron, ~00:01 America/Toronto). Two steps, in order:
//   1. Pull fresh forecasts into KV for every lake (server-side; no per-user calls).
//   2. Revalidate the static conditions pages so they regenerate ONCE from the new
//      KV data and are then served static from the CDN for the rest of the day.
// Naturally idempotent: refreshSnapshot overwrites the day's KV key, so re-running
// is safe.
export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Bust the cached forecast data so any fall-through page render after this run also
  // pulls fresh (refreshSnapshot itself already bypasses the cache via fresh: true).
  revalidateTag("forecast");

  const results = [];

  for (const spot of spots) {
    try {
      const snapshot = await refreshSnapshot(spot);
      results.push({
        spotId: spot.id,
        ok: true,
        rating: snapshot.verdict.byCraft
      });
    } catch (error) {
      results.push({
        spotId: spot.id,
        ok: false,
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  }

  // Purge the statically-cached conditions pages. Passing the dynamic route pattern
  // with "page" revalidates every instance of that route (all lakes / all species).
  const revalidated = ["/fishing", "/[waterbody]/fishing", "/[waterbody]/fishing/[species]"];
  revalidatePath("/fishing");
  revalidatePath("/[waterbody]/fishing", "page");
  revalidatePath("/[waterbody]/fishing/[species]", "page");

  const posthog = getPostHogClient();
  posthog.capture({
    distinctId: "forecast_refresh_job",
    event: "forecast_refresh_completed",
    properties: {
      total_waterbodies: results.length,
      successful_waterbodies: results.filter((result) => result.ok).length,
      failed_waterbodies: results.filter((result) => !result.ok).length
    }
  });
  await posthog.flush();

  return NextResponse.json({
    generatedAt: new Date().toISOString(),
    revalidated,
    results
  });
}
