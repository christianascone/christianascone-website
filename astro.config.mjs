import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com/',
  integrations: [mdx({
    extendMarkdownConfig: false,
    smartypants: true,
    gfm: true
  }), sitemap(), tailwind(), react()]
});