module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-pseudo-states',
    '@storybook/addon-webpack5-compiler-babel',
    '@chromatic-com/storybook',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  features: {
    buildStoriesJson: true,
  },
  docs: {},
  core: {
    disableTelemetry: true,
  },
};
