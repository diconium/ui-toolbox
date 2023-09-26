import { create } from '@storybook/theming';
const colors = require('../../colors.config');
const logo = require('./diconium.png');

export default create({
  base: 'light',
  fontBase: 'Poppins, sans-serif',
  textColor: colors.neutral.DEFAULT,

  colorPrimary: colors.primary.DEFAULT,
  colorSecondary: colors.primary.DEFAULT,

  brandTitle: 'diconium',
  brandUrl: 'https://diconium.com/',
  brandImage: logo,
  brandTarget: '_blank',

  appBg: colors.additional.white,
});
