"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/lib/services";
import { IconCheckCircle } from "@/components/icons";

type Status = "idle" | "sending" | "success" | "error";

const inputCls =
  "w-full rounded-2xl border border-line bg-cloud px-4 py-3.5 text-sm text-navy-950 placeholder:text-navy-300 transition-all duration-200 focus:border-sky-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-100";

const labelCls = "mb-2 block text-[0.82rem] font-bold text-navy-900";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/kontakt/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[1.5rem] border border-mint-400/40 bg-mint-100/50 p-10 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-mint-400 text-white">
          <IconCheckCircle className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-display text-xl font-bold text-navy-950">
          Vielen Dank für Ihre Anfrage!
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-navy-600">
          Wir melden uns bei Ihnen, vereinbaren eine kostenlose Besichtigung
          und erstellen Ihr Festpreis-Angebot.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot: unsichtbar für Menschen, Bots füllen es aus */}
      <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="firma">Firma</label>
        <input id="firma" name="firma" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>
            Name *
          </label>
          <input id="name" name="name" required maxLength={200} autoComplete="name" className={inputCls} />
        </div>
        <div>
          <label htmlFor="kontakt" className={labelCls}>
            Telefon oder E-Mail *
          </label>
          <input id="kontakt" name="kontakt" required maxLength={200} className={inputCls} />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="ort" className={labelCls}>
            Ort des Objekts
          </label>
          <input id="ort" name="ort" maxLength={200} autoComplete="address-level2" className={inputCls} />
        </div>
        <div>
          <label htmlFor="leistung" className={labelCls}>
            Gewünschte Leistung
          </label>
          <select id="leistung" name="leistung" className={inputCls} defaultValue="">
            <option value="">Bitte wählen …</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Mehrere Leistungen / Sonstiges">
              Mehrere Leistungen / Sonstiges
            </option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="nachricht" className={labelCls}>
          Ihre Nachricht *
        </label>
        <textarea
          id="nachricht"
          name="nachricht"
          required
          maxLength={5000}
          rows={5}
          className={inputCls}
          placeholder="Art und Größe des Objekts, gewünschter Turnus, Terminwunsch …"
        />
      </div>

      <p className="text-xs leading-relaxed text-navy-500">
        Ihre Anfrage ist unverbindlich. Sie erhalten zuerst ein
        Festpreis-Angebot, keinen Vertrag. Mit dem Absenden erklären Sie sich
        mit der Verarbeitung Ihrer Angaben gemäß der{" "}
        <a
          href="/datenschutz/"
          className="font-semibold text-sky-600 underline-offset-2 hover:underline"
        >
          Datenschutzerklärung
        </a>{" "}
        einverstanden.
      </p>

      {status === "error" && (
        <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          Das hat leider nicht geklappt. Bitte versuchen Sie es erneut oder
          rufen Sie uns direkt an.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky-500 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-sky-500/25 transition-all duration-200 hover:-translate-y-px hover:bg-sky-600 hover:shadow-xl hover:shadow-sky-500/30 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Wird gesendet …" : "Anfrage senden"}
      </button>
    </form>
  );
}
