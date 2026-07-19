import { describe, expect, it } from "vitest";
import { fallbackVerdict } from "@/lib/verdict/rules";
import type { ForecastHour, Spot } from "@/lib/types";

const longFetchSpot: Spot = {
  id: "test-long-fetch",
  name: "Test Long Fetch Lake",
  waterbody: "Test Long Fetch Lake",
  lat: 43.5,
  lng: -80.5,
  launch: { trailer: true, carryIn: true },
  shorelineFetch: [45, 225],
  maxFetchKm: 7,
  species: [],
  fmz: "16"
};

const conestogoLikeSpot: Spot = {
  id: "conestogo-like",
  name: "Conestogo Like Lake",
  waterbody: "Conestogo Like Lake",
  lat: 43.7,
  lng: -80.77,
  launch: { trailer: true, carryIn: true },
  shorelineFetch: [35, 215],
  maxFetchKm: 5.7,
  species: [],
  fmz: "16"
};

function hours(windKmh: number, gustKmh: number, windDirDeg = 225): ForecastHour[] {
  return Array.from({ length: 12 }, (_, index) => ({
    time: `2026-07-18T${String(index + 6).padStart(2, "0")}:00:00-04:00`,
    windKmh,
    gustKmh,
    windDirDeg,
    pressureHpa: 1012,
    precipMm: 0,
    cloudPct: 40
  }));
}

describe("fallback verdict gates", () => {
  it("diverges by craft on a moderate long-fetch wind day", () => {
    const verdict = fallbackVerdict(
      longFetchSpot,
      hours(20, 34),
      { label: "steady", rateHpaPer24h: 0 },
      "2026-07-18",
      "test"
    );

    expect(verdict.byCraft.powerboat.rating).toBe("go");
    expect(verdict.byCraft.kayak.rating).toBe("marginal");
    expect(verdict.byCraft.canoe.rating).toBe("no-go");
  });

  it("keeps all craft launch-blocked when wind is extreme", () => {
    const verdict = fallbackVerdict(
      longFetchSpot,
      hours(38, 62, 225),
      { label: "steady", rateHpaPer24h: 0 },
      "2026-07-18",
      "test"
    );

    expect(verdict.byCraft.powerboat.rating).toBe("no-go");
    expect(verdict.byCraft.kayak.rating).toBe("no-go");
    expect(verdict.byCraft.canoe.rating).toBe("no-go");
  });

  it("keeps a Conestogo-like high-gust day marginal for powerboats but closed for paddlecraft", () => {
    const verdict = fallbackVerdict(
      conestogoLikeSpot,
      hours(19, 56, 225),
      { label: "steady", rateHpaPer24h: 0 },
      "2026-07-18"
    );

    expect(verdict.byCraft.powerboat.rating).toBe("marginal");
    expect(verdict.byCraft.kayak.rating).toBe("no-go");
    expect(verdict.byCraft.canoe.rating).toBe("no-go");
    expect(verdict.summaryMd).toContain("protected-water window");
  });

  it("names a different lee for a strong southwest wind than an east wind", () => {
    const southwest = fallbackVerdict(
      longFetchSpot,
      hours(24, 36, 225),
      { label: "steady", rateHpaPer24h: 0 },
      "2026-07-18",
      "test"
    );
    const east = fallbackVerdict(
      longFetchSpot,
      hours(24, 36, 90),
      { label: "steady", rateHpaPer24h: 0 },
      "2026-07-18",
      "test"
    );

    expect(southwest.summaryMd).toContain("northeast");
    expect(east.summaryMd).toContain("west");
  });
});
