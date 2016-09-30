/**
 * Build webpack configuration
 * @type {[type]}
 */
const path = require('path'),
      args = require('minimist')(process.argv.slice(2));

// List of environments
const envs = ['dev', 'dist', 'test'];

// Set the environment
let env;
if (args._.length > 0 && args._.indexOf('start') !== -1) {
  env = 'test';
} else if (args.env) {
  env = args.env;
} else {
  env = 'dev';
}
process.env.REACT_WEBPACK_ENV = env;

/**
 * Build the webpack configuration
 * @param  {String} buildEnv
 * @return {Object} Webpack config
 */
function buildConfig(buildEnv) {
  let isValid = buildEnv && buildEnv.length > 0 && envs.indexOf(buildEnv) !== -1;
  let validEnv = isValid ? buildEnv : 'dev';
  let config = require(path.resolve(__dirname, 'conf/' + validEnv));
  return config;
}

module.exports = buildConfig(env);
