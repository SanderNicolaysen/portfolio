/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'serif'],
      },
      backgroundImage: {
        borderColor: ['focus-visible', 'first'],
      },
      colors: {
        dark: '#181818',
        secondary: '#212121',
        darkGray: '#363C4A',
        green: {
          50: '#9cf1eb',
          100: '#92e7e1',
          200: '#88ddd7',
          300: '#7ed3cd',
          400: '#74c9c3',
          500: '#6abfb9',
          600: '#60b5af',
          700: '#56aba5',
          800: '#4ca19b',
          900: '#429791',
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
