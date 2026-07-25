const KNOWN_NEW_MOON = new Date("2000-01-06T18:14:00Z").getTime();
const LUNAR_CYCLE_MS = 29.530588853 * 24 * 60 * 60 * 1000;

export type LunarPhaseName =
  | "New"
  | "Waxing crescent"
  | "First quarter"
  | "Waxing gibbous"
  | "Full"
  | "Waning gibbous"
  | "Last quarter"
  | "Waning crescent";

export function lunarCycleFraction(dateString: string) {
  const date = new Date(`${dateString.slice(0, 10)}T12:00:00Z`).getTime();
  const age = (((date - KNOWN_NEW_MOON) % LUNAR_CYCLE_MS) + LUNAR_CYCLE_MS) % LUNAR_CYCLE_MS;
  return age / LUNAR_CYCLE_MS;
}

export function lunarActivityModifier(dateString: string) {
  return 6 * Math.cos(4 * Math.PI * lunarCycleFraction(dateString));
}

export function lunarPhaseName(dateString: string): LunarPhaseName {
  const phase = lunarCycleFraction(dateString);

  if (phase < 0.03 || phase > 0.97) return "New";
  if (phase < 0.22) return "Waxing crescent";
  if (phase < 0.28) return "First quarter";
  if (phase < 0.47) return "Waxing gibbous";
  if (phase < 0.53) return "Full";
  if (phase < 0.72) return "Waning gibbous";
  if (phase < 0.78) return "Last quarter";
  return "Waning crescent";
}
