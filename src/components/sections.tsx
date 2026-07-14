import Link from "next/link";
import type { ReactNode } from "react";
import { ButtonLink, Container, JsonLd, Kicker, SectionHeading } from "@/components/ui";
import {
  IconArrowRight,
  IconCheckCircle,
  IconDocument,
  IconEuro,
  IconFamily,
  IconPhone,
  IconPin,
  serviceIcons,
} from "@/components/icons";
import { services, type Service } from "@/lib/services";
import { cities } from "@/lib/cities";
import { site } from "@/lib/site";

/* ------------------------------------------------------------------ */
/* Vertrauens-Leiste                                                   */
/* ------------------------------------------------------------------ */

const trustItems = [
  {
    icon: IconEuro,
    title: "Festpreis-Garantie",
    text: "Der Angebotspreis ist verbindlich",
  },
  {
    icon: IconFamily,
    title: "Familienbetrieb",
    text: "Inhabergeführt, kurze Entscheidungswege",
  },
  {
    icon: IconDocument,
    title: "Ein Ansprechpartner",
    text: "Für alle Leistungen und Objekte",
  },
  {
    icon: IconPin,
    title: "Vor Ort",
    text: "In Stuttgart und der ganzen Region",
  },
];

export function TrustBar() {
  return (
    <Container className="relative z-10 -mt-10">
      <div className="grid grid-cols-1 gap-x-4 gap-y-6 rounded-3xl bg-navy-900 px-8 py-8 shadow-2xl shadow-navy-900/30 sm:grid-cols-2 lg:grid-cols-4">
        {trustItems.map((item) => (
          <div key={item.title} className="flex items-start gap-3.5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-500/15 text-sky-300">
              <item.icon className="h-5.5 w-5.5" />
            </span>
            <div>
              <p className="font-display text-sm font-bold text-white">
                {item.title}
              </p>
              <p className="mt-0.5 text-xs leading-relaxed text-navy-300">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

/* ------------------------------------------------------------------ */
/* Leistungs-Karten                                                    */
/* ------------------------------------------------------------------ */

export function ServiceCard({
  service,
  withImage = false,
}: {
  service: Service;
  withImage?: boolean;
}) {
  const Icon = serviceIcons[service.icon];
  return (
    <Link
      href={service.href}
      className="group flex flex-col rounded-3xl border border-navy-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-500/10"
    >
      {withImage ? (
        <span className="mb-5 block overflow-hidden rounded-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={service.image}
            alt=""
            className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </span>
      ) : (
        <span className="mb-5 flex h-13 w-13 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 transition-colors group-hover:bg-sky-500 group-hover:text-white">
          <Icon className="h-6.5 w-6.5" />
        </span>
      )}
      <h3 className="font-display text-lg font-bold text-navy-900">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600">
        {service.teaser}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-sky-600">
        Mehr erfahren
        <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

export function ServiceGrid({ withImage = false }: { withImage?: boolean }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s) => (
        <ServiceCard key={s.slug} service={s} withImage={withImage} />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Dunkle Feature-Sektion (Warum Cleanmaster 1974)                     */
/* ------------------------------------------------------------------ */

export function DarkFeatureSection({
  kicker,
  title,
  lead,
  items,
}: {
  kicker?: string;
  title: string;
  lead?: string;
  items: { icon: ReactNode; title: string; text: string }[];
}) {
  return (
    <Container>
      <div className="relative overflow-hidden rounded-[2.5rem] bg-navy-900 px-6 py-14 sm:px-12 sm:py-16">
        {/* Deko */}
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-500/10"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-sky-500/5"
          aria-hidden="true"
        />
        <div className="relative">
          <SectionHeading kicker={kicker} title={title} lead={lead} onDark />
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {items.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-300">
                  {item.icon}
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy-200">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

/* ------------------------------------------------------------------ */
/* Ablauf-Schritte                                                     */
/* ------------------------------------------------------------------ */

export function ProcessSteps({
  kicker,
  title,
  lead,
  steps,
  image = "/images/kontakt.svg",
}: {
  kicker?: string;
  title: string;
  lead?: string;
  steps: { title: string; text: string }[];
  image?: string;
}) {
  return (
    <Container>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt=""
            className="w-full rounded-[2.5rem]"
            loading="lazy"
          />
        </div>
        <div className="order-1 lg:order-2">
          <SectionHeading kicker={kicker} title={title} lead={lead} align="left" />
          <ol className="space-y-6">
            {steps.map((step, i) => (
              <li key={step.title} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky-500 font-display text-base font-extrabold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-navy-900">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-navy-600">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Container>
  );
}

/* ------------------------------------------------------------------ */
/* Frage-Sektion (AEO)                                                 */
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
      <div className="mx-auto max-w-3xl rounded-[2.5rem] bg-cloud px-6 py-12 text-center sm:px-12">
        <h2 className="text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
          {title}
        </h2>
        <div className="mt-5 text-base leading-relaxed text-navy-700">
          {children}
        </div>
        {cta && (
          <Link
            href={cta.href}
            className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-sky-600 hover:text-sky-700"
          >
            {cta.label}
            <IconArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </Container>
  );
}

/* ------------------------------------------------------------------ */
/* Regionale Abdeckung                                                 */
/* ------------------------------------------------------------------ */

export function RegionChips({ text }: { text: string }) {
  return (
    <Container>
      <SectionHeading title="Vor Ort im Großraum Stuttgart" lead={text} />
      <ul className="mx-auto flex max-w-3xl flex-wrap justify-center gap-2.5">
        {cities.map((city) =>
          city.active ? (
            <li key={city.slug}>
              <Link
                href={`/leistungen/gebaeudereinigung/${city.slug}/`}
                className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700 transition-colors hover:bg-sky-500 hover:text-white"
              >
                {city.name}
              </Link>
            </li>
          ) : (
            <li key={city.slug}>
              <span className="inline-flex rounded-full border border-navy-100 bg-white px-4 py-2 text-sm font-medium text-navy-600">
                {city.name}
              </span>
            </li>
          ),
        )}
      </ul>
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
      <SectionHeading kicker={kicker} title={title} />
      <div className="mx-auto max-w-3xl space-y-3">
        {items.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl border border-navy-100 bg-white px-6 py-1 open:border-sky-200 open:shadow-lg open:shadow-sky-500/5"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-base font-bold text-navy-900">
                {item.q}
              </h3>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600 transition-transform group-open:rotate-45">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </summary>
            <p className="pb-5 text-sm leading-relaxed text-navy-600">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </Container>
  );
}

/* ------------------------------------------------------------------ */
/* Abschluss-CTA-Banner                                                */
/* ------------------------------------------------------------------ */

export function CtaBanner({
  kicker = "KONTAKT",
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
    <Container>
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-sky-500 to-sky-700 px-6 py-14 sm:px-12">
        <div
          className="pointer-events-none absolute -right-20 -bottom-24 h-80 w-80 rounded-full bg-white/10"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-24 top-8 h-24 w-24 rounded-full bg-white/10"
          aria-hidden="true"
        />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <Kicker onDark>{kicker}</Kicker>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-sky-50">
              {text}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <ButtonLink href="/kontakt/" variant="light">
                {primaryLabel}
                <IconArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href={site.phoneHref} variant="outlineLight">
                <IconPhone className="h-4 w-4" />
                {site.phone}
              </ButtonLink>
            </div>
            <p className="mt-4 flex items-center gap-2 text-sm font-medium text-sky-100">
              <IconCheckCircle className="h-4 w-4" />
              {microcopy}
            </p>
          </div>
          <div className="hidden lg:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/kontakt.svg"
              alt=""
              className="w-full max-w-sm rounded-3xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
