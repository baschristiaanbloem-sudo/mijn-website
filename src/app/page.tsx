const services = [
  {
    title: "Consult & diagnose",
    description:
      "Persoonlijke aandacht voor al uw gezondheidsklachten, met tijd voor een zorgvuldige beoordeling.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
  {
    title: "Vaccinaties",
    description:
      "Volledig vaccinatieprogramma voor kinderen en volwassenen, afgestemd op de laatste richtlijnen.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Chronische zorg",
    description:
      "Begeleiding bij diabetes, hart- en vaatziekten en andere langdurige aandoeningen.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    title: "Jeugdgezondheid",
    description:
      "Controles, groeimonitoring en advies voor baby's, kinderen en jongeren in een vertrouwde omgeving.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.008h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.008h-.008V9.75Z" />
      </svg>
    ),
  },
  {
    title: "Recepten & verwijzingen",
    description:
      "Snelle afhandeling van herhaalrecepten en verwijzingen naar specialisten wanneer nodig.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
  {
    title: "Huisbezoeken",
    description:
      "Wanneer een bezoek aan de praktijk niet mogelijk is, komen wij bij u thuis langs.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Diensten", href: "#diensten" },
  { label: "Over ons", href: "#over-ons" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col bg-[#f8faf9] text-slate-700">
      <header className="sticky top-0 z-50 border-b border-teal-100/80 bg-white/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-700 text-white shadow-sm">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </span>
            <div>
              <p className="text-sm font-semibold tracking-tight text-teal-900">Bloem & Bloem</p>
              <p className="text-xs text-slate-500">huisartsen</p>
            </div>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-slate-600 transition-colors hover:text-teal-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="rounded-full bg-teal-700 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-teal-800 hover:shadow-md"
          >
            Afspraak maken
          </a>
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-[#f0f7f5] to-sky-50"
        >
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-teal-200/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />

          <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center lg:py-32">
            <div>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/70 px-4 py-1.5 text-sm font-medium text-teal-800">
                <span className="h-2 w-2 rounded-full bg-teal-500" />
                Uw vertrouwde huisarts in de buurt
              </span>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Uw gezondheid,{" "}
                <span className="text-teal-700">onze zorg</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600">
                Bij Bloem & Bloem huisartsen staan we voor u klaar met persoonlijke,
                toegankelijke zorg. Van consult tot chronische begeleiding — altijd met aandacht
                en respect.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-teal-700 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-teal-700/20 transition-all hover:bg-teal-800 hover:shadow-xl"
                >
                  Maak een afspraak
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a
                  href="#diensten"
                  className="inline-flex items-center rounded-full border border-teal-200 bg-white px-8 py-4 text-base font-semibold text-teal-800 transition-colors hover:border-teal-300 hover:bg-teal-50"
                >
                  Bekijk onze diensten
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-xl shadow-teal-900/5 backdrop-blur-sm">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Lindelaan</p>
                    <p className="text-sm text-slate-500">Amstelveen</p>
                  </div>
                </div>

                <div className="space-y-4 border-t border-slate-100 pt-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Maandag – Vrijdag</span>
                    <span className="font-medium text-slate-800">08:00 – 17:00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Zaterdag</span>
                    <span className="font-medium text-slate-800">09:00 – 12:00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Telefoon</span>
                    <span className="font-medium text-teal-700">020 – 123 45 67</span>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-teal-50 px-4 py-3 text-sm text-teal-800">
                  Spoed buiten openingstijden? Bel de huisartsenpost:{" "}
                  <span className="font-semibold">088 – 00 30 600</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="diensten" className="mx-auto max-w-6xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">Onze diensten</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Zorg op maat, dichtbij huis
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Wij bieden een breed scala aan medische diensten, zodat u en uw gezin altijd de juiste
              zorg ontvangen.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:border-teal-200 hover:shadow-md"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition-colors group-hover:bg-teal-100">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="over-ons" className="bg-white py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
            <div className="rounded-3xl bg-gradient-to-br from-teal-700 to-teal-900 p-10 text-white shadow-xl">
              <p className="text-sm font-medium uppercase tracking-wider text-teal-200">Over ons</p>
              <h2 className="mt-4 text-3xl font-bold">Een praktijk waar u zich welkom voelt</h2>
              <p className="mt-6 leading-relaxed text-teal-50">
                Ons team van ervaren huisartsen en praktijkondersteuners werkt samen om u de best
                mogelijke zorg te bieden. Wij geloven in korte lijnen, duidelijke communicatie en
                een warme, rustige sfeer.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-teal-100">
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
                  4 huisartsen en 6 praktijkondersteuners
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
                  Aangesloten bij alle zorgverzekeraars
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
                  Digitale recepten en online afspraken
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              {[
                { value: "15+", label: "Jaar ervaring in de wijk" },
                { value: "8.500+", label: "Patiënten in onze praktijk" },
                { value: "4.8", label: "Gemiddelde patiëntwaardering" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-6 rounded-2xl border border-slate-100 bg-[#f8faf9] px-8 py-6"
                >
                  <span className="text-4xl font-bold text-teal-700">{stat.value}</span>
                  <span className="text-slate-600">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
          <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-200/50">
            <div className="grid lg:grid-cols-2">
              <div className="bg-gradient-to-br from-teal-50 to-sky-50 p-10 lg:p-14">
                <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">Contact</p>
                <h2 className="mt-3 text-3xl font-bold text-slate-900">Neem contact met ons op</h2>
                <p className="mt-4 leading-relaxed text-slate-600">
                  Heeft u een vraag of wilt u een afspraak maken? Vul het formulier in en wij nemen
                  zo snel mogelijk contact met u op.
                </p>

                <div className="mt-10 space-y-5 text-sm">
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 text-teal-700">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-medium text-slate-900">Telefoon</p>
                      <p className="text-slate-600">020 – 123 45 67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 text-teal-700">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-medium text-slate-900">E-mail</p>
                      <p className="text-slate-600">info@bloemenbloem.nl</p>
                    </div>
                  </div>
                </div>
              </div>

              <form className="space-y-5 p-10 lg:p-14">
                <div>
                  <label htmlFor="naam" className="mb-2 block text-sm font-medium text-slate-700">
                    Naam
                  </label>
                  <input
                    id="naam"
                    name="naam"
                    type="text"
                    placeholder="Uw volledige naam"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-teal-400 focus:bg-white focus:ring-2 focus:ring-teal-100"
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                      E-mail
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="naam@voorbeeld.nl"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-teal-400 focus:bg-white focus:ring-2 focus:ring-teal-100"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefoon" className="mb-2 block text-sm font-medium text-slate-700">
                      Telefoon
                    </label>
                    <input
                      id="telefoon"
                      name="telefoon"
                      type="tel"
                      placeholder="06 – 12345678"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-teal-400 focus:bg-white focus:ring-2 focus:ring-teal-100"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="bericht" className="mb-2 block text-sm font-medium text-slate-700">
                    Bericht
                  </label>
                  <textarea
                    id="bericht"
                    name="bericht"
                    rows={4}
                    placeholder="Waar kunnen wij u mee helpen?"
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-teal-400 focus:bg-white focus:ring-2 focus:ring-teal-100"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-teal-700 px-6 py-4 text-base font-semibold text-white shadow-md shadow-teal-700/20 transition-all hover:bg-teal-800 hover:shadow-lg sm:w-auto"
                >
                  Verstuur bericht
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Bloem & Bloem huisartsen</p>
          <p>Lindelaan, Amstelveen</p>
        </div>
      </footer>
    </div>
  );
}
