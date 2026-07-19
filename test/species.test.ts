import { describe, expect, it } from "vitest";
import { formatSpeciesName, normalizeSpeciesName, speciesPathSegment } from "@/lib/species";

describe("species display names", () => {
  it("expands pike to Northern Pike", () => {
    expect(normalizeSpeciesName("pike")).toBe("northern pike");
    expect(formatSpeciesName("pike")).toBe("Northern Pike");
    expect(speciesPathSegment("pike")).toBe("northern-pike");
  });

  it("capitalizes species lists consistently", () => {
    expect(formatSpeciesName("smallmouth bass")).toBe("Smallmouth Bass");
    expect(formatSpeciesName("yellow perch")).toBe("Yellow Perch");
  });
});
