import gulp from 'gulp';
import args from '../args';
import paths from '../paths';
import { build } from './build';
import { lint } from './lint';

// utilizes the bump plugin to bump the
// semver for the repo
export function bumpVersion() {
  const bump = require('gulp-bump');

  return gulp.src(['./package.json'])
    .pipe(bump({type: args.bump})) //major|minor|patch|prerelease
    .pipe(gulp.dest('./'));
};
bumpVersion.displayName = 'bump-version';

// generates the CHANGELOG.md file based on commit
// from git commit messages
export function createChangelog() {
  const fs = require('fs');
  const changelog = require('conventional-changelog');

  var pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

  return changelog({
    repository: pkg.repository.url,
    version: pkg.version,
    file: paths.doc + '/CHANGELOG.md'
  }, function(err, log) {
    fs.writeFileSync(paths.doc + '/CHANGELOG.md', log);
  });
}

export const prepareRelease = gulp.series(build, lint, bumpVersion, createChangelog);
