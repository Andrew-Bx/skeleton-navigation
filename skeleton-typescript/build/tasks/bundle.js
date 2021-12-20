import {series} from 'gulp';
import bundles from '../bundles.js';
import {build} from './build';

const config = {
  force: true,
  baseURL: '.',
  configPath: './jspm.config.js',
  bundles: bundles.bundles
};

function bundleAfterBuild() {
  const bundler = require('aurelia-bundler');
  return bundler.bundle(config);
}
export const bundle = series(build, bundleAfterBuild);

export function doDepCache() {
  const bundler = require('aurelia-bundler');
  return bundler.depCache(config);
}
// TODO: try using the injectionConfigPath config and splitting the jspm.config.js file up,
// to avoid making 'temp' changes in jspm.config.js
// (see https://aurelia.io/docs/build-systems/jspm/bundling#duplicate-modules-in-multiple-bundles)