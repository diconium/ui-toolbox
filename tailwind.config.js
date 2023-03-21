const colors = require('./colors.config');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  theme: {
    screens: {
      sm: '430px',
      md: '834px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      spacing: {
        13: '3.25rem',
      },
      width: {
        sm: '430px',
      },
      minWidth: {
        sm: '430px',
      },
      maxWidth: {
        sm: '430px',
      },
      colors: {
        toolbox: {
          primary: { ...colors.primary },
          secondary: { ...colors.secondary },
          neutral: { ...colors.neutral },
          ...colors.additional,
        },
      },
    },
  },
  plugins: [],
};
