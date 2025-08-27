/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,md,mdx,js,ts}'],
  theme: {
    extend: {
      colors: {
        ash: {
          50: '#f6f6f7', 100: '#e7e7ea', 200: '#cfcfd6', 300: '#b0b0bb', 400: '#8f8f9c', 500: '#737381',
          600: '#5c5c68', 700: '#484854', 800: '#32323c', 900: '#1f1f26'
        }
      }
    }
  },
  plugins: []
};
