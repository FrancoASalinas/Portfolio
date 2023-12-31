/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#10E710',
        secondary: '#222',
        details: '#444',
        emphasis: '#E8A005',
        primaryDarken: '#108810'
      },
      fontFamily: {
        title: 'Hind, sans-serif',
        def: 'Montserrat, sans-serif',
      },
    },
  },
  plugins: [],
};
