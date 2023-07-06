import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import copy from 'rollup-plugin-copy';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import packageJson from './package.json' assert { type: 'json' };

const POSTCSS_OPTIONS = {
  config: {
    path: './postcss.config.js',
  },
  extensions: ['.css'],
  minimize: true,
  inject: {
    insertAt: 'top',
  },
};

const FONTS = [
  'styles/fonts/toolbox.ttf',
  'styles/fonts/toolbox.eot',
  'styles/fonts/toolbox.woff',
  'styles/fonts/toolbox.woff2',
];

const COPY_ASSETS_OPTIONS = {
  targets: [{ src: FONTS, dest: 'dist/fonts' }],
};

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss(POSTCSS_OPTIONS),
      copy(COPY_ASSETS_OPTIONS),
    ],
  },
  {
    input: 'dist/esm/types/src/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/, 'react'],
  },
];
