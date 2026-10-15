import type { Locale } from "@/lib/i18n/types";
import { enPaths, nlPaths } from "@/lib/routes";
import { team } from "@/lib/team";
import {
  openingHours,
  practiceCountry,
  practiceDescription,
  practiceDescriptionEn,
  practiceEmail,
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
  const teamUrl = `${siteUrl}${isEn ? enPaths.team : nlPaths.team}`;
  const description = isEn ? practiceDescriptionEn : practiceDescription;
  const homeTitle = isEn
    ? "English-speaking GP practice Amstelveen | Bloem Huisartsen"
    : "Huisarts Amstelveen | Bloem Huisartsen (GP)";
  const jobTitle = isEn ? "GP & practice owner" : "Huisarts & praktijkhouder";
  const region = isEn ? "North Holland" : "Noord-Holland";
  const inLanguage = isEn ? "en" : "nl-NL";

  const availableService = isEn
    ? [
        {
          "@type": "MedicalProcedure",
          name: "GP consultation",
          description: "Consultations for general primary care.",
        },
        {
          "@type": "MedicalProcedure",
          name: "Vaccinations",
          description: "Vaccinations via the GP practice.",
        },
        {
          "@type": "MedicalTherapy",
          name: "Chronic care",
          description: "Support for chronic conditions.",
        },
      ]
    : [
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
      ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": `${siteUrl}/#clinic`,
        name: practiceName,
        alternateName: isEn
          ? [
              "Bloem Huisartsen",
              "GP Amstelveen",
              "General practitioner Amstelveen",
              "English speaking GP Amstelveen",
            ]
          : [
              "Bloem Huisartsen",
              "Huisarts Amstelveen",
              "Huisartsenpraktijk Amstelveen",
              "GP Amstelveen",
            ],
        description,
        knowsAbout: [...(isEn ? practiceSeoKeywordsEn : practiceSeoKeywords)],
        url: pageUrl,
        logo: logoUrl,
        image: [`${siteUrl}/images/hero-praktijk.png`, logoUrl],
        telephone: practicePhoneInternational,
        email: practiceEmail,
        medicalSpecialty: "PrimaryCare",
        address: {
          "@type": "PostalAddress",
          streetAddress: practiceStreetAddress,
          addressLocality: practiceLocality,
          postalCode: practicePostalCode,
          addressRegion: region,
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
            email: practiceEmail,
            areaServed: "NL",
            availableLanguage: ["Dutch", "English"],
          },
        ],
        availableService,
        employee: team.map((member) => ({
          "@type": "Physician",
          name: member.name,
          jobTitle,
          image: `${siteUrl}${member.image}`,
          worksFor: { "@id": `${siteUrl}/#clinic` },
          medicalSpecialty: "PrimaryCare",
          url: teamUrl,
        })),
      },
      {
        "@type": "WebSite",
        "@id": isEn ? `${siteUrl}/en#website` : `${siteUrl}/#website`,
        url: pageUrl,
        name: practiceName,
        description,
        publisher: { "@id": `${siteUrl}/#clinic` },
        inLanguage: isEn ? ["en"] : ["nl-NL", "en"],
      },
      {
        "@type": "WebPage",
        "@id": isEn ? `${siteUrl}/en#webpage` : `${siteUrl}/#webpage`,
        url: pageUrl,
        name: homeTitle,
        description,
        isPartOf: { "@id": isEn ? `${siteUrl}/en#website` : `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#clinic` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${siteUrl}/images/hero-praktijk.png`,
        },
        inLanguage,
      },
    ],
  };
}
