import Link from "next/link";

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="cm-logo-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#45b3e7" />
          <stop offset="1" stopColor="#167eb4" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="38" height="38" rx="11" fill="url(#cm-logo-g)" />
      <path
        d="M20 8.5c1 6 4 9 9.5 10-5.5 1-8.5 4-9.5 10-1-6-4-9-9.5-10 5.5-1 8.5-4 9.5-10Z"
        fill="#ffffff"
      />
      <path
        d="M29 25.5c.4 2.4 1.6 3.6 4 4-2.4.4-3.6 1.6-4 4-.4-2.4-1.6-3.6-4-4 2.4-.4 3.6-1.6 4-4Z"
        fill="#d8eefb"
      />
    </svg>
  );
}

export function Logo({
  variant = "dark",
}: {
  /** dark = navy Schrift (heller Hintergrund), light = weiße Schrift */
  variant?: "dark" | "light";
}) {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 shrink-0"
      aria-label="Cleanmaster 1974 – zur Startseite"
    >
      <LogoMark />
      <span
        className={`font-display text-lg font-extrabold leading-none tracking-tight ${
          variant === "light" ? "text-white" : "text-navy-900"
        }`}
      >
        Cleanmaster{" "}
        <span className={variant === "light" ? "text-sky-300" : "text-sky-500"}>
          1974
        </span>
      </span>
    </Link>
  );
}
