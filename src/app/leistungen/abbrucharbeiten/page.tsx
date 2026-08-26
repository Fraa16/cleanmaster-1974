import type { Metadata } from "next";
import Link from "next/link";
import { CheckList, ContentSection, PageHero } from "@/components/page-blocks";
import { CtaBanner, Faq, QuestionSection } from "@/components/sections";
import { JsonLd } from "@/components/ui";
import { serviceBySlug } from "@/lib/services";
import { serviceSchema } from "@/lib/schema";

const service = serviceBySlug("abbrucharbeiten");
const serviceLd = serviceSchema({
  name: "Abbrucharbeiten Stuttgart und Region",
  path: "/leistungen/abbrucharbeiten/",
  serviceType: "Abbrucharbeiten",
  description: service?.teaser ?? "",
});

export const metadata: Metadata = {
  title: "Abbrucharbeiten Stuttgart | Rückbau & Entkernung | Cleanmaster 1974",
  description:
    "Abbrucharbeiten in Stuttgart ✓ Entkernung ✓ Teilabbruch ✓ Demontage ✓ Entsorgung inklusive ✓ Festpreis nach Besichtigung. Jetzt Angebot anfordern!",
  alternates: { canonical: "/leistungen/abbrucharbeiten/" },
};

const faqItems = [
  {
    q: "Kümmert sich Cleanmaster 1974 auch um die Entsorgung?",
    a: "Ja. Wir stellen die passenden Container, trennen den Bauschutt sortenrein und entsorgen ihn fachgerecht über zugelassene Betriebe. Die Entsorgungskosten sind im Festpreis enthalten, sodass Sie nach der Besichtigung mit einem Betrag rechnen und sich um nichts weiter kümmern müssen.",
  },
  {
    q: "Was ist mit Asbest oder anderen Schadstoffen?",
    a: "Bei Verdacht auf Asbest, alte Mineralfasern oder andere Schadstoffe muss die Bausubstanz vor dem Abbruch geprüft werden. Solche Stoffe dürfen nur zugelassene Fachbetriebe sanieren. Wir weisen Sie darauf hin, klären das vor Beginn ab und starten erst, wenn die Fläche freigegeben ist.",
  },
  {
    q: "Reißt ihr auch tragende Wände oder ganze Gebäude ab?",
    a: "Unser Schwerpunkt ist der Rückbau im Innenbereich: Entkernung, Teilabbruch und Demontage. Eingriffe in tragende Bauteile führen wir nur nach Freigabe durch Statiker oder Bauleitung aus. Für den kompletten Abriss ganzer Gebäude sprechen Sie uns an, wir sagen Ihnen ehrlich, ob wir das übernehmen.",
  },
];

export default function AbbrucharbeitenPage() {
  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero
        crumbs={[
          { label: "Leistungen", href: "/leistungen/" },
          { label: "Abbrucharbeiten" },
        ]}
        overline="Leistung"
        title="Abbrucharbeiten Stuttgart"
        intro="Cleanmaster 1974 übernimmt Abbrucharbeiten in Stuttgart und der Region: Entkernung, Teilabbruch und Demontage vor Sanierung, Umbau oder Neuvermietung. Wir trennen den Bauschutt sortenrein, entsorgen ihn fachgerecht und übergeben die Flächen besenrein. Die Besichtigung vor dem Angebot ist kostenlos, der Festpreis verbindlich."
        image={service?.image}
      />

      <ContentSection title="Was zu unseren Abbrucharbeiten gehört" layout="centered">
        <p>
          Den Umfang legen wir bei der Besichtigung gemeinsam fest. Typische
          Bestandteile:
        </p>
        <CheckList
          variant="cards"
          items={[
            "Entkernung bis auf den Rohbau",
            "Demontage von Einbauten, Sanitär- und Küchenobjekten",
            "Teilabbruch nichttragender Wände und Trockenbau",
            "Entfernen von Bodenbelägen, Estrich und Fliesen",
            "Ausbau von Türen, Zargen und alten Installationen",
            "Bauschutt sortenrein trennen",
            "Container stellen und fachgerecht entsorgen",
            "Besenreine Übergabe der Flächen",
          ]}
        />
        <p>
          Eingriffe in tragende Bauteile stimmen wir vorab mit Statiker oder
          Bauleitung ab. Wir arbeiten nur, was baurechtlich freigegeben ist.
        </p>
      </ContentSection>

      <ContentSection title="Abbruch und Reinigung aus einer Hand" tone="dark">
        <p>
          Nach dem Rückbau steht die Fläche oft direkt vor der nächsten
          Gewerkerunde. Weil Cleanmaster 1974 auch die{" "}
          <Link
            href="/baureinigung/"
            className="font-semibold text-sky-300 hover:underline"
          >
            Baureinigung
          </Link>{" "}
          übernimmt, bekommen Sie Rückbau und anschließende Reinigung aus einer
          Hand, ohne Schnittstelle zwischen zwei Firmen. Das spart Abstimmung
          und Zeit im Bauzeitenplan.
        </p>
      </ContentSection>

      <section className="py-12 sm:py-16">
        <QuestionSection
          title="Was kosten Abbrucharbeiten?"
          cta={{ href: "/kontakt/", label: "Angebot anfordern" }}
        >
          <p>
            Der Preis richtet sich nach Umfang, Zugänglichkeit sowie Menge und
            Art des Bauschutts inklusive Entsorgung. Cleanmaster 1974
            besichtigt das Objekt kostenlos und nennt danach einen verbindlichen
            Festpreis, Container und Entsorgung inbegriffen. Nachberechnungen
            für Anfahrt oder normalen Mehraufwand gibt es nicht.
          </p>
        </QuestionSection>
      </section>

      <section className="pb-16 sm:pb-24">
        <Faq title="Häufige Fragen zu Abbrucharbeiten" items={faqItems} />
      </section>

      <section className="pb-16 sm:pb-24">
        <CtaBanner
          title="Kostenlose Besichtigung für Ihre Abbrucharbeiten"
          text="Schicken Sie uns kurz Objekt, Umfang und Terminwunsch. Wir besichtigen kostenlos und erstellen Ihr Festpreis-Angebot, inklusive Entsorgung."
        />
      </section>
    </>
  );
}
