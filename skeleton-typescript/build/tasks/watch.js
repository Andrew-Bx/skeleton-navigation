import gulp from 'gulp';
import paths from '../paths';
import {buildSystem, buildHtml, buildCss} from './build';
import {serve} from './serve';

// outputs changes to files to the console
function reportChange(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

// this task wil watch for changes
// to js, html, and css files and call the
// reportChange method. Also, by depending on the
// serve task, it will instantiate a browserSync session
export const watch = gulp.series(serve, watchAndReload);

function watchAndReload() {
  const browserSync = require('browser-sync');
  gulp.watch(paths.source, gulp.series(buildSystem, browserSync.reload)).on('change', reportChange);
  gulp.watch(paths.html, gulp.series(buildHtml, browserSync.reload)).on('change', reportChange);
  gulp.watch(paths.css, gulp.series(buildCss, browserSync.reload)).on('change', reportChange);
  gulp.watch(paths.style, browserSync.reload).on('change', reportChange);
}
