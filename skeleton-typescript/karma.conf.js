module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: ['systemjs', 'jasmine'],
    systemjs: {
      configFile: 'jspm.config.js',
      config: {
        meta: {
          typescript: {
            format: "global",
            exports: "ts"
          }
        },
        paths: {
          'typescript': 'node_modules/typescript/lib/typescript.js',
          'ts': 'jspm_packages/github/frankwallis/plugin-typescript@9.0.0/plugin.js',
          'systemjs': 'jspm_packages/system.js',
          'system-polyfills': 'node_modules/systemjs/dist/system-polyfills.js',
          'es6-module-loader': 'node_modules/es6-module-loader/dist/es6-module-loader.js'
        },
        packages: {
          'test/unit': {
            defaultExtension: 'ts'
          },
          'src': {
            defaultExtension: 'ts'
          },
          'ts': {
            'main': 'plugin.js'
          },
          'typescript': {
            'main': 'lib/typescript.js',
            'meta': {
              'lib/typescript.js': {
                'exports': 'ts'
              }
            }
          }
        },
        transpiler: 'ts',
        typescriptOptions : {
          "module": "system",
          "emitDecoratorMetadata": true,
          "experimentalDecorators": true
        }
      },
      serveFiles: [
        'src/**/*.*',
        'jspm_packages/**/*.js',
        'jspm_packages/**/*.json'
      ]
    },
    files: [
      'test/unit/setup.ts',
      'test/unit/*.ts'
    ],
    exclude: [],
    preprocessors: { },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
