import type { Metadata } from "next";
import { ContentSection, PageHero } from "@/components/page-blocks";
import { CtaBanner } from "@/components/sections";

export const metadata: Metadata = {
  title: "Cleanmaster 1974 | Familienbetrieb für Gebäudereinigung",
  description:
    "Cleanmaster 1974 ist ein familiengeführter Gebäudedienstleister aus Stuttgart ✓ Festpreis-Garantie ✓ feste Teams in 19 Städten. Lernen Sie uns kennen!",
  alternates: { canonical: "/ueber-uns/" },
};

export default function UeberUnsPage() {
  return (
    <>
      <PageHero
        overline="Über uns"
        title="Über Cleanmaster 1974"
        intro="Cleanmaster 1974 ist ein familiengeführtes Unternehmen für Gebäudereinigung und Facility Services mit Sitz in Stuttgart. Zu den Leistungen gehören Unterhaltsreinigung, Büroreinigung, Treppenhausreinigung, Glasreinigung, Winterdienst, Entrümpelung, Taubenabwehr, Baureinigung und Hausmeisterservice in Stuttgart und 18 umliegenden Städten."
        image="/images/ueber-uns.svg"
      />

      <ContentSection title="Ein Familienbetrieb, keine Filiale">
        <p>
          Cleanmaster 1974 wird von der Inhaberfamilie selbst geführt. Wer bei
          uns anruft, spricht nicht mit einer Zentrale, sondern mit den
          Menschen, die auch die Angebote kalkulieren und die Objekte kennen.
          Entscheidungen fallen am selben Tag, nicht nach Rücksprache mit
          einer Konzernabteilung. Reklamationen landen direkt bei den
          Inhabern, und genau deshalb kommen sie selten vor: Was wir zusagen,
          können wir auch halten, weil niemand zwischen Zusage und Ausführung
          steht.
        </p>
      </ContentSection>

      <ContentSection title="Warum wir mit Festpreisen arbeiten" tinted>
        <p>
          Stundenzettel kann niemand kontrollieren, Festpreise schon. Deshalb
          kalkuliert Cleanmaster 1974 jedes Angebot nach Besichtigung und
          steht dann zum genannten Preis, auch wenn ein Auftrag länger dauert
          als geplant. Das Risiko der Kalkulation liegt bei uns, nicht bei
          Ihnen.
        </p>
      </ContentSection>

      <ContentSection title="Feste Teams, bekannte Gesichter">
        <p>
          Objekte werden bei Cleanmaster 1974 festen Teams zugeteilt. Das Team
          kennt Haus, Schlüssel und Eigenheiten, die Bewohner und Mitarbeiter
          kennen die Gesichter. Vertretungen sind eingearbeitet, nicht fremd.
        </p>
      </ContentSection>

      <section className="py-12 sm:py-16">
        <CtaBanner
          title="Lernen Sie uns bei der Besichtigung kennen"
          text="Der beste Eindruck entsteht vor Ort. Vereinbaren Sie eine kostenlose Objektbesichtigung, unverbindlich und ohne Vertragsbindung."
          primaryLabel="Besichtigung vereinbaren"
        />
      </section>
    </>
  );
}
