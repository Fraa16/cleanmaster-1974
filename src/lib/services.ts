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

export interface Service {
  slug: string;
  href: string;
  title: string;
  teaser: string;
  icon: ServiceIcon;
  image: string;
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
    image: "/images/services/bueroreinigung.svg",
  },
  {
    slug: "gebaeudereinigung",
    href: "/leistungen/gebaeudereinigung/stuttgart/",
    title: "Gebäudereinigung / Unterhaltsreinigung",
    teaser:
      "Die regelmäßige Reinigung Ihrer Gewerbeflächen, Praxen und Wohnanlagen nach Leistungsverzeichnis. Zum festen monatlichen Pauschalpreis.",
    icon: "gebaeude",
    image: "/images/services/gebaeudereinigung.svg",
  },
  {
    slug: "treppenhausreinigung",
    href: "/leistungen/treppenhausreinigung/stuttgart/",
    title: "Treppenhausreinigung",
    teaser:
      "Gepflegte Treppenhäuser für Hausverwaltungen und Eigentümergemeinschaften. Mit Reinigungsplan zum Aushang im Objekt.",
    icon: "treppenhaus",
    image: "/images/services/treppenhausreinigung.svg",
  },
  {
    slug: "glasreinigung-fensterreinigung",
    href: "/leistungen/glasreinigung-fensterreinigung/",
    title: "Glas- und Fensterreinigung",
    teaser:
      "Streifenfreie Fenster, Schaufenster und Glasfassaden. Auch in großer Höhe mit Teleskop- und Osmosetechnik.",
    icon: "glas",
    image: "/images/services/glasreinigung.svg",
  },
  {
    slug: "winterdienst",
    href: "/leistungen/winterdienst/",
    title: "Winterdienst",
    teaser:
      "Wir räumen und streuen, bevor Mitarbeiter und Mieter aus dem Haus gehen. Ihre Räum- und Streupflicht ist damit erfüllt und jeder Einsatz dokumentiert.",
    icon: "winter",
    image: "/images/services/winterdienst.svg",
  },
  {
    slug: "entruempelung-haushaltsaufloesung",
    href: "/leistungen/entruempelung-haushaltsaufloesung/",
    title: "Entrümpelung & Haushaltsauflösung",
    teaser:
      "Wohnungen, Häuser, Keller und Gewerbeflächen, besenrein übergeben. Zum verbindlichen Festpreis nach Besichtigung.",
    icon: "entruempelung",
    image: "/images/services/entruempelung.svg",
  },
  {
    slug: "taubenabwehr",
    href: "/leistungen/taubenabwehr/",
    title: "Taubenabwehr",
    teaser:
      "Spikes, Netze und Vergrämung gegen Taubenbefall an Fassade, Balkon und Dach. Fachgerecht und tierschutzkonform.",
    icon: "tauben",
    image: "/images/services/taubenabwehr.svg",
  },
  {
    slug: "baureinigung",
    href: "/baureinigung/",
    title: "Baureinigung",
    teaser:
      "Baugrob-, Bauzwischen- und Bauendreinigung, abgestimmt auf Ihren Bauzeitenplan. Damit die Übergabe termingerecht klappt.",
    icon: "bau",
    image: "/images/services/baureinigung.svg",
  },
  {
    slug: "hausmeisterservice",
    href: "/hausmeisterservice/",
    title: "Hausmeisterservice",
    teaser:
      "Laufende Objektbetreuung mit Kontrollgängen, Kleinreparaturen und Grünpflege. Ein Ansprechpartner für Ihr ganzes Objekt.",
    icon: "hausmeister",
    image: "/images/services/hausmeisterservice.svg",
  },
];
