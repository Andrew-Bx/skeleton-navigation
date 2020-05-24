import args from '../args';

// source code for the tasks called in this file
// is located at: https://github.com/aurelia/tools/blob/master/src/dev.js

// updates dependencies in this folder
// from folders in the parent directory
export function updateOwnDeps() {
  const tools = require('aurelia-tools');
  tools.updateOwnDependenciesFromLocalRepositories(args.depth);
};

// quickly pulls in all of the aurelia
// github repos, placing them up one directory
// from where the command is executed,
// then runs `npm install`
// and `gulp build` for each repo
export function buildDevEnv() {
  const tools = require('aurelia-tools');
  tools.buildDevEnv();
};

// quickly pulls in all of the aurelia
// github repos, placing them up one directory
// from where the command is executed
export function pullDevEnv() {
  const tools = require('aurelia-tools');
  tools.pullDevEnv();
};
