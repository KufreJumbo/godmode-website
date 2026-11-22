# GodMode AI Solutions — Website

Official website for **GodMode AI Solutions Limited**, the AI Transformation Partner for businesses, schools and institutions in Nigeria and beyond.

- Next.js 15 (App Router, Turbopack dev), React 18, TypeScript, Tailwind CSS, Framer Motion
- White / navy / gold brand system taken from the logo
- Mobile-first, reduced-motion aware, keyboard friendly

## Run it

```bash
npm install
npm run dev      # http://localhost:3000 (Turbopack)
npm run build    # production build
npm start
```

## Where things live

```
app/
  layout.tsx            Fonts, metadata, header/footer, WhatsApp button
  page.tsx              Home
  services/page.tsx     Services overview
  services/[slug]/      One template → 4 service pages (data in lib/site.ts)
  work/  about/  insights/  contact/  privacy/  terms/
  not-found.tsx  sitemap.ts  robots.ts  icon.png
components/
  Header.tsx  Footer.tsx  Logo.tsx  PageHero.tsx  CTASection.tsx
  ContactForm.tsx  NewsletterForm.tsx  WhatsAppButton.tsx
  home/                 Home page sections (Hero, WorkflowVisual, Payoff, …)
  work/WorkGrid.tsx     Filterable work grid
  ui/                   Button, Reveal, SectionHeading, Marquee, Counter, Accordion, Icons
lib/
  site.ts               ALL content and contact details. Edit here first.
public/
  brand/  team/  clients/
```

## Editing content

Almost every word on the site comes from [lib/site.ts](lib/site.ts): contact details, navigation, the four services (headline, problem, outcomes, steps, FAQs), method, principles, founders, products, programmes, proof facts, client list and insights. Change it there and every page updates.

**Guardrail:** `proofFacts`, `clients` and the work items in `components/work/WorkGrid.tsx` and `components/home/SelectedWork.tsx` must only contain things the company can evidence. Do not add invented metrics or testimonials.

## Forms

The contact form composes the enquiry into a WhatsApp message (primary) or an email (fallback), so it works with no backend. The newsletter form opens a pre-addressed email. To move to a real form backend, replace `compose()` in `components/ContactForm.tsx` with a POST to your API.

## Brand

| Token | Value | Use |
|---|---|---|
| `navy` | `#06225A` | Headlines, primary buttons, dark sections |
| `blue-500` | `#1D5BD6` | Depth and interactive accents |
| `gold` | `#D8B45D` | Accents, numerals, hover states, the one highlighted word |
| `gold-700` | `#8F6F1C` | Gold text on white (meets contrast) |
| `mist` | `#F5F7FB` | Alternate section background |

Fonts: Plus Jakarta Sans (all text) and Instrument Serif italic (the accent word in headlines), loaded via `next/font`.

## Before launch

- [ ] Confirm the WhatsApp number (`site.whatsapp.number` in `lib/site.ts`)
- [ ] Confirm the final domain (`site.url`) and email
- [ ] Confirm permission to show SAGAB Montessori and AMS Concepts
- [ ] Add social profile links to the footer when handles are confirmed
- [ ] Review the privacy policy and terms with whoever handles legal
- [ ] Connect analytics (add the script in `app/layout.tsx`)
- [ ] Add real article pages under `app/insights/[slug]` when the first articles are written
