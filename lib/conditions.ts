import type { ForecastHour, PressureTrend, Rating, Verdict } from "./types";

type DashboardInput = {
  hours: ForecastHour[];
  verdict: Verdict;
  pressureTrend: PressureTrend;
};

export function buildConditionsDashboard({ hours, verdict, pressureTrend }: DashboardInput) {
  const daylight = hours.filter((hour) => {
    const localHour = Number(hour.time.slice(11, 13));
    return localHour >= 5 && localHour <= 21;
  });
  const representative = nearestHour(daylight, 12) ?? daylight[0] ?? hours[0];
  const peakWind = Math.max(...daylight.map((hour) => hour.windKmh), 0);
  const peakGust = Math.max(...daylight.map((hour) => hour.gustKmh), 0);
  const uvIndex =
    firstNumber(daylight.map((hour) => hour.uvIndexMax)) ??
    Math.max(...daylight.map((hour) => hour.uvIndex ?? 0), 0);
  const tempNow = representative?.tempC;
  const tempHigh = firstNumber(daylight.map((hour) => hour.tempMaxC));
  const tempLow = firstNumber(daylight.map((hour) => hour.tempMinC));
  const sunrise = representative?.sunrise;
  const sunset = representative?.sunset;
  const grade = fishingGrade(verdict);
  const alert = conditionsAlert(peakWind, peakGust, uvIndex, pressureTrend.label);
  const callout = gradeCallout(grade.value, pressureTrend.label);

  return {
    alert,
    callout,
    temp: {
      value: typeof tempNow === "number" ? `${Math.round(tempNow)}°` : "n/a",
      detail:
        typeof tempHigh === "number" && typeof tempLow === "number"
          ? `H ${Math.round(tempHigh)}° · L ${Math.round(tempLow)}°`
          : "Forecast air temperature"
    },
    uv: {
      value: Number.isFinite(uvIndex) ? `${Math.round(uvIndex)}` : "n/a",
      detail: "Scale 0-11"
    },
    wind: {
      value: `${Math.round(peakWind)}\nkm/h`,
      detail: `${windDirection(representative?.windDirDeg ?? 0)} · gust ${Math.round(peakGust)} km/h`
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
    grade
  };
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

// Three-tier grade tied directly to the day's Prime/Marginal/Tough call:
// any craft with a clear go is Prime (A+), otherwise any craft with a limited
// window is Marginal (C+), otherwise the day is Tough (F+). This mirrors the
// map's statusFromRatings so the grade and the call never disagree.
function fishingGrade(verdict: Verdict) {
  const ratings: Rating[] = [
    verdict.byCraft.powerboat.rating,
    verdict.byCraft.kayak.rating,
    verdict.byCraft.canoe.rating
  ];
  const { value, detail, status } = ratings.includes("go")
    ? { value: "A+", detail: "Prime today", status: "prime" as const }
    : ratings.includes("marginal")
      ? { value: "C+", detail: "Marginal today", status: "marginal" as const }
      : { value: "F+", detail: "Tough today", status: "tough" as const };

  return {
    value,
    detail,
    status,
    note: verdict.summaryMd
  };
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

function windDirection(degrees: number) {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  return directions[Math.round((((degrees % 360) + 360) % 360) / 45) % 8];
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
