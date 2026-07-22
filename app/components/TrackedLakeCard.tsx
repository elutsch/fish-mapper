"use client";

import posthog from "posthog-js";

export function TrackedLakeCard({
  href,
  waterbodyId,
  forecastStatus,
  children
}: {
  href: string;
  waterbodyId: string;
  forecastStatus: "prime" | "marginal" | "tough" | "unknown";
  children: React.ReactNode;
}) {
  return (
    <a
      className="lake-card spot-card"
      href={href}
      onClick={() =>
        posthog.capture("lake_card_selected", {
          waterbody_id: waterbodyId,
          forecast_status: forecastStatus,
          source: "browse_lakes"
        })
      }
    >
      {children}
    </a>
  );
}
