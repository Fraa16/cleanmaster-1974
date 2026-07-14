import type { Metadata } from "next";
import { ContentSection, PageHero } from "@/components/page-blocks";
import { CtaBanner, Faq, QuestionSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Taubenabwehr Stuttgart | Spikes & Netze | Cleanmaster 1974",
  description:
    "Taubenabwehr in Stuttgart ✓ Spikes, Netze, Vergrämung ✓ inkl. Reinigung und Desinfektion ✓ tierschutzkonform. Jetzt kostenlose Objektbesichtigung anfragen!",
  alternates: { canonical: "/leistungen/taubenabwehr/" },
};

const faqItems = [
  {
    q: "Ist die Taubenabwehr tierschutzkonform?",
    a: "Ja. Alle eingesetzten Systeme vergrämen die Tiere, ohne sie zu verletzen. Spikes und Netze verhindern das Landen und Nisten, mehr nicht. Maßnahmen, die Tiere verletzen oder einsperren, führt Cleanmaster 1974 nicht aus.",
  },
  {
    q: "Wie lange hält die Taubenabwehr?",
    a: "Fachgerecht montierte Spikes und Edelstahl-Systeme halten viele Jahre, Netze ebenso, sofern sie korrekt gespannt sind. Bei der Montage achten wir auf geprüfte Materialqualität und dokumentieren die verbauten Systeme im Angebot.",
  },
  {
    q: "Übernimmt Cleanmaster 1974 auch die Reinigung nach Befall?",
    a: "Ja, das ist der Regelfall. Vor der Montage werden befallene Flächen gereinigt und desinfiziert, sonst kehren die Tauben an den vertrauten Geruch zurück. Reinigung und Schutzmaßnahme stehen zusammen im Festpreis-Angebot.",
  },
];

export default function TaubenabwehrPage() {
  return (
    <>
      <PageHero
        overline="Leistung"
        title="Taubenabwehr Stuttgart"
        intro="Cleanmaster 1974 schützt Gebäude in Stuttgart und der Region vor Taubenbefall: mit Spikes, Spannnetzen und Vergrämungssystemen an Fassaden, Balkonen, Simsen und Dächern. Zur Leistung gehört auch die Reinigung und Desinfektion befallener Flächen. Alle Maßnahmen sind tierschutzkonform, die Tiere werden vergrämt, nicht verletzt."
        image="/images/services/taubenabwehr.svg"
      />

      <ContentSection title="Warum Taubenkot mehr als ein Schönheitsproblem ist">
        <p>
          Taubenkot greift Putz, Naturstein und Metall an und kann
          Krankheitserreger enthalten. Befallene Balkone, Simse und
          Dachflächen sollten deshalb nicht einfach abgekehrt, sondern
          gereinigt und desinfiziert werden. Cleanmaster 1974 übernimmt beides
          in einem Termin: erst die fachgerechte Reinigung, dann die
          Schutzmaßnahme, damit die Tauben nicht zurückkehren.
        </p>
      </ContentSection>

      <section className="py-12 sm:py-16">
        <QuestionSection title="Welche Taubenabwehr ist die richtige?">
          <p>
            Das hängt vom Ort des Befalls ab. Spikes eignen sich für Simse,
            Vorsprünge und Schilder, Spannnetze für Balkone, Innenhöfe und
            Lichtschächte, Drahtsysteme für lange Kanten und Dachrinnen. Bei
            der kostenlosen Besichtigung prüft Cleanmaster 1974 Anflugstellen
            und Nistplätze und empfiehlt die Kombination, die zu Ihrem Gebäude
            passt.
          </p>
        </QuestionSection>
      </section>

      <section className="pb-16 sm:pb-24">
        <Faq title="Häufige Fragen zur Taubenabwehr" items={faqItems} />
      </section>

      <section className="pb-16 sm:pb-24">
        <CtaBanner
          title="Kostenlose Besichtigung bei Taubenbefall"
          text="Schicken Sie uns Fotos der betroffenen Stellen. Wir melden uns mit Einschätzung, Terminvorschlag und Festpreis."
        />
      </section>
    </>
  );
}
