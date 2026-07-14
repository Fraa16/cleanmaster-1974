import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Cleanmaster 1974",
  description:
    "Datenschutzerklärung von Cleanmaster 1974, Gebäudereinigung Stuttgart.",
  robots: { index: false },
  alternates: { canonical: "/datenschutz/" },
};

export default function DatenschutzPage() {
  return (
    <Container className="py-14 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
          Datenschutzerklärung
        </h1>

        <div className="mt-8 space-y-6 text-base leading-relaxed text-navy-700">
          <section>
            <h2 className="mb-2 font-display text-lg font-bold text-navy-900">
              Verantwortlicher
            </h2>
            <p>
              {site.name}
              <br />
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
              <br />
              E-Mail: {site.email}
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-bold text-navy-900">
              Hosting
            </h2>
            <p>
              Diese Website wird bei Vercel Inc. gehostet. Beim Aufruf der
              Seiten verarbeitet der Hoster technisch notwendige Daten
              (z. B. IP-Adresse, Zeitpunkt des Zugriffs) in
              Server-Logfiles. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
              DSGVO (berechtigtes Interesse an einem sicheren und stabilen
              Betrieb).
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-bold text-navy-900">
              Kontaktformular
            </h2>
            <p>
              Wenn Sie uns über das Formular kontaktieren, verarbeiten wir
              die von Ihnen angegebenen Daten (Name, Kontaktdaten, Inhalt
              der Anfrage) zur Bearbeitung Ihrer Anfrage und zur Erstellung
              eines Angebots. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b
              DSGVO. Für den Versand der Formulardaten nutzen wir den
              Dienst Resend. Die Daten werden gelöscht, sobald sie für die
              Bearbeitung nicht mehr erforderlich sind und keine
              gesetzlichen Aufbewahrungspflichten bestehen.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-bold text-navy-900">
              Ihre Rechte
            </h2>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
              Einschränkung der Verarbeitung, Datenübertragbarkeit sowie
              Widerspruch gegen die Verarbeitung Ihrer personenbezogenen
              Daten. Außerdem können Sie sich bei einer
              Datenschutz-Aufsichtsbehörde beschweren, in
              Baden-Württemberg beim Landesbeauftragten für den Datenschutz
              und die Informationsfreiheit.
            </p>
          </section>

          <p className="rounded-2xl bg-sky-50 px-5 py-4 text-sm text-navy-600">
            Hinweis: Diese Datenschutzerklärung ist ein Gerüst und muss vor
            dem Livegang rechtlich geprüft und an die tatsächlich
            eingesetzten Dienste angepasst werden.
          </p>
        </div>
      </div>
    </Container>
  );
}
