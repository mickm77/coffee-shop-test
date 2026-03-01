Migration notes — Tailwind in this Astro project

What changed
- Removed the deprecated `@astrojs/tailwind` Astro integration.
- Tailwind is loaded through PostCSS (`postcss.config.cjs`) and Vite (Astro's dev server).

Why
- `@astrojs/tailwind` is deprecated. Tailwind's Vite/PostCSS setup is the recommended approach for Tailwind CSS v4+.

Quick verification steps
1. Install updated dev dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. If you don't see Tailwind styles, ensure `src/styles.css` (or your global CSS) imports the Tailwind layers, e.g.:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Files touched
- `astro.config.mjs`: removed `@astrojs/tailwind` integration
- `package.json`: removed `@astrojs/tailwind`, bumped `tailwindcss` to `^4.0.0`
- `tailwind.config.mjs`: added note about migration

Optional next steps
- Add a `src/styles.css` file that includes the Tailwind directives and import it from `src/layouts/BaseLayout.astro`.
- Configure `postcss`/`tailwind.config.mjs` further for JIT safelisting or content paths if you add new file types.
