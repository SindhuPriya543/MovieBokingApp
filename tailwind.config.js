/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width:{
        '3/10':'30%',
        '7/10' : '70%'
      }
    },
  },
  plugins: [],
}

