import type { ReactNode } from "react";
import { ButtonLink, Container } from "@/components/ui";
import { IconArrowRight, IconCheck, IconPhone } from "@/components/icons";
import { site } from "@/lib/site";

/* ------------------------------------------------------------------ */
/* Unterseiten-Hero                                                    */
/* ------------------------------------------------------------------ */

export function PageHero({
  overline,
  title,
  intro,
  image,
  withCta = true,
}: {
  overline?: string;
  title: string;
  intro: string;
  image?: string;
  withCta?: boolean;
}) {
  return (
    <section className="bg-gradient-to-b from-sky-50 to-white">
      <Container className="py-14 sm:py-20">
        <div
          className={`grid items-center gap-10 ${
            image ? "lg:grid-cols-[1.25fr_1fr]" : ""
          }`}
        >
          <div className={image ? "" : "mx-auto max-w-3xl text-center"}>
            {overline && (
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-sky-600">
                {overline}
              </p>
            )}
            <h1 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-navy-700 sm:text-lg">
              {intro}
            </p>
            {withCta && (
              <div
                className={`mt-8 flex flex-wrap items-center gap-4 ${
                  image ? "" : "justify-center"
                }`}
              >
                <ButtonLink href="/kontakt/">
                  Jetzt Angebot anfordern
                  <IconArrowRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink href={site.phoneHref} variant="outline">
                  <IconPhone className="h-4 w-4" />
                  {site.phone}
                </ButtonLink>
              </div>
            )}
          </div>
          {image && (
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt=""
                className="w-full rounded-[2.5rem] shadow-xl shadow-sky-500/10"
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Text-Blöcke für Leistungsseiten                                     */
/* ------------------------------------------------------------------ */

export function ContentSection({
  title,
  children,
  tinted = false,
}: {
  title: string;
  children: ReactNode;
  tinted?: boolean;
}) {
  return (
    <section className={tinted ? "bg-cloud" : ""}>
      <Container className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
            {title}
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-navy-700">
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Interne Verlinkung auf Nachbarstadt-Seiten */
export function NeighborLinks({
  basePath,
  citySlugs,
  cityNameBySlug,
}: {
  basePath: string;
  citySlugs: string[];
  cityNameBySlug: (slug: string) => string;
}) {
  return (
    <Container className="pb-16 sm:pb-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold text-navy-700">
          Cleanmaster 1974 ist auch in Ihrer Nachbarstadt im Einsatz:
        </p>
        <ul className="mt-4 flex flex-wrap justify-center gap-2.5">
          {citySlugs.map((slug) => (
            <li key={slug}>
              <a
                href={`${basePath}${slug}/`}
                className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700 transition-colors hover:bg-sky-500 hover:text-white"
              >
                {cityNameBySlug(slug)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
            <IconCheck className="h-3.5 w-3.5" />
          </span>
          <span className="text-sm leading-relaxed text-navy-700">{item}</span>
        </li>
      ))}
    </ul>
  );
}
