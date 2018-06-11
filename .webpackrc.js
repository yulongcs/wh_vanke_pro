const path = require('path');

export default {
  entry: 'src/app/index.js',
  extraBabelPlugins: [
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
  ],
  env: {
    development: {
      extraBabelPlugins: ['dva-hmr'],
    },
  },
  alias: {
    components: path.resolve(__dirname, 'src/app/components/'),
  },
  ignoreMomentLocale: true,
  theme: './src/app/theme.js',
  html: {
    template: './src/app/index.ejs',
  },
  disableDynamicImport: true,
  publicPath: '/',
  hash: true,
};
