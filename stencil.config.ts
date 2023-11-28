import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalScript: 'src/global/app.ts',
  globalStyle: 'src/global/app.css',
  taskQueue: 'async',
  plugins: [sass({
    injectGlobalPaths: ['src/global/app.scss']
  })],
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      // serviceWorker: null,
      // baseUrl: 'https://myapp.local/',
      // copy: [
      //   { src: 'node_modules/animate.css/animate.min.css', dest: 'build/animate.min.css' },
      // ]
    },
  ],
};
