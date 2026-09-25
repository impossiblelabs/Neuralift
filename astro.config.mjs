import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Custom domain (public/CNAME), served from the root
  site: 'https://neuralift.fit',
  base: '/',
  trailingSlash: 'ignore',
  vite: { plugins: [tailwindcss()] },
});
