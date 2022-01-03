import gulp from 'gulp';

const bundleConfigPath = 'jspm.bundles.js';

/** Create file with empty SystemJS config */
export function createEmptyBundleConfig() {
  const fs = require('fs/promises');
  return fs.writeFile(bundleConfigPath, `SystemJS.config({})`);
}

/**
 * Copy the non-app bundles (ie only the third-party bundles) from the input config
 * to the output config, and also copy the corresponding bundle files.
 */
async function devifyBundles(inputConfigPath, outputConfigPath) {
  const configSerializer = require('aurelia-bundler/dist/config-serializer');
  const fs = require('fs/promises');
  const path = require('path');

  const inputDirectory = path.dirname(inputConfigPath);
  const inputConfig = configSerializer.getAppConfig(inputConfigPath);
  const inputBundles = inputConfig.bundles;

  const bundleKeysToUse = Object.keys(inputBundles).filter(b => !b.startsWith('dist/app'));

  const outputDirectory = path.dirname(outputConfigPath);
  const outputBundles = {};
  const promises = [];
  for (const bundleKey of bundleKeysToUse) {
    const promise = fs.copyFile(path.join(inputDirectory, bundleKey), path.join(outputDirectory, bundleKey))
    promises.push(promise);

    outputBundles[bundleKey] = inputBundles[bundleKey];
  }
  await Promise.all(promises);

  const outputConfig = configSerializer.getAppConfig(outputConfigPath);
  outputConfig.bundles = outputBundles;
  configSerializer.saveAppConfig(outputConfigPath, outputConfig);
}

// testing:
// TODO ASB: remove temp-package-contents
export const doDevBundle = gulp.series(
  createEmptyBundleConfig,
  devifyBundles.bind(undefined, 'temp-package-contents/jspm.bundles.js', 'jspm.bundles.js')
);
