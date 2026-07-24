import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Straight answers about Bite Club fishing forecasts, lake coverage, craft safety, access, and Ontario fishing regulations.",
  alternates: { canonical: "/faq" }
};

// Flatten a JSX answer into plain text so the FAQPage schema stays a single source
// of truth with the rendered content (recurses through <p>, <strong>, <a>, etc.).
function nodeToText(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(nodeToText).join("");
  if (typeof node === "object" && "props" in node) {
    return nodeToText((node as { props?: { children?: ReactNode } }).props?.children);
  }
  return "";
}

type FaqSection = {
  id: string;
  title: string;
  items: Array<{ question: string; answer: ReactNode }>;
};

const sections: FaqSection[] = [
  {
    id: "about",
    title: "About Bite Club",
    items: [
      {
        question: "What is Bite Club?",
        answer: (
          <p>
            Bite Club is a fishing conditions tool for Southern Ontario waterbodies. Each location
            gets a Prime, Solid, Grind, or Tough Fishability call, an hourly conditions table, and
            separate launch verdicts for powerboat, kayak, and canoe. Researched lake pages also
            include access, species, structure, and regulation guidance.
          </p>
        )
      },
      {
        question: "What lakes and areas does Bite Club cover?",
        answer: (
          <p>
            Coverage starts in the Kitchener-Waterloo and Grand River region and expands outward
            across Southern Ontario. Researched lake pages are published once their launches,
            species, structure, sources, and regulation snapshots have been checked.
          </p>
        )
      },
      {
        question: "Is Bite Club free?",
        answer: <p>Yes. Bite Club is free to use.</p>
      }
    ]
  },
  {
    id: "forecast",
    title: "How The Forecast Works",
    items: [
      {
        question: "How does Bite Club predict the fishing bite?",
        answer: (
          <p>
            Each lake&apos;s Fishability grade blends two scores. <strong>Fish Activity</strong>{" "}
            contributes 60% from air temperature, light, pressure trend, and a secondary lunar-phase
            adjustment. <strong>General water conditions</strong> contribute 40% from the day&apos;s
            wind and gusts, adjusted for the lake&apos;s fetch, so bigger, more exposed lakes read
            rougher. The result is a Prime, Solid, Grind, or Tough call. It is a deterministic
            planning heuristic, not a catch-probability model or an AI-generated forecast.
          </p>
        )
      },
      {
        question: "What do Prime, Solid, Grind, and Tough mean?",
        answer: (
          <p>
            They summarize Fish Activity and general water conditions for the day.{" "}
            <strong>Prime</strong> means the bite and water both line up. <strong>Solid</strong> is a
            worthwhile day with manageable tradeoffs. <strong>Grind</strong> means success takes a
            narrower window or more work. <strong>Tough</strong> means the day is working against
            you; a general Do Not Launch read always lands here. Always check the per-craft verdict,
            since the same wind can be manageable in a powerboat and dangerous in a canoe.
          </p>
        )
      },
      {
        question: "What do the hourly Fish Activity and Launch Read ratings mean?",
        answer: (
          <p>
            Each hourly card carries two ratings. <strong>Fish Activity</strong> (Low, Fair, High, or
            Maximum) reflects the likely bite that hour from air temperature, light, and the pressure
            trend. <strong>Launch Read</strong> (All Clear, Fishable, Caution, or Do Not
            Launch) is a craft-agnostic comparison of that hour&apos;s wind and gusts against the
            lake&apos;s fetch. It does not know which craft you are using. The separate powerboat,
            kayak, and canoe cards are the authoritative launch verdicts because they apply each
            craft&apos;s limits and access requirements. Always use those cards for your launch
            decision.
          </p>
        )
      },
      {
        question: "How accurate are Bite Club forecasts?",
        answer: (
          <p>
            Bite Club helps compare days and identify manageable launch windows, but it has not been
            validated as a predictor of catches. Forecast models can miss local wind, storms, water
            levels, and ramp conditions. Treat the call as one planning input and trust conditions
            at the water over the page.
          </p>
        )
      },
      {
        question: "Does Bite Club measure water temperature?",
        answer: (
          <p>
            No. The dashboard shows the day&apos;s forecast air temperature (high and low), which
            also feeds the Fish Activity score. It does not measure or estimate lake-water
            temperature, because most covered inland lakes do not have a live public temperature
            sensor.
          </p>
        )
      },
      {
        question: "How often is Bite Club updated?",
        answer: (
          <p>
            Forecast requests are cached for up to six hours, and a scheduled snapshot refresh runs
            daily. Lake profiles and regulation snapshots show when their research was last
            verified, because those source documents update on a different schedule than weather.
          </p>
        )
      }
    ]
  },
  {
    id: "conditions",
    title: "Fishing Conditions Explained",
    items: [
      {
        question: "Does barometric pressure affect fishing?",
        answer: (
          <p>
            Pressure trend is generally more useful than the absolute number. Falling pressure
            ahead of changing weather can coincide with a stronger feeding window, while rapidly
            rising pressure after a front can make fishing slower. Bite Club uses the recent
            pressure trend as one of the three inputs to its Fish Activity score, alongside air
            temperature and light.
          </p>
        )
      },
      {
        question: "Do fish bite before or after a cold front?",
        answer: (
          <p>
            Anglers often see better activity before a front and slower fishing after it passes,
            particularly under bright, stable high pressure. Bite Club does not identify named
            fronts directly; it uses pressure direction and the hourly weather forecast as the
            available signals.
          </p>
        )
      },
      {
        question: "How does wind affect fishing?",
        answer: (
          <p>
            Light to moderate wind can reduce glare and push bait toward windward structure. Strong
            wind becomes a boat-control and safety problem, especially when it blows over a long
            stretch of open water. The general hourly and daily reads combine wind, gusts, and each
            waterbody&apos;s estimated fetch. The separate craft cards then apply the powerboat,
            kayak, and canoe limits, and flag gust spikes so you can time your launch to the calmer
            stretches.
          </p>
        )
      },
      {
        question: "What is the best time of day to fish?",
        answer: (
          <p>
            Dawn and dusk are dependable starting points because lower light often gives predators
            an advantage, and overcast skies can extend that window. On each lake&apos;s hourly
            cards, the day&apos;s temperature and pressure set the Fish Activity baseline, then light
            shifts it hour by hour. The general Launch Read flags the calmer stretches. Confirm any
            candidate window against your craft&apos;s authoritative launch card.
          </p>
        )
      },
      {
        question: "Does moon phase or solunar theory affect the forecast?",
        answer: (
          <p>
            Yes, but only as a secondary Fish Activity input. A continuous lunar curve adds up to six
            activity points near new and full moons and subtracts up to six near quarter moons. The
            effect is deliberately smaller than temperature, pressure, and light because lunar
            evidence varies by species and waterbody.
          </p>
        )
      },
      {
        question: "Does cloud cover affect the bite?",
        answer: (
          <p>
            Overcast skies can lower light and help extend daytime feeding, while bright skies often
            push fish toward shade, depth, or cover. Cloud cover appears in the source forecast but
            is not currently a direct input to the daily grade.
          </p>
        )
      }
    ]
  },
  {
    id: "safety",
    title: "Craft Safety",
    items: [
      {
        question: "Why are powerboat, kayak, and canoe rated separately?",
        answer: (
          <p>
            The same wind can be routine in a powerboat and dangerous in an open canoe. Bite Club
            applies separate wind and gust thresholds to each craft, then tightens the result on
            waterbodies with longer open-water fetch. It also checks whether the selected launch
            supports a trailer or carry-in craft.
          </p>
        )
      },
      {
        question: "How much wind is too much for a kayak or canoe?",
        answer: (
          <p>
            There is no universal safe cutoff. Bite Club&apos;s conservative baseline go thresholds
            are 12 km/h sustained wind for an open canoe, 18 km/h for a fishing kayak, and 30 km/h
            for a small powerboat, with separate gust limits and added fetch penalties. These are
            model thresholds, not personal safety limits. Your craft, skill, water temperature,
            waves, and actual ramp conditions still decide whether you launch.
          </p>
        )
      },
      {
        question: "If Bite Club says Prime, is it safe to go out?",
        answer: (
          <p>
            Not necessarily. Prime reflects general modelled conditions and cannot account for your
            equipment, experience, health, or the water at the moment you arrive. Check official
            warnings, wear a properly fitted personal flotation device, and trust your own read at
            the ramp. Read the <a href="/disclaimer">Safety Notice &amp; Disclaimer</a> before relying
            on any report.
          </p>
        )
      }
    ]
  },
  {
    id: "regulations",
    title: "Regulations And Access",
    items: [
      {
        question: "Are the fishing regulations on Bite Club official?",
        answer: (
          <p>
            No. They are dated convenience summaries drawn from Government of Ontario sources.
            Rules can change, including through in-season variation orders. Confirm seasons, limits,
            size restrictions, sanctuaries, and licensing in the current{" "}
            <a
              href="https://www.ontario.ca/document/ontario-fishing-regulations-summary"
              target="_blank"
              rel="noreferrer"
            >
              Ontario Fishing Regulations Summary
            </a>{" "}
            before fishing.
          </p>
        )
      },
      {
        question: "Do I need a fishing licence in Ontario?",
        answer: (
          <p>
            Most anglers need a valid Outdoors Card and fishing licence, while exemptions and
            one-day licence rules depend on residency, age, and other circumstances. Check your
            exact requirement and purchase documents through the official{" "}
            <a
              href="https://www.ontario.ca/page/get-outdoors-card-and-licence-summary"
              target="_blank"
              rel="noreferrer"
            >
              Ontario Outdoors Card and licence service
            </a>
            .
          </p>
        )
      }
    ]
  }
];

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: sections.flatMap((section) =>
      section.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: nodeToText(item.answer).replace(/\s+/g, " ").trim()
        }
      }))
    )
  };

  return (
    <main className="screen methodology-page faq-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="hero poster-hero methodology-hero faq-hero">
        <span className="alert">FAQ</span>
        <h1>Straight Answers</h1>
        <p className="summary">
          How Bite Club works, what the conditions mean, and where the forecast stops. Read the{" "}
          <a href="/disclaimer">Safety Notice &amp; Disclaimer</a> before heading out.
        </p>
      </section>

      <nav className="faq-index" aria-label="FAQ sections">
        {sections.map((section, index) => (
          <a key={section.id} href={"#" + section.id}>
            {String(index + 1).padStart(2, "0")} {section.title}
          </a>
        ))}
      </nav>

      {sections.map((section, sectionIndex) => (
        <section key={section.id} id={section.id} className="faq-section">
          <div className="faq-section-heading">
            <span>{String(sectionIndex + 1).padStart(2, "0")}</span>
            <h2>{section.title}</h2>
          </div>
          <div className="faq-list">
            {section.items.map((item) => (
              <details key={item.question} className="faq-item">
                <summary>
                  <span>{item.question}</span>
                  <i aria-hidden="true">+</i>
                </summary>
                <div className="faq-answer">{item.answer}</div>
              </details>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
