'use strict';

/**
 * 开发环境配置
 */
const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./base');
const defaults = require('./defaults');

let config = Object.assign({}, baseConfig, {
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:' + defaults.port,
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  cache: true,
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: defaults.getDefaultModules()
});

// 增加所需的加载器
config.module.loaders.push({
  test: /\.js[x]$/,
  loader: 'react-hot!babel-loader',
  include: path.join(__dirname, '/../src')
});

module.exports = config;
