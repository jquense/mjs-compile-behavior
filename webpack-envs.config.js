const { rules, plugins } = require('webpack-atoms')

const envs = {
  DEV: { FOO: '"dev foo"', BAR: '"dev bar"' },
  STAGING: { FOO: '"staging foo"', BAR: '"staging bar"' },
}

module.exports = Object.entries(envs).map(([env, vars]) => ({
  entry: ['./src/env.js'],
  output: {
    path: `${__dirname}/build`,
    filename: env === 'DEV' ? 'env.js' : `env-${env}.js`,
    library: '__super_secret_envs',
  },
  module: {
    rules: [rules.js()],
  },
  plugins: [
    plugins.define({
      process: {
        env: vars,
      },
    }),
    plugins.dll({
      path: `${__dirname}/build/env-manifest.json`,
      name: '__super_secret_envs',
    }),
  ],
}))
