import { describe, expect, it } from "vitest";
import { lunarActivityModifier } from "../lib/lunar";
import { dayGrade, fishabilityTier, fishActivity } from "../lib/rating";
import type { ForecastHour, PressureTrend } from "../lib/types";

const pressure = (label: PressureTrend["label"]) => label;

function hour(
  index: number,
  {
    tempC = 18,
    uvIndex = 3,
    windKmh = 8,
    gustKmh = 14
  }: Partial<Pick<ForecastHour, "tempC" | "uvIndex" | "windKmh" | "gustKmh">> = {},
  date = "2026-07-22"
): ForecastHour {
  return {
    time: `${date}T${String(index + 5).padStart(2, "0")}:00`,
    tempC,
    precipMm: 0,
    cloudPct: 20,
    windKmh,
    gustKmh,
    windDirDeg: 270,
    pressureHpa: 1015,
    uvIndex
  };
}

describe("fish activity", () => {
  it("uses a daily temperature baseline rather than rescoring each hour's temperature", () => {
    const cold = hour(0, { tempC: 8, uvIndex: 3 });
    const warm = hour(1, { tempC: 26, uvIndex: 3 });
    const day = [cold, warm];

    expect(fishActivity(cold, pressure("steady"), day).score).toBe(
      fishActivity(warm, pressure("steady"), day).score
    );
  });

  it("creates a stronger low-light window around the shared daily baseline", () => {
    const dawn = hour(0, { uvIndex: 0 });
    const midday = hour(7, { uvIndex: 9 });
    const day = [dawn, midday];

    expect(fishActivity(dawn, pressure("steady"), day).score).toBeGreaterThan(
      fishActivity(midday, pressure("steady"), day).score
    );
  });

  it("changes smoothly across former temperature and UV boundaries", () => {
    const justBelow = hour(0, { tempC: 14.9, uvIndex: 3.9 });
    const justAbove = hour(1, { tempC: 15.1, uvIndex: 4.1 });

    expect(
      Math.abs(
        fishActivity(justBelow, pressure("steady"), [justBelow]).score -
          fishActivity(justAbove, pressure("steady"), [justAbove]).score
      )
    ).toBeLessThan(2);
  });
});

describe("daily grade", () => {
  const hours = (
    conditions: Partial<Pick<ForecastHour, "tempC" | "uvIndex" | "windKmh" | "gustKmh">>
  ) => Array.from({ length: 12 }, (_, index) => hour(index, conditions));

  it("separates calm, moderate, and unsafe days", () => {
    expect(dayGrade(hours({ windKmh: 3, gustKmh: 6 }), pressure("falling"), 2).tier).toBe("prime");
    expect(dayGrade(hours({ windKmh: 14, gustKmh: 24 }), pressure("steady"), 5).tier).toBe("solid");
    expect(dayGrade(hours({ windKmh: 35, gustKmh: 60 }), pressure("falling"), 8).tier).toBe("tough");
  });

  it("lets high activity turn a general Caution day into Prime", () => {
    const grade = dayGrade(
      hours({ tempC: 24, uvIndex: 0, windKmh: 18.1, gustKmh: 20 }),
      pressure("falling"),
      0
    );

    expect(grade.rating).toBeGreaterThanOrEqual(80);
    expect(grade.tier).toBe("prime");
  });

  it("includes peak gusts without letting a single spike fully define the day", () => {
    const steady = hours({ windKmh: 8, gustKmh: 15 });
    const gusty = steady.map((item, index) => (index === 6 ? { ...item, gustKmh: 45 } : item));

    const steadyRating = dayGrade(steady, pressure("steady"), 2).rating;
    const gustyRating = dayGrade(gusty, pressure("steady"), 2).rating;

    expect(gustyRating).toBeLessThan(steadyRating);
    expect(steadyRating - gustyRating).toBeLessThan(10);
  });

  it("weights Fish Activity 60% and water conditions 40%", () => {
    const calm = hours({ windKmh: 0, gustKmh: 0, tempC: 10, uvIndex: 5 });
    const activityScore = fishActivity(calm[0], pressure("steady"), calm).score;

    expect(dayGrade(calm, pressure("steady"), 0).rating).toBeCloseTo(
      0.6 * activityScore + 0.4 * 100,
      5
    );
  });

  it("limits the lunar contribution to 3.6 Fishability points in either direction", () => {
    const newMoon = Array.from({ length: 12 }, (_, index) =>
      hour(index, { windKmh: 0, gustKmh: 0, tempC: 10, uvIndex: 5 }, "2000-01-06")
    );
    const quarterMoon = Array.from({ length: 12 }, (_, index) =>
      hour(index, { windKmh: 0, gustKmh: 0, tempC: 10, uvIndex: 5 }, "2000-01-14")
    );
    const ratingDifference =
      dayGrade(newMoon, pressure("steady"), 0).rating -
      dayGrade(quarterMoon, pressure("steady"), 0).rating;
    const expectedDifference =
      0.6 *
      (lunarActivityModifier("2000-01-06") - lunarActivityModifier("2000-01-14"));

    expect(ratingDifference).toBeCloseTo(expectedDifference, 5);
    expect(0.6 * Math.abs(lunarActivityModifier("2000-01-06"))).toBeLessThanOrEqual(3.6);
    expect(0.6 * Math.abs(lunarActivityModifier("2000-01-14"))).toBeLessThanOrEqual(3.6);
  });

  it("maps all four fixed ratings and hard-caps Do Not Launch to Tough", () => {
    expect(fishabilityTier(80, 0)).toBe("prime");
    expect(fishabilityTier(79.99, 2)).toBe("solid");
    expect(fishabilityTier(65, 0)).toBe("solid");
    expect(fishabilityTier(64.99, 0)).toBe("grind");
    expect(fishabilityTier(45, 0)).toBe("grind");
    expect(fishabilityTier(44.99, 0)).toBe("tough");
    expect(fishabilityTier(100, 3)).toBe("tough");
  });
});
