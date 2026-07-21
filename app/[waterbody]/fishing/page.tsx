import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LakeImage } from "@/app/components/LakeImage";
import { LaunchMap } from "@/app/components/LaunchMap";
import { RatingBadge } from "@/app/components/RatingBadge";
import { getSpeciesCard, SpeciesCards } from "@/app/components/SpeciesCards";
import { buildConditionsDashboard } from "@/lib/conditions";
import { compass, craftLabels, formatCoords, formatDate, formatHour, regsSummary } from "@/lib/format";
import { getLakeProfile } from "@/lib/lakeProfiles";
import type { LakeProfile } from "@/lib/lakeProfiles/types";
import { fishActivity, launchRead } from "@/lib/rating";
import { absoluteUrl } from "@/lib/seo";
import { formatSpeciesName, speciesPathSegment } from "@/lib/species";
import { getOrCreateSnapshot } from "@/lib/snapshot";
import { getSpot, spots } from "@/lib/spots";
import type { Craft, ForecastHour, PressureTrend, Spot } from "@/lib/types";
import { fetchPenaltyFor } from "@/lib/verdict/rules";
import type { WeekDay } from "@/lib/week";

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
  const canonical = `/${spot.id}/fishing`;
  const title = `Today's ${spot.name} Fishing Conditions`;
  const description =
    profile?.overview
      ? truncateForMeta(profile.overview, 200)
      : waterbodyMetaDescription(spot.name, Boolean(profile));

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${title} | Bite Club`,
      description,
      url: canonical,
      images: [
        { url: `/waterbodies/${spot.id}.webp`, width: 800, height: 450, alt: `${spot.name} — Bite Club` }
      ]
    }
  };
}

export default async function WaterbodyFishingPage({ params }: PageProps) {
  const { waterbody } = await params;
  const spot = getSpot(waterbody);
  if (!spot) notFound();

  const profile = getLakeProfile(spot.id);
  const { forecast, pressureTrend, verdict, week } = await getOrCreateSnapshot(spot);
  const conditionRows = forecast
    .filter((hour) => {
      const localHour = Number(hour.time.slice(11, 13));
      return localHour >= 5 && localHour <= 21;
    })
    .filter((_, index) => index % 2 === 0);
  const dashboard = buildConditionsDashboard({ hours: forecast, verdict, pressureTrend, spot });
  const fetchPenalty = fetchPenaltyFor(spot);
  const quickSummary = dashboard.summary;
  const publicCaveats = publicFacingCaveats(verdict.caveats);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: spot.name,
    url: absoluteUrl(`/${spot.id}/fishing`),
    address: {
      "@type": "PostalAddress",
      addressRegion: "Ontario",
      addressCountry: "CA"
    },
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Fishing Conditions", item: absoluteUrl("/fishing") },
      { "@type": "ListItem", position: 2, name: spot.name, item: absoluteUrl(`/${spot.id}/fishing`) }
    ]
  };

  return (
    <>
      <main className="screen">
        {profile ? (
          <LakeProfileIntro profile={profile} status={dashboard.grade.status} verified={verdict.validFor} />
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
            </div>
            <div className="conditions-grid">
              <DashboardMetric label="Air Temp" value={dashboard.temp.value} detail={dashboard.temp.detail} />
              <DashboardMetric label="UV Index" value={dashboard.uv.value} detail={dashboard.uv.detail} />
              <DashboardMetric label="Wind" value={dashboard.wind.value} detail={dashboard.wind.detail} />
              <DashboardMetric label="Pressure" value={dashboard.pressure.value} detail={dashboard.pressure.detail} />
              <DashboardMetric label="Sunrise/Sunset" value={dashboard.sun.value} detail={dashboard.sun.detail} />
              <DashboardMetric label="Moon Phase" value={dashboard.moon.value} detail={dashboard.moon.detail} emphasis />
              <DashboardMetric label="Precip" value={dashboard.precip.value} detail={dashboard.precip.detail} wide />
            </div>
          </div>
          <div className="fishing-grade">
            <strong
              className={`grade-badge-${dashboard.grade.status}`}
              aria-label={`Fishing grade ${dashboard.grade.value}`}
            >
              {dashboard.grade.value}
            </strong>
            <div>
              <span>{dashboard.grade.detail}</span>
              <p>{dashboard.grade.note}</p>
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
              <HourlyConditionCard
                key={hour.time}
                hour={hour}
                pressure={pressureTrend.label}
                fetchPenalty={fetchPenalty}
              />
            ))}
          </div>
        </section>

        <WeeklyForecast days={week} />

        {profile ? (
          <LakeProfileSections profile={profile} spot={spot} caveats={publicCaveats} />
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

function DashboardMetric({
  label,
  value,
  detail,
  emphasis = false,
  wide = false
}: {
  label: string;
  value: string;
  detail: string;
  emphasis?: boolean;
  wide?: boolean;
}) {
  const className = ["condition-cell", emphasis && "condition-cell-emphasis", wide && "condition-precip"]
    .filter(Boolean)
    .join(" ");
  return (
    <article className={className}>
      <span>{label}</span>
      <strong>{value}</strong>
      <p>{detail}</p>
    </article>
  );
}

function HourlyConditionCard({
  hour,
  pressure,
  fetchPenalty
}: {
  hour: ForecastHour;
  pressure: PressureTrend["label"];
  fetchPenalty: number;
}) {
  const activity = fishActivity(hour, pressure);
  const launch = launchRead(hour, fetchPenalty);

  const storm = hour.precipMm >= 8;
  const windy = launch.severity === 3;
  const fishOn = launch.severity === 0 && activity.level === "maximum";
  // One badge per card, highest hazard first: Storm > Windy > Fish On.
  const callout = storm
    ? { kind: "storm", label: "Storm!" }
    : windy
      ? { kind: "windy", label: "Windy!" }
      : fishOn
        ? { kind: "fishon", label: "Fish On!" }
        : null;

  const tone =
    storm || launch.severity === 3
      ? "storm"
      : activity.level === "maximum"
        ? "prime"
        : activity.level === "high"
          ? "active"
          : "base";

  const pressureWord = pressure === "falling" ? "Falling" : pressure === "rising" ? "Rising" : "Steady";

  return (
    <article className={`hour-card hour-card-${tone}`}>
      <div className="hour-card-top">
        <strong>{formatHour(hour.time)}</strong>
        <div>
          <b>{hour.tempC === undefined ? "n/a" : `${Math.round(hour.tempC)}°`}</b>
          <span>Temp</span>
        </div>
      </div>
      <div className="hour-card-metrics hour-card-metrics-three">
        <div>
          <span>UV</span>
          <b>{hour.uvIndex === undefined ? "n/a" : Math.round(hour.uvIndex)}</b>
        </div>
        <div>
          <span>Precip</span>
          <b>{hour.precipMm.toFixed(1)}mm</b>
        </div>
        <div>
          <span>Pressure</span>
          <b>{pressureWord}</b>
        </div>
      </div>
      <div className={`bite-meter activity-${activity.level}`}>
        <span>Fish Activity</span>
        <b>{activity.label}</b>
      </div>
      <div className="hour-card-metrics">
        <div>
          <span>Wind · {compass(hour.windDirDeg)}</span>
          <b>{Math.round(hour.windKmh)}kph</b>
        </div>
        <div>
          <span>Gust</span>
          <b>{Math.round(hour.gustKmh)}kph</b>
        </div>
      </div>
      <div className={`fishability-meter launch-${launch.level}`}>
        <span>Launch Read</span>
        <b>{launch.label}</b>
      </div>
      {callout ? <b className={`hour-callout hour-callout-${callout.kind}`}>{callout.label}</b> : null}
    </article>
  );
}

function WeeklyForecast({ days }: { days: WeekDay[] }) {
  if (days.length === 0) return null;

  const tierLabel = { prime: "Prime", marginal: "Marginal", tough: "Tough" } as const;
  const launchLabel = {
    "all-clear": "All Clear",
    fishable: "Fishable",
    caution: "Caution",
    "do-not-launch": "Do Not Launch"
  } as const;
  const activityLabel = { low: "Low", fair: "Fair", high: "High", maximum: "Maximum" } as const;
  const weekday = (date: string, part: "weekday" | "monthDay") =>
    new Intl.DateTimeFormat("en-CA", {
      timeZone: "America/Toronto",
      ...(part === "weekday" ? { weekday: "short" } : { month: "short", day: "numeric" })
    }).format(new Date(`${date}T12:00:00-04:00`));

  return (
    <section className="week-section" aria-label="Seven-day fishing outlook">
      <div className="hourly-title">
        <h2>Weekly Outlook</h2>
        <span />
      </div>
      <div className="week-grid">
        {days.map((day, index) => (
          <article key={day.date} className={`week-day week-day-${day.tier}`}>
            <span className="week-date">
              <b>{index === 0 ? "Today" : weekday(day.date, "weekday")}</b>
              <em>{weekday(day.date, "monthDay")}</em>
            </span>
            <b className="week-tier">{tierLabel[day.tier]}</b>
            <div className="week-breakdown">
              <div>
                <span>Launch</span>
                <strong>{launchLabel[day.launch]}</strong>
              </div>
              <div>
                <span>Bite</span>
                <strong>{activityLabel[day.activity]}</strong>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function LakeProfileIntro({
  profile,
  status,
  verified
}: {
  profile: LakeProfile;
  status: "prime" | "marginal" | "tough";
  verified: string;
}) {
  const statusLabel =
    status === "prime" ? "Prime today" : status === "marginal" ? "Marginal today" : "Tough today";

  return (
    <section className="lake-profile profile-front" aria-label={`${profile.lake} fishing profile`}>
      <div className="profile-hero profile-hero-front">
        <div>
          <LakeImage
            spotId={profile.slug}
            className="profile-lake-image"
            label={`Illustrated view of ${profile.lake} — ${statusLabel}`}
          >
            <span className={`lake-status-callout launch-status-${status}`}>{statusLabel}</span>
          </LakeImage>
          <span className="profile-kicker">
            {profile.waterbodyType} / FMZ {profile.fmz}
          </span>
          <h1>{profile.lake}</h1>
          <p>{firstSentences(profile.overview, 2)}</p>
        </div>
        <aside className="profile-facts" aria-label="Lake facts">
          <FactPill label="Best Season" value={seasonOnly(profile.bestSeason)} />
          <FactPill label="Surface Area" value={acresOnly(profile.morphology.surfaceArea)} />
          <FactPill label="Water Clarity" value={clarityLabel(profile.morphology.clarity)} />
          <FactPill label="Verified" value={verified} />
        </aside>
      </div>

      <div className="profile-strip profile-strip-large">
        <div className="title-row">
          <h3>Target Species</h3>
          <span className="button">Scroll</span>
        </div>
        <ProfileSpeciesCards profile={profile} />
      </div>
    </section>
  );
}

function LakeProfileSections({
  profile,
  spot,
  caveats
}: {
  profile: LakeProfile;
  spot: Spot;
  caveats: string[];
}) {
  // Pin the mapped access facility (spot.lat/lng), not the profile's lake point.
  const { lat, lng } = spot;
  // Prefer the access point's name/address for the label; coordinates always show.
  const primaryLaunch = profile.launches[0];
  const dash = primaryLaunch?.name.match(/^(.*?)\s+[—–]\s+(.+)$/);
  const launchPlace = dash ? dash[1] : (primaryLaunch?.name ?? null);
  const launchAddress = dash ? dash[2] : null;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

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
        <p className="profile-disclaimer">{regsSummary(profile.regsDisclaimer)}</p>
        <div className="reg-grid">
          {profile.regulations.map((regulation) => (
            <article key={regulation.species} className="reg-card">
              <h4>{formatSpeciesName(regulation.species)}</h4>
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
        <div className="launch-map-block">
          <LaunchMap lat={lat} lng={lng} label={`Approximate launch access for ${profile.lake}`} />
          <div className="launch-map-meta">
            {launchPlace ? <strong>{launchPlace}</strong> : null}
            {launchAddress ? <p className="access-address">{launchAddress}</p> : null}
            <p className="launch-map-coords">{formatCoords(lat, lng)}</p>
            <p className="launch-map-caption">
              Approximate access area — confirm launchability and hours before you go.
            </p>
            <a className="button launch-directions" href={directionsUrl} target="_blank" rel="noreferrer">
              Get Directions
            </a>
          </div>
        </div>
        <div className="access-grid">
          {profile.launches.map((launch) => {
            // Split "<place> — <address>" so the address sits below the title
            // in the typewriter line, matching the eyebrow style.
            const dash = launch.name.match(/^(.*?)\s+[—–]\s+(.+)$/);
            const launchName = dash ? dash[1] : launch.name;
            const address = dash ? dash[2] : null;
            return (
              <article key={launch.name} className="access-card">
                <span>{launch.type.replaceAll("-", " ")}</span>
                <h4>{launchName}</h4>
                {address ? <p className="access-address">{address}</p> : null}
                {launch.notes ? <p>{launch.notes}</p> : null}
                <a href={launch.sourceUrl} target="_blank" rel="noreferrer">
                  Access source
                </a>
              </article>
            );
          })}
        </div>
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
              <span>{formatSpeciesName(species.displayName)}</span>
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

// Reduce the researched bestSeason string to just the season range for the hero
// fact — drop appended clauses (ice-fishing notes, species specifics) that come
// after a delimiter or a "for <species>" qualifier.
function seasonOnly(text: string) {
  let season = text.split(/[;—–,]/)[0];
  const forMatch = season.match(/\sfor\s/i);
  if (forMatch?.index !== undefined) season = season.slice(0, forMatch.index);
  season = season
    .replace(/\bbass opener\b/gi, "")
    .replace(/^open water\s+/i, "")
    .replace(/fourth saturday in june/gi, "Late June")
    .replace(/\s+/g, " ")
    .trim();
  return season.charAt(0).toUpperCase() + season.slice(1);
}

// Surface area, acres only. Prefer an explicit acres figure from the research;
// otherwise convert the leading hectare value (1 ha ≈ 2.47105 acres).
function acresOnly(area: string | null) {
  if (!area) return "Not published";
  const acres = area.match(/([~≈]?\s*[\d,]+(?:\.\d+)?)\s*acres/i);
  if (acres) return `${acres[1].replace(/\s+/g, "")} acres`;
  const hectares = area.match(/([\d,]+(?:\.\d+)?)\s*ha\b/i);
  if (hectares) {
    const value = Math.round((parseFloat(hectares[1].replace(/,/g, "")) * 2.47105) / 10) * 10;
    return `~${value.toLocaleString("en-US")} acres`;
  }
  return "Not published";
}

// Four clarity buckets for the hero fact. Research uses "turbid"; the UI calls
// it "murky", and a missing value reads as "unverified".
function clarityLabel(clarity: string | null) {
  if (clarity === "clear") return "Clear";
  if (clarity === "stained") return "Stained";
  if (clarity === "turbid") return "Murky";
  return "Unverified";
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

// Trim rich profile copy to a meta-description-friendly length at a word boundary.
function truncateForMeta(text: string, max: number) {
  const clean = text.trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : max).replace(/[\s,.—-]+$/, "")}…`;
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
