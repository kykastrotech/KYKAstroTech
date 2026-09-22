export type Service = {
  slug: string;
  title: string;
  short: string;
  summary: string;
  icon: string;
  features: string[];
  process: { title: string; detail: string }[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    short: "Fast, scalable websites & web apps",
    summary:
      "We design and build modern, high-performance websites and web applications tailored to your business — from marketing sites to custom internal tools.",
    icon: "M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm0 4h16M8 4v4",
    features: [
      "Custom websites & landing pages",
      "Web applications & dashboards",
      "E-commerce storefronts",
      "API integrations & backend services",
      "Performance & SEO optimization",
      "Ongoing support & maintenance",
    ],
    process: [
      { title: "Discover", detail: "We map your goals, users, and technical requirements." },
      { title: "Design", detail: "Wireframes and UI design aligned with your brand." },
      { title: "Build", detail: "Clean, modern code with performance baked in from day one." },
      { title: "Launch & Support", detail: "Deployment, monitoring, and continued iteration." },
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    short: "Native & cross-platform Android/iOS apps",
    summary:
      "We build reliable, smooth mobile experiences for Android and iOS — from MVPs to full-featured products — using modern cross-platform frameworks.",
    icon: "M8 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm4 15h.01",
    features: [
      "Cross-platform apps (iOS & Android)",
      "Native performance & UX",
      "App Store & Play Store deployment",
      "Push notifications & offline support",
      "Third-party & payment integrations",
      "Post-launch monitoring & updates",
    ],
    process: [
      { title: "Scope", detail: "Define core flows, platforms, and success metrics." },
      { title: "Prototype", detail: "Clickable prototypes to validate UX early." },
      { title: "Develop", detail: "Iterative builds with regular test releases." },
      { title: "Ship & Grow", detail: "Store launch, analytics, and version updates." },
    ],
  },
  {
    slug: "ai-software-solutions",
    title: "AI & Software Solutions",
    short: "Custom software, automation & AI integrations",
    summary:
      "We turn ideas into powerful digital solutions — custom software, workflow automation, and practical AI integrations that drive measurable growth.",
    icon: "M12 2a5 5 0 0 0-5 5v1a4 4 0 0 0-2 3.46V15a4 4 0 0 0 4 4h1a3 3 0 0 0 6 0h1a4 4 0 0 0 4-4v-3.54A4 4 0 0 0 17 8V7a5 5 0 0 0-5-5Z",
    features: [
      "Custom software & internal tools",
      "AI-powered features & chatbots",
      "Workflow & business process automation",
      "Data pipelines & dashboards",
      "Legacy system modernization",
      "Cloud architecture & deployment",
    ],
    process: [
      { title: "Assess", detail: "Audit workflows to find where automation pays off." },
      { title: "Architect", detail: "Design a solution that fits your stack and budget." },
      { title: "Build & Train", detail: "Develop and, where useful, integrate AI models." },
      { title: "Optimize", detail: "Measure impact and refine continuously." },
    ],
  },
  {
    slug: "it-support-maintenance",
    title: "IT Support & Maintenance",
    short: "Reliable support so nothing breaks",
    summary:
      "Seamless, dependable IT support and maintenance that keeps your systems, websites, and applications running smoothly around the clock.",
    icon: "M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    features: [
      "Uptime & performance monitoring",
      "Bug fixes & security patching",
      "Server & infrastructure management",
      "Scheduled backups & recovery plans",
      "Helpdesk & priority support",
      "Scalability & growth planning",
    ],
    process: [
      { title: "Audit", detail: "Review current systems for risks and gaps." },
      { title: "Stabilize", detail: "Fix urgent issues and harden security." },
      { title: "Monitor", detail: "Continuous monitoring with proactive alerts." },
      { title: "Support", detail: "Ongoing helpdesk access whenever you need us." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
