import type { ReactNode } from "react";
import { ButtonLink, Container } from "@/components/ui";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { IconArrowRight, IconCheck, IconPhone } from "@/components/icons";
import { site } from "@/lib/site";

/* ------------------------------------------------------------------ */
/* Unterseiten-Hero: typografisch, mit Breadcrumb                      */
/* ------------------------------------------------------------------ */

export function PageHero({
  crumbs = [],
  overline,
  title,
  intro,
  withCta = true,
}: {
  crumbs?: Crumb[];
  overline?: string;
  title: string;
  intro: string;
  withCta?: boolean;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-sky-50/80 to-white">
      <div
        aria-hidden="true"
        className="dots absolute inset-y-0 right-0 w-1/3 [mask-image:linear-gradient(to_left,black,transparent)]"
      />
      <Container className="relative py-12 sm:py-18">
        <div className="anim-up">
          {crumbs.length > 0 && <Breadcrumbs items={crumbs} />}
          {overline && (
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-sky-700">
              {overline}
            </p>
          )}
          <h1 className="max-w-4xl font-display text-[clamp(2.1rem,1.4rem+3vw,3.6rem)] font-extrabold leading-[1.05] tracking-tight text-navy-950">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-600 sm:text-lg">
            {intro}
          </p>
        </div>
        {withCta && (
          <div
            className="anim-up mt-9 flex flex-wrap items-center gap-4"
            style={{ "--enter-delay": "0.12s" } as React.CSSProperties}
          >
            <ButtonLink href="/kontakt/">
              Jetzt Angebot anfordern
              <IconArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href={site.phoneHref} variant="outline">
              <IconPhone className="h-4 w-4" />
              <span className="tabular-nums">{site.phone}</span>
            </ButtonLink>
          </div>
        )}
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
      <Container className="py-14 sm:py-18">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <h2 className="font-display text-[clamp(1.5rem,1.2rem+1.3vw,2.1rem)] font-extrabold leading-[1.12] tracking-tight text-navy-950 lg:sticky lg:top-32">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-7">
            <div className="space-y-5 text-[0.97rem] leading-relaxed text-navy-700">
              {children}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint-100 text-mint-600">
            <IconCheck className="h-3.5 w-3.5" strokeWidth={2.4} />
          </span>
          <span className="text-[0.93rem] leading-relaxed text-navy-700">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------------ */
/* Interne Verlinkung auf Nachbarstadt-Seiten                          */
/* ------------------------------------------------------------------ */

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
    <Container className="pb-16 sm:pb-20">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-navy-600">
            Cleanmaster 1974 ist auch in Ihrer Nachbarstadt im Einsatz:
          </p>
          <ul className="mt-4 flex flex-wrap justify-center gap-2">
            {citySlugs.map((slug) => (
              <li key={slug}>
                <a
                  href={`${basePath}${slug}/`}
                  className="inline-flex rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-navy-700 transition-all duration-200 hover:-translate-y-px hover:border-sky-300 hover:text-sky-700"
                >
                  {cityNameBySlug(slug)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Container>
  );
}
