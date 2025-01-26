/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Barlow: ['Barlow Condensed', 'sans-serif'],
        Bellefair: ['Bellefair', 'serif'],
      },
    },
    screens: {
      tbl: { min: '550px', max: '1023px' },
      pc: '1024px',
    }
  },
  plugins: [],
}

