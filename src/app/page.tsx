import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ButtonLink, Container, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Stats } from "@/components/Stats";
import { LogoMark } from "@/components/Logo";
import {
  CtaBanner,
  DarkFeatureSection,
  Faq,
  ProcessSteps,
  QuestionSection,
  RegionSection,
  ServiceGrid,
} from "@/components/sections";
import {
  IconArrowRight,
  IconCheckCircle,
  IconPhone,
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
    title: "Festpreis statt Nachberechnung",
    text: "Sie erhalten den Endpreis schriftlich vor Auftragsbeginn. Was im Angebot steht, steht auch auf der Rechnung.",
  },
  {
    title: "Familienbetrieb mit kurzen Wegen",
    text: "Sie sprechen direkt mit den Inhabern. Entscheidungen fallen schnell, Reklamationen werden nicht durch drei Abteilungen gereicht.",
  },
  {
    title: "Ein Ansprechpartner für alle Gewerke",
    text: "Reinigung, Winterdienst, Hausmeisterservice und Taubenabwehr aus einer Hand. Sie koordinieren nicht drei Dienstleister, sondern einen.",
  },
  {
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
    a: "Cleanmaster 1974 arbeitet in Stuttgart und 17 Städten der Region, darunter Leonberg, Sindelfingen, Böblingen, Ludwigsburg, Fellbach, Waiblingen, Filderstadt und Ostfildern. Auch Vaihingen, Kirchheim, Echterdingen, Kornwestheim, Ditzingen, Rutesheim, Winnenden, Weinstadt und Gerlingen gehören zum Einzugsgebiet. Liegt Ihr Objekt knapp außerhalb, fragen Sie einfach kurz an.",
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

/** Hero-Visual: echtes Foto des Teams, kombiniert mit den Festpreis-Signalen. */
function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      {/* Hintergrund-Panel */}
      <div
        aria-hidden="true"
        className="absolute -inset-4 rotate-2 rounded-[2rem] bg-gradient-to-br from-sky-200/60 via-sky-100/40 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-sky-300/30 blur-2xl"
      />

      {/* Foto-Karte */}
      <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-2xl shadow-navy-950/10">
        <div className="relative aspect-[4/3]">
          <Image
            src="/images/homepage-hero.jpg"
            alt="Reinigungskräfte von Cleanmaster 1974 bei der Arbeit in einem Büro in Stuttgart"
            fill
            sizes="(max-width: 1024px) 28rem, 34rem"
            className="object-cover"
            priority
          />
          <span className="absolute right-4 top-4 rotate-[-6deg] rounded-lg border-[2.5px] border-sky-500 bg-white/95 px-3.5 py-1 font-display text-sm font-extrabold uppercase tracking-[0.14em] text-sky-600 shadow-sm">
            Festpreis
          </span>
        </div>

        {/* Info-Leiste mit Logo */}
        <div className="flex items-center gap-3 border-t border-line px-6 py-4">
          <LogoMark className="h-9 w-9" />
          <div>
            <p className="font-display text-sm font-extrabold text-navy-950">
              Ihr Festpreis-Angebot
            </p>
            <p className="text-[0.7rem] font-medium text-navy-500">
              Nach kostenloser Objektbesichtigung
            </p>
          </div>
        </div>
      </div>

      {/* Schwebende Chips */}
      <div className="absolute -left-4 -top-5 rounded-full border border-line bg-white px-4 py-2.5 shadow-lg shadow-navy-950/8 sm:-left-8">
        <p className="flex items-center gap-2 text-xs font-bold text-navy-900">
          <IconCheckCircle className="h-4 w-4 text-mint-600" />
          Kostenlose Besichtigung
        </p>
      </div>
      <div className="absolute -bottom-5 -right-2 rounded-full border border-line bg-white px-4 py-2.5 shadow-lg shadow-navy-950/8 sm:-right-6">
        <p className="flex items-center gap-2 text-xs font-bold text-navy-900">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-sky-100">
            <IconPhone className="h-2.5 w-2.5 text-sky-600" />
          </span>
          Ein Ansprechpartner
        </p>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/90 via-sky-50/40 to-white">
        <div
          aria-hidden="true"
          className="dots absolute inset-y-0 right-0 w-2/5 [mask-image:linear-gradient(to_left,black,transparent)]"
        />
        <Container className="relative pb-16 pt-14 sm:pt-20 lg:pb-24">
          <div className="grid items-center gap-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="anim-up">
                <p className="mb-5 inline-flex flex-wrap items-center gap-x-2.5 gap-y-1 rounded-full border border-line bg-white px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.08em] text-navy-700 shadow-sm">
                  <span>Familienbetrieb</span>
                  <span className="text-sky-400">·</span>
                  <span>Festpreis-Garantie</span>
                  <span className="text-sky-400">·</span>
                  <span>Großraum Stuttgart</span>
                </p>
                <h1 className="hyphens-auto break-words font-display text-[clamp(2.4rem,1.5rem+4vw,4.3rem)] font-extrabold leading-[1.02] tracking-tight text-navy-950">
                  Gebäudereinigung in{" "}
                  <span className="relative isolate inline-block whitespace-nowrap">
                    Stuttgart
                    <svg
                      viewBox="0 0 320 24"
                      aria-hidden="true"
                      className="hero-underline absolute -bottom-2 left-0 -z-10 w-full"
                      fill="none"
                    >
                      <path
                        d="M6 17 C 80 7, 240 5, 314 12"
                        stroke="var(--color-sky-400)"
                        strokeWidth="7"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>{" "}
                  und Region
                </h1>
                <p className="mt-7 max-w-xl text-base leading-relaxed text-navy-600 sm:text-lg">
                  Cleanmaster 1974 ist Ihr familiengeführter
                  Gebäudedienstleister für Stuttgart und die Region. Wir
                  übernehmen Büroreinigung, Unterhaltsreinigung,
                  Treppenhausreinigung, Glasreinigung, Winterdienst,
                  Entrümpelung und Hausmeisterservice für Gewerbe,
                  Hausverwaltungen und Privathaushalte. Jedes Angebot
                  erstellen wir nach kostenloser Objektbesichtigung, mit
                  garantiertem Festpreis und einem festen Ansprechpartner für
                  Ihr Objekt.
                </p>
              </div>
              <div className="anim-up" style={{ "--enter-delay": "0.12s" } as React.CSSProperties}>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <ButtonLink href="/kontakt/">
                    Jetzt Angebot anfordern
                    <IconArrowRight className="h-4 w-4" />
                  </ButtonLink>
                  <ButtonLink href={site.phoneHref} variant="outline">
                    <IconPhone className="h-4 w-4" />
                    <span className="tabular-nums">Anrufen: {site.phone}</span>
                  </ButtonLink>
                </div>
                <p className="mt-4 text-sm text-navy-500">
                  Oder{" "}
                  <Link
                    href="/kontakt/"
                    className="font-semibold text-sky-600 underline-offset-4 hover:underline"
                  >
                    Rückruf vereinbaren
                  </Link>{" "}
                  – wir melden uns.
                </p>
              </div>
            </div>
            <div className="anim-up lg:col-span-5" style={{ "--enter-delay": "0.2s" } as React.CSSProperties}>
              <HeroVisual />
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Zahlenleiste (Vertrauen, nur belegbare Fakten) */}
      <section className="border-b border-line">
        <Container className="py-10 sm:py-12">
          <Stats />
        </Container>
      </section>

      {/* 3. Leistungsübersicht */}
      <section className="py-20 sm:py-28" id="leistungen">
        <Container>
          <Reveal>
            <SectionHeading
              kicker="Unsere Leistungen"
              title="Gebäudedienste aus einer Hand"
              lead="Von der regelmäßigen Unterhaltsreinigung bis zum Winterdienst deckt Cleanmaster 1974 alle Gebäudedienste ab. Sie kombinieren die Leistungen nach Bedarf, mit einem Vertrag und einem Ansprechpartner."
            />
          </Reveal>
        </Container>
        <Container>
          <ServiceGrid />
          <Reveal>
            <div className="mt-10">
              <Link
                href="/leistungen/"
                className="group inline-flex items-center gap-2 text-sm font-bold text-sky-600 transition-colors hover:text-sky-700"
              >
                Alle Leistungen im Detail
                <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 4. Preis-Sektion */}
      <section className="pb-20 sm:pb-28">
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

      {/* 5. Warum Cleanmaster 1974 (full-bleed dark) */}
      <DarkFeatureSection
        kicker="Ihre Vorteile"
        title="Warum Cleanmaster 1974?"
        items={whyItems}
        image={{
          src: "/images/atmosphaere.jpg",
          alt: "Reinigungsausrüstung von Cleanmaster 1974 in einem gepflegten Wohnraum",
        }}
      />

      {/* Ablauf */}
      <section className="py-20 sm:py-28">
        <ProcessSteps
          kicker="So läuft es ab"
          title="In drei Schritten zum Festpreis-Angebot"
          steps={processSteps}
        />
      </section>

      {/* 6. Regionale Abdeckung */}
      <section className="bg-cloud py-20 sm:py-28">
        <RegionSection text="Cleanmaster 1974 ist in Stuttgart und den umliegenden Städten im Einsatz, von Leonberg bis Ludwigsburg, von Sindelfingen bis Waiblingen. Hausverwaltungen mit verteiltem Bestand betreuen wir standortübergreifend, mit einem Vertrag für alle Objekte." />
      </section>

      {/* 7. FAQ */}
      <section className="py-20 sm:py-28">
        <Faq title="Häufige Fragen zur Gebäudereinigung" items={faqItems} />
      </section>

      {/* 8. Abschluss-CTA */}
      <CtaBanner
        title="Jetzt unverbindliches Angebot anfordern"
        text="Rufen Sie an oder schicken Sie uns kurz die Eckdaten zu Ihrem Objekt: Art, Größe, gewünschte Leistung. Wir melden uns, vereinbaren eine kostenlose Besichtigung und erstellen Ihr Festpreis-Angebot. Kostenlos und ohne Vertragsbindung."
      />
    </>
  );
}
