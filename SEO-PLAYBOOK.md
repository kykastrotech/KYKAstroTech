# KYK AstroTech — SEO, AEO & GEO Playbook

Company site: **https://kykastrotech.com** · Product: **https://astroguru.online**

This file explains what was built into the website, and — more importantly — the steps **you** must do
outside the code. Code gets you eligible to rank. Off-site signals (listings, reviews, mentions, content
over time) decide whether Google and AI assistants actually pick you.

- **SEO** = ranking in Google / Bing search results
- **AEO** (Answer Engine Optimisation) = being the answer in featured snippets, Google AI Overviews, voice
- **GEO** (Generative Engine Optimisation) = being named/cited by ChatGPT, Gemini, Claude, Perplexity, Copilot

---

## 1. What's already built into the website

| Area | What was done | File(s) |
|---|---|---|
| Canonical URLs | One URL per page, trailing slash, https, non-www | `astro.config.mjs`, `Layout.astro`, `.htaccess` |
| Meta tags | Keyword titles + descriptions on every page, full Open Graph + Twitter cards | `Layout.astro`, each page |
| Share image | 1200×630 branded image for WhatsApp/LinkedIn/AI previews | `public/og-image.png` |
| Structured data | Organization, WebSite, WebPage, Service, FAQPage, Article, HowTo, BreadcrumbList, ItemList, WebApplication (AstroGuru) — linked in one graph | `src/lib/schema.ts` |
| Sitemap | Auto-generated from data | `/sitemap.xml` |
| robots.txt | All search + ~30 AI crawlers explicitly allowed | `/robots.txt` |
| llms.txt | Clean AI-readable company summary + full reference | `/llms.txt`, `/llms-full.txt` |
| Content | 6 deep service pages, 3 guides, 40+ FAQs, company facts table | `src/data/*`, `src/pages/*` |
| Performance/security | Caching, compression, security headers, 404 page | `.htaccess`, `public/_headers` |

**Everything is data-driven.** Edit `src/data/site.ts`, `services.ts`, `faqs.ts`, `guides.ts` and the
pages, schema, sitemap and llms.txt all update automatically on the next `npm run build`.

---

## 2. Do this first (week 1) — highest impact

### 2.1 Fill in company facts
Open `src/data/site.ts` and fill in: `phone`, `whatsapp`, `foundingDate`, `cin`, `founders`, `address`.
Use **exactly the same** name, phone, email and address everywhere online (this is called NAP consistency).

### 2.2 HTTPS
Make sure SSL is active on the hosting so `https://kykastrotech.com` loads with a padlock.

### 2.3 Build and upload
```
npm install
npm run build
```
Upload the contents of `dist/` (including the hidden `.htaccess`) to the web root.
Then check these load: `/sitemap.xml`, `/robots.txt`, `/llms.txt`, `/services/web-development/`.

### 2.4 Google Search Console — https://search.google.com/search-console
1. Add property → **Domain** → `kykastrotech.com` → verify via DNS TXT record at your domain registrar.
2. Sitemaps → submit `https://kykastrotech.com/sitemap.xml`.
3. URL Inspection → request indexing for the homepage, each service page and each guide.

### 2.5 Bing Webmaster Tools — https://www.bing.com/webmasters
**Critical for AI:** ChatGPT search and Microsoft Copilot rely heavily on Bing's index.
1. Sign in → "Import from Google Search Console" (fastest).
2. Submit the sitemap. Turn on **IndexNow** if offered.

### 2.6 Google Business Profile — https://business.google.com
Create a profile for "KYK AstroTech Private Limited". Category: *Website designer* (primary), plus
*Software company*, *Mobile app developer*. If you don't serve customers at an address, choose
"service-area business" and list your cities/India. Add logo, photos, services, website link.
Ask every client for a Google review.

### 2.7 Validate
- Rich results: https://search.google.com/test/rich-results
- Schema: https://validator.schema.org
- Speed: https://pagespeed.web.dev (aim for 90+ on mobile)

---

## 3. Entity building (weeks 1–4) — how AI assistants learn you exist

LLMs recommend companies they see **consistently described across many trusted sites**. Create or
update these profiles with the same name, description, logo, website and email:

