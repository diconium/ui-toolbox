import { create } from '@storybook/theming';
const colors = require('../../colors.config');

export default create({
  base: 'light',
  fontBase: 'Poppins, sans-serif',
  textColor: colors.neutral.DEFAULT,

  colorPrimary: colors.primary.DEFAULT,
  colorSecondary: colors.primary.DEFAULT,

  brandTitle: 'diconium',
  brandUrl: 'https://jobs.diconium.com/',
  brandImage:
    'https://jobs.embitel.de/uploads/1306/settings/companies/diconium-96-63c512c9b9afb.png',
  brandTarget: '_blank',

  appBg: colors.additional.white,
});
