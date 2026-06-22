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

export function PraktijkSection() {
  return (
    <section id="praktijk" className="py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2 md:px-6">
        <div>
          <p className="bk-section-label">Over de praktijk</p>
          <h1 className="mt-2 font-heading text-2xl font-bold uppercase tracking-wide text-foreground md:text-3xl">
            Een praktijk met een warm hart
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
            Bloem & Bloem huisartsen is een kleinschalige praktijk aan de Keizer Karelweg in
            Amstelveen. Al meer dan twintig jaar bieden wij betrokken zorg aan jong en oud,
            met persoonlijke aandacht als uitgangspunt.
          </p>
          <p className="mt-4 leading-relaxed text-pretty text-muted-foreground">
            We geloven in zorg die bij u past. Daarom kennen we onze patiënten, denken we met u
            mee en werken we nauw samen met specialisten en fysiotherapeuten in de regio.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {values.map((value) => (
            <article key={value.title} className="bk-card p-6">
              <span className="flex size-11 items-center justify-center bg-secondary text-primary">
                {value.icon}
              </span>
              <h2 className="mt-4 font-heading text-lg font-medium text-foreground">
                {value.title}
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
