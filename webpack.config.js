'use strict';

const path = require('path');
const args = require('minimist')(process.argv.slice(2));

// 运行环境
const Envs = ['dev', 'dist', 'test'];

// 配置环境
let env;
if (args._.length > 0 && args._.startsWith('start')) {
  env = 'test';
} else if (args.env) {
  env = args.env;
} else {
  env = 'dev';
}
process.env.REACT_WEBPACK_ENV = env;

/**
 * 构建 webpack config
 * @param  {String} build env
 * @return {Object} webpack config
 */
let buildConfig = (buildEnv) => {
  let isValid = buildEnv && buildEnv.length > 0 && Envs.includes(buildEnv);
  let validEnv = isValid ? buildEnv : 'dev';
  let config = require(path.join(__dirname, 'config/' + buildEnv));
  return config;
}

module.exports = buildConfig(env);
