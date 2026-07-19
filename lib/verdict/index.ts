import type { ForecastHour, PressureTrend, Spot } from "../types";
import { fallbackVerdict } from "./rules";

export async function generateVerdict(
  spot: Spot,
  hours: ForecastHour[],
  pressureTrend: PressureTrend,
  validFor: string
) {
  return fallbackVerdict(spot, hours, pressureTrend, validFor);
}
