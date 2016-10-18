/**
 * Webpack base config
 */
const defaults = require('./defaults');

module.exports = {
  port: defaults.port,
  debug: true,
  output: {
    path: defaults.outputPath,
    publicPath: defaults.publicPath,
    filename: 'app.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      actions: `${defaults.srcPath}/actions`,
      constants: `${defaults.srcPath}/constants`,
      containers: `${defaults.srcPath}/containers`,
      components: `${defaults.srcPath}/components`,
      store: `${defaults.srcPath}/store`,
      reducers: `${defaults.srcPath}/reducers`,
      sources: `${defaults.srcPath}/sources`,
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
