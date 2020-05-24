import gulp from 'gulp';
import paths from '../paths';

export function lint() {
  const tslint = require('gulp-tslint');
  return gulp.src(paths.source)
    .pipe(tslint())
    .pipe(tslint.report({emitError: false}));
}
