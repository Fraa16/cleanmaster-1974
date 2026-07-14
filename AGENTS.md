<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Projekt-Hinweise

Website für Cleanmaster 1974 (Gebäudereinigung Stuttgart). Deutsch, SEO-getrieben, Copy ist final redigiert — Texte nicht umformulieren.

- Kontaktdaten (Telefon, Adresse, E-Mail) ausschließlich in `src/lib/site.ts` pflegen.
- Neue Stadtseiten: Lokal-Absatz in `src/lib/city-content.ts` **individuell schreiben** (kein Namenstausch), dann `active: true` in `src/lib/cities.ts`.
- URLs enden mit Trailing Slash (`next.config.ts`).
- Bilder sind SVG-Illustrationen in `public/images/`; bei Ersatz durch Fotos Pfade beibehalten oder in `src/lib/services.ts` anpassen.
- FAQ-Antworten sind FAQ-Schema-tauglich (40–60 Wörter); Änderungen an FAQ auch im JSON-LD konsistent halten (läuft automatisch über die `Faq`-Komponente).
- Unbestätigte Kundenfakten (Erfahrungsjahre, Gründungsjahr, Mindestlaufzeit) nicht erfinden — Platzhalter siehe README „Vor dem Livegang".
