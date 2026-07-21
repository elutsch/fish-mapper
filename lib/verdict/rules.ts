import { compass } from "../format";
import type { Craft, ForecastHour, PressureTrend, Rating, Spot, Verdict } from "../types";

const craftThresholds: Record<Craft, { goWind: number; marginalWind: number; goGust: number; marginalGust: number }> = {
  powerboat: { goWind: 30, marginalWind: 44, goGust: 48, marginalGust: 66 },
  kayak: { goWind: 18, marginalWind: 30, goGust: 30, marginalGust: 48 },
  canoe: { goWind: 12, marginalWind: 18, goGust: 22, marginalGust: 30 }
};

export function fallbackVerdict(
  spot: Spot,
  hours: ForecastHour[],
  pressureTrend: PressureTrend,
  validFor: string,
  caveat?: string
): Verdict {
  const daylight = fishingHours(hours);
  const peakWind = Math.max(...daylight.map((hour) => hour.windKmh), 0);
  const peakGust = Math.max(...daylight.map((hour) => hour.gustKmh), 0);
  const fetchPenalty = fetchPenaltyFor(spot);
  const windDir = dominantWind(daylight);
  const lee = leewardShore(windDir);
  const dir = compass(windDir);
  const window = bestWindow(daylight);

  const byCraft = {
    powerboat: craftVerdictFor("powerboat", spot, peakWind, peakGust, fetchPenalty, lee, dir, window),
    kayak: craftVerdictFor("kayak", spot, peakWind, peakGust, fetchPenalty, lee, dir, window),
    canoe: craftVerdictFor("canoe", spot, peakWind, peakGust, fetchPenalty, lee, dir, window)
  };
  const craftSummary = summaryForCraftSplit(byCraft, peakGust, window, lee);

  const pressureText =
    pressureTrend.label === "falling"
      ? "A falling barometer may open a pre-front feeding window, especially on the protected shoreline."
      : pressureTrend.label === "rising"
        ? "The rising barometer leans post-front, so expect a slower bite unless wind pushes bait into the lee."
        : "The barometer is broadly steady, so the best fishing edge comes from wind direction, fetch, and shoreline cover.";

  return {
    spotId: spot.id,
    activity: "on-water-fishing",
    generatedAt: new Date().toISOString(),
    validFor,
    byCraft,
    confidence: daylight.length >= 8 ? "medium" : "low",
    summaryMd: `${spot.name} is a ${lee}-shore plan today: wind over about ${spot.maxFetchKm ?? "unknown"} km of fetch should push the cleanest, most controllable water into that edge. Peak sustained wind near ${Math.round(peakWind)} km/h with gusts near ${Math.round(peakGust)} km/h makes the bite window craft-specific. ${craftSummary} ${pressureText}`,
    caveats: caveat ? [caveat] : []
  };
}

// Launch-only verdict per craft: the rating bakes in wind, gust, fetch and
// access; the note describes launching and boat control — never the bite.
function craftVerdictFor(
  craft: Craft,
  spot: Spot,
  peakWind: number,
  peakGust: number,
  fetchPenalty: number,
  lee: string,
  dir: string,
  window: string
) {
  if ((craft === "powerboat" && !spot.launch.trailer) || ((craft === "kayak" || craft === "canoe") && !spot.launch.carryIn)) {
    return {
      rating: "no-go" as Rating,
      bestWindow: window,
      note:
        craft === "powerboat"
          ? "No trailer ramp here — a powerboat can't launch."
          : "No carry-in access here — no put-in for this craft."
    };
  }

  const thresholds = craftThresholds[craft];
  const adjustedWind = peakWind + fetchPenalty;
  const adjustedGust = peakGust + fetchPenalty * 1.4;
  const rating: Rating =
    adjustedWind <= thresholds.goWind && adjustedGust <= thresholds.goGust
      ? "go"
      : adjustedWind <= thresholds.marginalWind && adjustedGust <= thresholds.marginalGust
        ? "marginal"
        : "no-go";

  const trait = {
    powerboat: "a powerboat's weight and power",
    kayak: "a kayak's low, wind-caught profile",
    canoe: "an open canoe's shallow draft"
  }[craft];
  const fetch = spot.maxFetchKm ? `${spot.maxFetchKm.toFixed(1)} km` : "open water";
  const wind = Math.round(peakWind);
  const gust = Math.round(peakGust);

  const note =
    rating === "go"
      ? `Clear to launch — ${wind} km/h from the ${dir} over ${fetch} of fetch stays well within ${trait}; easy to hold position.`
      : rating === "marginal"
        ? `Launchable but exposed — gusts to ${gust} km/h and ${fetch} of fetch will test ${trait}; put in on the ${lee} shore and stay tight to it.`
        : `Too rough — ${gust} km/h gusts over ${fetch} of fetch overwhelm ${trait}; not a safe launch today.`;

  return {
    rating,
    bestWindow: window,
    note
  };
}

