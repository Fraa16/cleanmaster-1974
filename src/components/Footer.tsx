import Link from "next/link";
import { Logo } from "@/components/Logo";
import { JsonLd } from "@/components/ui";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import { cityNames } from "@/lib/cities";
import { IconArrowRight, IconMail, IconPhone, IconPin } from "@/components/icons";

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
    <footer className="grain relative overflow-hidden bg-navy-950 text-navy-200">
      <JsonLd data={organizationSchema} />

      {/* Wasserzeichen */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 right-0 select-none font-display text-[16rem] font-extrabold leading-none tracking-tighter text-white/[0.03]"
      >
        1974
      </span>

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-28 pt-16 sm:px-8 lg:pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_0.9fr_1.1fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-navy-300">
              {entityText}
            </p>
          </div>

          <nav aria-label="Leistungen">
            <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-navy-400">
              Leistungen
            </h2>
            <ul className="space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={s.href}
                    className="text-navy-200 transition-colors hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Unternehmen">
            <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-navy-400">
              Unternehmen
            </h2>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: "/leistungen/", label: "Alle Leistungen" },
                { href: "/ueber-uns/", label: "Über uns" },
                { href: "/kontakt/", label: "Kontakt" },
                { href: "/impressum/", label: "Impressum" },
                { href: "/datenschutz/", label: "Datenschutz" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-navy-200 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-navy-400">
              Kontakt
            </h2>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-2.5 font-display text-lg font-bold text-white transition-colors hover:text-sky-300"
                >
                  <IconPhone className="h-4 w-4 shrink-0 text-sky-400" />
                  <span className="tabular-nums">{site.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <IconMail className="h-4 w-4 shrink-0 text-sky-400" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-navy-300">
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
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-bold text-white transition-all hover:-translate-y-px hover:bg-sky-400"
            >
              Angebot anfordern
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-navy-400 sm:flex-row">
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
