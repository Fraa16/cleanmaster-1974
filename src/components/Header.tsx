"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import {
  IconArrowRight,
  IconChevronDown,
  IconClose,
  IconMenu,
  IconPhone,
  serviceIcons,
} from "@/components/icons";

const navLinks = [
  { href: "/ueber-uns/", label: "Über uns" },
  { href: "/kontakt/", label: "Kontakt" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  const isLeistungen =
    pathname.startsWith("/leistungen") ||
    pathname.startsWith("/baureinigung") ||
    pathname.startsWith("/hausmeisterservice");

  return (
    <header className="sticky top-0 z-50">
      {/* Topbar */}
      <div className="hidden bg-navy-950 text-navy-200 md:block">
        <div className="mx-auto flex h-9 w-full max-w-6xl items-center justify-between px-5 text-xs sm:px-8">
          <a
            href={site.phoneHref}
            className="flex items-center gap-1.5 font-semibold tabular-nums transition-colors hover:text-white"
          >
            <IconPhone className="h-3.5 w-3.5 text-sky-400" />
            {site.phone}
          </a>
          <p className="font-medium tracking-wide text-navy-300">
            Familienbetrieb · Festpreis-Garantie · Großraum Stuttgart
          </p>
        </div>
      </div>

      {/* Hauptleiste */}
      <div
        className={`border-b bg-white/92 backdrop-blur-md transition-[border-color,box-shadow] duration-300 ${
          scrolled
            ? "border-line shadow-[0_8px_30px_-18px_rgba(11,21,38,0.35)]"
            : "border-transparent"
        }`}
      >
        <div className="mx-auto flex h-[70px] w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
            <Link
              href="/"
              className={`rounded-full px-4 py-2 text-[0.9rem] font-semibold transition-colors hover:text-sky-600 ${
                pathname === "/" ? "text-sky-600" : "text-navy-800"
              }`}
            >
              Startseite
            </Link>

            {/* Leistungen: Mega-Menü */}
            <div className="group relative">
              <Link
                href="/leistungen/"
                className={`flex items-center gap-1 rounded-full px-4 py-2 text-[0.9rem] font-semibold transition-colors hover:text-sky-600 ${
                  isLeistungen ? "text-sky-600" : "text-navy-800"
                }`}
              >
                Leistungen
                <IconChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
              </Link>
              <div className="invisible absolute left-1/2 top-full z-50 w-[38rem] -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <div className="max-h-[calc(100vh-9.5rem)] overflow-y-auto overscroll-contain rounded-3xl border border-line bg-white p-3 shadow-2xl shadow-navy-950/10">
                  <div className="grid grid-cols-2 gap-1">
                    {services.map((s) => {
                      const Icon = serviceIcons[s.icon];
                      return (
                        <Link
                          key={s.slug}
                          href={s.href}
                          className="group/item flex items-start gap-3 rounded-2xl px-3.5 py-3 transition-colors hover:bg-sky-50"
                        >
                          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-600 transition-colors group-hover/item:bg-sky-500 group-hover/item:text-white">
                            <Icon className="h-4.5 w-4.5" />
                          </span>
                          <span>
                            <span className="block text-sm font-bold text-navy-900 group-hover/item:text-sky-700">
                              {s.title}
                            </span>
                            <span className="mt-0.5 line-clamp-1 block text-xs text-navy-500">
                              {s.teaser}
                            </span>
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="mt-2 border-t border-line pt-2">
                    <Link
                      href="/leistungen/"
                      className="flex items-center justify-between rounded-2xl px-4 py-2.5 text-sm font-bold text-sky-600 transition-colors hover:bg-sky-50"
                    >
                      Alle Leistungen im Überblick
                      <IconArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-full px-4 py-2 text-[0.9rem] font-semibold transition-colors hover:text-sky-600 ${
                  pathname === l.href ? "text-sky-600" : "text-navy-800"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={site.phoneHref}
              className="group flex items-center gap-2.5 text-sm font-bold text-navy-950 transition-colors hover:text-sky-600"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-600 transition-colors group-hover:bg-sky-500 group-hover:text-white">
                <IconPhone className="h-4 w-4" />
              </span>
              <span className="tabular-nums">{site.phone}</span>
            </a>
            <Link
              href="/kontakt/"
              className="rounded-full bg-navy-950 px-6 py-3 text-sm font-bold text-white transition-all hover:-translate-y-px hover:bg-navy-800 hover:shadow-lg hover:shadow-navy-950/20"
            >
              Angebot anfordern
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full text-navy-950 hover:bg-sky-50 lg:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {mobileOpen ? (
              <IconClose className="h-6 w-6" />
            ) : (
              <IconMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile-Menü: Fullscreen-Overlay */}
      {mobileOpen && (
        <nav
          className="fixed inset-0 top-[70px] z-40 overflow-y-auto bg-white px-6 pb-28 pt-6 lg:hidden"
          aria-label="Mobile Navigation"
        >
          <Link
            href="/"
            className="block border-b border-line py-4 font-display text-2xl font-bold text-navy-950"
            data-reveal=""
            style={{ opacity: 1, transform: "none" }}
          >
            Startseite
          </Link>
          <p className="pt-5 text-xs font-bold uppercase tracking-[0.18em] text-navy-400">
            Leistungen
          </p>
          <div className="mt-2 grid gap-0.5">
            {services.map((s) => {
              const Icon = serviceIcons[s.icon];
              return (
                <Link
                  key={s.slug}
                  href={s.href}
                  className="flex items-center gap-3 rounded-2xl px-2 py-2.5 text-[0.95rem] font-semibold text-navy-800 active:bg-sky-50"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-600">
                    <Icon className="h-4 w-4" />
                  </span>
                  {s.title}
                </Link>
              );
            })}
            <Link
              href="/leistungen/"
              className="mt-1 flex items-center gap-2 px-2 py-2 text-sm font-bold text-sky-600"
            >
              Alle Leistungen <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block border-t border-line py-4 font-display text-2xl font-bold text-navy-950"
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-6 rounded-3xl bg-cloud p-5">
            <p className="text-sm font-semibold text-navy-700">
              Kostenlose Besichtigung · Verbindlicher Festpreis
            </p>
            <a
              href={site.phoneHref}
              className="mt-3 flex items-center gap-2 font-display text-xl font-bold text-navy-950"
            >
              <IconPhone className="h-5 w-5 text-sky-600" />
              <span className="tabular-nums">{site.phone}</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
