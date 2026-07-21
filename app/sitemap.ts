import type { MetadataRoute } from "next";
import { lakeProfiles } from "@/lib/lakeProfiles";
import { absoluteUrl, speciesIsIndexable } from "@/lib/seo";
import { speciesPathSegment } from "@/lib/species";
import { spots } from "@/lib/spots";

function safeDate(value: string, fallback: Date): Date {
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? fallback : parsed;
}

// Sitemap lists ONLY indexable URLs: the four core pages, all 20 lake pages, and
// the destination/strong species pages. Thin (present-tier) species pages are
// noindex,follow and deliberately excluded — a sitemap should advertise only the
// pages we want indexed.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const core: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/fishing"), lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: absoluteUrl("/about"), lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: absoluteUrl("/faq"), lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: absoluteUrl("/disclaimer"), lastModified: now, changeFrequency: "yearly", priority: 0.3 }
  ];

  const lakePages: MetadataRoute.Sitemap = spots.map((spot) => {
    const profile = lakeProfiles[spot.id];
    return {
      url: absoluteUrl(`/${spot.id}/fishing`),
      lastModified: profile ? safeDate(profile.lastVerified, now) : now,
      changeFrequency: "daily",
      priority: 0.8
    };
  });

  const speciesPages: MetadataRoute.Sitemap = Object.values(lakeProfiles).flatMap((profile) =>
    profile.species
      .filter((species) => speciesIsIndexable(species.tier))
      .map((species) => ({
        url: absoluteUrl(`/${profile.slug}/fishing/${speciesPathSegment(species.displayName)}`),
        lastModified: safeDate(profile.lastVerified, now),
        changeFrequency: "weekly" as const,
        priority: 0.6
      }))
  );

  return [...core, ...lakePages, ...speciesPages];
}
