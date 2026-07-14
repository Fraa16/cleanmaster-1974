import type { Metadata } from "next";
import { CheckList, ContentSection, PageHero } from "@/components/page-blocks";
import { CtaBanner, Faq, QuestionSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Büroreinigung Stuttgart & Region | Cleanmaster 1974",
  description:
    "Büroreinigung in Stuttgart vom Familienbetrieb ✓ täglich oder wöchentlich ✓ festes Team ✓ monatlicher Pauschalpreis. Jetzt kostenlose Besichtigung vereinbaren!",
  alternates: { canonical: "/leistungen/buero-reinigung/" },
};

const faqItems = [
  {
    q: "Wie kurzfristig kann die Büroreinigung starten?",
    a: "Nach der kostenlosen Besichtigung erhalten Sie das Angebot mit Festpreis. Sobald Sie freigeben, stimmen wir den Starttermin mit Ihnen ab.",
  },
  {
    q: "Bringt Cleanmaster 1974 Reinigungsmittel und Geräte mit?",
    a: "Ja. Reinigungsmittel, Maschinen und Verbrauchsmaterial sind im Pauschalpreis enthalten. Sie stellen nichts bereit und lagern nichts. Auf Wunsch füllen wir auch Seife, Handtuchpapier und Toilettenpapier auf und übernehmen die Nachbestellung.",
  },
  {
    q: "Was passiert bei Urlaub oder Krankheit des Reinigungsteams?",
    a: "Cleanmaster 1974 stellt eine eingearbeitete Vertretung. Der Reinigungstermin fällt nicht aus, das Leistungsverzeichnis bleibt dasselbe. Ihr Ansprechpartner informiert Sie, wenn eine Vertretung im Einsatz ist.",
  },
];

export default function BueroReinigungPage() {
  return (
    <>
      <PageHero
        overline="Leistung"
        title="Büroreinigung Stuttgart"
        intro="Cleanmaster 1974 reinigt Büros in Stuttgart und der Region, täglich, wöchentlich oder im vereinbarten Turnus. Ein festes Reinigungsteam arbeitet vor oder nach Ihren Geschäftszeiten, nach einem gemeinsam festgelegten Leistungsverzeichnis und zum monatlichen Pauschalpreis. Die Besichtigung vor dem Angebot ist kostenlos, der angebotene Preis verbindlich."
        image="/images/services/bueroreinigung.svg"
      />

      <ContentSection title="Was zur Büroreinigung gehört">
        <p>
          Das Leistungsverzeichnis legen wir gemeinsam bei der Besichtigung
          fest. Typische Bestandteile:
        </p>
        <CheckList
          items={[
            "Arbeitsplätze und Schreibtische, frei geräumte Flächen feucht gewischt",
            "Böden: saugen, wischen, Pflege je nach Belag",
            "Sanitärräume: Reinigung, Desinfektion, Auffüllen der Verbrauchsmaterialien",
            "Küche und Teeküche: Oberflächen, Spüle, Geräte außen",
            "Besprechungsräume und Empfang",
            "Papierkörbe und Mülltrennung, Entsorgung",
            "Türen, Lichtschalter und Kontaktflächen",
          ]}
        />
        <p>
          Sonderwünsche wie Teppich-Tiefenreinigung oder Grundreinigung nehmen
          wir als Zusatzposition ins Angebot auf, ebenfalls zum Festpreis.
        </p>
      </ContentSection>

      <ContentSection title="Reinigung außerhalb Ihrer Geschäftszeiten" tinted>
        <p>
          Die Reinigung stört den Betrieb nicht. Unser Team kommt vor
          Arbeitsbeginn oder nach Feierabend, auf Wunsch auch tagsüber in
          Randzeiten. Schlüssel und Zugangscodes verwalten wir dokumentiert,
          das Team bleibt dasselbe. Ihre Mitarbeiter kennen die Gesichter,
          Rückfragen laufen über Ihren festen Ansprechpartner bei Cleanmaster
          1974.
        </p>
      </ContentSection>

      <section className="py-12 sm:py-16">
        <QuestionSection title="Was kostet eine Büroreinigung in Stuttgart?">
          <p>
            Der Preis hängt von Bürofläche, Reinigungsumfang und Turnus ab.
            Eine tägliche Reinigung kostet pro Termin weniger als eine
            wöchentliche, weil weniger Schmutz anfällt. Cleanmaster 1974
            besichtigt Ihre Räume kostenlos und nennt danach einen monatlichen
            Pauschalpreis. Der ist verbindlich, ohne Nachberechnung für
            Material, Anfahrt oder Mehraufwand.
          </p>
        </QuestionSection>
      </section>

      <section className="pb-16 sm:pb-24">
        <Faq title="Häufige Fragen zur Büroreinigung" items={faqItems} />
      </section>

      <section className="pb-16 sm:pb-24">
        <CtaBanner
          title="Kostenlose Besichtigung für Ihre Büroreinigung"
          text="Schicken Sie uns kurz Lage, Fläche und gewünschten Turnus. Wir melden uns, besichtigen kostenlos und erstellen Ihr Pauschalpreis-Angebot."
        />
      </section>
    </>
  );
}
