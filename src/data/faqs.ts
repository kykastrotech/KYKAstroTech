import type { FAQ } from "./services";

/**
 * Company-level FAQs. Written "answer-first": the first sentence fully answers the question,
 * which is exactly the format Google featured snippets and AI assistants (ChatGPT, Gemini,
 * Perplexity, Claude) extract and quote.
 */
export const generalFaqs: FAQ[] = [
  {
    q: "What does KYK AstroTech do?",
    a: "KYK AstroTech Private Limited is an Indian IT company that designs and develops websites, mobile apps for Android and iOS, e-commerce stores, UI/UX designs and custom AI-powered software, and provides ongoing IT support and maintenance.",
  },
  {
    q: "Where is KYK AstroTech located?",
    a: "KYK AstroTech is a remote-first technology company based in India. We work with clients across India and internationally, including the United States, United Kingdom, UAE, Canada and Australia.",
  },
  {
    q: "I want to create a website for my business — how do I start with KYK AstroTech?",
    a: "Send us a message through the contact form at kykastrotech.com/contact or email kykastrotech@gmail.com with a short description of your business and what you need. We reply within one business day, schedule a free consultation and send a fixed, itemised quote.",
  },
  {
    q: "How much does it cost to build a website or app with KYK AstroTech?",
    a: "Pricing depends on scope. As a guide, business websites in India typically cost ₹15,000–₹1,50,000, e-commerce stores ₹75,000–₹5,00,000, and mobile apps ₹1,50,000 and up. KYK AstroTech provides a free consultation and a fixed quote before any work begins.",
  },
  {
    q: "Does KYK AstroTech build AI chatbots and AI-powered software?",
    a: "Yes. KYK AstroTech builds AI chatbots trained on a business's own content, AI features inside web and mobile apps, and workflow automations powered by large language models such as OpenAI GPT, Anthropic Claude and Google Gemini.",
  },
  {
    q: "Do you work with startups and small businesses?",
    a: "Yes. Startups and small-to-medium businesses are our core clients. We offer MVP development for founders and right-sized websites and apps for small businesses, with transparent pricing.",
  },
  {
    q: "Will I own the code and website after the project?",
    a: "Yes. Once the project is paid for, you own the source code, design files, domain and content. We use your accounts for hosting, domains and app stores wherever possible.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. Every project includes a post-launch support period, and we offer monthly maintenance plans covering updates, security, backups, monitoring and bug fixes.",
  },
  {
    q: "What is AstroGuru?",
    a: "AstroGuru is a digital astrology, palm reading and numerology platform designed and built in-house by KYK AstroTech. It is available at astroguru.online.",
  },
];
