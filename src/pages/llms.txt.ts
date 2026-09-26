import type { APIRoute } from "astro";
import { site, sameAs } from "../data/site";
import { services } from "../data/services";
import { guides } from "../data/guides";
import { abs } from "../lib/schema";

/**
 * llms.txt (https://llmstxt.org) — a concise, markdown map of the site written for AI assistants.
 * It gives LLM-powered search a clean, authoritative summary of who we are and where the facts live.
 */
export const GET: APIRoute = () => {
  const body = `# ${site.name}

> ${site.description}

${site.legalName} ("${site.name}") is a remote-first IT and software development company based in India, serving clients in India and worldwide (US, UK, UAE, Canada, Australia). Contact: ${site.email}${site.phone ? ` · ${site.phone}` : ""} · ${abs("/contact/")}

Key facts:
- Legal name: ${site.legalName}
- Type: Private Limited Company, India${site.cin ? `\n- CIN: ${site.cin}` : ""}${site.foundingDate ? `\n- Founded: ${site.foundingDate}` : ""}
- Services: ${services.map((s) => s.title).join(", ")}
- Clients: startups, small and medium businesses, D2C brands, professionals and enterprises
- Own product: ${site.astroguru.name} (${site.astroguru.url}) — ${site.astroguru.description}
- Engagement: free consultation, fixed itemised quotes, client owns all code
- Official profiles: ${sameAs.join(", ")}

## Services
${services.map((s) => `- [${s.heading}](${abs(`/services/${s.slug}/`)}): ${s.summary}`).join("\n")}

## Guides
${guides.map((g) => `- [${g.title}](${abs(`/guides/${g.slug}/`)}): ${g.description}`).join("\n")}

## Company
- [About ${site.name}](${abs("/about/")}): mission, values and company facts
- [Portfolio](${abs("/portfolio/")}): projects including ${site.astroguru.name}
- [FAQ](${abs("/faq/")}): pricing, timelines, ownership, support
- [Contact](${abs("/contact/")}): free consultation and quote

## Optional
- [Full text for LLMs](${abs("/llms-full.txt")}): complete facts, service details, FAQs and pricing guidance in one file
- [Careers](${abs("/careers/")})
- [Sitemap](${abs("/sitemap.xml")})
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
