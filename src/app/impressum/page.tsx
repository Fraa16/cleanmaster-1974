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
              Inhaber: Ajub Akbari
              <br />
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
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
              Verbraucherstreitbeilegung
            </h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </div>
    </Container>
  );
}
