/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        'extra-loose': '3rem'
      },
      spacing:{
        '128': '32rem',
        '136': '36rem',
        'M1' : '48rem',
        'M2' : '64rem',
      },
      transitionProperty: {
        'width': 'width',
        'height': 'height'
      },
      colors: {
        "darker-color": "var(--darker-color)",
        "dark-color": "var(--dark-color)",
        "green-color": "var(--green-color)",
        "brighter-green-color": "var(--brighter-green-color)"
      }
    },
  },
  plugins: [],
}