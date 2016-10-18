/**
 * Webpack default config
 */
const path = require('path'),
      srcPath = path.resolve(__dirname, '../src'),
      outputPath = path.resolve(__dirname, '../dist'),
      publicPath = '',
      port = 9000;

/**
 * Default modules for webpack
 * @return {Object}
 */
let getDefaultModule = () => {
  return {
    preLoaders: [
      {
        test:/\.(js|jsx)$/,
        include: srcPath,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(txt|md)$/,
        loader: 'raw-loader'
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/,
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
  outputPath: outputPath,
  publicPath: publicPath,
  port: port,
  getDefaultModule: getDefaultModule
}
