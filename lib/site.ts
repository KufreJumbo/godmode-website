/**
 * Single source of truth for site content and contact details.
 * Edit here; every page reads from this file.
 */

export const site = {
  name: "GodMode AI Solutions",
  legalName: "GodMode AI Solutions Limited",
  tagline: "Nigeria and beyond",
  positioning: "AI Transformation Partner",
  description:
    "GodMode AI Solutions is the AI Transformation Partner helping businesses, schools and institutions in Nigeria and beyond work smarter, reach more customers and grow.",
  // The live domain. Every canonical URL, the sitemap and structured data are built from it.
  // NEXT_PUBLIC_SITE_URL overrides it, e.g. for a preview deployment.
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://godmodeaisolutions.com").replace(/\/$/, ""),
  email: "hello@godmodeaisolutions.com",
  phones: [
    { display: "0706 582 2790", tel: "+2347065822790" },
    { display: "0907 279 2548", tel: "+2349072792548" },
  ],
  whatsapp: {
    number: "2347065822790",
    message: "Hi GodMode AI, I'd like to talk about how AI could help my business.",
  },
  address: "Lagos, Nigeria",
  replyPromise: "We reply within one business day.",
  /**
   * Official social profiles. Listed in structured data (schema.org sameAs) so Google can connect
   * them to the business. Add LinkedIn, Instagram, Facebook, X etc. here as full URLs.
   */
  socials: [{ name: "YouTube", url: "https://www.youtube.com/@GodModeAISolutions-w1l" }],
} as const;

export const whatsappHref = `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(site.whatsapp.message)}`;

/**
 * Home hero background video, served from /public/video (no YouTube).
 * Made from Videos\gmhero.mp4: silent, H.264, 24 fps. To swap it, replace these three files
 * (keep them small: under ~4 MB for desktop and ~2 MB for mobile).
 */
export const heroVideo = {
  desktop: "/video/hero-720.mp4",
  mobile: "/video/hero-540.mp4",
  poster: "/video/hero-poster.jpg",
} as const;

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;

export type ServiceSlug = "ai-transformation" | "training" | "web-development" | "creative-studio";

