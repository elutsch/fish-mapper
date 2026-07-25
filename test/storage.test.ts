import { describe, expect, it } from "vitest";
import { isCurrentSnapshot, SNAPSHOT_VERSION } from "@/lib/storage";

describe("snapshot versioning", () => {
  it("rejects legacy snapshots without the current version", () => {
    expect(isCurrentSnapshot({ forecast: [], pressureTrend: {}, verdict: {}, week: [] })).toBe(false);
    expect(
      isCurrentSnapshot({
        version: SNAPSHOT_VERSION - 1,
        forecast: [],
        pressureTrend: {},
        verdict: {},
        week: []
      })
    ).toBe(false);
  });

  it("accepts snapshots tagged with the current version", () => {
    expect(
      isCurrentSnapshot({
        version: SNAPSHOT_VERSION,
        forecast: [],
        pressureTrend: {},
        verdict: {},
        week: []
      })
    ).toBe(true);
  });
});
