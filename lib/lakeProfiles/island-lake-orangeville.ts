import type { LakeProfile } from "./types";

// Stage 7 output — generated 2026-07-19 from the Bite Club-register copy
// (04-lake-copy.md / 04b-species-subguides.md, Stage 5 passed). All rendered
// content is carried verbatim from the verified substrate. Coordinates from the
// authoritative data/spots.json pin (not the Anglers Atlas angler-platform pin).
const islandLakeOrangeville: LakeProfile = {
  slug: "island-lake-orangeville",
  lake: "Island Lake",
  province: "Ontario",
  fmz: 16,
  waterbodyType: "reservoir",
  coordinates: { lat: 43.9273, lng: -80.0751 },
  morphology: {
    surfaceArea:
      "~180 ha (~443 acres); the conservation area is 300+ ha of lake, wetland and forest",
    maxDepth: "~20–22 ft (~6–6.7 m) in the eastern arm over the old kettle lake",
    meanDepth: null,
    clarity: null,
    trophicStatus: null,
    thermalBehaviour: null,
  },
  bestSeason:
    "Summer through fall for bass; pike and panfish best through the winter ice",
  overview:
    "Island Lake isn't so much a lake as a drowned cedar swamp with two dams holding it in place. Orangeville built it in 1967 to keep the Credit River flowing through dry spells, flooding a swamp, a thicket and a small kettle lake at the river's headwaters — and the fishery grew up around all that submerged wood. Most of the basin runs about six feet deep. The one real hole, twenty-plus feet, sits in the eastern arm over the old kettle lake, ringed by fallen trees and stumps that hold just about everything that swims here. Pike work the weed edges and wetland margins; largemouth and crappie bury in the east-end timber. It's paddle-and-electric water — gas motors are banned — with a trailer and hand launch at lot P1 and ten accessible piers on the south shore. Get in a boat and the whole basin opens up.",
  notableFacts: [
    {
      fact: "Man-made reservoir created in 1967 by two dams that flooded a cedar swamp, thicket and small kettle lake at the headwaters of the Credit River, to augment river low flows.",
      sourceUrl: "https://www.orangeville.ca/en/visit/island-lake.aspx",
    },
    {
      fact: "Shallow throughout — much of the lake is about six feet deep, with one deeper hole reaching roughly 20–22 feet in the eastern arm over the original kettle lake.",
      sourceUrl: "https://hikingthegta.com/2016/02/24/island-lake/",
    },
    {
      fact: "The east end holds extensive submerged and standing timber — fallen trees, logs and stumps — that shelters every species, alongside heavy weed growth through the shallows.",
      sourceUrl:
        "https://adventurefishing.ca/shop/fishing-map/southwestern-and-southern-ontario-fishing-maps/island-lake-southwestern-southern-ontario/",
    },
    {
      fact: "Northern Pike is the most angler-observed species on the reservoir (15 confirmations on Anglers Atlas, ahead of largemouth bass and yellow perch).",
      sourceUrl:
        "https://www.anglersatlas.com/place/124687/orangeville-reservoir",
    },
    {
      fact: "Hosts the annual Island Lake Ice Derby, with cash-prize categories for northern pike (2026 winning fish 825 mm), black crappie and yellow perch, plus a youth catfish category.",
      sourceUrl: "https://cvcfoundation.ca/island-lake-ice-derby",
    },
    {
      fact: "No provincial stocking record exists for the reservoir — its pike, largemouth and panfish are a self-sustaining, naturalized fishery.",
      sourceUrl:
        "https://www.lioapplications.lrc.gov.on.ca/services/FishONLine/StockingList.aspx?json=true&fmz=16&stock=AllSpecies&diagnostics=false&lang=en",
    },
  ],
  regulations: [
    {
      species: "Northern Pike",
      season: "January 1 to March 31 and second Saturday in May to December 31",
      limit: "S-6 / C-2",
      sizeLimit: "no size limit",
      sourceUrl:
        "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
      effectiveDate: "2025-12-08",
      verified: true,
    },
    {
      species: "Largemouth & Smallmouth Bass (combined)",
      season: "fourth Saturday in June to November 30",
      limit: "S-6 / C-2 (combined with Smallmouth Bass)",
      sizeLimit: "no size limit",
      sourceUrl:
        "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
      effectiveDate: "2025-12-08",
      verified: true,
    },
    {
      species: "Black Crappie",
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
      name: "Island Lake Conservation Area boat launch — parking lot P1",
      type: "trailer",
      notes:
        "Concrete surface and dock; $8 + HST (free with a Credit Valley Parks Pass). Gas-powered motors are not permitted on Island Lake (paddle or electric only). Fishing is by boat access only during park hours.",
      sourceUrl: "https://cvc.ca/explore-activities/canoeing-kayaking-boating/",
    },
    {
      name: "Island Lake Conservation Area walk-in / hand launch — parking lot P1",
      type: "carry-in",
      notes:
        "Free hand launch for canoes, kayaks and other hand-carried watercraft; paddlecraft and fishing-kayak rentals available seasonally.",
      sourceUrl: "https://cvc.ca/explore-activities/canoeing-kayaking-boating/",
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
        "eastern-arm timber (fallen trees, logs, stumps)",
        "weed beds, coves and island shallows",
      ],
      bestSeason: "Summer through fall, from the fourth-Saturday-of-June opener",
      bodyCopy:
        "Flood a cedar swamp and you build largemouth habitat by accident — which is exactly what happened here. Largemouth are the second most-caught fish, behind only the pike. The whole basin is cover: submerged and standing timber stacked in the east end, weed beds and quiet coves everywhere else. Bass bury in the wood over the lake's only real depth and prowl the pads and pockets when it warms. One catch — literally: CVC runs bass as catch-and-release on the property, so snap the photo and let it swim. Boat access only, and the east-end timber is where you start.",
      qualitySignal: null,
      lede:
        "The east-end timber is the largemouth address. Fallen trees, logs and stumps pile up over the lake's only real depth, and bass hold in the wood there and prowl the weed beds and coves everywhere else. Second only to pike in what anglers land here, largemouth get the run of a basin that is essentially wall-to-wall cover — the fishery a flooded cedar swamp was always going to grow.",
      howItFishes:
        "Think shallow and snaggy. The bass opener lands on the fourth Saturday of June, and from there largemouth work the submerged and standing timber in the eastern arm and the weed beds, pads and coves that fill the rest of the reservoir. The east-end wood is the anchor — it stacks cover against the only 20-plus-foot water on the lake — while summer heat spreads fish through the shallow vegetation. One rule shapes the whole trip: CVC runs largemouth as catch-and-release only on the property, and fishing is boat-access-only during park hours, so plan on releasing everything and launching a boat rather than working the bank. Gas motors are banned, so it's a paddle or electric game. No stocking here — the bass are naturalized.",
      structureDetails: [
        {
          name: "Eastern-arm timber (fallen trees, logs, stumps)",
          detail:
            "The submerged and standing wood at the east end over the deepest water — the reservoir's prime largemouth cover, holding fish where depth and structure meet.",
        },
        {
          name: "Weed beds, coves and island shallows",
          detail:
            "The extensive vegetation and quiet pockets across the flooded basin — warm-water bass cover that spreads fish out through summer.",
        },
      ],
      speciesRules: [
        {
          rule: "Season: fourth Saturday in June to November 30 — Limit: S-6 / C-2 (combined with smallmouth bass) — Size: no size limit",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2025-12-08",
        },
        {
          rule: "CVC property rule: largemouth bass is catch-and-release only, and fishing is by boat access only during hours of operation",
          sourceUrl: "https://cvc.ca/fishing-regulations/",
          effectiveDate: "2025-12-08",
        },
        {
          rule: "Shore fishing is permitted only on the south side (lots P1–P4); no fishing from bridges or dams",
          sourceUrl: "https://cvc.ca/explore-activities/fishing/",
          effectiveDate: "2025-12-08",
        },
      ],
      sources: [
        "https://www.anglersatlas.com/place/124687/orangeville-reservoir",
        "https://adventurefishing.ca/shop/fishing-map/southwestern-and-southern-ontario-fishing-maps/island-lake-southwestern-southern-ontario/",
      ],
    },
    {
      parentSlug: "northern-pike",
      displayName: "Northern Pike",
      tier: "destination",
      structure: [
        "weed edges, wetland margins and island shallows",
        "eastern-arm timber and the adjacent deep hole",
      ],
      bestSeason: "Early open water and through the winter ice",
      bodyCopy:
        "Nothing on this reservoir gets logged more than pike, and the winter derby proves it — the 2026 top fish taped out at 825 mm. They set up where the water goes shallow and green: weed edges, wetland margins, the skinny water around the islands, ambushing perch and shiners in the same cover. When it hardens over, the ice fishery takes over, and the fallen timber in the eastern arm and the 20-foot hole beside it give the bigger fish somewhere to sit. Come for the weeds early, drill the east arm in February.",
      qualitySignal:
        "Most angler-observed species (Anglers Atlas, 15 confirmations) and the flagship category of the annual Island Lake Ice Derby (2026 winning fish 825 mm)",
      lede:
        "Pike are the fish Island Lake is built for. A flooded cedar swamp with weed edges, wetland margins and skinny water around the islands is one long ambush line, and pike are the most angler-observed species on the reservoir. When the lake locks up, the winter derby crowns the biggest of them — the 2026 top fish stretched to 825 mm. Green water early, hard water in February.",
      howItFishes:
        "Start shallow and green. Through early open water, pike hold the weed edges, the wetland margins, and the island shallows, sitting in cover to ambush the perch and shiners that share it. As the season pushes on, the fallen timber in the eastern arm and the 20-foot hole beside it give the heavier fish a deeper option next to cover — the only real depth on an otherwise six-foot lake. Winter is the headline: this is the one CVC water that allows ice fishing, and pike are the derby's flagship category. Drill the east-arm timber and the deep hole once there's safe ice, and work the weed lines as soon as the season opens. No provincial stocking props this up — the population is self-sustaining.",
      structureDetails: [
        {
          name: "Weed edges, wetland margins and island shallows",
          detail:
            "The shallow, vegetated cover across most of the flooded basin — classic pike ambush water that fishes from ice-out through early open water.",
        },
        {
          name: "Eastern-arm timber and the adjacent deep hole",
          detail:
            "The fallen trees, logs and stumps at the east end sit beside the lake's only 20-plus-foot water, giving bigger pike depth and cover together — a prime cold-water and ice target.",
        },
      ],
      speciesRules: [
        {
          rule: "Season: January 1 to March 31 and second Saturday in May to December 31 — Limit: S-6 / C-2 — Size: no size limit",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2025-12-08",
        },
        {
          rule: "Ice fishing is only permitted from parking lot P1, once there is at least 5 inches of ice, in the accessible (non-restricted) zones",
          sourceUrl: "https://cvc.ca/explore-activities/fishing/",
          effectiveDate: "2025-12-08",
        },
        {
          rule: "Outside baitfish are banned; only baitfish bought at the Island Lake shop may be used, and FMZ 16 is within the Southern Bait Management Zone",
          sourceUrl: "https://cvc.ca/fishing-regulations/",
          effectiveDate: "2025-12-08",
        },
      ],
      sources: [
        "https://www.anglersatlas.com/place/124687/orangeville-reservoir",
        "https://cvcfoundation.ca/island-lake-ice-derby",
      ],
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
      structure: ["eastern-arm submerged timber and stumps"],
      bestSeason: "Best through the winter ice; open all year",
      bodyCopy:
        "Follow the wood. Crappie stack in the fallen trees and stumps at the east end, the same timber the bass and pike use, and they're a headline category in the Island Lake Ice Derby every winter. Cold water pulls them tight to the standing snags near the deeper arm, which makes the hard-water season the prime time to find a school — drill around the timber and stay mobile until you're on them. Open all year, but it's the ice that makes crappie worth the trip.",
      qualitySignal: null,
      lede:
        "Crappie live in the wood. The fallen trees and stumps in the eastern arm — the same timber the bass and pike use — are where slabs school up, and they are a headline category in the Island Lake Ice Derby every winter. On a lake with one real deep spot, the east-end snags next to that depth are the address worth learning. Find the timber, find the school.",
      howItFishes:
        "Crappie key on the submerged timber at the east end, holding tight to the fallen trees and stumps that sit beside the reservoir's only 20-plus-foot water. Cold water concentrates them, which is why the ice season is prime — this is the one CVC lake open to ice fishing, and crappie are a cash-prize derby category alongside pike and perch. Stay mobile: drill a spread of holes around the standing timber and the edge of the deep hole until you contact a school, then work it. The season is open all year, so the wood produces in open water too, but winter is when crappie are worth the trip. No stocking — the population is self-sustaining.",
      structureDetails: [
        {
          name: "Eastern-arm submerged timber and stumps",
          detail:
            "The fallen trees and stumps at the east end, beside the lake's deepest water — classic black-crappie holding cover and the best place to find a winter school.",
        },
      ],
      speciesRules: [
        {
          rule: "Season: open all year — Limit: S-30 / C-10 — Size: none",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2025-12-08",
        },
        {
          rule: "Ice fishing is only permitted from parking lot P1, once there is at least 5 inches of ice, in the accessible (non-restricted) zones",
          sourceUrl: "https://cvc.ca/explore-activities/fishing/",
          effectiveDate: "2025-12-08",
        },
      ],
      sources: [
        "https://adventurefishing.ca/shop/fishing-map/southwestern-and-southern-ontario-fishing-maps/island-lake-southwestern-southern-ontario/",
        "https://cvcfoundation.ca/island-lake-ice-derby",
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
        "Species, piers, ice-fishing rules and bait — Island Lake, Credit Valley Conservation",
      url: "https://cvc.ca/explore-activities/fishing/",
    },
    {
      label:
        "Launch, motor rules and paddlecraft rentals — CVC canoeing, kayaking and boating",
      url: "https://cvc.ca/explore-activities/canoeing-kayaking-boating/",
    },
    {
      label:
        "Island Lake Ice Derby details — Credit Valley Conservation Foundation",
      url: "https://cvcfoundation.ca/island-lake-ice-derby",
    },
    {
      label: "Stocking record, FMZ 16 — Ontario Fish ON-Line",
      url: "https://www.lioapplications.lrc.gov.on.ca/services/FishONLine/StockingList.aspx?json=true&fmz=16&stock=AllSpecies&diagnostics=false&lang=en",
    },
  ],
  speciesCount: 3,
  lastVerified: "2026-07-19",
  factCheckStatus: "passed",
  regsGate: "passed",
};

export default islandLakeOrangeville;
