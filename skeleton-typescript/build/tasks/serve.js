import gulp from 'gulp';
import { build } from './build';
import { bundle } from './bundle';
import { exportRelease } from './export-release';

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9000
export const serve = gulp.series(build, serveUsingBrowserSync.bind(undefined, '.'));
// export const serve = gulp.series(build, serveUsingBrowserSync);

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9000
export const serveBundle = gulp.series(bundle, serveUsingBrowserSync.bind(undefined, '.'));
serveBundle.displayName = 'serve-bundle';

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9000
export const serveExport = gulp.series(exportRelease, serveUsingBrowserSync.bind(undefined, './export'));
serveExport.displayName = 'serve-export';

function serveUsingBrowserSync(baseDir, done) {
  const browserSync = require('browser-sync');
  browserSync({
    online: false,
    open: false,
    port: 9000,
    server: {
      baseDir: [baseDir],
      middleware: function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  }, done);
}
