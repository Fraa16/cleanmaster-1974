import type { Metadata } from "next";
import { ContentSection, PageHero } from "@/components/page-blocks";
import { CtaBanner, Faq, QuestionSection } from "@/components/sections";
import { serviceBySlug } from "@/lib/services";

export const metadata: Metadata = {
  title: "Glas- & Fensterreinigung Stuttgart | Cleanmaster 1974",
  description:
    "Glas- und Fensterreinigung in Stuttgart ✓ Rahmen und Falze inklusive ✓ auch Schaufenster und Glasfassaden ✓ Festpreis nach Besichtigung. Jetzt anfragen!",
  alternates: { canonical: "/leistungen/glasreinigung-fensterreinigung/" },
};

const faqItems = [
  {
    q: "Reinigt Cleanmaster 1974 auch für Privathaushalte?",
    a: "Ja. Fensterreinigung bieten wir auch für Wohnungen und Häuser an, als Einzeltermin oder im festen Turnus. Der Preis steht nach kurzer Besichtigung oder Fotoeinschätzung fest. Privathaushalte können die Arbeitskosten zudem als haushaltsnahe Dienstleistung steuerlich geltend machen.",
  },
  {
    q: "Was passiert bei Regen am Reinigungstag?",
    a: "Leichter Regen ist kein Problem, das Ergebnis bleibt streifenfrei. Bei starkem Regen oder Sturm verschieben wir den Termin in Absprache mit Ihnen, ohne Zusatzkosten.",
  },
  {
    q: "Sind Sonderflächen wie Wintergärten oder Glasdächer möglich?",
    a: "Ja. Wintergärten, Glasdächer, Lichtkuppeln und Trennwände aus Glas nehmen wir nach Besichtigung ins Angebot auf. Auch hier gilt der Festpreis, unabhängig davon, wie lange die Reinigung tatsächlich dauert.",
  },
];

export default function GlasreinigungPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Leistungen", href: "/leistungen/" },
          { label: "Glas- und Fensterreinigung" },
        ]}
        overline="Leistung"
        title="Glas- und Fensterreinigung Stuttgart"
        intro="Cleanmaster 1974 reinigt Fenster, Schaufenster, Glastüren, Glasfassaden und Wintergärten in Stuttgart und der Region, streifenfrei und inklusive Rahmen und Falze. Schwer erreichbare Flächen erreichen wir mit Teleskopstangen und entmineralisiertem Wasser. Einzeltermin oder fester Turnus, beides zum verbindlichen Festpreis nach kostenloser Besichtigung."
        image={serviceBySlug("glasreinigung-fensterreinigung")?.image}
      />

      <ContentSection title="Rahmen und Falze gehören dazu">
        <p>
          Eine Fensterreinigung ohne Rahmen ist keine. Bei Cleanmaster 1974
          sind Rahmen, Falze und Fensterbänke im Preis enthalten, nicht als
          Zusatzposition versteckt. Bei Schaufenstern reinigen wir auf Wunsch
          auch im laufenden Betrieb, ohne dass Kunden durch Leitern und Kabel
          steigen müssen.
        </p>
      </ContentSection>

      <ContentSection title="Auch in großer Höhe" tinted>
        <p>
          Glasfassaden, Oberlichter und Fenster ab dem zweiten Obergeschoss
          reinigen wir mit Teleskoptechnik und entmineralisiertem Wasser. Das
          Wasser trocknet rückstandsfrei ab, ohne Chemie auf der Fassade.
        </p>
      </ContentSection>

      <section className="py-12 sm:py-16">
        <QuestionSection title="Wie oft sollten Fenster gereinigt werden?">
          <p>
            Als Richtwert: Büros und Praxen zwei- bis viermal pro Jahr,
            Schaufenster wöchentlich bis monatlich, Wohnanlagen ein- bis
            zweimal jährlich. Entscheidend sind Lage und Anspruch: An
            Hauptstraßen verschmutzen Scheiben schneller als im Wohngebiet.
            Bei der Besichtigung empfiehlt Cleanmaster 1974 einen Turnus, der
            zu Ihrem Objekt passt.
          </p>
        </QuestionSection>
      </section>

      <section className="pb-16 sm:pb-24">
        <Faq title="Häufige Fragen zur Glasreinigung" items={faqItems} />
      </section>

      <section className="pb-16 sm:pb-24">
        <CtaBanner
          title="Festpreis für Ihre Glasreinigung anfordern"
          text="Schicken Sie uns Fotos oder Eckdaten Ihrer Glasflächen. Wir melden uns mit Terminvorschlag und verbindlichem Preis."
        />
      </section>
    </>
  );
}
