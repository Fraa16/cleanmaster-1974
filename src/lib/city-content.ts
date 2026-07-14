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
  vaihingen: {
    gebaeudereinigungLocal:
      "Stuttgart-Vaihingen ist mit dem Synergiepark einer der größten Bürostandorte der Region. Entsprechend reinigen wir hier vor allem Büroflächen und Praxen, dazu Ladenflächen rund um den Schillerplatz und Wohnanlagen in Rohr, Dürrlewang und im Lauchhau. Über A8, A831 und den S-Bahn-Knoten Vaihingen sind unsere Teams schnell im Objekt, auch wenn kurzfristig eine Grund- oder Sonderreinigung dazukommt.",
    treppenhausreinigungLocal:
      "In Vaihingen reinigen wir Treppenhäuser vom Altbau rund um den Schillerplatz bis zu den Wohnanlagen in Rohr, Dürrlewang und im Lauchhau. Viele Häuser hier werden von Verwaltungen geführt, die Bestand im ganzen Stuttgarter Süden haben. Für sie bündeln wir mehrere Objekte in einem Vertrag mit einer Rechnung, der Reinigungsplan hängt in jedem Eingang aus.",
    neighbors: ["stuttgart", "echterdingen", "sindelfingen", "boeblingen", "gerlingen"],
  },
  waiblingen: {
    gebaeudereinigungLocal:
      "In Waiblingen reinigen wir Büro- und Verwaltungsgebäude, Praxen und Ladenflächen von der historischen Altstadt bis zu den Gewerbeflächen entlang der B14. Auch in den Ortschaften Hegnach, Hohenacker, Bittenfeld und Neustadt sind unsere Teams im Einsatz. Als Kreisstadt des Rems-Murr-Kreises hat Waiblingen viele Verwaltungen und Praxen, die eine Reinigung im festen Turnus nach Leistungsverzeichnis brauchen, genau dafür sind wir aufgestellt.",
    treppenhausreinigungLocal:
      "In Waiblingen betreuen wir Treppenhäuser in der Kernstadt ebenso wie in Hegnach, Hohenacker, Bittenfeld und Neustadt. Vom sanierten Altbau nahe der Altstadt bis zur größeren Wohnanlage legen wir Reinigungstiefe und Turnus im Leistungsverzeichnis fest. Hausverwaltungen mit Bestand im Rems-Murr-Kreis erhalten einen Vertrag für alle Häuser und einen festen Ansprechpartner.",
    neighbors: ["fellbach", "winnenden", "weinstadt", "kornwestheim", "stuttgart"],
  },
  kirchheim: {
    gebaeudereinigungLocal:
      "In Kirchheim unter Teck reinigen wir Praxen und Ladenflächen in der Fachwerk-Altstadt rund um die Marktstraße ebenso wie Büro- und Betriebsgebäude in den Gewerbegebieten an den A8-Anschlüssen. Auch in den Ortsteilen Ötlingen, Jesingen, Nabern und Lindorf sind unsere Teams unterwegs. Die Reinigungszeiten stimmen wir auf Öffnungs- und Betriebszeiten ab, damit der Geschäftsbetrieb ungestört bleibt.",
    treppenhausreinigungLocal:
      "In Kirchheim unter Teck reinigen wir Treppenhäuser in der Kernstadt und in den Ortsteilen Ötlingen, Jesingen und Nabern. Ältere Häuser mit Holztreppen in der Altstadt brauchen andere Mittel und mehr Sorgfalt als Neubauten mit Steinböden, beides regelt das Leistungsverzeichnis. Private Vermieter erhalten eine monatliche Pauschale, die sich direkt in die Betriebskostenabrechnung übernehmen lässt.",
    neighbors: ["filderstadt", "ostfildern", "echterdingen", "stuttgart"],
  },
  echterdingen: {
    gebaeudereinigungLocal:
      "Leinfelden-Echterdingen liegt zwischen Flughafen, Messe und B27, entsprechend reinigen wir hier viele Büros, Hotels, Praxen und Ladenflächen mit hohem Publikumsverkehr. Im Einsatz sind wir in Echterdingen und Leinfelden ebenso wie in Musberg und Stetten. Gerade bei Objekten mit Messe- und Flughafenkundschaft zählt Verlässlichkeit im Turnus, dafür steht das feste Team mit Leistungsverzeichnis.",
    treppenhausreinigungLocal:
      "In Leinfelden-Echterdingen reinigen wir Treppenhäuser in allen Stadtteilen, von Echterdingen über Leinfelden bis Musberg und Stetten. Die Nähe zu Flughafen und S-Bahn macht die Lage für Vermieter attraktiv, entsprechend gepflegt sollen die Häuser auftreten. Der Reinigungsplan hängt im Objekt aus und wird nach jedem Termin abgezeichnet, so haben Verwaltung und Mieter den Nachweis.",
    neighbors: ["filderstadt", "vaihingen", "ostfildern", "stuttgart"],
  },
  ostfildern: {
    gebaeudereinigungLocal:
      "In Ostfildern reinigen wir Büros, Praxen und Ladenflächen in Nellingen, Ruit und Kemnat ebenso wie im Scharnhauser Park. Der junge Stadtteil ist in den letzten zwei Jahrzehnten stark gewachsen, viele Neubauten mit Glasflächen und hellen Böden brauchen eine Unterhaltsreinigung, die auf die Materialien abgestimmt ist. Das legen wir bei der kostenlosen Besichtigung im Leistungsverzeichnis fest.",
    treppenhausreinigungLocal:
      "In Ostfildern betreuen wir Treppenhäuser von den Neubau-Wohnanlagen im Scharnhauser Park bis zu den Beständen in Nellingen, Ruit und der Parksiedlung. Gerade in den neueren Anlagen sind Eigentümergemeinschaften häufig, für sie hängt der Reinigungsplan im Eingang aus und die monatliche Pauschale steht nach der kostenlosen Besichtigung verbindlich fest.",
    neighbors: ["filderstadt", "echterdingen", "stuttgart", "kirchheim"],
  },
  fellbach: {
    gebaeudereinigungLocal:
      "Fellbach liegt direkt an der Stuttgarter Stadtgrenze am Fuß des Kappelbergs. Wir reinigen hier Büros und Praxen in der Innenstadt, Gewerbeflächen entlang der B14 und Betriebe in Schmiden und Oeffingen. Viele Kunden kombinieren die Unterhaltsreinigung mit Glasreinigung und Winterdienst, das spart einen zweiten Dienstleister und läuft über ein Leistungsverzeichnis.",
    treppenhausreinigungLocal:
      "In Fellbach reinigen wir Treppenhäuser in der Kernstadt sowie in Schmiden und Oeffingen. Die Lage vor den Toren Stuttgarts macht Fellbach zum gefragten Wohnort, entsprechend viele Mehrfamilienhäuser werden hier von Verwaltungen aus dem Raum Stuttgart und Waiblingen geführt. Für sie bündeln wir Objekte über Stadtgrenzen hinweg in einem Vertrag mit einer Rechnung.",
    neighbors: ["waiblingen", "stuttgart", "kornwestheim", "weinstadt"],
  },
  kornwestheim: {
    gebaeudereinigungLocal:
      "In Kornwestheim reinigen wir Büroflächen und Praxen in der Innenstadt, Objekte auf dem umgenutzten Salamander-Areal und Betriebe rund um den Güterbahnhof, einen der größten Bahnknoten der Region. Die Lage zwischen Stuttgart-Zuffenhausen und Ludwigsburg macht kurze Anfahrten einfach, unsere Teams betreuen Objekte in beiden Nachbarstädten mit.",
    treppenhausreinigungLocal:
      "In Kornwestheim betreuen wir Treppenhäuser vom Salamander-Areal mit seinen umgebauten Fabriklofts bis zu den Wohnquartieren rund um Bahnhof und Marktplatz. Viele Häuser werden von Verwaltungen aus Ludwigsburg oder Stuttgart mitgeführt, für sie fassen wir den Bestand über die Stadtgrenzen hinweg in einem Vertrag zusammen, mit einem Ansprechpartner.",
    neighbors: ["ludwigsburg", "stuttgart", "fellbach", "waiblingen"],
  },
  filderstadt: {
    gebaeudereinigungLocal:
      "Filderstadt besteht aus den fünf Stadtteilen Bernhausen, Bonlanden, Sielmingen, Plattenhardt und Harthausen, und wir sind in allen fünf im Einsatz. Am häufigsten reinigen wir Praxen, Büros und Ladenflächen in Bernhausen und Bonlanden, dazu Betriebe in den Gewerbegebieten Richtung Flughafen. Turnus und Umfang legen wir je Objekt im Leistungsverzeichnis fest, zum monatlichen Pauschalpreis.",
    treppenhausreinigungLocal:
      "In Filderstadt reinigen wir Treppenhäuser in Bernhausen, Bonlanden, Sielmingen, Plattenhardt und Harthausen. Die S-Bahn nach Bernhausen hat die Nachfrage nach Wohnungen auf den Fildern weiter erhöht, viele Eigentümergemeinschaften legen Wert auf ein gepflegtes Haus. Der Reinigungsplan zum Aushang und die abgezeichneten Termine geben WEG und Verwaltung den Nachweis.",
    neighbors: ["echterdingen", "ostfildern", "vaihingen", "kirchheim"],
  },
  ditzingen: {
    gebaeudereinigungLocal:
      "Ditzingen ist geprägt von Hightech-Industrie und starkem Mittelstand. Wir reinigen hier Büro- und Betriebsgebäude in den Gewerbegebieten, Praxen und Läden in der Innenstadt sowie Objekte in den Ortsteilen Hirschlanden, Heimerdingen und Schöckingen. Bei Betrieben mit Schichtzeiten legen wir die Reinigung in die Randzeiten, damit der Ablauf ungestört bleibt.",
    treppenhausreinigungLocal:
      "In Ditzingen betreuen wir Treppenhäuser in der Kernstadt und in Hirschlanden, Heimerdingen und Schöckingen. Viele Vermieter im Strohgäu kombinieren die Treppenhausreinigung gleich mit dem Winterdienst, dann ist das Haus ganzjährig versorgt und es gibt eine Pauschale statt zwei Rechnungen. Beides steht nach der kostenlosen Besichtigung verbindlich fest.",
    neighbors: ["gerlingen", "leonberg", "kornwestheim", "ludwigsburg", "stuttgart"],
  },
  rutesheim: {
    gebaeudereinigungLocal:
      "Rutesheim liegt direkt am A8-Anschluss zwischen Leonberg und der Autobahnausfahrt Richtung Pforzheim, entsprechend schnell sind unsere Teams im Objekt. Wir reinigen hier Betriebe und Büros im Gewerbegebiet, darunter viele Dienstleister und Zulieferer mit Kunden Richtung Weissach, dazu Praxen im Ort und Objekte im Ortsteil Perouse.",
    treppenhausreinigungLocal:
      "In Rutesheim reinigen wir Treppenhäuser in den gewachsenen Wohngebieten der Kernstadt und in Perouse. Viele Häuser hier gehören privaten Vermietern mit einem oder zwei Objekten, auch dafür lohnt sich die monatliche Pauschale: fester Turnus, Reinigungsplan im Eingang und eine Rechnung, die sich direkt auf die Mieter umlegen lässt, sofern der Mietvertrag das vorsieht.",
    neighbors: ["leonberg", "ditzingen", "gerlingen", "boeblingen"],
  },
  winnenden: {
    gebaeudereinigungLocal:
      "In Winnenden reinigen wir Praxen und Büros rund um Altstadt und Klinikstandort, Ladenflächen in der Marktstraße und Betriebe in den Gewerbegebieten entlang der B14. Auch die Ortsteile, darunter Birkmannsweiler, Hertmannsweiler und Höfen, gehören zum Einsatzgebiet. Gerade Praxen brauchen eine dokumentierte, hygienische Reinigung im festen Turnus, das regelt unser Leistungsverzeichnis.",
    treppenhausreinigungLocal:
      "In Winnenden betreuen wir Treppenhäuser vom Wohngebiet Schelmenholz über die Altstadt bis in die Ortsteile. Eigentümergemeinschaften und private Vermieter erhalten einen festen Reinigungsturnus mit Plan zum Aushang, abgerechnet über eine monatliche Pauschale. Verwaltungen mit Bestand im Rems-Murr-Kreis bündeln wir mit Waiblingen und Weinstadt in einem Vertrag.",
    neighbors: ["waiblingen", "weinstadt", "fellbach", "ludwigsburg"],
  },
  weinstadt: {
    gebaeudereinigungLocal:
      "Weinstadt besteht aus den fünf Ortsteilen Endersbach, Beutelsbach, Großheppach, Strümpfelbach und Schnait. Büros, Praxen und Ladenflächen reinigen wir vor allem in Endersbach und Beutelsbach, dazu Betriebe im Gewerbegebiet an der S-Bahn. Zwischen Weinbergen und Remstal-Ortskernen zählt der gepflegte Auftritt, den sichern feste Teams im vereinbarten Turnus.",
    treppenhausreinigungLocal:
      "In Weinstadt reinigen wir Treppenhäuser in den Mehrfamilienhäusern von Endersbach und Beutelsbach ebenso wie in den kleineren Häusern der Weinbauorte Strümpfelbach und Schnait. Viele Objekte werden von Verwaltungen aus Waiblingen geführt, für sie nehmen wir Weinstadt einfach mit in den bestehenden Vertrag, mit einer Rechnung und einem Ansprechpartner.",
    neighbors: ["waiblingen", "fellbach", "winnenden", "stuttgart"],
  },
  gerlingen: {
    gebaeudereinigungLocal:
      "Gerlingen liegt direkt an der Stuttgarter Stadtgrenze und ist Sitz großer Arbeitgeber auf der Schillerhöhe, entsprechend reinigen wir hier Büro- und Verwaltungsgebäude, Praxen und Läden im Ortskern rund um die Hauptstraße. Über die U6 und die Autobahnanschlüsse bei Leonberg sind unsere Teams schnell vor Ort, auch für Glasreinigung und Sondertermine.",
    treppenhausreinigungLocal:
      "In Gerlingen betreuen wir Treppenhäuser vom Ortskern bis zu den Wohnlagen am Hang Richtung Schillerhöhe. Die Bestände sind gepflegt und die Ansprüche entsprechend, deshalb arbeiten hier feste Teams nach Leistungsverzeichnis, mit Reinigungsplan im Eingang. Verwaltungen mit Objekten in Gerlingen, Ditzingen und Leonberg erhalten einen Vertrag für den gesamten Bestand.",
    neighbors: ["ditzingen", "leonberg", "stuttgart", "vaihingen"],
  },
  ludwigsburg: {
    gebaeudereinigungLocal:
      "In Ludwigsburg ist Cleanmaster 1974 in der Weststadt mit ihren Büro- und Gewerbeflächen ebenso im Einsatz wie in der barocken Innenstadt mit Läden und Praxen. Wohnanlagen betreuen wir unter anderem in Eglosheim, Oßweil und Grünbühl. Über die B27 und die A81 sind unsere Teams schnell im Objekt, auch Kornwestheim und das Umland decken wir von hier mit ab.",
    treppenhausreinigungLocal:
      "In Ludwigsburg reinigen wir Treppenhäuser vom Altbau in der Innenstadt bis zu den Wohnanlagen in Eglosheim, Grünbühl und Oßweil. Historische Treppenhäuser mit Holzstufen und Stuck brauchen andere Mittel als Betontreppen im Neubau, beides steht bei uns im Leistungsverzeichnis. Vermieter erhalten eine Pauschale, die sich direkt in die Betriebskostenabrechnung übernehmen lässt.",
    neighbors: ["stuttgart", "leonberg", "boeblingen"],
  },
};
