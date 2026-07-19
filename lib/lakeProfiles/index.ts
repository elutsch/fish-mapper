import type { LakeProfile } from "./types";
import conestogoLake from "./conestogo-lake";
import guelphLake from "./guelph-lake";
import shadesMillsReservoir from "./shades-mills-reservoir";

// Stage 7 registers each generated profile here, keyed by slug.
export const lakeProfiles: Record<string, LakeProfile> = {
  "conestogo-lake": conestogoLake,
  "guelph-lake": guelphLake,
  "shades-mills-reservoir": shadesMillsReservoir,
};

export function getLakeProfile(slug: string): LakeProfile | undefined {
  return lakeProfiles[slug];
}
