import type { GradeTier } from "./rating";

export type FishabilityStatus = GradeTier | "unknown";

export const FISHABILITY_LABELS: Record<FishabilityStatus, string> = {
  prime: "Prime today",
  solid: "Solid today",
  grind: "Grind today",
  tough: "Tough today",
  unknown: "Forecast pending"
};

export function fishabilityLabel(status: FishabilityStatus, timeframe: "today" | "day" = "today") {
  const label = FISHABILITY_LABELS[status];
  return timeframe === "day" ? label.replace(/ today$/i, " day") : label;
}
