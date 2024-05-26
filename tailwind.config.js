/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { max: "640px" },
      // => @media (min-width: 640px) { ... }
      mdsm: "641px",
      // => @media (min-width: 768px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lge: "1023px",
      // => @media (min-width: 1024px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontSize: {
      tiny: "12px",
      sm: "14px",
      base: "16px",
      h6: "18px",
      h5: "20px",
      h4: "22px",
      h3: "24px",
      h2: "26px",
      h1: "28px",
      xl: "30px",
      "2xl": "32px",
      "3xl": "34px",
      "4xl": "36px",
      "5xl": "38px",
      "6xl": "40px",
    },
    colors: {
      black: "#000",
      white: "#fff",
      grey: "#BBBBBB",
      iphone: "#1D1D1F",
    },
    fontFamily: {
      SFPro: ["SFPro"],
      Sfprobold: ["Sf pro bold"],
      sfproregular: ["sfproregular"],
      sfprosemibold: ["sfprosemibold"],
    },

    extend: {},
  },
  plugins: [],
};
