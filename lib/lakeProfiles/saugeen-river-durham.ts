import type { LakeProfile } from "./types";

// Stage 7 output — generated 2026-07-20 from the Bite Club-register copy
// (04-lake-copy.md, Stage 5 passed; 04b produced no sub-guides). All rendered
// content is carried verbatim from the verified substrate.
//
// This is a RIVER REACH, not a basin: lake-only morphology fields are null.
// The Saugeen at Durham is a coldwater trout river; that headline fishery is
// OUT OF SCOPE for this six-gamefish profile, so the profile is intentionally
// thin — smallmouth Present, all other in-scope gamefish Absent, zero cards.
const saugeenRiverDurham: LakeProfile = {
  slug: "saugeen-river-durham",
  lake: "Saugeen River at Durham",
  province: "Ontario",
  fmz: 16,
  waterbodyType: "river",
  coordinates: { lat: 44.1746, lng: -80.8184 },
  morphology: {
    surfaceArea: null,
    maxDepth: null,
    meanDepth: null,
    clarity: null,
    trophicStatus: null,
    thermalBehaviour: null,
  },
  bestSeason:
    "Summer for the marginal smallmouth; the reach itself is coldwater trout water (out of scope here)",
  overview:
    "The Saugeen at Durham is moving water, not a lake. The river slides through town and drops over McGowan Falls beside a flood-control dam in the Durham Conservation Area — over 3 km of frontage, 61 hectares of Saugeen Valley Conservation Authority ground, a shallow swimming reservoir held above the falls. And here's the honest part: this reach is a trout river. Brook trout hold above the dam, brown and rainbow trout work the runs below — that's the real fishery, and it sits outside this profile's warmwater scope. For the six gamefish we score, the Durham reach is thin. Smallmouth are on the books for the system, but the documented bass, pike, and musky water is downstream from Walkerton, not up here in the cold, narrow trout stretches. Come for the trout with the right license; don't come expecting a bass river. Access is the conservation area in Durham — carry-in and paddle-friendly, day-use fee at the gate.",
  notableFacts: [
    {
      fact: "The Durham Conservation Area protects over 61 ha (150 acres) and more than 3 km of Saugeen River frontage.",
      sourceUrl:
        "https://www.saugeenconservation.ca/outdoors-recreation/outdoor-spaces/durham/",
    },
    {
      fact: "McGowan Falls, a cascade in the conservation area, sits beside a flood-control dam that holds a shallow recreational reservoir upstream and helps control ice for the town of Durham.",
      sourceUrl:
        "https://www.saugeenconservation.ca/outdoors-recreation/outdoor-spaces/durham/",
    },
    {
      fact: "The Durham reach is coldwater trout water — brook trout above the dam, with brown and rainbow trout in the river below — its headline fishery, which falls outside this profile's six-gamefish scope.",
      sourceUrl: "https://ontariotroutandsteelhead.com/fishing-the-saugeen-river/",
    },
    {
      fact: "Warmwater gamefish on the Saugeen (smallmouth bass, pike, musky) are documented downstream from Walkerton, not at the Durham reach.",
      sourceUrl: "https://ontariotroutandsteelhead.com/fishing-the-saugeen-river/",
    },
  ],
  regulations: [
    {
      species: "Smallmouth & Largemouth Bass",
      season: "fourth Saturday in June to November 30",
      limit: "S-6 / C-2",
      sizeLimit: null,
      sourceUrl:
        "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
      effectiveDate: "2025-12-08",
      verified: true,
    },
  ],
  regsDisclaimer:
    "Regulations effective 2025-12-08, FMZ 16. This is a summary, not the legal regulation — confirm current rules with the official source before fishing.",
  launches: [
    {
      name: "Durham Conservation Area — Durham, Ontario (Saugeen Valley Conservation Authority)",
      type: "carry-in",
      notes:
        "Over 3 km of Saugeen River frontage; carry-in / paddle-friendly access with a listed boat ramp. Day-use parking fee ($5.00/day; annual pass available). Flood-control dam and moving water — flow and level vary seasonally.",
      sourceUrl:
        "https://www.saugeenconservation.ca/outdoors-recreation/outdoor-spaces/durham/",
    },
  ],
  species: [
    {
      parentSlug: "smallmouth-bass",
      displayName: "Smallmouth Bass",
      tier: "present",
      structure: [],
      bestSeason: null,
      bodyCopy: null,
      qualitySignal: null,
      lede: null,
      howItFishes: null,
      structureDetails: null,
      speciesRules: null,
      sources: [],
    },
    {
      parentSlug: "largemouth-bass",
      displayName: "Largemouth Bass",
      tier: "absent",
      structure: [],
      bestSeason: null,
      bodyCopy: null,
      qualitySignal: null,
      lede: null,
      howItFishes: null,
      structureDetails: null,
      speciesRules: null,
      sources: [],
    },
    {
      parentSlug: "northern-pike",
      displayName: "Northern Pike",
      tier: "absent",
      structure: [],
      bestSeason: null,
      bodyCopy: null,
      qualitySignal: null,
      lede: null,
      howItFishes: null,
      structureDetails: null,
      speciesRules: null,
      sources: [],
    },
    {
      parentSlug: "walleye",
      displayName: "Walleye",
      tier: "absent",
      structure: [],
      bestSeason: null,
      bodyCopy: null,
      qualitySignal: null,
      lede: null,
      howItFishes: null,
      structureDetails: null,
      speciesRules: null,
      sources: [],
    },
    {
      parentSlug: "black-crappie",
      displayName: "Black Crappie",
      tier: "absent",
      structure: [],
      bestSeason: null,
      bodyCopy: null,
      qualitySignal: null,
      lede: null,
      howItFishes: null,
      structureDetails: null,
      speciesRules: null,
      sources: [],
    },
    {
      parentSlug: "yellow-perch",
      displayName: "Yellow Perch",
      tier: "absent",
      structure: [],
      bestSeason: null,
      bodyCopy: null,
      qualitySignal: null,
      lede: null,
      howItFishes: null,
      structureDetails: null,
      speciesRules: null,
      sources: [],
    },
  ],
  keyResources: [
    {
      label:
        "The actual regs, straight from the source — FMZ 16, Government of Ontario",
      url: "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
    },
    {
      label:
        "Access, day-use fees, and the McGowan Falls dam — Durham Conservation Area, Saugeen Valley Conservation Authority",
      url: "https://www.saugeenconservation.ca/outdoors-recreation/outdoor-spaces/durham/",
    },
  ],
  speciesCount: 0,
  lastVerified: "2026-07-20",
  factCheckStatus: "passed",
  regsGate: "passed",
};

export default saugeenRiverDurham;
