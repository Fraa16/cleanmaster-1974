import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink, Container, SectionHeading } from "@/components/ui";
import {
  CtaBanner,
  DarkFeatureSection,
  Faq,
  ProcessSteps,
  QuestionSection,
  RegionChips,
  ServiceGrid,
  TrustBar,
} from "@/components/sections";
import {
  IconArrowRight,
  IconEuro,
  IconFamily,
  IconPhone,
  IconPin,
  IconTeam,
} from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gebäudereinigung Stuttgart & Region | Cleanmaster 1974",
  description:
    "Gebäudereinigung in Stuttgart vom Familienbetrieb ✓ Büroreinigung ✓ Treppenhausreinigung ✓ Winterdienst ✓ Festpreis-Garantie. Jetzt Angebot anfordern!",
  alternates: { canonical: "/" },
};

const whyItems = [
  {
    icon: <IconEuro className="h-6 w-6" />,
    title: "Festpreis statt Nachberechnung",
    text: "Sie erhalten den Endpreis schriftlich vor Auftragsbeginn. Was im Angebot steht, steht auch auf der Rechnung.",
  },
  {
    icon: <IconFamily className="h-6 w-6" />,
    title: "Familienbetrieb mit kurzen Wegen",
    text: "Sie sprechen direkt mit den Inhabern. Entscheidungen fallen schnell, Reklamationen werden nicht durch drei Abteilungen gereicht.",
  },
  {
    icon: <IconTeam className="h-6 w-6" />,
    title: "Ein Ansprechpartner für alle Gewerke",
    text: "Reinigung, Winterdienst, Hausmeisterservice und Taubenabwehr aus einer Hand. Sie koordinieren nicht drei Dienstleister, sondern einen.",
  },
  {
    icon: <IconPin className="h-6 w-6" />,
    title: "Feste Teams vor Ort",
    text: "Kurze Anfahrten im Großraum Stuttgart und gleichbleibende Reinigungskräfte in Ihrem Objekt. Das Team kennt Ihr Haus.",
  },
];

const processSteps = [
  {
    title: "Kostenlose Besichtigung",
    text: "Wir besichtigen Ihr Objekt kostenlos und unverbindlich, vor Ort und mit Blick auf jede Fläche.",
  },
  {
    title: "Schriftliches Angebot mit Festpreis",
    text: "Sie erhalten ein Angebot mit verbindlichem Festpreis und Leistungsverzeichnis. Was drinsteht, gilt.",
  },
  {
    title: "Start zum vereinbarten Termin",
    text: "Nach Ihrer Freigabe starten wir pünktlich, bei regelmäßigen Reinigungen im festen Turnus und mit gleichbleibendem Team.",
  },
];

