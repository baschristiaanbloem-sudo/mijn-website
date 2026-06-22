import { LeafIcon } from "@/components/leaf-icon";
import { navLinks } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <a href="/" className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center bg-primary text-primary-foreground">
            <LeafIcon className="size-5" />
          </span>
          <span className="font-heading text-sm font-semibold uppercase leading-tight tracking-wide text-primary md:text-base">
            Bloem & Bloem
            <span className="block text-[0.65rem] font-medium tracking-widest text-muted-foreground md:text-xs">
              huisartsen
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Hoofdnavigatie">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="tel:0201234567"
            className="flex items-center gap-1.5 text-sm font-medium text-foreground"
          >
            <svg className="size-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
            </svg>
            020 - 123 45 67
          </a>
          <a href="/inschrijving" className="bk-btn">
            Inschrijven
          </a>
        </div>

        <details className="group relative md:hidden">
          <summary className="flex size-10 cursor-pointer list-none items-center justify-center border border-border text-foreground [&::-webkit-details-marker]:hidden">
            <svg className="size-5 group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg className="hidden size-5 group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </summary>
          <div className="absolute right-0 top-full mt-2 w-56 border border-border bg-card p-3 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm font-medium uppercase tracking-wide text-muted-foreground hover:bg-secondary hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a href="/inschrijving" className="bk-btn mt-2 w-full">
              Inschrijven
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}
