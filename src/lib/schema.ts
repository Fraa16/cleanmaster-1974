/**
 * Zentrale JSON-LD-Bausteine. Eine einzige Quelle für die Geschäfts-Entität,
 * damit Schema nicht über Footer/Kontakt/Startseite auseinanderläuft.
 *
 * Alle Werte stammen aus site.ts / cities.ts / services.ts (keine Hardcodes).
 * Bewusst NICHT enthalten (bis belegbar):
 *   - aggregateRating / review  → erst mit echten Google-Bewertungen
 *   - sameAs                    → erst wenn Social-Profile existieren
 *   - geo (lat/lng)             → exakte Koordinaten aus dem Google-Business-
 *                                 Profil-Pin nachtragen, nicht raten
 */
import { site, absoluteUrl } from "@/lib/site";
import { cityNames } from "@/lib/cities";
import { services } from "@/lib/services";

/** Stabile IDs der Entitäten; als @id referenzierbar. */
export const businessId = `${site.domain}/#business`;
export const websiteId = `${site.domain}/#website`;
export const personId = `${site.domain}/#inhaber`;

const entityDescription =
  "Cleanmaster 1974 ist ein familiengeführtes Unternehmen für Gebäudereinigung und Facility Services mit Sitz in Stuttgart. Zu den Leistungen gehören Unterhaltsreinigung, Büroreinigung, Treppenhausreinigung, Glasreinigung, Winterdienst, Entrümpelung, Taubenabwehr, Baureinigung und Hausmeisterservice in Stuttgart und 17 umliegenden Städten.";

/**
 * Leistungskatalog: bindet die 10 Leistungsseiten als Offer-Knoten an die
 * Geschäfts-Entität. Gibt Suchmaschinen und Antwortmaschinen eine maschinen-
 * lesbare Antwort auf "Was bietet Cleanmaster 1974 an?".
 */
const offerCatalog = {
  "@type": "OfferCatalog",
  name: "Gebäudedienste in Stuttgart und Region",
  itemListElement: services.map((s) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: s.title,
      description: s.teaser,
      url: absoluteUrl(s.href),
    },
  })),
};

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
  currenciesAccepted: "EUR",
  knowsLanguage: ["de"],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.zip,
    addressLocality: site.address.city,
    addressRegion: "Baden-Württemberg",
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
  hasOfferCatalog: offerCatalog,
};

/**
 * WebSite-Knoten. Macht die Website selbst als Entität adressierbar und
 * verknüpft sie mit dem Betrieb (publisher). Ohne diesen Knoten steht die
 * Domain in den Rich Results ohne Herausgeber da.
 */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": websiteId,
  url: site.domain,
  name: site.name,
  inLanguage: "de-DE",
  publisher: { "@id": businessId },
};

/**
 * Der Inhaber als eigene Entität. Er wird auf /ueber-uns/ und im Impressum
 * namentlich genannt, war bisher aber nirgends ausgezeichnet. Für E-E-A-T
 * zählt, dass hinter dem Betrieb eine benennbare Person steht.
 *
 * Bewusst ohne Gründungsangabe: "1974" ist laut Kunde der Markenname, nicht
 * das Gründungsjahr — founder/foundingDate würde hier etwas behaupten, was
 * nicht belegt ist.
 */
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": personId,
  name: "Ajub Akbari",
  jobTitle: "Inhaber",
  worksFor: { "@id": businessId },
  url: absoluteUrl("/ueber-uns/"),
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
  /** Bild der Leistungsseite (Pfad unter /public). */
  image?: string;
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
  image,
}: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name,
    serviceType,
    description,
    url: absoluteUrl(path),
    ...(image ? { image: absoluteUrl(image) } : {}),
    provider: { "@id": businessId },
    areaServed: areaServedNames.map((n) => ({ "@type": "City", name: n })),
  };
}

/**
 * Typisierter Seiten-Knoten (ContactPage / AboutPage / CollectionPage …).
 * Sagt Suchmaschinen, welche Funktion die Seite im Auftritt hat — die
 * Kontaktseite ist damit als Kontaktpunkt des Betriebs erkennbar.
 */
export function webPageSchema({
  type,
  name,
  description,
  path,
  speakable,
  mentions,
}: {
  type: "ContactPage" | "AboutPage" | "CollectionPage" | "WebPage";
  name: string;
  description: string;
  path: string;
  /**
   * CSS-Selektoren der Abschnitte, die sich zum Vorlesen eignen.
   * Sprachassistenten greifen darauf zu; kein Ranking-Faktor, aber ohne
   * die Auszeichnung wird gar nichts vorgelesen.
   */
  speakable?: string[];
  /** Weitere Entitäten, auf die sich die Seite bezieht (z. B. der Inhaber). */
  mentions?: { "@id": string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: "de-DE",
    isPartOf: { "@id": websiteId },
    about: { "@id": businessId },
    ...(speakable
      ? {
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: speakable,
          },
        }
      : {}),
    ...(mentions ? { mentions } : {}),
  };
}
