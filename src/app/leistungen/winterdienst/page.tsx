import type { Metadata } from "next";
import Link from "next/link";
import { ContentSection, PageHero } from "@/components/page-blocks";
import { CtaBanner, Faq, ProcessSteps, QuestionSection } from "@/components/sections";
import { Container, JsonLd } from "@/components/ui";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Winterdienst Stuttgart mit Festpreis | Cleanmaster 1974",
  description:
    "Winterdienst in Stuttgart und Region ✓ Räum- und Streupflicht erfüllt ✓ jeder Einsatz dokumentiert ✓ Saisonpauschale. Jetzt rechtzeitig Angebot sichern!",
  alternates: { canonical: "/leistungen/winterdienst/" },
};

const steps = [
  {
    title: "Besichtigung im Herbst",
    text: "Flächen, Prioritäten und Streumittel werden festgelegt.",
  },
  {
    title: "Saisonvertrag mit Pauschale",
    text: "Ein Preis für die ganze Saison, egal wie oft es schneit.",
  },
  {
    title: "Einsatz nach Wetterlage",
    text: "Wir beobachten die Vorhersage und rücken ohne Ihren Anruf aus.",
  },
  {
    title: "Dokumentation",
    text: "Jeder Einsatz wird protokolliert, am Saisonende erhalten Sie die Übersicht.",
  },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "So läuft der Winterdienst bei Cleanmaster 1974 ab",
  step: steps.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.title,
    text: s.text,
  })),
  url: absoluteUrl("/leistungen/winterdienst/"),
};

const faqItems = [
  {
    q: "Was kostet der Winterdienst bei Cleanmaster 1974?",
    a: "Der Preis richtet sich nach Fläche, Priorität und Erreichbarkeit des Objekts. Sie zahlen eine feste Saisonpauschale, unabhängig davon, wie oft geräumt werden muss. Damit bleibt der Winter kalkulierbar, auch in schneereichen Jahren. Das Angebot erstellen wir nach kostenloser Besichtigung.",
  },
  {
    q: "Muss ich anrufen, wenn es schneit?",
    a: "Nein. Cleanmaster 1974 beobachtet die Wetterlage und fährt die vereinbarten Objekte automatisch an. Sie merken vom Winterdienst im Idealfall nur eines: Der Weg ist frei, bevor die ersten Mieter oder Mitarbeiter das Haus verlassen.",
  },
  {
    q: "Was wird gestreut?",
    a: "Abstumpfende Streumittel wie Splitt, wo es die kommunale Satzung verlangt. Die Frühjahrs-Beseitigung des Streuguts nehmen wir auf Wunsch mit ins Angebot. So bleibt nach dem Winter kein Splitt auf Ihren Wegen liegen.",
  },
  {
    q: "Übernimmt Cleanmaster 1974 auch Parkplätze und Zufahrten?",
    a: "Ja. Neben Gehwegen räumen wir Zufahrten, Parkplätze, Eingangsbereiche und Rampen. Welche Flächen mit welcher Priorität bedient werden, legt der Saisonvertrag fest.",
  },
];

export default function WinterdienstPage() {
  return (
    <>
      <JsonLd data={howToSchema} />
      <PageHero
        crumbs={[
          { label: "Leistungen", href: "/leistungen/" },
          { label: "Winterdienst" },
        ]}
        overline="Leistung"
        title="Winterdienst Stuttgart"
        intro="Cleanmaster 1974 übernimmt den Winterdienst in Stuttgart und der Region: räumen, streuen und die Dokumentation jedes Einsatzes. Damit ist Ihre Räum- und Streupflicht als Eigentümer oder Verwalter erfüllt, auch bei Schneefall vor Sonnenaufgang. Abgerechnet wird über eine Saisonpauschale, die vor dem Winter verbindlich feststeht."
      />

      <ContentSection title="Ihre Räum- und Streupflicht, unsere Verantwortung">
        <p>
          Eigentümer haften, wenn auf ungeräumten Wegen jemand stürzt. Mit der
          Beauftragung von Cleanmaster 1974 übertragen Sie die Durchführung
          des Winterdienstes an uns. Jeder Einsatz wird mit Datum und Uhrzeit
          dokumentiert. Diese Nachweise erhalten Sie auf Wunsch, sie zählen im
          Streitfall.
        </p>
      </ContentSection>

      <section className="pb-4">
        <QuestionSection title="Bis wann muss in Stuttgart geräumt sein?">
          <p>
            In Stuttgart müssen Gehwege werktags bis 7 Uhr geräumt und
            gestreut sein, samstags bis 8 Uhr, an Sonn- und Feiertagen bis 9
            Uhr (Regelung der Stadt Stuttgart). Cleanmaster 1974 plant die
            Touren so, dass Ihre Wege vor diesen Zeiten sicher begehbar sind.
          </p>
          <p className="mt-3 text-xs text-navy-500">
            Maßgeblich ist die jeweils gültige Satzung der Stadt Stuttgart;
            für andere Kommunen gelten eigene Räumzeiten.
          </p>
        </QuestionSection>
      </section>

      <section className="py-12 sm:py-16">
        <ProcessSteps
          kicker="Ablauf"
          title="So läuft der Winterdienst ab"
          steps={steps}
        />
      </section>

      <section className="py-12 sm:pb-24">
        <Faq title="Häufige Fragen zum Winterdienst" items={faqItems} />
      </section>

      <section className="pb-12 sm:pb-16">
        <CtaBanner
          title="Saisonangebot rechtzeitig sichern"
          text="Die Touren für den Winter werden im Herbst geplant. Fragen Sie früh an, dann ist Ihr Objekt sicher dabei."
        />
      </section>

      <Container className="pb-16 sm:pb-24">
        <p className="mx-auto max-w-3xl text-center text-sm text-navy-600">
          Häufig kombiniert mit{" "}
          <Link
            href="/hausmeisterservice/"
            className="font-semibold text-sky-600 hover:underline"
          >
            Hausmeisterservice
          </Link>{" "}
          und{" "}
          <Link
            href="/leistungen/treppenhausreinigung/stuttgart/"
            className="font-semibold text-sky-600 hover:underline"
          >
            Treppenhausreinigung
          </Link>
          .
        </p>
      </Container>
    </>
  );
}
