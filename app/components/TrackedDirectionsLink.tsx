"use client";

import posthog from "posthog-js";

export function TrackedDirectionsLink({ href, waterbodyId }: { href: string; waterbodyId: string }) {
  return (
    <a
      className="button launch-directions"
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={() => posthog.capture("lake_directions_opened", { waterbody_id: waterbodyId })}
    >
      Get Directions
    </a>
  );
}
