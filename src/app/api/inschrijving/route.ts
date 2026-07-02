import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getMessages } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/types";
import {
  buildRegistrationEmailHtml,
  buildRegistrationEmailText,
  buildRegistrationSubject,
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

function parseLocale(value: unknown): Locale {
  return value === "en" ? "en" : "nl";
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    const t = getMessages("nl");
    return NextResponse.json({ error: t.api.invalidRequest }, { status: 400 });
  }

  const locale = parseLocale((body as Record<string, unknown>).locale);
  const t = getMessages(locale);

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: t.api.notConfigured }, { status: 503 });
  }

  const data = parseRegistrationData(body);
  if (!data) {
    return NextResponse.json({ error: t.api.requiredFields }, { status: 400 });
  }

  const resend = new Resend(apiKey);
  const from =
    process.env.EMAIL_FROM ?? "Inschrijving Bloem & Bloem <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to: registrationEmail,
    replyTo: data.email,
    subject: buildRegistrationSubject(data, t.email),
    html: buildRegistrationEmailHtml(data, t.email),
    text: buildRegistrationEmailText(data, t.email),
  });

  if (error) {
    return NextResponse.json({ error: t.api.sendFailed }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
