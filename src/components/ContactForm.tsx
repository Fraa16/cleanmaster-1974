"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/lib/services";
import { IconCheckCircle } from "@/components/icons";

type Status = "idle" | "sending" | "success" | "error";

const inputCls =
  "w-full rounded-2xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200";

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
      <div className="rounded-3xl border border-sky-200 bg-sky-50 p-8 text-center">
        <IconCheckCircle className="mx-auto h-10 w-10 text-sky-600" />
        <h3 className="mt-4 font-display text-lg font-bold text-navy-900">
          Vielen Dank für Ihre Anfrage!
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-navy-700">
          Wir melden uns bei Ihnen, vereinbaren eine kostenlose Besichtigung
          und erstellen Ihr Festpreis-Angebot.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate={false}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-navy-900">
            Name *
          </label>
          <input id="name" name="name" required autoComplete="name" className={inputCls} />
        </div>
        <div>
          <label htmlFor="kontakt" className="mb-1.5 block text-sm font-semibold text-navy-900">
            Telefon oder E-Mail *
          </label>
          <input id="kontakt" name="kontakt" required className={inputCls} />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="ort" className="mb-1.5 block text-sm font-semibold text-navy-900">
            Ort des Objekts
          </label>
          <input id="ort" name="ort" autoComplete="address-level2" className={inputCls} />
        </div>
        <div>
          <label htmlFor="leistung" className="mb-1.5 block text-sm font-semibold text-navy-900">
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
        <label htmlFor="nachricht" className="mb-1.5 block text-sm font-semibold text-navy-900">
          Ihre Nachricht *
        </label>
        <textarea
          id="nachricht"
          name="nachricht"
          required
          rows={5}
          className={inputCls}
          placeholder="Art und Größe des Objekts, gewünschter Turnus, Terminwunsch …"
        />
      </div>

      <p className="text-xs leading-relaxed text-navy-500">
        Ihre Anfrage ist unverbindlich. Sie erhalten zuerst ein
        Festpreis-Angebot, keinen Vertrag.
      </p>

      {status === "error" && (
        <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          Das hat leider nicht geklappt. Bitte versuchen Sie es erneut oder
          rufen Sie uns direkt an.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-500/25 transition-colors hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Wird gesendet …" : "Anfrage senden"}
      </button>
    </form>
  );
}
