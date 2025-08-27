import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import AstroPWA from '@vite-pwa/astro';

export default defineConfig({
  site: 'https://<your-username>.github.io/ash-above-ash-below', // set correct base if needed
  integrations: [
    tailwind(),
    mdx(),
    AstroPWA({
      registerType: 'autoUpdate',
      injectRegister: null, // We are handling registration manually now
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico,txt,mdx}'],
      },
      includeAssets: ['**/*'],
      manifest: {
        name: 'Ash Above, Ash Below - Playtest Pack',
        short_name: 'AAB Playtest',
        description: 'SRD, tools, and character sheet for the Ash Above, Ash Below TTRPG.',
        theme_color: '#1f1f26',
        background_color: '#f6f6f7',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: '/icons/icon-192x192.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
          },
          {
            src: '/icons/icon-512x512.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
          {
            src: '/icons/icon-512x512.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable',
          }
        ]
      }
    })
  ],
  vite: {
    server: { port: 4321 }
  }
});
