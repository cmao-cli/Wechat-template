/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
const plugins = [];

if (process.env.UNI_OPT_TREESHAKINGNG) {
  plugins.push(require('@dcloudio/vue-cli-plugin-uni-optimize/packages/babel-plugin-uni-api/index.js'));
}

if (process.env.UNI_PLATFORM === 'app-plus' && process.env.UNI_USING_V8) {
  const path = require('path');

  const isWin = /^win/.test(process.platform);

  const normalizePath = (normalPath) => { return isWin ? normalPath.replace(/\\/g, '/') : normalPath; };

  const input = normalizePath(process.env.UNI_INPUT_DIR);
  try {
    plugins.push([
      require('@dcloudio/vue-cli-plugin-hbuilderx/packages/babel-plugin-console'),
      {
        file(file) {
          resoveFile = normalizePath(file);
          if (resoveFile.indexOf(input) === 0) {
            return path.relative(input, resoveFile);
          }
          return false;
        },
      },
    ]);
  } catch (e) {
    // empty
  }
}

process.UNI_LIBRARIES = process.UNI_LIBRARIES || ['@dcloudio/uni-ui'];
process.UNI_LIBRARIES.forEach((libraryName) => {
  plugins.push([
    'import',
    {
      libraryName,
      customName: (name) => {
        return `${libraryName}/lib/${name}/${name}`;
      },
    },
  ]);
});
module.exports = {
  presets: [
    [
      '@vue/babel-preset-app',
      {
        modules: 'commonjs',
        useBuiltIns: process.env.UNI_PLATFORM === 'h5' ? 'usage' : 'entry',
      },
    ],
  ],
  plugins,
};
