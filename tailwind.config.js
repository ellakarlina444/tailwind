/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./dist/*.{html,js}'],
  content: ['./dist/*.{html,js}'],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px',
    },
    extend: {
      fontFamily:{
        sans:['Josefin','Sans,sans-serif'],
        alata:['Alata'],
      },
      letterSpacing:{
        widest:'.3em' //0.3em
      }
    },
  },
  plugins: [],
}

