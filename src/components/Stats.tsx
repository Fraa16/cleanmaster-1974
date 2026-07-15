"use client";

import { useEffect, useRef, useState } from "react";

/** Nur belegbare Fakten, keine erfundenen Zahlen. */
const stats = [
  { value: 18, suffix: "", label: "Städte im Einzugsgebiet" },
  { value: 9, suffix: "", label: "Gewerke aus einer Hand" },
  { value: 1, suffix: "", label: "fester Ansprechpartner" },
  { value: 0, suffix: " €", label: "kostet die Besichtigung" },
];

function useCountUp(target: number, start: boolean, duration = 900) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setValue(target);
      return;
    }
    let raf: number;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - t0) / duration, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return value;
}

function Stat({
  value,
  suffix,
  label,
  start,
}: {
  value: number;
  suffix: string;
  label: string;
  start: boolean;
}) {
  const n = useCountUp(value, start);
  return (
    <div className="flex flex-col gap-1 px-2 text-center sm:px-6">
      <span className="font-display text-4xl font-extrabold tracking-tight text-navy-950 tabular-nums sm:text-5xl">
        {n}
        {suffix}
      </span>
      <span className="text-xs font-medium text-navy-500 sm:text-sm">
        {label}
      </span>
    </div>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 gap-y-8 divide-line py-2 lg:grid-cols-4 lg:divide-x lg:divide-line"
    >
      {stats.map((s) => (
        <Stat key={s.label} {...s} start={start} />
      ))}
    </div>
  );
}
