// One-shot: back-fill each artifacts/{slug}/07-data.json from its corrected
// LakeProfile so the audit trail matches the live profile. Profiles are the
// source of truth here (post-Stage-7 hand corrections: coordinates normalized
// to data/spots.json, FMZ-16 effective dates normalized per commit 6536e84).
//
// Surgical: only the changed *leaf values* are rewritten, scoped by
// "key": value, so original file formatting is preserved and each git diff
// shows exactly the corrected values. Every rewritten file is re-parsed and
// deep-compared to its profile before being kept.
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { lakeProfiles } from "../lib/lakeProfiles";

const artifactsDir = join(process.cwd(), "artifacts");

type Leaf = { key: string; oldVal: unknown; newVal: unknown };

// Collect scalar leaf diffs as (key, oldVal, newVal). Structural changes
// (added/removed keys, array length) are intentionally NOT handled here — the
// known drift is all scalar value corrections; anything else aborts the file.
function leafDiffs(a: unknown, b: unknown, key = ""): Leaf[] | null {
  if (a === b) return [];
  const scalar = (v: unknown) => v === null || typeof v !== "object";
  if (scalar(a) && scalar(b)) return [{ key, oldVal: a, newVal: b }];
  if (scalar(a) || scalar(b)) return null; // scalar/object mismatch — bail
  if (Array.isArray(a) !== Array.isArray(b)) return null;
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return null;
    const out: Leaf[] = [];
    for (let i = 0; i < a.length; i++) {
      const d = leafDiffs(a[i], b[i], key);
      if (d === null) return null;
      out.push(...d);
    }
    return out;
  }
  const ao = a as Record<string, unknown>;
  const bo = b as Record<string, unknown>;
  const keys = new Set([...Object.keys(ao), ...Object.keys(bo)]);
  const out: Leaf[] = [];
  for (const k of keys) {
    if (!(k in ao) || !(k in bo)) return null; // key added/removed — bail
    const d = leafDiffs(ao[k], bo[k], k);
    if (d === null) return null;
    out.push(...d);
  }
  return out;
}

function esc(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const slugs = readdirSync(artifactsDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort();

let written = 0;
for (const slug of slugs) {
  const dataPath = join(artifactsDir, slug, "07-data.json");
  let raw: string;
  try {
    raw = readFileSync(dataPath, "utf8");
  } catch {
    continue;
  }
  const profile = lakeProfiles[slug];
  if (!profile) {
    console.log(`skip  ${slug} — no registered profile`);
    continue;
  }
  const data = JSON.parse(raw);
  const diffs = leafDiffs(data, profile);
  if (diffs === null) {
    console.log(`ABORT ${slug} — structural diff, not just scalar values`);
    continue;
  }
  if (diffs.length === 0) {
    console.log(`same  ${slug}`);
    continue;
  }

  // Replace one text occurrence per diffed leaf, in document order, advancing a
  // cursor so identical `"key": value` pairs at different positions (e.g. three
  // identical "rule" strings where only the first changes) are disambiguated by
  // order rather than clobbered globally.
  let next = raw;
  let cursor = 0;
  const notes: string[] = [];
  for (const { key, oldVal, newVal } of diffs) {
    const oldJson = JSON.stringify(oldVal);
    const newJson = JSON.stringify(newVal);
    const re = new RegExp(`("${esc(key)}"\\s*:\\s*)${esc(oldJson)}`, "g");
    re.lastIndex = cursor;
    const m = re.exec(next);
    if (!m) {
      notes.push(`  ! could not locate "${key}": ${oldJson} at/after ${cursor}`);
      continue;
    }
    const at = m.index + m[1].length;
    next = next.slice(0, at) + newJson + next.slice(at + oldJson.length);
    cursor = at + newJson.length;
  }

  // Verify: re-parsed result must deep-equal the profile. This is the sole gate.
  const ok = JSON.stringify(JSON.parse(next)) === JSON.stringify(profile);
  if (!ok || notes.length) {
    console.log(`FAIL  ${slug} — not written`);
    notes.forEach((n) => console.log(n));
    if (!ok) console.log("  ! post-edit content does not match profile");
    continue;
  }
  writeFileSync(dataPath, next);
  written++;
  console.log(`write ${slug} — ${diffs.length} value(s)`);
}

console.log(`\n${written} artifact file(s) reconciled to profiles.`);
