"use client";

import posthog from "posthog-js";

export function TrackedSpeciesLink({
  href,
  waterbodyId,
  speciesId,
  children
}: {
  href: string;
  waterbodyId: string;
  speciesId: string;
  children: React.ReactNode;
}) {
  return (
    <a
      className="profile-species-card"
      href={href}
      onClick={() =>
        posthog.capture("species_guide_selected", {
          waterbody_id: waterbodyId,
          species_id: speciesId,
          source: "lake_profile"
        })
      }
    >
      {children}
    </a>
  );
}
