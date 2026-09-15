import Link from "next/link";
import { Container, JsonLd } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/page-blocks";
import { CtaBanner, QuestionSection } from "@/components/sections";
import { RegionMap } from "@/components/RegionMap";
import { IconArrowRight } from "@/components/icons";
import { activeCities } from "@/lib/cities";
import { cityContent } from "@/lib/city-content";
import { absoluteUrl } from "@/lib/site";
import { businessId, webPageSchema, websiteId } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

const PATH = "/einsatzgebiet/";

export const metadata = pageMeta({
  title: "Gebäudereinigung Region Stuttgart | Cleanmaster 1974",
  description:
    "Gebäudereinigung in Stuttgart und 17 Städten der Region ✓ Unterhaltsreinigung ✓ Treppenhausreinigung ✓ alle Städte im Überblick. Jetzt Angebot anfordern!",
  path: PATH,
  image: {
    src: "/images/gebaeude.jpg",
    alt: "Unterhaltsreinigung in einem Gewerbeobjekt im Großraum Stuttgart",
  },
});

/**
 * Städte-Hub. Zweck ist doppelt:
 *
 * 1. Interne Verlinkung. Vorher hingen die 36 Stadtseiten an 1–8 internen
 *    Links (Schlusslicht: Treppenhausreinigung Rutesheim mit einem einzigen).
 *    Diese Seite ist sitewide aus dem Footer verlinkt und gibt jeder
 *    Stadtseite einen Link von einer gut verlinkten Seite.
 * 2. Eigene Relevanz für regionale Suchanfragen ("Gebäudereinigung Region
 *    Stuttgart", "Gebäudereinigung Landkreis Böblingen").
 *
 * Die ItemList führt beide Leistungen je Stadt auf — maschinenlesbar für
 * Antwortmaschinen, die "Wo arbeitet Cleanmaster 1974?" beantworten.
 */
const collectionLd = webPageSchema({
  type: "CollectionPage",
  name: "Einsatzgebiet von Cleanmaster 1974",
  description:
    "Alle Städte, in denen Cleanmaster 1974 Gebäudereinigung und Treppenhausreinigung anbietet: Stuttgart und 17 Städte der Region.",
  path: PATH,
});

const itemListLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Städte im Einsatzgebiet von Cleanmaster 1974",
  numberOfItems: activeCities.length,
  itemListElement: activeCities.map((city, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "City",
      name: city.name,
      url: absoluteUrl(`/leistungen/gebaeudereinigung/${city.slug}/`),
    },
  })),
  isPartOf: { "@id": websiteId },
  provider: { "@id": businessId },
};

