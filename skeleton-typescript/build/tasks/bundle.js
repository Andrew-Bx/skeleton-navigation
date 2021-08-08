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