function summaryForCraftSplit(
  byCraft: ReturnType<typeof craftVerdictFor> extends infer CraftVerdict
    ? Record<Craft, CraftVerdict>
    : never,
  peakGust: number,
  window: string,
  lee: string
) {
  if (
    byCraft.powerboat.rating === "no-go" &&
    byCraft.kayak.rating === "no-go" &&
    byCraft.canoe.rating === "no-go"
  ) {
    return `Fish may feed, but gusts near ${Math.round(peakGust)} km/h make the water unfishable from all three craft; treat ${window} as the only possible early check, not an all-day green light.`;
  }
  if (byCraft.powerboat.rating !== "no-go" && byCraft.kayak.rating === "no-go" && byCraft.canoe.rating === "no-go") {
    return `A powerboat has a protected-water window around ${window}, but kayak and canoe anglers should stay off; after that, gusts push the ${lee} shore from useful edge to survival margin.`;
  }
  if (byCraft.powerboat.rating !== "no-go") {
    return `Powerboats have the most margin around ${window}; paddlecraft need a shorter, more sheltered plan.`;
  }
  return `The useful bite window is narrow and craft-dependent around ${window}.`;
}

function fishingHours(hours: ForecastHour[]) {
  return hours.filter((hour) => {
    const localHour = Number(hour.time.slice(11, 13));
    return localHour >= 5 && localHour <= 21;
  });
}

export function fetchPenaltyFor(spot: Spot) {
  const fetch = spot.maxFetchKm ?? 1;
  if (fetch >= 6) return 8;
  if (fetch >= 3) return 5;
  if (fetch >= 1.5) return 2;
  return 0;
}

function dominantWind(hours: ForecastHour[]) {
  if (!hours.length) return 240;
  const strongest = [...hours].sort((a, b) => b.windKmh - a.windKmh)[0];
  return strongest.windDirDeg;
}

export function leewardShore(windFromDeg: number) {
  const toDeg = (windFromDeg + 180) % 360;
  if (toDeg >= 337.5 || toDeg < 22.5) return "north";
  if (toDeg < 67.5) return "northeast";
  if (toDeg < 112.5) return "east";
  if (toDeg < 157.5) return "southeast";
  if (toDeg < 202.5) return "south";
  if (toDeg < 247.5) return "southwest";
  if (toDeg < 292.5) return "west";
  return "northwest";
}

function bestWindow(hours: ForecastHour[]) {
  const sorted = [...hours]
    .filter((hour) => Number(hour.time.slice(11, 13)) >= 5)
    .sort((a, b) => a.windKmh + a.gustKmh * 0.4 - (b.windKmh + b.gustKmh * 0.4));
  const best = sorted[0];
  if (!best) return "No clear on-water window";
  const start = best.time.slice(11, 16);
  const endHour = String(Math.min(Number(best.time.slice(11, 13)) + 2, 23)).padStart(2, "0");
  return `${start}-${endHour}:${best.time.slice(14, 16)}`;
}