export default function EinsatzgebietPage() {
  return (
    <>
      <JsonLd data={collectionLd} />
      <JsonLd data={itemListLd} />

      <PageHero
        crumbs={[{ label: "Einsatzgebiet" }]}
        overline="Einsatzgebiet"
        title="Gebäudereinigung in Stuttgart und 17 Städten der Region"
        intro="Cleanmaster 1974 arbeitet im Großraum Stuttgart mit festen Teams und kurzen Anfahrten. Für jede Stadt im Einsatzgebiet gibt es eine eigene Seite zur Gebäudereinigung und zur Treppenhausreinigung, mit den Objekten und Stadtteilen, die dort typisch sind. Liegt Ihr Objekt knapp außerhalb, fragen Sie trotzdem kurz an."
        image={{
          src: "/images/gebaeude.jpg",
          alt: "Unterhaltsreinigung in einem Gewerbeobjekt im Großraum Stuttgart",
        }}
      />

      <section className="py-14 sm:py-18">
        <Container>
          <Reveal>
            <h2 className="font-display text-[clamp(1.5rem,1.2rem+1.3vw,2.1rem)] font-extrabold leading-[1.12] tracking-tight text-navy-950">
              Alle Städte im Überblick
            </h2>
            <p className="mt-4 max-w-2xl text-[0.97rem] leading-relaxed text-navy-700">
              Jede Stadt mit eigener Seite je Leistung. Hausverwaltungen mit
              Objekten in mehreren Städten betreuen wir standortübergreifend,
              mit einem Vertrag und einer Rechnung.
            </p>
          </Reveal>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {activeCities.map((city, i) => {
              const neighbors = cityContent[city.slug]?.neighbors ?? [];
              return (
                <Reveal as="li" key={city.slug} delay={0.03 * (i % 3)}>
                  <div className="flex h-full flex-col rounded-[1.5rem] border border-line bg-white p-6 transition-all duration-300 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-500/10">
                    <h3 className="font-display text-lg font-bold text-navy-950">
                      {city.name}
                    </h3>
                    <ul className="mt-4 flex-1 space-y-2 text-sm">
                      <li>
                        <Link
                          href={`/leistungen/gebaeudereinigung/${city.slug}/`}
                          className="group inline-flex items-center gap-1.5 font-semibold text-sky-600 transition-colors hover:text-sky-700"
                        >
                          Gebäudereinigung {city.name}
                          <IconArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={`/leistungen/treppenhausreinigung/${city.slug}/`}
                          className="group inline-flex items-center gap-1.5 font-semibold text-sky-600 transition-colors hover:text-sky-700"
                        >
                          Treppenhausreinigung {city.name}
                          <IconArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </li>
                    </ul>
                    {neighbors.length > 0 && (
                      <p className="mt-4 border-t border-line pt-3 text-[0.78rem] leading-relaxed text-navy-500">
                        Auch im Einsatz rund um {city.name}:{" "}
                        {neighbors
                          .map((slug) => activeCities.find((c) => c.slug === slug)?.name)
                          .filter(Boolean)
                          .join(", ")}
                        .
                      </p>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </section>

      <section className="bg-cloud py-14 sm:py-18">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-[clamp(1.5rem,1.2rem+1.3vw,2.1rem)] font-extrabold leading-[1.12] tracking-tight text-navy-950">
                So ist das Einsatzgebiet aufgeteilt
              </h2>
              <div className="mt-6 space-y-5 text-[0.97rem] leading-relaxed text-navy-700">
                <p>
                  Der Großraum Stuttgart ist bei uns in feste Reviere geteilt.
                  Ein Team betreut die Objekte seines Reviers dauerhaft, dadurch
                  bleiben die Anfahrten kurz und die Reinigungskräfte in Ihrem
                  Objekt dieselben. Im Stuttgarter Norden reicht das Gebiet über
                  Kornwestheim bis Ludwigsburg, im Westen über Gerlingen,
                  Ditzingen und Leonberg bis Rutesheim, im Süden über Vaihingen,
                  Echterdingen und Filderstadt bis Sindelfingen und Böblingen,
                  im Osten über Fellbach und Waiblingen bis Winnenden und
                  Weinstadt.
                </p>
                <p>
                  Für Hausverwaltungen mit verteiltem Bestand heißt das: Ein
                  Ansprechpartner koordiniert alle Objekte, unabhängig davon, in
                  welcher Stadt sie liegen. Reinigung, Winterdienst und
                  Hausmeisterservice laufen über dasselbe
                  Leistungsverzeichnis.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="dots flex justify-center rounded-[1.75rem] border border-line bg-white p-4 sm:p-8">
                <RegionMap />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-18">
        <QuestionSection
          title="Reinigt Cleanmaster 1974 auch außerhalb dieser 18 Städte?"
          cta={{ href: "/kontakt/", label: "Objekt anfragen" }}
        >
          <p>
            Oft ja. Die 18 Städte sind das Kerngebiet mit festen Teams, aber
            Objekte knapp außerhalb übernehmen wir ebenfalls, wenn die Anfahrt
            in ein bestehendes Revier passt. Das klären wir vor der
            Besichtigung in einem kurzen Telefonat. Bei mehreren Objekten an
            verschiedenen Standorten lohnt sich die Anfrage fast immer.
          </p>
        </QuestionSection>
      </section>

      <CtaBanner
        title="Angebot für Ihr Objekt im Großraum Stuttgart"
        text="Nennen Sie uns Standort, Objektart und gewünschte Leistung. Wir melden uns, vereinbaren eine kostenlose Besichtigung und erstellen Ihr Festpreis-Angebot."
      />
    </>
  );
}
