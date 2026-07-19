import type { Metadata } from "next";
import Link from "next/link";
import { ContentSection, PageHero } from "@/components/page-blocks";
import { CtaBanner, Faq, QuestionSection } from "@/components/sections";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Hausmeisterservice Stuttgart & Region | Cleanmaster 1974",
  description:
    "Hausmeisterservice in Stuttgart ✓ Kontrollgänge, Kleinreparaturen, Grünpflege, Winterdienst ✓ ein Ansprechpartner fürs ganze Objekt. Jetzt Angebot anfordern!",
  alternates: { canonical: "/hausmeisterservice/" },
};

const faqItems = [
  {
    q: "Sind Hausmeisterkosten auf Mieter umlagefähig?",
    a: "Teilweise. Laufende Tätigkeiten wie Kontrollgänge, Gartenpflege oder Winterdienst sind in der Regel als Betriebskosten umlagefähig, Reparaturen und Verwaltungstätigkeiten nicht. Die Rechnung von Cleanmaster 1974 weist die Positionen getrennt aus, damit Ihre Abrechnung sauber bleibt. Im Zweifel prüft das Ihre Hausverwaltung.",
  },
  {
    q: "Wie oft kommt der Hausmeister ins Objekt?",
    a: "So oft, wie es das Leistungsverzeichnis vorsieht: von einem wöchentlichen Kontrollgang bis zur täglichen Präsenz in großen Anlagen. Den passenden Turnus empfehlen wir nach der kostenlosen Objektbesichtigung.",
  },
  {
    q: "Was passiert bei Notfällen im Objekt?",
    a: "Mieter und Verwaltung erreichen ihren festen Ansprechpartner direkt, nicht eine anonyme Hotline. Wie die Erreichbarkeit für Ihr Objekt geregelt wird, legen wir gemeinsam im Leistungsverzeichnis fest.",
  },
];

export default function HausmeisterservicePage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Leistungen", href: "/leistungen/" },
          { label: "Hausmeisterservice" },
        ]}
        overline="Leistung · Objektbetreuung"
        title="Hausmeisterservice Stuttgart"
        intro="Cleanmaster 1974 übernimmt den Hausmeisterservice für Wohnanlagen und Gewerbeobjekte in Stuttgart und der Region: regelmäßige Kontrollgänge, Kleinreparaturen, Grünpflege, Mülltonnendienst und Winterdienst. Umfang und Turnus regelt ein Leistungsverzeichnis, abgerechnet wird über eine monatliche Pauschale. Hausverwaltungen und Eigentümer erhalten einen festen Ansprechpartner für das gesamte Objekt."
        variant="dark"
        icon="hausmeister"
      />

      {/* Frage-Karte überlappt die dunkle Hero-Kante (erst ab sm, mobil kein Überlapp) */}
      <section className="relative z-10 pb-4 pt-6 sm:-mt-16 sm:pt-0">
        <QuestionSection
          title="Was übernimmt ein Hausmeisterservice?"
          cta={{ href: "/kontakt/", label: "Angebot anfordern" }}
        >
          <p>
            Ein Hausmeisterservice hält das Objekt in Ordnung, ohne dass
            Eigentümer oder Verwaltung jeden Handgriff einzeln beauftragen:
            Kontrollgänge mit Mängelmeldung, Kleinreparaturen,
            Leuchtmitteltausch, Grünpflege, Kehrwoche, Mülltonnen
            bereitstellen und Winterdienst. Was genau dazugehört, legt das
            Leistungsverzeichnis fest. Größere Reparaturen meldet Cleanmaster
            1974 mit Foto und Empfehlung an die Verwaltung.
          </p>
        </QuestionSection>
      </section>

      <ContentSection
        title="Kontrollgang mit Mängelmeldung"
        imageSide="right"
        image={{
          src: "/images/atmosphaere.jpg",
          alt: "Reinigungsausrüstung von Cleanmaster 1974 in einem gepflegten Wohnraum",
        }}
      >
        <p>
          Beim regelmäßigen Kontrollgang prüfen wir Beleuchtung, Türen,
          Schließanlagen, Außenflächen und Technikräume nach Checkliste.
          Mängel melden wir mit Foto direkt an Verwaltung oder Eigentümer,
          kleine Schäden beheben wir sofort. So werden aus kleinen Defekten
          keine teuren Folgeschäden.
        </p>
      </ContentSection>

      <ContentSection title="Ein Objekt, ein Ansprechpartner" tinted>
        <p>
          Hausmeisterservice, Treppenhausreinigung und Winterdienst greifen
          bei Cleanmaster 1974 ineinander. Statt drei Dienstleister zu
          koordinieren, haben Verwaltung und Mieter eine Nummer. Das reduziert
          Rückfragen und macht die Betriebskostenabrechnung einfacher.
        </p>
      </ContentSection>

      <section className="py-12 sm:py-16">
        <Faq title="Häufige Fragen zum Hausmeisterservice" items={faqItems} />
      </section>

      <section className="pb-12 sm:pb-16">
        <CtaBanner
          title="Angebot für Ihre Objektbetreuung"
          text="Nennen Sie uns Objekt, gewünschte Leistungen und Turnus. Nach der kostenlosen Besichtigung erhalten Sie die monatliche Pauschale schriftlich."
        />
      </section>

      <Container className="pb-16 sm:pb-24">
        <p className="mx-auto max-w-3xl text-center text-sm text-navy-600">
          Passt gut dazu:{" "}
          <Link
            href="/leistungen/treppenhausreinigung/stuttgart/"
            className="font-semibold text-sky-600 hover:underline"
          >
            Treppenhausreinigung
          </Link>
          ,{" "}
          <Link
            href="/leistungen/winterdienst/"
            className="font-semibold text-sky-600 hover:underline"
          >
            Winterdienst
          </Link>{" "}
          und{" "}
          <Link
            href="/leistungen/gebaeudereinigung/stuttgart/"
            className="font-semibold text-sky-600 hover:underline"
          >
            Gebäudereinigung
          </Link>
          .
        </p>
      </Container>
    </>
  );
}
