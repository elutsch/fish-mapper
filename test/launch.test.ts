import { describe, expect, it } from "vitest";
import { formatAccessFee, formatLaunchType } from "@/lib/launch";

describe("launch labels", () => {
  it("describes trailer and carry-in access", () => {
    expect(formatLaunchType({ trailer: true, carryIn: true })).toBe("Trailer + carry-in launch");
    expect(formatLaunchType({ trailer: false, carryIn: true })).toBe("Carry-in launch");
  });

  it("includes verified electric-only restrictions", () => {
    expect(formatLaunchType({ trailer: true, carryIn: true, electricOnly: true })).toBe(
      "Trailer + carry-in launch · Electric only"
    );
  });

  it("does not guess when access fees are unverified", () => {
    expect(formatAccessFee({ trailer: true, carryIn: true, accessFee: "paid" })).toBe("Paid access");
    expect(formatAccessFee({ trailer: true, carryIn: true, accessFee: "varies" })).toBe(
      "Access fees vary by craft"
    );
    expect(formatAccessFee({ trailer: false, carryIn: true })).toBe("Fee not confirmed");
  });
});
