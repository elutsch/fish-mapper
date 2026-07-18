import type { LakeProfile } from "./types";
import conestogoLake from "./conestogo-lake";

// Stage 7 registers each generated profile here, keyed by slug.
export const lakeProfiles: Record<string, LakeProfile> = {
  "conestogo-lake": conestogoLake,
};

export function getLakeProfile(slug: string): LakeProfile | undefined {
  return lakeProfiles[slug];
}
