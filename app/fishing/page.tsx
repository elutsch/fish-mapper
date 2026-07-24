import type { Metadata } from "next";
import { FishabilityBadge } from "@/app/components/FishabilityBadge";
import { LakeImage } from "@/app/components/LakeImage";
import { SpotMap } from "@/app/components/SpotMap";
import { TrackedLakeCard } from "@/app/components/TrackedLakeCard";
import { buildConditionsDashboard } from "@/lib/conditions";
import { defaultValidFor } from "@/lib/forecast";
import { formatDate } from "@/lib/format";
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
  const validFor = defaultValidFor();
  const statuses = await mapStatuses(validFor);
  const geojson = spotsAsGeoJson(statuses);

  return (
    <main className="screen">
      <section className="hero poster-hero index-hero" aria-labelledby="fishing-index-title">
        <div className="index-hero-copy" aria-label="Homepage forecast introduction">
          <span className="alert">Fish On!</span>
          <h1 id="fishing-index-title">
            <span>Today&apos;s</span>{" "}
            <span>Fishability!</span>
          </h1>
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
          <h2 id="what-we-do-title">
            <span>Bite + Launch</span>{" "}
            <span>Conditions!</span>
          </h2>
        </div>
        <div className="what-we-do-actions" aria-label="Explore fishing conditions">
          <a className="what-we-do-button" href="#lake-map">
            Explore the Map
          </a>
          <a className="what-we-do-button" href="#browse-lakes">
            Browse Lakes
          </a>
        </div>
      </section>

      <section className="map-card" id="lake-map" aria-label="Lake map">
        <div className="title-row">
          <div>
            <h2>Lake Map</h2>
            <p className="section-subcopy">Today&apos;s on-water outlook for each launch. Clusters expand as you zoom.</p>
          </div>
          <time className="button map-date-button" dateTime={validFor}>
            {formatDate(validFor)}
          </time>
        </div>
        <div className="map-legend" aria-label="Map color legend">
          <span><i className="legend-dot legend-prime" />Prime today</span>
          <span><i className="legend-dot legend-solid" />Solid today</span>
          <span><i className="legend-dot legend-grind" />Grind today</span>
          <span><i className="legend-dot legend-tough" />Tough today</span>
        </div>
        <SpotMap geojson={geojson} />
      </section>

      <section className="lakes" id="browse-lakes">
        <div className="title-row">
          <h2>Browse Lakes</h2>
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
                  <p className="muted">
                    {formatLaunchType(spot.launch)} · {spot.maxFetchKm?.toFixed(1)} km fetch
                  </p>
                  <div className="facts">
                    <span className="pill">Target Species</span>
                  </div>
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

async function mapStatuses(validFor: string) {
  const entries = await Promise.all(
    spots.map(async (spot) => {
      try {
        const { forecast, pressureTrend, verdict } = await getOrCreateSnapshot(spot, validFor);
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
