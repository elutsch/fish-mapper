import { NextResponse } from "next/server";
import { spots } from "@/lib/spots";
import { refreshSnapshot } from "@/lib/snapshot";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

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

  return NextResponse.json({
    generatedAt: new Date().toISOString(),
    results
  });
}
