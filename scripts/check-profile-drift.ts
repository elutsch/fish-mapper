import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { lakeProfiles } from "../lib/lakeProfiles";
import type { LakeProfile } from "../lib/lakeProfiles/types";

const artifactsDir = join(process.cwd(), "artifacts");

// Deep diff producing dot-paths of differences.
function diff(a: unknown, b: unknown, path = ""): string[] {
  if (a === b) return [];
  if (
    typeof a !== "object" ||
    typeof b !== "object" ||
    a === null ||
    b === null
  ) {
    return [`${path || "(root)"}: ${JSON.stringify(a)} !== ${JSON.stringify(b)}`];
  }
  if (Array.isArray(a) || Array.isArray(b)) {
    if (!Array.isArray(a) || !Array.isArray(b))
      return [`${path}: array/non-array mismatch`];
    if (a.length !== b.length)
      return [`${path}: length ${a.length} !== ${b.length}`];
    return a.flatMap((v, i) => diff(v, (b as unknown[])[i], `${path}[${i}]`));
  }
  const ao = a as Record<string, unknown>;
  const bo = b as Record<string, unknown>;
  const keys = new Set([...Object.keys(ao), ...Object.keys(bo)]);
  return [...keys].flatMap((k) =>
    diff(ao[k], bo[k], path ? `${path}.${k}` : k),
  );
}

const slugs = readdirSync(artifactsDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort();

let drifted = 0;
let missing = 0;

for (const slug of slugs) {
  const dataPath = join(artifactsDir, slug, "07-data.json");
  let data: LakeProfile;
  try {
    data = JSON.parse(readFileSync(dataPath, "utf8"));
  } catch {
    console.log(`SKIP  ${slug} — no 07-data.json`);
    continue;
  }
  const profile = lakeProfiles[slug];
  if (!profile) {
    console.log(`MISS  ${slug} — data.json present but NO registered profile`);
    missing++;
    continue;
  }
  const diffs = diff(data, profile);
  if (diffs.length === 0) {
    console.log(`OK    ${slug}`);
  } else {
    drifted++;
    console.log(`DRIFT ${slug} — ${diffs.length} field(s):`);
    for (const d of diffs.slice(0, 12)) console.log(`        ${d}`);
    if (diffs.length > 12) console.log(`        …and ${diffs.length - 12} more`);
  }
}

console.log(
  `\n${slugs.length} artifacts • ${drifted} drifted • ${missing} missing profile`,
);
