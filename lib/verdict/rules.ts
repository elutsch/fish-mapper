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
  const window = bestWindow(daylight);

  const byCraft = {
    powerboat: craftVerdictFor("powerboat", spot, peakWind, peakGust, fetchPenalty, lee, window),
    kayak: craftVerdictFor("kayak", spot, peakWind, peakGust, fetchPenalty, lee, window),
    canoe: craftVerdictFor("canoe", spot, peakWind, peakGust, fetchPenalty, lee, window)
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

function craftVerdictFor(
  craft: Craft,
  spot: Spot,
  peakWind: number,
  peakGust: number,
  fetchPenalty: number,
  lee: string,
  window: string
) {
  if ((craft === "powerboat" && !spot.launch.trailer) || ((craft === "kayak" || craft === "canoe") && !spot.launch.carryIn)) {
    return {
      rating: "no-go" as Rating,
      note:
        craft === "powerboat"
          ? "This access is marked carry-in only, so a trailered powerboat is not launchable here."
          : "This spot is not marked for carry-in launching, so this craft is not launchable here."
    };
  }

  const thresholds = craftThresholds[craft];
  const adjustedWind = peakWind + fetchPenalty;
  const adjustedGust = peakGust + fetchPenalty * 1.4;
  let rating: Rating =
    adjustedWind <= thresholds.goWind && adjustedGust <= thresholds.goGust
      ? "go"
      : adjustedWind <= thresholds.marginalWind && adjustedGust <= thresholds.marginalGust
        ? "marginal"
        : "no-go";

  const craftText = {
    powerboat:
      rating === "go"
        ? "A small powerboat can cover points and weed edges, but start on the lee before crossing longer open fetch."
        : rating === "marginal"
          ? "A small powerboat can still fish, but make it a protected-water pattern with short runs between spots."
          : "Even a small powerboat is fighting enough chop or launch constraint that the fishing plan is not worth it.",
    kayak:
      rating === "go"
        ? "A fishing kayak has a workable bite window if you stay near protected shoreline structure."
        : rating === "marginal"
          ? "A fishing kayak can pick apart the lee, but boat control will limit casting angles outside sheltered water."
          : "A fishing kayak loses too much position control once gusts and fetch combine; the bite is not worth the exposure.",
    canoe:
      rating === "go"
        ? "An open canoe can fish close shoreline targets while the water stays calm."
        : rating === "marginal"
          ? "An open canoe is only a narrow lee-shore fishing option, not a search-the-lake option."
          : "An open canoe has too little margin today; wind and gusts take away the fishing window."
  }[craft];
  const leeText =
    rating === "no-go"
      ? `The ${lee} shore is still the least exposed water, but it does not create enough margin for this craft.`
      : `Prioritize the ${lee} shore for cleaner casts and better boat control.`;

  return {
    rating,
    bestWindow: window,
    note: `${craftText} ${leeText}`
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
