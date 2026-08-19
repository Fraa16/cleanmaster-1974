/**
 * Zentrale JSON-LD-Bausteine. Eine einzige Quelle für die Geschäfts-Entität,
 * damit Schema nicht über Footer/Kontakt/Startseite auseinanderläuft.
 *
 * Alle Werte stammen aus site.ts / cities.ts (keine Hardcodes). Bewusst NICHT
 * enthalten (bis belegbar):
 *   - aggregateRating / review  → erst mit echten Google-Bewertungen
 *   - sameAs                    → erst wenn Social-Profile existieren
 *   - geo (lat/lng)             → exakte Koordinaten aus dem Google-Business-
 *                                 Profil-Pin nachtragen, nicht raten
 */
import { site, absoluteUrl } from "@/lib/site";
import { cityNames } from "@/lib/cities";

/** Stabile ID der Entität; als @id referenzierbar (z. B. als Service.provider). */
export const businessId = `${site.domain}/#business`;

const entityDescription =
  "Cleanmaster 1974 ist ein familiengeführtes Unternehmen für Gebäudereinigung und Facility Services mit Sitz in Stuttgart. Zu den Leistungen gehören Unterhaltsreinigung, Büroreinigung, Treppenhausreinigung, Glasreinigung, Winterdienst, Entrümpelung, Taubenabwehr, Baureinigung und Hausmeisterservice in Stuttgart und 17 umliegenden Städten.";

/** Kanonische Geschäfts-Entität (LocalBusiness). Sitewide über den Footer gerendert. */
export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": businessId,
  name: site.name,
  url: site.domain,
  description: entityDescription,
  telephone: "+4917672305847",
  email: site.email,
  logo: `${site.domain}/cleanmaster1974-logo.svg`,
  image: `${site.domain}/opengraph-image.jpg`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.zip,
    addressLocality: site.address.city,
    addressCountry: site.address.country,
  },
  // Öffnungs-/Erreichbarkeitszeiten (mit dem Google-Business-Profil identisch halten)
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "19:30",
    },
  ],
  areaServed: cityNames.map((name) => ({ "@type": "City", name })),
};

interface ServiceSchemaInput {
  /** Anzeigename der Leistung, z. B. "Büroreinigung Stuttgart". */
  name: string;
  /** Interner Pfad der Seite, z. B. "/leistungen/buero-reinigung/". */
  path: string;
  /** schema.org serviceType, z. B. "Büroreinigung". */
  serviceType: string;
  /** Kurzbeschreibung der Leistung. */
  description: string;
  /** Bediente Orte; Default: gesamtes Einzugsgebiet. */
  areaServedNames?: string[];
}

/**
 * Service-Node, verknüpft mit der Geschäfts-Entität (provider @id). Bindet die
 * konkrete Leistung + das bediente Gebiet an den Betrieb (GEO/AEO-Signal).
 */
export function serviceSchema({
  name,
  path,
  serviceType,
  description,
  areaServedNames = cityNames,
}: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType,
    description,
    url: absoluteUrl(path),
    provider: { "@id": businessId },
    areaServed: areaServedNames.map((n) => ({ "@type": "City", name: n })),
  };
}
