/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'serif'],
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      colors: {
        dark: '#1B1F24',
        secondary: '#24292E',
        darkgraymuted: {
          50: '#bdc6d0',
          100: '#b3bcc6',
          200: '#a9b2bc',
          300: '#9fa8b2',
          400: '#959ea8',
          500: '#8b949e',
          600: '#818a94',
          700: '#77808a',
          800: '#6d7680',
          900: '#636c76',
        },
        darkGray: {
          50: '#686e7c',
          100: '#5e6472',
          200: '#545a68',
          300: '#4a505e',
          400: '#404654',
          500: '#363c4a',
          600: '#2c3240',
          700: '#222836',
          800: '#181e2c',
          900: '#0e1422',
        },
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
