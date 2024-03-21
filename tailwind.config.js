/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        bgcolor: "#F1F2F3",
        darkblue: "#3B82F6",
        lightblue: "#EBF2FE",
        darkgray: "#D1D5DD",
        lightgray: "#ECEEEF",
        mediumblue: "#F3F4F5",
      },
    },
  },
  plugins: [],
};
