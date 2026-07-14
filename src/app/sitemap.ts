import type { MetadataRoute } from "next";
import { activeCities } from "@/lib/cities";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/",
    "/leistungen/",
    "/leistungen/buero-reinigung/",
    "/leistungen/glasreinigung-fensterreinigung/",
    "/leistungen/winterdienst/",
    "/leistungen/entruempelung-haushaltsaufloesung/",
    "/leistungen/taubenabwehr/",
    "/baureinigung/",
    "/hausmeisterservice/",
    "/ueber-uns/",
    "/kontakt/",
  ];

  const cityPaths = activeCities.flatMap((city) => [
    `/leistungen/gebaeudereinigung/${city.slug}/`,
    `/leistungen/treppenhausreinigung/${city.slug}/`,
  ]);

  return [...staticPaths, ...cityPaths].map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
