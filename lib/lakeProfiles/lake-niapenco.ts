import type { LakeProfile } from "./types";

// Stage 7 output — generated 2026-07-25 from the Bite Club-register copy
// (04-lake-copy.md / 04b-species-subguides.md, Stage 5 passed). All rendered
// content is carried verbatim from the verified substrate.
const lakeNiapenco: LakeProfile = {
  slug: "lake-niapenco",
  lake: "Lake Niapenco",
  province: "Ontario",
  fmz: 16,
  waterbodyType: "reservoir",
  coordinates: { lat: 43.101435, lng: -79.835263 },
  morphology: {
    surfaceArea: "168 ha (~415 acres)",
    maxDepth: null,
    meanDepth: null,
    clarity: "stained",
    trophicStatus: "eutrophic; part of the phosphorus-loaded Welland River system",
    thermalBehaviour:
      "Shallow, wind-exposed and well-mixed (gets choppy in wind); no documented stratification",
  },
  bestSeason:
    "Open-water season through summer and fall; weedy shallows for bass and panfish",
  overview:
    "Lake Niapenco is the Welland River pooled up behind the Binbrook dam — a shallow, weedy reservoir built in 1971 to keep the river running through the summer and catch its floods. It's the biggest inland lake on the Niagara Peninsula, and it fishes like what it is: warm, stained, and green. The lake runs long and narrow, threaded with little islands and cottage-lined offshoots, with a buoy line around Pickerel Island you don't cross — there's an eagle nest on it. This is largemouth and panfish water, not a deep clear bass lake. Bass and crappie bury in the vegetation; a shallow, wind-exposed reservoir chops up fast when it blows. Your way in is the Niagara Peninsula Conservation Authority launch at Binbrook Conservation Area — day-use fee, paddlecraft and electric motors only. Leave the gas kicker at home.",
  notableFacts: [
    {
      fact: "Lake Niapenco is the largest inland lake in the Niagara Peninsula watershed, created in 1971 when the Welland River was dammed at Binbrook for summer low-flow augmentation and seasonal flood control.",
      sourceUrl: "https://www.openwaterpedia.com/wiki/Lake_Niapenco",
    },
    {
      fact: "A 2017 mark-recapture study by Biotactic for the NPCA estimated the reservoir's sport-fish community at ~27,149 fish and found it dominated by white crappie (~76%), with largemouth bass (~12%), black crappie (~7%), and smallmouth bass (~5%); northern pike and walleye were a negligible share of the estimate.",
      sourceUrl:
        "https://www.biotactic.com/lake-niapenco-sport-fish-population-estimates/",
    },
    {
      fact: "Surface area ~168 ha (~415 acres).",
      sourceUrl: "https://www.anglersatlas.com/place/124339/lake-niapenco",
    },
    {
      fact: "Binbrook Conservation Area / Lake Niapenco is a well-known Hamilton-area fishing hot spot that hosts an annual spring fishing derby and an annual ice-fishing derby.",
      sourceUrl:
        "https://npca.ca/parks-recreation/conservation-areas/binbrook/ice-fishing.htm",
    },
    {
      fact: "A fish-consumption advisory applies: the water carries PFAS, mercury, and PCBs — consult Ontario's Guide to Eating Ontario Fish.",
      sourceUrl:
        "https://npca.ca/parks-recreation/conservation-areas/binbrook/ice-fishing.htm",
    },
  ],
  regulations: [
    {
      species: "Largemouth & Smallmouth Bass",
      season: "fourth Saturday in June to November 30",
      limit: "S-6 / C-2",
      sizeLimit: null,
      sourceUrl:
        "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
      effectiveDate: "2025-12-08",
      verified: true,
    },
    {
      species: "Black Crappie (Crappie)",
      season: "open all year",
      limit: "S-30 / C-10",
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
      name: "Binbrook Conservation Area boat launch — Niagara Peninsula Conservation Authority",
      type: "trailer-and-carry-in",
      notes:
        "Electric motors / non-motorized craft only — gas-powered motors are NOT permitted. Day-use admission (~$15/vehicle; ~$9 off-season). Wheelchair-accessible fishing pier and canoe/kayak/paddleboard rentals on site. A buoyed boat boundary protects Pickerel Island's active bald eagle nest and cannot be crossed.",
      sourceUrl: "https://npca.ca/parks-recreation/conservation-areas/binbrook",
    },
  ],
  species: [
    {
      parentSlug: "largemouth-bass",
      displayName: "Largemouth Bass",
      tier: "strong",
      structure: [
        "weedy shallow bays",
        "the small islands and vegetated offshoots of the flooded river valley",
      ],
      bestSeason: "Open-water bass season, fourth Saturday in June through fall",
      bodyCopy:
        "Largemouth own this reservoir. The 2017 NPCA survey put them at roughly one in eight sport fish here — the top gamefish in a lake built for them, all warm shallow water and green cover. They hole up in the weedy bays and hard against the little islands and offshoots, ambushing sunfish, perch, and young panfish out of the salad. Work the vegetation edges and the cuts between islands from the late-June opener on. Where the weeds get thickest, that's the address — this is a lake you fish tight to cover, not out over open water.",
      qualitySignal:
        "~12% of the 2017 NPCA/Biotactic mark-recapture sport-fish estimate; an Angler's Atlas top-caught species",
      lede:
        "Niapenco is a drowned river valley, and the largemouth live in its edges. The old Welland channel widened behind the 1971 Binbrook dam into a long, narrow lake stitched with little islands and cottage-lined offshoots — miles of vegetated shoreline seam in warm, stained, eutrophic water. That's largemouth country top to bottom, and the 2017 NPCA survey backs it: bass are the reservoir's headline gamefish, roughly one in eight sport fish sampled.",
      howItFishes:
        "This is tight-to-cover fishing, not open-water searching. Largemouth bury in the weedy bays and hold hard against the small islands and vegetated offshoots, using the salad as ambush cover for sunfish, yellow perch, and the young-of-year panfish the reservoir grows in bulk. Work the vegetation edges and the cuts between islands, and lean on the thickest weed you can find — in a shallow, warm, green lake, the densest cover is the address. The bass season opens the fourth Saturday in June and runs to November 30, and the shallow-cover pattern holds across it: a wind-exposed reservoir mixes top to bottom, so there's no deep cool refuge pulling fish off the vegetation. No published bathymetry exists here, so fish the cover you can see rather than structure you can't.",
      structureDetails: [
        {
          name: "Weedy shallow bays and the small islands and vegetated offshoots",
          detail:
            "The vegetated cover blanketing a shallow, warm reservoir — prime largemouth habitat, and where the survey's headline gamefish (~12% of the 2017 sport-fish community) spends the open-water season.",
        },
        {
          name: "The long, narrow flooded river valley with cottage-lined offshoots",
          detail:
            "The drowned Welland River channel widened into miles of cover and structure edges throughout the impoundment — the shoreline seam largemouth patrol from the late-June opener on.",
        },
      ],
      speciesRules: [
        {
          rule: "Season: fourth Saturday in June to November 30 — Limit: S-6 / C-2 (Largemouth & Smallmouth Bass combined)",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2025-12-08",
        },
        {
          rule: "Waterbody exceptions: none documented — FMZ 16 lists no exception or sanctuary for Lake Niapenco / the Welland River; zone-wide regs apply",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2025-12-08",
        },
        {
          rule: "Bait: FMZ 16 is within the Southern Bait Management Zone, which restricts transport of live or dead baitfish and leeches",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2025-12-08",
        },
        {
          rule: "Access: electric motors / non-motorized craft only — gas motors are prohibited on Lake Niapenco (Binbrook Conservation Area, NPCA)",
          sourceUrl:
            "https://npca.ca/parks-recreation/conservation-areas/binbrook",
          effectiveDate: "2026-07-24",
        },
      ],
      sources: [
        "https://www.biotactic.com/lake-niapenco-sport-fish-population-estimates/",
        "https://www.anglersatlas.com/place/124339/lake-niapenco",
      ],
    },
    {
      parentSlug: "black-crappie",
      displayName: "Black Crappie",
      tier: "strong",
      structure: [
        "brushy and weedy island edges, offshoots, and shallow back bays",
      ],
      bestSeason:
        "Open all year; best around the shallow cover through spring and early summer",
      bodyCopy:
        "Niapenco is a crappie factory — the survey's single most abundant sport fish is crappie, and black crappie ride along at about one in fourteen. They slab up around the brushy island edges and the weedy back bays, hanging off the cover and picking off minnows and young-of-year. Small jigs and minnow imitations along the vegetation lines do the work. The season never closes, but the shallow-cover bite is at its best when they push in around the islands and offshoots in spring and early summer.",
      qualitySignal:
        "~7% of the 2017 NPCA/Biotactic sport-fish estimate; part of a crappie-dominated community",
      lede:
        "The brushy island edges are where Niapenco's black crappie set up. This shallow, eutrophic reservoir grows crappie in bulk — the single most abundant sport fish in the 2017 NPCA survey — and while white crappie carry most of that count, black crappie ride along at roughly one in fourteen fish sampled. They relate to submerged wood and weed edges, the classic crappie cover the flooded river valley scatters across its islands, offshoots, and back bays.",
      howItFishes:
        "Find the cover, find the crappie. Black crappie slab up around the brushy island edges and the weedy back bays, hanging just off the wood and vegetation to pick off minnows and young-of-year panfish. Small jigs and minnow imitations worked along the vegetation lines are the honest approach. The season never closes in FMZ 16, but the shallow-cover bite peaks when the fish push tight to the islands and offshoots through spring and early summer; as the shallow, wind-mixed reservoir warms, they slide along the weed edges rather than chase depth this lake doesn't really have. Crappie share this cover with largemouth and pike, so expect company on the good edges. No bathymetry is published, so read the visible weed and wood lines.",
      structureDetails: [
        {
          name: "Brushy/weedy island edges, offshoots, and shallow back bays",
          detail:
            "The submerged wood and weed edges scattered through the flooded valley — the cover black crappie (~7% of the 2017 sport-fish community) relate to, best in spring and early summer when the fish push shallow.",
        },
      ],
      speciesRules: [
        {
          rule: "Season: open all year — Limit: S-30 / C-10",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2025-12-08",
        },
        {
          rule: "Waterbody exceptions: none documented — FMZ 16 lists no exception or sanctuary for Lake Niapenco / the Welland River; zone-wide regs apply",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2025-12-08",
        },
        {
          rule: "Bait: FMZ 16 is within the Southern Bait Management Zone, which restricts transport of live or dead baitfish and leeches",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2025-12-08",
        },
        {
          rule: "Access: electric motors / non-motorized craft only — gas motors are prohibited on Lake Niapenco (Binbrook Conservation Area, NPCA)",
          sourceUrl:
            "https://npca.ca/parks-recreation/conservation-areas/binbrook",
          effectiveDate: "2026-07-24",
        },
      ],
      sources: [
        "https://www.biotactic.com/lake-niapenco-sport-fish-population-estimates/",
      ],
    },
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
      parentSlug: "northern-pike",
      displayName: "Northern Pike",
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
      parentSlug: "walleye",
      displayName: "Walleye",
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
      parentSlug: "yellow-perch",
      displayName: "Yellow Perch",
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
  ],
  keyResources: [
    {
      label: "The actual regs, straight from the source — FMZ 16, Government of Ontario",
      url: "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
    },
    {
      label:
        "Launch, fees, motor rules, and gate hours — Binbrook Conservation Area, Niagara Peninsula Conservation Authority",
      url: "https://npca.ca/parks-recreation/conservation-areas/binbrook",
    },
    {
      label: "2017 Lake Niapenco sport-fish population study — Biotactic Inc. for the NPCA",
      url: "https://www.biotactic.com/lake-niapenco-sport-fish-population-estimates/",
    },
    {
      label: "Lake record and species observations — Angler's Atlas (Lake Niapenco, Zone 16)",
      url: "https://www.anglersatlas.com/place/124339/lake-niapenco",
    },
  ],
  speciesCount: 2,
  lastVerified: "2026-07-24",
  factCheckStatus: "passed",
  regsGate: "passed",
};

export default lakeNiapenco;
