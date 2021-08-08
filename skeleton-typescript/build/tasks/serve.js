import gulp from 'gulp';
import { build } from './build';
import { bundle } from './bundle';
import { exportRelease } from './export-release';

// hack!  trick http2 in to creating a secure server:
// Trying to understand why this is needed...
// In getHttpModule, when not specifying httpModule option, browser-sync explicitly chooses between the http and https modules:
//   https://github.com/BrowserSync/browser-sync/blob/v2.27.5/packages/browser-sync/lib/server/utils.js#L120
// both of which have a createServer method, which is called by getServer:
//   https://github.com/BrowserSync/browser-sync/blob/v2.27.5/packages/browser-sync/lib/server/utils.js#L96
// But when specifying httpModule='http2' we'll always use the http2 module, which has separate createServer and createSecureServer methods:
//   https://github.com/nodejs/node/blob/master/lib/internal/http2/core.js#L3308
const http2 = require('http2');
http2.createServer = http2.createSecureServer;

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
    https: true,
    httpModule: 'http2',
    server: {
      baseDir: [baseDir],
      middleware: function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  }, done);
}
