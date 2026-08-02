import { describe, expect, it } from "vitest";
import { fallbackVerdict, fetchPenaltyFor } from "@/lib/verdict/rules";
import type { ForecastHour, Spot } from "@/lib/types";

const longFetchSpot: Spot = {
  id: "test-long-fetch",
  name: "Test Long Fetch Lake",
  location: "Testville",
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
  location: "Testville",
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

describe("fetch penalty", () => {
  function penalty(maxFetchKm: number) {
    return fetchPenaltyFor({ ...longFetchSpot, maxFetchKm });
  }

  it("grows continuously across the former tier boundaries", () => {
    expect(penalty(1.5) - penalty(1.4)).toBeLessThan(0.2);
    expect(penalty(3.1) - penalty(2.9)).toBeLessThan(0.2);
    expect(penalty(6.2) - penalty(5.7)).toBeLessThan(0.4);
  });

  it("uses the calibrated square-root curve", () => {
    expect(penalty(2.6)).toBeCloseTo(4.68, 2);
    expect(penalty(5.7)).toBeCloseTo(6.92, 2);
    expect(penalty(7.9) / penalty(5.7)).toBeCloseTo(Math.sqrt(7.9 / 5.7), 5);
  });
});

describe("paddlecraft thresholds", () => {
  const shelteredSpot = { ...longFetchSpot, maxFetchKm: 0 };

  it("uses the relaxed kayak boundaries", () => {
    expect(
      fallbackVerdict(
        shelteredSpot,
        hours(20, 34),
        { label: "steady", rateHpaPer24h: 0 },
        "2026-07-18"
      ).byCraft.kayak.rating
    ).toBe("go");
    expect(
      fallbackVerdict(
        shelteredSpot,
        hours(32, 52),
        { label: "steady", rateHpaPer24h: 0 },
        "2026-07-18"
      ).byCraft.kayak.rating
    ).toBe("marginal");
    expect(
      fallbackVerdict(
        shelteredSpot,
        hours(32.1, 52),
        { label: "steady", rateHpaPer24h: 0 },
        "2026-07-18"
      ).byCraft.kayak.rating
    ).toBe("no-go");
  });

  it("uses the relaxed canoe boundaries", () => {
    expect(
      fallbackVerdict(
        shelteredSpot,
        hours(14, 25),
        { label: "steady", rateHpaPer24h: 0 },
        "2026-07-18"
      ).byCraft.canoe.rating
    ).toBe("go");
    expect(
      fallbackVerdict(
        shelteredSpot,
        hours(20, 34),
        { label: "steady", rateHpaPer24h: 0 },
        "2026-07-18"
      ).byCraft.canoe.rating
    ).toBe("marginal");
    expect(
      fallbackVerdict(
        shelteredSpot,
        hours(20.1, 34),
        { label: "steady", rateHpaPer24h: 0 },
        "2026-07-18"
      ).byCraft.canoe.rating
    ).toBe("no-go");
  });

  it("still applies fetch before evaluating the new boundaries", () => {
    const oneKmFetch = { ...longFetchSpot, maxFetchKm: 1 };
    expect(
      fallbackVerdict(
        oneKmFetch,
        hours(17, 29),
        { label: "steady", rateHpaPer24h: 0 },
        "2026-07-18"
      ).byCraft.kayak.rating
    ).toBe("go");
    expect(
      fallbackVerdict(
        oneKmFetch,
        hours(18, 30),
        { label: "steady", rateHpaPer24h: 0 },
        "2026-07-18"
      ).byCraft.kayak.rating
    ).toBe("marginal");
  });
});
