"use client";

import { LeafIcon } from "@/components/leaf-icon";
import { useLanguage } from "@/components/language-provider";
import { googleMapsUrl, practiceAddress, practiceEmail, practicePhone, practicePhoneHref } from "@/lib/site";

export function SiteFooter() {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t.nav.services, href: "/#diensten" },
    { label: t.nav.team, href: "/team" },
    { label: t.nav.praktijk, href: "/praktijk" },
    { label: t.nav.contact, href: "/contact" },
    { label: t.nav.appointment, href: "/#afspraak" },
  ];

  return (
    <footer className="bg-footer text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center bg-white/15">
                <LeafIcon className="size-5" />
              </span>
              <span className="font-heading text-lg font-semibold uppercase tracking-wide">Bloem & Bloem</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/75">{t.footer.tagline}</p>
          </div>

          <div>
            <h3 className="font-heading text-base font-semibold uppercase tracking-wide">{t.footer.contact}</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-white/75">
              <li className="flex items-start gap-2.5">
                <svg className="mt-0.5 size-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" />
                </svg>
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {practiceAddress}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="size-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                </svg>
                <a href={practicePhoneHref} className="hover:underline">{practicePhone}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="size-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
                <a href={`mailto:${practiceEmail}`} className="hover:underline">
                  {practiceEmail}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-base font-semibold uppercase tracking-wide">{t.footer.quickLinks}</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-white/75">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-base font-semibold uppercase tracking-wide">{t.footer.emergency}</h3>
            <p className="mt-4 text-sm text-white/75">{t.footer.emergency112}</p>
            <p className="mt-2 text-sm text-white/75">{t.footer.emergencyPost}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-8 text-sm text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {t.footer.copyright}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">{t.common.privacy}</a>
            <a href="#" className="hover:underline">{t.common.complaints}</a>
            <a href="#" className="hover:underline">{t.common.disclaimer}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
