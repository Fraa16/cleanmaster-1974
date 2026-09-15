import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Die Formular-Route liefert kein Dokument, nur JSON. Sie gehört nicht
      // in den Index und kostet sonst nur Crawl-Budget.
      disallow: "/api/",
    },
    sitemap: `${site.domain}/sitemap.xml`,
    host: site.domain,
  };
}
