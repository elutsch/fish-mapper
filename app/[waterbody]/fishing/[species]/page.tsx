import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSpeciesCard } from "@/app/components/SpeciesCards";
import { getLakeProfile, lakeProfiles } from "@/lib/lakeProfiles";
import type { LakeProfile, LakeProfileSpecies } from "@/lib/lakeProfiles/types";
import { regsSummary } from "@/lib/format";
import { absoluteUrl, speciesIsIndexable } from "@/lib/seo";
import { formatSpeciesName, speciesPathSegment } from "@/lib/species";

type PageProps = {
  params: Promise<{ waterbody: string; species: string }>;
};

// Fully static; regenerated once daily by the /api/cron/fishing job (revalidatePath).
export const revalidate = false;

export function generateStaticParams() {
  return Object.values(lakeProfiles).flatMap((profile) =>
    profile.species
      .filter((species) => species.tier !== "absent")
      .map((species) => ({
        waterbody: profile.slug,
        species: speciesPathSegment(species.displayName)
      }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { waterbody, species: speciesSlug } = await params;
  const profile = getLakeProfile(waterbody);
  const species = profile ? findSpecies(profile, speciesSlug) : undefined;
  if (!profile || !species) return {};

  const speciesName = formatSpeciesName(species.displayName);
  const canonical = `/${profile.slug}/fishing/${speciesPathSegment(species.displayName)}`;
  const title = `${speciesName} Fishing at ${profile.lake}`;
  const description = truncateForMeta(
    species.lede ?? species.bodyCopy ?? `${speciesName} fishing profile for ${profile.lake}.`,
    200
  );
  // Thin (present-tier) species pages render noindex,follow to keep them out of the
  // index while still passing link equity; destination/strong pages stay indexable.
  const indexable = speciesIsIndexable(species.tier);

  return {
    title,
    description,
    alternates: { canonical },
    robots: indexable ? undefined : { index: false, follow: true },
    openGraph: {
      title: `${title} | Bite Club`,
      description,
      url: canonical
    }
  };
}

export default async function LakeSpeciesPage({ params }: PageProps) {
  const { waterbody, species: speciesSlug } = await params;
  const profile = getLakeProfile(waterbody);
  if (!profile) notFound();

  const species = findSpecies(profile, speciesSlug);
  if (!species || species.tier === "absent") notFound();

  const card = getSpeciesCard(species.displayName);
  const speciesName = formatSpeciesName(species.displayName);
  const primaryStructure = species.structureDetails?.[0] ?? null;
  const lede =
    species.lede ??
    (species.bodyCopy ? firstSentences(species.bodyCopy, 2) : null) ??
    `${speciesName} is confirmed present in the ${profile.lake} research profile.`;
  const howItFishes = species.howItFishes ?? species.bodyCopy ?? null;
  const howItFishesParagraphs = howItFishes ? toParagraphs(howItFishes) : null;

  // Numbered panels are built in order and only when they carry content, so the
  // 01/02/03 eyebrows stay contiguous the way the waterbody profile page reads.
  const panels: { title: string; body: React.ReactNode }[] = [];

  panels.push({
    title: "How it fishes",
    body: howItFishesParagraphs ? (
      <>
        {howItFishesParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </>
    ) : (
      <p>
        This species is present in the research profile, but there is not enough lake-specific
        evidence yet for a detailed tactical guide.
      </p>
    )
  });

  if (species.structureDetails?.length) {
    panels.push({
      title: "Structure",
      body: (
        <div className="structure-list">
          {species.structureDetails.map((structure) => (
            <div key={structure.name}>
              <strong>{structure.name}</strong>
              <p>{structure.detail}</p>
            </div>
          ))}
        </div>
      )
    });
  }

  if (species.speciesRules?.length) {
    panels.push({
      title: "Regulations",
      body: (
        <>
          <p className="profile-disclaimer">{regsSummary(profile.regsDisclaimer)}</p>
          <div className="species-rules">
            {species.speciesRules.map((rule) => (
              <a key={rule.rule} href={rule.sourceUrl} target="_blank" rel="noreferrer">
                {rule.rule}
              </a>
            ))}
          </div>
        </>
      )
    });
  }

  if (species.sources.length) {
    panels.push({
      title: "Sources",
      body: (
        <div className="resource-list">
          {species.sources.map((source) => (
            <a key={source} href={source} target="_blank" rel="noreferrer">
              {source}
            </a>
          ))}
        </div>
      )
    });
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Fishing Conditions", item: absoluteUrl("/fishing") },
      { "@type": "ListItem", position: 2, name: profile.lake, item: absoluteUrl(`/${profile.slug}/fishing`) },
      {
        "@type": "ListItem",
        position: 3,
        name: `${speciesName} Fishing`,
        item: absoluteUrl(`/${profile.slug}/fishing/${speciesPathSegment(species.displayName)}`)
      }
    ]
  };

  return (
    <main className="screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="lake-profile profile-front" aria-label={`${speciesName} at ${profile.lake}`}>
        <div className="profile-hero profile-hero-front">
          <div>
            <span className="profile-kicker">
              {rankLabel(species.tier)} / {profile.lake}
            </span>
            <h1>{speciesName}</h1>
            <p>{lede}</p>
            <a className="species-back-link" href={`/${profile.slug}/fishing`}>
              ← Back to {profile.lake} conditions
            </a>
          </div>
          <aside className="species-hero-card" aria-hidden="true">
            {card ? (
              <img src={card.image} alt={`${card.label} species card`} />
            ) : (
              <div className="species-hero-fallback">{speciesName}</div>
            )}
          </aside>
        </div>

        <aside className="profile-facts species-facts" aria-label={`${speciesName} facts`}>
          <FactPill label="Rank" value={rankLabel(species.tier)} />
          <FactPill label="Best Season" value={stripIceSeason(species.bestSeason ?? profile.bestSeason)} />
          <FactPill
            label="Primary Structure"
            value={primaryStructure?.name ?? species.structure[0] ?? "Not published"}
          />
          <FactPill label="Fishery Zone" value={`FMZ ${profile.fmz}`} />
        </aside>
      </section>

      <section className="lake-profile" aria-label={`${speciesName} guide`}>
        {panels.map((panel, index) => (
          <section key={panel.title} className="profile-panel">
            <div className="profile-section-title">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{panel.title}</h3>
            </div>
            {panel.body}
          </section>
        ))}
      </section>
    </main>
  );
}

function FactPill({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function findSpecies(profile: LakeProfile, slug: string) {
  return profile.species.find((species) => speciesPathSegment(species.displayName) === slug);
}

// Trim species copy to a meta-description-friendly length at a word boundary.
function truncateForMeta(text: string, max: number) {
  const clean = text.trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : max).replace(/[\s,.—-]+$/, "")}…`;
}

function rankLabel(tier: LakeProfileSpecies["tier"]) {
  if (tier === "destination") return "Destination fishery";
  if (tier === "strong") return "Strong pattern";
  if (tier === "present") return "Confirmed present";
  return "Not established";
}

// Drop ice-fishing mentions from the Best Season fact, keeping the open-water
// season and any non-ice tactical qualifiers (e.g. "low light"). Removes an
// ice/winter clause whether it trails, leads, or hangs off an "and".
function stripIceSeason(text: string) {
  const out = text
    .replace(/[;,]\s*(?:also |plus |and )?[^;,]*\b(?:winter|ice|freeze-?up|hard-?water)\b[^;,]*/gi, "")
    .replace(/\s+and\s+[^;,]*\b(?:winter|ice|freeze-?up|hard-?water)\b[^;,]*/gi, "")
    .replace(/^[^;,]*\b(?:winter|ice|freeze-?up|hard-?water)\b[^;,]*[;,]\s*/i, "")
    .replace(/\s+/g, " ")
    .replace(/^[\s;,–—-]+|[\s;,–—-]+$/g, "")
    .trim();
  return out.charAt(0).toUpperCase() + out.slice(1);
}

// Break a long "How it fishes" block into shorter paragraphs (~2 sentences
// each) so it reads as scannable prose instead of one dense wall of text.
function toParagraphs(text: string, perParagraph = 2) {
  const sentences = text.match(/[^.!?]+[.!?]+(?:\s|$)/g) ?? [text];
  const paragraphs: string[] = [];
  for (let i = 0; i < sentences.length; i += perParagraph) {
    paragraphs.push(
      sentences
        .slice(i, i + perParagraph)
        .join(" ")
        .replace(/\s+/g, " ")
        .trim()
    );
  }
  return paragraphs;
}

function firstSentences(text: string, count: number) {
  const matches = text.match(/[^.!?]+[.!?]+/g);
  const sentences = matches?.slice(0, count).join(" ").trim() ?? text.trim();
  return sentences || text;
}
