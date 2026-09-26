import { services } from "../data/services";
import { guides } from "../data/guides";
import { site } from "../data/site";

export type Route = { path: string; title: string; priority: number; changefreq: string; lastmod: string };

/** Every indexable URL on the site. Used by sitemap.xml and llms.txt. Add new pages here. */
export function allRoutes(): Route[] {
  const d = site.lastUpdated;
  return [
    { path: "/", title: "Home", priority: 1.0, changefreq: "weekly", lastmod: d },
    { path: "/services/", title: "Services", priority: 0.9, changefreq: "monthly", lastmod: d },
    ...services.map((s) => ({ path: `/services/${s.slug}/`, title: s.heading, priority: 0.9, changefreq: "monthly", lastmod: d })),
    { path: "/guides/", title: "Guides", priority: 0.7, changefreq: "weekly", lastmod: d },
    ...guides.map((g) => ({ path: `/guides/${g.slug}/`, title: g.title, priority: 0.8, changefreq: "monthly", lastmod: g.updated })),
    { path: "/about/", title: "About", priority: 0.7, changefreq: "monthly", lastmod: d },
    { path: "/portfolio/", title: "Portfolio", priority: 0.7, changefreq: "monthly", lastmod: d },
    { path: "/faq/", title: "FAQ", priority: 0.7, changefreq: "monthly", lastmod: d },
    { path: "/contact/", title: "Contact", priority: 0.8, changefreq: "yearly", lastmod: d },
    { path: "/careers/", title: "Careers", priority: 0.4, changefreq: "monthly", lastmod: d },
  ];
}
