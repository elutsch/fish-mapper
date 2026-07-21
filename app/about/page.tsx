import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Bite Club exists and how it gives Ontario anglers honest lake-by-lake fishing condition calls.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <main className="screen methodology-page about-page">
      <section className="hero poster-hero methodology-hero">
        <span className="alert">About Bite Club</span>
        <h1>Before You Launch</h1>
        <p className="summary">
          Bite Club reads the weather, the launch, and the shape of the lake itself, then gives
          Ontario anglers a straight answer before they leave the driveway.
        </p>
        <div className="burst">No<br />Vibes</div>
      </section>

      <section className="method-panel">
        <div className="method-kicker">01 - The Problem</div>
        <h2>Kill the wasted morning.</h2>
        <p>
          Load the truck, hitch the boat, drive an hour - and find the lake blown out and the bite
          stone dead. Bite Club exists to kill that morning.
        </p>
        <p>
          For lakes across Ontario - starting in the Kitchener-Waterloo and Grand River region - it
          reads the weather, the launch, and the shape of the lake itself, then hands you a
          straight answer before you leave the driveway: is the bite on, which shore fishes clean,
          and can you safely put a boat, kayak, or canoe on it today.
        </p>
      </section>

      <section className="method-panel">
        <div className="method-kicker">02 - Why It Exists</div>
        <h2>Most fishing forecasts are too vague to trust.</h2>
        <p>
          Most "best time to fish" tools are a pressure arrow and a moon phase in a trench coat.
          They tell every angler on every lake the same vague thing, and they cannot tell a calm
          morning from a day the wind will pin you to one shore.
        </p>
        <p>
          The data to do it <em>right</em> already exists - government lake surveys, real weather
          models, launch records, and the actual geometry of every lake. Nobody was bothering to
          pull it together into an honest, lake-by-lake call. So we did.
        </p>
        <div className="method-list">
          <p>
            <strong>We will tell you when to stay home.</strong> A tool that only ever says "go
            fish" is a billboard, not a forecast. Some days the smart move is the couch - and we
            will say so.
          </p>
          <p>
            <strong>We show our work.</strong> Every verdict traces back to real data and named
            sources. No black box, no vibes.
          </p>
          <p>
            <strong>We will not oversell a bite.</strong> Our ratings tip the odds in your favour.
            They do not promise fish, and we will not pretend they do.
          </p>
        </div>
        <p>That is the whole mission: an honest read, before you launch.</p>
      </section>

      <section className="method-panel">
        <div className="method-kicker">03 - How It Is Different</div>
        <h2>Honest about the call and the limits.</h2>
        <div className="method-split">
          <article>
            <h3>Honest About What It Knows</h3>
            <p>
              We flag where the science is solid and where it is an estimate. Each daily call blends
              two honest scores - how safely you can launch, and how active the bite is likely to be
              - built from documented weather, the lake&apos;s fetch, and deterministic rules.
              Fish-activity ratings shift your odds; they do not guarantee a catch.
            </p>
          </article>
          <article>
            <h3>Rates Your Craft</h3>
            <p>
              The wind that is nothing in a boat can flip a canoe. Bite Club scores powerboat,
              kayak, and canoe separately off each lake&apos;s open-water fetch - so "go" means go{" "}
              <em>for what you are actually launching</em>.
            </p>
          </article>
          <article>
            <h3>Useful, Not Big</h3>
            <p>
              A lake goes live only when there is real data behind it. A short list we can stand
              behind beats a fat directory of thin pages. Coverage grows outward from the KW region
              as the data does.
            </p>
          </article>
        </div>
      </section>

      <section className="method-panel method-disclaimer">
        <div className="method-kicker">04 - First Rule</div>
        <h2>Check before you launch.</h2>
        <p>
          Check the conditions before you launch - and trust your own eyes at the ramp over anything
          on a screen, ours included. Bite Club makes the call easier. It does not make it for you.
        </p>
        <p>
          Before you head out, read the{" "}
          <a href="/disclaimer">Safety Notice &amp; Disclaimer</a>.
        </p>
      </section>
    </main>
  );
}
