import type { Metadata } from "next";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How GodMode AI Solutions Limited collects, uses and protects your personal information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Privacy Policy", path: "/privacy" }])} />
      <PageHero eyebrow="Legal" size="lg" title="Privacy Policy" description="Last updated: 11 November 2026" />
      <section className="container pb-24 md:pb-32">
        <div className="prose-godmode max-w-3xl space-y-8 text-[17px] leading-relaxed text-slate">
          <p>
            {site.legalName} (“GodMode”, “we”, “us”) respects your privacy. This policy explains what information we collect
            when you use {site.url.replace("https://", "")} or contact us, how we use it and the choices you have.
          </p>

          <h2 className="text-2xl font-bold text-navy">What we collect</h2>
          <p>
            When you contact us through the website, WhatsApp, email or phone, we collect the details you choose to share:
            typically your name, business or organisation, phone number or email address, the service you are interested in and
            your message. If you subscribe to our insights, we collect your email address.
          </p>
          <p>
            Our website may use basic analytics to understand how pages are used (for example, pages visited and approximate
            location by country). Where this requires cookies, you will be asked for consent before they are set.
          </p>

          <h2 className="text-2xl font-bold text-navy">How we use it</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>To reply to your enquiry and arrange calls, proposals and projects.</li>
            <li>To deliver the services or training you have engaged us for.</li>
            <li>To send insights or programme updates you have subscribed to. You can unsubscribe at any time.</li>
            <li>To improve the website and our services.</li>
          </ul>
          <p>We do not sell your personal information.</p>

          <h2 className="text-2xl font-bold text-navy">Sharing</h2>
          <p>
            We share information only with service providers who help us run the business (for example, email, messaging and
            hosting providers) and only to the extent needed. They are required to protect it. We may also share information
            where the law requires.
          </p>

          <h2 className="text-2xl font-bold text-navy">Storage and security</h2>
          <p>
            We keep your information only as long as needed for the purposes above or as required by law, and we take
            reasonable technical and organisational steps to protect it.
          </p>

          <h2 className="text-2xl font-bold text-navy">Your rights</h2>
          <p>
            Under the Nigeria Data Protection Act 2023 you may ask to access, correct or delete the personal information we hold
            about you, or object to certain uses. To do so, email{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-navy underline">
              {site.email}
            </a>
            .
          </p>

          <h2 className="text-2xl font-bold text-navy">Changes</h2>
          <p>We may update this policy from time to time. The date at the top shows when it was last changed.</p>

          <h2 className="text-2xl font-bold text-navy">Contact</h2>
          <p>
            {site.legalName}, {site.address}. Email {site.email}.
          </p>
        </div>
      </section>
    </>
  );
}
