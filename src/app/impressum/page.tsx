import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum | Cleanmaster 1974",
  description: "Impressum von Cleanmaster 1974, Gebäudereinigung Stuttgart.",
  robots: { index: false },
  alternates: { canonical: "/impressum/" },
};

export default function ImpressumPage() {
  return (
    <Container className="py-14 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
          Impressum
        </h1>

        <div className="mt-8 space-y-6 text-base leading-relaxed text-navy-700">
          <section>
            <h2 className="mb-2 font-display text-lg font-bold text-navy-900">
              Angaben gemäß § 5 DDG
            </h2>
            <p>
              {site.name}
              <br />
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
            </p>
            <p className="mt-3">
              {/* TODO: Vor Livegang ergänzen und juristisch prüfen lassen */}
              Inhaber/in: [Vor- und Nachname des Inhabers]
              <br />
              Rechtsform: [z. B. Einzelunternehmen]
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-bold text-navy-900">
              Kontakt
            </h2>
            <p>
              Telefon: {site.phone}
              <br />
              E-Mail: {site.email}
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-bold text-navy-900">
              Umsatzsteuer
            </h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:
              [USt-IdNr. ergänzen oder Abschnitt entfernen]
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-bold text-navy-900">
              Verbraucherstreitbeilegung
            </h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <p className="rounded-2xl bg-sky-50 px-5 py-4 text-sm text-navy-600">
            Hinweis: Dieses Impressum ist ein Gerüst. Die Angaben in eckigen
            Klammern müssen vor dem Livegang ergänzt und rechtlich geprüft
            werden.
          </p>
        </div>
      </div>
    </Container>
  );
}
