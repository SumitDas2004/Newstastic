/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        navButtons:'#8dc90c',
      },
      fontFamily:{
        myFont: `'Quicksand', sans-serif;`
      },
    },
  },
  plugins: [],
}