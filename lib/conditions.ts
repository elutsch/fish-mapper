import { compass } from "./format";
import type { ActivityLevel, LaunchLevel } from "./rating";
import { dayActivity, dayGrade, launchFromWind } from "./rating";
import type { ForecastHour, PressureTrend, Spot, Verdict } from "./types";
import { fetchPenaltyFor, leewardShore } from "./verdict/rules";

type DashboardInput = {
  hours: ForecastHour[];
  verdict: Verdict;
  pressureTrend: PressureTrend;
  spot: Spot;
};

export function buildConditionsDashboard({ hours, verdict, pressureTrend, spot }: DashboardInput) {
  const daylight = hours.filter((hour) => {
    const localHour = Number(hour.time.slice(11, 13));
    return localHour >= 5 && localHour <= 21;
  });
  const representative = nearestHour(daylight, 12) ?? daylight[0] ?? hours[0];
  const peakWind = Math.max(...daylight.map((hour) => hour.windKmh), 0);
  const peakGust = Math.max(...daylight.map((hour) => hour.gustKmh), 0);
  const peakWindHour = daylight.reduce<ForecastHour | undefined>(
    (best, hour) => (best && best.windKmh >= hour.windKmh ? best : hour),
    undefined
  );
  const windDir = peakWindHour ? compass(peakWindHour.windDirDeg) : null;
  const uvIndex =
    firstNumber(daylight.map((hour) => hour.uvIndexMax)) ??
    Math.max(...daylight.map((hour) => hour.uvIndex ?? 0), 0);
  const tempHigh = firstNumber(daylight.map((hour) => hour.tempMaxC));
  const tempLow = firstNumber(daylight.map((hour) => hour.tempMinC));
  const sunrise = representative?.sunrise;
  const sunset = representative?.sunset;
  const precipByHour = daylight.map((hour) => hour.precipMm ?? 0);
  const precipTotal = precipByHour.reduce((sum, mm) => sum + mm, 0);
  const precipPeak = Math.max(...precipByHour, 0);
  const wetHours = precipByHour.filter((mm) => mm >= 0.2).length;
  const fetchPenalty = fetchPenaltyFor(spot);
  const leeShore = peakWindHour ? leewardShore(peakWindHour.windDirDeg) : "lee";
  const note = gradeNarrative({
    launch: launchFromWind(peakWind, peakGust, fetchPenalty).level,
    activity: dayActivity(daylight, pressureTrend.label),
    pressure: pressureTrend.label,
    fetchKm: spot.maxFetchKm ?? null,
    windDir,
    lee: leeShore,
    peakWind,
    peakGust,
    uv: uvIndex
  });
  const grade = { ...dayGrade(daylight, pressureTrend.label, fetchPenalty), note };
  const summary = conditionsSummary({
    tempHigh,
    tempLow,
    peakGust,
    precipTotal,
    pressure: pressureTrend.label
  });

  return {
    summary,
    temp: {
      // Daily high/low — the once-a-day values, not an hourly "current" reading.
      value:
        typeof tempHigh === "number" && typeof tempLow === "number"
          ? `${Math.round(tempHigh)}°\n${Math.round(tempLow)}°`
          : typeof tempHigh === "number"
            ? `${Math.round(tempHigh)}°`
            : "n/a",
      detail:
        typeof tempHigh === "number" && typeof tempLow === "number"
          ? "High · Low"
          : "Daily air temperature"
    },
    uv: {
      // Daily maximum UV (uvIndexMax), not the current hour.
      value: Number.isFinite(uvIndex) ? `${Math.round(uvIndex)}` : "n/a",
      detail: "Daily max · 0-11"
    },
    wind: {
      // Daily maximum sustained wind and gust, with the direction at the windiest hour.
      value: `${Math.round(peakWind)}\nkm/h`,
      detail: `${windDir ? `${windDir} · ` : ""}daily max · gust ${Math.round(peakGust)} km/h`
    },
    pressure: {
      value: representative ? `${Math.round(representative.pressureHpa)}\nhPa` : "n/a",
      detail: `${pressureTrend.label} · ${Math.round(pressureTrend.rateHpaPer24h)} hPa/24h`
    },
    sun: {
      value: sunrise && sunset ? `${formatClock(sunrise)}\n${formatClock(sunset)}` : "n/a",
      detail: sunrise && sunset ? `${daylightDuration(sunrise, sunset)} daylight` : "Sun times unavailable"
    },
    moon: {
      value: moonPhase(verdict.validFor),
      detail: "Lunar phase"
    },
    precip: {
      value:
        precipPeak < 0.1
          ? "0 mm"
          : `${precipTotal < 1 ? precipTotal.toFixed(1) : Math.round(precipTotal)} mm`,
      detail:
        precipPeak < 0.1
          ? "Dry through the launch window"
          : `Peak ${precipPeak.toFixed(1)} mm/h · ${wetHours} wet hr${wetHours === 1 ? "" : "s"}`
    },
    grade
  };
}

