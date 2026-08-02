import type { LakeProfile } from "./types";

// Stage 7 output — generated 2026-08-02 from the Bite Club-register copy
// (04-lake-copy.md / 04b-species-subguides.md, Stage 5 passed). All rendered
// content is carried verbatim from the verified substrate.
const pinehurstLake: LakeProfile = {
  slug: "pinehurst-lake",
  lake: "Pinehurst Lake",
  province: "Ontario",
  fmz: 16,
  waterbodyType: "natural-lake",
  coordinates: { lat: 43.26741, lng: -80.39394 },
  morphology: {
    surfaceArea: "9 ha (~23 acres)",
    maxDepth: "~35 ft (~10.7 m)",
    meanDepth: null,
    clarity: null,
    trophicStatus: null,
    thermalBehaviour: null,
  },
  bestSeason: "Spring through fall, plus a winter ice season",
  overview:
    "Pinehurst is a glacier's leftover — a 9-hectare kettle scooped into the Carolinian forest north of Paris, no dam, no river, no inflow to speak of. It's small, but it isn't a puddle: the bottom drops to about 35 feet in the middle, so you get warm weedy shallows around a rim and one cool deep basin in the heart of it. That split is the whole fishery. Largemouth bass own the salad and the shoreline dock cover; black crappie work the weed edges in spring and slide out over the basin the rest of the year. Getting on the water is simple and strict: one launch inside the GRCA conservation area, non-motorized only — no gas, no electric, nothing with a prop. Rent a canoe, kayak, or paddleboat on site, or carry your own in. Paid park access, and the fishing runs into winter, when the ice crowd sets up over the same basin.",
  notableFacts: [
    {
      fact: "A compact 9-hectare (23-acre) glacial kettle lake with a maximum depth of about 35 feet, set inside GRCA's Pinehurst Lake Conservation Area and ringed by Carolinian forest",
      sourceUrl:
        "https://www.grandriver.ca/outdoor-recreation/fishing/fishing-grand-river-conservation-areas/",
    },
    {
      fact: "The GRCA names largemouth bass, black crappie, bluegill, and pumpkinseed sunfish as the lake's fishery — a warm-water bass-and-panfish water, with no pike, walleye, or smallmouth",
      sourceUrl:
        "https://www.grandriver.ca/outdoor-recreation/fishing/fishing-grand-river-conservation-areas/",
    },
    {
      fact: "Non-motorized only — no gas or electric motors; canoes, kayaks, and paddleboats can be rented on site",
      sourceUrl:
        "https://www.grandriver.ca/outdoor-recreation/conservation-areas/pinehurst-lake/",
    },
    {
      fact: "A documented winter ice-fishing water within the conservation area",
      sourceUrl:
        "https://www.grandriver.ca/outdoor-recreation/conservation-areas/pinehurst-lake/",
    },
    {
      fact: "Anglers logging trips on Fishbrain rank largemouth bass, bluegill, and black crappie as the three most-caught species",
      sourceUrl: "https://fishbrain.com/fishing-waters/4zRLchru/pinehurst-lake",
    },
  ],
  regulations: [
    {
      species: "Largemouth & Smallmouth Bass",
      season: "Fourth Saturday in June to Nov 30 (2026: Jun 27–Nov 30)",
      limit: "S-6 / C-2",
      sizeLimit: null,
      sourceUrl:
        "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
      effectiveDate: "2025-12-08",
      verified: true,
    },
    {
      species: "Black Crappie",
      season: "Open all year",
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
      name: "Pinehurst Lake Conservation Area canoe/kayak/paddleboat launch",
      type: "carry-in",
      notes:
        "Non-motorized only — no gas or electric motors. One boat launch on the lake; canoe/kayak/paddleboat rentals on site (noted May–August). Paid park day-use/camping access. 468 Pinehurst Road, RR 3, Ayr, ON N0B 1E0 (north of Paris).",
      sourceUrl:
        "https://www.grandriver.ca/outdoor-recreation/conservation-areas/pinehurst-lake/",
    },
  ],
  species: [
    {
      parentSlug: "smallmouth-bass",
      displayName: "Smallmouth Bass",
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
      parentSlug: "largemouth-bass",
      displayName: "Largemouth Bass",
      tier: "strong",
      structure: [
        "warm weedy shoreline shallows",
        "shoreline dock and pier cover",
        "the drop from the shallows into the ~35 ft central basin",
      ],
      bestSeason: "Spring through fall",
      bodyCopy:
        "Largemouth are what this lake is built for. It's a warm weed bowl with a hard shoreline of dock and pier cover, and the bass spread across all of it — the most-logged fish here by a wide margin. Work the weed lines and the wood early and late, flip the docks through the heat, and when the shallows cook in midsummer, follow the flats down to where they tip into the deep middle. There's only one real basin edge on the whole lake, so it concentrates fish. No motor to run and gun — paddle in, pick a stretch of green, and grind it.",
      qualitySignal: null,
      lede:
        "The dock and pier cover is the shortcut. Pinehurst is a small warm kettle bowl fringed with weedy shallows, and the largemouth spread across every green edge of it — the fish anglers log here more than any other. Start on the shoreline wood and the weed lines, because on a lake this compact the whole rim is bass water and you can cover it from a canoe in a morning.",
      howItFishes:
        "This is a warm, shallow, weedy lake with one deep spot, and the largemouth work the shallow two-thirds of that equation for most of the year. From the late-June opener through fall they hold the weedy shoreline flats and the dock and pier cover, ambushing the bluegill and pumpkinseed sunfish that fill the same shallows. Fish weed lines and wood early and late; flip the docks through the midday heat. When midsummer bakes the shallows, follow the flats to where they drop into the roughly 35-foot central basin — the one real depth change on the lake, and a cooler edge to slide along. There's no motor allowed here, gas or electric, so this is a paddle-and-pick-apart fishery: choose a stretch of cover and work it thoroughly rather than running the bank.",
      structureDetails: [
        {
          name: "Warm weedy shoreline shallows",
          detail:
            "The lake's core largemouth habitat — the weed flats ringing the kettle hold fish and forage from the June opener through fall.",
        },
        {
          name: "Shoreline dock and pier cover",
          detail:
            "The hard cover along the developed and day-use shoreline; classic largemouth ambush spots to flip through the day. (From the Fishbrain amenity listing — angler-platform.)",
        },
        {
          name: "The drop into the ~35 ft central basin",
          detail:
            "Where the shallow flats tip into the lake's one deep hole — a hot-weather edge for bass sliding off the cooking shallows.",
        },
      ],
      speciesRules: [
        {
          rule: "Season: fourth Saturday in June to Nov 30 (2026: Jun 27–Nov 30) — Limit: S-6 / C-2 (combined Largemouth & Smallmouth Bass) — no size limit",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2025-12-08",
        },
        {
          rule: "Waterbody exceptions: none — Pinehurst Lake appears in neither the FMZ 16 exceptions nor sanctuaries lists; zone-wide regulations apply",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2025-12-08",
        },
        {
          rule: "Bait: FMZ 16 is within the Southern Bait Management Zone, which restricts transport of live or dead baitfish and leeches into or out of the zone",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2025-12-08",
        },
        {
          rule: "Access: non-motorized only — no gas or electric motors; one launch inside the GRCA conservation area, with canoe/kayak/paddleboat rentals on site and paid park access",
          sourceUrl:
            "https://www.grandriver.ca/outdoor-recreation/conservation-areas/pinehurst-lake/",
          effectiveDate: "2025-12-08",
        },
      ],
      sources: [
        "https://www.grandriver.ca/outdoor-recreation/fishing/fishing-grand-river-conservation-areas/",
        "https://fishbrain.com/fishing-waters/4zRLchru/pinehurst-lake",
      ],
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
      tier: "strong",
      structure: [
        "spring weed edges and shoreline cover",
        "the deep central basin (~35 ft)",
        "ice-season basin edges",
      ],
      bestSeason: "Spring on the weed edges; winter through the ice",
      bodyCopy:
        "Crappie run the calendar here. Spring pulls them tight to the weed edges and shoreline cover — small jigs under a float, right where the green starts. Then the heat pushes them out to suspend over the 35-foot basin, and that's where the ice crowd finds them once the lake locks up in winter. It's a compact target: find the basin, find the edge where it meets the weeds, and you've found most of the crappie in the lake.",
      qualitySignal: null,
      lede:
        "Spring is when the crappie give themselves up, stacked on the weed edges and shoreline cover where a small jig under a float does the work. Black crappie are one of only three fish the GRCA names for Pinehurst, and on this small kettle they're a two-season story — tight to the greenery when the water warms, then out over the deep middle the rest of the year. Find where the weeds meet open water and start there.",
      howItFishes:
        "Crappie track the seasons across the lake's one real depth break. In spring they push shallow to the weed edges and shoreline cover, taken on small jigs and minnow imitations fished slow under a float. As the shallows heat through summer, they pull off and suspend over the roughly 35-foot central basin — the only deep water Pinehurst has — hanging at whatever depth the bait and cooler water sit. That same basin is the winter game: Pinehurst is a documented ice-fishing lake, and crappie and panfish are the realistic hard-water target, worked over the basin and its edges once the lake locks up. It's a small, readable fishery — the shallows in spring, the basin the rest of the year — with no motor to help you cover water, so a paddle or a walk-out on the ice is the whole program.",
      structureDetails: [
        {
          name: "Spring weed edges and shoreline cover",
          detail:
            "Where crappie stage and feed in spring — small jigs under a float right where the green starts.",
        },
        {
          name: "The deep central basin (~35 ft)",
          detail:
            "The lake's one piece of deep water, where crappie suspend through the summer and hold through the winter — Pinehurst's defining vertical structure.",
        },
        {
          name: "Ice-season basin edges",
          detail:
            "In winter the same basin and its edges are the hard-water target on this GRCA-documented ice-fishing lake.",
        },
      ],
      speciesRules: [
        {
          rule: "Season: open all year — Limit: S-30 / C-10 — no size limit",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2025-12-08",
        },
        {
          rule: "Waterbody exceptions: none — Pinehurst Lake appears in neither the FMZ 16 exceptions nor sanctuaries lists; zone-wide regulations apply",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2025-12-08",
        },
        {
          rule: "Bait: FMZ 16 is within the Southern Bait Management Zone, which restricts transport of live or dead baitfish and leeches into or out of the zone",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2025-12-08",
        },
        {
          rule: "Access: winter ice fishing is documented here, but access is through the GRCA conservation area (paid day-use), and the lake is non-motorized only",
          sourceUrl:
            "https://www.grandriver.ca/outdoor-recreation/conservation-areas/pinehurst-lake/",
          effectiveDate: "2025-12-08",
        },
      ],
      sources: [
        "https://www.grandriver.ca/outdoor-recreation/conservation-areas/pinehurst-lake/",
        "https://fishbrain.com/fishing-waters/4zRLchru/pinehurst-lake",
      ],
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
      label:
        "The actual regs, straight from the source — FMZ 16, Government of Ontario",
      url: "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
    },
    {
      label:
        "Launch, rentals, and gate hours — Pinehurst Lake Conservation Area, Grand River Conservation Authority",
      url: "https://www.grandriver.ca/outdoor-recreation/conservation-areas/pinehurst-lake/",
    },
    {
      label:
        "What swims here and where to fish — GRCA Fishing in Conservation Areas",
      url: "https://www.grandriver.ca/outdoor-recreation/fishing/fishing-grand-river-conservation-areas/",
    },
  ],
  speciesCount: 2,
  lastVerified: "2026-08-02",
  factCheckStatus: "passed",
  regsGate: "passed",
};

export default pinehurstLake;
