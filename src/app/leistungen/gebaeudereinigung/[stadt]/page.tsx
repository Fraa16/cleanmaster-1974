import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { activeCities, cityBySlug } from "@/lib/cities";
import { cityContent } from "@/lib/city-content";
import { ContentSection, NeighborLinks, PageHero } from "@/components/page-blocks";
import { CtaBanner, Faq, QuestionSection } from "@/components/sections";

interface Props {
  params: Promise<{ stadt: string }>;
}

export function generateStaticParams() {
  return activeCities.map((c) => ({ stadt: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { stadt } = await params;
  const city = cityBySlug(stadt);
  if (!city) return {};
  return {
    title: `Gebäudereinigung ${city.name} | Festpreis | Cleanmaster 1974`,
    description: `Gebäudereinigung in ${city.name} vom Familienbetrieb ✓ Unterhaltsreinigung ✓ Gewerbe & Wohnanlagen ✓ Festpreis-Garantie. Jetzt kostenloses Angebot anfordern!`,
    alternates: { canonical: `/leistungen/gebaeudereinigung/${stadt}/` },
  };
}

export default async function GebaeudereinigungStadtPage({ params }: Props) {
  const { stadt } = await params;
  const city = cityBySlug(stadt);
  const content = cityContent[stadt];
  if (!city || !content) notFound();

  const faqItems = [
    {
      q: `Welche Objekte reinigt Cleanmaster 1974 in ${city.name}?`,
      a: "Bürogebäude, Praxen, Ladenflächen, Wohnanlagen und Gewerbeobjekte. Auch gemischt genutzte Häuser mit Gewerbe im Erdgeschoss und Wohnungen darüber betreuen wir mit einem Vertrag. Für reine Treppenhausreinigung gibt es ein eigenes Angebot.",
    },
    {
      q: "Wie oft wird gereinigt?",
      a: "Den Turnus legen Sie fest: täglich, mehrmals pro Woche, wöchentlich oder vierzehntägig. Bei der Besichtigung empfehlen wir einen Turnus, der zu Nutzung und Publikumsverkehr des Objekts passt. Der Turnus lässt sich später anpassen, der Preis wird dann neu vereinbart.",
    },
    {
      q: "Übernimmt Cleanmaster 1974 auch mehrere Objekte gleichzeitig?",
      a: `Ja. Hausverwaltungen und Eigentümer mit mehreren Objekten in ${city.name} und der Region erhalten einen Vertrag, eine Rechnung und einen Ansprechpartner für den gesamten Bestand.`,
    },
  ];

  return (
    <>
      <PageHero
        overline="Leistung · Unterhaltsreinigung"
        title={`Gebäudereinigung ${city.name}`}
        intro={`Cleanmaster 1974 übernimmt die Gebäudereinigung in ${city.name}: Unterhaltsreinigung für Gewerbeflächen, Praxen, Wohnanlagen und öffentliche Bereiche, im festen Turnus nach Leistungsverzeichnis. Ein gleichbleibendes Team reinigt Ihr Objekt zum monatlichen Pauschalpreis. Die Besichtigung ist kostenlos, der angebotene Preis verbindlich, Ihr Ansprechpartner bleibt derselbe.`}
        image="/images/services/gebaeudereinigung.svg"
      />

      <ContentSection title="Unterhaltsreinigung nach Leistungsverzeichnis">
        <p>
          Was, wie oft und in welcher Tiefe gereinigt wird, legen wir bei der
          Besichtigung gemeinsam fest. Typische Objekte in {city.name}:
          Bürogebäude, Arztpraxen, Ladenflächen, Wohnanlagen und
          Verwaltungsgebäude. Das Leistungsverzeichnis hängt auf Wunsch im
          Objekt aus, so können Mieter und Mitarbeiter jederzeit nachlesen,
          welche Leistung vereinbart ist.
        </p>
      </ContentSection>

      <ContentSection title={`Vor Ort in ${city.name}`} tinted>
        <p>{content.gebaeudereinigungLocal}</p>
      </ContentSection>

      <section className="py-12 sm:py-16">
        <QuestionSection title={`Was kostet die Gebäudereinigung in ${city.name}?`}>
          <p>
            Der Preis richtet sich nach Fläche, Leistungsumfang und Turnus.
            Für die regelmäßige Unterhaltsreinigung vereinbart Cleanmaster
            1974 einen festen monatlichen Pauschalpreis, für einmalige Grund-
            oder Sonderreinigungen einen Festpreis nach kostenloser
            Besichtigung. Nachberechnungen für Anfahrt, Material oder
            Mehraufwand gibt es nicht, der Angebotspreis ist verbindlich.
          </p>
        </QuestionSection>
      </section>

      <section className="pb-16 sm:pb-24">
        <Faq
          title={`Häufige Fragen zur Gebäudereinigung in ${city.name}`}
          items={faqItems}
        />
      </section>

      <section className="pb-12 sm:pb-16">
        <CtaBanner
          title={`Angebot für Ihre Gebäudereinigung in ${city.name}`}
          text="Kostenlose Besichtigung, verbindlicher Festpreis, fester Ansprechpartner. Schicken Sie uns die Eckdaten Ihres Objekts."
        />
      </section>

      <NeighborLinks
        basePath="/leistungen/gebaeudereinigung/"
        citySlugs={content.neighbors}
        cityNameBySlug={(slug) => cityBySlug(slug)?.name ?? slug}
      />
    </>
  );
}
