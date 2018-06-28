const { rules, plugins } = require('webpack-atoms')

const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: `${__dirname}/build`,
    filename: 'app.js',
  },
  plugins: [
    plugins.html(),
    new AddAssetHtmlPlugin({
      filepath: `${__dirname}/build/env.js`,
      includeSourcemap: false,
    }),
    plugins.dllReference({
      manifest: `${__dirname}/build/env-manifest.json`,
    }),
  ],
}