export interface Service {
  slug: ServiceSlug;
  index: string;
  title: string;
  shortTitle: string;
  lead: boolean;
  summary: string;
  headline: string;
  headlineAccent: string;
  intro: string;
  cta: string;
  /** Real session photo shown under the page intro. Leave out when no photo fits the service. */
  photo?: { src: string; alt: string; caption: string };
  problem: { title: string; points: string[] };
  outcomes: { title: string; description: string }[];
  steps: { title: string; description: string }[];
  faqs: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: "ai-transformation",
    index: "01",
    title: "AI Transformation & Automation",
    shortTitle: "AI Transformation",
    lead: true,
    summary: "Make AI part of how your whole business runs: strategy, workflow automation, adoption and implementation.",
    headline: "AI that runs inside your business,",
    headlineAccent: "not beside it.",
    intro:
      "We map where time and money leak out of your operations, then design and build the automations and AI systems that close the gaps. You get a partner through strategy, build and adoption, not a tool you have to figure out alone.",
    cta: "Get Your AI Roadmap",
    photo: {
      src: "/images/masterclass-execs.jpg",
      alt: "Business owners and executives at a GodMode AI masterclass",
      caption: "AI for Business Leaders masterclass",
    },
    problem: {
      title: "What manual work is costing you today",
      points: [
        "Owners and managers answering the same customer questions by hand, every day.",
        "Quotes, invoices, reports and follow-ups that depend on one busy person remembering.",
        "Leads that go cold because nobody replied fast enough.",
        "Teams buying AI subscriptions with no plan for how they fit the actual workflow.",
      ],
    },
    outcomes: [
      { title: "AI audit and opportunity map", description: "A clear picture of where AI pays back fastest in your business, ranked by effort and impact." },
      { title: "Workflow design", description: "Your processes redrawn with AI and automation in the right places, documented so the team can follow them." },
      { title: "Custom systems", description: "Assistants, automations and integrations built on your existing tools: WhatsApp, email, spreadsheets, CRM." },
      { title: "Team training", description: "Your people trained on the systems we build, so adoption happens and the investment sticks." },
      { title: "Implementation support", description: "We stay with you through rollout, measure results and refine until it works the way it should." },
    ],
    steps: [
      { title: "Audit", description: "We study how work actually flows through your business and where it stalls." },
      { title: "Roadmap", description: "You get a prioritised plan: what to automate first, what it takes, what it returns." },
      { title: "Build & embed", description: "We build, test and train, then embed the systems into daily operations." },
      { title: "Measure & improve", description: "We track hours saved, response times and revenue effects, then expand what works." },
    ],
    faqs: [
      { q: "Do we need to be a tech company for this to work?", a: "No. Most of our clients are ordinary businesses: schools, services firms, trading companies, professionals. We build on the tools you already use." },
      { q: "How long before we see results?", a: "The first automation is usually live within weeks of the roadmap. Larger transformations run in phases so each stage pays for the next." },
      { q: "What does it cost?", a: "Implementation projects are scoped after the audit, so you only pay for what your business actually needs. The strategy call is free." },
    ],
  },
  {
    slug: "training",
    index: "02",
    title: "Training & Academy",
    shortTitle: "Training",
    lead: true,
    summary: "Practical AI training for business teams, professionals, teachers, schools and students.",
    headline: "Your team and your students,",
    headlineAccent: "confident with AI.",
    intro:
      "Hands-on programmes that take people from curious to capable. Every session is built around real work: the documents, decisions, lessons and content your people produce every week.",
    cta: "Book a Training Session",
    photo: {
      src: "/images/sagab-training-hall.jpg",
      alt: "A full hall of teachers at a GodMode AI training at Sagab Schools",
      caption: "Teacher AI Training · Sagab Schools",
    },
    problem: {
      title: "Why most AI training doesn't stick",
      points: [
        "It teaches tools in the abstract, not the work people actually do.",
        "Nobody follows through after the workshop, so habits never form.",
        "Leaders are left out, so the team has skills but no permission or direction.",
        "Students learn to prompt, but not to think, build and check their work.",
      ],
    },
    outcomes: [
      { title: "AI for Professionals", description: "A 4-week programme on smarter workflows, better decisions, visuals and video, personal systems and guided practice." },
      { title: "AI Authority Accelerator", description: "A 6-week programme for leaders and experts: positioning clarity, social strategy, AI visual content and turning expertise into content." },
      { title: "Corporate team training", description: "Tailored sessions for departments and whole companies, tied to the tasks they do daily, with follow-up implementation." },
      { title: "Teacher and school programmes", description: "AI training for teachers and school leaders, built for the classroom, lesson planning, assessment and administration." },
      { title: "AI Smart Student Club & Bootcamp", description: "Students learn to build real things with AI: websites, projects and presentations, with certificates on completion." },
    ],
    steps: [
      { title: "Learn", description: "Clear, jargon-free foundations: what AI can and cannot do for your role." },
      { title: "See", description: "Live demonstrations on real tasks from your business or classroom." },
      { title: "Apply", description: "Participants build their own workflows and assets during the session." },
      { title: "Review & improve", description: "We review the work, correct mistakes and set up the next steps so it sticks." },
    ],
    faqs: [
      { q: "Can you train in person?", a: "Yes. We deliver in person in Lagos, and online for teams and schools anywhere." },
      { q: "Do participants get certificates?", a: "Yes. Bootcamp and programme graduates receive a GodMode AI Solutions certificate of completion." },
      { q: "What size groups do you take?", a: "From small leadership teams to whole-school training days. We adapt the format to the group." },
    ],
  },
  {
    slug: "web-development",
    index: "03",
    title: "Web, App & Software Development",
    shortTitle: "Web & Software",
    lead: true,
    summary: "Websites, landing pages, web apps and software that turn visitors into customers and make the business run better.",
    headline: "Digital products that",
    headlineAccent: "earn their keep.",
    intro:
      "We design and build fast, modern websites and software with a clear job: bring in enquiries, serve customers and remove manual work. AI is built in where it adds value, never bolted on for show.",
    cta: "Start Your Project",
    problem: {
      title: "What a weak website or system costs",
      points: [
        "Visitors arrive from ads or referrals and leave without contacting you.",
        "Staff re-type the same data between forms, spreadsheets and chats.",
        "The site looks dated next to competitors and undermines trust before the first call.",
        "Every change needs a developer, so nothing gets updated.",
      ],
    },
    outcomes: [
      { title: "Conversion-focused websites", description: "Clear messaging, fast load times, mobile-first layouts and obvious next steps for the visitor." },
      { title: "Landing pages and funnels", description: "Pages built for a single campaign or offer, measured and improved against real numbers." },
      { title: "Web apps and portals", description: "Customer portals, booking systems, dashboards and internal tools that replace spreadsheets and paper." },
      { title: "AI-powered features", description: "Assistants, document processing, search and automation integrated into the product where it matters." },
      { title: "Care and iteration", description: "Hosting, updates and ongoing improvement so the product keeps working after launch." },
    ],
    steps: [
      { title: "Discover", description: "Goals, audience, content and the systems the product must connect to." },
      { title: "Design", description: "Structure and visuals agreed before code, so there are no surprises." },
      { title: "Build", description: "Developed in the open with regular previews and your feedback at each stage." },
      { title: "Launch & improve", description: "We launch, measure and keep refining based on what visitors actually do." },
    ],
    faqs: [
      { q: "What do you build with?", a: "Modern, well-supported technology such as Next.js and React, chosen for speed, security and ease of maintenance. We'll recommend the right stack for your project." },
      { q: "Can we update the site ourselves?", a: "Yes. Where you need it, we build with simple content editing so your team can update pages without a developer." },
      { q: "Do you redesign existing sites?", a: "Yes. Many projects start with an existing site that isn't converting. We keep what works and rebuild what doesn't." },
    ],
  },
  {
    slug: "creative-studio",
    index: "04",
    title: "Creative Studio & Digital Marketing",
    shortTitle: "Creative & Marketing",
    lead: false,
    summary: "Branding, content, AI-assisted video and visuals, social media strategy and online marketing that reach more customers.",
    headline: "A brand people remember,",
    headlineAccent: "content that reaches them.",
    intro:
      "Strategy first, then production. We help you say the right thing, look the part and show up consistently, using AI to produce more without losing the human touch.",
    cta: "Get a Growth Plan",
    photo: {
      src: "/images/masterclass-video-talk.jpg",
      alt: "Grow With Video, Sell With Ease session for sales and marketing leaders",
      caption: "Grow With Video Masterclass · Podium Dynamics Academy",
    },
    problem: {
      title: "Why good businesses stay invisible",
      points: [
        "Posting is inconsistent because content takes too long to make.",
        "The brand looks different on every channel and every flyer.",
        "Ad spend goes out, but nobody is tracking what comes back.",
        "The founder is the expert, but their expertise never becomes content.",
      ],
    },
    outcomes: [
      { title: "Brand identity", description: "Positioning, visual identity and messaging that make you recognisable and credible." },
      { title: "Content systems", description: "A repeatable way to turn your expertise into posts, articles, visuals and video every week." },
      { title: "AI-assisted video and visuals", description: "Professional creative produced faster with AI tools, directed by people who know your brand." },
      { title: "Social media strategy", description: "Clear channels, cadence and calls to action, tied to enquiries rather than vanity numbers." },
      { title: "Online marketing", description: "Campaigns and funnels set up with tracking, so every naira spent can be measured." },
    ],
    steps: [
      { title: "Position", description: "Who you serve, what you promise and why you're the obvious choice." },
      { title: "Produce", description: "Brand assets and a content engine built around your strengths." },
      { title: "Publish", description: "Consistent presence across the channels that matter for your customers." },
      { title: "Measure", description: "Leads, enquiries and conversions tracked and reviewed monthly." },
    ],
    faqs: [
      { q: "Do you manage our social media for us?", a: "We can run it for you, or set up the system and train your team to run it. Most clients start with us and take over once the engine is in place." },
      { q: "Is AI-generated content obvious?", a: "Not when it's directed well. We use AI for speed and volume, and people for judgement, voice and brand." },
    ],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);

