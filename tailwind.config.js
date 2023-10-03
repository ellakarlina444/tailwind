/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./dist/*.{html,js}'],
  content: ['./dist/*.{html,js}'],
  darkMode:'class',
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px',
    },
    extend: {
      fontFamily:{
        sans:['Josefin','Sans','sans-serif','Poppins','Raleway'],
        alata:['Alata'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      backgroundImage: (theme) => ({
        'logo-dark-mode': "url('../src/images/fylo/logo-dark-mode.svg')",
        'logo-light-mode': "url('../src/images/fylo/logo-light-mode.svg')",
        'curvy-dark-mode': "url('../src/images/fylo/bg-curvy-dark-mode.svg')",
        'curvy-light-mode': "url('../src/images/fylo/bg-curvy-light-mode.svg')",
      }),
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
        darkBlue: 'hsl(217, 28%, 15%)',
        darkBlue1: 'hsl(218, 28%, 13%)',
        darkBlue2: 'hsl(216, 53%, 9%)',
        darkBlue3: 'hsl(219, 30%, 18%)',
        accentCyan: 'hsl(176, 68%, 64%)',
        accentBlue: 'hsl(198, 60%, 50%)',
        lightRed: 'hsl(0, 100%, 63%)',
      },
      spacing: {
        180: '32rem',
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}

