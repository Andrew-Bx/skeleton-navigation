import bundles from '../bundles.js';

const config = {
  force: true,
  baseURL: '.',
  configPath: './jspm.config.js',
  bundles: bundles.bundles,
  injectionConfigPath: './jspm.bundles.js'
};

export const unbundle = function() {
  const bundler = require('aurelia-bundler');
  return bundler.unbundle(config);
};