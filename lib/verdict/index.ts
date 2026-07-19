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
    console.warn("Agent verdict failed; using deterministic fallback.", error);
    return fallbackVerdict(spot, hours, pressureTrend, validFor);
  }

  return fallbackVerdict(spot, hours, pressureTrend, validFor);
}
