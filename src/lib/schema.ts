/**
 * Schema.org JSON-LD builders.
 * Structured data tells Google, Bing and AI systems exactly WHO the company is, WHAT it offers
 * and HOW pages relate — it's the backbone of "entity SEO" and helps get cited by AI answers.
 * All nodes are linked by stable @id values and emitted as one @graph per page.
 */
import { site, sameAs, knowsAbout } from "../data/site";
import { services, type FAQ, type Service } from "../data/services";

export const abs = (path = "/") => new URL(path, site.url).href;

export const ids = {
  org: abs("/#organization"),
  website: abs("/#website"),
  logo: abs("/#logo"),
  astroguru: abs("/portfolio/#astroguru"),
};

const hasAddress = Boolean(site.address.addressLocality);

export function organization() {
  const node: Record<string, unknown> = {
    "@type": hasAddress ? ["Organization", "ProfessionalService"] : "Organization",
    "@id": ids.org,
    name: site.name,
    legalName: site.legalName,
    alternateName: site.alternateNames,
    url: abs("/"),
    email: site.email,
    description: site.description,
    slogan: site.tagline,
    logo: {
      "@type": "ImageObject",
      "@id": ids.logo,
      url: abs("/images/logo.jpg"),
      width: 1254,
      height: 1254,
      caption: site.name,
    },
    image: { "@id": ids.logo },
    sameAs,
    knowsAbout,
    knowsLanguage: ["en", "hi"],
    areaServed: site.areaServed.map((name) => (name === "Worldwide" ? { "@type": "Place", name } : { "@type": "Country", name })),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: site.email,
        ...(site.phone ? { telephone: site.phone } : {}),
        availableLanguage: ["English", "Hindi"],
        areaServed: "Worldwide",
        url: abs("/contact/"),
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software development services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@id": abs(`/services/${s.slug}/#service`) },
      })),
    },
    owns: { "@id": ids.astroguru },
  };
  if (site.phone) node.telephone = site.phone;
  if (site.foundingDate) node.foundingDate = site.foundingDate;
  if (site.cin) node.identifier = { "@type": "PropertyValue", propertyID: "CIN", value: site.cin };
  if (site.founders.length) node.founder = site.founders.map((name) => ({ "@type": "Person", name }));
  node.address = hasAddress
    ? { "@type": "PostalAddress", ...site.address }
    : { "@type": "PostalAddress", addressCountry: "IN" };
  if (hasAddress) node.priceRange = "₹₹";
  return node;
}

export function website() {
  return {
    "@type": "WebSite",
    "@id": ids.website,
    url: abs("/"),
    name: site.name,
    alternateName: site.alternateNames,
    description: site.description,
    publisher: { "@id": ids.org },
    inLanguage: "en-IN",
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumb(path: string, crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": abs(`${path}#breadcrumb`),
    itemListElement: [{ name: "Home", path: "/" }, ...crumbs].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  };
}

export function webPage(opts: {
  path: string;
  title: string;
  description: string;
  type?: string;
  hasBreadcrumb: boolean;
  image: string;
  dateModified?: string;
  datePublished?: string;
}) {
  return {
    "@type": opts.type ?? "WebPage",
    "@id": abs(`${opts.path}#webpage`),
    url: abs(opts.path),
    name: opts.title,
    description: opts.description,
    isPartOf: { "@id": ids.website },
    about: { "@id": ids.org },
    publisher: { "@id": ids.org },
    inLanguage: "en-IN",
    primaryImageOfPage: { "@type": "ImageObject", url: opts.image },
    ...(opts.datePublished ? { datePublished: opts.datePublished } : {}),
    ...(opts.dateModified ? { dateModified: opts.dateModified } : {}),
    ...(opts.hasBreadcrumb ? { breadcrumb: { "@id": abs(`${opts.path}#breadcrumb`) } } : {}),
  };
}

export function faqPage(path: string, faqs: FAQ[]) {
  return {
    "@type": "FAQPage",
    "@id": abs(`${path}#faq`),
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceNode(s: Service) {
  return {
    "@type": "Service",
    "@id": abs(`/services/${s.slug}/#service`),
    name: s.heading,
    alternateName: s.title,
    serviceType: s.serviceType,
    description: s.summary,
    url: abs(`/services/${s.slug}/`),
    provider: { "@id": ids.org },
    brand: { "@id": ids.org },
    areaServed: site.areaServed.map((name) => ({ "@type": name === "Worldwide" ? "Place" : "Country", name })),
    audience: { "@type": "BusinessAudience", audienceType: "Startups, small and medium businesses, enterprises" },
    keywords: s.keywords.join(", "),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${s.title} — what's included`,
      itemListElement: s.features.map((f) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: f },
      })),
    },
  };
}

export function article(opts: {
  path: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  image: string;
}) {
  return {
    "@type": "Article",
    "@id": abs(`${opts.path}#article`),
    headline: opts.headline,
    description: opts.description,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    author: { "@id": ids.org },
    publisher: { "@id": ids.org },
    mainEntityOfPage: { "@id": abs(`${opts.path}#webpage`) },
    image: opts.image,
    inLanguage: "en-IN",
    isAccessibleForFree: true,
  };
}

export function astroguruNode() {
  return {
    "@type": "WebApplication",
    "@id": ids.astroguru,
    name: site.astroguru.name,
    url: site.astroguru.url,
    description: site.astroguru.description,
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Web",
    creator: { "@id": ids.org },
    publisher: { "@id": ids.org },
  };
}
