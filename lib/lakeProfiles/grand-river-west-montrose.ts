import type { LakeProfile } from "./types";

// Stage 7 output — generated 2026-07-20 from the Bite Club-register copy
// (04-lake-copy.md / 04b-species-subguides.md, Stage 5 passed). River reach, not
// a lake: lake-basin morphology fields are null by design. All rendered content
// is carried verbatim from the verified substrate.
const grandRiverWestMontrose: LakeProfile = {
  slug: "grand-river-west-montrose",
  lake: "Grand River at West Montrose",
  province: "Ontario",
  fmz: 16,
  waterbodyType: "river",
  coordinates: { lat: 43.5866, lng: -80.4824 },
  morphology: {
    surfaceArea: null,
    maxDepth: null,
    meanDepth: null,
    clarity: null,
    trophicStatus: null,
    thermalBehaviour: null,
  },
  bestSeason:
    "Late spring through fall; smallmouth best from the late-June bass opener",
  overview:
    "This is where the Grand quits being a trout river. Above West Montrose, the cold tailwater off the Shand Dam runs brown trout under artificial-lures-only rules; slide down under the covered bridge and the water warms, spreads out over 70-odd feet of rock and gravel, and the smallmouth take over. The reach is shallow and busy — riffles and rapids stacked against slow \"frog water\" and swampy backwaters, with deep pools and rock eddies punched in where the fast water lands. Smallmouth own the rock and the current seams; pike sit back in the slow stuff. There's no boat ramp here — you wade it or you carry a canoe in at the West Montrose access off Line 86. And mind the line just upstream: the special trout section ends right around the Highway 86 bridge, so know which side you're on.",
  notableFacts: [
    {
      fact: "West Montrose is the transition point where the Grand's cold brown-trout tailwater gives way to warmwater river — smallmouth bass become the dominant gamefish here and continue downstream.",
      sourceUrl:
        "https://www.grandriver.ca/outdoor-recreation/fishing/fishing-rivers-and-streams/",
    },
    {
      fact: "The reach runs under the West Montrose Covered Bridge — built 1880–1881 by John Bear, about 205 ft / 62 m over two spans of oak and white pine — the only remaining historic covered bridge in Ontario, a Provincial Historic Site with Ontario Heritage Act designation.",
      sourceUrl: "https://en.wikipedia.org/wiki/West_Montrose_Covered_Bridge",
    },
    {
      fact: "The Grand is a designated Canadian Heritage River; the West Montrose–to–Bridgeport reach is a documented warmwater fishery for smallmouth bass, northern pike, carp, and panfish.",
      sourceUrl:
        "https://www.grandriver.ca/outdoor-recreation/fishing/fishing-rivers-and-streams/",
    },
    {
      fact: "A public carry-in river access point (#204) opened at West Montrose (West Montrose Family Campground, 6344 Line 86), open mid-May to mid-October.",
      sourceUrl:
        "https://www.woolwich.ca/news/posts/grand-opening-of-a-new-river-access-point-in-west-montrose/",
    },
  ],
  regulations: [
    {
      species: "Smallmouth Bass",
      season: "fourth Saturday in June to Nov 30 (2026: Jun 27–Nov 30)",
      limit: "S-6 / C-2 (Largemouth and Smallmouth Bass combined)",
      sizeLimit: "no size limit",
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
  launches: [
    {
      name: "West Montrose river access point (#204) — West Montrose Family Campground, 6344 Line 86, West Montrose",
      type: "carry-in",
      notes:
        "Carry-in only (canoe/kayak/tube; wade access). Open mid-May to mid-October; ample parking; sign in at the campground front office. No trailer boat launch on this reach; the reach can run too low to paddle in summer.",
      sourceUrl:
        "https://www.woolwich.ca/news/posts/grand-opening-of-a-new-river-access-point-in-west-montrose/",
    },
  ],
  species: [
    {
      parentSlug: "smallmouth-bass",
      displayName: "Smallmouth Bass",
      tier: "strong",
      structure: [
        "riffles and rocky runs",
        "deep pools and rock eddies below the riffles",
        "deeper pools and runs toward the Conestogo confluence",
      ],
      bestSeason: "Late June bass opener through fall",
      bodyCopy:
        "Smallmouth are why the Grand matters here. Below the covered bridge the river runs shallow and rocky, and the bass camp on the current — tucked into rock eddies below the riffles, sitting in the deep pools where the fast water drops in, running down crayfish along the seams. West Montrose is the top of it: this is where the trout water ends and smallmouth stretch unbroken toward the Conestogo confluence and beyond. Work the fast-into-slow edges and the pool heads. From the late-June opener on, low summer flows only pack them tighter onto the rock that still holds current.",
      qualitySignal: null,
      lede:
        "West Montrose is the head of the smallmouth water. The trout tailwater ends near the Highway 86 bridge, and below the covered bridge the Grand goes shallow, rocky, and warm — 70-odd feet of riffle and run over gravel. From here the bass hold unbroken down toward the Conestogo confluence, camped on the current where the fast water meets the slow, waiting on crayfish washing through the rock.",
      howItFishes:
        "The pattern is a current-and-rock read. Smallmouth stack in the rock eddies just below each riffle and in the deep pools where the fast water drops in, using the seams to ambush crayfish and drifting forage. Work the fast-into-slow edges and the heads of the pools first. As the river warms through the season, the bass are the mainstay from the late-June opener onward; low summer flows shrink the holding water and pack more fish onto whatever rock still carries current. The deeper pools and runs downstream toward the Conestogo mouth hold the better numbers when the reach right at the bridge runs thin. It's wade-and-carry water — no ramp — so cover it on foot or from a canoe.",
      structureDetails: [
        {
          name: "Riffles and rocky runs",
          detail:
            "The shallow, rock-and-gravel current lanes through the reach — smallmouth relate to the rock and the moving water, and the rocky water near the bridges holds fish.",
        },
        {
          name: "Deep pools and rock eddies below the riffles",
          detail:
            "The prime holding water, where fast water drops into a pool or slacks behind rock and bass sit on the seams to ambush crayfish and drifting forage.",
        },
        {
          name: "Deeper pools and runs toward the Conestogo confluence",
          detail:
            "Downstream of the bridge the pools and runs deepen and hold better numbers of smallmouth — the fallback when the reach at West Montrose runs low.",
        },
      ],
      speciesRules: [
        {
          rule: "Season: fourth Saturday in June to Nov 30 (2026: Jun 27–Nov 30) — Limit: S-6 / C-2 (Largemouth and Smallmouth Bass combined) — no size limit",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2025-12-08",
        },
        {
          rule: 'Special-regs boundary just upstream: the upper-Grand artificial-lure-only, single-barbless-hook section ends "100 metres upstream of Highway 86 bridge," above the covered bridge — the covered-bridge reach follows zone defaults, but confirm which side of that line you are on before fishing upstream',
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
        "https://www.grandriver.ca/outdoor-recreation/fishing/fishing-rivers-and-streams/",
        "https://ontariotroutandsteelhead.com/fishing-the-grand-river-ontario/",
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
        'slow "frog water" flats and swampy backwaters',
        "pool tails and slack water off the main current",
      ],
      bestSeason: "Late spring through fall",
      bodyCopy:
        "Skip the rapids for pike — they want the slow stuff. Where the reach flattens into frog water and backs up into swampy margins, northerns lie in the slack and wait for whatever the current delivers: perch, suckers, a wandering smallmouth. This shallow, weedy-edged water is their kind of ambush, and it's exactly what sets West Montrose apart from the faster runs above the dam. Fish the seams where dead water meets moving water, and the pool tails where the river slows and drops off. Spring warms these flats first, so they wake up early.",
      qualitySignal: null,
      lede:
        "Pike take the water the bass don't want. Where the reach flattens into slow \"frog water\" and backs up into swampy margins, northerns lie in the slack and let the current bring dinner to them. This slow, weedy-edged water is what separates West Montrose from the fast trout runs above the dam — genuine river-pike ambush habitat, right below one of Ontario's last covered bridges.",
      howItFishes:
        "It's an edge game. Pike sit in the frog-water flats, the swampy backwaters, and the slack behind the pool tails, holding on the line where dead water meets moving water and ambushing perch, suckers, and stray smallmouth as they pass. Fish the seams and the slow tail-outs rather than the rapids. These shallow flats warm ahead of the faster water in spring, so they're among the first places to wake up, and they stay productive through the warm months. In low summer flow the slack water gets skinny and the fish concentrate on whatever backwater keeps a little depth. Winter isn't a documented fishery on this shallow flowing reach — there's no reliable ice here.",
      structureDetails: [
        {
          name: 'Slow "frog water" flats and swampy backwaters',
          detail:
            "The flat, slow, weedy-edged stretches and the swampy backs off the channel — the reach's core pike water, where they lie in the slack and ambush what the current delivers.",
        },
        {
          name: "Pool tails and slack water off the main current",
          detail:
            "The slower tail-outs of pools and the slack seams off the main flow, where pike hold below the riffles in the warmwater section.",
        },
      ],
      speciesRules: [
        {
          rule: "Season: Jan 1–Mar 31 and second Saturday in May to Dec 31 (2026: May 9–Dec 31) — Limit: S-6 / C-2 — no size limit",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2025-12-08",
        },
        {
          rule: 'Special-regs boundary just upstream: the artificial-lure-only, single-barbless-hook trout section ends "100 metres upstream of Highway 86 bridge," above the covered bridge; the covered-bridge reach follows zone defaults — confirm which side of that line you are fishing',
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
        "https://www.grandriver.ca/outdoor-recreation/fishing/fishing-rivers-and-streams/",
        "https://holmstromruddick.com/the-grand-river-of-southern-ontario-8-west-montrose-to-conestogo/",
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
        "Where the Grand fishes and how to reach it — Fishing Rivers and Streams, Grand River Conservation Authority",
      url: "https://www.grandriver.ca/outdoor-recreation/fishing/fishing-rivers-and-streams/",
    },
    {
      label: "The West Montrose carry-in river access — Township of Woolwich",
      url: "https://www.woolwich.ca/news/posts/grand-opening-of-a-new-river-access-point-in-west-montrose/",
    },
  ],
  speciesCount: 2,
  lastVerified: "2026-07-20",
  factCheckStatus: "passed",
  regsGate: "passed",
};

export default grandRiverWestMontrose;
