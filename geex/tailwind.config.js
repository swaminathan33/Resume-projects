/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'home-bg':'#f3f2f7',
        'nav-bg':'#f9f9fb',
        'customise-btn':'#ECEAF3',
      }
    },
  },
  plugins: [],
}

