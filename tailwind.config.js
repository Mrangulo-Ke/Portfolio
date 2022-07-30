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
      },
    },
  },
  plugins: [],
};
