import type { Metadata } from "next";
import { FishabilityBadge } from "@/app/components/FishabilityBadge";
import { LakeImage } from "@/app/components/LakeImage";
import { SpotMap } from "@/app/components/SpotMap";
import { TrackedLakeCard } from "@/app/components/TrackedLakeCard";
import { buildConditionsDashboard } from "@/lib/conditions";
import { formatLaunchType } from "@/lib/launch";
import { getOrCreateSnapshot } from "@/lib/snapshot";
import { spots, spotsAsGeoJson } from "@/lib/spots";
import { formatSpeciesName } from "@/lib/species";
import { fishabilityLabel } from "@/lib/fishability";
import type { MapSpotStatus } from "@/lib/spots";
import type { Spot, Verdict } from "@/lib/types";

export const metadata: Metadata = {
  title: "Today's Fishing Conditions for Southern Ontario Lakes",
  description:
    "Today's Fishability for 20 Southern Ontario lakes and rivers — Prime, Solid, Grind, or Tough calls with separate powerboat, kayak, and canoe launch verdicts.",
  alternates: { canonical: "/fishing" }
};

// Fully static after generation; regenerated once daily by the /api/cron/fishing job
// (revalidatePath), so pages stay static from the CDN for the rest of the day.
export const revalidate = false;

export default async function FishingIndexPage() {
  const statuses = await mapStatuses();
  const geojson = spotsAsGeoJson(statuses);

  return (
    <main className="screen">
      <section className="hero poster-hero index-hero" aria-labelledby="fishing-index-title">
        <div className="index-hero-copy" aria-label="Homepage forecast introduction">
          <span className="alert">Fish On!</span>
          <h1 id="fishing-index-title">Hot Lakes Today</h1>
          <div className="slashes">
            <i />
            <i />
            <i />
          </div>
        </div>
      </section>

      <section className="what-we-do" aria-labelledby="what-we-do-title">
        <div className="what-we-do-intro">
          <span className="alert">What We Do</span>
          <h2 id="what-we-do-title">Find the best bite window before you launch.</h2>
          <p>
            Bite Club turns lake profiles and today&apos;s forecast into plain-language fishing and
            boating condition calls for Southern Ontario launches. Start with the map, pick a
            waterbody, then open the lake page for the conditions behind the call.
          </p>
        </div>
        <div className="what-we-do-grid">
          <article>
            <span>01</span>
            <h3>Today&apos;s Read</h3>
            <p>Temperature, wind, pressure, light, moon, and fetch roll into a simple Fishability grade.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Map Scan</h3>
            <p>Color-coded launches show where conditions look Prime, Solid, Grind, or Tough today.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Lake Pages</h3>
            <p>Open a lake for craft verdicts, access context, species notes, and the full dashboard.</p>
          </article>
        </div>
      </section>

      <section className="map-card" aria-label="Lake map">
        <div className="title-row">
          <div>
            <h2>Lake Map</h2>
            <p className="section-subcopy">Today&apos;s on-water outlook for each launch. Clusters expand as you zoom.</p>
          </div>
          <span className="button">Ontario</span>
        </div>
        <div className="map-legend" aria-label="Map color legend">
          <span><i className="legend-dot legend-prime" />Prime today</span>
          <span><i className="legend-dot legend-solid" />Solid today</span>
          <span><i className="legend-dot legend-grind" />Grind today</span>
          <span><i className="legend-dot legend-tough" />Tough today</span>
          <span><i className="legend-dot legend-cluster" />Grouped launches</span>
        </div>
        <SpotMap geojson={geojson} />
      </section>

      <section className="lakes">
        <div className="title-row">
          <h2>Browse Lakes</h2>
          <span className="button">Scroll</span>
        </div>
        <div className="spot-list" aria-label="Scrollable waterbody carousel">
          {spots.map((spot) => {
            const status = statuses[spot.id]?.status ?? "unknown";

            return (
              <TrackedLakeCard
                key={spot.id}
                href={`/${spot.id}/fishing`}
                waterbodyId={spot.id}
                forecastStatus={status}
              >
                <LakeImage spotId={spot.id}>
                  <FishabilityBadge status={status} className="lake-status-callout" />
                </LakeImage>
                <div className="lake-body">
                  <h3>{spot.name}</h3>
                  <p className="muted">{formatLaunchType(spot.launch)}</p>
                </div>
                <div className="facts">
                  <span className="pill">{spot.maxFetchKm?.toFixed(1)} km fetch</span>
                  {spot.fmz ? <span className="pill">FMZ {spot.fmz}</span> : null}
                </div>
                <p className="species-list">{spot.species.map(formatSpeciesName).join(", ")}</p>
              </TrackedLakeCard>
            );
          })}
        </div>
      </section>
    </main>
  );
}

async function mapStatuses() {
  const entries = await Promise.all(
    spots.map(async (spot) => {
      try {
        const { forecast, pressureTrend, verdict } = await getOrCreateSnapshot(spot);
        const dashboard = buildConditionsDashboard({ hours: forecast, pressureTrend, verdict, spot });
        return [spot.id, statusForSpot(spot, verdict, dashboard.grade.status)] as const;
      } catch (error) {
        return [
          spot.id,
          {
            status: "unknown",
            label: "Forecast pending",
            detail: error instanceof Error ? error.message : "Forecast status unavailable."
          } satisfies MapSpotStatus
        ] as const;
      }
    })
  );

  return Object.fromEntries(entries);
}

// The map dot uses the same day grade as the dashboard badge — single source,
// so they can never disagree. Craft breakdown is kept for the tooltip detail.
function statusForSpot(
  spot: Spot,
  verdict: Verdict,
  status: MapSpotStatus["status"]
): MapSpotStatus {
  const label = fishabilityLabel(status);
  const detail = `Fishability ${label.toLowerCase()}. Powerboat ${verdict.byCraft.powerboat.rating}; kayak ${verdict.byCraft.kayak.rating}; canoe ${verdict.byCraft.canoe.rating}.`;

  return {
    status,
    label,
    detail: `${spot.name}: ${detail}`
  };
}
