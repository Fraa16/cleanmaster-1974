import Link from "next/link";

/**
 * Offizielles Logo von Cleanmaster 1974.
 * - hell (…-logo.svg / …-icon.svg): dunkle Schrift, für helle Hintergründe (Weiß/Blau)
 * - dunkel (…-logo-dunkel.svg / …-icon-dunkel.svg): helle Schrift, für dunkle Hintergründe
 * Quelle: cleanmaster1974-logo(.svg|-dunkel.svg) im Repo-Root; die public/-Dateien
 * sind auf die reine Bildfläche zugeschnitten (Generierung siehe Commit-Historie).
 */

/** Nur das Bildzeichen (Gebäude + Wischer), quadratisch. */
export function LogoMark({
  className = "h-9 w-auto",
  variant = "light",
}: {
  className?: string;
  /** light = für helle Hintergründe, dark = für dunkle Hintergründe */
  variant?: "light" | "dark";
}) {
  const src =
    variant === "dark"
      ? "/cleanmaster1974-icon-dunkel.svg"
      : "/cleanmaster1974-icon.svg";
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt="" className={className} aria-hidden="true" />
  );
}

/** Vollständiges Logo (Bildzeichen + Wortmarke „Cleanmaster 1974 · Gebäudereinigung"). */
export function Logo({
  variant = "dark",
  className = "h-11 w-auto",
}: {
  /** dark = für helle Hintergründe (dunkle Schrift), light = für dunkle Hintergründe (helle Schrift) */
  variant?: "dark" | "light";
  className?: string;
}) {
  const src =
    variant === "light"
      ? "/cleanmaster1974-logo-dunkel.svg"
      : "/cleanmaster1974-logo.svg";
  return (
    <Link
      href="/"
      className="flex shrink-0 items-center"
      aria-label="Cleanmaster 1974 – zur Startseite"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="Cleanmaster 1974" className={className} />
    </Link>
  );
}
