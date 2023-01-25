module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
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
          primary: {
            orange: "#F27E19",
            purple: "#785589",
            white: "#FFFFFF",
          },
          secondary: {
            orange: "#F6AE2D",
            purple: "#977390",
            "dark-grey": "#2E2E2E",
          },
          alert: {
            red: "#DD2D4A",
            green: "#6EEB83",
          },
        },
      },
    },
  },
  plugins: [],
};
