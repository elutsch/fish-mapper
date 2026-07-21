import { computePressureTrend, defaultValidFor, fetchForecastSnapshot, hoursForDate } from "./forecast";
import { getSnapshot, saveSnapshot } from "./storage";
import type { ForecastHour, Spot } from "./types";
import { generateVerdict } from "./verdict";
import { fallbackVerdict } from "./verdict/rules";
import { buildWeek } from "./week";

export async function getOrCreateSnapshot(spot: Spot, validFor = defaultValidFor()) {
  const stored = await getSnapshot(spot.id, validFor);
  if (stored) {
    return stored;
  }

  const { targetHours, pressureTrend, week, fetchCaveat } = await snapshotInputs(spot, validFor);
  const verdict = fetchCaveat
    ? fallbackVerdict(spot, targetHours, pressureTrend, validFor, fetchCaveat)
    : await generateVerdict(spot, targetHours, pressureTrend, validFor);
  const snapshot = { forecast: targetHours, pressureTrend, verdict, week };
  await saveSnapshot(spot.id, validFor, snapshot);
  return snapshot;
}

export async function refreshSnapshot(spot: Spot, validFor = defaultValidFor()) {
  // The daily cron pulls live data (bypasses the cached "forecast" tag).
  const { targetHours, pressureTrend, week, fetchCaveat } = await snapshotInputs(spot, validFor, {
    fresh: true
  });
  const verdict = fetchCaveat
    ? fallbackVerdict(spot, targetHours, pressureTrend, validFor, fetchCaveat)
    : await generateVerdict(spot, targetHours, pressureTrend, validFor);
  const snapshot = { forecast: targetHours, pressureTrend, verdict, week };
  await saveSnapshot(spot.id, validFor, snapshot);
  return snapshot;
}

async function snapshotInputs(spot: Spot, validFor: string, opts: { fresh?: boolean } = {}) {
  try {
    const forecast = await fetchForecastSnapshot(spot, opts);
    return {
      targetHours: hoursForDate(forecast, validFor),
      pressureTrend: computePressureTrend(forecast, validFor),
      week: buildWeek(forecast, spot, validFor),
      fetchCaveat: null
    };
  } catch (error) {
    return {
      targetHours: fallbackForecast(validFor),
      pressureTrend: { label: "steady" as const, rateHpaPer24h: 0 },
      week: [],
      fetchCaveat: `Forecast fetch failed during render: ${error instanceof Error ? error.message : "unknown error"}. Showing conservative fallback conditions until cron refresh succeeds.`
    };
  }
}

function fallbackForecast(validFor: string): ForecastHour[] {
  return Array.from({ length: 24 }, (_, hour) => ({
    time: `${validFor}T${String(hour).padStart(2, "0")}:00:00-04:00`,
    tempC: hour >= 10 && hour <= 18 ? 21 : 16,
    tempMaxC: 23,
    tempMinC: 14,
    uvIndex: hour >= 10 && hour <= 16 ? 6.2 : 0.8,
    uvIndexMax: 6.8,
    windKmh: hour >= 10 && hour <= 18 ? 18 : 10,
    gustKmh: hour >= 10 && hour <= 18 ? 30 : 18,
    windDirDeg: 225,
    pressureHpa: 1013,
    precipMm: 0,
    cloudPct: 50,
    sunrise: `${validFor}T05:58:00-04:00`,
    sunset: `${validFor}T20:56:00-04:00`
  }));
}
