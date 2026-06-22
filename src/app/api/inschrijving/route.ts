import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  buildRegistrationEmailHtml,
  buildRegistrationEmailText,
  type RegistrationFormData,
} from "@/lib/registration-email";
import { registrationEmail } from "@/lib/site";

function optionalString(value: unknown) {
  return typeof value === "string" && value ? value : undefined;
}

function parseRegistrationData(body: unknown): RegistrationFormData | null {
  if (!body || typeof body !== "object") return null;

  const data = body as Record<string, unknown>;
  const required = [
    "voornaam",
    "achternaam",
    "geboortedatum",
    "bsn",
    "adres",
    "postcode",
    "woonplaats",
    "telefoon",
    "email",
    "zorgverzekeraar",
    "polisnummer",
    "handtekening",
  ];

  for (const field of required) {
    if (typeof data[field] !== "string" || !data[field]) return null;
  }

  return {
    voornaam: data.voornaam as string,
    achternaam: data.achternaam as string,
    geboortedatum: data.geboortedatum as string,
    bsn: data.bsn as string,
    geslacht: optionalString(data.geslacht),
    adres: data.adres as string,
    postcode: data.postcode as string,
    woonplaats: data.woonplaats as string,
    telefoon: data.telefoon as string,
    email: data.email as string,
    zorgverzekeraar: data.zorgverzekeraar as string,
    polisnummer: data.polisnummer as string,
    hoofdverzekerde: optionalString(data.hoofdverzekerde),
    geboortedatum_hoofdverzekerde: optionalString(data.geboortedatum_hoofdverzekerde),
    vorige_huisarts: optionalString(data.vorige_huisarts),
    vorige_huisarts_telefoon: optionalString(data.vorige_huisarts_telefoon),
    vorige_huisarts_adres: optionalString(data.vorige_huisarts_adres),
    medicijnen: optionalString(data.medicijnen),
    medicijnen_details: optionalString(data.medicijnen_details),
    allergieen: optionalString(data.allergieen),
    allergieen_details: optionalString(data.allergieen_details),
    chronisch: optionalString(data.chronisch),
    chronisch_details: optionalString(data.chronisch_details),
    specialist: optionalString(data.specialist),
    specialist_details: optionalString(data.specialist_details),
    instelling: optionalString(data.instelling),
    delen_zorgverleners: optionalString(data.delen_zorgverleners),
    dossier_overdracht: optionalString(data.dossier_overdracht),
    handtekening: data.handtekening as string,
  };
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "E-mailverzending is nog niet geconfigureerd." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ongeldige aanvraag." }, { status: 400 });
  }

  const data = parseRegistrationData(body);
  if (!data) {
    return NextResponse.json({ error: "Vul alle verplichte velden in." }, { status: 400 });
  }

  const resend = new Resend(apiKey);
  const from =
    process.env.EMAIL_FROM ?? "Inschrijving Bloem & Bloem <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to: registrationEmail,
    replyTo: data.email,
    subject: `Nieuwe inschrijving: ${data.voornaam} ${data.achternaam}`,
    html: buildRegistrationEmailHtml(data),
    text: buildRegistrationEmailText(data),
  });

  if (error) {
    return NextResponse.json(
      { error: "Het versturen van de inschrijving is mislukt. Probeer het later opnieuw." },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}
