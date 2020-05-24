import gulp from 'gulp';
import { clean } from './clean';

/**
 * Run test once and exit
 */
export const test = gulp.series(clean, doSingleKarmaRun);

function doSingleKarmaRun(done) {
  const Server =require('karma').Server;
  const server = 
    new Server({
      configFile: __dirname + '/../../karma.conf.js',
      singleRun: true
    }, done);
  server.start();
}

/**
 * Watch for file changes and re-run tests on each change
 */
export const tdd = gulp.series(clean, doKarmaRunWatch);

function doKarmaRunWatch(done) {
  const Server =require('karma').Server;
  const server = new Server({
    configFile: __dirname + '/../../karma.conf.js'
  }, done);
  server.start();
}