import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://cliffbarbershop.com',
  integrations: [
    sitemap(),
    tailwind()
  ],
  output: 'static',
  adapter: cloudflare()
});
