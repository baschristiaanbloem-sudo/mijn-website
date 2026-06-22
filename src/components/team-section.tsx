import Image from "next/image";
import { team } from "@/lib/team";

export function TeamSection() {
  return (
    <section id="team" className="bg-secondary py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="bk-section-label">Ons team</p>
          <h1 className="mt-2 font-heading text-2xl font-bold uppercase tracking-wide text-foreground md:text-3xl">
            Vertrouwde gezichten die u kennen
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
            Een klein, betrokken team dat de tijd neemt. Bij ons bent u geen nummer, maar een
            bekend gezicht.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mx-auto lg:max-w-4xl">
          {team.map((member) => (
            <article key={member.name} className="bk-card flex flex-col overflow-hidden">
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
                <h2 className="font-heading text-xl font-medium text-foreground">{member.name}</h2>
                <p className="mt-0.5 text-sm font-medium text-primary">{member.role}</p>
                <p className="mt-3 leading-relaxed text-muted-foreground">{member.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
