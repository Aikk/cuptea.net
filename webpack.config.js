var path = require('path');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index.js'),
    vendors: path.resolve(__dirname, 'src/vendors.js')
  }
};
