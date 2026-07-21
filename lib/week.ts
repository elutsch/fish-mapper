import { computePressureTrend, hoursForDate } from "./forecast";
import type { ActivityLevel, GradeTier, LaunchLevel } from "./rating";
import { dayActivity, dayGrade, launchFromWind } from "./rating";
import type { ForecastHour, Spot } from "./types";
import { fetchPenaltyFor } from "./verdict/rules";

export type WeekDay = {
  date: string; // YYYY-MM-DD, Toronto local
  tier: GradeTier;
  grade: string; // A+ / C+ / F+
  launch: LaunchLevel;
  activity: ActivityLevel;
};

const mean = (values: number[]) => (values.length ? values.reduce((a, b) => a + b, 0) / values.length : 0);
const daylight = (hours: ForecastHour[]) =>
  hours.filter((hour) => {
    const localHour = Number(hour.time.slice(11, 13));
    return localHour >= 5 && localHour <= 21;
  });

// Grade each forecast day (today first) with the same day-grade the dashboard
// uses: average-wind launch + fish activity, weighted toward launch.
export function buildWeek(forecast: ForecastHour[], spot: Spot, startDate: string, days = 7): WeekDay[] {
  const fetchPenalty = fetchPenaltyFor(spot);
  const dates = [...new Set(forecast.map((hour) => hour.time.slice(0, 10)))]
    .filter((date) => date >= startDate)
    .sort()
    .slice(0, days);

  const week: WeekDay[] = [];
  for (const date of dates) {
    const dayHours = daylight(hoursForDate(forecast, date));
    if (dayHours.length < 4) continue; // skip a partial trailing day
    const pressure = computePressureTrend(forecast, date).label;
    const grade = dayGrade(dayHours, pressure, fetchPenalty);
    const launch = launchFromWind(
      mean(dayHours.map((hour) => hour.windKmh)),
      mean(dayHours.map((hour) => hour.gustKmh)),
      fetchPenalty
    ).level;
    week.push({ date, tier: grade.tier, grade: grade.value, launch, activity: dayActivity(dayHours, pressure) });
  }
  return week;
}
