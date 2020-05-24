import gulp from 'gulp';
import paths from '../paths';
import { unbundle } from './unbundle';

function deleteOutputs() {
  const del = require('del');
  const vinylPaths = require('vinyl-paths');

  return gulp.src([paths.output], {allowEmpty: true})
             .pipe(vinylPaths(del));
}

export const clean = gulp.series(unbundle, deleteOutputs);
clean.description = 'deletes all files in the output path';