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
| `public/images/` | SVG-Visuals (können 1:1 durch Fotos ersetzt werden, Pfade bleiben gleich) |

## Sitemap

```
/                                            Startseite
/leistungen/                                 Leistungs-Hub
/leistungen/buero-reinigung/
/leistungen/gebaeudereinigung/[stadt]/       Stadtseiten (5 aktiv)
/leistungen/treppenhausreinigung/[stadt]/    Stadtseiten (5 aktiv)
/leistungen/glasreinigung-fensterreinigung/
/leistungen/winterdienst/
/leistungen/entruempelung-haushaltsaufloesung/
/leistungen/taubenabwehr/
/baureinigung/
/hausmeisterservice/
/ueber-uns/
/kontakt/
/impressum/  /datenschutz/                   (Gerüste, vor Livegang prüfen)
```

### Neue Stadtseite aktivieren

1. In `src/lib/city-content.ts` einen Eintrag mit **individuell geschriebenen** Lokal-Absätzen ergänzen (kein reiner Namenstausch, Doorway-Page-Risiko).
2. In `src/lib/cities.ts` die Stadt auf `active: true` setzen.

Städte-Chips, Sitemap und statische Generierung ziehen automatisch nach.

## Kontaktformular (Resend)

`/api/kontakt` versendet Anfragen über [Resend](https://resend.com). Env-Variablen (bei Vercel unter *Settings → Environment Variables*):

| Variable | Bedeutung |
| --- | --- |
| `RESEND_API_KEY` | API-Key von resend.com. **Ohne Key läuft das Formular im Demo-Modus** (Erfolgsmeldung, kein Versand). |
| `CONTACT_TO` | Empfängeradresse der Anfragen |
| `CONTACT_FROM` | Bei Resend verifizierte Absenderadresse |

## Vor dem Livegang

- [ ] Kontaktdaten in `src/lib/site.ts` vom Kunden bestätigen lassen (Telefon/Adresse stammen von der Altdomain)
- [ ] Impressum und Datenschutzerklärung vervollständigen und juristisch prüfen
- [ ] Winterdienst-Räumzeiten auf stuttgart.de gegenprüfen
- [ ] Offene Kundenfakten ergänzen (Erfahrungsjahre, Geschichte zu „1974", Startfristen, Mindestlaufzeit)
- [ ] Optional: SVG-Visuals in `public/images/` durch echte Fotos ersetzen (gleiche Dateipfade oder Pfade in `services.ts` anpassen)
