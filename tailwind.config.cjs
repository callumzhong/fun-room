const { Color } = require('three')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        'noto-sans-tc': ['Noto Sans TC', 'sans-serif'],
        'abhaya-libre': ['Abhaya Libre', 'sans-serif']
      },
      colors: {
        vulcan: {
          DEFAULT: '#0A0C14',
          50: '#47558E',
          100: '#404D81',
          200: '#333D66',
          300: '#252D4A',
          400: '#181C2F',
          500: '#0A0C14',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000'
        }
      }
    }
  },
  plugins: []
}
