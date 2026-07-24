import type { ForecastHour, PressureTrend } from "./types";
import { lunarActivityModifier } from "./lunar";

// Fish Activity: daily temperature and pressure set a shared baseline, then
// each hour's light moves around it. This keeps temperature and UV from
// cancelling one another hour after hour and creates real low-light windows.
// Precip is shown on the card but deliberately not part of this score.
export type ActivityLevel = "low" | "fair" | "high" | "maximum";

const clampScore = (value: number) => Math.min(100, Math.max(0, value));
const mean = (values: number[]) =>
  values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;

function dailyTemperatureScore(hours: ForecastHour[]) {
  const temperatures = hours
    .map((hour) => hour.tempC)
    .filter((temperature): temperature is number => Number.isFinite(temperature));
  if (!temperatures.length) return 50;

  const average = mean(temperatures);
  if (average <= 8) return clampScore(35 + (average / 8) * 20);
  if (average <= 15) return 55 + ((average - 8) / 7) * 20;
  if (average <= 22) return 75 + ((average - 15) / 7) * 15;
  return 90;
}

function pressureScore(trend: PressureTrend["label"]) {
  if (trend === "falling") return 90;
  if (trend === "steady") return 60;
  return 35;
}

function lightModifier(uv?: number) {
  if (uv === undefined) return 0;
  const normalizedUv = Math.min(10, Math.max(0, uv));
  if (normalizedUv <= 1) return 15;
  if (normalizedUv <= 4) return 15 - ((normalizedUv - 1) / 3) * 9;
  if (normalizedUv <= 7) return 6 - ((normalizedUv - 4) / 3) * 11;
  return -5 - ((normalizedUv - 7) / 3) * 10;
}

function activityLevel(score: number): ActivityLevel {
  if (score < 40) return "low";
  if (score < 60) return "fair";
  if (score < 80) return "high";
  return "maximum";
}

export function fishActivity(
  hour: ForecastHour,
  pressure: PressureTrend["label"],
  dayHours: ForecastHour[] = [hour]
) {
  const date = hour.time.slice(0, 10);
  const baseline =
    0.6 * dailyTemperatureScore(dayHours) +
    0.4 * pressureScore(pressure) +
    lunarActivityModifier(date);
  const score = clampScore(baseline + lightModifier(hour.uvIndex));
  const level = activityLevel(score);
  const label = { low: "Low", fair: "Fair", high: "High", maximum: "Maximum" }[level];
  return { level, label, score };
}

// Launch Read: wind & gust banded against craft-agnostic thresholds,
// first bumped by the lake's fetch penalty so bigger, more exposed water reads
// rougher for the same wind. Severity is the worse of the two bands (gusts can
// only downgrade).
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

export function launchFromWind(windKmh: number, gustKmh: number, fetchPenalty = 0) {
  const wind = windKmh + fetchPenalty;
  const gust = gustKmh + fetchPenalty * 1.4;
  const severity = Math.max(windBand(wind), gustBand(gust));
  return { severity, ...LAUNCH_LEVELS[severity] };
}

export function launchRead(hour: ForecastHour, fetchPenalty = 0) {
  return launchFromWind(hour.windKmh, hour.gustKmh, fetchPenalty);
}

function dayWindSummary(hours: ForecastHour[]) {
  const averageWind = mean(hours.map((hour) => hour.windKmh));
  const averageGust = mean(hours.map((hour) => hour.gustKmh));
  const peakGust = Math.max(...hours.map((hour) => hour.gustKmh), 0);
  return {
    averageWind,
    effectiveGust: 0.75 * averageGust + 0.25 * peakGust
  };
}

export function dayLaunchRead(hours: ForecastHour[], fetchPenalty = 0) {
  if (!hours.length) return { severity: 3, ...LAUNCH_LEVELS[3] };
  const { averageWind, effectiveGust } = dayWindSummary(hours);
  return launchFromWind(averageWind, effectiveGust, fetchPenalty);
}

function bestWindowScore(scores: number[], windowSize = 3) {
  if (!scores.length) return 0;
  if (scores.length <= windowSize) return mean(scores);

  let best = 0;
  for (let index = 0; index <= scores.length - windowSize; index += 1) {
    best = Math.max(best, mean(scores.slice(index, index + windowSize)));
  }
  return best;
}

function dayActivityScore(hours: ForecastHour[], pressure: PressureTrend["label"]) {
  return bestWindowScore(hours.map((hour) => fishActivity(hour, pressure, hours).score));
}

// The day's Fish Activity represents its best sustained three-hour window.
export function dayActivity(hours: ForecastHour[], pressure: PressureTrend["label"]): ActivityLevel {
  return activityLevel(dayActivityScore(hours, pressure));
}

function dayLaunchScore(hours: ForecastHour[], fetchPenalty: number) {
  if (!hours.length) return { score: 0, severity: 3 };

  const { averageWind, effectiveGust } = dayWindSummary(hours);
  const adjustedWind = averageWind + fetchPenalty;
  const adjustedGust = effectiveGust + fetchPenalty * 1.4;

  // Normalize continuously against the existing craft-agnostic Caution /
  // Do Not Launch boundaries (30 km/h sustained, 48 km/h gusts).
  const risk = Math.max(adjustedWind / 30, adjustedGust / 48);
  const score = clampScore(100 - 75 * risk);
  const severity = dayLaunchRead(hours, fetchPenalty).severity;
  return { score, severity };
}

// Fishability: best sustained Fish Activity (60%) plus continuous whole-day
// water conditions (40%). A general Do Not Launch read always forces Tough.
export type GradeTier = "prime" | "solid" | "grind" | "tough";

export function fishabilityTier(rating: number, launchSeverity: number): GradeTier {
  if (launchSeverity >= 3) return "tough";
  if (rating >= 80) return "prime";
  if (rating >= 65) return "solid";
  if (rating >= 45) return "grind";
  return "tough";
}

export function dayGrade(hours: ForecastHour[], pressure: PressureTrend["label"], fetchPenalty: number) {
  const launch = dayLaunchScore(hours, fetchPenalty);
  const activity = dayActivityScore(hours, pressure);
  const rating = 0.6 * activity + 0.4 * launch.score;
  const tier = fishabilityTier(rating, launch.severity);
  const value = { prime: "A+", solid: "B+", grind: "C+", tough: "F+" }[tier];
  const detail = {
    prime: "Prime today",
    solid: "Solid today",
    grind: "Grind today",
    tough: "Tough today"
  }[tier];
  return { rating, tier, value, detail, status: tier };
}
