"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Bei jedem clientseitigen Seitenwechsel sofort (ohne Animation, vor dem
 * Paint) an den echten Seitenanfang springen. Next 16 scrollt von sich aus
 * nur zum Anfang des ersten Seiten-Elements (kleiner Restversatz) — dadurch
 * würden Reveal-Animationen und die Navbar-Verkleinerung ungewollt auslösen.
 *
 * - Läuft als Layout-Effect, damit die neue Seite bereits im ersten Frame
 *   ganz oben steht (kein sichtbares Nachrucken).
 * - Der erste Mount (Direktaufruf/Reload) wird übersprungen.
 * - Vor/Zurück (Browser-Buttons) behalten die alte Position (Scroll-Restore).
 * - Anker-Navigationen (URL mit #) werden nicht überschrieben.
 */
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function ScrollTopOnNav() {
  const pathname = usePathname();
  const isFirst = useRef(true);
  const isPopNavigation = useRef(false);

  useEffect(() => {
    const onPopState = () => {
      isPopNavigation.current = true;
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    if (isPopNavigation.current) {
      isPopNavigation.current = false;
      return;
    }
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}
