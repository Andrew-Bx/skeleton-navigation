import {series} from 'gulp';
import * as bundler from 'aurelia-bundler';
import bundles from '../bundles.js';
import {build} from './build';

const config = {
  force: true,
  baseURL: '.',
  configPath: './config.js',
  bundles: bundles.bundles
};

function bundleAfterBuild() {
  return bundler.bundle(config);
}
export const bundle = series(build, bundleAfterBuild);
