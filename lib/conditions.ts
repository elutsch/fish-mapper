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
  const grade = fishingGrade(verdict, peakWind, peakGust, pressureTrend.label);

  return {
    temp: {
      value: typeof tempNow === "number" ? `${Math.round(tempNow)}°` : "n/a",
      detail:
        typeof tempHigh === "number" && typeof tempLow === "number"
          ? `H ${Math.round(tempHigh)}° · L ${Math.round(tempLow)}°`
          : "Current surface forecast"
    },
    uv: {
      value: Number.isFinite(uvIndex) ? uvIndex.toFixed(1) : "n/a",
      detail: "Scale 0-11"
    },
    wind: {
      value: `${Math.round(peakWind)} km/h`,
      detail: `${windDirection(representative?.windDirDeg ?? 0)} · gust ${Math.round(peakGust)}`
    },
    pressure: {
      value: representative ? `${representative.pressureHpa.toFixed(1)}` : "n/a",
      detail: `${pressureTrend.label} · ${pressureTrend.rateHpaPer24h} hPa/24h`
    },
    sun: {
      value: sunrise && sunset ? `${formatClock(sunrise)}/${formatClock(sunset)}` : "n/a",
      detail: sunrise && sunset ? `${daylightDuration(sunrise, sunset)} daylight` : "Sun times unavailable"
    },
    moon: {
      value: moonPhase(verdict.validFor),
      detail: "Lunar phase"
    },
    grade
  };
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

function fishingGrade(
  verdict: Verdict,
  peakWind: number,
  peakGust: number,
  pressure: PressureTrend["label"]
) {
  const ratingScores: Record<Rating, number> = { go: 4, marginal: 2, "no-go": 0 };
  const average =
    (ratingScores[verdict.byCraft.powerboat.rating] +
      ratingScores[verdict.byCraft.kayak.rating] +
      ratingScores[verdict.byCraft.canoe.rating]) /
    3;
  const windPenalty = peakWind >= 25 || peakGust >= 42 ? 1 : peakWind >= 18 ? 0.5 : 0;
  const pressureBonus = pressure === "falling" ? 0.35 : pressure === "rising" ? -0.25 : 0;
  const score = Math.max(0, Math.min(4, average - windPenalty + pressureBonus));
  const letter =
    score >= 3.6
      ? "A"
      : score >= 3.1
        ? "B+"
        : score >= 2.5
          ? "B"
          : score >= 1.8
            ? "C+"
            : score >= 1.1
              ? "C"
              : "D";

  return {
    value: letter,
    detail:
      letter === "A" || letter === "B+"
        ? "Strong fishing window"
        : letter === "B" || letter === "C+"
          ? "Selective fishing window"
          : "Tough fishing window",
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
