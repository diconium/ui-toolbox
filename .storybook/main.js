module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', 'storybook-addon-pseudo-states'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  features: {
    buildStoriesJson: true
  },
  docs: {
    autodocs: true
  },
  core: {
    disableTelemetry: true
  }
};