// Plain-English read for the Quick Summary, in a fixed order so it always reads
// well: (1) rain if forecast + temperature, (2) wind & gusts, (3) what the
// pressure trend means for the bite.
function conditionsSummary(input: {
  tempHigh?: number;
  tempLow?: number;
  peakGust: number;
  precipTotal: number;
  pressure: PressureTrend["label"];
}) {
  const { tempHigh, tempLow, peakGust, precipTotal, pressure } = input;

  // 1. Rain (only if forecast) + temperature.
  const warmth =
    typeof tempHigh !== "number"
      ? null
      : tempHigh <= 5
        ? "cold"
        : tempHigh <= 14
          ? "cool"
          : tempHigh <= 24
            ? "mild"
            : tempHigh <= 29
              ? "warm"
              : "hot";
  const tempCore =
    typeof tempHigh === "number"
      ? `high of ${Math.round(tempHigh)}°${
          typeof tempLow === "number" ? ` and a low of ${Math.round(tempLow)}°` : ""
        }`
      : null;
  const rain = precipTotal >= 5 ? "Rainy" : precipTotal >= 1 ? "Showery" : null;

  const opener =
    warmth && tempCore
      ? rain
        ? `${rain} and ${warmth}, with a ${tempCore}.`
        : `${warmth[0].toUpperCase()}${warmth.slice(1)}, with a ${tempCore}.`
      : rain
        ? `${rain} through the day.`
        : "Settled conditions today.";

  // 2. Wind & gusts.
  const gust = Math.round(peakGust);
  const wind =
    peakGust < 20
      ? "Winds stay light"
      : peakGust < 35
        ? `A moderate breeze, gusts to ${gust} km/h`
        : peakGust < 50
          ? `Breezy, gusts to ${gust} km/h`
          : `Windy, gusts to ${gust} km/h`;

  // 3. Pressure trend.
  const pressureLine =
    pressure === "falling"
      ? "Falling pressure often fires up the bite"
      : pressure === "rising"
        ? "Rising pressure can make for a slower, pickier bite"
        : "Steady pressure should keep the bite consistent";

  return `${opener} ${wind}. ${pressureLine}.`;
}

// The grade narrative, in a fixed order: (1) boating conditions from the day's
// worst-case launch read, naming fetch/wind/direction; (2) fishing conditions
// from the typical fish activity + the pressure driver; (3) one concluding
// tactic for how to fish the lake.
function gradeNarrative(input: {
  launch: LaunchLevel;
  activity: ActivityLevel;
  pressure: PressureTrend["label"];
  fetchKm: number | null;
  windDir: string | null;
  lee: string;
  peakWind: number;
  peakGust: number;
  uv: number;
}) {
  const { launch, activity, pressure, fetchKm, windDir, lee, peakWind, peakGust, uv } = input;
  const fetch = fetchKm ? `${fetchKm.toFixed(1)} km` : "open water";
  const wind = Math.round(peakWind);
  const gust = Math.round(peakGust);
  const dir = windDir ?? "the prevailing wind";

  const boating =
    launch === "all-clear"
      ? `Easy water — light ${dir} winds keep ${fetch} of fetch calm and controllable.`
      : launch === "fishable"
        ? `Boatable but breezy — ${wind} km/h from the ${dir} over ${fetch} of fetch builds some chop; the ${lee} shore stays cleanest.`
        : launch === "caution"
          ? `Choppy — gusts to ${gust} km/h drive ${fetch} of fetch, so shelter on the ${lee} shore and keep runs short.`
          : `Too rough to launch — ${gust} km/h gusts across ${fetch} of fetch push the whole lake past a safe margin.`;

  const driver =
    pressure === "falling"
      ? "a falling barometer often trips a pre-front feed"
      : pressure === "rising"
        ? "the rising barometer leans toward a pickier bite"
        : uv >= 7
          ? "with bright sun, dawn and dusk are your windows"
          : "steady pressure keeps it predictable";
  const fishing =
    activity === "maximum"
      ? `The bite should be firing — ${driver}.`
      : activity === "high"
        ? `Good bite potential — ${driver}.`
        : activity === "fair"
          ? `A middling bite — ${driver}.`
          : `Slow bite likely — ${driver}.`;

  const tactic =
    launch === "caution" || launch === "do-not-launch"
      ? `Fish the ${lee} shore where wind stacks bait and keep it tight to cover.`
      : pressure === "falling"
        ? "Get out early and fish hard before the front."
        : "Work the shoreline edges and lean on the low-light hours.";

  return `${boating} ${fishing} ${tactic}`;
}

function nearestHour(hours: ForecastHour[], targetHour: number) {
  return [...hours].sort(
    (a, b) =>
      Math.abs(Number(a.time.slice(11, 13)) - targetHour) -
      Math.abs(Number(b.time.slice(11, 13)) - targetHour)
  )[0];
}

function firstNumber(values: Array<number | undefined>) {
  return values.find((value): value is number => typeof value === "number" && Number.isFinite(value));
}

function formatClock(iso: string) {
  return new Intl.DateTimeFormat("en-CA", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "America/Toronto"
  }).format(new Date(iso));
}

function daylightDuration(sunrise: string, sunset: string) {
  const minutes = Math.max(0, Math.round((new Date(sunset).getTime() - new Date(sunrise).getTime()) / 60000));
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${String(mins).padStart(2, "0")}m`;
}

function moonPhase(dateString: string) {
  const date = new Date(`${dateString}T12:00:00-04:00`);
  const knownNewMoon = new Date("2000-01-06T18:14:00Z").getTime();
  const lunarCycleMs = 29.530588853 * 24 * 60 * 60 * 1000;
  const age = (((date.getTime() - knownNewMoon) % lunarCycleMs) + lunarCycleMs) % lunarCycleMs;
  const phase = age / lunarCycleMs;

  if (phase < 0.03 || phase > 0.97) return "New";
  if (phase < 0.22) return "Waxing crescent";
  if (phase < 0.28) return "First quarter";
  if (phase < 0.47) return "Waxing gibbous";
  if (phase < 0.53) return "Full";
  if (phase < 0.72) return "Waning gibbous";
  if (phase < 0.78) return "Last quarter";
  return "Waning crescent";
}
