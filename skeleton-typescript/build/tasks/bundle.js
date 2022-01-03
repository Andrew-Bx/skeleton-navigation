import {series} from 'gulp';
import bundles from '../bundles.js';
import {build} from './build';
import {createEmptyBundleConfig} from './dev-bundle';

const config = {
  force: true,
  baseURL: '.',
  configPath: './jspm.config.js',
  bundles: bundles.bundles,
  injectionConfigPath: './jspm.bundles.js'
};

export function bundleAfterBuild() {
  const bundler = require('aurelia-bundler');
  return bundler.bundle(config);
}
export const bundle = series(build, createEmptyBundleConfig, bundleAfterBuild);
