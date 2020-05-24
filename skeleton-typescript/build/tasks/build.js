import browserSync from 'browser-sync';
import gulp from 'gulp';
import changed from 'gulp-changed';
import htmlmin from 'gulp-htmlmin';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import sourcemaps from 'gulp-sourcemaps';
import typescript from 'gulp-typescript';
import paths from '../paths';
import { clean } from './clean';

// transpiles changed es6 files to SystemJS format
// the plumber() call prevents 'pipe breaking' caused
// by errors from other gulp plugins
// https://www.npmjs.com/package/gulp-plumber
var typescriptCompiler = typescriptCompiler || null;
export function buildSystem() {
  if(!typescriptCompiler) {
    typescriptCompiler = typescript.createProject('tsconfig.json', {
      "typescript": require('typescript')
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
  return gulp.src(paths.html)
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(changed(paths.output, {extension: '.html'}))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(paths.output));
}
buildHtml.displayName = 'build-html';

export function buildCss() {
  return gulp.src(paths.css)
    .pipe(changed(paths.output, {extension: '.css'}))
    .pipe(gulp.dest(paths.output))
    .pipe(browserSync.stream());
}
buildCss.displayName = 'build-css';
buildCss.description = 'copies changed css files to the output directory';

export const build = gulp.series(clean, gulp.parallel(buildSystem, buildHtml, buildCss));
