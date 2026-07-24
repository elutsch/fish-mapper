import { describe, expect, it } from "vitest";
import { lunarActivityModifier, lunarCycleFraction, lunarPhaseName } from "@/lib/lunar";

describe("lunar scoring", () => {
  it("peaks near new and full moons and bottoms near quarter moons", () => {
    expect(lunarActivityModifier("2000-01-06")).toBeGreaterThan(5.8);
    expect(lunarActivityModifier("2000-01-21")).toBeGreaterThan(5.8);
    expect(lunarActivityModifier("2000-01-14")).toBeLessThan(-5.8);
    expect(lunarActivityModifier("2000-01-28")).toBeLessThan(-5.8);
  });

  it("stays continuous and bounded to six activity points", () => {
    const values = Array.from({ length: 30 }, (_, day) =>
      lunarActivityModifier(`2000-03-${String(day + 1).padStart(2, "0")}`)
    );

    expect(Math.max(...values)).toBeLessThanOrEqual(6);
    expect(Math.min(...values)).toBeGreaterThanOrEqual(-6);
    values.slice(1).forEach((value, index) => {
      expect(Math.abs(value - values[index])).toBeLessThan(2.6);
    });
  });

  it("uses one cycle for both phase labels and scoring", () => {
    expect(lunarCycleFraction("2000-01-06")).toBeGreaterThan(0.97);
    expect(lunarPhaseName("2000-01-06")).toBe("New");
    expect(lunarPhaseName("2000-01-21")).toBe("Full");
  });
});
