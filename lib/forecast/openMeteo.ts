import type { ForecastHour, Spot } from "../types";

type OpenMeteoHourly = {
  time: string[];
  temperature_2m: number[];
  uv_index?: Array<number | null>;
  wind_speed_10m: number[];
  wind_gusts_10m: number[];
  wind_direction_10m: number[];
  surface_pressure: number[];
  precipitation: number[];
  cloud_cover: number[];
};

type OpenMeteoResponse = {
  hourly?: OpenMeteoHourly;
  daily?: {
    time: string[];
    sunrise?: string[];
    sunset?: string[];
    uv_index_max?: Array<number | null>;
    temperature_2m_max?: number[];
    temperature_2m_min?: number[];
  };
};

export async function fetchOpenMeteoForecast(spot: Spot): Promise<ForecastHour[]> {
  const params = new URLSearchParams({
    latitude: String(spot.lat),
    longitude: String(spot.lng),
    hourly:
      "temperature_2m,wind_speed_10m,wind_gusts_10m,wind_direction_10m,surface_pressure,precipitation,cloud_cover",
    daily: "sunrise,sunset,temperature_2m_max,temperature_2m_min",
    models: "gem_seamless",
    wind_speed_unit: "kmh",
    timezone: "America/Toronto",
    forecast_days: "3",
    past_days: "2"
  });

  const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`, {
    next: { revalidate: 21600 }
  });

  if (!response.ok) {
    throw new Error(`Open-Meteo request failed for ${spot.id}: ${response.status}`);
  }

  const json = (await response.json()) as OpenMeteoResponse;
  const hourly = json.hourly;
  if (!hourly?.time?.length) {
    throw new Error(`Open-Meteo returned no hourly data for ${spot.id}`);
  }

  const uv = await fetchUvForecast(spot).catch(
    () => new Map<string, { hourly?: number; max?: number }>()
  );
  const dailyByDate = dailyValuesByDate(json);

  return hourly.time.map((time, index) => {
    const normalizedTime = normalizeOpenMeteoTime(time);
    const dateKey = normalizedTime.slice(0, 10);
    const daily = dailyByDate.get(dateKey);
    const uvValues = uv.get(normalizedTime.slice(0, 13)) ?? uv.get(dateKey);

    return {
      time: normalizedTime,
      tempC: hourly.temperature_2m[index],
      tempMaxC: daily?.tempMaxC,
      tempMinC: daily?.tempMinC,
      uvIndex: uvValues?.hourly,
      uvIndexMax: uvValues?.max,
      windKmh: hourly.wind_speed_10m[index] ?? 0,
      gustKmh: hourly.wind_gusts_10m[index] ?? hourly.wind_speed_10m[index] ?? 0,
      windDirDeg: hourly.wind_direction_10m[index] ?? 0,
      pressureHpa: hourly.surface_pressure[index] ?? 1013,
      precipMm: hourly.precipitation[index] ?? 0,
      cloudPct: hourly.cloud_cover[index] ?? 0,
      sunrise: daily?.sunrise,
      sunset: daily?.sunset
    };
  });
}

async function fetchUvForecast(spot: Spot) {
  const params = new URLSearchParams({
    latitude: String(spot.lat),
    longitude: String(spot.lng),
    hourly: "uv_index",
    daily: "uv_index_max",
    timezone: "America/Toronto",
    forecast_days: "3"
  });

  const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`, {
    next: { revalidate: 21600 }
  });
  if (!response.ok) {
    return new Map<string, { hourly?: number; max?: number }>();
  }

  const json = (await response.json()) as OpenMeteoResponse;
  const values = new Map<string, { hourly?: number; max?: number }>();

  json.daily?.time?.forEach((date, index) => {
    const max = json.daily?.uv_index_max?.[index] ?? undefined;
    values.set(date, { max });
  });

  json.hourly?.time?.forEach((time, index) => {
    const normalizedTime = normalizeOpenMeteoTime(time);
    const dateKey = normalizedTime.slice(0, 10);
    const dailyMax = values.get(dateKey)?.max;
    values.set(normalizedTime.slice(0, 13), {
      hourly: json.hourly?.uv_index?.[index] ?? undefined,
      max: dailyMax
    });
  });

  return values;
}

function dailyValuesByDate(json: OpenMeteoResponse) {
  const values = new Map<
    string,
    {
      sunrise?: string;
      sunset?: string;
      tempMaxC?: number;
      tempMinC?: number;
    }
  >();

  json.daily?.time?.forEach((date, index) => {
    values.set(date, {
      sunrise: json.daily?.sunrise?.[index]
        ? normalizeOpenMeteoTime(json.daily.sunrise[index])
        : undefined,
      sunset: json.daily?.sunset?.[index]
        ? normalizeOpenMeteoTime(json.daily.sunset[index])
        : undefined,
      tempMaxC: json.daily?.temperature_2m_max?.[index],
      tempMinC: json.daily?.temperature_2m_min?.[index]
    });
  });

  return values;
}

function normalizeOpenMeteoTime(time: string) {
  return time.includes("Z") || /[+-]\d\d:\d\d$/.test(time)
    ? time
    : `${time}:00-04:00`;
}
