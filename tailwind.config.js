/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: "#fff",
      black: "#000",
      purple: "#6633EE",
      blue: "#0000FF",
      pink: "#ee2a7b",
    },
    screens: {
      420: "420px",
      540: "540px",
      sd: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
