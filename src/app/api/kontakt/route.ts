import { NextResponse } from "next/server";
import { site } from "@/lib/site";

interface ContactPayload {
  name?: string;
  kontakt?: string;
  ort?: string;
  leistung?: string;
  nachricht?: string;
}

/**
 * Kontaktformular-Versand über Resend.
 *
 * Benötigte Env-Variablen (bei Vercel unter Settings → Environment Variables):
 *   RESEND_API_KEY   – API-Key von resend.com
 *   CONTACT_TO       – Empfängeradresse der Anfragen (z. B. info@cleanmaster-1974.de)
 *   CONTACT_FROM     – Verifizierte Absenderadresse bei Resend
 *                      (z. B. "Cleanmaster 1974 <website@cleanmaster-1974.de>")
 *
 * Ohne RESEND_API_KEY läuft die Route im Demo-Modus: Die Anfrage wird
 * geloggt und als Erfolg beantwortet, aber keine E-Mail versendet.
 */
export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage" }, { status: 400 });
  }

  const name = payload.name?.trim();
  const kontakt = payload.kontakt?.trim();
  const nachricht = payload.nachricht?.trim();

  if (!name || !kontakt || !nachricht) {
    return NextResponse.json(
      { error: "Bitte Name, Kontakt und Nachricht ausfüllen." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log("[kontakt] Demo-Modus (kein RESEND_API_KEY gesetzt):", {
      name,
      kontakt,
      ort: payload.ort,
      leistung: payload.leistung,
    });
    return NextResponse.json({ ok: true, demo: true });
  }

  const { Resend } = await import("resend");
  const resend = new Resend(apiKey);

  const lines = [
    `Name: ${name}`,
    `Telefon/E-Mail: ${kontakt}`,
    `Ort des Objekts: ${payload.ort?.trim() || "–"}`,
    `Gewünschte Leistung: ${payload.leistung?.trim() || "–"}`,
    "",
    "Nachricht:",
    nachricht,
  ];

  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM ?? `Cleanmaster 1974 <onboarding@resend.dev>`,
    to: process.env.CONTACT_TO ?? site.email,
    subject: `Neue Anfrage über cleanmaster-1974.de von ${name}`,
    text: lines.join("\n"),
  });

  if (error) {
    console.error("[kontakt] Resend-Fehler:", error);
    return NextResponse.json(
      { error: "Versand fehlgeschlagen" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
