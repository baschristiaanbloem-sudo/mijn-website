import {
  googleMapsUrl,
  openingHours,
  practiceAddress,
  practiceEmail,
  practicePhone,
  practicePhoneHref,
} from "@/lib/site";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="bk-section-label">Contact</p>
          <h1 className="mt-2 font-heading text-2xl font-bold uppercase tracking-wide text-foreground md:text-3xl">
            Bereikbaarheid & openingstijden
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
            Heeft u een vraag of wilt u een afspraak maken? Hier vindt u onze openingstijden en
            contactgegevens.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="bk-card p-7 md:p-8">
            <h2 className="font-heading text-xl font-bold uppercase tracking-wide text-foreground md:text-2xl">
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
            <div className="bk-card p-7 md:p-8">
              <span className="flex size-11 items-center justify-center bg-secondary text-primary">
                <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <h2 className="mt-4 font-heading text-xl font-medium text-foreground">Adres</h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  {practiceAddress}
                </a>
              </p>
            </div>

            <div className="bk-card border-primary/30 bg-accent p-7 md:p-8">
              <span className="flex size-11 items-center justify-center bg-primary text-primary-foreground">
                <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                </svg>
              </span>
              <h2 className="mt-4 font-heading text-xl font-medium text-accent-foreground">
                Telefoon & e-mail
              </h2>
              <p className="mt-2 leading-relaxed text-accent-foreground/80">
                Bel ons tijdens openingstijden of regel het online via het patiëntenportaal.
              </p>
              <a href={practicePhoneHref} className="mt-4 inline-block text-lg font-semibold text-primary">
                {practicePhone}
              </a>
              <p className="mt-3">
                <a
                  href={`mailto:${practiceEmail}`}
                  className="font-medium text-primary hover:underline"
                >
                  {practiceEmail}
                </a>
              </p>
            </div>

            <div className="bk-card p-7 md:p-8">
              <span className="flex size-11 items-center justify-center bg-secondary text-primary">
                <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </span>
              <h2 className="mt-4 font-heading text-xl font-medium text-foreground">
                Spoed buiten openingstijden
              </h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Bij levensbedreigende situaties belt u altijd{" "}
                <span className="font-semibold text-foreground">112</span>. Voor dringende zorg
                &apos;s avonds en in het weekend belt u de huisartsenpost:{" "}
                <span className="font-semibold text-foreground">0900 - 450 60 70</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
