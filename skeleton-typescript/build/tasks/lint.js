import gulp from 'gulp';
import paths from '../paths';
import tslint from 'gulp-tslint';

export function lint() {
  return gulp.src(paths.source)
    .pipe(tslint())
    .pipe(tslint.report({emitError: false}));
}
