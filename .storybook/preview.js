import '../dist/toolbox.css';

const defaultViewport = 'responsive';

const viewports = {
  sm: {
    name: 'Mobile S',
    styles: {
      width: '430px',
      height: '932px',
    }
  },
  md: {
    name: 'Tablet M',
    styles: {
      width: '834px',
      height: '1194px',
    }
  },
  lg: {
    name: 'Desktop Low Resolution - LG',
    styles: {
      width: '1024px',
      height: '768px',
    }
  },
  xl: {
    name: 'Desktop High Resolution - XL',
    styles: {
      width: '1280px',
      height: '832px',
    }
  }
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: { viewports, defaultViewport },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}