import type { Metadata } from "next";
import { ContentSection, PageHero } from "@/components/page-blocks";
import { CtaBanner, Faq, QuestionSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Baureinigung Stuttgart | Bauendreinigung | Cleanmaster 1974",
  description:
    "Baureinigung in Stuttgart ✓ Baugrob-, Bauzwischen- und Bauendreinigung ✓ abgestimmt auf Ihren Bauzeitenplan ✓ Festpreis. Jetzt Angebot anfordern!",
  alternates: { canonical: "/baureinigung/" },
};

const stages = [
  {
    title: "Baugrobreinigung",
    text: "Bauschutt, Verpackungen und grober Schmutz werden entfernt, damit die Gewerke sicher und sauber weiterarbeiten.",
  },
  {
    title: "Bauzwischenreinigung",
    text: "Staub und Rückstände vor Estrich, Maler oder Bodenleger, damit Folgearbeiten nicht auf Schmutz aufsetzen.",
  },
  {
    title: "Bauendreinigung",
    text: "Fenster inklusive Rahmen, Böden, Sanitär, Einbauten. Danach ist das Objekt übergabefertig, für Abnahme, Vermietung oder Einzug.",
  },
];

const faqItems = [
  {
    q: "Für wen arbeitet Cleanmaster 1974 auf der Baustelle?",
    a: "Für Bauunternehmen, Bauträger, Handwerksbetriebe, Hausverwaltungen und private Bauherren. Ob einzelne Wohnung nach Sanierung oder kompletter Neubau mit mehreren Einheiten: Der Ablauf ist derselbe, Besichtigung oder Planunterlagen, Festpreis, fester Termin.",
  },
  {
    q: "Wie schnell kann eine Bauendreinigung stattfinden?",
    a: "Nennen Sie uns Ihren Übergabetermin, wir sagen verbindlich zu oder ab. Kurzfristige Einsätze sind je nach Auslastung möglich.",
  },
  {
    q: "Ist die Entsorgung von Bauschutt enthalten?",
    a: "Die Entsorgung von Kleinmengen und Verpackungsmaterial nehmen wir ins Angebot auf. Den genauen Umfang der Entsorgung legen wir im Angebot fest.",
  },
];

export default function BaureinigungPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Leistungen", href: "/leistungen/" },
          { label: "Baureinigung" },
        ]}
        overline="Leistung"
        title="Baureinigung Stuttgart"
        intro="Cleanmaster 1974 übernimmt die Baureinigung in Stuttgart und der Region: Baugrobreinigung während der Bauphase, Bauzwischenreinigung vor den Folgegewerken und Bauendreinigung vor Abnahme und Übergabe. Wir richten uns nach Ihrem Bauzeitenplan, auch bei Verschiebungen. Der Festpreis steht nach Besichtigung oder Planunterlagen verbindlich fest."
      />

      <ContentSection title="Drei Stufen der Baureinigung">
        <ol className="space-y-4">
          {stages.map((stage, i) => (
            <li
              key={stage.title}
              className="flex items-start gap-5 rounded-[1.5rem] border border-line bg-white p-6"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-sky-500 font-display text-sm font-extrabold text-sky-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-base font-bold text-navy-950">
                  {stage.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-600">
                  {stage.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </ContentSection>

      <ContentSection title="Termintreue auf der Baustelle" tinted>
        <p>
          Bauzeitenpläne verschieben sich, das wissen wir. Cleanmaster 1974
          plant Baureinigungen mit Puffer und stimmt sich direkt mit Ihrer
          Bauleitung ab. Verschiebt sich Ihr Termin, verschieben wir mit, ohne
          Aufpreis und ohne Diskussion.
        </p>
      </ContentSection>

      <section className="py-12 sm:py-16">
        <QuestionSection title="Was gehört zur Bauendreinigung?">
          <p>
            Zur Bauendreinigung gehören die Entfernung von Baustaub auf allen
            Flächen, die Reinigung der Fenster inklusive Rahmen und Falze, das
            Entfernen von Farb-, Mörtel- und Kleberesten, die Grundreinigung
            der Böden sowie Sanitärobjekte und Einbauten. Ziel ist ein
            bezugsfertiges Objekt, das ohne Nacharbeit abgenommen und
            übergeben werden kann.
          </p>
        </QuestionSection>
      </section>

      <section className="pb-16 sm:pb-24">
        <Faq title="Häufige Fragen zur Baureinigung" items={faqItems} />
      </section>

      <section className="pb-16 sm:pb-24">
        <CtaBanner
          title="Festpreis für Ihre Baureinigung"
          text="Schicken Sie uns Bauzeitenplan oder Objektdaten. Sie erhalten ein Angebot, das zu Ihrem Terminplan passt."
        />
      </section>
    </>
  );
}
