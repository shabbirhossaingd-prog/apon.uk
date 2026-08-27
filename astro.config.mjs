import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://apon.uk',
  integrations: [sitemap()],
  output: 'static'
});
