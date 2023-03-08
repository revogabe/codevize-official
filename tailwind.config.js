/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      data: {
        light: 'ui~="light"',
        dark: 'ui~="dark"',
      },
      colors: {
        startgradient: '#0D1321',
        endgradient: '#000',

        primarycolor: '#14B8A6',
        primaryhover: '#FFF',

        info100: '#1F2937',
        info500: '#080C14',
        heading: '#FFF',
        description: '#ABABAB',

        chartbg: '#1F2937',
        chartbox: '#18212E',
        charthover: '#121B26',
        chartcallout: 'linear-gradient(180deg, #080C14 0%, #34445B 100%)',
      },
      keyframes: {
        enterFromRight: {
          from: { opacity: 0, transform: 'translateX(200px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        enterFromLeft: {
          from: { opacity: 0, transform: 'translateX(-200px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        exitToRight: {
          from: { opacity: 1, transform: 'translateX(0)' },
          to: { opacity: 0, transform: 'translateX(200px)' },
        },
        exitToLeft: {
          from: { opacity: 1, transform: 'translateX(0)' },
          to: { opacity: 0, transform: 'translateX(-200px)' },
        },
        scaleIn: {
          from: { opacity: 0, transform: 'rotateX(-10deg) scale(0.9)' },
          to: { opacity: 1, transform: 'rotateX(0deg) scale(1)' },
        },
        scaleOut: {
          from: { opacity: 1, transform: 'rotateX(0deg) scale(1)' },
          to: { opacity: 0, transform: 'rotateX(-10deg) scale(0.95)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },
    },
    animation: {
      scaleIn: 'scaleIn 200ms ease',
      scaleOut: 'scaleOut 200ms ease',
      fadeIn: 'fadeIn 200ms ease',
      fadeOut: 'fadeOut 200ms ease',
      enterFromLeft: 'enterFromLeft 250ms ease',
      enterFromRight: 'enterFromRight 250ms ease',
      exitToLeft: 'exitToLeft 250ms ease',
      exitToRight: 'exitToRight 250ms ease',
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
