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
        mercury: '#e8927c',
        venus: '#b45d15',
        earth: '#26daaa',
        mars: '#e55f45',
        jupiter: 'orange',
        saturn: '#b29d81',
        uranus: '#8dcdd8',
        neptune: '#4f83e2',
        pluto: '#ff8732',
      },
      animation: {
        'planet-rotate': 'planet 60s infinite linear',
      },
      keyframes: {
        planet: {
          'from': { 'background-position-y': '0px' },
          'to': { 'background-position-y': '-1000px' },
        }
      },
      transitionProperty: {
        'transform': 'transform',
      },
      transitionTimingFunction: {
        'solar': 'cubic-bezier(0.33, 0, 0, 1)',
      },
    },
  },
  plugins: [],
};