# KYK AstroTech — Website

Company website for **KYK AstroTech Pvt Ltd**, built with [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com). Fully static — zero JavaScript framework, zero server, zero database — so it's free to host and fast to load.

## Pages

Home · About · Services · Web Development · Mobile App Development · AI & Software Solutions · IT Support & Maintenance · Portfolio · Careers · Contact

Services live in one data file — [src/data/services.ts](src/data/services.ts) — and `src/pages/services/[slug].astro` generates a static page per service automatically. Company info (email, social links) lives in [src/data/site.ts](src/data/site.ts).

## SEO, AEO & GEO

The site is fully optimised for Google, Bing and AI assistants (ChatGPT, Gemini, Claude, Perplexity).
See **[SEO-PLAYBOOK.md](SEO-PLAYBOOK.md)** for what's built in and the off-site steps to rank.

Company facts live in `src/data/site.ts`, services in `src/data/services.ts`, FAQs in `src/data/faqs.ts`,
guides in `src/data/guides.ts` + `src/pages/guides/`. Sitemap, robots.txt, llms.txt and all structured
data are generated from these files at build time.

## Commands

| Command           | Action                                       |
| ------------------ | --------------------------------------------- |
| `npm install`       | Install dependencies                          |
| `npm run dev`       | Start local dev server at `localhost:4321`    |
| `npm run build`     | Build the static site to `./dist/`            |
| `npm run preview`   | Preview the production build locally          |

## Before going live

1. **Contact form** — the form on `/contact` posts to [Web3Forms](https://web3forms.com) (free, no backend needed). Get a free access key there and paste it into the `access_key` hidden field in [src/pages/contact.astro](src/pages/contact.astro). Until you do, the "Email us directly" link on that page still works.
2. **Domain / URL** — `https://kykastrotech.com` is set in both `src/data/site.ts` and `astro.config.mjs`; keep them in sync.
3. **Favicon / logo** — `public/images/logo-mark.png` and `public/favicon-kyk.png` were cropped from your original logo for small sizes. `public/images/logo.jpg` is the full original, kept for reference/larger use.

## Deploy for free

This builds to plain static files (`npm run build` → `dist/`), so any static host works at $0/month:

- **Cloudflare Pages** (recommended — fastest global CDN): connect this repo, build command `npm run build`, output directory `dist`.
- **Netlify** or **Vercel**: same build command/output directory, both have generous free tiers for static sites.

No server, database, or paid plan required to run this site.
"# KYK" 
"# KYKAstroTech" 
