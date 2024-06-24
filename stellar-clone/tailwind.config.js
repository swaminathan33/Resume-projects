/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'backgroundColor':'#593556',
        'backgroundColor2':'#A26E9F',
        'textColor':'white',
      },
      animation:{
        'loop-scroll':'loop-scroll 50s linear infinite',
        'blob': 'blob 7s infinite'
      },
      keyframes:{
        'loop-scroll':{
          from:{transform: 'translateX(0)'},
          to: {transform: 'translateX(-100%)'}
        },
        'blob':{
          "0%":{
            transform: "translate(0px, 0px) scale(1)",
          },
          // "33%": {
          //   transform: "translate(30px, -50px) scale(1.1)",
          // },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        }
      }
    },
  },
  plugins: [],
}

