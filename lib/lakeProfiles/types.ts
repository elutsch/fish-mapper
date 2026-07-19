// Evergreen lake-profile schema — the static content layer produced by the
// markdown research pipeline (Stages 0–5, 4b) and emitted by Stage 7.
//
// This layer is deliberately decoupled from the daily conditions layer
// (weather, solunar, craft/fishing verdicts),
// which the conditions engine produces at request time and overlays onto a
// profile by slug. A LakeProfile therefore carries NO live/conditions fields.

export type WaterbodyType = "reservoir" | "natural-lake" | "river";

export type WaterClarity = "clear" | "stained" | "turbid";

export type FactCheckStatus = "passed" | "conditional" | "failed" | "unchecked";

export type RegsGate = "passed" | "failed";

export type SpeciesTier = "destination" | "strong" | "present" | "absent";

export type LakeProfileMorphology = {
  surfaceArea: string | null;
  maxDepth: string | null;
  meanDepth: string | null;
  clarity: WaterClarity | null;
  trophicStatus: string | null;
  thermalBehaviour: string | null;
};

export type NotableFact = {
  fact: string;
  sourceUrl: string;
};

// One entry per carded (Destination/Strong) species. Effective-dated and
// sourced to an official Government of Ontario source. `verified: false` means
// Stage 2 marked the reg [UNVERIFIED]: season/limit/sizeLimit stay null and the
// UI renders a "check the official regs" pointer instead of a stated rule.
export type LakeRegulation = {
  species: string;
  season: string | null;
  limit: string | null;
  sizeLimit: string | null;
  sourceUrl: string;
  effectiveDate: string;
  verified: boolean;
};

export type LakeLaunch = {
  name: string;
  type: "trailer" | "carry-in" | "trailer-and-carry-in";
  notes: string | null;
  sourceUrl: string;
};

export type SpeciesStructureDetail = {
  name: string;
  detail: string;
};

export type SpeciesRule = {
  rule: string;
  sourceUrl: string;
  effectiveDate: string;
};

// One per gamefish scored in Stage 1b — every tier, so Present/Absent power
// "what's NOT here" inverse search. Only Destination/Strong carry copy and
// sub-guide fields; Present/Absent leave them empty/null.
export type LakeProfileSpecies = {
  parentSlug: string;
  displayName: string;
  tier: SpeciesTier;
  structure: string[];
  bestSeason: string | null;
  bodyCopy: string | null;
  qualitySignal: string | null;
  // Sub-guide fields (Stage 4b); null when 4b didn't run or tier is Present/Absent.
  lede: string | null;
  howItFishes: string | null;
  structureDetails: SpeciesStructureDetail[] | null;
  speciesRules: SpeciesRule[] | null;
  sources: string[];
};

export type KeyResource = {
  label: string;
  url: string;
};

export type LakeProfile = {
  slug: string;
  lake: string;
  province: string;
  fmz: number;
  waterbodyType: WaterbodyType;
  coordinates: { lat: number; lng: number };
  morphology: LakeProfileMorphology;
  bestSeason: string;
  overview: string;
  notableFacts: NotableFact[];
  regulations: LakeRegulation[];
  regsDisclaimer: string;
  launches: LakeLaunch[];
  species: LakeProfileSpecies[];
  keyResources: KeyResource[];
  speciesCount: number; // Destination + Strong (cards) — must equal carded species
  lastVerified: string; // from Stage 2 generated_at
  factCheckStatus: FactCheckStatus; // from Stage 2 overall_status
  regsGate: RegsGate; // from Stage 2 regs_gate
  // NO live/conditions fields — the daily engine supplies those at runtime.
};
