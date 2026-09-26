// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Production URL — used for canonical URLs, sitemap, Open Graph and JSON-LD.
  // Keep in sync with `url` in src/data/site.ts.
  site: 'https://kykastrotech.com',
  // Every page is served as /page/ — one URL per page, no redirect hops, no duplicates.
  trailingSlash: 'always',
  build: {
    format: 'directory',
    // Inline small CSS to cut a render-blocking request (better Core Web Vitals).
    inlineStylesheets: 'auto',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
