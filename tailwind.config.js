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
        sans:['Josefin','Sans','sans-serif','Poppins'],
        alata:['Alata'],
      },
      letterSpacing:{
        widest:'.3em' //0.3em
      },
      colors: {
        cyan: 'hsl(180, 66%, 49%)',
        cyanLight: 'hsl(180, 66%, 69%)',
        darkViolet: 'hsl(257, 27%, 26%)',
        red: 'hsl(0, 87%, 67%)',
        grayishViolet: 'hsl(257, 7%, 63%)',
        veryDarkBlue: 'hsl(255, 11%, 22%)',
        veryDarkViolet: 'hsl(260, 8%, 14%) ',
      },
      spacing: {
        180: '32rem',
      },
    },
  },
  plugins: [],
}

