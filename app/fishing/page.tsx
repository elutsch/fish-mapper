import type { Metadata } from "next";
import { SpeciesCards } from "@/app/components/SpeciesCards";
import { SpotMap } from "@/app/components/SpotMap";
import { spots, spotsAsGeoJson } from "@/lib/spots";

export const metadata: Metadata = {
  title: "Southern Ontario On-Water Fishing Conditions",
  description:
    "Weekend fishing condition pages for powerboat, kayak, and canoe anglers on selected Southern Ontario waterbodies."
};

export default function FishingIndexPage() {
  const geojson = spotsAsGeoJson();

  return (
    <main className="screen">
      <section className="hero poster-hero index-hero">
        <span className="alert">Forecast Map</span>
        <h1>Hot Lakes This Week</h1>
        <p className="summary">
          Find the best bite window before you launch. Temperature, wind, fetch, and pressure decide
          which shore fishes cleanly, when boat control gets hard, and when the smarter move is to
          wait.
        </p>
        <div className="burst">20<br />Spots</div>
        <div className="slashes">
          <i />
          <i />
          <i />
        </div>
      </section>

      <section className="map-card" aria-label="Fishing spots map">
        <div className="title-row">
          <h2>Launch Map</h2>
          <span className="button">Ontario</span>
        </div>
        <SpotMap geojson={geojson} />
      </section>

      <section className="lakes">
        <div className="title-row">
          <h2>Waterbodies</h2>
          <span className="button">Scroll</span>
        </div>
        <div className="spot-list" aria-label="Scrollable waterbody carousel">
          {spots.map((spot) => (
            <a key={spot.id} className="lake-card spot-card" href={`/${spot.id}/fishing`}>
              <div className="lake-image">
                <span className="tag">{spot.launch.trailer ? "Ramp" : "Carry-in"}</span>
              </div>
              <div className="lake-body">
                <h3>{spot.name}</h3>
                <p className="muted">
                  {spot.launch.trailer ? "Trailer launch and carry-in" : "Carry-in launch"}
                </p>
              </div>
              <div className="facts">
                <span className="pill">{spot.maxFetchKm?.toFixed(1)} km fetch</span>
                {spot.fmz ? <span className="pill">FMZ {spot.fmz}</span> : null}
              </div>
              <SpeciesCards species={spot.species} compact />
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
