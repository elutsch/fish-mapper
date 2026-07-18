import type { ForecastHour, Spot } from "../types";

type AqhiFeature = {
  geometry?: { coordinates?: [number, number] };
  properties?: {
    forecast_datetime?: string;
    aqhi?: number;
    location_name_en?: string;
  };
};

type AqhiResponse = {
  features?: AqhiFeature[];
};

export async function addAqhiForecast(
  spot: Spot,
  hours: ForecastHour[]
): Promise<ForecastHour[]> {
  const delta = 0.55;
  const bbox = [
    spot.lng - delta,
    spot.lat - delta,
    spot.lng + delta,
    spot.lat + delta
  ].join(",");
  const params = new URLSearchParams({
    f: "json",
    limit: "500",
    bbox
  });

  try {
    const response = await fetch(
      `https://api.weather.gc.ca/collections/aqhi-forecasts-realtime/items?${params}`,
      { next: { revalidate: 21600 } }
    );
    if (!response.ok) {
      return hours;
    }

    const json = (await response.json()) as AqhiResponse;
    const nearestByHour = nearestAqhiByHour(spot, json.features ?? []);
    return hours.map((hour) => {
      const key = hour.time.slice(0, 13);
      const aqhi = nearestByHour.get(key);
      return aqhi === undefined ? hour : { ...hour, aqhi };
    });
  } catch {
    return hours;
  }
}

function nearestAqhiByHour(spot: Spot, features: AqhiFeature[]) {
  const byHour = new Map<string, { aqhi: number; distance: number }>();

  for (const feature of features) {
    const aqhi = feature.properties?.aqhi;
    const time = feature.properties?.forecast_datetime;
    const coords = feature.geometry?.coordinates;
    if (typeof aqhi !== "number" || !time || !coords) {
      continue;
    }

    const key = toTorontoHourKey(time);
    const distance = haversineKm(spot.lat, spot.lng, coords[1], coords[0]);
    const existing = byHour.get(key);
    if (!existing || distance < existing.distance) {
      byHour.set(key, { aqhi, distance });
    }
  }

  return new Map([...byHour].map(([key, value]) => [key, value.aqhi]));
}

function toTorontoHourKey(iso: string) {
  const date = new Date(iso);
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Toronto",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    hour12: false
  }).formatToParts(date);
  const get = (type: string) => parts.find((part) => part.type === type)?.value ?? "00";
  return `${get("year")}-${get("month")}-${get("day")}T${get("hour")}`;
}

function haversineKm(lat1: number, lon1: number, lat2: number, lon2: number) {
  const earthKm = 6371;
  const toRad = (degrees: number) => (degrees * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return earthKm * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
