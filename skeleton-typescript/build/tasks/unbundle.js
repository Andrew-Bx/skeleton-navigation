import bundles from '../bundles.js';

const config = {
  force: true,
  baseURL: '.',
  configPath: './config.js',
  bundles: bundles.bundles
};

export const unbundle = function() {
  const bundler = require('aurelia-bundler');
  return bundler.unbundle(config);
};
