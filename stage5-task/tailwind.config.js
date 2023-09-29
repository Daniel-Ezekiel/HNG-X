/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: "1.6rem",
      base: "1.8rem",
      lg: "2rem",
      xl: "2.8rem",
      "2xl": "3.2rem",
      "3xl": "4rem",
      "4xl": "6.4rem",
    },

    spacing: {
      1: "0.5rem",
      2: "1rem",
      3: "1.5rem",
      4: "2rem",
      5: "2.5rem",
      6: "3rem",
      7: "3.5rem",
      8: "4rem",
      9: "4.5rem",
      10: "5rem",
    },

    borderWidth: {
      DEFAULT: "0.1rem",
      0: "0",
      2: "0.2rem",
      3: "0.3rem",
      4: "0.4rem",
      5: "0.5rem",
    },

    fontFamily: {
      sora: ["Sora", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      "work-sans": ["'Work Sans'", "sans-serif"],
    },

    colors: {
      blue: "#120B48",
      "blue-600": "100A42",
      dark1: "#141414",
      dark2: "#1B233D",
      gray: "#616163",
      white: "#fff",
    },

    backgroundImage: {},

    screens: {
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      // "3xl": "1920px",
    },
  },
  plugins: [],
};

