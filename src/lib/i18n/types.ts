export type Locale = "nl" | "en";

export type ServiceKey =
  | "psychische"
  | "chronische"
  | "ouderenzorg"
  | "kleineIngrepen"
  | "vaccinaties"
  | "rijbewijs"
  | "vasectomie"
  | "cosmetisch";

export type ValueKey = "attention" | "family" | "fast" | "accessible";

export type TeamKey = "bas" | "stef";

export type Messages = {
  meta: {
    home: { title: string; description: string };
    contact: { title: string; description: string };
    praktijk: { title: string; description: string };
    team: { title: string; description: string };
    inschrijving: { title: string; description: string };
  };
  common: {
    brandSubtitle: string;
    navAria: string;
    register: string;
    yes: string;
    no: string;
    male: string;
    female: string;
    other: string;
    closed: string;
    privacy: string;
    complaints: string;
    disclaimer: string;
    switchToNl: string;
    switchToEn: string;
  };
  nav: {
    services: string;
    team: string;
    praktijk: string;
    contact: string;
    appointment: string;
  };
  footer: {
    tagline: string;
    contact: string;
    quickLinks: string;
    emergency: string;
    emergency112: string;
    emergencyPost: string;
    copyright: string;
  };
  home: {
    heroWelcome: string;
    heroTitle: string;
    heroText: string;
    heroCta: string;
    openToday: string;
    servicesLabel: string;
    servicesTitle: string;
    servicesText: string;
    portalTitle: string;
    portalDescription: string;
    portalFeatures: [string, string, string];
    portalButton: string;
    portalEmergency: string;
    locationLabel: string;
    locationText: string;
    mapTitle: string;
    mapOpen: string;
    mapAria: string;
    buttons: {
      register: string;
      appointment: string;
      econsult: string;
      results: string;
    };
    services: Record<ServiceKey, { title: string; description: string }>;
  };
  praktijk: {
    label: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    values: Record<ValueKey, { title: string; description: string }>;
  };
  team: {
    label: string;
    title: string;
    intro: string;
    portraitAlt: string;
    members: Record<TeamKey, { role: string; description: string }>;
  };
  contact: {
    label: string;
    title: string;
    intro: string;
    hoursTitle: string;
    lunchNote: string;
    addressTitle: string;
    phoneEmailTitle: string;
    phoneEmailText: string;
    emergencyTitle: string;
    emergencyText: string;
    days: {
      monday: string;
      tuesday: string;
      wednesday: string;
      thursday: string;
      friday: string;
      weekend: string;
    };
  };
  inschrijving: {
    label: string;
    title: string;
    intro: string;
    successTitle: string;
    successText: string;
    submit: string;
    submitting: string;
    signatureRequired: string;
    signatureMissing: string;
    sendFailed: string;
    networkError: string;
    sections: {
      patient: string;
      insurance: string;
      previousGp: string;
      medical: string;
      consent: string;
    };
    fields: {
      firstName: string;
      lastName: string;
      birthDate: string;
      bsn: string;
      gender: string;
      street: string;
      postcode: string;
      city: string;
      phone: string;
      email: string;
      insurer: string;
      policyNumber: string;
      mainInsuredName: string;
      mainInsuredBirthDate: string;
      previousGpName: string;
      previousGpPhone: string;
      previousGpAddress: string;
      signature: string;
    };
    questions: {
      medication: string;
      medicationDetails: string;
      allergies: string;
      allergiesDetails: string;
      chronic: string;
      chronicDetails: string;
      specialist: string;
      specialistDetails: string;
      institution: string;
      shareCare: string;
      transferRecords: string;
    };
    signatureHint: string;
    signatureClear: string;
  };
  email: {
    subject: string;
    heading: string;
    intro: string;
    sections: {
      patient: string;
      insurance: string;
      previousGp: string;
      medical: string;
      consent: string;
      signature: string;
    };
    labels: Record<string, string>;
    signatureInHtml: string;
  };
  api: {
    notConfigured: string;
    invalidRequest: string;
    requiredFields: string;
    sendFailed: string;
  };
};
