import type { Metadata } from "next";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description: "The terms that apply when you use the GodMode AI Solutions website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Terms of Service", path: "/terms" }])} />
      <PageHero eyebrow="Legal" size="lg" title="Terms of Service" description="Last updated: 11 November 2026" />
      <section className="container pb-24 md:pb-32">
        <div className="max-w-3xl space-y-8 text-[17px] leading-relaxed text-slate">
          <p>
            These terms apply to your use of the {site.name} website. By using the site you agree to them. Services, training
            and projects are governed by the separate agreement or proposal you sign with {site.legalName}.
          </p>

          <h2 className="text-2xl font-bold text-navy">Use of the website</h2>
          <p>
            You may use the website for lawful purposes only. You must not attempt to interfere with its operation, gain
            unauthorised access to any part of it, or use it to send unsolicited or harmful material.
          </p>

          <h2 className="text-2xl font-bold text-navy">Content</h2>
          <p>
            The content on this site, including text, logos, images and designs, belongs to {site.legalName} or its licensors
            and is protected by copyright and trademark law. Client names and logos are shown with permission and remain the
            property of their owners. You may not reproduce site content without written permission.
          </p>

          <h2 className="text-2xl font-bold text-navy">Information, not advice</h2>
          <p>
            Articles, insights and descriptions of our services are general information. They are not a guarantee of results for
            your business. Outcomes depend on your context and on the specific engagement we agree with you.
          </p>

          <h2 className="text-2xl font-bold text-navy">Third-party links</h2>
          <p>
            The site may link to third-party services such as WhatsApp. Those services have their own terms and privacy
            policies, which we do not control.
          </p>

          <h2 className="text-2xl font-bold text-navy">Liability</h2>
          <p>
            We take care to keep the site accurate and available, but we provide it “as is” and do not accept liability for
            losses arising from reliance on its content or from interruptions to its availability, to the extent permitted by
            law.
          </p>

          <h2 className="text-2xl font-bold text-navy">Governing law</h2>
          <p>These terms are governed by the laws of the Federal Republic of Nigeria.</p>

          <h2 className="text-2xl font-bold text-navy">Contact</h2>
          <p>
            Questions about these terms: {site.email}.
          </p>
        </div>
      </section>
    </>
  );
}
