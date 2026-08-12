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
              1. Datenschutz auf einen Blick
            </h2>
            <p>
              Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Wir
              verarbeiten Ihre Daten ausschließlich auf Grundlage der
              gesetzlichen Bestimmungen (DSGVO, BDSG, TDDDG). In dieser
              Datenschutzerklärung informieren wir Sie über die wichtigsten
              Aspekte der Datenverarbeitung im Rahmen unserer Website.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-bold text-navy-900">
              2. Verantwortlicher
            </h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="mt-3">
              {site.legalName}
              <br />
              Geschäftsführer: Ajub Akbari
              <br />
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
              <br />
              Telefon: {site.phone}
              <br />
              E-Mail: {site.email}
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-bold text-navy-900">
              3. Hosting und Server-Logfiles
            </h2>
            <p>
              Diese Website wird bei der Vercel Inc., 340 S Lemon Ave #4133,
              Walnut, CA 91789, USA, gehostet. Vercel verarbeitet in unserem
              Auftrag als Auftragsverarbeiter (Art. 28 DSGVO) die zum Betrieb
              der Website erforderlichen Daten. Beim Aufruf der Seiten
              erhebt der Hoster automatisch Informationen in sogenannten
              Server-Logfiles, die Ihr Browser übermittelt. Dies sind
              insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, die
              abgerufene Datei, der verwendete Browser und das Betriebssystem.
              Diese Daten dienen der technischen Bereitstellung, der
              Sicherheit und der Stabilität der Website. Rechtsgrundlage ist
              Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem
              sicheren und stabilen Betrieb). Sofern Daten in die USA
              übermittelt werden, erfolgt dies auf Grundlage der
              EU-Standardvertragsklauseln und eines entsprechenden
              Auftragsverarbeitungsvertrags.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-bold text-navy-900">
              4. Kontaktaufnahme
            </h2>
            <p>
              <strong>Kontaktformular:</strong> Wenn Sie uns über das Formular
              kontaktieren, verarbeiten wir die von Ihnen angegebenen Daten
              (Name, Kontaktdaten, Inhalt der Anfrage), um Ihre Anfrage zu
              bearbeiten und Ihnen ein Angebot zu erstellen. Rechtsgrundlage
              ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) sowie
              Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
              Bearbeitung von Anfragen). Für den technischen Versand der
              Formulardaten per E-Mail nutzen wir den Dienst Resend (Resend,
              Inc., USA) als Auftragsverarbeiter.
            </p>
            <p className="mt-3">
              <strong>Telefon und E-Mail:</strong> Wenn Sie uns telefonisch
              oder per E-Mail kontaktieren, verarbeiten wir Ihre Angaben zur
              Bearbeitung Ihres Anliegens auf Grundlage von Art. 6 Abs. 1
              lit. b und lit. f DSGVO.
            </p>
            <p className="mt-3">
              <strong>WhatsApp:</strong> Sie können uns auf Wunsch über
              WhatsApp kontaktieren. Bei der Nutzung von WhatsApp werden Daten
              (u. a. Ihre Telefonnummer und der Nachrichteninhalt) an die
              WhatsApp Ireland Ltd. bzw. die Meta Platforms Ireland Ltd.
              übermittelt und dort nach deren Datenschutzbestimmungen
              verarbeitet; dabei kann auch eine Übermittlung in die USA
              erfolgen. Rechtsgrundlage ist Ihre Einwilligung durch die aktive
              Kontaktaufnahme (Art. 6 Abs. 1 lit. a DSGVO) sowie Art. 6 Abs. 1
              lit. b DSGVO. Wenn Sie diese Übermittlung vermeiden möchten,
              nutzen Sie bitte das Kontaktformular, das Telefon oder die
              E-Mail.
            </p>
            <p className="mt-3">
              Ihre bei einer Kontaktaufnahme übermittelten Daten werden
              gelöscht, sobald sie für die Bearbeitung nicht mehr erforderlich
              sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-bold text-navy-900">
              5. Reichweitenmessung (Vercel Web Analytics)
            </h2>
            <p>
              Zur statistischen Auswertung der Nutzung unserer Website setzen
              wir Vercel Web Analytics ein. Die Erfassung erfolgt cookielos:
              Es werden keine Cookies gesetzt, keine seitenübergreifende
              Verfolgung vorgenommen und keine personenbezogenen Profile
              gespeichert. Aus den erhobenen Daten (z. B. aufgerufene Seite,
              anonymisierte technische Angaben) lassen sich keine
              Rückschlüsse auf einzelne Personen ziehen. Rechtsgrundlage ist
              Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer
              datensparsamen Reichweitenanalyse).
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-bold text-navy-900">
              6. Cookies
            </h2>
            <p>
              Diese Website setzt keine einwilligungspflichtigen
              Tracking- oder Marketing-Cookies. Es werden allenfalls technisch
              notwendige Informationen verarbeitet, die für den Betrieb der
              Website erforderlich sind. Ein Einwilligungsbanner ist daher
              nicht erforderlich.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-bold text-navy-900">
              7. Schriftarten
            </h2>
            <p>
              Zur einheitlichen Darstellung von Schriftarten werden diese
              lokal eingebunden und beim Aufruf der Seite vom eigenen Server
              geladen. Eine Verbindung zu Servern Dritter (z. B. Google Fonts)
              findet dabei nicht statt.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-bold text-navy-900">
              8. SSL-/TLS-Verschlüsselung
            </h2>
            <p>
              Diese Website nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte eine SSL-/TLS-Verschlüsselung.
              Eine verschlüsselte Verbindung erkennen Sie an der Zeichenfolge
              „https://“ in der Adresszeile Ihres Browsers.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-bold text-navy-900">
              9. Speicherdauer
            </h2>
            <p>
              Sofern innerhalb dieser Datenschutzerklärung keine speziellere
              Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
              Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
              Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine
              Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten
              gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe
              für die Speicherung (z. B. steuer- oder handelsrechtliche
              Aufbewahrungsfristen) haben; im letztgenannten Fall erfolgt die
              Löschung nach Fortfall dieser Gründe.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-bold text-navy-900">
              10. Ihre Rechte
            </h2>
            <p>
              Sie haben im Rahmen der gesetzlichen Bestimmungen jederzeit das
              Recht auf unentgeltliche Auskunft über Ihre gespeicherten
              personenbezogenen Daten (Art. 15 DSGVO), deren Herkunft und
              Empfänger sowie den Zweck der Verarbeitung, sowie ein Recht auf
              Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der
              Verarbeitung (Art. 18) und Datenübertragbarkeit (Art. 20). Sie
              haben zudem das Recht, der Verarbeitung zu widersprechen
              (Art. 21 DSGVO), und können eine erteilte Einwilligung jederzeit
              mit Wirkung für die Zukunft widerrufen.
            </p>
            <p className="mt-3">
              Ihnen steht außerdem ein Beschwerderecht bei einer
              Datenschutz-Aufsichtsbehörde zu. Die für uns zuständige Behörde
              ist:
            </p>
            <p className="mt-3">
              Der Landesbeauftragte für den Datenschutz und die
              Informationsfreiheit Baden-Württemberg
              <br />
              Lautenschlagerstraße 20
              <br />
              70173 Stuttgart
            </p>
          </section>

          <p className="text-sm text-navy-500">
            Stand: August 2026
          </p>
        </div>
      </div>
    </Container>
  );
}
