import gulp from 'gulp';
import paths from '../paths';

// for full documentation of gulp-protractor,
// please check https://github.com/mllrsohn/gulp-protractor
export const webdriverStandalone = gulp.series(
  function() {
    const webdriver_update = require('gulp-protractor').webdriver_update;
    return webdriver_update();
  },
  function() {
    const webdriver_standalone = require('gulp-protractor').webdriver_standalone;
    return webdriver_standalone();
  });

export function cleanE2e() {
  const del = require('del');
  return del(paths.e2eSpecsDist + '*');
};

export const buildE2e = gulp.series(cleanE2e, buildSpecs);

let typescriptCompiler;
/**
 * transpiles files in
 * /test/e2e/src/ from es6 to es5
 * then copies them to test/e2e/dist/
 */
function buildSpecs() {
  const gulpTypescript = require('gulp-typescript');

  if(!typescriptCompiler) {
    typescriptCompiler = gulpTypescript.createProject('tsconfig.e2e.json', {
      typescript: require('typescript'),
      module: 'commonjs'
    });
  }
  return gulp.src(paths.dtsSrc.concat(paths.e2eSpecsSrc))
    .pipe(typescriptCompiler())
    .pipe(gulp.dest(paths.e2eSpecsDist));
}

// runs build-e2e task
// then runs end to end tasks
// using Protractor: http://angular.github.io/protractor/
export const e2e = gulp.series(buildE2e, runProtractor);

function runProtractor() {
  const protractor = require('gulp-protractor').protractor;

  return gulp.src(paths.e2eSpecsDist + '**/*.js')
    .pipe(protractor({
      configFile: 'protractor.conf.js',
      args: ['--baseUrl', 'http://127.0.0.1:9000']
    }))
    .on('end', function() { process.exit(); })
    .on('error', function(e) { throw e; });
}