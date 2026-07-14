/**
 * Individueller Content pro Stadtseite. Der Lokal-Absatz ist pro Stadt und
 * pro Leistung eigenständig geschrieben (kein Namenstausch), damit die
 * Stadtseiten nicht als Doorway Pages gewertet werden.
 *
 * Neue Stadt aktivieren: Eintrag hier ergänzen + active: true in cities.ts.
 */
export interface CityPageContent {
  /** Lokal-Absatz für /leistungen/gebaeudereinigung/[stadt]/ */
  gebaeudereinigungLocal: string;
  /** Lokal-Absatz für /leistungen/treppenhausreinigung/[stadt]/ */
  treppenhausreinigungLocal: string;
  /** Slugs der Nachbarstädte für die interne Verlinkung */
  neighbors: string[];
}

export const cityContent: Record<string, CityPageContent> = {
  stuttgart: {
    gebaeudereinigungLocal:
      "Cleanmaster 1974 ist in allen Stuttgarter Stadtteilen im Einsatz, von Vaihingen über Feuerbach bis Bad Cannstatt. Kurze Anfahrten halten wir durch feste Reviere, das Reinigungsteam bleibt pro Objekt dasselbe. Typische Aufträge in Stuttgart sind Bürogebäude und Praxen in der Innenstadt, Ladenflächen mit Publikumsverkehr und Wohnanlagen in den Außenbezirken. Auch gemischt genutzte Häuser mit Gewerbe unten und Wohnungen darüber betreuen wir mit einem Vertrag.",
    treppenhausreinigungLocal:
      "In Stuttgart reinigen wir Treppenhäuser vom Altbau im Westen und Süden bis zur Neubau-Wohnanlage in Möhringen oder Zuffenhausen. Hausverwaltungen mit Bestand in mehreren Stadtteilen erhalten einen Vertrag für alle Häuser. Wo die Kehrwoche im Mietvertrag steht, übernehmen wir sie gleich mit, dann gibt es im Haus keine Diskussion mehr, wer diese Woche dran ist.",
    neighbors: ["leonberg", "sindelfingen", "boeblingen", "ludwigsburg"],
  },
  leonberg: {
    gebaeudereinigungLocal:
      "In Leonberg betreuen wir Gewerbeobjekte vom Gewerbegebiet Hertich bis zu den Büros rund um die Altstadt, dazu Praxen und Wohnanlagen in Eltingen, Ramtel und Höfingen. Über das Autobahnkreuz Leonberg sind unsere Teams schnell vor Ort, auch wenn kurzfristig eine Sonderreinigung dazukommt. Viele Kunden in Leonberg kombinieren die Unterhaltsreinigung mit Glasreinigung und Winterdienst zu einem Vertrag.",
    treppenhausreinigungLocal:
      "In Leonberg reinigen wir Treppenhäuser in Mehrfamilienhäusern von Eltingen über Ramtel bis Höfingen und Warmbronn. Viele Objekte hier stammen aus den 60er- und 70er-Jahren, mit Steinböden und Waschbetontreppen, die eine andere Pflege brauchen als neue Anlagen mit Feinsteinzeug. Beides legen wir im Leistungsverzeichnis fest. Eigentümergemeinschaften erhalten den Reinigungsplan zum Aushang im Hauseingang.",
    neighbors: ["stuttgart", "sindelfingen", "boeblingen", "ludwigsburg"],
  },
  sindelfingen: {
    gebaeudereinigungLocal:
      "Sindelfingen ist geprägt von Industrie, Zulieferern und Dienstleistern, entsprechend reinigen wir hier vor allem Büroflächen, Betriebsgebäude und Praxen, dazu Wohnanlagen in Maichingen und Darmsheim. Schichtbetrieb ist für uns kein Hindernis: Die Reinigungszeiten legen wir so, dass sie in Ihren Betriebsablauf passen. Auch Ladenflächen in der Innenstadt und im Umfeld des Breuningerlands gehören zu unseren Objekten.",
    treppenhausreinigungLocal:
      "In Sindelfingen betreuen wir Treppenhäuser in Wohnanlagen vom Eichholz bis Maichingen und Darmsheim. Viele Mehrfamilienhäuser hier sind in den Jahrzehnten des Werkswachstums entstanden und werden heute von Verwaltungen mit größerem Bestand geführt. Für sie bündeln wir mehrere Häuser in einem Vertrag mit einer Rechnung. Der Reinigungsplan hängt in jedem Eingang aus und wird nach jedem Termin abgezeichnet.",
    neighbors: ["boeblingen", "stuttgart", "leonberg"],
  },
  boeblingen: {
    gebaeudereinigungLocal:
      "In Böblingen reinigen wir Büro- und Gewerbeobjekte auf der Hulb und auf dem Flugfeld ebenso wie Praxen in der Innenstadt und Wohnanlagen in Dagersheim oder auf der Diezenhalde. Das Flugfeld wächst weiter, entsprechend oft übernehmen wir dort neben der laufenden Unterhaltsreinigung auch die Bauend- und Erstreinigung neuer Flächen. Beides kommt aus einer Hand, mit einem Ansprechpartner.",
    treppenhausreinigungLocal:
      "In Böblingen reinigen wir Treppenhäuser von der Diezenhalde über die Innenstadt bis Dagersheim. Große Wohnanlagen mit mehreren Eingängen rechnen wir pro Objekt mit einer monatlichen Pauschale ab, das vereinfacht die Betriebskostenabrechnung. Für Verwaltungen, die Häuser in Böblingen und Sindelfingen betreuen, fassen wir beide Standorte in einem Vertrag zusammen.",
    neighbors: ["sindelfingen", "stuttgart", "leonberg"],
  },
  ludwigsburg: {
    gebaeudereinigungLocal:
      "In Ludwigsburg ist Cleanmaster 1974 in der Weststadt mit ihren Büro- und Gewerbeflächen ebenso im Einsatz wie in der barocken Innenstadt mit Läden und Praxen. Wohnanlagen betreuen wir unter anderem in Eglosheim, Oßweil und Grünbühl. Über die B27 und die A81 sind unsere Teams schnell im Objekt, auch Kornwestheim und das Umland decken wir von hier mit ab.",
    treppenhausreinigungLocal:
      "In Ludwigsburg reinigen wir Treppenhäuser vom Altbau in der Innenstadt bis zu den Wohnanlagen in Eglosheim, Grünbühl und Oßweil. Historische Treppenhäuser mit Holzstufen und Stuck brauchen andere Mittel als Betontreppen im Neubau, beides steht bei uns im Leistungsverzeichnis. Vermieter erhalten eine Pauschale, die sich direkt in die Betriebskostenabrechnung übernehmen lässt.",
    neighbors: ["stuttgart", "leonberg", "boeblingen"],
  },
};
