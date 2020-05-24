export * from './build/tasks/clean';
export * from './build/tasks/lint';
export * from './build/tasks/build';
export * from './build/tasks/bundle';
export * from './build/tasks/unbundle';
export * from './build/tasks/e2e';
export * from './build/tasks/dev';
export * from './build/tasks/test';
export * from './build/tasks/serve';
export * from './build/tasks/export-release';
export * from './build/tasks/prepare-release';
export * from './build/tasks/watch';

import {watch} from './build/tasks/watch';
export default watch;
