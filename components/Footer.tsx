import Link from "next/link";
import { site, services, whatsappHref } from "@/lib/site";
import { Logo } from "./Logo";
import { Mail, Phone, Pin, WhatsApp } from "./ui/Icons";

const company = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="container pb-10 pt-16 md:pt-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo tone="dark" />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/65">
              {site.positioning} helping businesses, schools and institutions work smarter and grow. {site.tagline}.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/85 transition-colors hover:border-gold hover:text-white"
            >
              <WhatsApp size={16} className="text-[#25D366]" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-200">Services</h3>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-[15px] text-white/70 transition-colors hover:text-white">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-200">Company</h3>
            <ul className="mt-5 space-y-3">
              {company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[15px] text-white/70 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-200">Contact</h3>
            <ul className="mt-5 space-y-3 text-[15px] text-white/70">
              <li className="flex items-start gap-3">
                <Pin size={18} className="mt-0.5 shrink-0 text-gold" />
                <span>
                  {site.address.long}
                  <br />
                  <span className="text-white/45">{site.address.serving}</span>
                </span>
              </li>
              {site.phones.map((p) => (
                <li key={p.tel} className="flex items-center gap-3">
                  <Phone size={18} className="shrink-0 text-gold" />
                  <a href={`tel:${p.tel}`} className="transition-colors hover:text-white">
                    {p.display}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-gold" />
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-white">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/45 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
