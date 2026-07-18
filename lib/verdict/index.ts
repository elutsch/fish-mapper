import type { ForecastHour, PressureTrend, Spot } from "../types";
import { generateAnthropicVerdict } from "./anthropic";
import { fallbackVerdict } from "./rules";

export async function generateVerdict(
  spot: Spot,
  hours: ForecastHour[],
  pressureTrend: PressureTrend,
  validFor: string
) {
  try {
    const agentVerdict = await generateAnthropicVerdict(spot, hours, pressureTrend, validFor);
    if (agentVerdict) {
      return agentVerdict;
    }
  } catch (error) {
    return fallbackVerdict(
      spot,
      hours,
      pressureTrend,
      validFor,
      `Agent verdict failed: ${error instanceof Error ? error.message : "unknown error"}.`
    );
  }

  return fallbackVerdict(spot, hours, pressureTrend, validFor);
}
