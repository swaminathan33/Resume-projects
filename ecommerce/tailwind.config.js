/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-bg': "url('./src/Assets/bg2.jpg')",
        'hero-bed':"url('./src/Assets/carousel/bedroom.jpg')"
      },
      backgroundColor:{
        'hero-color':'#264d51'
      }
    },
  },
  plugins: [],
}

