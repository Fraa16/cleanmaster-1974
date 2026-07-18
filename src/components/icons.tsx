import type { ComponentProps, ReactNode } from "react";
import type { ServiceIcon } from "@/lib/services";

type IconProps = ComponentProps<"svg">;

function Base({ children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

/* ---------- Leistungs-Icons ---------- */

export function IconBuero(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M12 16v4M8 20h8" />
      <path d="M7.5 9.5l2 2 3.5-3.5" />
    </Base>
  );
}

export function IconGebaeude(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16" />
      <path d="M15 9h4a1 1 0 0 1 1 1v11" />
      <path d="M2 21h20" />
      <path d="M7.5 8h2M7.5 12h2M7.5 16h2M18 13h.01M18 17h.01" />
    </Base>
  );
}

export function IconTreppenhaus(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M3 21h4v-4h4v-4h4V9h4V4" />
      <path d="M3 21h18" />
    </Base>
  );
}

export function IconGlas(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="4" y="3" width="16" height="14" rx="1.5" />
      <path d="M12 3v14M4 10h16" />
      <path d="M7 20.5h10" />
      <path d="M6.5 6.2l1.6 1.6" opacity="0.6" />
    </Base>
  );
}

export function IconWinter(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 2v20M12 2l-2.5 2.5M12 2l2.5 2.5M12 22l-2.5-2.5M12 22l2.5-2.5" />
      <path d="M3.3 7l17.4 10M3.3 7l.9 3.4M3.3 7L6.7 6M20.7 17l-.9-3.4m.9 3.4L17.3 18" />
      <path d="M20.7 7L3.3 17M20.7 7l-3.4-1m3.4 1-.9 3.4M3.3 17l3.4 1m-3.4-1 .9-3.4" />
    </Base>
  );
}

export function IconEntruempelung(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 8h16v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" />
      <path d="M2.5 5h19L20 8H4z" />
      <path d="M9.5 12h5" />
    </Base>
  );
}

export function IconTauben(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M16 7c0-1.7-1.3-3-3-3-1.4 0-2.6 1-2.9 2.3L4 13c1.5 1.5 3.5 2 5.5 1.6L9 18h2l1-2.5L14 18h2l-1.6-3.6C18 13.6 19.6 11.4 20 9l-4-.5z" />
      <circle cx="14" cy="6.5" r="0.3" fill="currentColor" />
      <path d="M3 21h18" />
    </Base>
  );
}

export function IconBau(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 15a8 8 0 0 1 16 0" />
      <path d="M12 7v4" />
      <path d="M2.5 15h19v3h-19z" />
    </Base>
  );
}

export function IconHausmeister(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M3 11l9-7 9 7" />
      <path d="M5 9.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5" />
      <path d="M14.5 12.5a2.4 2.4 0 0 0-3.2 3.2l-2.1 2.1a1 1 0 1 0 1.4 1.4l2.1-2.1a2.4 2.4 0 0 0 3.2-3.2l-1.6 1.6-1.4-1.4z" />
    </Base>
  );
}

export const serviceIcons: Record<
  ServiceIcon,
  (props: IconProps) => ReactNode
> = {
  buero: IconBuero,
  gebaeude: IconGebaeude,
  treppenhaus: IconTreppenhaus,
  glas: IconGlas,
  winter: IconWinter,
  entruempelung: IconEntruempelung,
  tauben: IconTauben,
  bau: IconBau,
  hausmeister: IconHausmeister,
};

/* ---------- UI-Icons ---------- */

export function IconPhone(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
    </Base>
  );
}

export function IconMail(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </Base>
  );
}

export function IconPin(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </Base>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <Base {...props}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </Base>
  );
}

export function IconCheckCircle(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.5 2.5 2.5 4.5-5" />
    </Base>
  );
}

export function IconChevronDown(props: IconProps) {
  return (
    <Base {...props}>
      <path d="m6 9 6 6 6-6" />
    </Base>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 12h16m0 0-6-6m6 6-6 6" />
    </Base>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </Base>
  );
}

export function IconClose(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Base>
  );
}

export function IconEuro(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M17.5 5.5A7.5 7.5 0 0 0 6.8 8.5a7.6 7.6 0 0 0 0 7 7.5 7.5 0 0 0 10.7 3" />
      <path d="M4 10.5h9M4 13.5h8" />
    </Base>
  );
}

export function IconFamily(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
      <circle cx="17" cy="9.5" r="2.3" />
      <path d="M16 15.5a4.5 4.5 0 0 1 4.9 4.5" />
    </Base>
  );
}

export function IconShield(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6z" />
      <path d="m9 11.5 2 2 4-4.5" />
    </Base>
  );
}

export function IconClock(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </Base>
  );
}

export function IconTeam(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="7.5" r="3" />
      <path d="M6.5 20a5.5 5.5 0 0 1 11 0" />
      <path d="M19 8.5a2.5 2.5 0 0 1 1.5 4.6M5 8.5a2.5 2.5 0 0 0-1.5 4.6" />
    </Base>
  );
}

export function IconDocument(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M6 3h8l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1" />
      <path d="M14 3v4h4" />
      <path d="M9 12h6M9 16h6" />
    </Base>
  );
}

export function IconSparkle(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 4c.6 3.6 2.4 5.4 6 6-3.6.6-5.4 2.4-6 6-.6-3.6-2.4-5.4-6-6 3.6-.6 5.4-2.4 6-6" />
      <path d="M19 15.5c.3 1.6 1 2.3 2.5 2.5-1.5.3-2.2 1-2.5 2.5-.3-1.5-1-2.2-2.5-2.5 1.5-.2 2.2-.9 2.5-2.5" />
    </Base>
  );
}

export function IconQuote(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.5 6C4.5 7.5 3.5 9.5 3.5 12v6h6v-6h-3c0-2 1-3.5 3-4.5zm10 0c-2 1.5-3 3.5-3 6v6h6v-6h-3c0-2 1-3.5 3-4.5z" />
    </svg>
  );
}

export function IconWhatsApp(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.9 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.39c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.13-1.47-.73-1.7-.81-.22-.08-.39-.12-.55.12-.17.25-.64.81-.78.97-.15.17-.29.19-.54.07-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.84-.2-.49-.4-.42-.55-.43l-.48-.01c-.16 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.13.17 1.75 2.68 4.24 3.75.59.26 1.05.41 1.41.52.6.19 1.14.16 1.56.1.48-.07 1.47-.6 1.68-1.18.2-.58.2-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}
