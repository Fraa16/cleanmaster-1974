import Link from "next/link";
import { ButtonLink, Container } from "@/components/ui";
import { IconArrowRight, IconPhone } from "@/components/icons";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/80 to-white">
      <div
        aria-hidden="true"
        className="dots absolute inset-y-0 right-0 w-1/3 [mask-image:linear-gradient(to_left,black,transparent)]"
      />
      <Container className="relative py-20 sm:py-28">
        <div className="anim-up max-w-2xl">
          <p className="font-display text-7xl font-extrabold tracking-tight text-sky-200 sm:text-8xl">
            404
          </p>
          <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            Diese Seite gibt es nicht (mehr)
          </h1>
          <p className="mt-5 text-base leading-relaxed text-navy-600 sm:text-lg">
            Die angeforderte Adresse existiert nicht oder wurde verschoben.
            Vielleicht finden Sie hier, was Sie gesucht haben:
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ButtonLink href="/">
              Zur Startseite
              <IconArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/kontakt/" variant="outline">
              <IconPhone className="h-4 w-4" />
              Kontakt aufnehmen
            </ButtonLink>
          </div>
          <div className="mt-10 border-t border-line pt-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-navy-400">
              Direkt zu unseren Leistungen
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={s.href}
                    className="inline-flex rounded-full border border-line bg-white px-3.5 py-1.5 text-[0.8rem] font-semibold text-navy-700 transition-all duration-200 hover:-translate-y-px hover:border-sky-300 hover:text-sky-700"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-navy-500">
              Oder rufen Sie uns an:{" "}
              <a
                href={site.phoneHref}
                className="font-bold text-sky-600 tabular-nums hover:underline"
              >
                {site.phone}
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
