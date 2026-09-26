/**
 * Guides are long-form, answer-first articles that target high-intent questions people
 * type into Google and ask AI assistants ("how much does a website cost in India",
 * "I want to create a website for my business"). Each guide lives in src/pages/guides/<slug>.astro;
 * this file holds the metadata used by the index page, sitemap, llms.txt and JSON-LD.
 */
export type Guide = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  published: string;
  updated: string;
  readMinutes: number;
  /** One-paragraph direct answer — shown at the top of the guide and in llms-full.txt. */
  answer: string;
  keyFacts: string[];
};

export const guides: Guide[] = [
  {
    slug: "website-development-cost-india",
    title: "How Much Does a Website Cost in India? (2026 Price Guide)",
    seoTitle: "Website Development Cost in India (2026)",
    description:
      "Website development cost in India in 2026: price ranges for business websites, e-commerce stores and web apps, plus domain, hosting and maintenance costs.",
    published: "2026-09-27",
    updated: "2026-09-27",
    readMinutes: 7,
    answer:
      "In 2026, a website in India typically costs ₹15,000–₹50,000 for a simple 5–7 page business site, ₹40,000–₹1,50,000 for a larger CMS-based business website, ₹75,000–₹5,00,000 for an e-commerce store, and ₹2,00,000–₹15,00,000+ for a custom web application. Yearly running costs add roughly ₹1,000–₹1,500 for a domain, ₹0–₹15,000 for hosting and ₹2,000–₹15,000 per month for optional maintenance.",
    keyFacts: [
      "Simple business website (5–7 pages): ₹15,000–₹50,000, 1–3 weeks",
      "CMS business website (10–30 pages, blog): ₹40,000–₹1,50,000, 3–6 weeks",
      "E-commerce store (Shopify/WooCommerce): ₹75,000–₹2,50,000; custom: ₹3,00,000–₹10,00,000+",
      "Custom web application or portal: ₹2,00,000–₹15,00,000+, 6–16 weeks",
      "Domain: ₹800–₹1,500 per year; hosting: ₹0–₹15,000 per year; maintenance: ₹2,000–₹15,000 per month",
      "Biggest cost drivers: number of unique page designs, custom features, integrations, content creation and e-commerce catalogue size",
    ],
  },
  {
    slug: "mobile-app-development-cost-india",
    title: "Mobile App Development Cost in India (2026 Guide)",
    seoTitle: "Mobile App Development Cost in India 2026",
    description:
      "How much does it cost to make an app in India? 2026 price ranges for MVPs, business apps and complex platforms, with timelines and cost-saving tips.",
    published: "2026-09-27",
    updated: "2026-09-27",
    readMinutes: 7,
    answer:
      "In 2026, developing a mobile app in India typically costs ₹1,50,000–₹5,00,000 for a simple app or MVP, ₹5,00,000–₹15,00,000 for a mid-complexity business app, and ₹15,00,000–₹50,00,000+ for a complex platform such as a marketplace, on-demand or fintech app. Building one cross-platform app with Flutter or React Native usually costs 30–40% less than building separate native Android and iOS apps.",
    keyFacts: [
      "Simple app / MVP: ₹1,50,000–₹5,00,000, 8–12 weeks",
      "Mid-complexity app (logins, payments, admin panel): ₹5,00,000–₹15,00,000, 3–5 months",
      "Complex app (marketplace, on-demand, real-time): ₹15,00,000–₹50,00,000+, 5–9 months",
      "Cross-platform (Flutter / React Native) typically saves 30–40% versus two native apps",
      "Annual maintenance usually costs 15–20% of the original build cost",
      "Store fees: Google Play one-time US$25; Apple Developer Program US$99 per year",
    ],
  },
  {
    slug: "how-to-get-a-website-for-your-business",
    title: "I Want to Create a Website for My Business: A Step-by-Step Guide",
    seoTitle: "How to Create a Website for Your Business",
    description:
      "Want a website for your business? A clear 8-step guide: goals, domain, pages, choosing a developer, cost, timeline, SEO and launch — plus mistakes to avoid.",
    published: "2026-09-27",
    updated: "2026-09-27",
    readMinutes: 8,
    answer:
      "To create a website for your business: (1) define the goal and target customers, (2) register a domain name, (3) list the pages and content you need, (4) decide between a DIY builder and a professional web development company, (5) agree a fixed quote and timeline, (6) review the design, (7) make sure SEO, speed and mobile basics are included, and (8) launch, connect Google Search Console and Google Business Profile, and keep it updated. A professionally built small-business website in India usually takes 2–4 weeks and costs ₹15,000–₹1,50,000.",
    keyFacts: [
      "Step 1: Define the website's main goal (calls, bookings, sales, credibility)",
      "Step 2: Register a short, brandable domain (.com or .in)",
      "Step 3: Plan core pages: Home, About, Services, Portfolio/Reviews, Contact",
      "Step 4: Choose DIY builder vs. professional developer",
      "Step 5: Get a fixed, itemised quote that includes SEO and hosting",
      "Step 6–7: Approve design; confirm mobile-friendliness, speed and SEO basics",
      "Step 8: Launch, set up Google Search Console, Google Business Profile and analytics",
    ],
  },
];

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug)!;
