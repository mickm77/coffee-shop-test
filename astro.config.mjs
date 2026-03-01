import { defineConfig } from 'astro/config';
export default defineConfig({
  output: 'static',
  adapter: undefined,
  // Use PostCSS (postcss.config.cjs) to load Tailwind instead of the deprecated
  // `@astrojs/tailwind` integration. See Astro Styles and CSS guide for details.
  integrations: [],
});
