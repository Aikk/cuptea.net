'use strict';

/**
 * 默认配置
 */
const path = require('path');
const srcPath = path.join(__dirname, '/../src');
const dfPort = 9000;

/**
 * 默认的模块加载器
 * @return {Object}
 */
let getDefaultModules = () => {
  return {
    preLoaders: [
      {
        test: /\.js[x]$/,
        include: srcPath,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded'
      },
      {
        test: /\.(png|jpg|gif|eot|ttf|svg|woff|woff2)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.(mp4|ogg|svg)$/,
        loader: 'file-loader'
      }
    ]
  }
}

module.exports = {
  srcPath: srcPath,
  publicPath: '/assets',
  port: dfPort,
  getDefaultModules: getDefaultModules
}
