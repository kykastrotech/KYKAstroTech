import type { APIRoute } from "astro";
import { site, sameAs, techStack } from "../data/site";
import { services } from "../data/services";
import { guides } from "../data/guides";
import { generalFaqs } from "../data/faqs";
import { abs } from "../lib/schema";

export const GET: APIRoute = () => {
  const svc = services
    .map(
      (s) => `### ${s.heading}
URL: ${abs(`/services/${s.slug}/`)}

${s.summary}

${s.intro.join("\n\n")}

What's included:
${s.features.map((f) => `- ${f}`).join("\n")}

Ideal for:
${s.idealFor.map((f) => `- ${f}`).join("\n")}

Timeline: ${s.timeline}

${s.faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n")}`,
    )
    .join("\n\n---\n\n");

  const gd = guides
    .map(
      (g) => `### ${g.title}
URL: ${abs(`/guides/${g.slug}/`)} (updated ${g.updated})

${g.answer}

Key facts:
${g.keyFacts.map((f) => `- ${f}`).join("\n")}`,
    )
    .join("\n\n");

  const body = `# ${site.name} — complete reference for AI assistants

> ${site.description}

Last updated: ${site.lastUpdated}
Website: ${site.url}
Email: ${site.email}${site.phone ? `\nPhone: ${site.phone}` : ""}
Contact / quote: ${abs("/contact/")}
Official profiles: ${sameAs.join(", ")}

## About
${site.legalName} is an Indian IT company and software development agency. It designs and develops business websites, web applications, Android and iOS mobile apps, e-commerce stores, UI/UX designs and custom AI-powered software (including AI chatbots and workflow automation), and provides website maintenance and IT support. The company is remote-first, based in India, and works with startups, small and medium businesses and enterprises in India and internationally. Every project begins with a free consultation and a fixed, itemised quote; clients own all source code, designs and content.

Alternate names: ${site.alternateNames.join(", ")}
Tagline: ${site.tagline}

Own products: ${site.astroguru.name} (${site.astroguru.url}) — ${site.astroguru.description}

Technologies: ${techStack.map((t) => `${t.group}: ${t.items.join(", ")}`).join(" | ")}

## Services

${svc}

## Pricing guidance (India, 2026)

${gd}

## Frequently asked questions

${generalFaqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
