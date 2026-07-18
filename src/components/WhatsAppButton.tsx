import { IconWhatsApp } from "@/components/icons";
import { site } from "@/lib/site";

/** Schwebender WhatsApp-Button; sitzt mobil über der MobileActionBar. */
export function WhatsAppButton() {
  return (
    <a
      href={site.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp-Nachricht an Cleanmaster 1974 senden"
      className="fixed bottom-24 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-navy-950/25 transition-transform duration-200 hover:scale-110 active:scale-95 lg:bottom-6 lg:right-6"
    >
      <IconWhatsApp className="h-7 w-7" />
    </a>
  );
}
