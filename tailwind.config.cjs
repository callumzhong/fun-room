/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        'noto-sans-tc': ['Noto Sans TC', 'sans-serif'],
        'abhaya-libre': ['Abhaya Libre', 'sans-serif']
      }
    }
  },
  plugins: []
}
