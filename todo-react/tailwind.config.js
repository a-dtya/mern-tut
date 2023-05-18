/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        space: ['Space Grotesk','sans-serif']
      }
    },
    screens:{
      'sm': '320px',
      'md': '640px',
      'lg': '1024px',
      'xl': '1280px'
    }
  },
  plugins: [],
}

