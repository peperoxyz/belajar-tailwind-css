/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html, js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        dea: "#bada55",
      },
    },
  },
  plugins: [],
};
