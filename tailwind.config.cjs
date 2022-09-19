/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'serif'],
      },
      backgroundImage: {
        borderColor: ['focus-visible', 'first'],
      },
      colors: {
        dark: '#181818',
        secondary: '#212121',
        blue: {
          50: '#7bbcff',
          100: '#71b2ff',
          200: '#67a8ff',
          300: '#5d9eff',
          400: '#5394ff',
          500: '#498afb',
          600: '#3f80f1',
          700: '#3576e7',
          800: '#2b6cdd',
          900: '#2162d3',
        },
        green: {
          50: '#3bf5a4',
          100: '#31eb9a',
          200: '#27e190',
          300: '#1dd786',
          400: '#13cd7c',
          500: '#09c372',
          600: '#00b968',
          700: '#00af5e',
          800: '#00a554',
          900: '#009b4a',
        },
        orange: {
          50: '#ffd7d7',
          100: '#ffcdcd',
          200: '#ffc3c3',
          300: '#ffb9b9',
          400: '#ffafaf',
          500: '#fca5a5',
          600: '#f29b9b',
          700: '#e89191',
          800: '#de8787',
          900: '#d47d7d',
        },
        red: {
          50: '#ff6a92',
          100: '#ff6088',
          200: '#ff567e',
          300: '#ff4c74',
          400: '#ff426a',
          500: '#ff3860',
          600: '#f52e56',
          700: '#eb244c',
          800: '#e11a42',
          900: '#d71038',
        },
        purple: {
          50: '#c398fe',
          100: '#b98ef4',
          200: '#af84ea',
          300: '#a57ae0',
          400: '#9b70d6',
          500: '#9166cc',
          600: '#875cc2',
          700: '#7d52b8',
          800: '#7348ae',
          900: '#693ea4',
        },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child-hover', '& > *:hover')
    },
  ],
}
