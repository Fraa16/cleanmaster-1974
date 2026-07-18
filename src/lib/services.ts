export type ServiceIcon =
  | "buero"
  | "gebaeude"
  | "treppenhaus"
  | "glas"
  | "winter"
  | "entruempelung"
  | "tauben"
  | "bau"
  | "hausmeister";

/** Stockfoto zur Leistung. Pfade unter public/images/, Alt-Text auf Deutsch. */
export interface ServiceImage {
  src: string;
  alt: string;
}

export interface Service {
  slug: string;
  href: string;
  title: string;
  teaser: string;
  icon: ServiceIcon;
  /** Optional: manche Leistungen haben (noch) kein passendes Foto. */
  image?: ServiceImage;
}

/** Die 9 Hauptleistungen mit den Teasern der Startseite (Copy V2, Sektion 3). */
export const services: Service[] = [
  {
    slug: "buero-reinigung",
    href: "/leistungen/buero-reinigung/",
    title: "Büroreinigung",
    teaser:
      "Saubere Büros vor oder nach Ihren Geschäftszeiten. Täglich, wöchentlich oder im vereinbarten Turnus, mit festem Reinigungsteam.",
    icon: "buero",
    image: {
      src: "/images/buero.jpg",
      alt: "Reinigungskraft von Cleanmaster 1974 wischt einen Tisch im Büro",
    },
  },
  {
    slug: "gebaeudereinigung",
    href: "/leistungen/gebaeudereinigung/stuttgart/",
    title: "Gebäudereinigung / Unterhaltsreinigung",
    teaser:
      "Die regelmäßige Reinigung Ihrer Gewerbeflächen, Praxen und Wohnanlagen nach Leistungsverzeichnis. Zum festen monatlichen Pauschalpreis.",
    icon: "gebaeude",
    image: {
      src: "/images/gebaeude.jpg",
      alt: "Unterhaltsreinigung: maschinelle Bodenreinigung in einem Gewerbeobjekt",
    },
  },
  {
    slug: "treppenhausreinigung",
    href: "/leistungen/treppenhausreinigung/stuttgart/",
    title: "Treppenhausreinigung",
    teaser:
      "Gepflegte Treppenhäuser für Hausverwaltungen und Eigentümergemeinschaften. Mit Reinigungsplan zum Aushang im Objekt.",
    icon: "treppenhaus",
    image: {
      src: "/images/treppenhaus.jpg",
      alt: "Treppenhausreinigung in einem Mehrfamilienhaus",
    },
  },
  {
    slug: "glasreinigung-fensterreinigung",
    href: "/leistungen/glasreinigung-fensterreinigung/",
    title: "Glas- und Fensterreinigung",
    teaser:
      "Streifenfreie Fenster, Schaufenster und Glasfassaden. Auch in großer Höhe mit Teleskop- und Osmosetechnik.",
    icon: "glas",
    image: {
      src: "/images/fenster.jpg",
      alt: "Fensterreinigung einer Glasfassade mit Einwascher am Teleskopstiel",
    },
  },
  {
    slug: "winterdienst",
    href: "/leistungen/winterdienst/",
    title: "Winterdienst",
    teaser:
      "Wir räumen und streuen, bevor Mitarbeiter und Mieter aus dem Haus gehen. Ihre Räum- und Streupflicht ist damit erfüllt und jeder Einsatz dokumentiert.",
    icon: "winter",
  },
  {
    slug: "entruempelung-haushaltsaufloesung",
    href: "/leistungen/entruempelung-haushaltsaufloesung/",
    title: "Entrümpelung & Haushaltsauflösung",
    teaser:
      "Wohnungen, Häuser, Keller und Gewerbeflächen, besenrein übergeben. Zum verbindlichen Festpreis nach Besichtigung.",
    icon: "entruempelung",
    image: {
      src: "/images/entruempelung.jpg",
      alt: "Entrümpelung: Team von Cleanmaster 1974 trägt Umzugskartons aus einem Objekt",
    },
  },
  {
    slug: "taubenabwehr",
    href: "/leistungen/taubenabwehr/",
    title: "Taubenabwehr",
    teaser:
      "Spikes, Netze und Vergrämung gegen Taubenbefall an Fassade, Balkon und Dach. Fachgerecht und tierschutzkonform.",
    icon: "tauben",
  },
  {
    slug: "baureinigung",
    href: "/baureinigung/",
    title: "Baureinigung",
    teaser:
      "Baugrob-, Bauzwischen- und Bauendreinigung, abgestimmt auf Ihren Bauzeitenplan. Damit die Übergabe termingerecht klappt.",
    icon: "bau",
    image: {
      src: "/images/baureinigung.jpg",
      alt: "Baureinigung: Entfernen von Bauschutt und Mörtelresten nach dem Innenausbau",
    },
  },
  {
    slug: "hausmeisterservice",
    href: "/hausmeisterservice/",
    title: "Hausmeisterservice",
    teaser:
      "Laufende Objektbetreuung mit Kontrollgängen, Kleinreparaturen und Grünpflege. Ein Ansprechpartner für Ihr ganzes Objekt.",
    icon: "hausmeister",
  },
];

export const serviceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);
