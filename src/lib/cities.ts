export interface City {
  slug: string;
  name: string;
  /** true = eigene Stadtseiten vorhanden (Gebäude- & Treppenhausreinigung) */
  active: boolean;
}

/**
 * Die 18 Städte des Einzugsgebiets in der Reihenfolge der Städte-Chips
 * (Startseite, Sektion 6). Alle 18 Städte sind aktiv; jede hat einen
 * individuell geschriebenen Lokal-Absatz in city-content.ts.
 * Eine neue Stadt braucht IMMER erst ihren Eintrag dort.
 */
export const cities: City[] = [
  { slug: "stuttgart", name: "Stuttgart", active: true },
  { slug: "vaihingen", name: "Vaihingen", active: true },
  { slug: "waiblingen", name: "Waiblingen", active: true },
  { slug: "kirchheim", name: "Kirchheim", active: true },
  { slug: "echterdingen", name: "Echterdingen", active: true },
  { slug: "ostfildern", name: "Ostfildern", active: true },
  { slug: "fellbach", name: "Fellbach", active: true },
  { slug: "kornwestheim", name: "Kornwestheim", active: true },
  { slug: "filderstadt", name: "Filderstadt", active: true },
  { slug: "ditzingen", name: "Ditzingen", active: true },
  { slug: "sindelfingen", name: "Sindelfingen", active: true },
  { slug: "rutesheim", name: "Rutesheim", active: true },
  { slug: "leonberg", name: "Leonberg", active: true },
  { slug: "ludwigsburg", name: "Ludwigsburg", active: true },
  { slug: "winnenden", name: "Winnenden", active: true },
  { slug: "weinstadt", name: "Weinstadt", active: true },
  { slug: "boeblingen", name: "Böblingen", active: true },
  { slug: "gerlingen", name: "Gerlingen", active: true },
];

export const activeCities = cities.filter((c) => c.active);

export const cityBySlug = (slug: string) =>
  cities.find((c) => c.slug === slug);

export const cityNames = cities.map((c) => c.name);
