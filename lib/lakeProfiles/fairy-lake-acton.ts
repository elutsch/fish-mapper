import type { LakeProfile } from "./types";

// Stage 7 output — generated 2026-07-19 from the Bite Club-register copy
// (04-lake-copy.md / 04b-species-subguides.md, Stage 5 passed). All rendered
// content is carried verbatim from the verified substrate. Fairy Lake (Acton)
// is a small, shallow warm-water 1830 mill-pond impoundment; its species record
// rests on angler-contributed data (no MNR assessment), so no species tiers
// above Strong.
const fairyLakeActon: LakeProfile = {
  slug: "fairy-lake-acton",
  lake: "Fairy Lake",
  province: "Ontario",
  fmz: 16,
  waterbodyType: "reservoir",
  coordinates: { lat: 43.6321, lng: -80.0407 },
  morphology: {
    surfaceArea: "~26–27 ha (~67 acres)",
    maxDepth: null,
    meanDepth: "~1 m",
    clarity: "clear",
    trophicStatus:
      "Shallow, alkaline, productive (nutrient-rich, eutrophic-leaning) system dominated by aquatic plants",
    thermalBehaviour:
      "Too shallow (mean ~1 m) to stratify meaningfully; effectively a fully-mixed warm-water pond",
  },
  bestSeason:
    "Spring and summer — crappie sight-fishing peaks; largemouth and panfish through the open-water season",
  overview:
    "Fairy Lake is a mill pond that never drained. The Adams brothers dammed Black Creek in 1830 to run a flour and saw mill, and the shallow, weedy impoundment that backed up — roughly 26 hectares, averaging about a metre deep — still sits in the middle of Acton. Think warm, productive, plant-choked water, not a deep clear lake. Eurasian milfoil, stumps, and pondweed carpet the basin, and the fish live right in it: largemouth bass and black crappie stack in the north-end weed beds, with panfish and pike working the same cover. Your way in is Prospect Park — carry-in only, gas motors banned, so it's a canoe, kayak, or small aluminum boat game. One thing to square away before you launch: invasive round goby turned up here in 2024, and it's illegal to move them or use them as bait.",
  notableFacts: [
    {
      fact: "Historic 1830 mill-pond impoundment on Black Creek (Adams brothers' flour & saw mill); Prospect Park and Fairy Lake are slated for municipal heritage designation.",
      sourceUrl:
        "https://www.haltonhills.ca/en/news/acton-s-prospect-park-fairy-lake-slated-for-heritage-designation.aspx",
    },
    {
      fact: "Invasive round goby is confirmed present in Fairy Lake by Credit Valley Conservation (reported 2024); it is illegal in Canada to possess live round goby or use them as bait.",
      sourceUrl:
        "https://cvc.ca/conversations/small-fish-big-effect-invasive-round-goby/",
    },
    {
      fact: "Subject of a Fairy Lake Revival project — a 2023 Water Quality Study Update and a 2025 Implementation Plan covering a nutrient model plus phragmites and waterfowl management.",
      sourceUrl: "https://letstalkhaltonhills.ca/fairy-lake",
    },
    {
      fact: 'A community urban fishery that hosts the Mayor\'s Fishing Derby ("Go for the Goby").',
      sourceUrl: "https://letstalkhaltonhills.ca/fairy-lake",
    },
  ],
  regulations: [
    {
      species: "Largemouth Bass",
      season: "Fourth Saturday in June to November 30",
      limit: "S-6 / C-2 (combined with Smallmouth Bass)",
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
      name: "Prospect Park — carry-in / small-craft launch, Acton",
      type: "carry-in",
      notes:
        "Canoe/kayak/small aluminum boat access; gas-powered motors prohibited (paddle-craft / small craft only). Surrounding Prospect Park and Rotary Park parkland offers shore fishing, piers/docks, wheelchair-accessible access, and parking.",
      sourceUrl: "https://www.haltonhills.ca/en/explore-and-play/fairy-lake.aspx",
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
      tier: "strong",
      structure: [
        "north-end weed beds and submerged stumps",
        "lily-pad/weed flat near the Prospect Park launch",
      ],
      bestSeason: "Open-water season, late spring through fall",
      bodyCopy:
        "Largemouth own the salad here. This is the most-caught fish in the lake, and the reason is cover — the north-end weed beds, the submerged stumps, and the lily-pad flat off the Prospect Park launch hand a bass everything it wants in a shallow, warm pond. Work the weed edges and the pockets in the milfoil, where the fish bury in and ambush sunfish and shiners. From the late-spring opener through fall the pattern holds, because a metre-deep basin warms fast and stays green all season long.",
      qualitySignal: null,
      lede:
        "The north-end weed beds are the whole game for largemouth on Fairy Lake. This shallow, metre-deep mill pond is wall-to-wall cover — Eurasian milfoil, stonewort, hornwort, and pondweed, with a scatter of submerged stumps mixed through it — and the bass are the top predator parked in it. There's a lily-pad flat off the Prospect Park launch, too. Start in the salad and stay there.",
      howItFishes:
        "Largemouth here are a cover fish first and last. In a basin averaging about a metre deep, the water warms fast in spring and the whole lake greens up, so the bass never need to leave the vegetation. Work the weed edges, the pockets in the milfoil, and the timber where stumps break the bottom — the fish bury in and ambush the sunfish and shiners moving through the same cover. The open-water season runs from the fourth-Saturday-of-June bass opener through November 30, and the pattern holds across it: shallow, weedy, and green. Two lake-specific notes worth carrying. Gas motors are banned, so this is a paddle-craft and small-boat fishery — quiet approaches over shallow fish. And invasive round goby are now in the lake; you can't legally use them as bait, so leave them where they are.",
      structureDetails: [
        {
          name: "North-end weed beds and submerged stumps",
          detail:
            "The dominant cover in the pond — Eurasian milfoil, stonewort, hornwort, and pondweed carpet the north end, with submerged stumps mixed in. Largemouth relate to the weed edges and the timber, ambushing forage from inside the cover.",
        },
        {
          name: "Lily-pad / weed flat near the Prospect Park launch",
          detail:
            "A community-flagged pads-and-weeds area right off the carry-in launch — the convenient first stop for a shore or paddle angler, and a productive weedy edge in its own right.",
        },
      ],
      speciesRules: [
        {
          rule: "Season: fourth Saturday in June to November 30 — Limit: S-6 / C-2 (combined with Smallmouth Bass) — Size: none",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2025-12-08",
        },
        {
          rule: "Waterbody exceptions: none — Fairy Lake appears in neither the FMZ 16 exceptions nor sanctuaries lists; zone-wide regulations apply",
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
        "https://fishbrain.com/fishing-waters/GwgYrBFr/fairy-lake",
        "https://www.anglersatlas.com/place/158223/fairy-lake",
        "https://argosgirloutdoors.com/fishing-spots/",
      ],
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
      structure: ["north-end weed beds"],
      bestSeason: "Spring and summer, best sight-fishing in the north-end weeds",
      bodyCopy:
        "Come spring, the crappie give themselves away. They slide into the north-end weed beds and hold tight enough to sight-fish — spot one in the cover, drop on it, repeat — and the pattern carries through summer. Anglers who fish here rate the crappie the standout catch. Keep it subtle in the clear, shallow water: light line and small jigs worked slow along the weed edges. When the vegetation thickens in midsummer, hunt the open pockets and the outside line where the weeds break into cleaner water.",
      qualitySignal: null,
      lede:
        "Fairy Lake's crappie stack in the north-end weed beds, and in the clear, shallow water you can often spot them before you cast. Spring pulls them tight into the vegetation, where sight-fishing takes over — the productive window the anglers who fish here point to. It's the pattern that makes crappie the catch a lot of people come to this pond for.",
      howItFishes:
        "Crappie run on cover and light. In spring they move into the north-end weed beds to spawn and feed, holding tight enough in the clear, shallow water that sight-fishing is the play — spot a fish, put a small jig on its nose, move to the next. That bite carries through summer. As the milfoil and pondweed thicken in midsummer, the fish tuck deeper into the salad, so work the open pockets and the outside weed line where the vegetation breaks into cleaner water. Keep the presentation subtle: light line and small jigs, worked slow. Crappie season is open all year in FMZ 16, but the shallow, weed-choked north end is a spring-and-summer story — that's when the fish are shallow, grouped, and findable.",
      structureDetails: [
        {
          name: "North-end weed beds",
          detail:
            "The lake's best crappie water — the vegetated north end, where spring and summer crappie hold tight enough in the clear shallows to sight-fish. As summer vegetation thickens, the fish shift to the open pockets and the outer weed edge.",
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
          rule: "Waterbody exceptions: none — Fairy Lake appears in neither the FMZ 16 exceptions nor sanctuaries lists; zone-wide regulations apply",
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
        "https://www.anglersatlas.com/place/158223/fairy-lake",
        "https://argosgirloutdoors.com/fishing-spots/",
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
        "The lake, the dam, and the management plan — Fairy Lake project, Town of Halton Hills",
      url: "https://letstalkhaltonhills.ca/fairy-lake",
    },
    {
      label: "Prospect Park access and lake info — Town of Halton Hills",
      url: "https://www.haltonhills.ca/en/explore-and-play/fairy-lake.aspx",
    },
    {
      label:
        "Don't move the goby — invasive round goby in Fairy Lake, Credit Valley Conservation",
      url: "https://cvc.ca/conversations/small-fish-big-effect-invasive-round-goby/",
    },
  ],
  speciesCount: 2,
  lastVerified: "2026-07-19",
  factCheckStatus: "passed",
  regsGate: "passed",
};

export default fairyLakeActon;
