import { kv } from "@vercel/kv";
import type { ForecastHour, PressureTrend, Verdict } from "./types";
import type { WeekDay } from "./week";

type Snapshot = {
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
    return kv.get<Snapshot>(key);
  }
  return memoryStore.get(key) ?? null;
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
