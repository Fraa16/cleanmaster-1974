import { cities } from "@/lib/cities";

/**
 * Stilisierte Karte des Großraums Stuttgart: 18 Städte als verlinkte
 * Punkte, grob geografisch positioniert (N = oben). Kein Kartenmaterial,
 * reine Markengrafik — ehrlich und schnell.
 */
const positions: Record<
  string,
  { x: number; y: number; anchor?: "start" | "end"; dy?: number }
> = {
  stuttgart: { x: 330, y: 285 },
  ludwigsburg: { x: 350, y: 118 },
  kornwestheim: { x: 322, y: 172, anchor: "end" },
  waiblingen: { x: 458, y: 185 },
  fellbach: { x: 425, y: 240 },
  winnenden: { x: 505, y: 118 },
  weinstadt: { x: 525, y: 212 },
  ostfildern: { x: 418, y: 352 },
  kirchheim: { x: 520, y: 452 },
  filderstadt: { x: 362, y: 448, dy: 18 },
  echterdingen: { x: 300, y: 412, anchor: "end", dy: 16 },
  vaihingen: { x: 252, y: 342, anchor: "end" },
  boeblingen: { x: 210, y: 452, dy: 18 },
  sindelfingen: { x: 152, y: 412, anchor: "end" },
  leonberg: { x: 158, y: 238, anchor: "end" },
  gerlingen: { x: 222, y: 252, dy: -12 },
  ditzingen: { x: 218, y: 182, anchor: "end" },
  rutesheim: { x: 100, y: 300 },
};

export function RegionMap() {
  const stuttgart = positions.stuttgart;

  return (
    <svg
      viewBox="0 0 640 520"
      role="img"
      aria-label="Einsatzgebiet: Stuttgart und 17 umliegende Städte"
      className="w-full max-w-2xl"
    >
      {/* Umgebungsringe */}
      <g fill="none" stroke="var(--color-line)" strokeWidth="1.5">
        <circle cx={stuttgart.x} cy={stuttgart.y} r="105" strokeDasharray="1 7" strokeLinecap="round" />
        <circle cx={stuttgart.x} cy={stuttgart.y} r="180" strokeDasharray="1 7" strokeLinecap="round" opacity="0.8" />
        <circle cx={stuttgart.x} cy={stuttgart.y} r="255" strokeDasharray="1 7" strokeLinecap="round" opacity="0.55" />
      </g>

      {/* Verbindungslinien */}
      <g stroke="var(--color-sky-200)" strokeWidth="1.2">
        {cities
          .filter((c) => c.slug !== "stuttgart")
          .map((c) => {
            const p = positions[c.slug];
            return (
              <line
                key={c.slug}
                x1={stuttgart.x}
                y1={stuttgart.y}
                x2={p.x}
                y2={p.y}
                opacity="0.6"
              />
            );
          })}
      </g>

      {/* Städte */}
      {cities.map((c) => {
        const p = positions[c.slug];
        const isHub = c.slug === "stuttgart";
        const anchor = p.anchor ?? "start";
        const labelX = anchor === "start" ? p.x + 12 : p.x - 12;
        const labelY = (p.dy ?? 4) + p.y;
        return (
          <a
            key={c.slug}
            href={`/leistungen/gebaeudereinigung/${c.slug}/`}
            className="group"
            aria-label={`Gebäudereinigung ${c.name}`}
          >
            {isHub && (
              <>
                <circle
                  cx={p.x}
                  cy={p.y}
                  r="10"
                  className="map-pulse"
                  fill="var(--color-sky-400)"
                />
                <circle cx={p.x} cy={p.y} r="9" fill="var(--color-navy-950)" />
                <circle cx={p.x} cy={p.y} r="3.5" fill="var(--color-sky-300)" />
              </>
            )}
            {!isHub && (
              <>
                {/* größere unsichtbare Trefferfläche */}
                <circle cx={p.x} cy={p.y} r="16" fill="transparent" />
                <circle
                  cx={p.x}
                  cy={p.y}
                  r="5.5"
                  fill="var(--color-sky-500)"
                  stroke="#ffffff"
                  strokeWidth="2"
                  className="transition-all duration-200 group-hover:fill-navy-950"
                />
              </>
            )}
            <text
              x={isHub ? p.x + 16 : labelX}
              y={isHub ? p.y + 5 : labelY}
              textAnchor={isHub ? "start" : anchor}
              className="fill-navy-600 text-[12px] font-semibold transition-colors group-hover:fill-sky-700"
              style={isHub ? { fontWeight: 800, fontSize: 14, fill: "var(--color-navy-950)" } : undefined}
            >
              {c.name}
            </text>
          </a>
        );
      })}
    </svg>
  );
}
