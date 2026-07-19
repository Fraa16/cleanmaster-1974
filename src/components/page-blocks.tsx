import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { ButtonLink, Container } from "@/components/ui";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { IconArrowRight, IconCheck, IconPhone, serviceIcons } from "@/components/icons";
import { site } from "@/lib/site";
import type { ServiceIcon, ServiceImage } from "@/lib/services";

/* ------------------------------------------------------------------ */
/* Unterseiten-Hero: typografisch, mit Breadcrumb                      */
/* ------------------------------------------------------------------ */

export function PageHero({
  crumbs = [],
  overline,
  title,
  intro,
  withCta = true,
  image,
  variant = "split",
  icon,
}: {
  crumbs?: Crumb[];
  overline?: string;
  title: string;
  intro: string;
  withCta?: boolean;
  image?: ServiceImage;
  variant?: "split" | "banner" | "dark";
  icon?: ServiceIcon;
}) {
  const onDark = variant === "banner" || variant === "dark";
  const WatermarkIcon = icon ? serviceIcons[icon] : null;

  const text = (
    <>
      <div className="anim-up">
        {crumbs.length > 0 && <Breadcrumbs items={crumbs} onDark={onDark} />}
        {overline && (
          <p
            className={`mb-4 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.16em] ${
              onDark
                ? "border-white/20 bg-white/10 text-sky-200 backdrop-blur-sm"
                : "border-sky-200 bg-white text-sky-700"
            }`}
          >
            {overline}
          </p>
        )}
        <h1
          className={`max-w-4xl font-display text-[clamp(2.1rem,1.4rem+3vw,3.6rem)] font-extrabold leading-[1.05] tracking-tight ${
            onDark ? "text-white" : "text-navy-950"
          }`}
        >
          {title}
        </h1>
        <p
          className={`mt-6 max-w-2xl text-base leading-relaxed sm:text-lg ${
            onDark ? "text-navy-100" : "text-navy-600"
          }`}
        >
          {intro}
        </p>
      </div>
      {withCta && (
        <div
          className="anim-up mt-9 flex flex-wrap items-center gap-4"
          style={{ "--enter-delay": "0.12s" } as React.CSSProperties}
        >
          <ButtonLink href="/kontakt/" variant={onDark ? "light" : "primary"}>
            Jetzt Angebot anfordern
            <IconArrowRight className="h-4 w-4" />
          </ButtonLink>
          <ButtonLink
            href={site.phoneHref}
            variant={onDark ? "outlineLight" : "outline"}
          >
            <IconPhone className="h-4 w-4" />
            <span className="tabular-nums">{site.phone}</span>
          </ButtonLink>
        </div>
      )}
    </>
  );

  if (variant === "banner" && image) {
    return (
      <section className="relative overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-navy-950/85 via-navy-950/55 to-navy-950/25"
        />
        {/* Mobil läuft der Text über die helle Bildhälfte – zusätzlich abdunkeln */}
        <div aria-hidden="true" className="absolute inset-0 bg-navy-950/35 lg:hidden" />
        <Container className="relative py-16 sm:py-24">
          <div className="max-w-2xl">{text}</div>
        </Container>
      </section>
    );
  }

  if (variant === "dark") {
    return (
      <section className="grain glow-sky relative overflow-hidden">
        {WatermarkIcon && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 top-1/2 hidden -translate-y-1/2 text-white/[0.06] lg:block"
          >
            <WatermarkIcon className="h-[26rem] w-[26rem]" strokeWidth={0.75} />
          </div>
        )}
        <Container className="relative py-16 sm:py-22">
          <div className="max-w-2xl">{text}</div>
        </Container>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-sky-50/80 to-white">
      <div
        aria-hidden="true"
        className="dots absolute inset-y-0 right-0 w-1/3 [mask-image:linear-gradient(to_left,black,transparent)]"
      />
      {!image && WatermarkIcon && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 text-sky-100 lg:block"
        >
          <WatermarkIcon className="h-80 w-80" strokeWidth={0.75} />
        </div>
      )}
      <Container className="relative py-12 sm:py-18">
        {image ? (
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>{text}</div>
            <div
              className="anim-up"
              style={{ "--enter-delay": "0.2s" } as React.CSSProperties}
            >
              <div className="relative aspect-[16/11] overflow-hidden rounded-[1.75rem] border border-line shadow-2xl shadow-navy-950/10">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40rem"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        ) : (
          text
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
  image,
  tone,
  imageSide = "bottom",
  layout = "split",
}: {
  title: string;
  children: ReactNode;
  tinted?: boolean;
  image?: ServiceImage;
  tone?: "white" | "cloud" | "dark";
  imageSide?: "bottom" | "left" | "right";
  layout?: "split" | "centered";
}) {
  const resolvedTone = tone ?? (tinted ? "cloud" : "white");
  const isDark = resolvedTone === "dark";
  const sectionClass =
    resolvedTone === "dark"
      ? "grain glow-sky relative overflow-hidden"
      : resolvedTone === "cloud"
        ? "bg-cloud"
        : "";
  const titleClass = `font-display text-[clamp(1.5rem,1.2rem+1.3vw,2.1rem)] font-extrabold leading-[1.12] tracking-tight ${
    isDark ? "text-white" : "text-navy-950"
  }`;
  const bodyClass = `space-y-5 text-[0.97rem] leading-relaxed ${
    isDark ? "text-navy-200" : "text-navy-700"
  }`;
  const imageFrame = `relative overflow-hidden rounded-[1.5rem] border shadow-lg ${
    isDark ? "border-white/10 shadow-navy-950/40" : "border-line shadow-navy-950/5"
  }`;

  if (image && (imageSide === "left" || imageSide === "right")) {
    return (
      <section className={sectionClass}>
        <Container className="relative py-14 sm:py-18">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal
              className={`order-last ${
                imageSide === "left" ? "lg:order-first" : "lg:order-last"
              }`}
            >
              <div className={`${imageFrame} aspect-[4/3]`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 36rem"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className={titleClass}>{title}</h2>
              <div className={`mt-6 ${bodyClass}`}>{children}</div>
            </Reveal>
          </div>
        </Container>
      </section>
    );
  }

  if (layout === "centered") {
    return (
      <section className={sectionClass}>
        <Container className="relative py-14 sm:py-18">
          <Reveal>
            <h2 className={`${titleClass} mx-auto max-w-3xl text-center`}>
              {title}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className={`mx-auto mt-8 max-w-4xl ${bodyClass}`}>
              {children}
            </div>
            {image && (
              <div className={`${imageFrame} mx-auto mt-8 aspect-[16/10] max-w-4xl`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 56rem"
                  className="object-cover"
                />
              </div>
            )}
          </Reveal>
        </Container>
      </section>
    );
  }

  return (
    <section className={sectionClass}>
      <Container className="relative py-14 sm:py-18">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <h2 className={`${titleClass} lg:sticky lg:top-32`}>{title}</h2>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-7">
            <div className={bodyClass}>{children}</div>
            {image && (
              <div className={`${imageFrame} mt-8 aspect-[16/10]`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40rem"
                  className="object-cover"
                />
              </div>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export function CheckList({
  items,
  variant = "list",
  onDark = false,
}: {
  items: string[];
  variant?: "list" | "cards";
  onDark?: boolean;
}) {
  const badgeClass = `flex shrink-0 items-center justify-center rounded-full ${
    onDark ? "bg-mint-400/15 text-mint-400" : "bg-mint-100 text-mint-600"
  }`;
  const textClass = `text-[0.93rem] leading-relaxed ${
    onDark ? "text-navy-100" : "text-navy-700"
  }`;

  if (variant === "cards") {
    return (
      <ul className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li
            key={item}
            className={`flex items-start gap-3 rounded-2xl border p-5 ${
              onDark ? "border-white/10 bg-white/5" : "border-line bg-white"
            }`}
          >
            <span className={`${badgeClass} mt-0.5 h-6 w-6`}>
              <IconCheck className="h-3.5 w-3.5" strokeWidth={2.4} />
            </span>
            <span className={textClass}>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="grid gap-3.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className={`${badgeClass} mt-0.5 h-6 w-6`}>
            <IconCheck className="h-3.5 w-3.5" strokeWidth={2.4} />
          </span>
          <span className={textClass}>{item}</span>
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
                <Link
                  href={`${basePath}${slug}/`}
                  className="inline-flex min-h-11 items-center rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-navy-700 transition-all duration-200 hover:-translate-y-px hover:border-sky-300 hover:text-sky-700"
                >
                  {cityNameBySlug(slug)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Container>
  );
}
