import type { APIRoute } from "astro";
import { abs } from "../lib/schema";

/**
 * We WANT to be read by search engines AND AI assistants — that's how a business
 * gets recommended in ChatGPT, Gemini, Claude, Perplexity, Copilot and Google AI Overviews.
 * Each AI crawler is allowed explicitly so a future blanket rule can't accidentally block it.
 */
const aiAndSearchBots = [
  // OpenAI (ChatGPT search, browsing, training)
  "OAI-SearchBot", "ChatGPT-User", "GPTBot",
  // Anthropic (Claude)
  "Claude-SearchBot", "Claude-User", "ClaudeBot", "anthropic-ai",
  // Perplexity
  "PerplexityBot", "Perplexity-User",
  // Google (Search, Gemini & AI Overviews)
  "Googlebot", "Google-Extended", "GoogleOther",
  // Microsoft (Bing, Copilot — also powers ChatGPT's web results)
  "Bingbot", "msnbot",
  // Apple (Siri, Spotlight, Apple Intelligence)
  "Applebot", "Applebot-Extended",
  // Others
  "DuckDuckBot", "DuckAssistBot", "Amazonbot", "meta-externalagent", "FacebookBot",
  "cohere-ai", "MistralAI-User", "YouBot", "CCBot", "Diffbot", "YandexBot",
  "LinkedInBot", "Twitterbot", "facebookexternalhit", "WhatsApp", "Slackbot",
];

export const GET: APIRoute = () => {
  const botRules = aiAndSearchBots.map((b) => `User-agent: ${b}\nAllow: /`).join("\n\n");
  const body = `# robots.txt for kykastrotech.com
# KYK AstroTech Private Limited — search engines and AI assistants are welcome.

User-agent: *
Allow: /
Disallow: /thank-you/

${botRules}

Sitemap: ${abs("/sitemap.xml")}

# AI-readable summary of this site: ${abs("/llms.txt")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
