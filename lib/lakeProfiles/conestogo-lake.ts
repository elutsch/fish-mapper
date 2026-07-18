import type { LakeProfile } from "./types";

const conestogoLake: LakeProfile = {
  slug: "conestogo-lake",
  lake: "Conestogo Lake",
  province: "Ontario",
  fmz: 16,
  waterbodyType: "reservoir",
  coordinates: { lat: 43.687, lng: -80.735 },
  morphology: {
    surfaceArea: "628 ha (~1,550 acres)",
    maxDepth: null,
    meanDepth: null,
    clarity: "stained",
    trophicStatus: null,
    thermalBehaviour:
      "Reservoir releases cold water from depth at the dam (supports a cold-water tailwater below), implying stratification with a cool hypolimnion",
  },
  bestSeason: "Late spring through summer",
  overview:
    "Conestogo Lake is a 628-hectare flood-control reservoir on the Conestogo River, impounded behind the Conestogo Dam northwest of Wallenstein and managed by the Grand River Conservation Authority. It is a Y-shaped impoundment, its two arms each running about 6 km up the drowned river valleys — stained and shallower up those upper arms, deeper and clearer toward the dam, where cold water is released from depth. That split sets the fishery: northern pike hold the weedy back-arm bays, smallmouth relate to the harder structure and points toward the dam, and walleye favour the drowned river channel, the main basin, and the inflows at the arm heads. As a flood-control reservoir, levels fluctuate through the season, and 2024–2025 dam rehabilitation drew them down further. Public access is the GRCA conservation-area launch, a concrete double ramp off Wellington County Road 11.",
  notableFacts: [
    {
      fact: "Y-shaped impoundment with two arms each about 6 km long, 628 ha, formed by the Conestogo Dam (built 1955–1958, first flooded October 1958); the flooding submerged the former village of Hollen.",
      sourceUrl: "https://en.wikipedia.org/wiki/Conestogo_Lake",
    },
    {
      fact: "Walleye, northern pike, and smallmouth bass are the three most-observed and most-caught species across angler-observation platforms.",
      sourceUrl: "https://www.anglersatlas.com/place/728874/conestoga-lake",
    },
    {
      fact: "Cold-water release from depth at the dam supports a stocked brown-trout tailwater in the Conestogo River below the dam — a distinct fishery from the lake.",
      sourceUrl:
        "https://www.grandriver.ca/our-watershed/fisheries-management/tailwater-fisheries/",
    },
    {
      fact: "No recreational stocking record exists for the reservoir in the Fish ON-Line FMZ 16 dataset; its walleye, pike, bass, and crappie appear self-sustaining.",
      sourceUrl:
        "https://www.lioapplications.lrc.gov.on.ca/services/FishONLine/StockingList.aspx?json=true&fmz=16&stock=AllSpecies&diagnostics=false&lang=en",
    },
  ],
  regulations: [
    {
      species: "Walleye",
      season:
        "Jan 1–Mar 15 and second Saturday in May to Dec 31 (2026: May 9–Dec 31)",
      limit: "S-4 / C-2, not more than 1 over 46 cm (18\") (combined with Sauger)",
      sizeLimit: "not more than 1 over 46 cm (18\")",
      sourceUrl:
        "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
      effectiveDate: "2026-01-01",
      verified: true,
    },
    {
      species: "Northern Pike",
      season:
        "Jan 1–Mar 31 and second Saturday in May to Dec 31 (2026: May 9–Dec 31)",
      limit: "S-6 / C-2",
      sizeLimit: "no size limit",
      sourceUrl:
        "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
      effectiveDate: "2026-01-01",
      verified: true,
    },
    {
      species: "Smallmouth Bass",
      season: "fourth Saturday in June to Nov 30 (2026: Jun 27–Nov 30)",
      limit: "S-6 / C-2 (combined with Largemouth)",
      sizeLimit: null,
      sourceUrl:
        "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
      effectiveDate: "2026-01-01",
      verified: true,
    },
  ],
  regsDisclaimer:
    "Regulations effective 2026-01-01, FMZ 16. This is a summary, not the legal regulation — confirm current rules with the official source before fishing.",
  launches: [
    {
      name: "Conestogo Lake Conservation Area — 6580 Wellington County Road 11, Wallenstein",
      type: "trailer",
      notes:
        "Concrete double-lane boat launch (two ramps, motorized); powerboats/waterskiing permitted. Boat launch $14.50/day or $117.00 season pass; valid boating and driver's licence required. Fluctuating reservoir levels can affect launch access during dam drawdowns.",
      sourceUrl:
        "https://www.grandriver.ca/outdoor-recreation/conservation-areas/conestogo-lake/",
    },
    {
      name: "Conestogo Lake Conservation Area — carry-in / non-motorized access",
      type: "carry-in",
      notes:
        "Multiple shoreline entry points for canoe/kayak/SUP.",
      sourceUrl:
        "https://www.grandriver.ca/outdoor-recreation/conservation-areas/conestogo-lake/",
    },
  ],
  species: [
    {
      parentSlug: "smallmouth-bass",
      displayName: "Smallmouth Bass",
      tier: "strong",
      structure: [
        "deeper main-lake water and points toward the dam; hard-bottom/drop-off structure",
      ],
      bestSeason: "Late spring through summer",
      bodyCopy:
        "Smallmouth are the most-reported species on Conestogo, relating to the harder bottom, points, and drop-offs down toward the deeper dam end of the reservoir, where the clearer water suits them better than the stained upper arms. They follow rock and gravel off the main basin through the summer, working the points and weedline edges that produce best from late spring on. Because levels fluctuate on this flood-control reservoir, the fish shift with drawdown, concentrating on the remaining hard structure toward the dam through the warmer months.",
      qualitySignal: null,
      lede:
        "The clearer water toward the Conestogo Dam is what sets smallmouth apart here from the stained upper arms — this is the reservoir's most-reported species, and it holds where the bottom turns to rock and gravel rather than in the weedy back-bay water pike prefer. Look to the hard structure and drop-offs off the deeper main basin, the drowned-valley end where clarity holds up best through the warmer months.",
      howItFishes:
        "Smallmouth relate to the harder bottom, points, and drop-offs down toward the deeper dam end, where clearer water suits them better than the stained upper arms. Bass season opens the fourth Saturday of June, post-spawn, and the points and weedline edges produce best from late spring through summer once fish settle onto rock and gravel off the main basin. Because Conestogo is a flood-control reservoir with fluctuating levels — pulled down further during 2024–2025 dam rehabilitation — the fish shift with drawdown, concentrating on whatever hard structure remains toward the dam as the water drops through the warmer months. Perch and shiners in the system give them a forage base off that structure.",
      structureDetails: [
        {
          name: "Rocky main-lake points and hard structure toward the deeper dam end",
          detail:
            "The hard bottom, points, and drop-offs down toward the dam, where clearer water suits smallmouth better than the stained upper arms; this is the feature type they relate to through summer.",
        },
        {
          name: "General points and weedline edges",
          detail:
            "The main-lake points and weedline edges that fish productively for smallmouth through late spring and summer.",
        },
      ],
      speciesRules: [
        {
          rule: "Season: fourth Saturday in June to Nov 30 (2026: Jun 27–Nov 30); Limit S-6 / C-2 (combined with Largemouth)",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2026-01-01",
        },
        {
          rule: "No Conestogo Lake waterbody exception — zone-wide FMZ 16 regs apply; no sanctuary or closure documented",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2026-01-01",
        },
        {
          rule: "Bait: FMZ 16 sits within the Southern Bait Management Zone, which restricts transport of live/dead baitfish and leeches",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2026-01-01",
        },
      ],
      sources: [
        "https://www.grandriver.ca/outdoor-recreation/fishing/fishing-grand-river-conservation-areas/",
        "https://www.fishangler.com/fishing-waters/ca/ontario/conestogo-lake/17156788",
      ],
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
      tier: "strong",
      structure: [
        "weedy back-arm bays and shallower stained upper reaches of the two river arms; weedlines and inflows",
      ],
      bestSeason: "Late spring through summer",
      bodyCopy:
        "Pike are the most-observed species on the reservoir, holding the weedy bays and the shallower, stained upper reaches of the two 6 km river arms — the classic vegetated ambush habitat of a drowned-valley reservoir. The back-arm water and inflows give them the weed edges they ambush from, feeding on the perch and shiners the arms hold. Those weedlines fish productively from late spring through summer, and the warmer upper arms turn on earlier in the season than the deeper water down near the dam.",
      qualitySignal: null,
      lede:
        "Pike are the most-observed fish on Conestogo, and they hold up the two 6 km river arms — the weedy bays and the shallower, stained upper reaches where the drowned Conestogo River valley gives them the vegetated ambush habitat they want. Those warmer upper arms turn on earlier in the season than the deeper, cooler water down near the dam, so the back-arm weed edges are where the pike fishing sets up first.",
      howItFishes:
        "Pike hold the weedy bays and the shallower, stained upper reaches of the two 6 km river arms — the classic vegetated ambush habitat of a drowned-valley reservoir. The back-arm water and inflows give them the weed edges they hunt from, feeding on the perch and shiners the arms hold. Those weedlines fish productively from late spring through summer, and the warmer upper arms warm faster and turn on earlier in the season than the deeper water down near the dam. Levels fluctuate on this flood-control reservoir, so the productive weed edges shift with the water; the vegetated arm habitat is what anchors the fishery through the warm months.",
      structureDetails: [
        {
          name: "Weedy bays and the shallower, stained upper reaches of the two river arms",
          detail:
            "The vegetated back-arm water and weed edges up the two drowned river channels — the ambush habitat pike relate to, and the reservoir's most-observed species holds here.",
        },
        {
          name: "Weedlines and inflows",
          detail:
            "The weed edges and arm-head inflows that fish productively for pike from late spring through summer.",
        },
      ],
      speciesRules: [
        {
          rule: "Season: Jan 1–Mar 31 and second Saturday in May to Dec 31 (2026: May 9–Dec 31); Limit S-6 / C-2; no size limit",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2026-01-01",
        },
        {
          rule: "No Conestogo Lake waterbody exception — zone-wide FMZ 16 regs apply; no sanctuary or closure documented",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2026-01-01",
        },
        {
          rule: "Bait: FMZ 16 sits within the Southern Bait Management Zone, which restricts transport of live/dead baitfish and leeches",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2026-01-01",
        },
      ],
      sources: [
        "https://www.grandriver.ca/outdoor-recreation/fishing/fishing-grand-river-conservation-areas/",
        "https://www.wellingtonadvertiser.com/conestogo-lake-fishing-tourney-draws-97-youth-adult-anglers/",
      ],
    },
    {
      parentSlug: "walleye",
      displayName: "Walleye",
      tier: "strong",
      structure: [
        "drowned Conestogo River channel and main-lake basin toward the dam; river inflows at the tops of the two arms; main-lake points",
      ],
      bestSeason: "Late spring through summer",
      bodyCopy:
        "Walleye favour the drowned Conestogo River channel and the main-lake basin toward the dam, along with the river inflows at the heads of the two arms, where current and gravel support spawning. The deeper, stained main-lake water suits their low-light feeding, and the points along the basin fish well at dawn and dusk with perch as a primary forage base. The reservoir stratifies through summer as cold water releases from depth at the dam, so the fish relate to the cooler basin water while the shallow upper arms warm faster.",
      qualitySignal: null,
      lede:
        "The drowned Conestogo River channel is the spine of the walleye fishery here — that old riverbed and the main-lake basin toward the dam, along with the river inflows at the heads of the two arms, are where current and gravel line up. The deeper, stained main-lake water suits their low-light feeding, and the basin points come into their own at dawn and dusk over a perch-based forage supply.",
      howItFishes:
        "Walleye favour the drowned Conestogo River channel and the main-lake basin toward the dam, along with the river inflows at the heads of the two arms, where current and gravel support spawning early in the year. The deeper, stained main-lake water suits their low-light feeding, and the points along the basin fish well at dawn and dusk with perch as a primary forage base. The reservoir stratifies through summer as cold water releases from depth at the dam, so the fish relate to the cooler basin water while the shallow upper arms warm faster. There is a legal winter open season, but reservoir drawdown and fluctuating levels make hard-water ice unreliable here.",
      structureDetails: [
        {
          name: "Drowned Conestogo River channel / main-lake basin toward the dam and the river inflows at the tops of the two arms",
          detail:
            "The old riverbed and deeper basin water walleye favour, plus the arm-head inflows where current and gravel support spawning.",
        },
        {
          name: "Points along the main-lake basin",
          detail:
            "The basin points that fish well for walleye in low light, at dawn and dusk.",
        },
      ],
      speciesRules: [
        {
          rule: "Season: Jan 1–Mar 15 and second Saturday in May to Dec 31 (2026: May 9–Dec 31); Limit S-4 / C-2, not more than 1 over 46 cm (18\"), combined with Sauger",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2026-01-01",
        },
        {
          rule: "No Conestogo Lake waterbody exception — zone-wide FMZ 16 regs apply; no sanctuary or closure documented",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2026-01-01",
        },
        {
          rule: "Bait: FMZ 16 sits within the Southern Bait Management Zone, which restricts transport of live/dead baitfish and leeches",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2026-01-01",
        },
      ],
      sources: [
        "https://www.grandriver.ca/outdoor-recreation/fishing/fishing-grand-river-conservation-areas/",
        "https://hooklineandsinker.ca/the-conestoga-lake-conservation-area/",
        "https://www.fishangler.com/fishing-waters/ca/ontario/conestogo-lake/17156788",
      ],
    },
    {
      parentSlug: "black-crappie",
      displayName: "Black Crappie",
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
      label: "FMZ 16 fishing regulations (official, MNR)",
      url: "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
    },
    {
      label: "Boat launch and access, Grand River Conservation Authority",
      url: "https://www.grandriver.ca/outdoor-recreation/conservation-areas/conestogo-lake/",
    },
    {
      label: "Conestogo Lake area fees (boat launch, day-use), GRCA",
      url: "https://www.grandriver.ca/outdoor-recreation/conservation-areas/conservation-area-services-info-fees-and-more/conservation-area-fees/conestogo-lake-area-fees/",
    },
    {
      label: "Fish ON-Line stocking record, FMZ 16",
      url: "https://www.lioapplications.lrc.gov.on.ca/services/FishONLine/StockingList.aspx?json=true&fmz=16&stock=AllSpecies&diagnostics=false&lang=en",
    },
  ],
  speciesCount: 3,
  lastVerified: "2026-07-18",
  factCheckStatus: "passed",
  regsGate: "passed",
};

export default conestogoLake;
