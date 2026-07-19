import { NextResponse } from "next/server";
import { site } from "@/lib/site";

interface ContactPayload {
  name?: string;
  kontakt?: string;
  ort?: string;
  leistung?: string;
  nachricht?: string;
  /** Honeypot – bleibt bei echten Nutzern leer. */
  firma?: string;
}

/** Feldlängen-Limits; größere Anfragen sind mit Sicherheit kein echter Lead. */
const MAX_SHORT = 200;
const MAX_MESSAGE = 5000;
const MAX_BODY_BYTES = 32_768;

/**
 * Kontaktformular-Versand über Resend.
 *
 * Benötigte Env-Variablen (bei Vercel unter Settings → Environment Variables):
 *   RESEND_API_KEY   – API-Key von resend.com
 *   CONTACT_TO       – Empfängeradresse der Anfragen (z. B. info@cleanmaster-1974.de)
 *   CONTACT_FROM     – Verifizierte Absenderadresse bei Resend
 *                      (z. B. "Cleanmaster 1974 <website@cleanmaster-1974.de>")
 *
 * Ohne RESEND_API_KEY läuft die Route NUR in der Entwicklung im Demo-Modus
 * (Anfrage wird geloggt, kein Versand). In Produktion sind fehlende
 * Env-Variablen ein harter Fehler – sonst gingen Anfragen unbemerkt verloren.
 */
export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Anfrage zu groß" }, { status: 413 });
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage" }, { status: 400 });
  }

  // Honeypot: das Feld ist für Menschen unsichtbar; ausgefüllt = Bot.
  // Bewusst 200 ohne Versand, damit Bots keinen Unterschied sehen.
  if (payload.firma?.trim()) {
    return NextResponse.json({ ok: true });
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

  if (
    name.length > MAX_SHORT ||
    kontakt.length > MAX_SHORT ||
    (payload.ort?.trim().length ?? 0) > MAX_SHORT ||
    (payload.leistung?.trim().length ?? 0) > MAX_SHORT ||
    nachricht.length > MAX_MESSAGE
  ) {
    return NextResponse.json({ error: "Eingabe zu lang" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM;
  const isProduction = process.env.NODE_ENV === "production";

  if (!apiKey || !from) {
    if (isProduction) {
      // Fehlkonfiguration darf keinen stillen Lead-Verlust erzeugen.
      console.error(
        "[kontakt] Versand nicht konfiguriert:",
        !apiKey ? "RESEND_API_KEY fehlt" : "CONTACT_FROM fehlt",
      );
      return NextResponse.json(
        { error: "Versand fehlgeschlagen" },
        { status: 500 },
      );
    }
    console.log("[kontakt] Demo-Modus (Env unvollständig):", {
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
    from,
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
