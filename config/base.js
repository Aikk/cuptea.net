'use strict';

/**
 * 基础配置
 */
let path = require('path');
let defaults = require('./defaults');
let autoprefixer = require('autoprefixer');

module.exports = {
  port: defaults.port,
  debug: true,
  devtool: 'eval',
  output: {
    publicPath: defaults.publicPath,
    path: path.join(__dirname, '/../dist/assets'),
    filename: 'app.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      actions: `${defaults.srcPath}/actions/`,
      components: `${defaults.srcPath}/components/`,
      sources: `${defaults.srcPath}/sources/`,
      stores: `${defaults.srcPath}/stores/`,
      styles: `${defaults.srcPath}/styles/`,
      config: `${defaults.srcPath}/config/` + process.env.REACT_WEBPACK_ENV
    }
  },
  module: {},
  devServer: {
    contentBase: './src',
    publicPath: defaults.publicPath,
    hot: true,
    historyApiFallback: true,
    noInfo: false,
    compress: true,
    stats: {
      color: true
    }
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions', 'ie >= 8'] })]
}
