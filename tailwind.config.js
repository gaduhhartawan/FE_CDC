/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        sr: "3rem",
      },
      fontFamily: {
        plusjakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      fontSize: {
        st: "68px",
      },
      colors: {
        "search-bar": "#E7EEFE",
        bluu: "#387AF4",
      },
    },
  },
  plugins: [],
};
