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

/** Kicker mit Glanz-Ornament (Markenmotiv) */
export function Kicker({
  children,
  onDark = false,
}: {
  children: ReactNode;
  onDark?: boolean;
}) {
  return (
    <p
      className={`mb-4 flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] ${
        onDark ? "text-sky-300" : "text-sky-600"
      }`}
    >
      <svg
        viewBox="0 0 16 16"
        className="h-3.5 w-3.5 shrink-0"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M8 1c.5 3.2 2.3 5 5.5 5.5C10.3 7 8.5 8.8 8 12 7.5 8.8 5.7 7 2.5 6.5 5.7 6 7.5 4.2 8 1Z" />
      </svg>
      {children}
    </p>
  );
}

export function SectionHeading({
  kicker,
  title,
  lead,
  onDark = false,
  align = "left",
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
      className={`mb-12 max-w-3xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      {kicker && (
        <div className={align === "center" ? "flex justify-center" : ""}>
          <Kicker onDark={onDark}>{kicker}</Kicker>
        </div>
      )}
      <Tag
        className={`hyphens-auto break-words font-display text-[clamp(1.9rem,1.4rem+2vw,3rem)] font-extrabold leading-[1.08] tracking-tight ${
          onDark ? "text-white" : "text-navy-950"
        }`}
      >
        {title}
      </Tag>
      {lead && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
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
    "bg-sky-500 text-white hover:bg-sky-600 shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/30",
  dark: "bg-navy-950 text-white hover:bg-navy-800 hover:shadow-lg hover:shadow-navy-950/25",
  light:
    "bg-white text-navy-950 hover:bg-sky-50 shadow-lg shadow-navy-950/10",
  outline:
    "border-2 border-navy-200 text-navy-950 hover:border-sky-400 hover:text-sky-600",
  outlineLight:
    "border-2 border-white/30 text-white hover:border-white hover:bg-white/10",
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
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition-all duration-200 hover:-translate-y-px active:translate-y-0 ${buttonStyles[variant]} ${className}`;
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
