/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
            '': "url('/img/hero-pattern.svg')",
          },
          boxShadow: {
            '3xl': '0 1px 30px rgba(80, 63, 205, 0.5)',
          }
    },
    fontFamily: {
        'satoshi': 'Satoshi',
        'inter': 'Inter',
      }
  },
  plugins: [],
}