| Platform | Why |
|---|---|
| LinkedIn Company Page | Top trust source; post weekly |
| Clutch.co | Most-cited agency directory in AI answers; get client reviews |
| GoodFirms | Often cited for "top IT companies in India" |
| DesignRush, TechBehemoths, Sortlist | Agency directories AI tools read |
| JustDial, IndiaMART, Sulekha | Indian local/business search |
| Crunchbase | Company entity data |
| Wikidata (wikidata.org) | Feeds Google's Knowledge Graph and LLM training; create an item for the company |
| GitHub org (github.com/kykastrotech) | Tech credibility; pin open-source work |
| Product Hunt | Launch AstroGuru there — links back to both domains |
| Instagram, X/Twitter, YouTube, Facebook | Social proof and extra citations |

**After creating each profile**, add its URL to `extraProfiles` in `src/data/site.ts` — it flows into
the `sameAs` schema, which tells Google "all of these are the same company".

**Use this one-line description everywhere (copy-paste):**
> KYK AstroTech Private Limited is an Indian IT company that designs and develops websites, mobile apps, e-commerce stores and custom AI-powered software for startups and businesses in India and worldwide.

### Link the two domains
On **astroguru.online**, add in the footer: "Built by [KYK AstroTech](https://kykastrotech.com)" and add
Organization schema with `"parentOrganization"` / `"creator"` pointing to kykastrotech.com. This connects
both entities and passes authority from your product to the company.

---

## 4. Keyword map — which page ranks for what

| Page | Primary keywords |
|---|---|
| `/` | website & app development company in India, IT company, software company |
| `/services/web-development/` | website development company (in India), business website development, create a website for my business |
| `/services/mobile-app-development/` | mobile app development company, android / iOS / flutter app development |
| `/services/ai-software-solutions/` | custom software development company, AI development company, AI chatbot development |
| `/services/ecommerce-development/` | ecommerce website development, shopify / woocommerce development |
| `/services/ui-ux-design/` | UI UX design company, app design services |
| `/services/it-support-maintenance/` | website maintenance services, IT support, website AMC |
| `/guides/website-development-cost-india/` | website cost in India, website development cost |
| `/guides/mobile-app-development-cost-india/` | app development cost in India |
| `/guides/how-to-get-a-website-for-your-business/` | I want to create a website, how to create a website for business |

**Realistic expectations:** broad terms like "website development" are dominated by established agencies
with years of backlinks. Win in this order: (1) your brand name, (2) specific questions and long-tail
terms (the guides), (3) city + service terms, (4) broad terms over 6–18 months as authority grows.

---

## 5. Content plan (ongoing) — 2 new guides per month

Each new guide = one file in `src/pages/guides/` + one entry in `src/data/guides.ts`.
Format that gets cited by AI: **quick answer first**, then tables with real numbers, then FAQs.

Suggested next topics:
1. Website vs. mobile app: which does my business need first?
2. Shopify vs. WooCommerce vs. custom store (India, 2026)
3. How much does an AI chatbot cost for a business?
4. How to choose a website development company (checklist)
5. Flutter vs. React Native in 2026
6. Website maintenance checklist for small businesses
7. How to get your business recommended by ChatGPT and Google AI
8. What is an MVP and how much does it cost in India?
9. Website for doctors / clinics — what it needs
10. Website for restaurants / cafés — what it needs
11. Best tech stack for a startup in 2026
12. How long does it take to build an app?

**Case studies** matter more than anything else once you have client work: replace "More case studies,
coming soon" on `/portfolio/` with real projects (problem → solution → result with numbers).

Also: publish your **real starting prices** (e.g. "Business websites from ₹X"). AI assistants strongly
prefer quoting concrete prices from a company's own site.

---

## 6. Monthly checklist

- [ ] Publish 2 guides; update `lastUpdated` in `site.ts`
- [ ] Request 2–3 client reviews (Google + Clutch)
- [ ] 4 LinkedIn posts (link back to guides)
- [ ] Check Search Console → Performance: which queries show you on page 2? Improve those pages
- [ ] Check Search Console → Pages: fix any "not indexed" errors
- [ ] Ask ChatGPT, Gemini, Perplexity, Claude: "best website development company in India for startups", "who is KYK AstroTech" — track whether you appear
- [ ] Earn 2+ backlinks (guest posts, directories, partner sites, startup communities)

---

## 7. Optional code settings

- **Search console verification tags:** paste codes into the commented block in `src/layouts/Layout.astro`.
- **Analytics:** add Google Analytics 4 or Cloudflare Web Analytics; track `/thank-you/` as the conversion page (the contact form now redirects there).
- **Remove a service you don't offer:** delete its entry in `src/data/services.ts` — pages, nav, sitemap and schema update automatically.
