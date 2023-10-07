/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        urbanist:"'Urbanist', sans-serif"
      },
      colors:{
        secondary:"#F57005",
        primary:"#4F5DE4"
      },
    },
  },
  plugins: [require("daisyui")],
}

