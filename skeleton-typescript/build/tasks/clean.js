import del from 'del';
import gulp from 'gulp';
import vinylPaths from 'vinyl-paths';
import paths from '../paths';
import { unbundle } from './unbundle';

function deleteOutputs() {
  return gulp.src([paths.output])
    .pipe(vinylPaths(del));
}

export const clean = gulp.series(unbundle, deleteOutputs);
clean.description = 'deletes all files in the output path';