export const method = [
  { title: "Discover", description: "We learn how your business actually works, what's slowing it down and what growth looks like for you." },
  { title: "Define", description: "A clear scope, success measures and a prioritised plan. No vague promises." },
  { title: "Build", description: "We design, develop and implement, showing you progress at every stage." },
  { title: "Launch", description: "We go live carefully: tested, trained and supported from day one." },
  { title: "Improve", description: "We measure what changed and keep refining. Growth is a loop, not a launch." },
] as const;

export const principles = [
  { title: "Strategy before tools", description: "We start with what your business needs, then choose the technology. Never the other way round." },
  { title: "Practical implementation", description: "We don't stop at advice. We build it, embed it and make sure it works in your real operations." },
  { title: "Clear communication", description: "Plain language, honest timelines and no jargon. You always know what we're building and why." },
  { title: "Measurable delivery", description: "Hours saved, enquiries gained, work removed. We only count what can be counted." },
] as const;

export const founders = [
  {
    name: "Gideon Akpan",
    role: "Founder & Lead Facilitator",
    image: "/team/gideon-akpan.webp",
    bio: "Leads AI transformation strategy and implementation for businesses across Nigeria, and facilitates GodMode's professional and leadership programmes.",
  },
  {
    name: "Kufreabasi Jumbo",
    role: "Co-Founder & Co-Facilitator",
    image: "/team/kufreabasi-jumbo.webp",
    bio: "Guides technical implementation and the training programmes that give teams, teachers and students practical AI skills.",
  },
] as const;

export const products = [
  { name: "AdForge", description: "Facebook ad generator that drafts campaign copy and variations in minutes.", tag: "Marketing" },
  { name: "FlareGen", description: "Flyer prompt generator for fast, on-brand event and promo visuals.", tag: "Creative" },
  { name: "Music Hit Maker", description: "Lyrics and style prompt app for songwriters and producers.", tag: "Creative" },
  { name: "Scholars League", description: "Learning platform built for Nigerian students.", tag: "Education" },
  { name: "Chat With Your Codebase", description: "RAG-powered SaaS that lets developers question their own code.", tag: "Developer tools" },
] as const;

