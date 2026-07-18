import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { ButtonLink, Container, JsonLd, Kicker, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { RegionMap } from "@/components/RegionMap";
import {
  IconArrowRight,
  IconCheckCircle,
  IconPhone,
  serviceIcons,
} from "@/components/icons";
import { services, type Service, type ServiceImage } from "@/lib/services";
import { cities } from "@/lib/cities";
import { site } from "@/lib/site";

/* ------------------------------------------------------------------ */
/* Leistungen: Bento-Grid                                              */
/* ------------------------------------------------------------------ */

function FeaturedServiceCard({ service, delay }: { service: Service; delay: number }) {
  const Icon = serviceIcons[service.icon];
  return (
    <Reveal delay={delay} className="lg:col-span-6">
      <Link
        href={service.href}
        className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-2xl hover:shadow-sky-500/10"
      >
        {service.image && (
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src={service.image.src}
              alt={service.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 34rem"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </div>
        )}
        <div className="relative flex flex-1 flex-col justify-between bg-gradient-to-br from-cloud via-white to-sky-50 p-8 sm:p-10">
          {!service.image && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-14 text-sky-100 transition-transform duration-500 group-hover:scale-110 group-hover:text-sky-200"
            >
              <Icon className="h-52 w-52 opacity-70" strokeWidth={1} />
            </div>
          )}
          <div className="relative">
            <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-950 text-white transition-colors duration-300 group-hover:bg-sky-500">
              <Icon className="h-6 w-6" />
            </span>
            <h3 className="font-display text-2xl font-bold tracking-tight text-navy-950">
              {service.title}
            </h3>
            <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-navy-600">
              {service.teaser}
            </p>
          </div>
          <span className="relative mt-8 inline-flex items-center gap-2 text-sm font-bold text-sky-600">
            Mehr erfahren
            <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

function CompactServiceCard({ service, delay }: { service: Service; delay: number }) {
  const Icon = serviceIcons[service.icon];
  return (
    <Reveal delay={delay} className="lg:col-span-3">
      <Link
        href={service.href}
        className="group flex h-full flex-col rounded-[1.75rem] border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-500/10"
      >
        <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-navy-50 text-navy-700 transition-colors duration-300 group-hover:bg-sky-500 group-hover:text-white">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="font-display text-[1.05rem] font-bold leading-snug text-navy-950">
          {service.title}
        </h3>
        <p className="mt-2 flex-1 text-[0.83rem] leading-relaxed text-navy-500">
          {service.teaser}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-[0.83rem] font-bold text-sky-600">
          Mehr erfahren
          <IconArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </Link>
    </Reveal>
  );
}

export function ServiceGrid() {
  const [featured1, featured2, ...rest] = services;
  return (
    <div className="grid gap-4 lg:grid-cols-12">
      <FeaturedServiceCard service={featured2} delay={0} />
      <FeaturedServiceCard service={featured1} delay={0.08} />
      {rest.map((s, i) => (
        <CompactServiceCard key={s.slug} service={s} delay={0.05 * (i % 4)} />
      ))}
      {/* Abschluss-Kachel: Conversion statt Lückenfüller */}
      <Reveal delay={0.15} className="lg:col-span-3">
        <Link
          href="/kontakt/"
          className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.75rem] bg-navy-950 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-950/25"
        >
          <div
            className="absolute inset-0 bg-[radial-gradient(24rem_16rem_at_110%_-20%,rgba(26,154,217,0.45),transparent_60%)]"
            aria-hidden="true"
          />
          <div className="relative">
            <h3 className="font-display text-[1.05rem] font-bold leading-snug text-white">
              Nicht sicher, welche Leistung passt?
            </h3>
            <p className="mt-2 text-[0.83rem] leading-relaxed text-navy-200">
              Wir besichtigen kostenlos und empfehlen, was Ihr Objekt wirklich
              braucht.
            </p>
          </div>
          <span className="relative mt-4 inline-flex items-center gap-1.5 text-[0.83rem] font-bold text-sky-300">
            Besichtigung vereinbaren
            <IconArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </Link>
      </Reveal>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Dunkle Feature-Sektion (Warum Cleanmaster 1974) — full-bleed        */
/* ------------------------------------------------------------------ */

export function DarkFeatureSection({
  kicker,
  title,
  lead,
  items,
  image,
}: {
  kicker?: string;
  title: string;
  lead?: string;
  items: { title: string; text: string }[];
  image?: ServiceImage;
}) {
  return (
    <section className="grain glow-sky relative overflow-hidden py-20 sm:py-28">
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <SectionHeading kicker={kicker} title={title} lead={lead} onDark />
              </Reveal>
              <Reveal delay={0.1}>
                <ButtonLink href="/kontakt/" variant="light">
                  Angebot anfordern
                  <IconArrowRight className="h-4 w-4" />
                </ButtonLink>
              </Reveal>
              {image && (
                <Reveal delay={0.16}>
                  <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/10 shadow-2xl shadow-navy-950/40">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 30rem"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
              )}
            </div>
          </div>
          <ol className="lg:col-span-7">
            {items.map((item, i) => (
              <Reveal
                as="li"
                key={item.title}
                delay={0.06 * i}
                className="group relative border-t border-white/10 py-8 last:border-b sm:py-10"
              >
                <div className="flex items-start gap-6 sm:gap-10">
                  <span
                    aria-hidden="true"
                    className="font-display text-4xl font-extrabold leading-none tracking-tight text-white/15 transition-colors duration-300 group-hover:text-sky-400/60 sm:text-5xl"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 max-w-xl text-[0.95rem] leading-relaxed text-navy-200">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Ablauf: Timeline                                                    */
/* ------------------------------------------------------------------ */

export function ProcessSteps({
  kicker,
  title,
  lead,
  steps,
}: {
  kicker?: string;
  title: string;
  lead?: string;
  steps: { title: string; text: string }[];
}) {
  const cols: Record<number, string> = {
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
    5: "md:grid-cols-2 lg:grid-cols-5",
  };
  return (
    <Container>
      <Reveal>
        <SectionHeading kicker={kicker} title={title} lead={lead} />
      </Reveal>
      <ol className={`relative grid grid-cols-1 gap-10 lg:gap-6 ${cols[steps.length] ?? "lg:grid-cols-3"}`}>
        {/* Verbindungslinie: nur wenn alle Schritte in einer Zeile stehen */}
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 top-[1.35rem] hidden h-px bg-line lg:block"
        />
        {steps.map((step, i) => (
          <Reveal
            as="li"
            key={step.title}
            delay={0.08 * i}
            className="relative flex gap-5 lg:block"
          >
            <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-sky-500 bg-white font-display text-sm font-extrabold text-sky-600 lg:mb-5">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="lg:pr-6">
              <h3 className="font-display text-lg font-bold text-navy-950">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">
                {step.text}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Container>
  );
}

/* ------------------------------------------------------------------ */
/* Frage-Sektion (AEO): Split-Layout                                   */
/* ------------------------------------------------------------------ */

export function QuestionSection({
  title,
  children,
  cta,
}: {
  title: string;
  children: ReactNode;
  cta?: { href: string; label: string };
}) {
  return (
    <Container>
      <Reveal>
        <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-cloud">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-7 top-7 hidden rotate-12 rounded-xl border-[3px] border-sky-200 px-5 py-2 font-display text-lg font-extrabold uppercase tracking-widest text-sky-300 opacity-70 sm:block"
          >
            Festpreis
          </span>
          <div className="grid gap-6 p-8 sm:p-12 lg:grid-cols-[1fr_1.25fr] lg:gap-14">
            <h2 className="font-display text-[clamp(1.6rem,1.2rem+1.6vw,2.4rem)] font-extrabold leading-[1.12] tracking-tight text-navy-950">
              {title}
            </h2>
            <div>
              <div className="text-[0.97rem] leading-relaxed text-navy-700">
                {children}
              </div>
              {cta && (
                <Link
                  href={cta.href}
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-sky-600 transition-colors hover:text-sky-700"
                >
                  {cta.label}
                  <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </Container>
  );
}

/* ------------------------------------------------------------------ */
/* Regionale Abdeckung: Karte + Chips                                  */
/* ------------------------------------------------------------------ */

export function RegionSection({ text }: { text: string }) {
  return (
    <Container>
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading
              kicker="Einsatzgebiet"
              title="Vor Ort im Großraum Stuttgart"
              lead={text}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="flex flex-wrap gap-2">
              {cities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/leistungen/gebaeudereinigung/${city.slug}/`}
                    className="inline-flex rounded-full border border-line bg-white px-3.5 py-1.5 text-[0.8rem] font-semibold text-navy-700 transition-all duration-200 hover:-translate-y-px hover:border-sky-300 hover:text-sky-700"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal delay={0.12} className="hidden lg:col-span-7 sm:block">
          <div className="dots flex justify-center rounded-[1.75rem] border border-line bg-white p-4 sm:p-8">
            <RegionMap />
          </div>
        </Reveal>
      </div>
    </Container>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ mit Schema                                                      */
/* ------------------------------------------------------------------ */

export interface FaqItem {
  q: string;
  a: string;
}

export function Faq({
  kicker = "FAQ",
  title,
  items,
}: {
  kicker?: string;
  title: string;
  items: FaqItem[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <Container>
      <JsonLd data={schema} />
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <SectionHeading kicker={kicker} title={title} />
          </Reveal>
          <Reveal delay={0.08}>
            <p className="-mt-6 text-sm text-navy-500">
              Ihre Frage ist nicht dabei?{" "}
              <Link
                href="/kontakt/"
                className="font-bold text-sky-600 hover:underline"
              >
                Fragen Sie uns direkt.
              </Link>
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          <div className="border-t border-line">
            {items.map((item, i) => (
              <Reveal key={item.q} delay={0.04 * i}>
                <details name="faq-accordion" className="faq-item group border-b border-line">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                    <h3 className="font-display text-[1.05rem] font-bold text-navy-950 transition-colors group-hover:text-sky-700">
                      {item.q}
                    </h3>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-navy-600 transition-all duration-300 group-open:rotate-45 group-open:border-sky-500 group-open:bg-sky-500 group-open:text-white">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <p className="max-w-2xl pb-7 text-[0.95rem] leading-relaxed text-navy-600">
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

/* ------------------------------------------------------------------ */
/* Abschluss-CTA: full-bleed Dark-Band                                 */
/* ------------------------------------------------------------------ */

export function CtaBanner({
  kicker = "Kontakt",
  title,
  text,
  primaryLabel = "Angebot anfordern",
  microcopy = "Kostenlose Besichtigung. Verbindlicher Festpreis.",
}: {
  kicker?: string;
  title: string;
  text: string;
  primaryLabel?: string;
  microcopy?: string;
}) {
  return (
    <section className="grain glow-sky relative overflow-hidden py-20 sm:py-28">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-8 right-6 select-none font-display text-[11rem] font-extrabold leading-none tracking-tighter text-white/[0.04]"
      >
        1974
      </span>
      <Container className="relative">
        <div className="max-w-3xl">
          <Reveal>
            <Kicker onDark>{kicker}</Kicker>
            <h2 className="font-display text-[clamp(2rem,1.4rem+2.6vw,3.4rem)] font-extrabold leading-[1.06] tracking-tight text-white">
              {title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-200 sm:text-lg">
              {text}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <ButtonLink href="/kontakt/" variant="light">
                {primaryLabel}
                <IconArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href={site.phoneHref} variant="outlineLight">
                <IconPhone className="h-4 w-4" />
                <span className="tabular-nums">{site.phone}</span>
              </ButtonLink>
            </div>
            <p className="mt-5 flex items-center gap-2 text-sm font-medium text-navy-300">
              <IconCheckCircle className="h-4 w-4 text-mint-400" />
              {microcopy}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
