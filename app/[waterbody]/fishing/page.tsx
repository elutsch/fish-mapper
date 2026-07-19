import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LakeImage } from "@/app/components/LakeImage";
import { RatingBadge } from "@/app/components/RatingBadge";
import { getSpeciesCard, SpeciesCards, speciesPathSegment } from "@/app/components/SpeciesCards";
import { buildConditionsDashboard } from "@/lib/conditions";
import { craftLabels, formatDate, formatHour } from "@/lib/format";
import { getLakeProfile } from "@/lib/lakeProfiles";
import type { LakeProfile } from "@/lib/lakeProfiles/types";
import { getOrCreateSnapshot } from "@/lib/snapshot";
import { getSpot, spots } from "@/lib/spots";
import type { Craft, ForecastHour } from "@/lib/types";

type PageProps = {
  params: Promise<{ waterbody: string }>;
};

export const revalidate = 21600;

const crafts: Craft[] = ["powerboat", "kayak", "canoe"];

export function generateStaticParams() {
  return spots.map((spot) => ({ waterbody: spot.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { waterbody } = await params;
  const spot = getSpot(waterbody);
  if (!spot) {
    return {};
  }
  const profile = getLakeProfile(spot.id);

  return {
    title: `${spot.name} Fishing Conditions`,
    description: waterbodyMetaDescription(spot.name, Boolean(profile))
  };
}

export default async function WaterbodyFishingPage({ params }: PageProps) {
  const { waterbody } = await params;
  const spot = getSpot(waterbody);
  if (!spot) notFound();

  const profile = getLakeProfile(spot.id);
  const { forecast, pressureTrend, verdict } = await getOrCreateSnapshot(spot);
  const conditionRows = forecast
    .filter((hour) => {
      const localHour = Number(hour.time.slice(11, 13));
      return localHour >= 5 && localHour <= 21;
    })
    .filter((_, index) => index % 2 === 0);
  const dashboard = buildConditionsDashboard({ hours: forecast, verdict, pressureTrend });
  const quickSummary = dailyReadSummary(forecast, verdict);
  const publicCaveats = publicFacingCaveats(verdict.caveats);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: spot.name,
    geo: {
      "@type": "GeoCoordinates",
      latitude: spot.lat,
      longitude: spot.lng
    },
    subjectOf: {
      "@type": "Article",
      headline: `${spot.name} fishing conditions by craft`,
      dateModified: verdict.generatedAt,
      author: {
        "@type": "Organization",
        name: "Bite Club"
      }
    }
  };

  return (
    <>
      <main className="screen">
        {profile ? (
          <LakeProfileIntro profile={profile} />
        ) : (
          <section className="hero poster-hero">
            <span className="alert">Forecast Alert</span>
            <div className="eyebrow">Fishing conditions for {formatDate(verdict.validFor)}</div>
            <h1>{spot.name} craft split</h1>
            <p className="summary">{verdict.summaryMd}</p>
            <div className="burst">
              Fish<br />Now?
            </div>
            <div className="slashes">
              <i />
              <i />
              <i />
            </div>
          </section>
        )}

        <section className="conditions-dashboard poster-dashboard" aria-label="Fishing conditions dashboard">
          <div className="conditions-top">
            <div className="conditions-heading">
              <span>02 - Conditions</span>
              <h2>Today's read.</h2>
              <div className="quick-summary">
                <span>Quick Summary</span>
                <p>{quickSummary}</p>
              </div>
              <div className="condition-alert">Heads up — {dashboard.alert}</div>
              <div className="condition-stamp">Bite</div>
            </div>
            <div className="conditions-grid">
              <DashboardMetric label="Air Temp" value={dashboard.temp.value} detail={dashboard.temp.detail} />
              <DashboardMetric label="UV Index" value={dashboard.uv.value} detail={dashboard.uv.detail} />
              <DashboardMetric label="Wind" value={dashboard.wind.value} detail={dashboard.wind.detail} />
              <DashboardMetric label="Pressure" value={dashboard.pressure.value} detail={dashboard.pressure.detail} />
              <DashboardMetric label="Sunrise/Sunset" value={dashboard.sun.value} detail={dashboard.sun.detail} />
              <DashboardMetric label="Moon Phase" value={dashboard.moon.value} detail={dashboard.moon.detail} emphasis />
            </div>
          </div>
          <div className="fishing-grade">
            <strong aria-label={`Fishing grade ${dashboard.grade.value}`}>{dashboard.grade.value}</strong>
            <div>
              <span>{dashboard.grade.detail}</span>
              <p>{dashboard.grade.note}</p>
            </div>
            <div className="grade-callout">
              <span>The Edge</span>
              <p>{dashboard.callout}</p>
            </div>
            <div className="grade-actions" aria-label="Fishing dashboard actions">
              <a href="#conditions">Hour by Hour</a>
              <a href="/fishing">Map View</a>
            </div>
          </div>
        </section>

        <section className="craft-section">
          <h2>Craft Verdicts</h2>
          <div className="facts">
            <span className="pill">
              {spot.launch.trailer ? "Trailer launch" : "No trailer launch in seed data"}
            </span>
            <span className="pill">{spot.launch.carryIn ? "Carry-in launch" : "No carry-in"}</span>
            <span className="pill">{spot.maxFetchKm?.toFixed(1)} km max fetch</span>
            <span className="pill">
              Pressure {pressureTrend.label} ({pressureTrend.rateHpaPer24h} hPa/24h)
            </span>
          </div>
          <div className="craft-grid">
            {crafts.map((craft) => {
              const craftVerdict = verdict.byCraft[craft];
              return (
                <article key={craft} className="verdict-card">
                  <div className="card-header">
                    <h3>{craftLabels[craft]}</h3>
                    <RatingBadge rating={craftVerdict.rating} />
                  </div>
                  {craftVerdict.bestWindow ? (
                    <div>
                      <div className="muted">Best window</div>
                      <div className="best-window">{craftVerdict.bestWindow}</div>
                    </div>
                  ) : null}
                  <p>{craftVerdict.note}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="hourly-section" id="conditions">
          <div className="hourly-title">
            <h2>Hourly Conditions</h2>
            <span />
          </div>
          <div className="hourly-grid">
            {conditionRows.map((hour) => (
              <HourlyConditionCard key={hour.time} hour={hour} hours={conditionRows} verdict={verdict} />
            ))}
          </div>
        </section>

        {profile ? (
          <LakeProfileSections profile={profile} caveats={publicCaveats} />
        ) : (
          <section className="section lake-card detail-card">
            <LakeImage spotId={spot.id}>
              <span className="tag">Access</span>
            </LakeImage>
            <div className="lake-body">
              <h2>Fish Cards and access context</h2>
              <SpeciesCards species={spot.species} />
              <p>
                Fisheries Management Zone: {spot.fmz ?? "not set"}. Dominant fetch bearings:{" "}
                {spot.shorelineFetch.join("°, ")}°.
              </p>
            </div>
            {publicCaveats.length ? (
              <div className="caveat-box">
                <h3>Caveats</h3>
                <ul>
                  {publicCaveats.map((caveat) => (
                    <li key={caveat}>{caveat}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </section>
        )}
      </main>

      <section className="methodology" id="methodology">
        <div className="methodology-inner">
          <h2>Methodology</h2>
          <p>
            These fishing verdicts are generated by Bite Club from structured forecast inputs, launch
            constraints, waterbody fetch geometry, pressure tendency, sun timing, and moon phase.
            They are written for on-water fishing decisions only: powerboat, kayak, and canoe.
          </p>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}

function DashboardMetric({
  label,
  value,
  detail,
  emphasis = false
}: {
  label: string;
  value: string;
  detail: string;
  emphasis?: boolean;
}) {
  return (
    <article className={emphasis ? "condition-cell condition-cell-emphasis" : "condition-cell"}>
      <span>{label}</span>
      <strong>{value}</strong>
      <p>{detail}</p>
    </article>
  );
}

function HourlyConditionCard({
  hour,
  hours,
  verdict
}: {
  hour: ForecastHour;
  hours: ForecastHour[];
  verdict: { byCraft: Record<Craft, { rating: string; bestWindow?: string }> };
}) {
  const potential = bitePotential(hour);
  const fishability = hourFishability(hour, hours, verdict);
  const hasStormRisk = hour.precipMm >= 8 || hour.gustKmh >= 50;
  const hasAction = potential.level === "high" || potential.level === "maximum";
  const tone =
    fishability.level === "no-go"
      ? "storm"
      : potential.level === "maximum"
        ? "prime"
        : potential.level === "high"
          ? "active"
          : "base";

  return (
    <article className={`hour-card hour-card-${tone}`}>
      <div className="hour-card-top">
        <strong>{formatHour(hour.time)}</strong>
        <div>
          <b>{hour.tempC === undefined ? "n/a" : `${Math.round(hour.tempC)}°`}</b>
          <span>Temp</span>
        </div>
      </div>
      <div className="hour-card-metrics">
        <div>
          <span>{hasStormRisk ? "Precip" : "UV"}</span>
          <b>
            {hasStormRisk
              ? `${hour.precipMm.toFixed(1)}mm`
              : hour.uvIndex === undefined
                ? "n/a"
                : hour.uvIndex.toFixed(1)}
          </b>
        </div>
        <div>
          <span>{hour.gustKmh >= 45 ? "Gust" : "Wind"}</span>
          <b>{Math.round(hour.gustKmh >= 45 ? hour.gustKmh : hour.windKmh)}kph</b>
        </div>
      </div>
      <div className="bite-meter">
        <span>Fish Activity</span>
        <b>{potential.label}</b>
      </div>
      <div className={`fishability-meter fishability-${fishability.level}`}>
        <span>Launch Read</span>
        <b>{fishability.label}</b>
      </div>
      {hasStormRisk ? <em>{hour.precipMm >= 8 ? "Storm!" : "Gust!"}</em> : null}
      {hasAction && fishability.level === "go" ? <i>Window!</i> : null}
    </article>
  );
}

function LakeProfileIntro({ profile }: { profile: LakeProfile }) {
  const cardedSpecies = profile.species.filter((species) => species.tier === "destination" || species.tier === "strong");
  const presentSpecies = profile.species.filter((species) => species.tier === "present");

  return (
    <section className="lake-profile profile-front" aria-label={`${profile.lake} fishing profile`}>
      <div className="profile-hero profile-hero-front">
        <div>
          <span className="profile-kicker">
            {profile.waterbodyType} / FMZ {profile.fmz}
          </span>
          <h1>{profile.lake}</h1>
          <p>{firstSentences(profile.overview, 2)}</p>
        </div>
        <aside className="profile-facts" aria-label="Lake facts">
          <FactPill label="Best Season" value={profile.bestSeason} />
          <FactPill label="Surface Area" value={profile.morphology.surfaceArea ?? "Not published"} />
          <FactPill label="Water" value={profile.morphology.clarity ?? "Unknown"} />
          <FactPill label="Verified" value={profile.lastVerified} />
        </aside>
      </div>

      <div className="profile-strip profile-strip-large">
        <div>
          <h3>Species at a glance</h3>
          <p>{[...cardedSpecies, ...presentSpecies].map((species) => species.displayName).join(", ")}</p>
        </div>
        <ProfileSpeciesCards profile={profile} />
      </div>
    </section>
  );
}

function LakeProfileSections({ profile, caveats }: { profile: LakeProfile; caveats: string[] }) {
  return (
    <section className="lake-profile" aria-label={`${profile.lake} supporting profile details`}>
      <section className="profile-panel">
        <div className="profile-section-title">
          <span>01</span>
          <h3>How it fishes</h3>
        </div>
        <div className="notable-grid">
          {profile.notableFacts.map((fact) => (
            <a key={fact.fact} className="notable-card" href={fact.sourceUrl} target="_blank" rel="noreferrer">
              <p>{fact.fact}</p>
              <span>Source</span>
            </a>
          ))}
        </div>
      </section>

      <section className="profile-panel regulation-panel">
        <div className="profile-section-title">
          <span>02</span>
          <h3>Regulations snapshot</h3>
        </div>
        <p className="profile-disclaimer">{profile.regsDisclaimer}</p>
        <div className="reg-grid">
          {profile.regulations.map((regulation) => (
            <article key={regulation.species} className="reg-card">
              <h4>{regulation.species}</h4>
              {regulation.verified ? (
                <>
                  <p>
                    <strong>Season:</strong> {regulation.season}
                  </p>
                  <p>
                    <strong>Limit:</strong> {regulation.limit}
                  </p>
                  {regulation.sizeLimit ? (
                    <p>
                      <strong>Size:</strong> {regulation.sizeLimit}
                    </p>
                  ) : null}
                </>
              ) : (
                <p>Check the official FMZ page before fishing this species.</p>
              )}
              <a href={regulation.sourceUrl} target="_blank" rel="noreferrer">
                Official source
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="profile-panel access-panel">
        <div className="profile-section-title">
          <span>03</span>
          <h3>Access notes</h3>
        </div>
        <div className="access-grid">
          {profile.launches.map((launch) => (
            <article key={launch.name} className="access-card">
              <span>{launch.type.replaceAll("-", " ")}</span>
              <h4>{launch.name}</h4>
              {launch.notes ? <p>{launch.notes}</p> : null}
              <a href={launch.sourceUrl} target="_blank" rel="noreferrer">
                Access source
              </a>
            </article>
          ))}
        </div>
        {profile.morphology.thermalBehaviour ? (
          <p className="profile-note">{profile.morphology.thermalBehaviour}</p>
        ) : null}
        {caveats.length ? (
          <div className="caveat-box profile-caveats">
            <h3>Caveats</h3>
            <ul>
              {caveats.map((caveat) => (
                <li key={caveat}>{caveat}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </section>

      <section className="profile-panel resource-panel">
        <div className="profile-section-title">
          <span>04</span>
          <h3>Key resources</h3>
        </div>
        <div className="resource-list">
          {profile.keyResources.map((resource) => (
            <a key={resource.url} href={resource.url} target="_blank" rel="noreferrer">
              {resource.label}
            </a>
          ))}
        </div>
      </section>
    </section>
  );
}

function ProfileSpeciesCards({ profile }: { profile: LakeProfile }) {
  const visibleSpecies = profile.species.filter((species) => species.tier !== "absent");

  return (
    <div className="profile-species-grid" aria-label={`${profile.lake} species pages`}>
      {visibleSpecies.map((species) => {
        const card = getSpeciesCard(species.displayName);
        const href = `/${profile.slug}/fishing/${speciesPathSegment(species.displayName)}`;
        return (
          <a key={species.parentSlug} className="profile-species-card" href={href}>
            {card ? (
              <img src={card.image} alt={`${card.label} species card`} loading="lazy" />
            ) : (
              <span>{species.displayName}</span>
            )}
          </a>
        );
      })}
    </div>
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

function bitePotential(hour: ForecastHour) {
  const uv = hour.uvIndex ?? 0;
  const windScore = hour.windKmh <= 20 ? 2 : hour.windKmh <= 28 ? 1 : 0;
  const gustPenalty = hour.gustKmh >= 52 ? 2 : hour.gustKmh >= 40 ? 1 : 0;
  const precipPenalty = hour.precipMm >= 8 ? 2 : hour.precipMm >= 2 ? 1 : 0;
  const uvBonus = uv >= 2 && uv <= 7 ? 1 : 0;
  const score = windScore + uvBonus - gustPenalty - precipPenalty;

  if (score >= 3) return { label: "Maximum", level: "maximum" };
  if (score === 2) return { label: "High", level: "high" };
  if (score === 1) return { label: "Fair", level: "fair" };
  if (score === 0) return { label: "Low", level: "low" };
  return { label: "Risky", level: "risky" };
}

function hourFishability(
  hour: ForecastHour,
  hours: ForecastHour[] = [],
  verdict?: { byCraft: Record<Craft, { rating: string; bestWindow?: string }> }
) {
  if (hour.precipMm >= 8 || hour.gustKmh >= 50) {
    return { label: "Do Not Launch", level: "no-go" as const };
  }
  const highImpactDay = hours.some((entry) => entry.precipMm >= 8 || entry.gustKmh >= 50);
  const powerboatWindow = verdict?.byCraft.powerboat.bestWindow;
  const powerboatCanLaunch = verdict?.byCraft.powerboat.rating !== "no-go";
  if (highImpactDay && powerboatWindow && !isInWindow(hour.time, powerboatWindow)) {
    return {
      label: powerboatCanLaunch ? "After Window" : "Do Not Launch",
      level: powerboatCanLaunch ? ("marginal" as const) : ("no-go" as const)
    };
  }
  if (hour.gustKmh >= 42 || hour.windKmh >= 24 || hour.precipMm >= 3) {
    return { label: "Sheltered Only", level: "marginal" as const };
  }
  return { label: "Fishable", level: "go" as const };
}

function dailyReadSummary(hours: ForecastHour[], verdict: { byCraft: Record<Craft, { rating: string; bestWindow?: string }> }) {
  const daylight = hours.filter((hour) => {
    const localHour = Number(hour.time.slice(11, 13));
    return localHour >= 5 && localHour <= 21;
  });
  const peakGust = Math.max(...daylight.map((hour) => hour.gustKmh), 0);
  const fishableWindow = firstFishableWindow(daylight);
  const craftRatings = Object.values(verdict.byCraft).map((craft) => craft.rating);
  const allNoGo = craftRatings.every((rating) => rating === "no-go");
  const onlyPowerboatHasMargin =
    verdict.byCraft.powerboat.rating !== "no-go" &&
    verdict.byCraft.kayak.rating === "no-go" &&
    verdict.byCraft.canoe.rating === "no-go";

  if (allNoGo && fishableWindow) {
    return `Fish may be active, but the launch window is short: ${fishableWindow} is the cleanest water before gusts near ${Math.round(
      peakGust
    )} km/h take over.`;
  }
  if (allNoGo) {
    return `Fish activity does not overcome the on-water risk today; gusts near ${Math.round(
      peakGust
    )} km/h make this a stay-off-the-water call.`;
  }
  if (onlyPowerboatHasMargin) {
    const window = verdict.byCraft.powerboat.bestWindow ?? fishableWindow;
    return `The bite has a window, but craft matters: powerboats get the most margin ${window ? `around ${window}` : "early"} while kayaks and canoes lose position control as gusts build.`;
  }
  if (fishableWindow) {
    return `Best launch window is ${fishableWindow}; after that, wind and gusts decide how much water is realistically fishable.`;
  }
  return "Today is a craft-specific call: read the hourly wind and launch only where the water stays controlled.";
}

function isInWindow(time: string, window: string) {
  const match = /^(\d{2}):(\d{2})-(\d{2}):(\d{2})$/.exec(window);
  if (!match) return true;
  const hour = Number(time.slice(11, 13));
  const minute = Number(time.slice(14, 16));
  const current = hour * 60 + minute;
  const start = Number(match[1]) * 60 + Number(match[2]);
  const end = Number(match[3]) * 60 + Number(match[4]);
  return current >= start && current <= end;
}

function firstFishableWindow(hours: ForecastHour[]) {
  const fishable = hours.filter((hour) => hourFishability(hour).level === "go");
  const first = fishable[0];
  if (!first) return null;
  const startHour = Number(first.time.slice(11, 13));
  let endHour = startHour + 1;
  for (const hour of fishable.slice(1)) {
    const currentHour = Number(hour.time.slice(11, 13));
    if (currentHour === endHour) {
      endHour += 1;
      continue;
    }
    break;
  }
  return `${formatWindowHour(startHour)}-${formatWindowHour(Math.min(endHour, 23))}`;
}

function formatWindowHour(hour: number) {
  const suffix = hour >= 12 ? "pm" : "am";
  const display = hour % 12 === 0 ? 12 : hour % 12;
  return `${display}${suffix}`;
}

function publicFacingCaveats(caveats: string[]) {
  const devPatterns = [
    /agent verdict/i,
    /deterministic fallback/i,
    /forecast fetch failed/i,
    /during render/i,
    /field-?checked/i,
    /before production/i,
    /confirm .*before production/i
  ];
  return caveats.filter((caveat) => !devPatterns.some((pattern) => pattern.test(caveat)));
}

function waterbodyMetaDescription(name: string, hasProfile: boolean) {
  return hasProfile
    ? `${name} fishing conditions: craft verdicts, wind and fetch read, launch window, access notes, species cards, and regulations.`
    : `${name} fishing conditions by craft, with wind, fetch, pressure, launch constraints, and hourly on-water guidance.`;
}

function firstSentences(text: string, count: number) {
  const matches = text.match(/[^.!?]+[.!?]+/g);
  const sentences = matches?.slice(0, count).join(" ").trim() ?? text.trim();
  return sentences || text;
}
