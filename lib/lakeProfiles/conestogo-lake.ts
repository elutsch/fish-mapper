import type { LakeProfile } from "./types";

// Stage 7 output — regenerated 2026-07-18 from the Bite Club-register copy
// (04-lake-copy.md / 04b-species-subguides.md, Stage 5 passed). All rendered
// content is carried verbatim from the verified substrate.
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
    "Conestogo Lake is a drowned river valley that forks. Two arms, each about 6 km of flooded Conestogo River channel, meet at the Conestogo Dam — 628 hectares of flood-control reservoir run by the Grand River Conservation Authority. The arms sit stained and shallow; the water deepens and clears toward the dam, which releases cold water off the bottom. Levels swing through the season — this is flood control, not decoration — and the 2024–2025 dam rehab drew them down harder, so structure that fished one month can be high and dry the next. Three species define the water: pike up the arms, smallmouth and walleye toward the dam. Your way in is the GRCA conservation area off Wellington County Road 11 — concrete double ramp, powerboats permitted, carry-in spots along the shore for paddlecraft.",
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
      limit: 'S-4 / C-2, not more than 1 over 46 cm (18") (combined with Sauger)',
      sizeLimit: 'not more than 1 over 46 cm (18")',
      sourceUrl:
        "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
      effectiveDate: "2025-12-08",
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
      effectiveDate: "2025-12-08",
      verified: true,
    },
    {
      species: "Smallmouth Bass",
      season: "fourth Saturday in June to Nov 30 (2026: Jun 27–Nov 30)",
      limit: "S-6 / C-2 (combined with Largemouth)",
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
      notes: "Multiple shoreline entry points for canoe/kayak/SUP.",
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
        "points, drop-offs, and hard bottom toward the deeper dam end of the reservoir",
      ],
      bestSeason: "Late June opener through summer",
      bodyCopy:
        "The most-caught fish on Conestogo, per the anglers who log their trips here. Smallmouth hug the hard stuff at the deep end — points, drop-offs, rock-and-gravel bottom near the dam, where the clearer water suits them. From the late-June opener, points and weed edges produce straight through summer. And when drawdown pulls the water off the banks, don't chase it. Whatever hard structure stays wet holds the fish, and it holds more of them. The spots shrink. The schools stack.",
      qualitySignal: null,
      lede:
        "The dam end is smallmouth water. Conestogo sorts itself by clarity — stained up the two arms, cleaner toward the concrete — and the bass claim the clear half, camping on the rock, gravel, and drop-offs where the drowned valley bottoms out at the Conestogo Dam. And the season runs longer than the summer most anglers give it: fourth Saturday of June through November 30, five months on hard bottom that doesn't move.",
      howItFishes:
        "Open-water bass season starts the fourth Saturday of June — a post-spawn opener under the zone-wide rule — and the pattern holds from that first weekend: points and weed edges through summer, hard bottom over soft, clear water over stained. That pushes you down-lake. The main basin toward the dam stratifies in summer, keeping cooler water at depth while the shallow arms heat up, and the smallmouth patrol the drop-offs where the old river valley breaks toward the dam. The wildcard is water level. This is flood control, and the 2024–2025 dam rehab pulled the reservoir down harder than usual — a point that fished in July can be beached by fall. Don't fish memories; scout the edges fresh each trip, because the productive stretch moves as the reservoir does. The season runs to November 30, well past the summer peak.",
      structureDetails: [
        {
          name: "Rocky main-lake points and hard structure toward the deeper dam end",
          detail:
            "Rock-and-gravel points and drop-offs in the deeper, clearer water near the Conestogo Dam — the reservoir's core smallmouth habitat, and the water that keeps producing when drawdown strands shallower cover. (Feature-type pattern from angler catch data; no named landmarks are publicly documented.)",
        },
        {
          name: "Points and weedline edges",
          detail:
            "The GRCA flags points and weedlines as the reservoir's producers from late spring through summer — for smallmouth, that window opens with the late-June season and carries through the warm months.",
        },
      ],
      speciesRules: [
        {
          rule: "Season: fourth Saturday in June to Nov 30 (2026: Jun 27–Nov 30) — Limit: S-6 / C-2 (combined with Largemouth Bass)",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2025-12-08",
        },
        {
          rule: "Waterbody exceptions: none — Conestogo Lake appears in neither the FMZ 16 exceptions nor sanctuaries lists; zone-wide regulations apply",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2025-12-08",
        },
        {
          rule: "Bait: FMZ 16 is within the Southern Bait Management Zone, which restricts transport of live/dead baitfish and leeches",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2025-12-08",
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
        "weedy bays and weed edges up the two river arms",
        "weedlines and inflows",
      ],
      bestSeason: "Late spring through summer",
      bodyCopy:
        "Pike rule the upper arms. Nothing on this reservoir gets observed more often, and the lake's own catch-and-release tournament — 33rd year in 2023 — hands out a prize for the longest one. They bury into the weed edges and vegetated bays and ambush the perch and shiners packed into the same cover. Weedlines and inflows fish best from late spring through summer, and because the shallow arms warm ahead of the main basin, the back of each arm wakes up first.",
      qualitySignal: null,
      lede:
        "Six kilometres per arm, and pike hunt most of it. Conestogo's two forks are drowned river valley — shallow, stained, quick to warm — stitched with the flooded, weedy shallows where northerns spawn earlier than anything else in the lake. By late spring the weedlines are set and the fish are parked on them. Start where vegetation meets open water and work toward the backs of the bays.",
      howItFishes:
        "Pike are the first fish moving each year. They spawn in the flooded, weedy shallows of the arms as soon as spring water pushes in, and by the second-Saturday-of-May opener they're already keyed on the new weed growth. From late spring through summer, weedlines and inflows carry the fishery: yellow perch school the green edges, common shiners run the same water, and the pike sit on the seams collecting both. The stained upper reaches stay productive even as the main basin stratifies — pike have no need for the deep, cool water near the dam. Two cautions, both about water level. Drawdown can pull the lake right off a vegetated bay, so treat any weedline as temporary and follow the green. And while the winter season runs January through March, that same drawdown makes reservoir ice unstable — no documented ice-fishing access exists here.",
      structureDetails: [
        {
          name: "Weedy bays and the stained upper reaches of the two river arms",
          detail:
            "The shallow, vegetated back-arm water up both drowned river channels — classic pike habitat, and where the lake's most-observed species spends the season. The arms warm ahead of the main basin, so this water comes alive first.",
        },
        {
          name: "Weedlines",
          detail:
            "The GRCA flags weedlines as productive from late spring through summer — the defined vegetation edges are the ambush seams to follow as growth fills in.",
        },
      ],
      speciesRules: [
        {
          rule: "Season: Jan 1–Mar 31 and second Saturday in May to Dec 31 (2026: May 9–Dec 31) — Limit: S-6 / C-2 — Size: no size limit",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2025-12-08",
        },
        {
          rule: "Waterbody exceptions: none — Conestogo Lake appears in neither the FMZ 16 exceptions nor sanctuaries lists; zone-wide regulations apply",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2025-12-08",
        },
        {
          rule: "Bait: FMZ 16 is within the Southern Bait Management Zone, which restricts transport of live/dead baitfish and leeches",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2025-12-08",
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
        "drowned Conestogo River channel and deep main basin",
        "river inflows at the arm heads",
        "basin points",
      ],
      bestSeason: "Late spring through summer, best in low light",
      bodyCopy:
        "Dawn and dusk belong to the walleye. Daytime, they ride the drowned Conestogo River channel and the deep main basin; when the light drops, they slide up the basin points to run down perch. Early spring sends them to the river inflows at the head of each arm, where current and gravel give them spawning ground. Summer stratifies the basin, so they sit deep and cool while the arms cook. Plan around the light — last hour of the evening, first hour of the morning.",
      qualitySignal: null,
      lede:
        "Nobody stocks these walleye — Fish ON-Line shows no record for the reservoir — so every fish in the drowned Conestogo River channel got there on its own, spawned on the gravel and current at the arm heads. That timing matters: the season closes mid-March and doesn't reopen until the second Saturday of May, a shut window that sits right on top of the spawn. When it reopens, the channel is where the search starts.",
      howItFishes:
        "Start with the water column. Conestogo's main basin stratifies in summer — the dam releases cold water off the bottom, which tells you a cool layer is down there — and the walleye use it, holding the drowned channel and deep basin through the bright hours. Low light flips the pattern onto the main-basin points, where the perch that fill the reservoir's weed edges become the menu. The stain helps too: walleye feed comfortably in the coloured water the arms send down-lake. Spring is an inflow story — current and gravel at the heads of both arms draw the spawners up before the season reopens in May — and by early summer the deep-basin game is on. A winter window runs January 1 to March 15, but the drawdown that moves summer fish also makes the ice untrustworthy, and no documented ice access exists.",
      structureDetails: [
        {
          name: "Drowned Conestogo River channel and main-lake basin, with river inflows at the arm heads",
          detail:
            "The deep, stained water along the old riverbed toward the dam is the daytime holding zone; the inflows at the top of each arm supply the current and gravel walleye need to spawn in early spring.",
        },
        {
          name: "Main-basin points",
          detail:
            "Points along the main-lake basin fish well in low light — the transition water walleye move onto when the sun is off the lake.",
        },
      ],
      speciesRules: [
        {
          rule: 'Season: Jan 1–Mar 15 and second Saturday in May to Dec 31 (2026: May 9–Dec 31) — Limit: S-4 / C-2, not more than 1 over 46 cm (18") (combined with Sauger)',
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2025-12-08",
        },
        {
          rule: "Waterbody exceptions: none — Conestogo Lake appears in neither the FMZ 16 exceptions nor sanctuaries lists; zone-wide regulations apply",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2025-12-08",
        },
        {
          rule: "Bait: FMZ 16 is within the Southern Bait Management Zone, which restricts transport of live/dead baitfish and leeches",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2025-12-08",
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
      label: "The actual regs, straight from the source — FMZ 16, Government of Ontario",
      url: "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
    },
    {
      label:
        "Launch, ramps, and reservoir status — Conestogo Lake Conservation Area, Grand River Conservation Authority",
      url: "https://www.grandriver.ca/outdoor-recreation/conservation-areas/conestogo-lake/",
    },
    {
      label: "Launch and day-use fees — GRCA Conestogo Lake area fees",
      url: "https://www.grandriver.ca/outdoor-recreation/conservation-areas/conservation-area-services-info-fees-and-more/conservation-area-fees/conestogo-lake-area-fees/",
    },
    {
      label: "Stocking record, FMZ 16 — Ontario Fish ON-Line",
      url: "https://www.lioapplications.lrc.gov.on.ca/services/FishONLine/StockingList.aspx?json=true&fmz=16&stock=AllSpecies&diagnostics=false&lang=en",
    },
  ],
  speciesCount: 3,
  lastVerified: "2026-07-18",
  factCheckStatus: "passed",
  regsGate: "passed",
};

export default conestogoLake;
