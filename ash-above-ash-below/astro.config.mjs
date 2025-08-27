import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://<your-username>.github.io/ash-above-ash-below', // set correct base if needed
  integrations: [tailwind(), mdx()],
  vite: {
    server: { port: 4321 }
  }
});
