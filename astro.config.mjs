import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // GitHub Pages: https://anzaniy.github.io/MyPortofolio
  site: 'https://anzaniy.github.io',
  base: '/MyPortofolio',
  integrations: [
    mdx(),
    sitemap({
      // Demo blog tetap disimpan, tetapi tidak diiklankan ke mesin pencari.
      filter: (page) => !page.includes('/blog'),
    }),
    tailwind(),
  ],
});