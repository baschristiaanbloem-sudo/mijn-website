import Image from "next/image";

function LeafIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

const navLinks = [
  { label: "Diensten", href: "#diensten" },
  { label: "Ons team", href: "#team" },
  { label: "Praktijk", href: "#praktijk" },
  { label: "Openingstijden", href: "#openingstijden" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Consult & onderzoek",
    description:
      "Lichamelijk onderzoek en advies bij klachten, op afspraak of via de telefoon.",
    icon: (
      <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M11 2v2" /><path d="M5 2v2" /><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" /><path d="M8 15a6 6 0 0 0 12 0v-3" /><circle cx="20" cy="10" r="2" />
      </svg>
    ),
  },
  {
    title: "Vaccinaties",
    description:
      "Griepprik, reizigersvaccinaties en het rijksvaccinatieprogramma voor kinderen.",
    icon: (
      <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="m18 2 4 4" /><path d="m17 7 3-3" /><path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" /><path d="m9 11 4 4" /><path d="m5 19-3 3" /><path d="m14 4 6 6" />
      </svg>
    ),
  },
  {
    title: "Chronische zorg",
    description: "Begeleiding bij diabetes, hart- en vaatziekten, COPD en astma.",
    icon: (
      <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M12 6v6h4" /><circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
  {
    title: "Zorg voor kinderen",
    description:
      "Van het eerste consult tot opgroeien: aandachtige zorg voor de kleinsten.",
    icon: (
      <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.128a4 4 0 0 1 0 7.744" />
      </svg>
    ),
  },
  {
    title: "Herhaalrecepten",
    description:
      "Eenvoudig uw medicatie herhalen via de assistente of het patiëntenportaal.",
    icon: (
      <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 12h4" /><path d="M12 10v4" />
      </svg>
    ),
  },
  {
    title: "Kleine ingrepen",
    description:
      "Wratten, moedervlekken en wondverzorging in onze eigen behandelkamer.",
    icon: (
      <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

const values = [
  {
    title: "Aandacht & tijd",
    description: "We nemen de tijd om écht te luisteren naar uw verhaal en klachten.",
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
      </svg>
    ),
  },
  {
    title: "Zorg voor het gezin",
    description: "Van baby tot grootouder — wij kennen uw familie en haar geschiedenis.",
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.128a4 4 0 0 1 0 7.744" />
      </svg>
    ),
  },
  {
    title: "Snel terecht",
    description: "Korte wachttijden en vaak nog dezelfde dag een afspraak mogelijk.",
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Toegankelijk",
    description:
      "Onze praktijk is rolstoeltoegankelijk met parkeergelegenheid voor de deur.",
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="5" r="1" /><path d="m9 20 3-6 3 6" /><path d="M6 8l6 2 6-2" /><path d="M12 10v4" />
      </svg>
    ),
  },
];

const team = [
  {
    name: "Dokter Bas Bloem",
    role: "Huisarts & praktijkhouder",
    description: "Gespecialiseerd in kleine chirurgische ingrepen.",
    image: "/images/bas-bloem.png",
  },
  {
    name: "Dokter Stef Bloem",
    role: "Huisarts & praktijkhouder",
    description: "Gespecialiseerd in vrouwenzaken en psychiatrische problemen.",
    image: "/images/stef-bloem.png",
  },
];

const openingHours = [
  { day: "Maandag", hours: "08:00 – 17:00" },
  { day: "Dinsdag", hours: "08:00 – 17:00" },
  { day: "Woensdag", hours: "08:00 – 17:00" },
  { day: "Donderdag", hours: "08:00 – 17:00" },
  { day: "Vrijdag", hours: "08:00 – 16:00" },
  { day: "Weekend", hours: "Gesloten", muted: true },
];

const heroFacts = [
  {
    label: "Spoed",
    value: "Direct te bereiken",
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    label: "Locatie",
    value: "Lindelaan, Amstelveen",
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Erkend",
    value: "NHG-geaccrediteerd",
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 md:px-6">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <LeafIcon className="size-5" />
            </span>
            <span className="font-heading text-lg font-semibold leading-tight text-foreground">
              Bloem & Bloem
              <span className="block text-xs font-normal text-muted-foreground">huisartsen</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Hoofdnavigatie">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="tel:0201234567"
              className="flex items-center gap-1.5 text-sm font-medium text-foreground"
            >
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
              </svg>
              020 - 123 45 67
            </a>
            <a
              href="#afspraak"
              className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Afspraak maken
            </a>
          </div>

          <details className="group relative md:hidden">
            <summary className="flex size-9 cursor-pointer list-none items-center justify-center rounded-lg border border-border text-foreground [&::-webkit-details-marker]:hidden">
              <svg className="size-5 group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className="hidden size-5 group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </summary>
            <div className="absolute right-0 top-full mt-2 w-56 rounded-xl border border-border bg-card p-3 shadow-lg">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#afspraak"
                className="mt-2 block rounded-lg bg-primary px-3 py-2 text-center text-sm font-medium text-primary-foreground"
              >
                Afspraak maken
              </a>
            </div>
          </details>
        </div>
      </header>

      <main>
        <section id="top" className="relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:px-6 md:py-20 lg:py-24">
            <div className="flex flex-col gap-6">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-3.5 py-1.5 text-sm font-medium text-accent-foreground">
                <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
                Nieuwe patiënten welkom
              </span>
              <h1 className="font-heading text-4xl font-semibold leading-[1.1] text-balance text-foreground md:text-5xl lg:text-6xl">
                Persoonlijke zorg, dichtbij voor uw hele gezin
              </h1>
              <p className="max-w-md text-lg leading-relaxed text-pretty text-muted-foreground">
                Bij Bloem & Bloem huisartsen staat u centraal. Een vertrouwd team dat luistert,
                met aandacht en zonder haast. Samen werken we aan uw gezondheid.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#afspraak"
                  className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Afspraak maken
                </a>
                <a
                  href="#diensten"
                  className="inline-flex h-10 items-center justify-center rounded-lg border border-border bg-background px-5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  Bekijk onze diensten
                </a>
              </div>
              <dl className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {heroFacts.map((fact) => (
                  <div key={fact.label} className="flex items-center gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                      {fact.icon}
                    </span>
                    <div>
                      <dt className="text-xs text-muted-foreground">{fact.label}</dt>
                      <dd className="text-sm font-medium text-foreground">{fact.value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-border/60 shadow-sm">
                <Image
                  src="/images/hero-praktijk.png"
                  alt="De lichte en rustige wachtruimte van Bloem & Bloem huisartsen"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-5 left-5 hidden rounded-2xl border border-border/60 bg-card px-5 py-4 shadow-md sm:block">
                <p className="text-sm font-medium text-foreground">Vandaag geopend</p>
                <p className="text-xs text-muted-foreground">08:00 – 17:00 uur</p>
              </div>
            </div>
          </div>
        </section>

        <section id="diensten" className="bg-secondary/50 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">Onze diensten</p>
              <h2 className="mt-2 font-heading text-3xl font-semibold text-balance text-foreground md:text-4xl">
                Complete huisartsenzorg onder één dak
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
                Van een eenvoudig consult tot de begeleiding van chronische aandoeningen. Wij bieden
                brede zorg, afgestemd op u.
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group rounded-2xl border border-border/60 bg-card p-6 transition-shadow hover:shadow-md"
                >
                  <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    {service.icon}
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-medium text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="praktijk" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2 md:px-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">Over de praktijk</p>
              <h2 className="mt-2 font-heading text-3xl font-semibold text-balance text-foreground md:text-4xl">
                Een praktijk met een warm hart
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
                Bloem & Bloem huisartsen is een kleinschalige praktijk aan de Lindelaan in
                Amstelveen. Al meer dan twintig jaar bieden wij betrokken zorg aan jong en oud,
                met persoonlijke aandacht als uitgangspunt.
              </p>
              <p className="mt-4 leading-relaxed text-pretty text-muted-foreground">
                We geloven in zorg die bij u past. Daarom kennen we onze patiënten, denken we met u
                mee en werken we nauw samen met specialisten, fysiotherapeuten en Apotheek Marne
                in Amstelveen.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <article key={value.title} className="rounded-2xl border border-border/60 bg-card p-6">
                  <span className="flex size-11 items-center justify-center rounded-full bg-secondary text-primary">
                    {value.icon}
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-medium text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">Ons team</p>
              <h2 className="mt-2 font-heading text-3xl font-semibold text-balance text-foreground md:text-4xl">
                Vertrouwde gezichten die u kennen
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
                Een klein, betrokken team dat de tijd neemt. Bij ons bent u geen nummer, maar een
                bekend gezicht.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mx-auto lg:max-w-4xl">
              {team.map((member) => (
                <article
                  key={member.name}
                  className="flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card"
                >
                  <div className="aspect-[4/3] w-full shrink-0 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={`Portret van ${member.name}, ${member.role}`}
                      width={600}
                      height={450}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-heading text-xl font-medium text-foreground">{member.name}</h3>
                    <p className="mt-0.5 text-sm font-medium text-primary">{member.role}</p>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{member.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="apotheek" className="bg-secondary/50 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                Samenwerking
              </p>
              <h2 className="mt-2 font-heading text-3xl font-semibold text-balance text-foreground md:text-4xl">
                Nauwe samenwerking met Apotheek Marne
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
                Wij werken in het bijzonder nauw samen met Apotheek Marne in Amstelveen. Zo bent u
                verzekerd van een vlotte overdracht van recepten en persoonlijk medicatieadvies,
                direct naast onze praktijk.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-stretch">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
                <div className="aspect-[4/3] w-full shrink-0 overflow-hidden">
                  <Image
                    src="/images/apotheek-marne.png"
                    alt="Exterieur van Apotheek Marne in Amstelveen"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-xl font-medium text-foreground">Apotheek Marne</h3>
                  <p className="mt-2 flex-1 leading-relaxed text-muted-foreground">
                    Onze vaste partner in Amstelveen voor betrouwbare en toegankelijke
                    farmaceutische zorg.
                  </p>
                </div>
              </article>

              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
                <div className="aspect-[4/3] w-full shrink-0 overflow-hidden">
                  <Image
                    src="/images/michiel-bloem.png"
                    alt="Portret van Michiel Bloem, apotheker bij Apotheek Marne"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-xl font-medium text-foreground">Michiel Bloem</h3>
                  <p className="mt-0.5 text-sm font-medium text-primary">Apotheker</p>
                  <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                    De derde broer van het team. Michiel is een exceptioneel goede apotheker die met
                    aandacht en vakmanschap uw medicatie begeleidt — een waardevolle schakel in onze
                    gezamenlijke zorg.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="openingstijden" className="bg-secondary/50 py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2 md:px-6">
            <div className="rounded-2xl border border-border/60 bg-card p-7 md:p-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
                Openingstijden
              </h2>
              <ul className="mt-6 divide-y divide-border">
                {openingHours.map((item) => (
                  <li key={item.day} className="flex items-center justify-between py-3">
                    <span className="font-medium text-foreground">{item.day}</span>
                    <span className={item.muted ? "text-muted-foreground" : "text-foreground"}>
                      {item.hours}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Tussen 12:00 en 13:00 uur is de praktijk gesloten voor de lunch. Bel voor 10:00 uur
                voor een afspraak op dezelfde dag.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="rounded-2xl border border-primary/30 bg-accent p-7 md:p-8">
                <span className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                  </svg>
                </span>
                <h3 className="mt-4 font-heading text-xl font-medium text-accent-foreground">
                  Een afspraak maken
                </h3>
                <p className="mt-2 leading-relaxed text-accent-foreground/80">
                  Bel ons tijdens openingstijden of regel het online via het patiëntenportaal.
                </p>
                <a href="tel:0201234567" className="mt-4 inline-block text-lg font-semibold text-primary">
                  020 - 123 45 67
                </a>
              </div>

              <div className="rounded-2xl border border-border/60 bg-card p-7 md:p-8">
                <span className="flex size-11 items-center justify-center rounded-full bg-secondary text-primary">
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </span>
                <h3 className="mt-4 font-heading text-xl font-medium text-foreground">
                  Spoed buiten openingstijden
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  Bij levensbedreigende situaties belt u altijd{" "}
                  <span className="font-semibold text-foreground">112</span>. Voor dringende zorg
                  &apos;s avonds en in het weekend belt u de huisartsenpost:{" "}
                  <span className="font-semibold text-foreground">0900 - 450 60 70</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="afspraak" className="bg-secondary/50 py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 md:px-6">
            <div className="rounded-3xl border border-border/60 bg-card p-7 shadow-sm md:p-10">
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                  Afspraak aanvragen
                </p>
                <h2 className="mt-2 font-heading text-3xl font-semibold text-balance text-foreground md:text-4xl">
                  Plan uw bezoek
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Vul het formulier in en de assistente neemt zo snel mogelijk contact met u op om
                  een tijd af te stemmen.
                </p>
              </div>
              <form className="mt-8 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="voornaam" className="mb-1.5 block text-sm font-medium text-foreground">
                    Voornaam<span className="text-primary"> *</span>
                  </label>
                  <input
                    id="voornaam"
                    name="voornaam"
                    type="text"
                    required
                    className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30"
                  />
                </div>
                <div>
                  <label htmlFor="achternaam" className="mb-1.5 block text-sm font-medium text-foreground">
                    Achternaam<span className="text-primary"> *</span>
                  </label>
                  <input
                    id="achternaam"
                    name="achternaam"
                    type="text"
                    required
                    className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30"
                  />
                </div>
                <div>
                  <label htmlFor="telefoon" className="mb-1.5 block text-sm font-medium text-foreground">
                    Telefoonnummer<span className="text-primary"> *</span>
                  </label>
                  <input
                    id="telefoon"
                    name="telefoon"
                    type="tel"
                    required
                    className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                    E-mailadres<span className="text-primary"> *</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="reden" className="mb-1.5 block text-sm font-medium text-foreground">
                    Reden van uw afspraak
                  </label>
                  <textarea
                    id="reden"
                    name="reden"
                    rows={4}
                    placeholder="Omschrijf kort uw klacht of vraag"
                    className="w-full resize-none rounded-xl border border-input bg-background px-4 py-2.5 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30"
                  />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
                  >
                    Afspraak aanvragen
                  </button>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Bij spoed belt u ons direct op{" "}
                    <a href="tel:0201234567" className="font-medium text-primary">
                      020 - 123 45 67
                    </a>
                    .
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2.5">
                <span className="flex size-9 items-center justify-center rounded-full bg-primary-foreground/15">
                  <LeafIcon className="size-5" />
                </span>
                <span className="font-heading text-lg font-semibold">Bloem & Bloem</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">
                Persoonlijke en betrokken huisartsenzorg voor het hele gezin, aan de Lindelaan in
                Amstelveen.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-base font-medium">Contact</h3>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-primary-foreground/80">
                <li className="flex items-start gap-2.5">
                  <svg className="mt-0.5 size-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" />
                  </svg>
                  Lindelaan, Amstelveen
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="size-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                  </svg>
                  <a href="tel:0201234567" className="hover:underline">020 - 123 45 67</a>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="size-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" />
                  </svg>
                  <a href="mailto:info@bloemenbloem.nl" className="hover:underline">
                    info@bloemenbloem.nl
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-base font-medium">Snel naar</h3>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-primary-foreground/80">
                {[
                  { label: "Diensten", href: "#diensten" },
                  { label: "Ons team", href: "#team" },
                  { label: "Openingstijden", href: "#openingstijden" },
                  { label: "Afspraak maken", href: "#afspraak" },
                ].map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-base font-medium">Spoed</h3>
              <p className="mt-4 text-sm text-primary-foreground/80">
                Levensbedreigend? Bel <span className="font-semibold">112</span>.
              </p>
              <p className="mt-2 text-sm text-primary-foreground/80">
                Huisartsenpost (avond/weekend): 0900 - 450 60 70
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/20 pt-8 text-sm text-primary-foreground/70 sm:flex-row">
            <p>© {new Date().getFullYear()} Bloem & Bloem huisartsen</p>
            <div className="flex gap-6">
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Klachten</a>
              <a href="#" className="hover:underline">Disclaimer</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
