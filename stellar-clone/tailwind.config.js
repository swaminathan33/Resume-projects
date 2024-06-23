/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'backgroundColor':'#151933',
        // 'textColor':'#9d9db2'
        'textColor':'white',
      },
      animation:{
        'loop-scroll':'loop-scroll 50s linear infinite'
      },
      keyframes:{
        'loop-scroll':{
          from:{transform: 'translateX(0)'},
          to: {transform: 'translateX(-100%)'}
        }
      }
    },
  },
  plugins: [],
}

