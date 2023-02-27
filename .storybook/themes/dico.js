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
  brandImage: 'https://jobs.diconium.com/uploads/1622/settings/companies/diconium-jobs-96-6059ae9e056c4.png',
  brandTarget: '_blank',

  appBg: colors.additional.white,
});
