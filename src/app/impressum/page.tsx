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
              {site.legalName}
              <br />
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-bold text-navy-900">
              Vertreten durch
            </h2>
            <p>Geschäftsführer: Ajub Akbari</p>
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
              Registereintrag
            </h2>
            <p>
              Registergericht: Amtsgericht Stuttgart
              <br />
              Registernummer: HRB 670123133
            </p>
          </section>

          {/*
            USt-IdNr. gem. § 27a UStG: liegt noch nicht vor und wird vom Kunden
            nachgereicht. Sobald vorhanden, hier ergänzen:
            <section>
              <h2 …>Umsatzsteuer-ID</h2>
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DEXXXXXXXXX</p>
            </section>
          */}

          <section>
            <h2 className="mb-2 font-display text-lg font-bold text-navy-900">
              Redaktionell verantwortlich (§ 18 Abs. 2 MStV)
            </h2>
            <p>
              Ajub Akbari
              <br />
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
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

          <section>
            <h2 className="mb-2 font-display text-lg font-bold text-navy-900">
              Haftung für Inhalte
            </h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
              gespeicherte fremde Informationen zu überwachen oder nach
              Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
              hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
              Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
              hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst
              ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
              möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen
              werden wir diese Inhalte umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-bold text-navy-900">
              Haftung für Links
            </h2>
            <p>
              Unser Angebot enthält gegebenenfalls Links zu externen Websites
              Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb
              können wir für diese fremden Inhalte auch keine Gewähr
              übernehmen. Für die Inhalte der verlinkten Seiten ist stets der
              jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
              verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
              mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren
              zum Zeitpunkt der Verlinkung nicht erkennbar. Bei Bekanntwerden
              von Rechtsverletzungen werden wir derartige Links umgehend
              entfernen.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-bold text-navy-900">
              Urheberrecht
            </h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten,
              nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
              dieser Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet.
            </p>
          </section>
        </div>
      </div>
    </Container>
  );
}
