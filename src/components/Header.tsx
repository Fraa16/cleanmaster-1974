"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import {
  IconChevronDown,
  IconClose,
  IconMail,
  IconMenu,
  IconPhone,
} from "@/components/icons";

const navLinks = [
  { href: "/ueber-uns/", label: "Über uns" },
  { href: "/kontakt/", label: "Kontakt" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50">
      {/* Topbar */}
      <div className="hidden bg-navy-900 text-navy-100 md:block">
        <div className="mx-auto flex h-9 w-full max-w-6xl items-center justify-between px-5 text-xs sm:px-8">
          <div className="flex items-center gap-6">
            <a
              href={site.phoneHref}
              className="flex items-center gap-1.5 hover:text-white"
            >
              <IconPhone className="h-3.5 w-3.5" />
              {site.phone}
            </a>
            <a
              href={site.emailHref}
              className="flex items-center gap-1.5 hover:text-white"
            >
              <IconMail className="h-3.5 w-3.5" />
              {site.email}
            </a>
          </div>
          <p className="font-medium text-navy-200">
            Familienbetrieb · Festpreis-Garantie · Großraum Stuttgart
          </p>
        </div>
      </div>

      {/* Hauptleiste */}
      <div className="border-b border-navy-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
            <Link
              href="/"
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors hover:text-sky-600 ${
                pathname === "/" ? "text-sky-600" : "text-navy-800"
              }`}
            >
              Startseite
            </Link>

            {/* Leistungen-Dropdown */}
            <div className="group relative">
              <Link
                href="/leistungen/"
                className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors hover:text-sky-600 ${
                  pathname.startsWith("/leistungen") ||
                  pathname.startsWith("/baureinigung") ||
                  pathname.startsWith("/hausmeisterservice")
                    ? "text-sky-600"
                    : "text-navy-800"
                }`}
              >
                Leistungen
                <IconChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white p-2 shadow-xl shadow-navy-900/10">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={s.href}
                      className="block rounded-xl px-4 py-2.5 text-sm font-medium text-navy-800 transition-colors hover:bg-sky-50 hover:text-sky-700"
                    >
                      {s.title}
                    </Link>
                  ))}
                  <div className="mt-1 border-t border-navy-100 pt-1">
                    <Link
                      href="/leistungen/"
                      className="block rounded-xl px-4 py-2.5 text-sm font-bold text-sky-600 transition-colors hover:bg-sky-50"
                    >
                      Alle Leistungen im Überblick →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors hover:text-sky-600 ${
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
              className="flex items-center gap-2 text-sm font-bold text-navy-900 hover:text-sky-600"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                <IconPhone className="h-4 w-4" />
              </span>
              {site.phone}
            </a>
            <Link
              href="/kontakt/"
              className="rounded-full bg-sky-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-sky-500/25 transition-colors hover:bg-sky-600"
            >
              Angebot anfordern
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full text-navy-900 hover:bg-sky-50 lg:hidden"
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

        {/* Mobile-Menü */}
        {mobileOpen && (
          <nav
            className="border-t border-navy-100 bg-white px-5 pb-6 pt-3 lg:hidden"
            aria-label="Mobile Navigation"
          >
            <Link
              href="/"
              className="block rounded-xl px-3 py-3 text-base font-semibold text-navy-900 hover:bg-sky-50"
            >
              Startseite
            </Link>
            <button
              type="button"
              onClick={() => setMobileServicesOpen((v) => !v)}
              className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-base font-semibold text-navy-900 hover:bg-sky-50"
              aria-expanded={mobileServicesOpen}
            >
              Leistungen
              <IconChevronDown
                className={`h-5 w-5 transition-transform ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="ml-3 border-l-2 border-sky-100 pl-3">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={s.href}
                    className="block rounded-xl px-3 py-2.5 text-sm font-medium text-navy-700 hover:bg-sky-50"
                  >
                    {s.title}
                  </Link>
                ))}
                <Link
                  href="/leistungen/"
                  className="block rounded-xl px-3 py-2.5 text-sm font-bold text-sky-600 hover:bg-sky-50"
                >
                  Alle Leistungen →
                </Link>
              </div>
            )}
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block rounded-xl px-3 py-3 text-base font-semibold text-navy-900 hover:bg-sky-50"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={site.phoneHref}
                className="flex items-center justify-center gap-2 rounded-full border-2 border-navy-100 px-6 py-3 text-sm font-bold text-navy-900"
              >
                <IconPhone className="h-4 w-4" /> {site.phone}
              </a>
              <Link
                href="/kontakt/"
                className="rounded-full bg-sky-500 px-6 py-3.5 text-center text-sm font-bold text-white"
              >
                Angebot anfordern
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