export const programmes = [
  {
    name: "AI for Professionals",
    duration: "4 weeks",
    audience: "Professionals and business owners",
    points: ["Smarter workflows", "Decision-making with AI", "Visuals and video", "Personal systems", "Guided practice"],
  },
  {
    name: "AI Authority Accelerator",
    duration: "6 weeks",
    audience: "Leaders, experts and founders",
    featured: true,
    points: ["Positioning clarity", "Social strategy", "AI visual content", "Expertise turned into content", "Priority partner access"],
  },
  {
    name: "Business Implementation",
    duration: "Scoped to your business",
    audience: "Companies and institutions",
    points: ["AI audit", "Opportunity mapping", "Workflow design", "Custom systems", "Team training and support"],
  },
] as const;

/** Strategic partner, featured first in the trust strip. */
export const partner = {
  name: "AMSConcepts Engineering Ltd",
  logo: "/clients/ams-concepts.jpg",
  kind: "AI transformation partnership",
} as const;

/**
 * Clients shown in the trust strip and work cards. `logo` is a file name in /public/clients without the
 * extension (.svg, .png, .webp, .jpg or .jpeg all work). Until that file exists, the name shows as text.
 * Remove any client who has not agreed to be named publicly.
 */
export const clients = [
  { name: "Sagab Schools", logo: "sagab-schools", kind: "School AI training" },
  { name: "Kaztal Academy", logo: "kaztal-academy", kind: "Staff AI training" },
  { name: "Podium Dynamics Academy", logo: "pda", kind: "AI masterclass" },
] as const;

export interface GalleryPhoto {
  src: string;
  alt: string;
  caption: string;
  /** Tile shape in the gallery grid. */
  size?: "big" | "wide" | "tall";
}

/**
 * Training photos for the "In the room" gallery. The order fills a 4-column grid with no gaps,
 * and a 2-column grid on phones, so check both if you add, remove or reorder photos.
 * kids-ai-class.jpg is left out until parental consent is confirmed.
 */
export const gallery: GalleryPhoto[] = [
  { src: "/images/sagab-training-hall.jpg", alt: "A full hall of teachers at a GodMode AI training at Sagab Schools", caption: "Teacher AI Training · Sagab Schools", size: "big" },
  { src: "/images/masterclass-video-talk.jpg", alt: "Grow With Video, Sell With Ease masterclass presentation", caption: "Grow With Video Masterclass · Podium Dynamics Academy" },
  { src: "/images/sagab-facilitator.jpg", alt: "GodMode AI facilitator teaching digital tools to educators", caption: "Digital Tools for Educators", size: "tall" },
  { src: "/images/kaztal-training.jpg", alt: "Staff AI workshop at Kaztal Academy", caption: "Staff AI Workshop · Kaztal Academy" },
  { src: "/images/kaztal-demo.jpg", alt: "Live demonstration turning a lesson into a video with AI", caption: "Live Demo: From a Lesson to a Video", size: "tall" },
  { src: "/images/kaztal-staff-group.jpg", alt: "Kaztal Academy staff after their GodMode AI training", caption: "Kaztal Academy Staff Cohort", size: "wide" },
  { src: "/images/sagab-session.jpg", alt: "Adults working through a GodMode AI workshop", caption: "Hands-on Workshop" },
  { src: "/images/sagab-teachers-group.jpg", alt: "Sagab Schools teaching staff after their GodMode AI training", caption: "Sagab Schools Teaching Staff", size: "wide" },
  { src: "/images/masterclass-execs.jpg", alt: "Business leaders at a GodMode AI masterclass", caption: "AI for Business Leaders" },
];

export const insights = [
  {
    slug: "start-with-the-problem-not-the-tool",
    title: "AI strategy for Nigerian businesses: start with the problem, not the tool",
    category: "Strategy",
    date: "November 2026",
    readTime: "5 min read",
    excerpt: "Most AI projects fail before they start because they begin with a subscription instead of a bottleneck. Here's the order that works.",
    featured: true,
  },
  {
    slug: "automating-customer-replies",
    title: "Answering customers in minutes, not hours: a practical automation pattern",
    category: "Implementation",
    date: "October 2026",
    readTime: "6 min read",
    excerpt: "How a WhatsApp-first business can qualify leads, reply instantly and keep a human in the loop for anything that matters.",
  },
  {
    slug: "training-your-team-for-ai-adoption",
    title: "Training your team for AI adoption",
    category: "Training",
    date: "October 2026",
    readTime: "5 min read",
    excerpt: "Skills alone don't change a company. Permission, examples and follow-through do.",
  },
] as const;
