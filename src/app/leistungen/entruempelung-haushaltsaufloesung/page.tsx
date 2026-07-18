import type { Metadata } from "next";
import { ContentSection, PageHero } from "@/components/page-blocks";
import { CtaBanner, Faq, QuestionSection } from "@/components/sections";
import { serviceBySlug } from "@/lib/services";

export const metadata: Metadata = {
  title: "Entrümpelung Stuttgart zum Festpreis | Cleanmaster 1974",
  description:
    "Entrümpelung & Haushaltsauflösung in Stuttgart ✓ besenreine Übergabe ✓ verbindlicher Festpreis nach Besichtigung ✓ diskret. Jetzt kostenlos anfragen!",
  alternates: { canonical: "/leistungen/entruempelung-haushaltsaufloesung/" },
};

const faqItems = [
  {
    q: "Wie schnell kann entrümpelt werden?",
    a: "Nach der Besichtigung nennen wir Ihnen den nächstmöglichen Termin. Bei dringenden Fällen, etwa einer anstehenden Wohnungsübergabe, sagen Sie uns die Frist, wir sagen Ihnen verbindlich, ob wir sie halten.",
  },
  {
    q: "Was passiert mit noch brauchbaren Gegenständen?",
    a: "Verwertbares trennen wir von Entsorgungsware und entsorgen fachgerecht nach Material. Dokumente, Fotos oder Wertgegenstände, die beim Räumen auftauchen, legen wir für Sie beiseite.",
  },
  {
    q: "Entrümpelt Cleanmaster 1974 auch Gewerbeflächen?",
    a: "Ja. Büros, Lager, Ladenflächen und Praxen räumen wir ebenso wie Privathaushalte, auf Wunsch außerhalb der Geschäftszeiten. Auch hier gilt: Festpreis nach Besichtigung, besenreine Übergabe zum vereinbarten Termin.",
  },
];

export default function EntruempelungPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Leistungen", href: "/leistungen/" },
          { label: "Entrümpelung & Haushaltsauflösung" },
        ]}
        overline="Leistung · auch für Privathaushalte"
        title="Entrümpelung und Haushaltsauflösung Stuttgart"
        intro="Cleanmaster 1974 entrümpelt Wohnungen, Häuser, Keller, Dachböden und Gewerbeflächen in Stuttgart und der Region und übergibt besenrein. Der Festpreis steht nach kostenloser Besichtigung verbindlich fest, inklusive Demontage, Abtransport und fachgerechter Entsorgung. Auch kurzfristige Termine sind möglich, etwa bei Wohnungsübergaben oder im Nachlassfall. Diskretion ist selbstverständlich."
        image={serviceBySlug("entruempelung-haushaltsaufloesung")?.image}
      />

      <ContentSection title="Besenrein heißt bei uns: übergabefertig">
        <p>
          Nach der Entrümpelung ist die Fläche leer, gefegt und bereit für
          Übergabe, Renovierung oder Verkauf. Zum Festpreis gehören Demontage
          von Möbeln und Einbauten, Abtransport, Trennung und fachgerechte
          Entsorgung. Es bleibt nichts im Keller stehen und nichts vor der Tür
          liegen.
        </p>
      </ContentSection>

      <ContentSection
        title="Haushaltsauflösung im Nachlassfall"
        tinted
        image={{
          src: "/images/entruempelung-alt.jpg",
          alt: "Sorgfältiges Verpacken von Umzugskartons bei der Haushaltsauflösung",
        }}
      >
        <p>
          Eine Haushaltsauflösung ist selten nur ein logistisches Thema. Wir
          arbeiten diskret, halten vereinbarte Termine exakt ein und legen
          Dokumente, Fotos oder Wertgegenstände, die beim Räumen auftauchen,
          für Sie beiseite. Sie entscheiden, was damit passiert, nicht wir.
        </p>
      </ContentSection>

      <section className="py-12 sm:py-16">
        <QuestionSection title="Was kostet eine Entrümpelung in Stuttgart?">
          <p>
            Der Preis hängt von Volumen, Etage, Zugänglichkeit und
            Entsorgungsart ab: Eine Kellerecke kostet weniger als eine
            komplette Haushaltsauflösung über drei Etagen ohne Aufzug.
            Cleanmaster 1974 besichtigt kostenlos und nennt danach einen
            verbindlichen Festpreis. Der gilt auch dann, wenn der Aufwand am
            Ende größer ist als kalkuliert.
          </p>
        </QuestionSection>
      </section>

      <section className="pb-12 sm:pb-16">
        <QuestionSection title="Ist eine Entrümpelung steuerlich absetzbar?">
          <p>
            Ja, in vielen Fällen. Als haushaltsnahe Dienstleistung können
            Privathaushalte 20 Prozent der Arbeitskosten von der
            Einkommensteuer absetzen, bis zu 4.000 Euro pro Jahr.
            Voraussetzung sind eine Rechnung mit ausgewiesenen Arbeitskosten
            und Zahlung per Überweisung. Die Rechnung von Cleanmaster 1974
            erfüllt diese Anforderungen.
          </p>
          <p className="mt-3 text-xs text-navy-500">
            Keine Steuerberatung. Ob der Abzug in Ihrem Fall möglich ist,
            klärt Ihr Steuerberater.
          </p>
        </QuestionSection>
      </section>

      <section className="pb-16 sm:pb-24">
        <Faq title="Häufige Fragen zur Entrümpelung" items={faqItems} />
      </section>

      <section className="pb-16 sm:pb-24">
        <CtaBanner
          title="Kostenlose Besichtigung vereinbaren"
          text="Beschreiben Sie kurz Objekt und Umfang, gern mit Fotos. Sie erhalten einen verbindlichen Festpreis und einen festen Termin."
        />
      </section>
    </>
  );
}
