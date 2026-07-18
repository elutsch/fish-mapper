import type { LakeProfile } from "./types";

const guelphLake: LakeProfile = {
  slug: "guelph-lake",
  lake: "Guelph Lake",
  province: "Ontario",
  fmz: 16,
  waterbodyType: "reservoir",
  coordinates: { lat: 43.6123454, lng: -80.2508237 },
  morphology: {
    surfaceArea: "~178.7 ha (Anglers Atlas; ~240 ha at full pool per GRCA)",
    maxDepth: null,
    meanDepth: null,
    clarity: "stained",
    trophicStatus: null,
    thermalBehaviour: null,
  },
  bestSeason:
    "Summer for smallmouth; spring through fall for largemouth and pike over the weeds; four-season, including GRCA ice fishing for pike, perch, and crappie",
  overview:
    "Guelph Lake is a mid-sized flood-control reservoir on the Speed River north of Guelph, impounded behind the Guelph Dam and managed by the Grand River Conservation Authority. Its stained, weed-rich water runs shallow through the vegetated river arms and back bays and deepens toward the dam basin, and that split defines the fishery: largemouth and pike hold in the weedy bays while smallmouth relate to the harder, deeper structure toward the dam. Wellington Rd 124 divides the lake, with the larger western basin inside the Guelph Lake Conservation Area. This is a quiet-water fishery — electric trolling motors only, with outboards and personal watercraft banned — launched from the conservation area ramps off Conservation Drive. Reservoir levels are drawn down through autumn and refilled in spring, which moves fish and exposes structure late in the season.",
  notableFacts: [
    {
      fact: "Guelph Lake is one of the main flood-control reservoirs on the Speed River; GRCA states its dams (Guelph, Shand, Conestogo) can reduce downstream flood peaks by 50%+ in communities like Kitchener, Cambridge, and Guelph",
      sourceUrl:
        "https://www.grandriver.ca/our-watershed/dams-and-reservoirs/grca-dams/",
    },
    {
      fact: "Smallmouth bass is the single most-logged species on the lake (Fishbrain: 173 anglers)",
      sourceUrl: "https://fishbrain.com/fishing-waters/glRE4oS7/guelph-lake",
    },
    {
      fact: "Electric-motor-only, PWC-banned reservoir — the quiet-water restriction produces a low-pressure, sail/paddle-friendly fishery distinct from typical outboard lakes",
      sourceUrl:
        "https://www.grandriver.ca/outdoor-recreation/conservation-areas/guelph-lake/",
    },
    {
      fact: "Guelph Lake is an officially sanctioned GRCA winter ice-fishing water (pike, perch, crappie) — a four-season fishery",
      sourceUrl:
        "https://www.grandriver.ca/outdoor-recreation/fishing/ice-fishing/",
    },
    {
      fact: "The dam includes a small 100 kW hydroelectric facility",
      sourceUrl: "https://en.wikipedia.org/wiki/Guelph_Lake",
    },
  ],
  regulations: [
    {
      species: "Smallmouth & Largemouth Bass (combined)",
      season: "fourth Saturday in June to November 30",
      limit: "S-6 / C-2",
      sizeLimit: "none",
      sourceUrl:
        "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
      effectiveDate: "2026-01-01",
      verified: true,
    },
    {
      species: "Northern Pike",
      season:
        "January 1 to March 31, and second Saturday in May to December 31",
      limit: "S-6 / C-2",
      sizeLimit: "none",
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
      name: "Guelph Lake Conservation Area boat launches — 7743 Conservation Drive, Guelph",
      type: "trailer-and-carry-in",
      notes:
        "Trailer-capable ramps: four boat launches reported on the CA page (three with docks); GRCA fishing page states three ramps, two with docks — electric trolling motors ONLY; outboard motors and personal watercraft (Jet Ski, Sea-Doo, Jet Boards) strictly prohibited — kayaks rentable — day-use/park fee applies.",
      sourceUrl:
        "https://www.grandriver.ca/outdoor-recreation/conservation-areas/guelph-lake/",
    },
    {
      name: "East-side carry-in access (off Wellington Rd 29)",
      type: "carry-in",
      notes:
        "The portion of the lake east of Wellington Rd 124 can be reached off Wellington Rd 29 via a well-worn path to a small canoe/kayak launch area (outside the main CA). Source: angler report — user-contributed.",
      sourceUrl:
        "https://www.grandriver.ca/outdoor-recreation/conservation-areas/guelph-lake/",
    },
  ],
  species: [
    {
      parentSlug: "smallmouth-bass",
      displayName: "Smallmouth Bass",
      tier: "strong",
      structure: [
        "deeper main-lake basin and structure toward the Guelph Dam, hard/rubble shoreline in the conservation-area basin",
      ],
      bestSeason: "Summer is the prime window",
      bodyCopy:
        "Smallmouth are the single most-logged species on Guelph Lake (Fishbrain: 173 anglers), and they hold on the harder, deeper structure toward the dam basin rather than in the weedy back bays. Through the warm summer months they relate to that deep-water structure and to the rubble shoreline of the conservation-area basin west of Wellington Rd 124, where fan-casting the hard edges produces. As the reservoir draws down through autumn, expect fish to concentrate on the remaining hard structure as the weedy shallows pull back.",
      qualitySignal: null,
      lede: "Guelph Lake's smallmouth sort themselves to the hard side of a split lake: the deeper main body toward the Guelph Dam and the rubble shoreline of the conservation-area basin west of Wellington Rd 124, not the weedy back bays the largemouth own. Angler reports call the lake \"smallmouth heaven\" in summer, and Fishbrain ranks it the single most-logged species here across 173 anglers.",
      howItFishes:
        "Summer is the prime window. Smallmouth relate to the deeper main-lake structure toward the dam arm and to the hard, rubble shoreline in the conservation-area basin, keying on the forage a stained warmwater reservoir holds. Fan-casting the hard shoreline edges is the documented pattern, and the deeper dam-basin structure holds fish through the warm months. As Guelph Lake draws down through autumn on its flood-control cycle, the weedy shallows pull back and fish concentrate on the remaining hard structure, so late-season water reads lower and changes the shoreline you're working. No public bathymetry names specific shoals or drop-offs, so plan around the two documented structure types rather than depth numbers.",
      structureDetails: [
        {
          name: "Reservoir main body / deep-water structure toward the dam arm",
          detail:
            "The deeper water toward the Guelph Dam holds summer smallmouth, with angler reports describing trophy fish over 50 cm relating to this deep-water structure. Avoid the dam face itself — angler maps flag it as hazardous.",
        },
        {
          name: "Conservation-area (west) basin",
          detail:
            "The larger western basin inside the Guelph Lake Conservation Area, west of Wellington Rd 124, where hard/rubble shoreline fan-casting produces; GRCA lists both bass species in these waters.",
        },
      ],
      speciesRules: [
        {
          rule: "Smallmouth & Largemouth Bass (combined) — Season: fourth Saturday in June to November 30; Limit: S-6 / C-2; Size: none",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2026-01-01",
        },
        {
          rule: "Bait: FMZ 16 is in the Southern Bait Management Zone — live or dead baitfish and leeches may not be transported into or out of the zone (preserved baitfish permitted)",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2026-01-01",
        },
        {
          rule: "Access: Electric trolling motors only — outboards and personal watercraft are prohibited; launch from the Guelph Lake Conservation Area ramps off Conservation Drive (day-use fee)",
          sourceUrl:
            "https://www.grandriver.ca/outdoor-recreation/conservation-areas/guelph-lake/",
          effectiveDate: "2026-01-01",
        },
      ],
      sources: [
        "https://fishbrain.com/fishing-waters/glRE4oS7/guelph-lake",
        "https://www.grandriver.ca/outdoor-recreation/conservation-areas/guelph-lake/",
      ],
    },
    {
      parentSlug: "largemouth-bass",
      displayName: "Largemouth Bass",
      tier: "strong",
      structure: [
        "weedy back bays and shallow vegetated river-arm flats, largely the eastern portion of the lake",
      ],
      bestSeason: "Spring through fall over the weeds",
      bodyCopy:
        "Largemouth live in the shallow, weed-choked water of Guelph Lake's back bays and river-arm flats, concentrated toward the warmer eastern portion of the lake off Wellington Rd 124. Spinnerbaits and crankbaits worked over the mid-water weeds take both largemouth and pike here. This warm, stained reservoir with extensive shallow weed cover is a strong largemouth fit, and the species ranks among the top three most-reported on the lake. Fish the vegetated flats and bay edges through the open-water season.",
      qualitySignal: null,
      lede: "Largemouth own the weedy east end of Guelph Lake — the shallow, weed-choked back bays and vegetated river-arm flats off Wellington Rd 124, opposite the harder dam-basin water the smallmouth work. This warm, stained reservoir with extensive shallow weed cover is a textbook largemouth fit, and the species ranks among the top three most-reported on the lake (Fishbrain: 123 anglers).",
      howItFishes:
        "Largemouth hold in the shallow, weed-choked water of the back bays and river-arm flats, concentrated toward the warmer eastern portion of the lake. Fish the vegetated flats and bay edges through the open-water season, spring through fall — spinnerbaits and crankbaits worked over the mid-water weeds take both largemouth and the pike that share this cover. Bass season opens the fourth Saturday in June, after the late-May-to-June spawn in the shallow warm bays. The reservoir's autumn drawdown pulls water off the weedy shallows late in the season, so the flats you fished in summer read lower by fall. The eastern arm is reached by carry-in off Wellington Rd 29 rather than the main conservation-area ramps.",
      structureDetails: [
        {
          name: "Weedy bays and the eastern arm",
          detail:
            "Largemouth dominate the weedy back-bay water to the east of the lake; anglers report fishing \"a very weedy bay,\" with spinnerbaits and crankbaits producing mid-water bass and pike over the weeds.",
        },
        {
          name: "Shallow vegetated river-arm flats (upper/east end off Wellington Rd 124/29)",
          detail:
            "Warm, shallow, weed-choked water on the east side that matches largemouth habitat through the open-water season.",
        },
      ],
      speciesRules: [
        {
          rule: "Smallmouth & Largemouth Bass (combined) — Season: fourth Saturday in June to November 30; Limit: S-6 / C-2; Size: none",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2026-01-01",
        },
        {
          rule: "Bait: FMZ 16 is in the Southern Bait Management Zone — live or dead baitfish and leeches may not be transported into or out of the zone (preserved baitfish permitted)",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2026-01-01",
        },
        {
          rule: "Access: The eastern, weedy portion of the lake sits east of Wellington Rd 124 and is reached off Wellington Rd 29 by a carry-in path to a small canoe/kayak launch, outside the main conservation area",
          sourceUrl:
            "https://www.grandriver.ca/outdoor-recreation/conservation-areas/guelph-lake/",
          effectiveDate: "2026-01-01",
        },
      ],
      sources: [
        "https://fishbrain.com/fishing-waters/glRE4oS7/guelph-lake",
        "https://www.grandriver.ca/outdoor-recreation/conservation-areas/guelph-lake/",
      ],
    },
    {
      parentSlug: "northern-pike",
      displayName: "Northern Pike",
      tier: "strong",
      structure: [
        "weed beds and weed edges lake-wide, shallow weedy river arms and back bays",
      ],
      bestSeason:
        "Spring through fall over the weeds; also a winter ice-fishing target",
      bodyCopy:
        "Pike are the second-most-reported species on the lake (Fishbrain: 146 anglers) and ambush from the weed edges and vegetated bays that dominate Guelph Lake's shallow upper end. They take spinnerbaits and crankbaits worked over the mid-water weeds, sharing that structure with largemouth. The shallow weedy river arms give classic pike habitat, and GRCA runs the lake as an official winter ice-fishing water, where pike feed along the weed edges under the ice. Work the weedlines and bay mouths through the open-water season.",
      qualitySignal: null,
      lede: "Pike ambush from the weed edges and vegetated bays that dominate Guelph Lake's shallow upper end, sharing the same mid-water weed cover the largemouth work. They're the second-most-reported species on the lake, logged by 146 anglers on Fishbrain, and GRCA runs Guelph as an official ice-fishing water — pike here are a genuine four-season target rather than an open-water-only fish that goes quiet once the lake locks up.",
      howItFishes:
        "Pike hold on weed beds and weed edges lake-wide and stack in the shallow weedy river arms and back bays — classic ambush habitat in the reservoir's vegetated upper end. Through the open-water season, spring through fall, work the weedlines and bay mouths; spinnerbaits and crankbaits over the mid-water weeds take pike alongside largemouth. Perch are the primary forage they key on. Pike spawn early, right after ice-out in the shallow vegetated bays, and the open-water season runs from the second Saturday in May. In winter, GRCA monitors the ice and pike feed along the weed edges under it — but there are no bait sales or hut rentals on site. The autumn drawdown lowers the weedy shallows late in the year, shifting the edges you fish.",
      structureDetails: [
        {
          name: "Weed beds / weed edges lake-wide",
          detail:
            "Pike are taken over mid-water weed structure on spinnerbaits and crankbaits across the lake; they're among the most-confirmed species here (Fishbrain: 146 anglers) and feed along these weed edges under the ice in winter.",
        },
        {
          name: "Shallow weedy river arms and back bays",
          detail:
            "Ambush habitat in the reservoir's shallow vegetated upper end, consistent with GRCA listing pike as both a target and a winter ice-fishing species.",
        },
      ],
      speciesRules: [
        {
          rule: "Northern Pike — Season: January 1 to March 31, and second Saturday in May to December 31; Limit: S-6 / C-2; Size: none",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2026-01-01",
        },
        {
          rule: "Bait: FMZ 16 is in the Southern Bait Management Zone — live or dead baitfish and leeches may not be transported into or out of the zone (preserved baitfish permitted)",
          sourceUrl:
            "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
          effectiveDate: "2026-01-01",
        },
        {
          rule: "Access: Guelph Lake is an official GRCA ice-fishing reservoir for pike when ice is monitored safe; no bait sales or hut rentals on site",
          sourceUrl:
            "https://www.grandriver.ca/outdoor-recreation/fishing/ice-fishing/",
          effectiveDate: "2026-01-01",
        },
      ],
      sources: [
        "https://fishbrain.com/fishing-waters/glRE4oS7/guelph-lake",
        "https://www.grandriver.ca/outdoor-recreation/conservation-areas/guelph-lake/",
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
      label: "FMZ 16 fishing regulations",
      url: "https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-16",
    },
    {
      label: "FMZ 16 Sport Fishing Variation Order (waterbody exceptions)",
      url: "https://www.ontario.ca/page/sport-fishing-variation-order-fisheries-management-zone-16",
    },
    {
      label:
        "Guelph Lake Conservation Area — boat launches, electric-only rule, park season",
      url: "https://www.grandriver.ca/outdoor-recreation/conservation-areas/guelph-lake/",
    },
    {
      label: "GRCA ice fishing (Guelph Lake: pike, perch, crappie)",
      url: "https://www.grandriver.ca/outdoor-recreation/fishing/ice-fishing/",
    },
  ],
  speciesCount: 3,
  lastVerified: "2026-07-18",
  factCheckStatus: "passed",
  regsGate: "passed",
};

export default guelphLake;
