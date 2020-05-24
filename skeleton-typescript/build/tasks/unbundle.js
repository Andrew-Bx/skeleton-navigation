import * as bundler from 'aurelia-bundler';
import bundles from '../bundles.js';

const config = {
  force: true,
  baseURL: '.',
  configPath: './config.js',
  bundles: bundles.bundles
};

export const unbundle = function() {
  return bundler.unbundle(config);
};
