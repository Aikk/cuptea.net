/**
 * Webpack dev config
 */
const path = require('path'),
      webpack = require('webpack'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      base = require('./base'),
      defaults = require('./defaults');

let config = Object.assign({}, base, {
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:' + defaults.port,
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  cache: false,
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  module: defaults.getDefaultModule()
});

config.module.loaders.push({
  test: /\.(jsx?)$/,
  include: defaults.srcPath,
  loader: 'react-hot-loader/webpack!babel'
});

module.exports = config;
