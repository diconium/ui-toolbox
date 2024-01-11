import '../dist/fonts/base.css';
import '../dist/fonts/automotive.css';
import '../dist/toolbox.css';

const defaultViewport = 'responsive';

const viewports = {
  sm: {
    name: 'Mobile S 430 x 932',
    styles: {
      width: '460px',
      height: '962px',
    },
  },
  md: {
    name: 'Tablet M 834 x 1194',
    styles: {
      width: '864px',
      height: '1234px',
    },
  },
  lg: {
    name: 'Desktop Low Resolution - LG - 1024 x 768',
    styles: {
      width: '1054px',
      height: '798px',
    },
  },
  xl: {
    name: 'Desktop High Resolution - XL - 1280 x 832',
    styles: {
      width: '1310px',
      height: '862px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  parameters: {
    viewport: { viewports, defaultViewport },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    // can be removed after storybook v7 will be released
    // https://github.com/storybookjs/storybook/issues/8078
    // source: {
    //     transform:input => pretty(input)
    // }
  },
};
