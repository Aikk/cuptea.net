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
        test:/\.js$/,
        include: srcPath,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.scss$/,
        exclude: path.resolve(srcPath, 'styles'),
        loader: 'style!css?sourceMap&modules&localIdentName=[name]-[local]!postcss!sass?sourceMap'
      },
      {
        test: /\.scss$/,
        include: path.resolve(srcPath, 'styles'),
        loader: 'style!css!sass?sourceMap'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(txt|md)$/,
        loader: 'raw'
      },
      {
        test: /\.(png|jpe?g|gif|woff|woff2|eot|ttf|svg)$/,
        loader: 'url?limit=8192'
      },
      {
        test: /\.(mp4|ogg|svg)$/,
        loader: 'file'
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
