import { lakeProfiles } from "@/lib/lakeProfiles";
import { absoluteUrl } from "@/lib/seo";
import { spots } from "@/lib/spots";

export const dynamic = "force-static";

function firstSentence(text: string): string {
  const trimmed = text.trim();
  const match = trimmed.match(/^.*?[.!?](?=\s|$)/);
  return (match ? match[0] : trimmed).trim();
}

// llms.txt — a curated, plain-text map of the site for LLMs and AI answer engines.
// Generated from the same data the pages use, so it never drifts. Lists the lake
// pages and core pages; thin species subpages are intentionally omitted.
export function GET() {
  const lakeLines = spots
    .map((spot) => {
      const profile = lakeProfiles[spot.id];
      const desc = profile
        ? firstSentence(profile.overview)
        : `${spot.name} fishing conditions by powerboat, kayak, and canoe.`;
      return `- [${spot.name} Fishing Conditions](${absoluteUrl(`/${spot.id}/fishing`)}): ${desc}`;
    })
    .join("\n");

  const body = `# Bite Club

> Bite Club gives Southern Ontario anglers today's on-water fishing and boating conditions, with a Prime/Marginal/Tough call and separate launch verdicts for powerboat, kayak, and canoe.

Bite Club reads the weather, the launch, and the shape of the lake itself, then hands anglers a straight answer before they leave the driveway: is the bite on, which shore fishes clean, and can you safely put a boat, kayak, or canoe on it today. Each grade blends launch conditions (wind and gusts adjusted for the lake's open-water fetch) with fish activity (air temperature, light, and pressure trend). It is a transparent, deterministic heuristic built on named government lake surveys, real weather models, and each lake's geometry — not an AI catch-probability guess. The tool also says when to stay home.

## Coverage

Southern Ontario, Fisheries Management Zone (FMZ) 16. Coverage starts in the Kitchener-Waterloo and Grand River watershed (Grand River Conservation Authority reservoirs) and expands outward across Southern Ontario — plus Conservation Halton lakes, Credit Valley (Island Lake), Grey County (Lake Eugenia, Saugeen River), and three reaches of the Grand River. Twenty waterbodies are live; a lake goes live only when there is real data behind it.

## Lakes & Rivers

${lakeLines}

## Key Pages

- [Today's Fishing Conditions](${absoluteUrl("/fishing")}): Map and browse of today's fishing and boating conditions across all covered Southern Ontario lakes and rivers.
- [About](${absoluteUrl("/about")}): Why Bite Club exists and how it produces an honest, lake-by-lake read before you launch.
- [FAQ](${absoluteUrl("/faq")}): How the forecast works, lake coverage, craft safety thresholds, access, and Ontario fishing regulations.
- [Safety Notice & Disclaimer](${absoluteUrl("/disclaimer")}): Conditions change quickly; check official forecasts and assess the water before launching.

## Notes

- Each lake page also links deeper species guides (e.g. smallmouth bass, walleye, northern pike) with tactics, structure, and regulation pointers.
- Regulations shown are dated convenience summaries of the Government of Ontario FMZ 16 rules, not the official source.
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" }
  });
}
