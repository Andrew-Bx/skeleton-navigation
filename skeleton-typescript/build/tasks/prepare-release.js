import gulp from 'gulp';
import paths from '../paths';
import changelog from 'conventional-changelog';
import fs from 'fs';
import bump from 'gulp-bump';
import args from '../args';
import {build} from './build';
import {lint} from './lint';

// utilizes the bump plugin to bump the
// semver for the repo
export function bumpVersion() {
  return gulp.src(['./package.json'])
    .pipe(bump({type: args.bump})) //major|minor|patch|prerelease
    .pipe(gulp.dest('./'));
};
bumpVersion.displayName = 'bump-version';

// generates the CHANGELOG.md file based on commit
// from git commit messages
export function createChangelog() {
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
