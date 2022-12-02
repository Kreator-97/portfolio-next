/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '720px',
        lg: '1080px',
        xl: '1440px',
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
      },
      colors: {
        light: '#eee',
        lightAlt: '#ccc',
        dark: '#292524',
        darkAlt: 'rgb(51,61,85)',
        accent: '#f59e0b',
        accentDark: '#d97706',
      }
    },
  },
  plugins: [],
}
