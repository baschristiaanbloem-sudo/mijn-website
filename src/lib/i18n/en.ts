import type { Messages } from "@/lib/i18n/types";

export const en: Messages = {
  meta: {
    home: {
      title: "Bloem & Bloem General Practice",
      description:
        "Your trusted GP practice on Keizer Karelweg in Amstelveen. Personal care, consultations, vaccinations and chronic disease support.",
    },
    contact: {
      title: "Contact | Bloem & Bloem General Practice",
      description:
        "Opening hours and contact details for Bloem & Bloem General Practice on Keizer Karelweg in Amstelveen.",
    },
    praktijk: {
      title: "About the practice | Bloem & Bloem General Practice",
      description:
        "Learn more about Bloem & Bloem General Practice in Amstelveen: personal care with attention for the whole family.",
    },
    team: {
      title: "Our team | Bloem & Bloem General Practice",
      description:
        "Meet Dr Bas Bloem and Dr Stef Bloem of Bloem & Bloem General Practice in Amstelveen.",
    },
    inschrijving: {
      title: "Register | Bloem & Bloem General Practice",
      description:
        "Register with Bloem & Bloem General Practice in Amstelveen using our online registration form.",
    },
  },
  common: {
    brandSubtitle: "general practice",
    navAria: "Main navigation",
    register: "Register",
    yes: "Yes",
    no: "No",
    male: "Male",
    female: "Female",
    other: "Other",
    closed: "Closed",
    privacy: "Privacy",
    complaints: "Complaints",
    disclaimer: "Disclaimer",
    switchToNl: "Dutch",
    switchToEn: "English",
  },
  nav: {
    team: "Our team",
    praktijk: "Practice",
    contact: "Contact",
  },
  footer: {
    contact: "Contact",
    quickLinks: "Quick links",
    emergency: "Emergency",
    emergency112: "Life-threatening emergency? Call 112.",
    emergencyPost: "GP out-of-hours service (evenings/weekends/nights/holidays): 0900 - 450 60 70",
    copyright: "Bloem Huisartsen Amstelveen",
  },
  home: {
    heroWelcome: "New patients welcome!",
    heroText:
      "At Bloem Huisartsen Amstelveen, personal and dedicated care is central. We are here for young and old and work with you on your health and wellbeing. In doing so, we combine trusted GP care with the possibilities of today: skilled, easily accessible and, where possible, also simple online.",
    openToday:
      "Huisartsenpraktijk Kieviet will transfer to Bloem Huisartsen Amstelveen as of 1 January 2027.",
    openTodayCta: "Registration is possible right away!",
    locationLabel: "Location",
    locationText: "You can find us at {address}. Click the map to open directions in Google Maps.",
    mapTitle: "Map showing the location of Bloem & Bloem General Practice",
    mapOpen: "Open in Google Maps →",
    mapAria: "Open {address} in Google Maps",
  },
  praktijk: {
    label: "About the practice",
    title: "Welcome to Bloem Huisartsen Amstelveen",
    paragraphs: [
      "As of 1 January 2027, Dr Kieviet will retire and we will take over his GP practice. The practice will continue under the new name Bloem Huisartsen Amstelveen.",
      "In the recent period we have already regularly worked as locum GPs in the practice. You may therefore already have met us. From 1 September 2026 we will be present in the practice several days a week. This gives us the opportunity to get to know you and become familiar with the practice.",
      "We look forward to continuing the practice and, together with the existing team, providing good, personal and accessible GP care.",
      "In the coming period we will also actively work on the further development of the practice. Our goal is to improve quality, accessibility and service step by step. We hope that you as a patient will truly experience these improvements.",
    ],
    closing:
      "We look forward to meeting you and to a bright future for Bloem Huisartsen Amstelveen.",
    values: {
      attention: {
        title: "Attention & time",
        description: "We take the time to truly listen to your story and symptoms.",
      },
      family: {
        title: "Family care",
        description: "From young to old",
      },
      fast: {
        title: "Quick access",
        description: "Short waiting times and often same-day appointments available.",
      },
      accessible: {
        title: "Accessible",
        description: "Our practice is wheelchair accessible with parking right at the door.",
      },
    },
  },
  team: {
    label: "Our team",
    title: "Trusted faces who know you",
    intro:
      "A small, dedicated team that takes its time. With us you are not a number, but a familiar face.",
    portraitAlt: "Portrait of {name}, {role}",
    members: {
      bas: {
        role: "GP & practice owner",
        description: "",
      },
      stef: {
        role: "GP & practice owner",
        description: "",
      },
    },
  },
  contact: {
    label: "Contact",
    title: "Availability & opening hours",
    intro:
      "Do you have a question or would you like to make an appointment? Here you will find our opening hours and contact details.",
    hoursTitle: "Opening hours",
    lunchNote: "Call before 10:00 for a same-day appointment.",
    addressTitle: "Address",
    phoneEmailTitle: "Phone & email",
    emergencyTitle: "Emergency outside opening hours",
    emergencyText:
      "In life-threatening situations always call 112. For urgent care in the evening or at weekends, call the GP out-of-hours service: 0900 - 450 60 70.",
    days: {
      monday: "Monday",
      tuesday: "Tuesday",
      wednesday: "Wednesday",
      thursday: "Thursday",
      friday: "Friday",
      weekend: "Weekend",
    },
  },
  inschrijving: {
    label: "Register",
    title: "GP practice registration form",
    intro:
      "Complete the form below to register with Bloem & Bloem General Practice. Fields marked with * are required.",
    ctaText: "Click the button below to register straight away.",
    helpText:
      "Do you still have questions, or is registration not working? Please email your phone number to {email}.",
    helpFollowUp: "We will contact you within a week!",
    successTitle: "Registration received",
    successText:
      "Thank you for registering. We will process your details and contact you once your records have been transferred.",
    submit: "Submit registration",
    submitting: "Sending...",
    signatureRequired: "Please add your signature in the box.",
    signatureMissing: "Please add your signature in the box.",
    sendFailed: "Sending failed. Please try again.",
    networkError: "Sending failed. Check your internet connection and try again.",
    sections: {
      patient: "Patient details",
      insurance: "Insurance details",
      previousGp: "Previous GP details",
      medical: "Medical details",
      consent: "Consent",
    },
    fields: {
      firstName: "First name",
      lastName: "Last name",
      birthDate: "Date of birth",
      bsn: "BSN number",
      gender: "Gender",
      street: "Street and house number",
      postcode: "Postcode",
      city: "City",
      phone: "Phone number",
      email: "Email address",
      insurer: "Health insurer",
      policyNumber: "Policy number",
      mainInsuredName: "Name of main insured (if different)",
      mainInsuredBirthDate: "Date of birth main insured",
      previousGpName: "Name of previous GP",
      previousGpPhone: "Phone number of previous GP",
      previousGpAddress: "Address of previous GP",
      signature: "Signature of patient / representative",
    },
    questions: {
      medication: "Do you use medication?",
      medicationDetails: "If yes, which?",
      allergies: "Do you have allergies?",
      allergiesDetails: "If yes, to what?",
      chronic: "Do you have a chronic condition?",
      chronicDetails: "If yes, which?",
      specialist: "Are you currently under treatment by a specialist?",
      specialistDetails: "If yes, which?",
      institution: "Do you currently live in an institution or assisted living facility?",
      shareCare:
        "May the practice share information about your health with other care providers (e.g. pharmacy, specialist)?",
      transferRecords:
        "Do you consent to your previous GP practice sending your medical records to us?",
    },
    signatureHint: "Draw your signature with your mouse or finger.",
    signatureClear: "Clear signature",
  },
  email: {
    subject: "New registration: {name}",
    heading: "New registration",
    intro: "A new registration form has been submitted via bloemhuisartsen.nl.",
    sections: {
      patient: "Patient details",
      insurance: "Insurance details",
      previousGp: "Previous GP details",
      medical: "Medical details",
      consent: "Consent",
      signature: "Signature",
    },
    labels: {
      voornaam: "First name",
      achternaam: "Last name",
      geboortedatum: "Date of birth",
      bsn: "BSN",
      geslacht: "Gender",
      adres: "Address",
      postcode: "Postcode",
      woonplaats: "City",
      telefoon: "Phone",
      email: "Email",
      zorgverzekeraar: "Health insurer",
      polisnummer: "Policy number",
      hoofdverzekerde: "Name of main insured",
      geboortedatum_hoofdverzekerde: "Date of birth main insured",
      vorige_huisarts: "Name of previous GP",
      vorige_huisarts_telefoon: "Phone of previous GP",
      vorige_huisarts_adres: "Address of previous GP",
      medicijnen: "Medication",
      medicijnen_details: "Medication details",
      allergieen: "Allergies",
      allergieen_details: "Allergy details",
      chronisch: "Chronic condition",
      chronisch_details: "Chronic condition details",
      specialist: "Specialist treatment",
      specialist_details: "Specialist details",
      instelling: "Institution or assisted living",
      delen_zorgverleners: "Share with care providers",
      dossier_overdracht: "Record transfer",
      handtekening: "Signature",
    },
    signatureInHtml: "Signature: included in HTML version",
  },
  api: {
    notConfigured: "Email delivery is not configured yet.",
    invalidRequest: "Invalid request.",
    requiredFields: "Please complete all required fields.",
    sendFailed: "Sending the registration failed. Please try again later.",
  },
};
