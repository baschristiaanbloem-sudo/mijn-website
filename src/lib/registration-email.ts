export const registrationEmail = "bas@medi-stad.nl";

export type RegistrationFormData = {
  voornaam: string;
  achternaam: string;
  geboortedatum: string;
  bsn: string;
  geslacht?: string;
  adres: string;
  postcode: string;
  woonplaats: string;
  telefoon: string;
  email: string;
  zorgverzekeraar: string;
  polisnummer: string;
  hoofdverzekerde?: string;
  geboortedatum_hoofdverzekerde?: string;
  vorige_huisarts?: string;
  vorige_huisarts_telefoon?: string;
  vorige_huisarts_adres?: string;
  medicijnen?: string;
  medicijnen_details?: string;
  allergieen?: string;
  allergieen_details?: string;
  chronisch?: string;
  chronisch_details?: string;
  specialist?: string;
  specialist_details?: string;
  instelling?: string;
  delen_zorgverleners?: string;
  dossier_overdracht?: string;
  handtekening: string;
};

function row(label: string, value?: string) {
  if (!value) return "";
  return `<tr><td style="padding:6px 12px 6px 0;font-weight:600;vertical-align:top">${label}</td><td style="padding:6px 0">${value}</td></tr>`;
}

function section(title: string, rows: string) {
  if (!rows) return "";
  return `<h2 style="margin:24px 0 8px;font-size:16px">${title}</h2><table style="border-collapse:collapse">${rows}</table>`;
}

export function buildRegistrationEmailHtml(data: RegistrationFormData) {
  const patientRows = [
    row("Voornaam", data.voornaam),
    row("Achternaam", data.achternaam),
    row("Geboortedatum", data.geboortedatum),
    row("BSN", data.bsn),
    row("Geslacht", data.geslacht),
    row("Adres", data.adres),
    row("Postcode", data.postcode),
    row("Woonplaats", data.woonplaats),
    row("Telefoon", data.telefoon),
    row("E-mail", data.email),
  ].join("");

  const insuranceRows = [
    row("Zorgverzekeraar", data.zorgverzekeraar),
    row("Polisnummer", data.polisnummer),
    row("Naam hoofdverzekerde", data.hoofdverzekerde),
    row("Geboortedatum hoofdverzekerde", data.geboortedatum_hoofdverzekerde),
  ].join("");

  const previousGpRows = [
    row("Naam vorige huisarts", data.vorige_huisarts),
    row("Telefoon vorige huisarts", data.vorige_huisarts_telefoon),
    row("Adres vorige huisarts", data.vorige_huisarts_adres),
  ].join("");

  const medicalRows = [
    row("Medicijnen", data.medicijnen),
    row("Toelichting medicijnen", data.medicijnen_details),
    row("Allergieën", data.allergieen),
    row("Toelichting allergieën", data.allergieen_details),
    row("Chronische aandoening", data.chronisch),
    row("Toelichting chronisch", data.chronisch_details),
    row("Behandeling specialist", data.specialist),
    row("Toelichting specialist", data.specialist_details),
    row("Instelling of begeleid wonen", data.instelling),
  ].join("");

  const consentRows = [
    row("Delen met zorgverleners", data.delen_zorgverleners),
    row("Dossieroverdracht", data.dossier_overdracht),
  ].join("");

  const signatureSection = data.handtekening.startsWith("data:image")
    ? `<h2 style="margin:24px 0 8px;font-size:16px">Handtekening</h2><img src="${data.handtekening}" alt="Handtekening patiënt" style="max-width:320px;border:1px solid #dfe3de" />`
    : section("Handtekening", row("Handtekening", data.handtekening));

  return `
    <div style="font-family:Arial,sans-serif;color:#1f1f1f;line-height:1.5">
      <h1 style="font-size:20px;margin:0 0 8px">Nieuwe inschrijving</h1>
      <p style="margin:0 0 16px">Er is een nieuw inschrijfformulier ingediend via bloemhuisartsen.nl.</p>
      ${section("Gegevens patiënt", patientRows)}
      ${section("Verzekeringsgegevens", insuranceRows)}
      ${section("Gegevens voorgaande huisarts", previousGpRows)}
      ${section("Medische gegevens", medicalRows)}
      ${section("Toestemmingen", consentRows)}
      ${signatureSection}
    </div>
  `;
}

export function buildRegistrationEmailText(data: RegistrationFormData) {
  const lines = [
    "Nieuwe inschrijving via bloemhuisartsen.nl",
    "",
    `Naam: ${data.voornaam} ${data.achternaam}`,
    `Geboortedatum: ${data.geboortedatum}`,
    `BSN: ${data.bsn}`,
    `Geslacht: ${data.geslacht ?? "-"}`,
    `Adres: ${data.adres}, ${data.postcode} ${data.woonplaats}`,
    `Telefoon: ${data.telefoon}`,
    `E-mail: ${data.email}`,
    "",
    `Zorgverzekeraar: ${data.zorgverzekeraar}`,
    `Polisnummer: ${data.polisnummer}`,
    "",
    `Medicijnen: ${data.medicijnen ?? "-"}${data.medicijnen_details ? ` (${data.medicijnen_details})` : ""}`,
    `Allergieën: ${data.allergieen ?? "-"}${data.allergieen_details ? ` (${data.allergieen_details})` : ""}`,
    `Chronische aandoening: ${data.chronisch ?? "-"}${data.chronisch_details ? ` (${data.chronisch_details})` : ""}`,
    `Specialist: ${data.specialist ?? "-"}${data.specialist_details ? ` (${data.specialist_details})` : ""}`,
    `Instelling/begeleid wonen: ${data.instelling ?? "-"}`,
    "",
    `Delen met zorgverleners: ${data.delen_zorgverleners ?? "-"}`,
    `Dossieroverdracht: ${data.dossier_overdracht ?? "-"}`,
    data.handtekening.startsWith("data:image")
      ? "Handtekening: bijgevoegd in HTML-versie"
      : `Handtekening: ${data.handtekening}`,
  ];

  return lines.join("\n");
}
