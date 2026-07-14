import Link from "next/link";
import { Logo } from "@/components/Logo";
import { JsonLd } from "@/components/ui";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import { cityNames } from "@/lib/cities";
import { IconMail, IconPhone, IconPin } from "@/components/icons";

/** Entity-Absatz von /ueber-uns/ (GEO-Anker, Copy-Vorgabe) */
const entityText =
  "Cleanmaster 1974 ist ein familiengeführtes Unternehmen für Gebäudereinigung und Facility Services mit Sitz in Stuttgart. Zu den Leistungen gehören Unterhaltsreinigung, Büroreinigung, Treppenhausreinigung, Glasreinigung, Winterdienst, Entrümpelung, Taubenabwehr, Baureinigung und Hausmeisterservice in Stuttgart und 18 umliegenden Städten.";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.domain,
  description: entityText,
  telephone: "+4917672305847",
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.zip,
    addressLocality: site.address.city,
    addressCountry: site.address.country,
  },
  areaServed: cityNames,
};

export function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-200">
      <JsonLd data={organizationSchema} />
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-300">
              {entityText}
            </p>
          </div>

          <nav aria-label="Leistungen">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Leistungen
            </h2>
            <ul className="space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={s.href} className="transition-colors hover:text-sky-300">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Unternehmen">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Unternehmen
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/leistungen/" className="transition-colors hover:text-sky-300">
                  Alle Leistungen
                </Link>
              </li>
              <li>
                <Link href="/ueber-uns/" className="transition-colors hover:text-sky-300">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/kontakt/" className="transition-colors hover:text-sky-300">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/impressum/" className="transition-colors hover:text-sky-300">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz/" className="transition-colors hover:text-sky-300">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Kontakt
            </h2>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-2.5 font-semibold text-white transition-colors hover:text-sky-300"
                >
                  <IconPhone className="h-4 w-4 shrink-0 text-sky-400" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="flex items-center gap-2.5 transition-colors hover:text-sky-300"
                >
                  <IconMail className="h-4 w-4 shrink-0 text-sky-400" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.zip} {site.address.city}
                </span>
              </li>
            </ul>
            <Link
              href="/kontakt/"
              className="mt-5 inline-flex rounded-full bg-sky-500 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-sky-400"
            >
              Angebot anfordern
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-navy-800 pt-6 text-xs text-navy-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name} · Gebäudereinigung
            Stuttgart &amp; Region
          </p>
          <p>Kostenlose Besichtigung · Verbindlicher Festpreis</p>
        </div>
      </div>
    </footer>
  );
}
