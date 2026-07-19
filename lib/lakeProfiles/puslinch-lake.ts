import type { LakeProfile } from "./types";

// Stage 7 output — generated 2026-07-19 from the Bite Club-register copy
// (04-lake-copy.md / 04b-species-subguides.md, Stage 5 passed). All rendered
// content is carried verbatim from the verified substrate. No live/conditions
// fields — the daily engine overlays those at request time.
const puslinchLake: LakeProfile = {
  slug: "puslinch-lake",
  lake: "Puslinch Lake",
  province: "Ontario",
  fmz: 16,
  waterbodyType: "natural-lake",
  coordinates: { lat: 43.452, lng: -80.2854 },
  morphology: {
    surfaceArea: "1.56 km² (156 ha / ~385 acres)",
    maxDepth: "5.5 m (~18 ft)",
    meanDepth: "1.4 m (~4.6 ft)",
    clarity: null,
    trophicStatus:
      "Eutrophic — algal blooms, low oxygen, and periodic fish kills",
    thermalBehaviour:
      "No documented stable thermocline (mean depth ~1.4 m); shallow and prone to eutrophic low-oxygen episodes and periodic fish kills (winterkill/summerkill risk)",
  },
  bestSeason: "Spring through fall",
  overview:
    "Puslinch Lake is a shallow weed bowl — the largest kettle lake in North America, and barely deep enough to earn the name. Mean depth runs about 1.4 m; most of it sits under two metres of stained, eutrophic water over a mud-and-silt bottom, with coontail, milfoil, and cabbage filling in the rest. There's one real hole, off McCormick's Point, and it's the only deep water the lake owns. Kettle-formed and spring-fed, it spills to the Grand River basin only when it runs high. This is a bass-and-pike fishery: largemouth own the weed flats and lily-pad bays, pike hunt the same shallows, and a stocked-legacy walleye remnant holds near McCormick's Point. One catch — getting on the water. The public boat launch closed in 2020, the shoreline is private, and the Travelled Road right-of-way is pedestrian-only. Sort out your access before you plan your day.",
  notableFacts: [
    {
      fact: "Largest kettle lake in North America",
      sourceUrl: "https://en.wikipedia.org/wiki/Puslinch_Lake",
    },
    {
      fact: "Hosts one of only a few known banded killifish populations in the entire Grand River basin",
      sourceUrl: "https://en.wikipedia.org/wiki/Puslinch_Lake",
    },
    {
      fact: "54 official stocking events 1946–1990 across six species, including more than 1.36 million walleye fry, fingerlings, and eggs from 1947–1979",
      sourceUrl:
        "https://services1.arcgis.com/TJH5KDher0W13Kgo/arcgis/rest/services/Historical_Fish_Stocking_Data/FeatureServer/0",
    },
    {
      fact: "The Puslinch Lake Conservation Association (founded 1997) has run a multi-decade restoration: walleye spawning stones placed off Harvey's Island in 1998, and dredging that removed more than 400,000 tons of sediment by 2023",
      sourceUrl: "https://www.myplca.com/lake-restoration",
    },
    {
      fact: "Northern pike were never stocked — they're believed to stem from an inadvertent 1950s introduction, and are now the lake's most-caught species",
      sourceUrl: "https://www.thefishinguide.com/puslinch_lake_ON.php",
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
  ],
  regsDisclaimer:
    "Regulations effective 2025-12-08, FMZ 16. This is a summary, not the legal regulation — confirm current rules with the official source before fishing.",
  launches: [],
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
      tier: "strong",
      structure: [
        "lake-wide shallow weed flats (coontail, milfoil, cabbage)",
        "lily-pad bays",
        "the 6–8 ft weed edge off the McCormick's Point basin",
      ],
      bestSeason: "Late-June opener through fall",
      bodyCopy:
        "Largemouth are the whole point here. It's a shallow weed bowl and they're in all of it — the coontail and milfoil flats, the lily-pad bays, the cabbage. Throw topwater early over the weeds, then work the edges as summer wears on. Come fall, they stack on the 6–8 ft weedline where the flats drop toward the McCormick's Point basin. Frogs and spinnerbaits in the pads, square-bills on the edge. If you got on the water, this is the fishery you came for.",
      qualitySignal: null,
      lede:
        "The lily-pad bays and rocky shoreline points are where the topwater game lives. Puslinch is a warm, stained, shallow kettle bowl — ideal largemouth water — and the fish spread across the whole weed community, from the coontail and milfoil flats to the cabbage. Early mornings, a frog dragged over the pads or a stickbait along the points draws the strike. It's the most abundant gamefish in the lake, and the shallows are the whole map.",
      howItFishes:
        "Start shallow and stay shallow — most of Puslinch is under two metres, so the entire lake is one big weed flat. From the fourth-Saturday-of-June opener, largemouth hold the coontail, milfoil, and cabbage lake-wide, ambushing bluegill, pumpkinseed, and young perch out of the salad. Fish topwater and spinnerbaits over the flats through summer, and frogs in the lily-pad bays when the water's warm. As fall cools the lake, the bass pull to the 6–8 ft weed edge where the flats drop toward the McCormick's Point basin — the one real depth change the lake has — and stack there with the pike, chasing baitfish before winter. This is a eutrophic lake prone to summer algae and low-oxygen episodes, so the fish live where the green cover and the forage are, not out over open water.",
      structureDetails: [
        {
          name: "Lake-wide shallow weed flats (coontail, milfoil, cabbage)",
          detail:
            "Most of Puslinch sits under two metres, so nearly the whole lake is one weed flat — the core largemouth habitat, holding fish and forage from the June opener through summer.",
        },
        {
          name: "The 6–8 ft weed edge off the McCormick's Point basin",
          detail:
            "Where the shallow flats drop toward the lake's one deep hole; fall-cooling bass stack on this weedline as the season winds down. (Angler-documented fall pattern.)",
        },
        {
          name: "Lily-pad bays and rocky shoreline points",
          detail:
            "The warm-months topwater zone — frogs over the pads and stickbaits along the points draw the strike. (Angler-documented.)",
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
          rule: "Waterbody exceptions: none — Puslinch Lake appears in neither the FMZ 16 exceptions nor sanctuaries lists; zone-wide regulations apply",
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
          rule: "Access: there has been no public boat launch since the McClintock's closure of July 14, 2020; the shoreline is private and the Travelled Road right-of-way is pedestrian-only — sort out legal access before fishing",
          sourceUrl:
            "https://www.wellingtonadvertiser.com/township-plans-to-improve-pedestrian-access-to-puslinch-lake/",
          effectiveDate: "2020-07-14",
        },
      ],
      sources: [
        "https://www.thefishinguide.com/puslinch_lake_ON.php",
        "https://adventurefishing.ca/shop/fishing-map/southwestern-and-southern-ontario-fishing-maps/puslinch-lake-southwestern-southern-ontario/",
        "https://fishbrain.com/fishing-waters/54vh8wPa/puslinch-lake",
      ],
    },
    {
      parentSlug: "northern-pike",
      displayName: "Northern Pike",
      tier: "strong",
      structure: [
        "shallow weedbeds (spring spawn)",
        "the 6–8 ft weed edge beside the deep basin (fall)",
        "lake-wide shallow weed cover",
      ],
      bestSeason: "Spring shallows into the fall weed-edge bite",
      bodyCopy:
        "By spring the pike are already in the shallows, spawning in the weedbeds and never really leaving the greenery — a northern fishery built by accident, seeded from a 1950s introduction that took the lake over. Dark spinnerbaits worked along the weed edges do the damage. When the water cools, they slide out with the largemouth to the 6–8 ft weedline off the deep basin and feed hard on perch and panfish. Most run two to five pounds, with the odd one pushing far bigger.",
      qualitySignal: null,
      lede:
        "Shallow weedbeds run this fishery from the first warm days of spring, when pike push into the vegetation to spawn and simply stay. Puslinch is wall-to-wall weed over a shallow, stained bowl, and the northerns — the most-logged fish on the lake — hold that cover all season. Work dark spinnerbaits along the weed edges where the greenery meets slightly more open water. Wherever the forage schools, the pike are parked on the seam.",
      howItFishes:
        "Pike are the first fish moving each year. They spawn in the shallow weedbeds as soon as spring water warms, and by the May opener they're keyed on the fresh growth — spring in the shallows is the peak. Through summer they hold the weed edges lake-wide, ambushing yellow perch, bluegill, and pumpkinseed packed into the same cover. When the lake cools in fall, they slide to the 6–8 ft weed edge off the McCormick's Point basin alongside the largemouth, feeding hard before winter. The winter season is open January through March, and the shallow weed flats hold pike through the ice — but with no public launch or shoreline access since the 2020 closure, there is no documented legal way onto the ice here, so treat winter as off-limits unless you have private access.",
      structureDetails: [
        {
          name: "Shallow weedbeds",
          detail:
            "The spring spawning ground and the season-long home cover — pike hold the vegetation across the shallow lake, and spring is the peak.",
        },
        {
          name: "The 6–8 ft weed edge beside the deep basin",
          detail:
            "The fall-transition seam off the McCormick's Point basin, where pike and largemouth pull together as the water cools. (Angler-documented.)",
        },
        {
          name: "Lake-wide shallow weed cover (through the ice)",
          detail:
            "In winter, pike stay in the shallow weed flats — but no documented public or legal ice access exists on the lake since the 2020 launch closure. (Angler-report; access caveat from 1a's Gotchas.)",
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
          rule: "Waterbody exceptions: none — Puslinch Lake appears in neither the FMZ 16 exceptions nor sanctuaries lists; zone-wide regulations apply",
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
          rule: "Access: the winter pike season is open (Jan 1–Mar 31), but with no public launch or shoreline access since the July 14, 2020 closure there is no documented legal winter/ice access — plan legal access before fishing",
          sourceUrl:
            "https://www.wellingtonadvertiser.com/township-plans-to-improve-pedestrian-access-to-puslinch-lake/",
          effectiveDate: "2020-07-14",
        },
      ],
      sources: [
        "https://www.thefishinguide.com/puslinch_lake_ON.php",
        "https://fishbrain.com/fishing-waters/54vh8wPa/puslinch-lake",
      ],
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
      label:
        "The actual regs, straight from the source — FMZ 16, Government of Ontario",
      url: "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
    },
    {
      label:
        "Where public access stands — Township of Puslinch access coverage, Wellington Advertiser",
      url: "https://www.wellingtonadvertiser.com/township-plans-to-improve-pedestrian-access-to-puslinch-lake/",
    },
    {
      label:
        "Lake restoration and stewardship — Puslinch Lake Conservation Association",
      url: "https://www.myplca.com/lake-restoration",
    },
    {
      label: "Official stocking record — MNRF Historical Fish Stocking Data",
      url: "https://services1.arcgis.com/TJH5KDher0W13Kgo/arcgis/rest/services/Historical_Fish_Stocking_Data/FeatureServer/0",
    },
  ],
  speciesCount: 2,
  lastVerified: "2026-07-19",
  factCheckStatus: "passed",
  regsGate: "passed",
};

export default puslinchLake;
