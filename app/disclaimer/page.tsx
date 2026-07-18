import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Safety Notice & Disclaimer",
  description:
    "Safety notice and disclaimer for AER fishing condition forecasts, craft verdicts, and lake planning information."
};

export default function DisclaimerPage() {
  return (
    <main className="screen methodology-page disclaimer-page">
      <section className="hero poster-hero methodology-hero">
        <span className="alert">Safety Notice</span>
        <h1>Disclaimer</h1>
        <p className="summary">
          Please read this before relying on anything on this site. Fishing, boating, paddling, and
          being on or near water are inherently hazardous.
        </p>
        <div className="burst">Read<br />First</div>
      </section>

      <section className="method-panel">
        <div className="method-kicker">01 - Informational Only</div>
        <h2>Not safety, legal, or emergency advice.</h2>
        <p>
          Everything on this site, including conditions, forecasts, fishing verdicts, craft
          verdicts for powerboat, kayak, and canoe, fish-activity context, seasonal notes, and any
          regulation summaries that may be added, is provided for general informational purposes
          only. It is not professional, safety, navigational, legal, or emergency advice, and it is
          not a guarantee of conditions, safety, fish, or outcomes.
        </p>
      </section>

      <section className="method-panel">
        <div className="method-kicker">02 - Your Judgement</div>
        <h2>Assess conditions yourself before heading out.</h2>
        <p>
          You are responsible for your own safety and for the safety of anyone with you. Weather and
          water conditions change quickly and can differ from any forecast, including ours. A "go"
          verdict for any craft is not an assurance that conditions are safe for you, your
          equipment, your experience level, or the moment you actually get on the water.
        </p>
        <div className="method-note">
          <h3>Before heading out, always:</h3>
          <ul>
            <li>
              Check current official forecasts and weather, wind, or marine warnings from
              Environment and Climate Change Canada.
            </li>
            <li>Assess conditions yourself at the water, in person.</li>
            <li>Wear a properly fitted personal flotation device and carry required safety gear.</li>
            <li>Consider your own skill, fitness, and the limits of your craft.</li>
            <li>Tell someone your plans, and turn back if conditions exceed your comfort or ability.</li>
          </ul>
        </div>
        <p>
          If your own assessment disagrees with anything on this site, trust your judgement and the
          official sources, not this site.
        </p>
      </section>

      <section className="method-panel">
        <div className="method-kicker">03 - Forecast Uncertainty</div>
        <h2>Forecasts and models can be wrong.</h2>
        <p>
          Verdicts are built from weather forecasts, launch profiles, fetch estimates, pressure
          trends, and heuristic models of fishing and craft conditions. All of these carry
          uncertainty and can be inaccurate or out of date. Conditions on a specific lake can differ
          substantially from the model data used here. Do not treat the output as precise or as a
          substitute for real-time observation.
        </p>
      </section>

      <section className="method-panel">
        <div className="method-kicker">04 - Regulations</div>
        <h2>Regulation summaries are not the law.</h2>
        <p>
          If regulation summaries are shown on this site now or in the future, they are a convenience
          summary only and may not reflect current regulations. Regulations can change, including
          through in-season variation orders. You are responsible for knowing and following the
          current, official regulations. Always confirm seasons, limits, size restrictions,
          sanctuaries, and licensing directly with the Government of Ontario before you fish.
        </p>
      </section>

      <section className="method-panel">
        <div className="method-kicker">05 - No Liability</div>
        <h2>You use this site at your own risk.</h2>
        <p>
          To the fullest extent permitted by law, this site and its operator accept no liability for
          any injury, death, loss, damage, fine, or other harm arising from your use of, or reliance
          on, any information provided here, including decisions about whether or where to go on the
          water, how to fish, or which regulations apply.
        </p>
      </section>

      <section className="method-panel">
        <div className="method-kicker">06 - Not Navigation</div>
        <h2>Not a navigation or emergency tool.</h2>
        <p>
          This site is not a marine navigation system and must not be used for navigation or in an
          emergency. In an emergency, contact local emergency services.
        </p>
      </section>

      <section className="method-panel method-disclaimer">
        <div className="method-kicker">07 - Acknowledgement</div>
        <h2>Use means acknowledgement.</h2>
        <p>
          By using this site you acknowledge that you have read and understood this notice. If you do
          not agree, do not rely on the information provided here. See also the{" "}
          <a href="/methods">Methods</a> page for how forecasts are built and where the data comes
          from.
        </p>
      </section>
    </main>
  );
}
