import { execFileSync } from "node:child_process";
import type { MetadataRoute } from "next";
import { activeCities } from "@/lib/cities";
import { absoluteUrl } from "@/lib/site";

/**
 * Fallback, falls zur Build-Zeit keine Git-Historie verfügbar ist
 * (z. B. Export ohne .git). Beim Anheben: Datum des letzten echten
 * Content-Releases eintragen, nicht das Deploy-Datum.
 */
const CONTENT_BASELINE = "2026-09-15T00:00:00.000Z";

/**
 * Letztes Änderungsdatum aus der Git-Historie der Quelldateien.
 *
 * Google wertet <lastmod> nur aus, solange es nachweislich stimmt. Deshalb
 * NICHT das Build-Datum verwenden: das würde bei jedem Deploy alle 49 URLs
 * als "geändert" melden und das Signal entwerten. Hinweis: Bei einem flachen
 * Clone (git clone --depth=1) kennt Git nur einen Commit, dann fallen alle
 * Daten auf dessen Datum zusammen — inhaltlich immer noch korrekt, nur
 * weniger granular.
 */
function gitLastModified(files: string[]): string {
  let newest = "";
  for (const file of files) {
    try {
      const out = execFileSync(
        "git",
        ["log", "-1", "--format=%cI", "--", file],
        { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] },
      ).trim();
      if (out && out > newest) newest = out;
    } catch {
      // Git nicht verfügbar → Baseline greift unten.
    }
  }
  return newest || CONTENT_BASELINE;
}

interface Entry {
  path: string;
  /** Quelldateien, die den Inhalt dieser URL bestimmen. */
  sources: string[];
  priority: number;
}

const SHARED = ["src/components/sections.tsx", "src/lib/services.ts"];

const staticEntries: Entry[] = [
  { path: "/", sources: ["src/app/page.tsx", ...SHARED], priority: 1 },
  { path: "/leistungen/", sources: ["src/app/leistungen/page.tsx", ...SHARED], priority: 0.9 },
  { path: "/einsatzgebiet/", sources: ["src/app/einsatzgebiet/page.tsx", "src/lib/cities.ts"], priority: 0.9 },
  { path: "/leistungen/buero-reinigung/", sources: ["src/app/leistungen/buero-reinigung/page.tsx"], priority: 0.8 },
  { path: "/leistungen/glasreinigung-fensterreinigung/", sources: ["src/app/leistungen/glasreinigung-fensterreinigung/page.tsx"], priority: 0.8 },
  { path: "/leistungen/winterdienst/", sources: ["src/app/leistungen/winterdienst/page.tsx"], priority: 0.8 },
  { path: "/leistungen/entruempelung-haushaltsaufloesung/", sources: ["src/app/leistungen/entruempelung-haushaltsaufloesung/page.tsx"], priority: 0.8 },
  { path: "/leistungen/taubenabwehr/", sources: ["src/app/leistungen/taubenabwehr/page.tsx"], priority: 0.8 },
  { path: "/leistungen/abbrucharbeiten/", sources: ["src/app/leistungen/abbrucharbeiten/page.tsx"], priority: 0.8 },
  { path: "/baureinigung/", sources: ["src/app/baureinigung/page.tsx"], priority: 0.8 },
  { path: "/hausmeisterservice/", sources: ["src/app/hausmeisterservice/page.tsx"], priority: 0.8 },
  { path: "/ueber-uns/", sources: ["src/app/ueber-uns/page.tsx"], priority: 0.6 },
  { path: "/kontakt/", sources: ["src/app/kontakt/page.tsx"], priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const cityEntries: Entry[] = activeCities.flatMap((city) => [
    {
      path: `/leistungen/gebaeudereinigung/${city.slug}/`,
      sources: [
        "src/app/leistungen/gebaeudereinigung/[stadt]/page.tsx",
        "src/lib/city-content.ts",
      ],
      priority: 0.7,
    },
    {
      path: `/leistungen/treppenhausreinigung/${city.slug}/`,
      sources: [
        "src/app/leistungen/treppenhausreinigung/[stadt]/page.tsx",
        "src/lib/city-content.ts",
      ],
      priority: 0.7,
    },
  ]);

  return [...staticEntries, ...cityEntries].map(({ path, sources, priority }) => ({
    url: absoluteUrl(path),
    lastModified: gitLastModified(sources),
    changeFrequency: "monthly",
    priority,
  }));
}
