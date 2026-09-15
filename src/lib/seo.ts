/**
 * Zentraler Metadata-Builder. Sorgt dafür, dass jede Seite konsistent
 * Canonical, og:url, og:title/description und ein zur Seite passendes
 * og:image ausliefert.
 *
 * Hintergrund: Next setzt og:url nicht automatisch aus alternates.canonical.
 * Ohne og:url fehlt Crawlern und Social-/AI-Previews die kanonische Adresse
 * des geteilten Dokuments. Ebenso greift ohne openGraph.images auf jeder
 * Seite dasselbe Datei-basierte opengraph-image.jpg — alle 50+ URLs sehen
 * beim Teilen identisch aus.
 */
import type { Metadata } from "next";
import { absoluteUrl, site } from "@/lib/site";

export interface PageMetaInput {
  title: string;
  description: string;
  /** Interner Pfad mit Trailing Slash, z. B. "/leistungen/winterdienst/". */
  path: string;
  /** Seitenbild für og:image (Pfad unter /public). Default: Website-OG-Bild. */
  image?: { src: string; alt: string };
  /** true = noindex,follow (Rechtstexte). */
  noindex?: boolean;
}

export function pageMeta({
  title,
  description,
  path,
  image,
  noindex = false,
}: PageMetaInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: site.name,
      locale: "de_DE",
      type: "website",
      ...(image
        ? { images: [{ url: absoluteUrl(image.src), alt: image.alt }] }
        : {}),
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
