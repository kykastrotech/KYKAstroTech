export type FAQ = { q: string; a: string };

export type Service = {
  slug: string;
  title: string;
  /** H1 on the service page — carries the primary keyword. */
  heading: string;
  short: string;
  summary: string;
  /** <title> tag — keep under ~60 characters. */
  seoTitle: string;
  /** Meta description — keep between ~140 and 160 characters. */
  metaDescription: string;
  /** The search terms this page is built to rank for (also used in JSON-LD). */
  keywords: string[];
  serviceType: string;
  icon: string;
  intro: string[];
  features: string[];
  idealFor: string[];
  process: { title: string; detail: string }[];
  timeline: string;
  faqs: FAQ[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    heading: "Website Design & Development Company",
    short: "Fast, SEO-ready websites & web apps",
    summary:
      "We design and build modern, high-performance websites and web applications tailored to your business — from business websites and landing pages to custom portals and dashboards.",
    seoTitle: "Website Development Company in India | KYK AstroTech",
    metaDescription:
      "Custom website design & development in India: fast, mobile-friendly, SEO-ready business websites, landing pages and web apps. Get a free quote from KYK AstroTech.",
    keywords: [
      "website development company",
      "website development company in India",
      "website design and development services",
      "business website development",
      "custom web application development",
      "create a website for my business",
      "web development agency",
    ],
    serviceType: "Website design and development",
    icon: "M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm0 4h16M8 4v4",
    intro: [
      "Your website is usually the first place a customer meets your business — and increasingly, it's the page Google and AI assistants read before recommending you. We build websites that load in about a second, look sharp on every phone, and are structured so search engines understand exactly what you offer.",
      "Whether you need a 5-page business website, a high-converting landing page, or a full web application with logins, payments and dashboards, our team handles design, development, hosting and launch end to end. You get clean, modern code that you own — no locked-in page builders.",
    ],
    features: [
      "Business websites & landing pages",
      "Custom web applications, portals & dashboards",
      "Mobile-first, responsive design",
      "Technical SEO & Schema markup built in",
      "CMS so you can edit content yourself",
      "API integrations, payments & backend services",
      "Core Web Vitals & speed optimization",
      "Domain, hosting, SSL & launch support",
    ],
    idealFor: [
      "Startups launching their first product site",
      "Small businesses, clinics, consultants & local shops",
      "Companies replacing a slow or outdated website",
      "Teams that need a custom web app or internal tool",
    ],
    process: [
      { title: "Discover", detail: "We map your goals, audience, pages and technical requirements." },
      { title: "Design", detail: "Wireframes and UI design aligned with your brand, approved by you." },
      { title: "Build", detail: "Clean, modern code with speed, SEO and accessibility baked in." },
      { title: "Launch & Support", detail: "Deployment, Google Search Console setup, monitoring and iteration." },
    ],
    timeline: "A typical business website takes 2–4 weeks; custom web applications usually take 6–16 weeks depending on scope.",
    faqs: [
      {
        q: "How much does website development cost in India?",
        a: "A simple business website in India typically costs ₹15,000–₹50,000, a larger CMS-based business site ₹40,000–₹1,50,000, an e-commerce store ₹75,000–₹5,00,000, and a custom web application ₹2,00,000 and up. KYK AstroTech gives a fixed, itemised quote after a free consultation.",
      },
      {
        q: "How long does it take to build a website?",
        a: "Most business websites are designed, built and launched in 2–4 weeks. Larger websites with many pages or custom features take 4–8 weeks, and full web applications take 6–16 weeks.",
      },
      {
        q: "Will my website be SEO-friendly and mobile-friendly?",
        a: "Yes. Every website we build is mobile-first and includes technical SEO as standard: fast load times, clean URLs, meta tags, XML sitemap, robots.txt, Schema.org structured data and Google Search Console setup.",
      },
      {
        q: "Can I update the website myself after launch?",
        a: "Yes. We can include an easy content management system (CMS) so you can edit text, images and blog posts without writing code, and we provide a short handover session.",
      },
      {
        q: "Do you work with clients outside India?",
        a: "Yes. KYK AstroTech is a remote-first company and builds websites for clients across India and internationally, including the US, UK, UAE, Canada and Australia.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    heading: "Mobile App Development Company for Android & iOS",
    short: "Android, iOS & cross-platform apps",
    summary:
      "We build reliable, smooth mobile apps for Android and iOS — from MVPs to full-featured products — using modern cross-platform frameworks like Flutter and React Native.",
    seoTitle: "Mobile App Development Company in India | KYK AstroTech",
    metaDescription:
      "Android & iOS app development in India. Flutter and React Native apps, MVPs and full products — designed, built and launched on the Play Store & App Store.",
    keywords: [
      "mobile app development company",
      "app development company in India",
      "android app development",
      "iOS app development",
      "flutter app development",
      "react native app development",
      "create an app for my business",
    ],
    serviceType: "Mobile application development",
    icon: "M8 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm4 15h.01",
    intro: [
      "A great app feels effortless to use — which takes careful product thinking, solid engineering and a lot of real-device testing. We take your idea from sketch to the Play Store and App Store, and we stay on after launch to ship updates.",
      "For most businesses we recommend cross-platform development with Flutter or React Native: one codebase, native-quality performance on both Android and iOS, and roughly 30–40% lower cost than building two separate native apps. When a project needs deep native features, we build natively in Kotlin or Swift.",
    ],
    features: [
      "Cross-platform apps (Flutter & React Native)",
      "Native Android (Kotlin) & iOS (Swift) apps",
      "MVP development for startups",
      "UI/UX design & clickable prototypes",
      "Payments, maps, chat & push notifications",
      "Admin panels & backend APIs",
      "Play Store & App Store publishing",
      "Post-launch monitoring, analytics & updates",
    ],
    idealFor: [
      "Startups validating an idea with an MVP",
      "Businesses adding an app for customers or staff",
      "E-commerce, booking, delivery & service businesses",
      "Companies modernising an old or unstable app",
    ],
    process: [
      { title: "Scope", detail: "Define core user flows, platforms and success metrics." },
      { title: "Prototype", detail: "Clickable prototypes to validate the experience early." },
      { title: "Develop", detail: "Iterative builds with regular test releases on real devices." },
      { title: "Ship & Grow", detail: "Store launch, analytics, crash monitoring and version updates." },
    ],
    timeline: "An MVP usually takes 8–12 weeks; a full-featured app typically takes 3–6 months.",
    faqs: [
      {
        q: "How much does it cost to develop a mobile app in India?",
        a: "A simple app or MVP in India typically costs ₹1,50,000–₹5,00,000, a mid-complexity app ₹5,00,000–₹15,00,000, and a complex app such as a marketplace or on-demand platform ₹15,00,000 or more. The final cost depends on features, platforms and integrations.",
      },
      {
        q: "Should I build a native app or a cross-platform app?",
        a: "For most businesses a cross-platform app built with Flutter or React Native is the best choice: one codebase runs on both Android and iOS, costs less and ships faster. Native development is better for apps that rely heavily on device hardware, advanced graphics or platform-specific features.",
      },
      {
        q: "Do you publish the app on Google Play and the Apple App Store?",
        a: "Yes. We handle store listings, screenshots, compliance requirements and submission for both the Google Play Store and Apple App Store, using your developer accounts so you own the app.",
      },
      {
        q: "How long does it take to build an app?",
        a: "A focused MVP usually takes 8–12 weeks. A full-featured app with an admin panel, payments and multiple user roles typically takes 3–6 months.",
      },
    ],
  },
  {
    slug: "ai-software-solutions",
    title: "AI & Custom Software",
    heading: "Custom Software & AI Development Company",
    short: "Custom software, AI chatbots & automation",
    summary:
      "We turn ideas into powerful digital solutions — custom software, workflow automation, and practical AI integrations such as chatbots and assistants that drive measurable growth.",
    seoTitle: "Custom Software & AI Development Company | KYK AstroTech",
    metaDescription:
      "Custom software development, AI chatbots, LLM integrations and business automation. KYK AstroTech builds practical AI-powered software for startups and businesses.",
    keywords: [
      "custom software development company",
      "AI development company",
      "AI chatbot development",
      "AI integration services",
      "business process automation",
      "software company in India",
      "generative AI development",
    ],
    serviceType: "Custom software and AI development",
    icon: "M12 2a5 5 0 0 0-5 5v1a4 4 0 0 0-2 3.46V15a4 4 0 0 0 4 4h1a3 3 0 0 0 6 0h1a4 4 0 0 0 4-4v-3.54A4 4 0 0 0 17 8V7a5 5 0 0 0-5-5Z",
    intro: [
      "Off-the-shelf tools only go so far. When your business runs on spreadsheets, copy-paste and manual follow-ups, custom software pays for itself quickly. We build internal tools, customer portals and automations that fit exactly how your team works.",
      "We also help businesses use AI practically — not as a gimmick. That means customer-support chatbots trained on your own documents, AI assistants inside your software, automatic document processing, and smart search, built on leading large language models with your data kept private.",
    ],
    features: [
      "Custom software, CRMs & internal tools",
      "AI chatbots & virtual assistants",
      "LLM integration (OpenAI, Claude, Gemini) & RAG",
      "Workflow & business process automation",
      "Data pipelines, reports & dashboards",
      "SaaS product development",
      "Legacy system modernisation",
      "Cloud architecture & deployment",
    ],
    idealFor: [
      "Businesses drowning in manual, repetitive work",
      "Founders building a SaaS product",
      "Support teams that want 24/7 AI-assisted answers",
      "Companies outgrowing spreadsheets and old systems",
    ],
    process: [
      { title: "Assess", detail: "Audit workflows to find where software and AI pay off most." },
      { title: "Architect", detail: "Design a solution that fits your stack, security needs and budget." },
      { title: "Build & Integrate", detail: "Develop the software and, where useful, integrate AI models." },
      { title: "Optimise", detail: "Measure impact, gather feedback and refine continuously." },
    ],
    timeline: "Automations and chatbots often go live in 2–6 weeks; custom software platforms typically take 2–6 months.",
    faqs: [
      {
        q: "What kind of AI solutions can KYK AstroTech build?",
        a: "We build AI chatbots and customer-support assistants trained on your own content, AI features inside web and mobile apps, document and data extraction, smart search, content generation tools and workflow automations powered by large language models.",
      },
      {
        q: "Is my business data safe when using AI?",
        a: "Yes. We use enterprise API tiers from providers that do not train on your data, keep sensitive data on your own infrastructure where required, and apply access controls and encryption throughout.",
      },
      {
        q: "How much does custom software development cost?",
        a: "Small automations and internal tools often start around ₹50,000–₹2,00,000, while larger custom platforms and SaaS products typically range from ₹3,00,000 to ₹25,00,000 or more depending on scope. We quote each project individually after a free discovery call.",
      },
    ],
  },
  {
    slug: "ecommerce-development",
    title: "E-commerce Development",
    heading: "E-commerce Website Development Company",
    short: "Online stores that sell, on any platform",
    summary:
      "We build fast, secure online stores — on Shopify, WooCommerce or fully custom — with payments, shipping, inventory and marketing integrations ready to sell from day one.",
    seoTitle: "E-commerce Website Development Company | KYK AstroTech",
    metaDescription:
      "E-commerce website development on Shopify, WooCommerce or custom builds. Razorpay & Stripe payments, shipping, inventory and SEO — online stores that sell.",
    keywords: [
      "ecommerce website development",
      "ecommerce website development company in India",
      "online store development",
      "shopify website development",
      "woocommerce development",
      "create an online store",
    ],
    serviceType: "E-commerce website development",
    icon: "M3 4h2l2.4 10.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6.2M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm9 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    intro: [
      "Selling online is about more than a product grid. Your store has to load fast, build trust, make checkout painless and show up when shoppers search. We build e-commerce websites designed to convert visitors into paying customers.",
      "We'll recommend the right platform for your stage: Shopify for speed-to-market, WooCommerce for flexibility on WordPress, or a custom headless store when you need full control and performance at scale.",
    ],
    features: [
      "Shopify, WooCommerce & custom stores",
      "Razorpay, Stripe, PayPal & UPI payments",
      "Shipping, GST invoices & inventory",
      "Product catalogue & variant management",
      "Product SEO & Schema markup",
      "WhatsApp, email & abandoned-cart flows",
      "Marketplace & ERP integrations",
      "Speed optimisation & secure checkout",
    ],
    idealFor: [
      "D2C brands launching online",
      "Retailers taking an offline store online",
      "Stores migrating from a slow or limited platform",
      "Businesses selling services, courses or bookings",
    ],
    process: [
      { title: "Plan", detail: "Choose the platform, map the catalogue, payments and shipping." },
      { title: "Design", detail: "A storefront built around your brand and a frictionless checkout." },
      { title: "Build & Integrate", detail: "Products, payments, shipping and marketing tools connected." },
      { title: "Launch & Grow", detail: "Test orders, go live, then optimise conversion and SEO." },
    ],
    timeline: "A Shopify or WooCommerce store usually launches in 3–6 weeks; custom stores take 8–16 weeks.",
    faqs: [
      {
        q: "Which is better for my online store: Shopify or WooCommerce?",
        a: "Shopify is best if you want to launch quickly with minimal maintenance. WooCommerce suits businesses that want more flexibility and already use WordPress. For large catalogues or unique requirements, a custom headless store gives the most control and speed.",
      },
      {
        q: "How much does an e-commerce website cost in India?",
        a: "A Shopify or WooCommerce store in India typically costs ₹75,000–₹2,50,000, while a fully custom e-commerce platform generally ranges from ₹3,00,000 to ₹10,00,000 or more depending on features and integrations.",
      },
      {
        q: "Can you integrate Indian payment gateways and shipping?",
        a: "Yes. We integrate Razorpay, PayU, Cashfree, UPI and cash-on-delivery, plus shipping aggregators such as Shiprocket, and set up GST-compliant invoices.",
      },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    heading: "UI/UX Design Services for Websites & Apps",
    short: "Interfaces people love to use",
    summary:
      "We design clear, beautiful and usable interfaces for websites, mobile apps and software — from user research and wireframes to polished UI and design systems.",
    seoTitle: "UI/UX Design Services for Websites & Apps | KYK AstroTech",
    metaDescription:
      "UI/UX design for websites, mobile apps and SaaS: user research, wireframes, Figma prototypes, UI design and design systems that make products easy to use.",
    keywords: [
      "UI UX design company",
      "UI UX design services",
      "app design services",
      "website design services",
      "figma design agency",
      "product design company",
    ],
    serviceType: "UI/UX design",
    icon: "M12 3a9 9 0 1 0 0 18c.8 0 1.5-.7 1.5-1.5 0-.4-.2-.7-.4-1-.2-.3-.4-.6-.4-1 0-.8.7-1.5 1.5-1.5H16a5 5 0 0 0 5-5c0-4.4-4-8-9-8Zm-5.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm3-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z",
    intro: [
      "Good design isn't decoration — it's what makes users trust your product, find what they need and come back. We design interfaces grounded in how real people think and behave.",
      "Our designers work in Figma and hand off developer-ready files, so design and engineering stay in sync. Because our team also builds what we design, every screen is practical to implement.",
    ],
    features: [
      "User research & competitor analysis",
      "Information architecture & user flows",
      "Wireframes & clickable Figma prototypes",
      "High-fidelity UI for web & mobile",
      "Design systems & component libraries",
      "UX audits of existing products",
      "Accessibility (WCAG) best practices",
      "Developer-ready handoff",
    ],
    idealFor: [
      "Startups designing a new product or MVP",
      "Businesses whose website or app feels confusing",
      "SaaS teams that need a consistent design system",
      "Founders preparing a pitch-ready prototype",
    ],
    process: [
      { title: "Research", detail: "Understand users, goals and competitors." },
      { title: "Structure", detail: "User flows, sitemaps and wireframes." },
      { title: "Design", detail: "Polished visual design and interactive prototypes." },
      { title: "Handoff", detail: "Specs, assets and support through development." },
    ],
    timeline: "A website design typically takes 1–3 weeks; a full app or SaaS product design usually takes 3–8 weeks.",
    faqs: [
      {
        q: "What is the difference between UI and UX design?",
        a: "UX (user experience) design is about how a product works — the structure, flows and ease of completing tasks. UI (user interface) design is about how it looks — layout, typography, colour and visual components. Great products need both.",
      },
      {
        q: "Can you redesign my existing website or app?",
        a: "Yes. We start with a UX audit to identify what is confusing or slowing users down, then redesign the interface while keeping what already works.",
      },
      {
        q: "Which design tools do you use?",
        a: "We design in Figma and deliver interactive prototypes and developer-ready files, so your developers — or ours — can build exactly what was designed.",
      },
    ],
  },
  {
    slug: "it-support-maintenance",
    title: "IT Support & Maintenance",
    heading: "Website & App Maintenance and IT Support",
    short: "Monitoring, updates & fixes so nothing breaks",
    summary:
      "Dependable website maintenance, app maintenance and IT support that keeps your systems secure, fast and running smoothly — with proactive monitoring and priority help when you need it.",
    seoTitle: "Website Maintenance & IT Support Services | KYK AstroTech",
    metaDescription:
      "Website maintenance, app maintenance & IT support: uptime monitoring, security updates, backups, bug fixes and priority helpdesk. Monthly plans from KYK AstroTech.",
    keywords: [
      "website maintenance services",
      "website maintenance company in India",
      "IT support services",
      "app maintenance services",
      "website AMC",
      "IT company for small business",
    ],
    serviceType: "IT support and maintenance",
    icon: "M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    intro: [
      "Websites and apps aren't \"done\" at launch. Plugins go out of date, security threats evolve, servers fill up and small bugs turn into lost customers. Our maintenance plans keep everything secure, fast and working — so you can focus on running your business.",
      "We support websites and apps we built as well as ones built by others. Every plan starts with an audit, then moves to proactive monitoring with clear monthly reporting.",
    ],
    features: [
      "24/7 uptime & performance monitoring",
      "Security updates, patches & malware protection",
      "Daily/weekly backups & disaster recovery",
      "Bug fixes & small content changes",
      "Server, hosting & domain management",
      "Speed and SEO health checks",
      "Helpdesk & priority support",
      "Scalability & growth planning",
    ],
    idealFor: [
      "Businesses without an in-house IT team",
      "Owners of WordPress, Shopify or custom sites",
      "Companies with apps that need regular updates",
      "Anyone who inherited a site from a previous developer",
    ],
    process: [
      { title: "Audit", detail: "Review current systems for security risks and performance gaps." },
      { title: "Stabilise", detail: "Fix urgent issues, harden security and set up backups." },
      { title: "Monitor", detail: "Continuous monitoring with proactive alerts and monthly reports." },
      { title: "Support", detail: "Ongoing helpdesk access whenever you need us." },
    ],
    timeline: "Onboarding and the initial audit take about 1 week; support then continues on a monthly plan.",
    faqs: [
      {
        q: "What is included in website maintenance?",
        a: "Website maintenance typically includes software and plugin updates, security monitoring, regular backups, uptime monitoring, bug fixes, small content changes, speed checks and a monthly report.",
      },
      {
        q: "How much do website maintenance services cost in India?",
        a: "Website maintenance in India typically costs ₹2,000–₹15,000 per month depending on the size of the site, how often it changes and the support level required. Annual maintenance contracts (AMC) are also available.",
      },
      {
        q: "Can you maintain a website that another company built?",
        a: "Yes. We begin with an audit of the existing website or app, fix anything urgent, and then take over ongoing maintenance and support.",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
