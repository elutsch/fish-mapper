import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // API routes carry no indexable content. Thin species pages are NOT
        // disallowed here — they're kept crawlable and set noindex,follow via
        // page metadata so link equity still flows to the lake pages.
        disallow: ["/api/"]
      }
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL
  };
}