const faqItems = [
  {
    q: "Was bedeutet die Festpreis-Garantie von Cleanmaster 1974?",
    a: "Der Preis im Angebot ist der Preis auf der Rechnung. Cleanmaster 1974 kalkuliert nach einer kostenlosen Besichtigung vor Ort und nennt dann einen verbindlichen Festpreis. Aufschläge für Anfahrt, Material oder Mehraufwand gibt es nicht. Ändert sich der Leistungsumfang, vereinbaren wir den neuen Preis vorher schriftlich.",
  },
  {
    q: "Wie läuft die Beauftragung ab?",
    a: "In drei Schritten: Zuerst besichtigen wir Ihr Objekt kostenlos und unverbindlich. Danach erhalten Sie ein schriftliches Angebot mit Festpreis und Leistungsverzeichnis. Nach Ihrer Freigabe starten wir zum vereinbarten Termin, bei regelmäßigen Reinigungen im festen Turnus und mit gleichbleibendem Team. Ihr Ansprechpartner bleibt vom Angebot bis zur Rechnung derselbe.",
  },
  {
    q: "In welchen Städten ist Cleanmaster 1974 im Einsatz?",
    a: "Cleanmaster 1974 arbeitet in Stuttgart und 18 Städten der Region, darunter Leonberg, Sindelfingen, Böblingen, Ludwigsburg, Fellbach, Waiblingen, Filderstadt und Ostfildern. Auch Vaihingen, Kirchheim, Echterdingen, Kornwestheim, Ditzingen, Rutesheim, Winnenden, Weinstadt und Gerlingen gehören zum Einzugsgebiet. Liegt Ihr Objekt knapp außerhalb, fragen Sie einfach kurz an.",
  },
  {
    q: "Reinigt Cleanmaster 1974 auch für Privathaushalte?",
    a: "Ja. Neben Gewerbe und Hausverwaltungen betreuen wir auch Privatkunden. Am häufigsten angefragt sind Entrümpelung, Haushaltsauflösung, Fensterreinigung und Winterdienst. Der Ablauf ist derselbe: kostenlose Besichtigung, schriftliches Festpreis-Angebot, fester Termin. Einzelne Leistungen können Privathaushalte zudem als haushaltsnahe Dienstleistungen steuerlich geltend machen.",
  },
  {
    q: "Übernimmt Cleanmaster 1974 auch die laufende Objektbetreuung?",
    a: "Ja. Über den Hausmeisterservice betreuen wir Wohnanlagen und Gewerbeobjekte dauerhaft: Kontrollgänge, Kleinreparaturen, Grünpflege und Winterdienst aus einer Hand. Hausverwaltungen erhalten damit einen einzigen Ansprechpartner für mehrere Gewerke und Objekte in der gesamten Region Stuttgart. Umfang und Turnus regelt das Leistungsverzeichnis, ebenfalls zum Festpreis.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-sky-50 to-white pb-20">
        <div
          className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-sky-100/60"
          aria-hidden="true"
        />
        <Container className="relative pt-12 sm:pt-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <p className="mb-4 inline-flex flex-wrap items-center gap-x-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-navy-700 shadow-sm ring-1 ring-navy-100">
                <span>Familienbetrieb</span>
                <span className="text-sky-500">·</span>
                <span>Festpreis-Garantie</span>
                <span className="text-sky-500">·</span>
                <span>Großraum Stuttgart</span>
              </p>
              <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-navy-900 sm:text-5xl xl:text-[3.4rem]">
                Gebäudereinigung in{" "}
                <span className="text-sky-500">Stuttgart</span> und Region
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-700 sm:text-lg">
                Cleanmaster 1974 ist Ihr familiengeführter Gebäudedienstleister
                für Stuttgart und die Region. Wir übernehmen Büroreinigung,
                Unterhaltsreinigung, Treppenhausreinigung, Glasreinigung,
                Winterdienst, Entrümpelung und Hausmeisterservice für Gewerbe,
                Hausverwaltungen und Privathaushalte. Jedes Angebot erstellen
                wir nach kostenloser Objektbesichtigung, mit garantiertem
                Festpreis und einem festen Ansprechpartner für Ihr Objekt.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <ButtonLink href="/kontakt/">
                  Jetzt Angebot anfordern
                  <IconArrowRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink href={site.phoneHref} variant="outline">
                  <IconPhone className="h-4 w-4" />
                  Anrufen: {site.phone}
                </ButtonLink>
              </div>
              <p className="mt-4 text-sm text-navy-500">
                Oder{" "}
                <Link
                  href="/kontakt/"
                  className="font-semibold text-sky-600 underline-offset-2 hover:underline"
                >
                  Rückruf vereinbaren
                </Link>{" "}
                – wir melden uns.
              </p>
            </div>
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero.svg"
                alt="Illustration: Gebäudereinigung in Stuttgart – Fassade, Fenster und Gebäudedienste"
                className="w-full rounded-[2.5rem] shadow-2xl shadow-sky-500/20"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Vertrauens-Leiste */}
      <TrustBar />

      {/* 3. Leistungsübersicht */}
      <section className="py-16 sm:py-24" id="leistungen">
        <Container>
          <SectionHeading
            kicker="Unsere Leistungen"
            title="Gebäudedienste aus einer Hand"
            lead="Von der regelmäßigen Unterhaltsreinigung bis zum Winterdienst deckt Cleanmaster 1974 alle Gebäudedienste ab. Sie kombinieren die Leistungen nach Bedarf, mit einem Vertrag und einem Ansprechpartner."
          />
        </Container>
        <Container>
          <ServiceGrid />
          <div className="mt-10 text-center">
            <Link
              href="/leistungen/"
              className="inline-flex items-center gap-2 text-sm font-bold text-sky-600 hover:text-sky-700"
            >
              Alle Leistungen im Detail
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* 4. Preis-Sektion */}
      <section className="pb-16 sm:pb-24">
        <QuestionSection
          title="Was kostet eine Gebäudereinigung in Stuttgart?"
          cta={{
            href: "/kontakt/",
            label: "Kostenlose Besichtigung vereinbaren",
          }}
        >
          <p>
            Die Kosten hängen von Fläche, Leistungsumfang und Reinigungsturnus
            ab. Für regelmäßige Reinigungen vereinbart Cleanmaster 1974 einen
            festen monatlichen Pauschalpreis, für einmalige Aufträge einen
            Festpreis nach kostenloser Besichtigung. Der angebotene Preis ist
            verbindlich. Nachberechnungen für Anfahrt, Material oder
            Mehraufwand gibt es bei Cleanmaster 1974 nicht.
          </p>
        </QuestionSection>
      </section>

      {/* 5. Warum Cleanmaster 1974 */}
      <section className="pb-16 sm:pb-24">
        <DarkFeatureSection
          kicker="Ihre Vorteile"
          title="Warum Cleanmaster 1974?"
          items={whyItems}
        />
      </section>

      {/* Ablauf */}
      <section className="pb-16 sm:pb-24">
        <ProcessSteps
          kicker="So läuft es ab"
          title="In drei Schritten zum Festpreis-Angebot"
          steps={processSteps}
        />
      </section>

      {/* 6. Regionale Abdeckung */}
      <section className="bg-cloud py-16 sm:py-24">
        <RegionChips text="Cleanmaster 1974 ist in Stuttgart und den umliegenden Städten im Einsatz, von Leonberg bis Ludwigsburg, von Sindelfingen bis Waiblingen. Hausverwaltungen mit verteiltem Bestand betreuen wir standortübergreifend, mit einem Vertrag für alle Objekte." />
      </section>

      {/* 7. FAQ */}
      <section className="py-16 sm:py-24">
        <Faq title="Häufige Fragen zur Gebäudereinigung" items={faqItems} />
      </section>

      {/* 8. Abschluss-CTA */}
      <section className="pb-16 sm:pb-24">
        <CtaBanner
          title="Jetzt unverbindliches Angebot anfordern"
          text="Rufen Sie an oder schicken Sie uns kurz die Eckdaten zu Ihrem Objekt: Art, Größe, gewünschte Leistung. Wir melden uns, vereinbaren eine kostenlose Besichtigung und erstellen Ihr Festpreis-Angebot. Kostenlos und ohne Vertragsbindung."
        />
      </section>
    </>
  );
}
