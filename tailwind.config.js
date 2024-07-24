/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3f3f3f',
        'secondary': '#ffdd40',
        'textBlack': '#ffffff',
        'backgrounColor': '#181818',
      },
      fontFamily: {
        'jd': ["roboto"],
      },

      keyframes: {
        bounce: {
          from : {
            width : '0%'
          },
          to : {
            width : '100%'
          }
      },

      animation: {
        'bounce-slow': 'bounce 3s ease',
      },
    },
  },
  plugins: [],
}}