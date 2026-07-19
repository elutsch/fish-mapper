import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSpeciesCard } from "@/app/components/SpeciesCards";
import { getLakeProfile, lakeProfiles } from "@/lib/lakeProfiles";
import type { LakeProfile, LakeProfileSpecies } from "@/lib/lakeProfiles/types";
import { formatSpeciesName, speciesPathSegment } from "@/lib/species";

type PageProps = {
  params: Promise<{ waterbody: string; species: string }>;
};

export const revalidate = 21600;

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

  return {
    title: `${speciesName} at ${profile.lake}`,
    description:
      species.lede ?? species.bodyCopy ?? `${speciesName} fishing profile for ${profile.lake}.`
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
  const secondaryStructure = species.structureDetails?.[1] ?? null;
  const tacticalNote = species.lede ?? species.bodyCopy ?? `${speciesName} is present in the ${profile.lake} research profile.`;

  return (
    <main className="screen species-page">
      <section className="species-dossier">
        <div className="species-dossier-top">
          <a className="species-back" href={`/${profile.slug}/fishing`}>
            Back to lake
          </a>
          <span>Reel Action</span>
          <a className="species-back" href="/fishing">
            Map
          </a>
        </div>

        <section className="species-cover-card">
          <div className="species-cover-media">
            <span>Species #01</span>
            {card ? (
              <img src={card.image} alt={`${card.label} species card`} />
            ) : (
              <div>{speciesName}</div>
            )}
          </div>
          <h1>{speciesName}</h1>
          <div className="species-tier">{species.tier}</div>
        </section>

        <section className="species-quick-grid">
          <article className="species-quick-card habitat-card">
            <span>Habitat</span>
            <p>{primaryStructure?.detail ?? species.structure[0] ?? "Lake-specific habitat notes are not available yet."}</p>
          </article>
          <article className="species-quick-card rank-card">
            <span>Rank</span>
            <strong>{rankLabel(species.tier)}</strong>
            <p>{profile.lake} / FMZ {profile.fmz}</p>
          </article>
        </section>

        <section className="tactical-log">
          <h2>Tactical log</h2>
          <div className="tactical-row">
            <b>01</b>
            <div>
              <span>Primary structure</span>
              <strong>{primaryStructure?.name ?? species.structure[0] ?? "Confirmed presence"}</strong>
            </div>
          </div>
          <div className="tactical-row">
            <b>02</b>
            <div>
              <span>Peak activity</span>
              <strong>{species.bestSeason ?? profile.bestSeason}</strong>
            </div>
          </div>
          <blockquote>{firstSentence(tacticalNote)}</blockquote>
        </section>

        <section className="species-detail-panel">
          <h2>How it fishes</h2>
          {species.howItFishes || species.bodyCopy ? (
            <p>{species.howItFishes ?? species.bodyCopy}</p>
          ) : (
            <p>
              This species is present in the research profile, but there is not enough lake-specific evidence yet for a
              detailed tactical guide.
            </p>
          )}
        </section>

        {(primaryStructure || secondaryStructure) ? (
          <section className="species-detail-panel">
            <h2>Structure</h2>
            <div className="structure-list">
              {species.structureDetails?.map((structure) => (
                <div key={structure.name}>
                  <strong>{structure.name}</strong>
                  <p>{structure.detail}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {species.speciesRules?.length ? (
          <section className="species-detail-panel">
            <h2>Rules</h2>
            <div className="species-rules">
              {species.speciesRules.map((rule) => (
                <a key={rule.rule} href={rule.sourceUrl} target="_blank" rel="noreferrer">
                  {rule.rule}
                </a>
              ))}
            </div>
          </section>
        ) : null}

        {species.sources.length ? (
          <section className="species-detail-panel species-sources">
            <h2>Sources</h2>
            {species.sources.map((source) => (
              <a key={source} href={source} target="_blank" rel="noreferrer">
                {source}
              </a>
            ))}
          </section>
        ) : null}
      </section>
    </main>
  );
}

function findSpecies(profile: LakeProfile, slug: string) {
  return profile.species.find((species) => speciesPathSegment(species.displayName) === slug);
}

function rankLabel(tier: LakeProfileSpecies["tier"]) {
  if (tier === "destination") return "Destination fishery";
  if (tier === "strong") return "Strong pattern";
  if (tier === "present") return "Confirmed present";
  return "Not established";
}

function firstSentence(text: string) {
  const trimmed = text.trim();
  const periodIndex = trimmed.indexOf(".");
  return periodIndex === -1 ? trimmed : trimmed.slice(0, periodIndex + 1);
}
