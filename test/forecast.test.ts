import { afterEach, describe, expect, it, vi } from "vitest";
import { fetchOpenMeteoForecast } from "@/lib/forecast/openMeteo";
import type { Spot } from "@/lib/types";

const spot: Spot = {
  id: "test-lake",
  name: "Test Lake",
  waterbody: "Test Lake",
  lat: 43.5,
  lng: -80.5,
  launch: { trailer: true, carryIn: true },
  shorelineFetch: [0, 180],
  maxFetchKm: 3,
  species: []
};

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("Open-Meteo forecast mapping", () => {
  it("requests and maps mean sea-level pressure", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(
        new Response(
          JSON.stringify({
            hourly: {
              time: ["2026-07-22T12:00"],
              temperature_2m: [24],
              wind_speed_10m: [12],
              wind_gusts_10m: [20],
              wind_direction_10m: [225],
              pressure_msl: [1017.4],
              precipitation: [0],
              cloud_cover: [25]
            },
            daily: {
              time: ["2026-07-22"],
              sunrise: ["2026-07-22T05:54"],
              sunset: ["2026-07-22T20:52"],
              temperature_2m_max: [26],
              temperature_2m_min: [17]
            }
          }),
          { status: 200 }
        )
      )
      .mockResolvedValueOnce(
        new Response(
          JSON.stringify({
            hourly: { time: ["2026-07-22T12:00"], uv_index: [5] },
            daily: { time: ["2026-07-22"], uv_index_max: [7] }
          }),
          { status: 200 }
        )
      );
    vi.stubGlobal("fetch", fetchMock);

    const forecast = await fetchOpenMeteoForecast(spot, { fresh: true });
    const requestUrl = String(fetchMock.mock.calls[0][0]);

    expect(requestUrl).toContain("pressure_msl");
    expect(requestUrl).not.toContain("surface_pressure");
    expect(forecast[0].pressureHpa).toBe(1017.4);
  });
});
