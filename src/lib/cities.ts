export interface City {
  slug: string;
  name: string;
  /** true = eigene Stadtseiten vorhanden (Gebäude- & Treppenhausreinigung) */
  active: boolean;
}

/**
 * Die 18 Städte des Einzugsgebiets in der Reihenfolge der Städte-Chips
 * (Startseite, Sektion 6). Aktiv sind zum Start die 5 Kernstädte laut
 * Copy-Empfehlung; weitere Städte werden aktiviert, sobald deren
 * individueller Lokal-Absatz in city-content.ts geschrieben ist.
 */
export const cities: City[] = [
  { slug: "stuttgart", name: "Stuttgart", active: true },
  { slug: "vaihingen", name: "Vaihingen", active: false },
  { slug: "waiblingen", name: "Waiblingen", active: false },
  { slug: "kirchheim", name: "Kirchheim", active: false },
  { slug: "echterdingen", name: "Echterdingen", active: false },
  { slug: "ostfildern", name: "Ostfildern", active: false },
  { slug: "fellbach", name: "Fellbach", active: false },
  { slug: "kornwestheim", name: "Kornwestheim", active: false },
  { slug: "filderstadt", name: "Filderstadt", active: false },
  { slug: "ditzingen", name: "Ditzingen", active: false },
  { slug: "sindelfingen", name: "Sindelfingen", active: true },
  { slug: "rutesheim", name: "Rutesheim", active: false },
  { slug: "leonberg", name: "Leonberg", active: true },
  { slug: "ludwigsburg", name: "Ludwigsburg", active: true },
  { slug: "winnenden", name: "Winnenden", active: false },
  { slug: "weinstadt", name: "Weinstadt", active: false },
  { slug: "boeblingen", name: "Böblingen", active: true },
  { slug: "gerlingen", name: "Gerlingen", active: false },
];

export const activeCities = cities.filter((c) => c.active);

export const cityBySlug = (slug: string) =>
  cities.find((c) => c.slug === slug);

export const cityNames = cities.map((c) => c.name);
