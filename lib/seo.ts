import type { SpeciesTier } from "@/lib/lakeProfiles/types";

// Single source of truth for the production origin. Override per-environment with
// NEXT_PUBLIC_SITE_URL (e.g. a Vercel preview URL); falls back to the canonical domain.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.biteclub.ca").replace(
  /\/+$/,
  ""
);

export const SITE_NAME = "Bite Club";

// Default social-share image (1200x630) used when a page has no more specific art.
export const DEFAULT_OG_IMAGE = "/og/default.jpg";

/** Build an absolute URL from a site-root-relative path. */
export function absoluteUrl(path = "/"): string {
  const url = new URL(path.startsWith("/") ? path : `/${path}`, `${SITE_URL}/`);

  // Keep the origin root as "/" while canonicalizing every other pathname
  // without a trailing slash.
  if (url.pathname !== "/") {
    url.pathname = url.pathname.replace(/\/+$/, "");
  }

  return url.toString();
}

// Only species with genuine, unique tactical copy (destination/strong tiers) are
// indexed. Present-tier pages are thin/templated, so they render noindex,follow and
// are kept out of the sitemap to protect site-level quality signals. `absent` never
// renders a page.
export function speciesIsIndexable(tier: SpeciesTier): boolean {
  return tier === "destination" || tier === "strong";
}
