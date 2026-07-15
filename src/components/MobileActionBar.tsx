import Link from "next/link";
import { IconPhone, IconArrowRight } from "@/components/icons";
import { site } from "@/lib/site";

/** Sticky Conversion-Leiste am unteren Rand, nur mobil. */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/90 px-4 pb-[max(env(safe-area-inset-bottom),0.75rem)] pt-3 backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-md items-center gap-3">
        <a
          href={site.phoneHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-navy-100 px-4 py-3 text-sm font-bold text-navy-950 active:bg-navy-50"
        >
          <IconPhone className="h-4 w-4 text-sky-600" />
          Anrufen
        </a>
        <Link
          href="/kontakt/"
          className="flex flex-[1.4] items-center justify-center gap-2 rounded-full bg-sky-500 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-sky-500/25 active:bg-sky-600"
        >
          Angebot anfordern
          <IconArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
