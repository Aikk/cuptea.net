/**
 * Webpack base config
 */
const defaults = require('./defaults');

module.exports = {
  port: defaults.port,
  debug: true,
  devtool: 'eval',
  output: {
    path: defaults.outputPath,
    publicPath: defaults.publicPath,
    filename: 'app.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      actions: `${defaults.srcPath}/actions`,
      components: `${defaults.srcPath}/components`,
      sources: `${defaults.srcPath}/sources`,
      stores: `${defaults.srcPath}/stores`,
      styles: `${defaults.srcPath}/styles`
    }
  },
  module: {},
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true,
    port: defaults.port,
    publicPath: defaults.publicPath,
    noInfo: false,
    compress: true,
    stats: {
      color: true
    }
  },
  postcss: function() {
    return require('autoprefixer')({
      browsers: ['last 2 versions', 'ie >= 8']
    })
  }
}
