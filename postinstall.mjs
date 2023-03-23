/* eslint-disable operator-linebreak */
import { copyFile, constants } from 'node:fs/promises';

const { env } = process;

if (
  // if INIT_CWD (yarn/npm install invocation path) and PWD
  // are the same, then local (dev) install/add is taking place
  env.INIT_CWD === env.PWD ||
  env.INIT_CWD.indexOf(env.PWD) === 0
) {
  console.info('Skipping `postinstall` script on local installs');
} else {
  // do post-installation things
  try {
    console.info('Copy fonts to local project.');
    await copyFile(
      `${env.INIT_CWD}/dist/fonts/toolbox.ttf`,
      `${env.INIT_CWD}/styles/fonts/toolbox.ttf`,
      constants.COPYFILE_EXCL
    );
    await copyFile(
      `${env.INIT_CWD}/dist/fonts/toolbox.eot`,
      `${env.INIT_CWD}/styles/fonts/toolbox.eot`,
      constants.COPYFILE_EXCL
    );
    await copyFile(
      `${env.INIT_CWD}/dist/fonts/toolbox.woff`,
      `${env.INIT_CWD}/styles/fonts/toolbox.woff`,
      constants.COPYFILE_EXCL
    );
    await copyFile(
      `${env.INIT_CWD}/dist/fonts/toolbox.woff2`,
      `${env.INIT_CWD}/styles/fonts/toolbox.woff2`,
      constants.COPYFILE_EXCL
    );
  } catch {
    console.error('Fonts could not be copied.');
  }
}
