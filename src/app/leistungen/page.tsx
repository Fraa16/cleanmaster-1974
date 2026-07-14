import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PageHero } from "@/components/page-blocks";
import { CtaBanner, QuestionSection, ServiceGrid } from "@/components/sections";

export const metadata: Metadata = {
  title: "Gebäudedienste Stuttgart im Überblick | Cleanmaster 1974",
  description:
    "Alle Leistungen von Cleanmaster 1974 im Überblick ✓ Reinigung ✓ Winterdienst ✓ Hausmeisterservice ✓ Entrümpelung. Für Stuttgart und die Region. Jetzt Angebot anfordern!",
  alternates: { canonical: "/leistungen/" },
};

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        overline="Leistungen"
        title="Unsere Leistungen im Überblick"
        intro="Cleanmaster 1974 übernimmt Gebäudereinigung und Gebäudedienste in Stuttgart und der Region: Büroreinigung, Unterhaltsreinigung, Treppenhausreinigung, Glas- und Fensterreinigung, Winterdienst, Entrümpelung, Taubenabwehr, Baureinigung und Hausmeisterservice. Alle Leistungen lassen sich kombinieren, mit einem Vertrag, einem Leistungsverzeichnis und einem festen Ansprechpartner für Ihr Objekt."
      />

      <section className="pb-16 sm:pb-24">
        <Container>
          <ServiceGrid withImage />
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <QuestionSection title="Welche Leistungen lassen sich kombinieren?">
          <p>
            Alle. Am häufigsten kombinieren Hausverwaltungen
            Treppenhausreinigung, Winterdienst und Hausmeisterservice zu einer
            laufenden Objektbetreuung. Gewerbekunden buchen Büroreinigung meist
            zusammen mit Glasreinigung. Cleanmaster 1974 fasst die gewünschten
            Leistungen in einem Leistungsverzeichnis zusammen. Sie erhalten
            einen Vertrag, eine Rechnung und einen Ansprechpartner.
          </p>
        </QuestionSection>
      </section>

      <section className="pb-16 sm:pb-24">
        <CtaBanner
          title="Jetzt unverbindliches Angebot anfordern"
          text="Rufen Sie an oder schicken Sie uns kurz die Eckdaten zu Ihrem Objekt: Art, Größe, gewünschte Leistung. Wir melden uns, vereinbaren eine kostenlose Besichtigung und erstellen Ihr Festpreis-Angebot. Kostenlos und ohne Vertragsbindung."
        />
      </section>
    </>
  );
}
