import type { ForecastHour, PressureTrend } from "./types";

// Fish Activity: rank air temp, UV (inverse — fish feed in low light), and the
// day's pressure trend 1–4, average, and round to a level. Precip is shown on
// the card but deliberately not part of this score.
export type ActivityLevel = "low" | "fair" | "high" | "maximum";

const ACTIVITY_RANK: Record<ActivityLevel, number> = { low: 1, fair: 2, high: 3, maximum: 4 };

function tempRank(tempC?: number) {
  if (tempC === undefined) return null;
  if (tempC >= 22) return 4;
  if (tempC >= 15) return 3;
  if (tempC >= 8) return 2;
  return 1;
}

function uvRank(uv?: number) {
  if (uv === undefined) return null;
  if (uv <= 1) return 4;
  if (uv <= 4) return 3;
  if (uv <= 7) return 2;
  return 1;
}

function pressureRank(trend: PressureTrend["label"]) {
  if (trend === "falling") return 4;
  if (trend === "steady") return 2;
  return 1; // rising
}

export function fishActivity(hour: ForecastHour, pressure: PressureTrend["label"]) {
  const ranks = [tempRank(hour.tempC), uvRank(hour.uvIndex), pressureRank(pressure)].filter(
    (rank): rank is number => rank !== null
  );
  const average = ranks.reduce((sum, rank) => sum + rank, 0) / ranks.length;
  const level: ActivityLevel =
    average < 1.5 ? "low" : average < 2.5 ? "fair" : average < 3.5 ? "high" : "maximum";
  const label = { low: "Low", fair: "Fair", high: "High", maximum: "Maximum" }[level];
  return { level, label };
}

// Launch Read: wind & gust banded against the craft tolerances, first bumped by
// the lake's fetch penalty so bigger, more exposed water reads rougher for the
// same wind. Severity is the worse of the two bands (gusts can only downgrade).
// 0 All Clear · 1 Fishable · 2 Caution · 3 Do Not Launch.
export type LaunchLevel = "all-clear" | "fishable" | "caution" | "do-not-launch";

const LAUNCH_LEVELS: { level: LaunchLevel; label: string }[] = [
  { level: "all-clear", label: "All Clear" },
  { level: "fishable", label: "Fishable" },
  { level: "caution", label: "Caution" },
  { level: "do-not-launch", label: "Do Not Launch" }
];

function windBand(wind: number) {
  if (wind > 30) return 3;
  if (wind > 18) return 2;
  if (wind > 12) return 1;
  return 0;
}

function gustBand(gust: number) {
  if (gust > 48) return 3;
  if (gust > 30) return 2;
  if (gust > 22) return 1;
  return 0;
}

export function launchRead(hour: ForecastHour, fetchPenalty = 0) {
  const wind = hour.windKmh + fetchPenalty;
  const gust = hour.gustKmh + fetchPenalty * 1.4;
  const severity = Math.max(windBand(wind), gustBand(gust));
  return { severity, ...LAUNCH_LEVELS[severity] };
}

// Day grade: per daylight hour, average the Fish Activity rank (1–4) with the
// Launch rank (1–4, inverted so All Clear = 4), average those over the day, and
// map the 1–4 result to a tier. Fetch feeds in through the Launch rank, so the
// combined score inherently accounts for lake size/exposure.
export type GradeTier = "prime" | "marginal" | "tough";

export function dayGrade(hours: ForecastHour[], pressure: PressureTrend["label"], fetchPenalty: number) {
  const hourly = hours.map((hour) => {
    const activityRank = ACTIVITY_RANK[fishActivity(hour, pressure).level];
    const launchRank = 4 - launchRead(hour, fetchPenalty).severity;
    return (activityRank + launchRank) / 2;
  });
  const rating = hourly.length ? hourly.reduce((sum, value) => sum + value, 0) / hourly.length : 1;
  const tier: GradeTier = rating < 2 ? "tough" : rating < 3 ? "marginal" : "prime";
  const value = tier === "prime" ? "A+" : tier === "marginal" ? "C+" : "F+";
  const detail = tier === "prime" ? "Prime today" : tier === "marginal" ? "Marginal today" : "Tough today";
  return { rating, tier, value, detail, status: tier };
}
