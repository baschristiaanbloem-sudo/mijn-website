export const siteUrl = "https://www.bloemhuisartsen.nl";

export const practiceName = "Bloem Huisartsen Amstelveen";
export const practiceAddress = "Keizer Karelweg 94C, Amstelveen";
export const practiceStreetAddress = "Keizer Karelweg 94C";
export const practiceLocality = "Amstelveen";
export const practicePostalCode = "1185 HX";
export const practiceCountry = "NL";
export const practiceLatitude = 52.3028;
export const practiceLongitude = 4.8475;

export const practicePhone = "020-6412640";
export const practicePhoneHref = "tel:0206412640";
/** E.164 format for schema.org / Google */
export const practicePhoneInternational = "+31206412640";
export const practiceEmail = "info@bloemhuisartsen.nl";

export const registrationFormUrl = "https://praktijk-kieviet.mijnpraktijk.nl/register";

export const googleMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Keizer+Karelweg+94C,+Amstelveen,+Netherlands";
export const googleMapsEmbedUrl =
  "https://www.google.com/maps?q=Keizer+Karelweg+94C,+Amstelveen,+Netherlands&output=embed";

export const practiceDescription =
  "Huisartsenpraktijk aan de Keizer Karelweg in Amstelveen. Persoonlijke zorg voor jong en oud, consulten, vaccinaties en chronische begeleiding.";

export const openingHours = [
  { dayOfWeek: "Monday" as const, opens: "08:00", closes: "17:00" },
  { dayOfWeek: "Tuesday" as const, opens: "08:00", closes: "17:00" },
  { dayOfWeek: "Wednesday" as const, opens: "08:00", closes: "13:00" },
  { dayOfWeek: "Thursday" as const, opens: "08:00", closes: "17:00" },
  { dayOfWeek: "Friday" as const, opens: "08:00", closes: "16:00" },
];

export const hourRows = [
  { key: "monday" as const, hours: "08:00 – 17:00" },
  { key: "tuesday" as const, hours: "08:00 – 17:00" },
  { key: "wednesday" as const, hours: "08:00 – 13:00" },
  { key: "thursday" as const, hours: "08:00 – 17:00" },
  { key: "friday" as const, hours: "08:00 – 16:00" },
  { key: "weekend" as const, hours: "", muted: true },
];
