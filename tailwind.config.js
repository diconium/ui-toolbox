/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "430px",
      md: "834px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        toolbox: {
          primary: "#f6ae2d",
          secondary: "#977390",
          tertiary: "#c6d8c8",
        },
      },
    },
  },
  plugins: [],
};
