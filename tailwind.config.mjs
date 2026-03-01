/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1c3faa',
          light: '#4a67cb',
          dark: '#11296b',
        },
        secondary: {
          DEFAULT: '#f59e0b',
          light: '#fbbf24',
          dark: '#d97706',
        },
        accent: '#10b981',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

// Note: This project now uses Tailwind via PostCSS / Vite instead of
// the deprecated `@astrojs/tailwind` integration. Keep `content` paths
// up-to-date so Tailwind's JIT sees `.astro` files and other sources.
