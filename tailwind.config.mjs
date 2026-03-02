/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#BE8C63', // Warm gold/caramel
          light: '#DEBA98',
          dark: '#93633E',
        },
        secondary: {
          DEFAULT: '#3B2F2F', // Espresso
          light: '#5B4B4B',
          dark: '#1F1717',
        },
        accent: '#E6A360',
        coffee: {
          50: '#FDFBF7',
          100: '#F4ECE1',
          200: '#EBD9C7',
          800: '#2A2421',
          900: '#1A1614',
          950: '#110E0D',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'noise': "url('https://grainy-gradients.vercel.app/noise.svg')",
      }
    },
  },
  plugins: [],
};

// Note: This project now uses Tailwind via PostCSS / Vite instead of
// the deprecated `@astrojs/tailwind` integration. Keep `content` paths
// up-to-date so Tailwind's JIT sees `.astro` files and other sources.
