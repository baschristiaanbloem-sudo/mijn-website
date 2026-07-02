import type { Messages } from "@/lib/i18n/types";
import { replaceParams } from "@/lib/i18n";

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

export function buildRegistrationEmailHtml(data: RegistrationFormData, email: Messages["email"]) {
  const labels = email.labels;

  const patientRows = [
    row(labels.voornaam, data.voornaam),
    row(labels.achternaam, data.achternaam),
    row(labels.geboortedatum, data.geboortedatum),
    row(labels.bsn, data.bsn),
    row(labels.geslacht, data.geslacht),
    row(labels.adres, data.adres),
    row(labels.postcode, data.postcode),
    row(labels.woonplaats, data.woonplaats),
    row(labels.telefoon, data.telefoon),
    row(labels.email, data.email),
  ].join("");

  const insuranceRows = [
    row(labels.zorgverzekeraar, data.zorgverzekeraar),
    row(labels.polisnummer, data.polisnummer),
    row(labels.hoofdverzekerde, data.hoofdverzekerde),
    row(labels.geboortedatum_hoofdverzekerde, data.geboortedatum_hoofdverzekerde),
  ].join("");

  const previousGpRows = [
    row(labels.vorige_huisarts, data.vorige_huisarts),
    row(labels.vorige_huisarts_telefoon, data.vorige_huisarts_telefoon),
    row(labels.vorige_huisarts_adres, data.vorige_huisarts_adres),
  ].join("");

  const medicalRows = [
    row(labels.medicijnen, data.medicijnen),
    row(labels.medicijnen_details, data.medicijnen_details),
    row(labels.allergieen, data.allergieen),
    row(labels.allergieen_details, data.allergieen_details),
    row(labels.chronisch, data.chronisch),
    row(labels.chronisch_details, data.chronisch_details),
    row(labels.specialist, data.specialist),
    row(labels.specialist_details, data.specialist_details),
    row(labels.instelling, data.instelling),
  ].join("");

  const consentRows = [
    row(labels.delen_zorgverleners, data.delen_zorgverleners),
    row(labels.dossier_overdracht, data.dossier_overdracht),
  ].join("");

  const signatureSection = data.handtekening.startsWith("data:image")
    ? `<h2 style="margin:24px 0 8px;font-size:16px">${email.sections.signature}</h2><img src="${data.handtekening}" alt="${email.sections.signature}" style="max-width:320px;border:1px solid #dfe3de" />`
    : section(email.sections.signature, row(labels.handtekening, data.handtekening));

  return `
    <div style="font-family:Arial,sans-serif;color:#1f1f1f;line-height:1.5">
      <h1 style="font-size:20px;margin:0 0 8px">${email.heading}</h1>
      <p style="margin:0 0 16px">${email.intro}</p>
      ${section(email.sections.patient, patientRows)}
      ${section(email.sections.insurance, insuranceRows)}
      ${section(email.sections.previousGp, previousGpRows)}
      ${section(email.sections.medical, medicalRows)}
      ${section(email.sections.consent, consentRows)}
      ${signatureSection}
    </div>
  `;
}

export function buildRegistrationEmailText(data: RegistrationFormData, email: Messages["email"]) {
  const labels = email.labels;

  const lines = [
    email.intro,
    "",
    `${labels.voornaam}: ${data.voornaam}`,
    `${labels.achternaam}: ${data.achternaam}`,
    `${labels.geboortedatum}: ${data.geboortedatum}`,
    `${labels.bsn}: ${data.bsn}`,
    `${labels.geslacht}: ${data.geslacht ?? "-"}`,
    `${labels.adres}: ${data.adres}, ${data.postcode} ${data.woonplaats}`,
    `${labels.telefoon}: ${data.telefoon}`,
    `${labels.email}: ${data.email}`,
    "",
    `${labels.zorgverzekeraar}: ${data.zorgverzekeraar}`,
    `${labels.polisnummer}: ${data.polisnummer}`,
    "",
    `${labels.medicijnen}: ${data.medicijnen ?? "-"}${data.medicijnen_details ? ` (${data.medicijnen_details})` : ""}`,
    `${labels.allergieen}: ${data.allergieen ?? "-"}${data.allergieen_details ? ` (${data.allergieen_details})` : ""}`,
    `${labels.chronisch}: ${data.chronisch ?? "-"}${data.chronisch_details ? ` (${data.chronisch_details})` : ""}`,
    `${labels.specialist}: ${data.specialist ?? "-"}${data.specialist_details ? ` (${data.specialist_details})` : ""}`,
    `${labels.instelling}: ${data.instelling ?? "-"}`,
    "",
    `${labels.delen_zorgverleners}: ${data.delen_zorgverleners ?? "-"}`,
    `${labels.dossier_overdracht}: ${data.dossier_overdracht ?? "-"}`,
    data.handtekening.startsWith("data:image")
      ? email.signatureInHtml
      : `${labels.handtekening}: ${data.handtekening}`,
  ];

  return lines.join("\n");
}

export function buildRegistrationSubject(data: RegistrationFormData, email: Messages["email"]) {
  return replaceParams(email.subject, { name: `${data.voornaam} ${data.achternaam}` });
}
