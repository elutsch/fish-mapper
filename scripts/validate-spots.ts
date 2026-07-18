import { spots } from "../lib/spots";

const ids = new Set<string>();
const errors: string[] = [];

for (const spot of spots) {
  if (ids.has(spot.id)) {
    errors.push(`Duplicate id: ${spot.id}`);
  }
  ids.add(spot.id);

  if (!spot.launch.trailer && !spot.launch.carryIn) {
    errors.push(`${spot.id} is not launch-capable`);
  }

  if (!spot.shorelineFetch.length) {
    errors.push(`${spot.id} is missing shorelineFetch`);
  }

  for (const bearing of spot.shorelineFetch) {
    if (!Number.isFinite(bearing) || bearing < 0 || bearing >= 360) {
      errors.push(`${spot.id} has invalid fetch bearing ${bearing}`);
    }
  }

  if (!spot.maxFetchKm || spot.maxFetchKm <= 0) {
    errors.push(`${spot.id} is missing maxFetchKm`);
  }
}

if (spots.length < 18 || spots.length > 25) {
  errors.push(`Expected roughly 20 spots; found ${spots.length}`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated ${spots.length} launch-capable fishing spots.`);
