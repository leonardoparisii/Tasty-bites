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
            'md': '5px 5px 5px 0 rgba(0, 00, 00, 0.25)',
            'white-md': '0px 0px 10px 2px gray'
          },
    },
    fontFamily: {
        'satoshi': 'Satoshi',
        'sans': 'sans-serif',
        'inter': 'Inter',
      },
      screens: {
        'sm': '730px',
        'md': '860px',
        'lg': '1024px',
        'landing-br': '1160px',
        'xl': '1280px',
        
    },
  },
  plugins: [],
}