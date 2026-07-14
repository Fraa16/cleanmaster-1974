import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Container, JsonLd } from "@/components/ui";
import { IconCheckCircle, IconMail, IconPhone, IconPin } from "@/components/icons";
import { site } from "@/lib/site";
import { cityNames } from "@/lib/cities";

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

      <section className="bg-gradient-to-b from-sky-50 to-white">
        <Container className="py-14 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-sky-600">
              Kontakt
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-5xl">
              Kontakt zu Cleanmaster 1974
            </h1>
            <p className="mt-5 text-base leading-relaxed text-navy-700 sm:text-lg">
              So erreichen Sie uns: telefonisch, per E-Mail oder über das
              Formular. Beschreiben Sie kurz Ihr Objekt und die gewünschte
              Leistung. Wir melden uns, vereinbaren eine kostenlose
              Besichtigung und erstellen Ihr Festpreis-Angebot.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            {/* Kontaktblock */}
            <div className="space-y-4">
              <a
                href={site.phoneHref}
                className="flex items-start gap-4 rounded-3xl border border-navy-100 bg-white p-6 transition-colors hover:border-sky-200"
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
                className="flex items-start gap-4 rounded-3xl border border-navy-100 bg-white p-6 transition-colors hover:border-sky-200"
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

              <div className="flex items-start gap-4 rounded-3xl border border-navy-100 bg-white p-6">
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

              <div className="rounded-3xl bg-navy-900 p-6">
                <p className="text-sm font-semibold leading-relaxed text-white">
                  Einsatzgebiet: Stuttgart und 18 Städte der Region, von
                  Leonberg bis Ludwigsburg.
                </p>
              </div>
            </div>

            {/* Formular */}
            <div className="rounded-[2rem] border border-navy-100 bg-white p-6 shadow-xl shadow-sky-500/5 sm:p-10">
              <h2 className="font-display text-xl font-extrabold text-navy-900">
                Anfrage senden
              </h2>
              <p className="mb-6 mt-2 text-sm text-navy-600">
                Wir melden uns mit einem Terminvorschlag für die kostenlose
                Besichtigung.
              </p>
              <ContactForm />
              <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-navy-100 pt-6 text-xs font-semibold text-navy-600">
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
        </Container>
      </section>
    </>
  );
}
