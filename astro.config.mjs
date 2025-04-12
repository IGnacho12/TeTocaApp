import { defineConfig } from 'astro/config';
import AstroPWA from '@vite-pwa/astro';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [AstroPWA()],

  vite: {
    plugins: [tailwindcss()],
  },
});

