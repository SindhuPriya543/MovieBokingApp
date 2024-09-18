/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width:{
        '3/10':'30%',
        '7/10' : '70%',
        '5/10' : '50%'
      },
      height :{
        '4/10' :'40%'
      },
      fontFamily :{
        roboto : ['Roboto','sans-serif']
      }
    },
  },
  plugins: [],
}

