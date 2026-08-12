/**
 * Zentrale Stammdaten der Website.
 * Telefonnummer und Adresse sind vom Kunden bestätigt. Änderungen NUR hier
 * vornehmen, alle Seiten und Schema-Auszeichnungen lesen aus dieser Datei.
 *
 * TODO vor Livegang bestätigen: exakte Rechtsform/Firmierung. Laut Rechnung
 * des Kunden Kapitalgesellschaft (Geschäftsführer + HRB), Rechtsform-Zusatz
 * ("UG (haftungsbeschränkt)" vs. "GmbH") noch final beim Kunden abzuklären.
 */
export const site = {
  name: "Cleanmaster 1974",
  legalName: "Cleanmaster 1974 UG (haftungsbeschränkt)",
  domain: "https://cleanmaster-1974.de",
  phone: "0176 7230 58 47",
  phoneHref: "tel:+4917672305847",
  /** Gleiche Nummer wie phoneHref. */
  whatsappHref: "https://wa.me/4917672305847",
  email: "info@cleanmaster-1974.de",
  emailHref: "mailto:info@cleanmaster-1974.de",
  address: {
    street: "Büsnauerstr. 73",
    zip: "70569",
    city: "Stuttgart",
    country: "DE",
  },
  region: "Stuttgart und Region",
} as const;

export const absoluteUrl = (path: string) =>
  `${site.domain}${path.endsWith("/") || path.includes(".") ? path : `${path}/`}`;
