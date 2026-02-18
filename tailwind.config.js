/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': {
          DEFAULT: '#1E5BA8',
          50: '#E8F1FC',
          100: '#D1E3F9',
          200: '#A3C7F3',
          300: '#75ABEC',
          400: '#478FE6',
          500: '#1E5BA8',
          600: '#174987',
          700: '#103765',
          800: '#0A2544',
          900: '#031222',
        },
        'brand-gold': {
          DEFAULT: '#c48b47',
          50: '#FBF5ED',
          100: '#F7EBDB',
          200: '#EFD7B7',
          300: '#E7C393',
          400: '#DFAF6F',
          500: '#c48b47',
          600: '#9D6F39',
          700: '#76532B',
          800: '#4E371C',
          900: '#271C0E',
        },
      },
    },
  },
  plugins: [],
}
