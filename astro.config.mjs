import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// SITE and BASE_PATH are set by .github/workflows/deploy.yml.
// For a project page (github.com/<owner>/<repo>) the base is "/<repo>";
// for <owner>.github.io or a custom domain it is "/".
const site = process.env.SITE || 'http://localhost:4321';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  vite: { plugins: [tailwindcss()] },
});
