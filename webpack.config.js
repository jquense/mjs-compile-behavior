const { rules, plugins } = require('webpack-atoms')

module.exports = {
  entry: './index.js',
  output: {
    path: `${__dirname}/build`,
    filename: '[name].js]',
  },
  module: {
    rules: [rules.js()],
  },
  plugins: [plugins.html()],
}
