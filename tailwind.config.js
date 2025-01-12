/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      sm: '350px',
      md: '768px',
      lg: '976px',
      xl: '1088px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '3rem',
        xl: '4rem',
      },
    },
    textColor: {
      ...colors,
      'custom-gray': '#727883',
    },
    colors: {
      'primary': '#131517',
      'secondary': '#1F2125',
      'tertiary': '#101010',
      'quaternary': '#444749',
      'custom-yellow': '#FFBD14',
    },
    fontFamily: {
      avenir: ['Avenir Next', 'sans-serif'],
      manrope: ['Manrope', 'sans-serif'],
    },
  },
  plugins: [
    require('flowbite/plugin')({
      charts: true,
    }),
  ]
}

