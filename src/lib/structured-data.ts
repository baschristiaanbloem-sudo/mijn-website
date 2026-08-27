import { team } from "@/lib/team";
import {
  openingHours,
  practiceCountry,
  practiceDescription,
  practiceEmail,
  practiceLatitude,
  practiceLocality,
  practiceLongitude,
  practiceName,
  practicePhoneInternational,
  practicePostalCode,
  practiceStreetAddress,
  siteUrl,
} from "@/lib/site";

export function getPracticeJsonLd() {
  const logoUrl = `${siteUrl}/images/logo-bloem-huisartsen.png`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": `${siteUrl}/#clinic`,
        name: practiceName,
        alternateName: "Bloem Huisartsen",
        description: practiceDescription,
        url: siteUrl,
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
            email: practiceEmail,
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
          worksFor: { "@id": `${siteUrl}/#clinic` },
          medicalSpecialty: "PrimaryCare",
          url: `${siteUrl}/team`,
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: practiceName,
        description: practiceDescription,
        publisher: { "@id": `${siteUrl}/#clinic` },
        inLanguage: ["nl-NL", "en"],
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: practiceName,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#clinic` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${siteUrl}/images/hero-praktijk.png`,
        },
        inLanguage: "nl-NL",
      },
    ],
  };
}
