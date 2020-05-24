import del from 'del';
import gulp from 'gulp';
import jspm from 'jspm';
import vinylPaths from 'vinyl-paths';
import bundles from '../bundles.js';
import resources from '../export.js';
import paths from '../paths';
import { bundle } from './bundle';

function getBundles() {
  let bl = [];
  for (let b in bundles.bundles) {
    bl.push(b + '*.js');
  }
  return bl;
}

function getExportList() {
  return resources.list.concat(getBundles());
}

function normalizeExportPaths() {
  const pathsToNormalize = resources.normalize;

  let promises =  pathsToNormalize.map(pathSet => {
    const packageName = pathSet[ 0 ];
    const fileList = pathSet[ 1 ];

    return jspm.normalize(packageName).then((normalized) => {
      const packagePath = normalized.substring(normalized.indexOf('jspm_packages'), normalized.lastIndexOf('.js'));
      return fileList.map(file => packagePath + file);
    });
  });

  return Promise.all(promises)
    .then((normalizedPaths) => {
      return normalizedPaths.reduce((prev, curr) => prev.concat(curr), []);
    });
}

// deletes all files in the output path
export function cleanExport() {
  return gulp.src([ paths.exportSrv ])
    .pipe(vinylPaths(del));
};
cleanExport.displayName = 'clean-export';

export function exportCopy() {
  return gulp.src(getExportList(), { base: '.' })
    .pipe(gulp.dest(paths.exportSrv));
};
exportCopy.displayName = 'export-copy';

export function exportNormalizedResources() {
  return normalizeExportPaths().then(normalizedPaths => {
    return gulp.src(normalizedPaths, { base: '.' })
      .pipe(gulp.dest(paths.exportSrv));
  });
};
exportNormalizedResources.displayName = 'export-normalized-resources';

// use after prepare-release
export const exportRelease = gulp.series(
  bundle,
  cleanExport,
  exportNormalizedResources,
  exportCopy
);
exportRelease.displayName = 'export';