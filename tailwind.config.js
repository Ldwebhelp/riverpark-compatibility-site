/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        aqua: {
          50: '#f0fdff',
          100: '#ccf7fe',
          200: '#99eefd',
          300: '#60defa',
          400: '#21c5f5',
          500: '#06a9db',
          600: '#0886b8',
          700: '#0e6b95',
          800: '#155a7a',
          900: '#164c66',
        },
        coral: {
          50: '#fff4f2',
          100: '#ffe6e1',
          200: '#ffd1c7',
          300: '#ffb3a0',
          400: '#ff8a6c',
          500: '#ff5722',
          600: '#ed4715',
          700: '#c8360c',
          800: '#a5300d',
          900: '#872d12',
        }
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}