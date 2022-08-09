module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      height: {
        'half-screen': '50vh',
      },
      colors: {
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        grayishwhite: ['#ecf0f3'],
        greenDark: ['#29c51f'],
        brownDark: ['#B6B6B6'],
        blueDark: ['#3644c9'],
        redDark: ['#ea2424'],
        orangeDark: ['#fa5624'],
        purpleDark: ['#762ad9'],
      },
      fontFamily: {
        helvetica: ['Helvetica Neue'],
        coolvetica: ['Coolvetica'],
      },
    },
  },
  plugins: [],
};
