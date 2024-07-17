/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      ...colors,
      'soft-white': '#F5F5F7',
      'soft-black': '#333333',
      'dark-green': '#044D5E',
      'tiffany': '#4EE4E4',
      'soft-tiffany': '#C5FFFF',
    },
    fontSize: {
      'xs': '12px',
      'rg': '16px',
      'sm': '18px',
      'md': '22px',
      'lg': '28px',
      'xl': '32px',
      '2xl': '46px',
      '3xl': '48px',
      '4xl': '62px',
    },
    fontFamily: {
      'sf-regular': ["SF-Regular", "sans-serif", "monospace", "system-ui", "ui-sans-serif", "ui-serif", "sans-serif", "apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      'sf-medium': ["SF-Medium", "sans-serif", "monospace", "system-ui", "ui-sans-serif", "ui-serif", "sans-serif", "apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
    },
    screens: {
      '2xl': {'max': '1536px'},
      '2xls': {'max': '1326px'},
      'xl': {'max': '1280px'},
      'lg': {'max': '1024px'},
      'md': {'max': '856px'},
      'sm': {'max': '640px'},
      'xsm': {'max': '457px'},
      'xs': {'max': '398px'},
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
}

