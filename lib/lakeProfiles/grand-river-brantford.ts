import type { LakeProfile } from "./types";

// Stage 7 output — generated 2026-07-20 from the Bite Club-register copy
// (04-lake-copy.md / 04b-species-subguides.md, Stage 5 passed). All rendered
// content is carried verbatim from the verified substrate. This is a flowing
// RIVER reach (the Paris-to-Brantford stretch of the Grand River at Brantford),
// so lake-only morphology fields are null. The reach is governed by the Grand
// River Paris-to-Brantford waterbody exception (catch-and-release, artificial
// lures, single barbless hook, spring sanctuary) — NOT the FMZ 16 zone-wide
// limits — for smallmouth bass, northern pike, and walleye.
const grandRiverBrantford: LakeProfile = {
  slug: "grand-river-brantford",
  lake: "Grand River at Brantford",
  province: "Ontario",
  fmz: 16,
  waterbodyType: "river",
  coordinates: { lat: 43.1391, lng: -80.2707 },
  morphology: {
    surfaceArea: null,
    maxDepth: null,
    meanDepth: null,
    clarity: "clear",
    trophicStatus: null,
    thermalBehaviour: null,
  },
  bestSeason:
    "Late spring through fall; smallmouth are the draw, catch-and-release only",
  overview:
    'The Grand River doesn\'t sit still at Brantford — it runs. This is the tail end of the Paris-to-Brantford stretch, a rock-and-gravel river the province calls "Exceptional Waters," where riffles break into runs and runs dig out pools between banks of Carolinian forest. Low-head Wilkes Dam splits the reach; the slack water below it stacks fish, and a marked portage carries paddlers around it. Smallmouth run this water — the most-logged fish on the Grand — and here they\'re catch-and-release only, artificial lures and a single barbless hook, a rule built to keep the fishery good. Walleye and pike work the deeper runs and the dam pool; channel catfish hold below the dam downstream. It\'s a wade-and-paddle reach — powerboats are out, too shallow. Get in at Brant Conservation Area off Jennings Road, above or below the dam.',
  notableFacts: [
    {
      fact: "The Grand River was designated a Canadian Heritage River in 1994; it's the longest river entirely within southwestern Ontario and supports more than 82 fish species.",
      sourceUrl: "https://chrs.ca/en/rivers/grand-river",
    },
    {
      fact: 'The Paris-to-Brantford stretch is a designated "Exceptional Waters Reach," named in part for the high quality of its fishing, and carries special provincial regulations.',
      sourceUrl:
        "https://www.grandriver.ca/outdoor-recreation/fishing/fishing-rivers-and-streams/",
    },
    {
      fact: "Under the FMZ 16 exception, brown trout, northern pike, rainbow trout, smallmouth bass and walleye are catch-and-release only (S-0 / C-0) from Paris to Brantford.",
      sourceUrl:
        "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
    },
    {
      fact: "Cold water entering from Whitemans Creek and springs, plus largely untouched Carolinian forest banks, help sustain the reach and host species at risk including black redhorse and river redhorse.",
      sourceUrl:
        "https://www.grandriver.ca/our-watershed/fisheries-management/exceptional-waters",
    },
  ],
  regulations: [
    {
      species: "Smallmouth Bass",
      season:
        "Grand River Paris-to-Brantford exception: fish sanctuary (no fishing) March 1 to the Friday before the fourth Saturday in April; artificial lures only, 1 barbless hook only",
      limit: "S-0 / C-0 (catch-and-release only)",
      sizeLimit: null,
      sourceUrl:
        "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
      effectiveDate: "2025-12-08",
      verified: true,
    },
    {
      species: "Northern Pike",
      season:
        "Grand River Paris-to-Brantford exception: fish sanctuary (no fishing) March 1 to the Friday before the fourth Saturday in April; artificial lures only, 1 barbless hook only",
      limit: "S-0 / C-0 (catch-and-release only)",
      sizeLimit: null,
      sourceUrl:
        "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
      effectiveDate: "2025-12-08",
      verified: true,
    },
    {
      species: "Walleye",
      season:
        "Grand River Paris-to-Brantford exception: fish sanctuary (no fishing) March 1 to the Friday before the fourth Saturday in April; artificial lures only, 1 barbless hook only",
      limit: "S-0 / C-0 (catch-and-release only)",
      sizeLimit: null,
      sourceUrl:
        "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
      effectiveDate: "2025-12-08",
      verified: true,
    },
  ],
  regsDisclaimer:
    "Regulations effective 2025-12-08, FMZ 16. This is a summary, not the legal regulation — confirm current rules with the official source before fishing. The Grand River Paris-to-Brantford catch-and-release exception applies upstream of the downtown Brantford pedestrian and service bridge; below it (Brantford to Lake Erie) FMZ 16 zone-wide limits apply — confirm which side you are fishing.",
  launches: [
    {
      name: "Brant Conservation Area — 119 Jennings Road, Brantford",
      type: "carry-in",
      notes:
        "Carry-in canoe/kayak entry points above and below Wilkes Dam, with a separate launch off the entry road reaching the river below the dam and a marked portage around Wilkes Dam. Powerboats and jet skis are prohibited (shallow water) — paddlecraft and shore/wading access only. Season roughly May 1 – Oct 15; day-use/park fees apply.",
      sourceUrl:
        "https://www.grandriver.ca/outdoor-recreation/conservation-areas/brant/",
    },
  ],
  species: [
    {
      parentSlug: "smallmouth-bass",
      displayName: "Smallmouth Bass",
      tier: "destination",
      structure: [
        "riffle-run-pool water over rock and gravel",
        "slack water and pools below Wilkes Dam",
        "the Exceptional Waters reach (Paris to Brantford)",
      ],
      bestSeason: "Late spring through fall, once the spring sanctuary lifts",
      bodyCopy:
        "This is the fish the reach is built around. The province drew a line from Paris to Brantford, called it Exceptional Waters, and locked the smallmouth to catch-and-release — the fishery you get is the payoff. They sit on the current seams where riffles pour into runs, hunting the rock and gravel, and they stack in the slack water below Wilkes Dam. Hook one in this kind of flow and it'll go airborne on you. It's the most-logged fish on the Grand for a reason. Artificial lures, one barbless hook, and everything goes back — that's the deal, and it's why they're still here.",
      qualitySignal:
        'Paris-to-Brantford "Exceptional Waters" provincial designation with special catch-and-release management; most-logged species on the Grand across angler-observation data (24 logs).',
      lede:
        'Rock, gravel, and moving water — that\'s the whole pitch. This reach is the downstream end of the Paris-to-Brantford "Exceptional Waters," a stretch the province wrote catch-and-release rules for specifically to protect the smallmouth. They hold on the current seams where riffles spill into runs and pile into the slack below Wilkes Dam. Most-logged fish on the Grand, and every one of them goes back.',
      howItFishes:
        "The reach reads like a ribbon of ambush points. Smallmouth key on the seams between fast and slow water — the tail of a riffle, the edge of a gravel bar, the soft water below Wilkes Dam where the dam breaks the gradient and concentrates fish. Cold water sliding in from Whitemans Creek and springs keeps the stretch honest through summer. The open window runs late spring through fall once the March-to-April sanctuary lifts; the artificial-lure, single-barbless-hook rule shapes how you fish it. Hook one in this current and it uses the flow against you — river smallmouth run and jump. Work upstream, cover the seams, and release clean. This is a fishery kept good on purpose, not by accident.",
      structureDetails: [
        {
          name: "Riffle-run-pool water over rock and gravel",
          detail:
            "The core smallmouth habitat through the Paris-to-Brantford reach — fish hold on the current seams and the edges of gravel bars where riffles pour into runs.",
        },
        {
          name: "Slack water and pools below Wilkes Dam",
          detail:
            "The low-head dam breaks the river's gradient and concentrates fish in the softer water below it — a documented shore-and-canoe spot.",
        },
        {
          name: "The Exceptional Waters reach (Paris to Brantford)",
          detail:
            "Designated in part for its fishing quality; cold-water input from Whitemans Creek and springs helps sustain the fishery along the whole stretch.",
        },
      ],
      speciesRules: [
        {
          rule: "Within the Grand River Paris-to-Brantford exception — Smallmouth Bass S-0 / C-0 (catch-and-release only); artificial lures only and 1 barbless hook only; fish sanctuary (no fishing) March 1 to the Friday before the fourth Saturday in April",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2025-12-08",
        },
        {
          rule: "Boundary: these rules apply upstream of the downtown Brantford pedestrian and service bridge; below it (Brantford to Lake Erie) FMZ 16 zone-wide bass limits apply — confirm which side you're on",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2025-12-08",
        },
        {
          rule: "Access: carry-in canoe/kayak or wade only — powerboats are prohibited (shallow); portage the marked route around Wilkes Dam",
          sourceUrl:
            "https://www.grandriver.ca/outdoor-recreation/conservation-areas/brant/",
          effectiveDate: "2026-07-20",
        },
      ],
      sources: [
        "https://www.grandriver.ca/our-watershed/fisheries-management/exceptional-waters",
        "https://www.grandriver.ca/outdoor-recreation/fishing/fishing-rivers-and-streams/",
        "https://www.anglersatlas.com/place/723165/grand-river",
      ],
    },
    {
      parentSlug: "largemouth-bass",
      displayName: "Largemouth Bass",
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
      tier: "strong",
      structure: [
        "slack water, pools, and weedy margins below Wilkes Dam",
        "slower, wider water toward Brantford-to-Caledonia",
      ],
      bestSeason: "Late spring through fall",
      bodyCopy:
        "Pike want the water the current doesn't touch. Below Wilkes Dam, where the flow slows and weed lines up along the margins, they lie off the seam and ambush whatever the river pushes past — the shore-and-canoe crowd at Brant Conservation Area targets them here. They're the second most-logged fish on this stretch, so presence isn't the question; finding the slack is. Work the soft edges of the dam pool and the slower bends. Same reach rules apply: barbless, artificial, and pike go back — S-0 / C-0.",
      qualitySignal: null,
      lede:
        "Pike play the off-current game. Where the Grand slows below Wilkes Dam and weed lines up along the margins, they hang off the seam and wait for the river to deliver. The shore-and-canoe anglers at Brant Conservation Area target them right here. Second most-logged fish on this stretch — so it's less about whether they're present and more about reading the slack water.",
      howItFishes:
        "Find the water the current isn't fighting. The dam pool below Wilkes Dam is the anchor — slow, deep enough, and lined with the weedy margins pike bury into before they crash out on passing forage. The slower, wider water down toward the Brantford-to-Caledonia stretch offers the same setup: soft edges, weed, and ambush lanes. Perch and other panfish schooling the quieter pools are the menu. Pike are documented here as a shore-and-canoe target, so you don't need a boat to reach them — just the soft edges of the dam pool and the slower bends. Reach rules ride along: artificial lures, single barbless hook, and every pike goes back on this stretch.",
      structureDetails: [
        {
          name: "Slack water, pools, and weedy margins below Wilkes Dam",
          detail:
            "A documented shore/canoe pike spot — the slow water off the current and the weedy edges give them ambush lanes.",
        },
        {
          name: "Slower, wider water toward Brantford-to-Caledonia",
          detail:
            "The varied-habitat, slow-moving stretch downstream holds pike along its soft edges and weed lines.",
        },
      ],
      speciesRules: [
        {
          rule: "Within the Grand River Paris-to-Brantford exception — Northern Pike S-0 / C-0 (catch-and-release only); artificial lures only and 1 barbless hook only; fish sanctuary (no fishing) March 1 to the Friday before the fourth Saturday in April",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2025-12-08",
        },
        {
          rule: "Boundary: these rules apply upstream of the downtown Brantford pedestrian and service bridge; below it FMZ 16 zone-wide pike limits (S-6 / C-2, no size limit) apply",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2025-12-08",
        },
        {
          rule: "Access: carry-in / shore access via Brant Conservation Area, above or below Wilkes Dam; powerboats prohibited",
          sourceUrl:
            "https://www.grandriver.ca/outdoor-recreation/conservation-areas/brant/",
          effectiveDate: "2026-07-20",
        },
      ],
      sources: [
        "https://www.grandriver.ca/outdoor-recreation/conservation-areas/brant/",
        "https://www.anglersatlas.com/place/723165/grand-river",
      ],
    },
    {
      parentSlug: "walleye",
      displayName: "Walleye",
      tier: "strong",
      structure: [
        "deeper runs and pools, and the slack water below Wilkes Dam",
        "the reach as part of the lower-Grand walleye fishery",
      ],
      bestSeason: "From the May opener through the November bass close",
      bodyCopy:
        "Chase the low light and the depth. Walleye ride the deeper runs and the pool below the dam, sliding up to feed when the sun's off the water — the classic river-walleye read. This is part of the noted lower-Grand walleye fishery that switches on at the May opener and rides through to the end of bass season in November. The dam break is your first stop; the deeper bends downstream are the next. And like everything else in this reach, it's catch-and-release — S-0 / C-0, single barbless hook, artificials only.",
      qualitySignal: null,
      lede:
        "Depth and low light — that's the walleye read on this reach. They ride the deeper runs and the pool below Wilkes Dam, sliding shallow to feed when the sun's off the water. This is part of the lower-Grand walleye fishery that switches on at the May opener and rides through to the end of bass season in November. The dam break is the first place to look.",
      howItFishes:
        "Walleye work the seams and the deep. Daytime, they sit in the deeper runs and the pool below Wilkes Dam where the water carries some depth and colour; as the light drops, they move up onto the current edges to run down forage. The lower-Grand walleye fishery opens at the second-Saturday-of-May date and stays live through the November bass close, so the productive window is long — but the reach also sits under a spring sanctuary that shuts fishing entirely from March into April. Start at the dam pool, then work the deeper bends downstream. Low light does the heavy lifting: first and last hour move the most fish. And like everything on this stretch, walleye are catch-and-release — artificial lures and one barbless hook.",
      structureDetails: [
        {
          name: "Deeper runs and pools, and the slack water below Wilkes Dam",
          detail:
            "The daytime holding water — walleye favour the deeper, lower-light water and the break in gradient the dam creates.",
        },
        {
          name: "The reach as part of the lower-Grand walleye fishery",
          detail:
            "A noted walleye stretch that opens in May and fishes through the November bass close.",
        },
      ],
      speciesRules: [
        {
          rule: "Within the Grand River Paris-to-Brantford exception — Walleye S-0 / C-0 (catch-and-release only); artificial lures only and 1 barbless hook only; fish sanctuary (no fishing) March 1 to the Friday before the fourth Saturday in April",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2025-12-08",
        },
        {
          rule: "Boundary: these rules apply upstream of the downtown Brantford pedestrian and service bridge; below it FMZ 16 zone-wide walleye limits (S-4 / C-2, not more than 1 over 46 cm) apply",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2025-12-08",
        },
        {
          rule: "Access: carry-in canoe/kayak or shore/wading at Brant Conservation Area; powerboats prohibited; portage the marked route around Wilkes Dam",
          sourceUrl:
            "https://www.grandriver.ca/outdoor-recreation/conservation-areas/brant/",
          effectiveDate: "2026-07-20",
        },
      ],
      sources: [
        "https://www.grandriver.ca/outdoor-recreation/conservation-areas/brant/",
        "https://driftoutfitters.com/blogs/river-resources/grand-river-lower-section",
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
      label:
        "The actual regs, straight from the source — FMZ 16, Government of Ontario",
      url: "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
    },
    {
      label:
        "The Exceptional Waters reach and why it's catch-and-release — Grand River Conservation Authority",
      url: "https://www.grandriver.ca/our-watershed/fisheries-management/exceptional-waters",
    },
    {
      label:
        "Access, portage around Wilkes Dam, and park hours — Brant Conservation Area, GRCA",
      url: "https://www.grandriver.ca/outdoor-recreation/conservation-areas/brant/",
    },
    {
      label: "Fishing the Grand's rivers and streams — GRCA",
      url: "https://www.grandriver.ca/outdoor-recreation/fishing/fishing-rivers-and-streams/",
    },
  ],
  speciesCount: 3,
  lastVerified: "2026-07-20",
  factCheckStatus: "passed",
  regsGate: "passed",
};

export default grandRiverBrantford;
