import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { activeCities, cityBySlug } from "@/lib/cities";
import { cityContent } from "@/lib/city-content";
import {
  CheckList,
  ContentSection,
  NeighborLinks,
  PageHero,
} from "@/components/page-blocks";
import { CtaBanner, Faq, QuestionSection } from "@/components/sections";
import { Container } from "@/components/ui";
import { cityHeroImage } from "@/lib/services";

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
    title: `Treppenhausreinigung ${city.name} | Cleanmaster 1974`,
    description: `Treppenhausreinigung in ${city.name} für Hausverwaltungen & WEG ✓ fester Turnus ✓ Reinigungsplan im Objekt ✓ Pauschalpreis. Jetzt kostenloses Angebot anfordern!`,
    alternates: { canonical: `/leistungen/treppenhausreinigung/${stadt}/` },
  };
}

export default async function TreppenhausreinigungStadtPage({ params }: Props) {
  const { stadt } = await params;
  const city = cityBySlug(stadt);
  const content = cityContent[stadt];
  if (!city || !content) notFound();

  const cityIndex = activeCities.findIndex((c) => c.slug === stadt);

  const faqItems = [
    {
      q: "In welchem Turnus wird das Treppenhaus gereinigt?",
      a: "Üblich ist wöchentlich oder vierzehntägig, bei Objekten mit viel Publikumsverkehr auch zweimal pro Woche. Den Turnus legen Sie fest, wir empfehlen bei der Besichtigung einen passenden Rhythmus. Eine Anpassung ist jederzeit zum Folgemonat möglich.",
    },
    {
      q: "Sind die Kosten auf die Mieter umlegbar?",
      a: "In der Regel ja. Gebäudereinigung zählt zu den umlagefähigen Betriebskosten, sofern der Mietvertrag die Umlage vorsieht. Die monatliche Pauschale von Cleanmaster 1974 lässt sich dafür direkt in die Betriebskostenabrechnung übernehmen. Im Zweifel prüft das Ihre Hausverwaltung oder Ihr Rechtsbeistand.",
    },
    {
      q: "Betreut Cleanmaster 1974 auch mehrere Häuser einer Verwaltung?",
      a: `Ja. Für Hausverwaltungen mit Bestand in ${city.name} und der Region bündeln wir alle Objekte in einem Vertrag mit einer Rechnung. Reklamationen laufen über einen festen Ansprechpartner, nicht über eine Hotline.`,
    },
  ];

  return (
    <>
      <PageHero
        crumbs={[
          { label: "Leistungen", href: "/leistungen/" },
          { label: "Treppenhausreinigung", href: "/leistungen/treppenhausreinigung/stuttgart/" },
          { label: city.name },
        ]}
        overline="Leistung · Hausverwaltungen & WEG"
        title={`Treppenhausreinigung ${city.name}`}
        intro={`Cleanmaster 1974 reinigt Treppenhäuser in ${city.name} für Hausverwaltungen, Eigentümergemeinschaften und private Vermieter. Die Reinigung läuft im festen Turnus nach Reinigungsplan, der im Objekt aushängt. So sehen Mieter jederzeit, wann zuletzt gereinigt wurde. Abgerechnet wird über einen monatlichen Pauschalpreis, der nach kostenloser Besichtigung verbindlich feststeht.`}
        image={cityHeroImage("treppenhausreinigung", city.name, cityIndex)}
      />

      <ContentSection title="Was zur Treppenhausreinigung gehört">
        <CheckList
          items={[
            "Treppen, Podeste und Flure: kehren und feucht wischen",
            "Handläufe und Geländer",
            "Eingangsbereich, Eingangstür und Briefkastenanlage",
            "Fensterbänke und Fenster im Treppenhaus (Innenseite, Turnus nach Vereinbarung)",
            "Aufzugskabine innen, inklusive Spiegel und Bedienfeld",
            "Lichtschalter, Klingeltableau und Kontaktflächen",
            "Kellerabgang und Gemeinschaftsräume nach Vereinbarung",
          ]}
        />
      </ContentSection>

      <ContentSection title="Der Reinigungsplan hängt im Objekt" tinted>
        <p>
          Nach jedem Termin wird der Reinigungsplan abgezeichnet.
          Hausverwaltungen haben damit einen Nachweis für Eigentümer und
          Mieter, Beschwerden über „nicht gereinigt“ lassen sich sofort
          prüfen. Fällt ein Termin auf einen Feiertag, wird er verlegt, nicht
          gestrichen.
        </p>
      </ContentSection>

      <ContentSection title={`Vor Ort in ${city.name}`}>
        <p>{content.treppenhausreinigungLocal}</p>
      </ContentSection>

      <section className="py-12 sm:py-16">
        <QuestionSection
          title={`Was kostet die Treppenhausreinigung in ${city.name}?`}
        >
          <p>
            Der Preis hängt von Stockwerken, Anzahl der Eingänge, Bodenbelag
            und Turnus ab. Cleanmaster 1974 nennt nach kostenloser
            Besichtigung einen monatlichen Pauschalpreis pro Objekt. Für
            Vermieter wichtig: Die Kosten der Treppenhausreinigung sind in der
            Regel als Betriebskosten auf die Mieter umlagefähig, wenn der
            Mietvertrag das vorsieht.
          </p>
        </QuestionSection>
      </section>

      <section className="pb-16 sm:pb-24">
        <Faq
          title={`Häufige Fragen zur Treppenhausreinigung in ${city.name}`}
          items={faqItems}
        />
      </section>

      <section className="pb-12 sm:pb-16">
        <CtaBanner
          title={`Angebot für Ihre Treppenhausreinigung in ${city.name}`}
          text="Nennen Sie uns Adresse, Stockwerke und gewünschten Turnus. Wir besichtigen kostenlos und schicken Ihnen den Pauschalpreis."
        />
      </section>

      <NeighborLinks
        basePath="/leistungen/treppenhausreinigung/"
        citySlugs={content.neighbors}
        cityNameBySlug={(slug) => cityBySlug(slug)?.name ?? slug}
      />

      <Container className="pb-16 sm:pb-24">
        <p className="mx-auto max-w-3xl text-center text-sm text-navy-600">
          Typische Kombination für Verwaltungen:{" "}
          <Link
            href="/hausmeisterservice/"
            className="font-semibold text-sky-600 hover:underline"
          >
            Hausmeisterservice
          </Link>{" "}
          und{" "}
          <Link
            href="/leistungen/winterdienst/"
            className="font-semibold text-sky-600 hover:underline"
          >
            Winterdienst
          </Link>{" "}
          aus einer Hand dazubuchen.
        </p>
      </Container>
    </>
  );
}
