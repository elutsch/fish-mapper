import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Methods",
  description:
    "How AER builds Southern Ontario fishing condition pages from launch profiles, Open-Meteo forecasts, fetch geometry, pressure trends, and craft-specific thresholds."
};

const dataSources = [
  {
    title: "Lake and launch profiles",
    body:
      "The current MVP uses a curated local profile for each waterbody. Each profile stores the lake name, launch coordinate, launch type, rough open-water fetch, Fisheries Management Zone, seed species, and review notes. Researched lake pages add a separate evergreen profile with lake morphology, access notes, species guidance, source links, and verified regulation snapshots. Some launch coordinates are tied to Ontario Fishing Access Points, conservation-area pages, OpenStreetMap/Nominatim, or manual review notes. When a launch coordinate still needs field checking, the lake page says so in its caveats."
  },
  {
    title: "Open-Meteo forecast data",
    body:
      "Hourly temperature, wind speed, wind gusts, wind direction, surface pressure, precipitation, and cloud cover come from Open-Meteo's forecast API using the GEM seamless model where available. The app requests past days as well as forecast days so it can compute a recent pressure trend."
  },
  {
    title: "UV, sun, and moon",
    body:
      "UV index is requested from Open-Meteo through a separate UV forecast call. Sunrise and sunset come from the daily Open-Meteo response. Moon phase is computed locally from the date using a lunar-cycle calculation, not an external service."
  },
  {
    title: "Generated fishing note",
    body:
      "If an Anthropic API key is configured, the site asks an LLM to turn the structured inputs into a short craft-aware fishing note that must match a JSON schema. If the model is unavailable or returns invalid JSON, deterministic fallback rules generate the verdict and note instead."
  },
  {
    title: "Research profile sources",
    body:
      "For lakes with a completed research profile, evergreen copy is built from cited public sources such as conservation authority access pages, Ontario FMZ regulation pages, Fish ON-Line stocking data, and lake-specific research notes. These sources inform the descriptive lake guide only; live condition scoring still comes from the forecast layer."
  }
];

const notYetUsed = [
  "Live water temperature sensors or modelled water temperature history.",
  "Broad-scale monitoring catch rates as a quantitative scoring input.",
  "ERA5 or other two-week air-mass history beyond the pressure trend available from the current forecast request.",
  "Solunar major/minor feeding periods. The current site shows moon phase only."
];

export default function MethodsPage() {
  return (
    <main className="screen methodology-page">
      <section className="hero poster-hero methodology-hero">
        <span className="alert">How It Works</span>
        <h1>Forecast Method</h1>
        <p className="summary">
          Every lake report combines a fixed launch profile with a fresh weather snapshot. The goal
          is practical: tell an angler whether the water is worth fishing today, which craft has
          enough margin, and which conditions are driving the call.
        </p>
        <div className="burst">AER<br />Logic</div>
      </section>

      <section className="method-panel">
        <div className="method-kicker">01 - Model Layers</div>
        <h2>Two layers behind every report.</h2>
        <div className="method-split">
          <article>
            <h3>Lake Profile</h3>
            <p>
              The lake profile is the stable layer: waterbody name, launch coordinate, access type,
              rough fetch geometry, species seeds, FMZ, caveats, and optional researched lake-guide
              copy. This is stored locally today so the pages can prerender and stay fast.
            </p>
          </article>
          <article>
            <h3>Daily Conditions</h3>
            <p>
              The conditions layer is the live layer: forecast temperature, UV, wind, gusts,
              pressure, precipitation, sun timing, moon phase, and the resulting craft verdicts. It
              refreshes on the site's revalidation and cron workflow.
            </p>
          </article>
        </div>
      </section>

      <section className="method-panel">
        <div className="method-kicker">02 - Data Sources</div>
        <h2>What the site actually uses today.</h2>
        <div className="source-grid">
          {dataSources.map((source) => (
            <article key={source.title} className="source-card">
              <h3>{source.title}</h3>
              <p>{source.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="method-panel">
        <div className="method-kicker">03 - Craft Verdicts</div>
        <h2>Powerboat, kayak, and canoe are scored separately.</h2>
        <p>
          The app does not treat "good boating conditions" as one generic answer. It compares peak
          daylight wind and gusts against separate thresholds for a powerboat, fishing kayak, and
          open canoe. It then adjusts for lake fetch, because the same wind can be manageable on a
          small sheltered lake and rough on a longer open reach.
        </p>
        <div className="method-list">
          <p>
            <strong>Wind and gusts:</strong> daylight peak wind and gusts are the main safety and
            boat-control inputs.
          </p>
          <p>
            <strong>Fetch:</strong> longer open-water fetch adds penalty because waves have more
            distance to build.
          </p>
          <p>
            <strong>Launch constraints:</strong> trailered powerboats require trailer access;
            kayaks and canoes require carry-in access.
          </p>
          <p>
            <strong>Lee shore:</strong> dominant wind direction is converted into the likely
            protected shore so the note can point anglers toward cleaner, more controllable water.
          </p>
        </div>
      </section>

      <section className="method-panel">
        <div className="method-kicker">04 - Conditions Dashboard</div>
        <h2>What each dashboard value means.</h2>
        <div className="method-list">
          <p>
            <strong>Temperature:</strong> representative daytime air temperature plus the daily high
            and low from the forecast.
          </p>
          <p>
            <strong>UV index:</strong> the daily max UV or hourly UV forecast when available.
          </p>
          <p>
            <strong>Wind:</strong> peak daylight sustained wind, dominant direction, and peak gust.
          </p>
          <p>
            <strong>Pressure:</strong> representative surface pressure and a two-day pressure trend
            labelled rising, steady, or falling.
          </p>
          <p>
            <strong>Sunrise/sunset:</strong> forecast sunrise and sunset converted to Toronto time,
            plus daylight duration.
          </p>
          <p>
            <strong>Moon phase:</strong> local lunar-cycle calculation for the report date.
          </p>
          <p>
            <strong>Fishing grade:</strong> a compact letter grade derived from the craft verdicts,
            peak wind/gust penalty, and pressure trend. It is a planning signal, not a promise of a
            bite.
          </p>
        </div>
      </section>

      <section className="method-panel">
        <div className="method-kicker">05 - Limits</div>
        <h2>What this model can and cannot do.</h2>
        <p>
          The site is built for planning, not for replacing judgement on the water. Forecast models
          can miss local wind shifts, storms, launch closures, and shoreline conditions. Launch pins
          should be treated as best available planning coordinates, especially where caveats say a
          location still needs field checking.
        </p>
        <div className="method-note">
          <h3>Not currently used in this MVP</h3>
          <ul>
            {notYetUsed.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="method-panel method-disclaimer">
        <div className="method-kicker">06 - Disclaimer</div>
        <h2>Use this as guidance.</h2>
        <p>
          These verdicts are informational only. Check current weather, local warnings, launch
          access, and official Ontario fishing regulations before heading out. If the lake, launch,
          or weather looks different from the page, trust the conditions in front of you. Read the{" "}
          <a href="/disclaimer">Safety Notice & Disclaimer</a> before relying on any report.
        </p>
      </section>
    </main>
  );
}
