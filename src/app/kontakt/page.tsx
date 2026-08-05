import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/page-blocks";
import { Container, JsonLd } from "@/components/ui";
import {
  IconCheckCircle,
  IconMail,
  IconPhone,
  IconPin,
  IconWhatsApp,
} from "@/components/icons";
import { site } from "@/lib/site";
import { cityNames } from "@/lib/cities";

const whatsappText =
  "Hallo Cleanmaster 1974, ich hätte gerne ein kostenloses Festpreis-Angebot. Mein Objekt: ";
const whatsappHref = `${site.whatsappHref}?text=${encodeURIComponent(whatsappText)}`;

export const metadata: Metadata = {
  title: "Kontakt | Cleanmaster 1974 Gebäudereinigung Stuttgart",
  description:
    "Kontakt zu Cleanmaster 1974 ✓ kostenlose Objektbesichtigung ✓ verbindliches Festpreis-Angebot für Stuttgart und Region. Jetzt anrufen oder anfragen!",
  alternates: { canonical: "/kontakt/" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.domain}/#business`,
  name: site.name,
  url: site.domain,
  telephone: "+4917672305847",
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.zip,
    addressLocality: site.address.city,
    addressCountry: site.address.country,
  },
  areaServed: cityNames.map((name) => ({ "@type": "City", name })),
  priceRange: "Festpreis nach kostenloser Besichtigung",
};

export default function KontaktPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />

      <PageHero
        crumbs={[{ label: "Kontakt" }]}
        overline="Kontakt"
        title="Kontakt zu Cleanmaster 1974"
        intro="Am schnellsten erreichen Sie uns per WhatsApp, alternativ über das Formular, telefonisch oder per E-Mail. Beschreiben Sie kurz Ihr Objekt und die gewünschte Leistung. Wir melden uns, vereinbaren eine kostenlose Besichtigung und erstellen Ihr Festpreis-Angebot."
        withCta={false}
        image={{
          src: "/images/atmosphaere-detail.jpg",
          alt: "Reinigungscaddy von Cleanmaster 1974 mit Mikrofasertüchern und Sprühflasche",
        }}
      />

      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            {/* Kontaktblock */}
            <div className="space-y-4">
              <a
                href={site.phoneHref}
                className="flex items-start gap-4 rounded-[1.5rem] border border-line bg-white p-6 transition-all duration-200 hover:-translate-y-px hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/10"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
                  <IconPhone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-display text-sm font-bold text-navy-900">
                    Telefon
                  </span>
                  <span className="mt-1 block text-base font-semibold text-sky-600">
                    {site.phone}
                  </span>
                </span>
              </a>

              <a
                href={site.emailHref}
                className="flex items-start gap-4 rounded-[1.5rem] border border-line bg-white p-6 transition-all duration-200 hover:-translate-y-px hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/10"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
                  <IconMail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-display text-sm font-bold text-navy-900">
                    E-Mail
                  </span>
                  <span className="mt-1 block text-base font-semibold text-sky-600">
                    {site.email}
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-4 rounded-3xl border border-line bg-white p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
                  <IconPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-display text-sm font-bold text-navy-900">
                    Anschrift
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-navy-700">
                    {site.name}
                    <br />
                    {site.address.street}
                    <br />
                    {site.address.zip} {site.address.city}
                  </span>
                </span>
              </div>

              <div className="grain relative overflow-hidden rounded-[1.5rem] bg-navy-950 p-6">
                <p className="text-sm font-semibold leading-relaxed text-white">
                  Einsatzgebiet: Stuttgart und 17 Städte der Region, von
                  Leonberg bis Ludwigsburg.
                </p>
              </div>
            </div>

            {/* Zwei Wege: WhatsApp (bevorzugt) + E-Mail-Formular */}
            <div className="space-y-5">
              {/* Option 1: WhatsApp */}
              <div className="relative overflow-hidden rounded-[1.75rem] border-2 border-[#25D366]/30 bg-[#25D366]/[0.06] p-6 sm:p-8">
                <span className="absolute right-5 top-5 rounded-full bg-[#25D366] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white">
                  Schnellste Antwort
                </span>
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#25D366] text-white">
                    <IconWhatsApp className="h-6 w-6" />
                  </span>
                  <div>
                    <h2 className="font-display text-xl font-extrabold text-navy-950">
                      Direkt auf WhatsApp schreiben
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-navy-600">
                      Der schnellste Weg zu uns. Beschreiben Sie kurz Ihr
                      Objekt, gern mit Fotos. Wir antworten meist innerhalb
                      weniger Stunden mit einem Terminvorschlag.
                    </p>
                  </div>
                </div>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#25D366]/25 transition-all duration-200 hover:-translate-y-px hover:bg-[#20bd5a] sm:w-auto"
                >
                  <IconWhatsApp className="h-5 w-5" />
                  Auf WhatsApp schreiben
                </a>
              </div>

              {/* Trenner */}
              <div className="flex items-center gap-4">
                <span className="h-px flex-1 bg-line" />
                <span className="text-xs font-bold uppercase tracking-wider text-navy-400">
                  oder per Formular
                </span>
                <span className="h-px flex-1 bg-line" />
              </div>

              {/* Option 2: E-Mail-Formular */}
              <div className="rounded-[1.75rem] border border-line bg-white p-6 shadow-2xl shadow-navy-950/8 sm:p-10">
                <h2 className="font-display text-xl font-extrabold text-navy-900">
                  Anfrage per Formular senden
                </h2>
                <p className="mb-6 mt-2 text-sm text-navy-600">
                  Wir melden uns per E-Mail oder Telefon mit einem
                  Terminvorschlag für die kostenlose Besichtigung.
                </p>
                <ContactForm />
                <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-line pt-6 text-xs font-semibold text-navy-600">
                  {[
                    "Kostenlose Besichtigung",
                    "Verbindlicher Festpreis",
                    "Fester Ansprechpartner",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-1.5">
                      <IconCheckCircle className="h-4 w-4 text-sky-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
