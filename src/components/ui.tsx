import Link from "next/link";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

/** Kleine Überzeile in Versalien (Kicker) */
export function Kicker({
  children,
  onDark = false,
}: {
  children: ReactNode;
  onDark?: boolean;
}) {
  return (
    <p
      className={`mb-3 text-xs font-bold uppercase tracking-[0.18em] ${
        onDark ? "text-sky-300" : "text-sky-600"
      }`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  kicker,
  title,
  lead,
  onDark = false,
  align = "center",
  as: Tag = "h2",
}: {
  kicker?: string;
  title: string;
  lead?: string;
  onDark?: boolean;
  align?: "center" | "left";
  as?: "h1" | "h2";
}) {
  return (
    <div
      className={`mb-10 max-w-3xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      {kicker && <Kicker onDark={onDark}>{kicker}</Kicker>}
      <Tag
        className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${
          onDark ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </Tag>
      {lead && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            onDark ? "text-navy-200" : "text-navy-600"
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}

const buttonStyles = {
  primary:
    "bg-sky-500 text-white hover:bg-sky-600 shadow-lg shadow-sky-500/25",
  dark: "bg-navy-900 text-white hover:bg-navy-800",
  light:
    "bg-white text-navy-900 hover:bg-sky-50 shadow-lg shadow-navy-900/10",
  outline:
    "border-2 border-navy-200 text-navy-900 hover:border-sky-400 hover:text-sky-600",
  outlineLight:
    "border-2 border-white/40 text-white hover:border-white hover:bg-white/10",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof buttonStyles;
  className?: string;
}) {
  const external = href.startsWith("tel:") || href.startsWith("mailto:");
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition-colors ${buttonStyles[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/** JSON-LD Script-Block */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
