import { kv } from "@vercel/kv";
import type { ForecastHour, PressureTrend, Verdict } from "./types";
import type { WeekDay } from "./week";

export const SNAPSHOT_VERSION = 4 as const;

export type Snapshot = {
  version: typeof SNAPSHOT_VERSION;
  forecast: ForecastHour[];
  pressureTrend: PressureTrend;
  verdict: Verdict;
  week: WeekDay[];
};

const memoryStore = new Map<string, Snapshot>();

export function snapshotKey(spotId: string, validFor: string) {
  return `fishing:${spotId}:${validFor}`;
}

export async function getSnapshot(spotId: string, validFor: string) {
  const key = snapshotKey(spotId, validFor);
  if (hasKvConfig()) {
    const stored = await kv.get<unknown>(key);
    return isCurrentSnapshot(stored) ? stored : null;
  }
  const stored = memoryStore.get(key);
  return isCurrentSnapshot(stored) ? stored : null;
}

export async function saveSnapshot(spotId: string, validFor: string, snapshot: Snapshot) {
  const key = snapshotKey(spotId, validFor);
  if (hasKvConfig()) {
    await kv.set(key, snapshot);
    return;
  }
  memoryStore.set(key, snapshot);
}

function hasKvConfig() {
  return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

export function isCurrentSnapshot(value: unknown): value is Snapshot {
  return (
    typeof value === "object" &&
    value !== null &&
    "version" in value &&
    value.version === SNAPSHOT_VERSION
  );
}
