import type { Locale } from "@/lib/i18n/types";
import { enPaths, nlPaths } from "@/lib/routes";
import { team } from "@/lib/team";
import {
  openingHours,
  practiceCountry,
  practiceDescription,
  practiceDescriptionEn,
  practiceLatitude,
  practiceLocality,
  practiceLongitude,
  practiceName,
  practicePhoneInternational,
  practicePostalCode,
  practiceSeoKeywords,
  practiceSeoKeywordsEn,
  practiceStreetAddress,
  siteUrl,
} from "@/lib/site";

export function getPracticeJsonLd(locale: Locale = "nl") {
  const isEn = locale === "en";
  const logoUrl = `${siteUrl}/images/logo-bloem-huisartsen.png`;
  const pageUrl = isEn ? `${siteUrl}${enPaths.home}` : siteUrl;
  const description = isEn ? practiceDescriptionEn : practiceDescription;
  const homeTitle = isEn
    ? "English-speaking GP practice Amstelveen | Bloem Huisartsen"
    : "Huisarts Amstelveen | Bloem Huisartsen (GP)";
  const inLanguage = isEn ? "en" : "nl-NL";
  const clinicId = `${siteUrl}/#clinic`;
  const teamUrl = `${siteUrl}${nlPaths.team}`;

  // Clinic entity is language-neutral (one @id) so NL/EN pages do not emit conflicting graphs.
  const clinic = {
    "@type": "MedicalClinic",
    "@id": clinicId,
    name: practiceName,
    alternateName: [
      "Bloem Huisartsen",
      "Huisarts Amstelveen",
      "Huisartsenpraktijk Amstelveen",
      "GP Amstelveen",
      "General practitioner Amstelveen",
      "English speaking GP Amstelveen",
    ],
    description: practiceDescription,
    knowsAbout: [...new Set([...practiceSeoKeywords, ...practiceSeoKeywordsEn])],
    url: siteUrl,
    logo: logoUrl,
    image: [`${siteUrl}/images/hero-praktijk.png`, logoUrl],
    telephone: practicePhoneInternational,
    medicalSpecialty: "PrimaryCare",
    address: {
      "@type": "PostalAddress",
      streetAddress: practiceStreetAddress,
      addressLocality: practiceLocality,
      postalCode: practicePostalCode,
      addressRegion: "Noord-Holland",
      addressCountry: practiceCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: practiceLatitude,
      longitude: practiceLongitude,
    },
    hasMap: `https://www.google.com/maps?q=${practiceLatitude},${practiceLongitude}`,
    areaServed: {
      "@type": "City",
      name: practiceLocality,
    },
    openingHoursSpecification: openingHours.map((item) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: item.dayOfWeek,
      opens: item.opens,
      closes: item.closes,
    })),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: practicePhoneInternational,
        contactType: "customer service",
        areaServed: "NL",
        availableLanguage: ["Dutch", "English"],
      },
    ],
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Huisartsconsult",
        description: "Consulten voor algemene huisartsenzorg.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Vaccinaties",
        description: "Vaccinaties via de huisartsenpraktijk.",
      },
      {
        "@type": "MedicalTherapy",
        name: "Chronische zorg",
        description: "Begeleiding bij chronische aandoeningen.",
      },
    ],
    employee: team.map((member) => ({
      "@type": "Physician",
      name: member.name,
      jobTitle: "Huisarts & praktijkhouder",
      image: `${siteUrl}${member.image}`,
      worksFor: { "@id": clinicId },
      medicalSpecialty: "PrimaryCare",
      url: teamUrl,
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      clinic,
      {
        "@type": "WebSite",
        "@id": isEn ? `${siteUrl}/en#website` : `${siteUrl}/#website`,
        url: pageUrl,
        name: practiceName,
        description,
        publisher: { "@id": clinicId },
        inLanguage: isEn ? ["en"] : ["nl-NL", "en"],
      },
      {
        "@type": "WebPage",
        "@id": isEn ? `${siteUrl}/en#webpage` : `${siteUrl}/#webpage`,
        url: pageUrl,
        name: homeTitle,
        description,
        isPartOf: { "@id": isEn ? `${siteUrl}/en#website` : `${siteUrl}/#website` },
        about: { "@id": clinicId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${siteUrl}/images/hero-praktijk.png`,
        },
        inLanguage,
      },
    ],
  };
}
