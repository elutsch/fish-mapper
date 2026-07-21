import { compass } from "./format";
import { dayGrade } from "./rating";
import type { ForecastHour, PressureTrend, Spot, Verdict } from "./types";
import { fetchPenaltyFor } from "./verdict/rules";

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
  const cloudByHour = daylight.map((hour) => hour.cloudPct ?? 0);
  const cloudAvg = cloudByHour.length ? cloudByHour.reduce((sum, pct) => sum + pct, 0) / cloudByHour.length : 0;
  const grade = { ...dayGrade(daylight, pressureTrend.label, fetchPenaltyFor(spot)), note: verdict.summaryMd };
  const alert = conditionsAlert(peakWind, peakGust, uvIndex, pressureTrend.label);
  const callout = gradeCallout(grade.value, pressureTrend.label);
  const summary = conditionsSummary({
    tempHigh,
    tempLow,
    peakGust,
    precipTotal,
    cloudAvg,
    pressure: pressureTrend.label
  });

  return {
    alert,
    callout,
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

// A plain-English read of the day's overall conditions — sky, temperature,
// wind, and what the pressure story means for the bite. Deliberately NOT about
// launch windows or craft: this describes the weather, not when to be on it.
function conditionsSummary(input: {
  tempHigh?: number;
  tempLow?: number;
  peakGust: number;
  precipTotal: number;
  cloudAvg: number;
  pressure: PressureTrend["label"];
}) {
  const { tempHigh, tempLow, peakGust, precipTotal, cloudAvg, pressure } = input;

  const sky =
    precipTotal >= 5
      ? "Rainy"
      : precipTotal >= 1
        ? "Showery"
        : cloudAvg < 30
          ? "Clear"
          : cloudAvg < 70
            ? "Part sun"
            : "Overcast";

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

  const tempTail =
    typeof tempHigh === "number"
      ? `, with a high of ${Math.round(tempHigh)}°${
          typeof tempLow === "number" ? ` and a low of ${Math.round(tempLow)}°` : ""
        }`
      : "";

  const skyAndTemp = warmth
    ? `${sky} and ${warmth}${tempTail}.`
    : `${sky} conditions today${tempTail}.`;

  const gust = Math.round(peakGust);
  const windClause =
    peakGust < 20
      ? "Winds stay light"
      : peakGust < 35
        ? `A moderate breeze, gusts to ${gust} km/h`
        : peakGust < 50
          ? `Breezy, gusts to ${gust} km/h`
          : `Windy, gusts to ${gust} km/h`;

  const pressureClause =
    pressure === "falling"
      ? "falling pressure often fires up the bite"
      : pressure === "rising"
        ? "rising pressure can make for a slower, pickier bite"
        : "steady pressure should keep the bite consistent";

  return `${skyAndTemp} ${windClause} — ${pressureClause}.`;
}

// The single most relevant watch-out for the day, framed as a caution. Ordered
// hard hazards first (gust, wind), then sun, then the pressure story.
function conditionsAlert(
  peakWind: number,
  peakGust: number,
  uvIndex: number,
  pressure: PressureTrend["label"]
) {
  if (peakGust >= 45) return `Gusts to ${Math.round(peakGust)} km/h — tuck into sheltered water.`;
  if (peakWind >= 25) return `Wind up to ${Math.round(peakWind)} km/h — the lee shore is your friend.`;
  if (uvIndex >= 7) return `UV peaks near ${Math.round(uvIndex)} midday — shade up and lean on the low-light hours.`;
  if (pressure === "falling") return "Pressure's sliding — fish it hard before the front moves in.";
  if (pressure === "rising") return "Pressure's climbing — expect a slower, pickier bite.";
  if (uvIndex >= 6) return "Bright midday sun — the bite favors dawn and dusk.";
  return "Light wind, steady pressure — no excuses today.";
}

// The tactical edge for the day — where to point your effort. Kept from
// contradicting the alert's wind advice; leans on pressure and the overall grade.
function gradeCallout(grade: string, pressure: PressureTrend["label"]) {
  if (pressure === "falling") return "Falling pressure trips the feed switch — fish the window before the front.";
  if (grade === "A+") return "The pieces line up today — start on your confidence water and trust it.";
  if (grade === "F+") return "A grind — slow down and pick apart the structure you know cold.";
  if (pressure === "rising") return "Bluebird high — go slower, go deeper, work the shade lines.";
  return "Read the water, fish the edges, and let the low-light hours do the work.";
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
