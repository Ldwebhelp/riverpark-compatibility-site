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
        // Primary - Freshwater Blue (clear lake water)
        primary: {
          50: '#f0f8ff',
          100: '#e0f1fe',
          200: '#b9e4fd',
          300: '#7cd0fb',
          400: '#36b9f7',
          500: '#0ea2e8',
          600: '#0282c6',
          700: '#0368a0',
          800: '#075884',
          900: '#0c496d',
          950: '#082e48',
        },
        // Secondary - Natural Stone Gray
        secondary: {
          50: '#f8faf9',
          100: '#f1f4f2',
          200: '#e3e8e4',
          300: '#ced7d1',
          400: '#9fb0a4',
          500: '#6b7c71',
          600: '#556659',
          700: '#475349',
          800: '#3c453e',
          900: '#343a36',
          950: '#1c1f1e',
        },
        // Accent - Driftwood Brown
        accent: {
          50: '#faf8f5',
          100: '#f4f0e8',
          200: '#e8ddc9',
          300: '#d8c5a1',
          400: '#c4a572',
          500: '#b08d52',
          600: '#9a7746',
          700: '#80603c',
          800: '#695036',
          900: '#584330',
          950: '#2f2318',
        },
        // Success - Healthy Plant Green
        success: {
          50: '#f1f8f3',
          100: '#ddefdf',
          200: '#bee0c3',
          300: '#94ca9b',
          400: '#5fa668',
          500: '#438a4c',
          600: '#32703a',
          700: '#2a5930',
          800: '#254829',
          900: '#1f3c24',
          950: '#0f2013',
        },
        // Warning - Natural Amber
        warning: {
          50: '#fefbf3',
          100: '#fdf4e1',
          200: '#fae7c2',
          300: '#f6d498',
          400: '#f0bc6c',
          500: '#e89f47',
          600: '#d8823c',
          700: '#b46633',
          800: '#925331',
          900: '#77452a',
          950: '#412315',
        },
        // Danger - Natural Red Clay
        danger: {
          50: '#fef4f2',
          100: '#fee7e2',
          200: '#fdd4ca',
          300: '#fab5a5',
          400: '#f58971',
          500: '#eb5e41',
          600: '#d73f24',
          700: '#b5301a',
          800: '#952b18',
          900: '#7c2a1a',
          950: '#431309',
        },
        // Freshwater specific colors
        // Crystal Water - Clear freshwater
        water: {
          50: '#f4fbff',
          100: '#e8f6ff',
          200: '#cceaff',
          300: '#a3d9ff',
          400: '#73c2ff',
          500: '#4aa3ff',
          600: '#2d7fff',
          700: '#1a5ff0',
          800: '#1a4ac2',
          900: '#1d4298',
          950: '#16295c',
        },
        // River Stone - Natural substrate
        stone: {
          50: '#f7f8f7',
          100: '#eef0ee',
          200: '#d8dbd8',
          300: '#b5bab5',
          400: '#8b938b',
          500: '#6d756d',
          600: '#575e57',
          700: '#484d48',
          800: '#3d403d',
          900: '#353735',
          950: '#1c1d1c',
        },
        // Aquatic Plant - Natural vegetation
        plant: {
          50: '#f3f9f3',
          100: '#e3f2e3',
          200: '#c9e4c9',
          300: '#9fce9f',
          400: '#6db06d',
          500: '#4a9149',
          600: '#387538',
          700: '#2e5d2e',
          800: '#274b27',
          900: '#213e21',
          950: '#10220f',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '3.5rem' }],
        '6xl': ['3.75rem', { lineHeight: '4rem' }],
        '7xl': ['4.5rem', { lineHeight: '5rem' }],
        '8xl': ['6rem', { lineHeight: '6.5rem' }],
        '9xl': ['8rem', { lineHeight: '8.5rem' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'slide-in-right': 'slide-in-right 0.3s ease-out',
        'slide-in-left': 'slide-in-left 0.3s ease-out',
        'slide-in-up': 'slide-in-up 0.3s ease-out',
        'slide-in-down': 'slide-in-down 0.3s ease-out',
        'fade-in': 'fade-in 0.2s ease-out',
        'scale-in': 'scale-in 0.2s ease-out',
        'bounce-in': 'bounce-in 0.5s ease-out',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        'slide-in-up': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'slide-in-down': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'scale-in': {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        'bounce-in': {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.1)', opacity: '0.8' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -3px rgba(0, 0, 0, 0.1), 0 8px 16px -4px rgba(0, 0, 0, 0.06)',
        'hard': '0 10px 40px -3px rgba(0, 0, 0, 0.15), 0 4px 8px -2px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-lg': '0 0 30px rgba(59, 130, 246, 0.4)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },
    },
  },
  plugins: [],
}