import Link from "next/link";
import { Container, JsonLd } from "@/components/ui";
import { FactTable, PageHero } from "@/components/page-blocks";
import { Reveal } from "@/components/Reveal";
import { CtaBanner, Faq, QuestionSection, ServiceGrid } from "@/components/sections";
import { webPageSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

const PATH = "/leistungen/";

export const metadata = pageMeta({
  title: "Gebäudedienste Stuttgart im Überblick | Cleanmaster 1974",
  description:
    "Alle Leistungen von Cleanmaster 1974 für Stuttgart und Region ✓ Reinigung ✓ Winterdienst ✓ Hausmeisterservice ✓ Entrümpelung. Jetzt Angebot anfordern!",
  path: PATH,
  image: {
    src: "/images/gebaeude.jpg",
    alt: "Unterhaltsreinigung: maschinelle Bodenreinigung in einem Gewerbeobjekt",
  },
});

/**
 * Seitentyp-Knoten. Der Leistungs-Hub war neben der Startseite die einzige
 * Seite ohne eigenen WebPage-Knoten; Suchmaschinen fehlte damit die Angabe,
 * welche Funktion die Seite im Auftritt hat. Die Kosten-Antwort ist zusätzlich
 * als speakable ausgezeichnet.
 */
const pageLd = webPageSchema({
  type: "CollectionPage",
  name: "Leistungen von Cleanmaster 1974",
  description:
    "Übersicht aller Gebäudedienste von Cleanmaster 1974 für Stuttgart und Region: Reinigung, Winterdienst, Hausmeisterservice, Entrümpelung, Taubenabwehr, Bau- und Abbrucharbeiten.",
  path: PATH,
  speakable: ["#preisfaktoren-antwort"],
});

/**
 * Preisfaktoren je Leistung. Jede Zeile gibt ausschließlich wieder, was die
 * jeweilige Leistungsseite ohnehin zur Preisbildung sagt — keine neuen
 * Preisaussagen, keine Beträge.
 */
const priceRows = [
  ["Büroreinigung", "Bürofläche, Reinigungsumfang und Turnus", "Monatlicher Pauschalpreis"],
  ["Gebäudereinigung / Unterhaltsreinigung", "Fläche, Leistungsumfang und Turnus", "Monatlicher Pauschalpreis"],
  ["Treppenhausreinigung", "Stockwerke, Anzahl der Eingänge, Bodenbelag und Turnus", "Monatliche Pauschale je Objekt"],
  ["Glas- und Fensterreinigung", "Anzahl und Erreichbarkeit der Flächen; Rahmen, Falze und Fensterbänke sind enthalten", "Festpreis je Termin oder im Turnus"],
  ["Winterdienst", "Fläche, Priorität und Erreichbarkeit des Objekts", "Feste Saisonpauschale"],
  ["Entrümpelung & Haushaltsauflösung", "Volumen, Etage, Zugänglichkeit und Entsorgungsart", "Festpreis nach Besichtigung"],
  ["Taubenabwehr", "Ort des Befalls und gewähltes System; Reinigung und Desinfektion inbegriffen", "Festpreis nach Besichtigung"],
  ["Baureinigung", "Bauphase (grob, zwischen, Ende) und Objektgröße", "Festpreis nach Besichtigung oder Planunterlagen"],
  ["Hausmeisterservice", "Umfang und Turnus laut Leistungsverzeichnis", "Monatliche Pauschale"],
  ["Abbrucharbeiten", "Umfang, Zugänglichkeit sowie Menge und Art des Bauschutts", "Festpreis, Container und Entsorgung inbegriffen"],
];

const faqItems = [
  {
    q: "Wonach richtet sich der Preis bei Cleanmaster 1974?",
    a: "Nach Fläche, Leistungsumfang und Turnus, bei einmaligen Aufträgen zusätzlich nach Zugänglichkeit und Entsorgungsaufwand. Regelmäßige Leistungen laufen über eine monatliche Pauschale, einmalige über einen Festpreis. Beides steht nach der kostenlosen Besichtigung schriftlich fest. Aufschläge für Anfahrt, Material oder Mehraufwand gibt es nicht.",
  },
  {
    q: "Welche Leistungen kombinieren Hausverwaltungen am häufigsten?",
    a: "Treppenhausreinigung, Winterdienst und Hausmeisterservice zu einer laufenden Objektbetreuung. Gewerbekunden buchen Büroreinigung meist zusammen mit Glasreinigung. Cleanmaster 1974 fasst die gewünschten Leistungen in einem Leistungsverzeichnis zusammen, daraus werden ein Vertrag, eine Rechnung und ein Ansprechpartner für alle Gewerke. Sie koordinieren keine drei Dienstleister mehr.",
  },
  {
    q: "Was steht im Leistungsverzeichnis?",
    a: "Welche Flächen wie oft und in welcher Tiefe gereinigt werden, dazu der vereinbarte Turnus und der Preis. Es entsteht bei der Besichtigung gemeinsam mit Ihnen und hängt auf Wunsch im Objekt aus, damit Mieter und Mitarbeiter nachlesen können, was vereinbart ist.",
  },
  {
    q: "Für welche Objektarten arbeitet Cleanmaster 1974?",
    a: "Bürogebäude, Praxen, Ladenflächen, Wohnanlagen, Verwaltungs- und Gewerbeobjekte sowie Baustellen. Auch gemischt genutzte Häuser mit Gewerbe im Erdgeschoss und Wohnungen darüber betreuen wir mit einem Vertrag. Privathaushalte fragen am häufigsten Entrümpelung, Fensterreinigung und Winterdienst an. Für reine Treppenhausreinigung gibt es ein eigenes Angebot je Stadt.",
  },
];

export default function LeistungenPage() {
  return (
    <>
      <JsonLd data={pageLd} />

      <PageHero
        crumbs={[{ label: "Leistungen" }]}
        overline="Leistungen"
        title="Unsere Leistungen im Überblick"
        intro="Cleanmaster 1974 übernimmt Gebäudereinigung und Gebäudedienste in Stuttgart und der Region: Büroreinigung, Unterhaltsreinigung, Treppenhausreinigung, Glas- und Fensterreinigung, Winterdienst, Entrümpelung, Taubenabwehr, Baureinigung und Hausmeisterservice. Alle Leistungen lassen sich kombinieren, mit einem Vertrag, einem Leistungsverzeichnis und einem festen Ansprechpartner für Ihr Objekt."
      />

      <section className="pb-16 sm:pb-24">
        <Container>
          <ServiceGrid />
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <QuestionSection
          title="Welche Leistungen lassen sich kombinieren?"
          bodyId="preisfaktoren-antwort"
        >
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
        <Container>
          <Reveal>
            <h2 className="font-display text-[clamp(1.5rem,1.2rem+1.3vw,2.1rem)] font-extrabold leading-[1.12] tracking-tight text-navy-950">
              Wonach sich der Preis richtet
            </h2>
            <p className="mt-4 max-w-2xl text-[0.97rem] leading-relaxed text-navy-700">
              Feste Beträge nennen wir erst nach der Besichtigung, weil jedes
              Objekt anders ist. Welche Faktoren in die Kalkulation einfließen
              und wie abgerechnet wird, steht aber vorher fest:
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-8">
              <FactTable
                caption="Preisfaktoren und Abrechnung je Leistung"
                columns={["Leistung", "Was den Preis bestimmt", "Abrechnung"]}
                rows={priceRows}
              />
            </div>
            <p className="mt-5 text-sm text-navy-500">
              Die Besichtigung ist in allen Fällen kostenlos, der angebotene
              Preis verbindlich.{" "}
              <Link
                href="/kontakt/"
                className="font-bold text-sky-600 hover:underline"
              >
                Angebot anfordern
              </Link>
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <Faq title="Häufige Fragen zu den Leistungen" items={faqItems} />
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
