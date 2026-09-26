/**
 * Single source of truth for company facts.
 * These values feed page copy, meta tags, JSON-LD structured data, llms.txt and the sitemap.
 * Search engines and AI assistants reward CONSISTENT facts — use exactly the same
 * name, email, phone and address everywhere online (Google Business Profile, LinkedIn,
 * directories). Optional fields left as "" are simply not rendered.
 */
export const site = {
  name: "KYK AstroTech",
  legalName: "KYK AstroTech Private Limited",
  shortLegalName: "KYK AstroTech Pvt Ltd",
  alternateNames: ["KYK AstroTech Pvt Ltd", "KYK AstroTech Private Limited", "KYK Astro Tech", "KYK"],
  tagline: "Building ideas into technology.",
  description:
    "KYK AstroTech Private Limited is an Indian IT company that designs and develops websites, mobile apps, e-commerce stores and custom AI-powered software for startups and businesses in India and worldwide.",
  url: "https://kykastrotech.com",
  email: "kykastrotech@gmail.com",

  // ---- Fill these in when available: each one strengthens local SEO & AI trust signals ----
  phone: "", // e.g. "+91-98xxxxxxxx" (international format)
  whatsapp: "", // digits only, e.g. "9198xxxxxxxx" → renders a WhatsApp link
  foundingDate: "", // e.g. "2025" or "2025-04-01"
  cin: "", // Corporate Identification Number from MCA — a strong legitimacy signal
  founders: [] as string[], // e.g. ["Full Name"]
  address: {
    streetAddress: "",
    addressLocality: "", // city
    addressRegion: "", // state
    postalCode: "",
    addressCountry: "IN",
  },
  // ----------------------------------------------------------------------------------------

  linkedin: "https://www.linkedin.com/company/kykastrotech",
  instagram: "https://www.instagram.com/kykastrotech",
  github: "https://github.com/kykastrotech",
  // Add every official profile you create (X/Twitter, YouTube, Facebook, Clutch, GoodFirms, Crunchbase, Wikidata…)
  extraProfiles: [] as string[],

  astroguru: {
    name: "AstroGuru",
    url: "https://astroguru.online",
    description: "A digital astrology, palm reading and numerology platform designed and built in-house by KYK AstroTech.",
  },

  areaServed: ["India", "United States", "United Kingdom", "United Arab Emirates", "Canada", "Australia", "Worldwide"],
  locationLabel: "Remote-first · India",
  locale: "en_IN",
  lastUpdated: "2026-09-27",
};

export const sameAs = [site.linkedin, site.instagram, site.github, site.astroguru.url, ...site.extraProfiles].filter(Boolean);

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Services", href: "/services/" },
  { label: "Portfolio", href: "/portfolio/" },
  { label: "Guides", href: "/guides/" },
  { label: "Contact", href: "/contact/" },
];

export const footerLinks = [
  { label: "About Us", href: "/about/" },
  { label: "Services", href: "/services/" },
  { label: "Portfolio", href: "/portfolio/" },
  { label: "Guides", href: "/guides/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Careers", href: "/careers/" },
  { label: "Contact", href: "/contact/" },
];

/** Topics the company is an authority on — used in Organization.knowsAbout (entity signal for Google & LLMs). */
export const knowsAbout = [
  "Website development",
  "Website design",
  "Web application development",
  "Mobile app development",
  "Android app development",
  "iOS app development",
  "Cross-platform app development",
  "E-commerce website development",
  "UI/UX design",
  "Custom software development",
  "Artificial intelligence integration",
  "AI chatbot development",
  "Business process automation",
  "Search engine optimization",
  "Cloud deployment",
  "IT support and maintenance",
];

export const techStack = [
  { group: "Web", items: ["React", "Next.js", "Astro", "TypeScript", "Tailwind CSS", "WordPress"] },
  { group: "Mobile", items: ["Flutter", "React Native", "Android (Kotlin)", "iOS (Swift)"] },
  { group: "Backend", items: ["Node.js", "Python", "REST & GraphQL APIs", "PostgreSQL", "MongoDB", "Firebase"] },
  { group: "AI & Cloud", items: ["OpenAI & Claude APIs", "LLM chatbots & RAG", "AWS", "Google Cloud", "Cloudflare", "Vercel"] },
];
