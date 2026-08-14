# cleanmaster-1974.de

Website von **Cleanmaster 1974** – Gebäudereinigung & Facility Services für Stuttgart und Region.

Gebaut mit Next.js (App Router), TypeScript und Tailwind CSS. Alle Seiten werden statisch generiert und sind ohne Sonderkonfiguration auf Vercel deploybar.

## Entwicklung

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # Produktions-Build
```

## Struktur

| Pfad | Inhalt |
| --- | --- |
| `src/lib/site.ts` | **Zentrale Stammdaten** (Telefon, Adresse, E-Mail, Domain). Änderungen nur hier. |
| `src/lib/services.ts` | Die 9 Leistungen mit Teasern und Links |
| `src/lib/cities.ts` | Die 18 Städte des Einzugsgebiets; `active: true` = eigene Stadtseiten |
| `src/lib/city-content.ts` | Individuelle Lokal-Absätze pro Stadtseite |
| `src/components/` | Header, Footer, Sektions- und Seiten-Bausteine |
| `src/app/` | Alle Routen (siehe Sitemap unten) |
| `public/images/` | Foto-Assets (JPG). Ersatz-Fotos unter gleichem Dateipfad ablegen oder Pfad in `src/lib/services.ts` anpassen |

## Sitemap

```
/                                            Startseite
/leistungen/                                 Leistungs-Hub
/leistungen/buero-reinigung/
/leistungen/gebaeudereinigung/[stadt]/       Stadtseiten (18 aktiv)
/leistungen/treppenhausreinigung/[stadt]/    Stadtseiten (18 aktiv)
/leistungen/glasreinigung-fensterreinigung/
/leistungen/winterdienst/
/leistungen/entruempelung-haushaltsaufloesung/
/leistungen/taubenabwehr/
/baureinigung/
/hausmeisterservice/
/ueber-uns/
/kontakt/
/impressum/  /datenschutz/                   (vollständig; juristische Endabnahme empfohlen)
```

### Neue Stadtseite aktivieren

1. In `src/lib/city-content.ts` einen Eintrag mit **individuell geschriebenen** Lokal-Absätzen ergänzen (kein reiner Namenstausch, Doorway-Page-Risiko).
2. In `src/lib/cities.ts` die Stadt auf `active: true` setzen.

Städte-Chips, Sitemap und statische Generierung ziehen automatisch nach.

## Kontaktformular (Resend)

`/api/kontakt` versendet Anfragen über [Resend](https://resend.com). Env-Variablen (bei Vercel unter *Settings → Environment Variables*):

| Variable | Bedeutung |
| --- | --- |
| `RESEND_API_KEY` | API-Key von resend.com |
| `CONTACT_TO` | Empfängeradresse der Anfragen |
| `CONTACT_FROM` | Bei Resend verifizierte Absenderadresse |

Verhalten bei fehlender Konfiguration: In der **Entwicklung** läuft die Route im
Demo-Modus (Anfrage wird geloggt, kein Versand, Erfolgsmeldung). In der
**Produktion** ist eine fehlende `RESEND_API_KEY`/`CONTACT_FROM` ein harter
Fehler (HTTP 500) – so gehen Leads bei Fehlkonfiguration nicht unbemerkt
verloren. Ein Honeypot-Feld (`firma`) filtert Bots.

## Analytics

Reichweitenmessung über [Vercel Web Analytics](https://vercel.com/docs/analytics)
via `@vercel/analytics` (`<Analytics />` in `src/app/layout.tsx`). Cookielos,
ohne seitenübergreifendes Tracking – daher kein Consent-Banner nötig; in der
Datenschutzerklärung offengelegt. Aktivierung zusätzlich im Vercel-Dashboard
unter *Analytics*.

## Vor dem Livegang

Erledigt:

- [x] Kontaktdaten in `src/lib/site.ts` vom Kunden bestätigt (Telefon/Adresse)
- [x] Impressum und Datenschutzerklärung inhaltlich vollständig (Einzelunternehmen, Inhaber Ajub Akbari)
- [x] Gründungsgeschichte geklärt: „1974" ist der Markenname, **nicht** das Gründungsjahr (Betrieb seit ~16 Jahren); im Text unter `src/app/ueber-uns/page.tsx` korrekt abgebildet
- [x] Foto-Assets in `public/images/` eingesetzt (Stockfotos)
- [x] Fotos für Winterdienst, Taubenabwehr, Hausmeisterservice eingebaut
- [x] Vercel Web Analytics aktiviert
- [x] Logo in Organization-/LocalBusiness-Schema (Schema.org) ergänzt
- [x] `lastModified` in der Sitemap ergänzt
- [x] Bürozeiten (`openingHoursSpecification`), `geo`-Koordinaten, `hasMap` und `sameAs` (Google-Unternehmensprofil) im Schema ergänzt

Noch offen:

- [ ] USt-IdNr. im Impressum ergänzen, sobald vom Kunden geliefert (Kommentar-Platzhalter in `src/app/impressum/page.tsx`)
- [ ] Juristische Endabnahme von Impressum & Datenschutzerklärung
- [x] Winterdienst-Räumzeiten gegen Stuttgarter Gehwegsatzung geprüft: Fristen (werktags 7:00, Sa 8:00, So/Feiertag 9:00 Uhr) auf `winterdienst/page.tsx` korrekt. Optional offen: abendliches Ende der Pflicht (Quellen uneinheitlich 20/21/22 Uhr) exakt aus Stadtrecht 1/8 ergänzen.
- [ ] Hinweis an den Kunden: Rechnungsvorlage nennt „Geschäftsführer" + „HRB" – passt nicht zum Einzelunternehmen und sollte dort korrigiert werden
- [ ] `aggregateRating` bewusst offen: erst ab ~5–10 echten Google-Bewertungen sinnvoll (aktuell nur 1). Google zeigt für selbst ausgezeichnete LocalBusiness-Ratings ohnehin keine Sterne-Rich-Results. Kunde sollte aktiv Bewertungen einholen.
