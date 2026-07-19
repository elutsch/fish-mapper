import type { LakeProfile } from "./types";
import belwoodLake from "./belwood-lake";
import christieLake from "./christie-lake";
import conestogoLake from "./conestogo-lake";
import fairyLakeActon from "./fairy-lake-acton";
import fanshaweLake from "./fanshawe-lake";
import guelphLake from "./guelph-lake";
import kelsoReservoir from "./kelso-reservoir";
import lakeEugenia from "./lake-eugenia";
import laurelCreekReservoir from "./laurel-creek-reservoir";
import mountsbergReservoir from "./mountsberg-reservoir";
import pittockLake from "./pittock-lake";
import puslinchLake from "./puslinch-lake";
import shadesMillsReservoir from "./shades-mills-reservoir";
import wildwoodReservoir from "./wildwood-reservoir";

// Stage 7 registers each generated profile here, keyed by slug.
export const lakeProfiles: Record<string, LakeProfile> = {
  "belwood-lake": belwoodLake,
  "christie-lake": christieLake,
  "conestogo-lake": conestogoLake,
  "fairy-lake-acton": fairyLakeActon,
  "fanshawe-lake": fanshaweLake,
  "guelph-lake": guelphLake,
  "kelso-reservoir": kelsoReservoir,
  "lake-eugenia": lakeEugenia,
  "laurel-creek-reservoir": laurelCreekReservoir,
  "mountsberg-reservoir": mountsbergReservoir,
  "pittock-lake": pittockLake,
  "puslinch-lake": puslinchLake,
  "shades-mills-reservoir": shadesMillsReservoir,
  "wildwood-reservoir": wildwoodReservoir,
};

export function getLakeProfile(slug: string): LakeProfile | undefined {
  return lakeProfiles[slug];
}
