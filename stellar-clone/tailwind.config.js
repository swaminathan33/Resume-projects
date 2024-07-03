import { transform } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'backgroundColor':'#2C2C54',
        'backgroundColor2':'#474787',
        'textColor':'white',
      },
      animation:{
        'loop-scroll':'loop-scroll 50s linear infinite',
        'blob': 'blob 7s infinite',
        'bg':'bg 100s infinite'
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
        },
        'bg':{
          '0%': {
            // transform: 'scale(1)'
            backgroundPosition:'0 0'
          },
          '50%':{
            // transform: 'scale(1.2)'
            backgroundPosition:'0 80%'
          },
          '100%':{
            // transform: 'scale(1)'
            backgroundPosition:'0 0'
          }
        }
      }
    },
  },
  plugins: [],
}

