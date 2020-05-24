import gulp from 'gulp';
import paths from '../paths';
import { clean } from './clean';

// transpiles changed es6 files to SystemJS format
// the plumber() call prevents 'pipe breaking' caused
// by errors from other gulp plugins
// https://www.npmjs.com/package/gulp-plumber
var typescriptCompiler = typescriptCompiler || null;
export function buildSystem() {
  const changed = require('gulp-changed');
  const notify = require('gulp-notify');
  const plumber = require('gulp-plumber');
  const sourcemaps = require('gulp-sourcemaps');
  const gulpTypescript = require('gulp-typescript');

  if(!typescriptCompiler) {
    typescriptCompiler = gulpTypescript.createProject('tsconfig.json', {
      typescript: require('typescript')
    });
  }

  return gulp.src(paths.dtsSrc.concat(paths.source))
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(changed(paths.output, {extension: '.ts'}))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(typescriptCompiler())
    .pipe(sourcemaps.write('.', {includeContent: false, sourceRoot: '/src'}))
    .pipe(gulp.dest(paths.output));
}
buildSystem.displayName = 'build-system';

// copies changed html files to the output directory
export function buildHtml() {
  const changed = require('gulp-changed');
  const htmlmin = require('gulp-htmlmin');
  const notify = require('gulp-notify');
  const plumber = require('gulp-plumber');

  return gulp.src(paths.html)
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(changed(paths.output, {extension: '.html'}))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(paths.output));
}
buildHtml.displayName = 'build-html';

export function buildCss() {
  const browserSync = require('browser-sync');
  const changed = require('gulp-changed');

  return gulp.src(paths.css)
    .pipe(changed(paths.output, {extension: '.css'}))
    .pipe(gulp.dest(paths.output))
    .pipe(browserSync.stream());
}
buildCss.displayName = 'build-css';
buildCss.description = 'copies changed css files to the output directory';

export const build = gulp.series(clean, gulp.parallel(buildSystem, buildHtml, buildCss));
