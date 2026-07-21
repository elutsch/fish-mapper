import type { ForecastHour, PressureTrend, Spot } from "../types";
import { fetchOpenMeteoForecast } from "./openMeteo";

export async function fetchForecastSnapshot(spot: Spot, opts: { fresh?: boolean } = {}) {
  return fetchOpenMeteoForecast(spot, opts);
}

export function hoursForDate(hours: ForecastHour[], validFor: string) {
  return hours.filter((hour) => hour.time.slice(0, 10) === validFor);
}

export function computePressureTrend(hours: ForecastHour[], validFor: string): PressureTrend {
  const targetStart = new Date(`${validFor}T00:00:00-04:00`).getTime();
  const priorStart = targetStart - 48 * 60 * 60 * 1000;
  const prior = hours
    .filter((hour) => {
      const time = new Date(hour.time).getTime();
      return time >= priorStart && time < targetStart;
    })
    .filter((hour) => Number.isFinite(hour.pressureHpa));

  if (prior.length < 2) {
    return { label: "steady", rateHpaPer24h: 0 };
  }

  const first = prior[0].pressureHpa;
  const last = prior[prior.length - 1].pressureHpa;
  const spanHours =
    (new Date(prior[prior.length - 1].time).getTime() - new Date(prior[0].time).getTime()) /
    36e5;
  const rateHpaPer24h = spanHours > 0 ? ((last - first) / spanHours) * 24 : 0;
  const label =
    rateHpaPer24h > 2 ? "rising" : rateHpaPer24h < -2 ? "falling" : "steady";

  return { label, rateHpaPer24h: Number(rateHpaPer24h.toFixed(1)) };
}

export function defaultValidFor(now = new Date()) {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Toronto",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });
  return formatter.format(now);
}
