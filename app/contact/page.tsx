import type { Metadata } from "next";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { ContactForm } from "@/components/ContactForm";
import { Clock, Mail, Phone, Pin, WhatsApp } from "@/components/ui/Icons";
import { site, whatsappHref } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us | Free AI Strategy Call",
  description: "Start a project or book a free AI strategy call with GodMode AI Solutions. WhatsApp, email or phone. We reply within one business day.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Contact", path: "/contact" }])} />
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-grid bg-grid-fade" aria-hidden />
      <div className="container relative grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="animate-rise">
            <p className="eyebrow">Contact</p>
            <h1 className="mt-6 text-display-lg font-extrabold text-navy text-balance">
              Let us show you where AI can <span className="serif-accent text-navy-700">grow your business.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate">
              Tell us a little about the business and what's slowing it down. We'll come back with honest next steps and, if it
              makes sense, a free strategy call.
            </p>
          </div>

          <div className="animate-rise mt-10 space-y-4" style={{ animationDelay: "0.1s" }}>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="card card-hover flex items-center gap-4 p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366]">
                <WhatsApp size={22} />
              </span>
              <span>
                <span className="block font-semibold text-navy">WhatsApp us</span>
                <span className="text-sm text-slate-500">Fastest way to reach the team</span>
              </span>
            </a>
            <div className="card p-5">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-navy">
                  <Phone size={20} />
                </span>
                <div className="space-y-1">
                  {site.phones.map((p) => (
                    <a key={p.tel} href={`tel:${p.tel}`} className="block font-semibold text-navy hover:text-navy-700">
                      {p.display}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <a href={`mailto:${site.email}`} className="card card-hover flex items-center gap-4 p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-navy">
                <Mail size={20} />
              </span>
              <span className="font-semibold text-navy">{site.email}</span>
            </a>
            <div className="card flex items-start gap-4 p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-50 text-navy">
                <Pin size={20} />
              </span>
              <span>
                <span className="block font-semibold text-navy">{site.address.long}</span>
                <span className="text-sm text-slate-500">Serving {site.address.serving}</span>
              </span>
            </div>
            <div className="flex items-center gap-3 px-1 text-sm text-slate-500">
              <Clock size={16} className="text-gold-700" />
              {site.replyPromise}
            </div>
          </div>
        </div>

        <div className="animate-rise lg:col-span-7" style={{ animationDelay: "0.15s" }}>
          <ContactForm />
        </div>
      </div>
    </section>
    </>
  );
}
