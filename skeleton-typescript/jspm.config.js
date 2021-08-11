SystemJS.config({
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/"
  },
  browserConfig: {
    "paths": {}
  },
  warnings: true,
  transpiler: false,
  meta: {
    "bootstrap": {
      "deps": [
        "jquery"
      ]
    }
  },
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.1",
    "aurelia-binding": "npm:aurelia-binding@2.5.4",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@2.3.3",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.5.2",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.3",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.1",
    "aurelia-framework": "npm:aurelia-framework@1.3.1",
    "aurelia-history": "npm:aurelia-history@1.2.1",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.4.0",
    "aurelia-loader": "npm:aurelia-loader@1.0.2",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.2.1",
    "aurelia-logging": "npm:aurelia-logging@1.5.2",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.1.1",
    "aurelia-metadata": "npm:aurelia-metadata@1.0.7",
    "aurelia-pal": "npm:aurelia-pal@1.8.2",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.8.1",
    "aurelia-path": "npm:aurelia-path@1.1.5",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.3.4",
    "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.3.2",
    "aurelia-router": "npm:aurelia-router@1.7.1",
    "aurelia-task-queue": "npm:aurelia-task-queue@1.3.3",
    "aurelia-templating": "npm:aurelia-templating@1.10.4",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.5.3",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.13.1",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.4.0",
    "bluebird": "npm:bluebird@3.4.1",
    "bootstrap": "github:twbs/bootstrap@3.3.7",
    "fetch": "github:github/fetch@1.0.0",
    "font-awesome": "npm:font-awesome@4.6.3",
    "jquery": "npm:jquery@2.2.4",
    "text": "github:systemjs/plugin-text@0.0.8"
  },
  packages: {
    ".": {},
    "github:twbs/bootstrap@3.3.7": {
      "map": {
        "jquery": "npm:jquery@2.2.4"
      }
    },
    "npm:aurelia-animator-css@1.0.1": {
      "map": {
        "aurelia-metadata": "npm:aurelia-metadata@1.0.7",
        "aurelia-pal": "npm:aurelia-pal@1.8.2",
        "aurelia-templating": "npm:aurelia-templating@1.10.4"
      }
    },
    "npm:bluebird@3.4.1": {
      "map": {}
    },
    "npm:font-awesome@4.6.3": {
      "map": {
        "css": "github:systemjs/plugin-css@0.1.31"
      }
    },
    "npm:aurelia-loader-default@1.2.1": {
      "map": {
        "aurelia-loader": "npm:aurelia-loader@1.0.2",
        "aurelia-pal": "npm:aurelia-pal@1.8.2",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.7"
      }
    },
    "npm:aurelia-loader@1.0.2": {
      "map": {
        "aurelia-metadata": "npm:aurelia-metadata@1.0.7",
        "aurelia-path": "npm:aurelia-path@1.1.5"
      }
    },
    "npm:aurelia-metadata@1.0.7": {
      "map": {
        "aurelia-pal": "npm:aurelia-pal@1.8.2"
      }
    },
    "npm:aurelia-bootstrapper@2.3.3": {
      "map": {
        "aurelia-history": "npm:aurelia-history@1.2.1",
        "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.3",
        "aurelia-logging-console": "npm:aurelia-logging-console@1.1.1",
        "aurelia-history-browser": "npm:aurelia-history-browser@1.4.0",
        "aurelia-templating-router": "npm:aurelia-templating-router@1.4.0",
        "aurelia-polyfills": "npm:aurelia-polyfills@1.3.4",
        "aurelia-loader-default": "npm:aurelia-loader-default@1.2.1",
        "aurelia-pal": "npm:aurelia-pal@1.8.2",
        "aurelia-templating-resources": "npm:aurelia-templating-resources@1.13.1",
        "aurelia-pal-browser": "npm:aurelia-pal-browser@1.8.1",
        "aurelia-router": "npm:aurelia-router@1.7.1",
        "aurelia-templating": "npm:aurelia-templating@1.10.4",
        "aurelia-templating-binding": "npm:aurelia-templating-binding@1.5.3",
        "aurelia-framework": "npm:aurelia-framework@1.3.1"
      }
    },
    "npm:aurelia-history-browser@1.4.0": {
      "map": {
        "aurelia-pal": "npm:aurelia-pal@1.8.2",
        "aurelia-history": "npm:aurelia-history@1.2.1"
      }
    },
    "npm:aurelia-polyfills@1.3.4": {
      "map": {
        "aurelia-pal": "npm:aurelia-pal@1.8.2"
      }
    },
    "npm:aurelia-templating@1.10.4": {
      "map": {
        "aurelia-pal": "npm:aurelia-pal@1.8.2",
        "aurelia-logging": "npm:aurelia-logging@1.5.2",
        "aurelia-loader": "npm:aurelia-loader@1.0.2",
        "aurelia-path": "npm:aurelia-path@1.1.5",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.7",
        "aurelia-binding": "npm:aurelia-binding@2.5.4",
        "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.5.2",
        "aurelia-task-queue": "npm:aurelia-task-queue@1.3.3"
      }
    },
    "npm:aurelia-templating-binding@1.5.3": {
      "map": {
        "aurelia-templating": "npm:aurelia-templating@1.10.4",
        "aurelia-logging": "npm:aurelia-logging@1.5.2",
        "aurelia-binding": "npm:aurelia-binding@2.5.4"
      }
    },
    "npm:aurelia-event-aggregator@1.0.3": {
      "map": {
        "aurelia-logging": "npm:aurelia-logging@1.5.2"
      }
    },
    "npm:aurelia-logging-console@1.1.1": {
      "map": {
        "aurelia-logging": "npm:aurelia-logging@1.5.2"
      }
    },
    "npm:aurelia-route-recognizer@1.3.2": {
      "map": {
        "aurelia-path": "npm:aurelia-path@1.1.5"
      }
    },
    "npm:aurelia-binding@2.5.4": {
      "map": {
        "aurelia-logging": "npm:aurelia-logging@1.5.2",
        "aurelia-task-queue": "npm:aurelia-task-queue@1.3.3",
        "aurelia-pal": "npm:aurelia-pal@1.8.2",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.7"
      }
    },
    "npm:aurelia-task-queue@1.3.3": {
      "map": {
        "aurelia-pal": "npm:aurelia-pal@1.8.2"
      }
    }
  },
  depCache: {
    "dist/blur-image.js": [
      "aurelia-framework"
    ],
    "dist/main.js": [
      "bootstrap"
    ],
    "dist/users.js": [
      "aurelia-framework",
      "aurelia-fetch-client",
      "fetch"
    ]
  },
  bundles: {
    "dist/app-build.js": [
      "dist/app.html!github:systemjs/plugin-text@0.0.8/text.js",
      "dist/app.js",
      "dist/blur-image.js",
      "dist/child-router.html!github:systemjs/plugin-text@0.0.8/text.js",
      "dist/child-router.js",
      "dist/main.js",
      "dist/nav-bar.html!github:systemjs/plugin-text@0.0.8/text.js",
      "dist/users.html!github:systemjs/plugin-text@0.0.8/text.js",
      "dist/users.js",
      "dist/welcome.html!github:systemjs/plugin-text@0.0.8/text.js",
      "dist/welcome.js",
      "github:systemjs/plugin-text@0.0.8.json"
    ],
    "dist/aurelia.js": [
      "github:github/fetch@1.0.0.json",
      "github:github/fetch@1.0.0/fetch.js",
      "github:systemjs/plugin-text@0.0.8.json",
      "github:twbs/bootstrap@3.3.7.json",
      "github:twbs/bootstrap@3.3.7/dist/css/bootstrap.css!github:systemjs/plugin-text@0.0.8/text.js",
      "github:twbs/bootstrap@3.3.7/dist/js/bootstrap.js",
      "npm:aurelia-animator-css@1.0.1.json",
      "npm:aurelia-animator-css@1.0.1/aurelia-animator-css.js",
      "npm:aurelia-binding@2.5.4.json",
      "npm:aurelia-binding@2.5.4/aurelia-binding.js",
      "npm:aurelia-bootstrapper@2.3.3.json",
      "npm:aurelia-bootstrapper@2.3.3/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.5.2.json",
      "npm:aurelia-dependency-injection@1.5.2/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.3.json",
      "npm:aurelia-event-aggregator@1.0.3/aurelia-event-aggregator.js",
      "npm:aurelia-fetch-client@1.0.1.json",
      "npm:aurelia-fetch-client@1.0.1/aurelia-fetch-client.js",
      "npm:aurelia-framework@1.3.1.json",
      "npm:aurelia-framework@1.3.1/aurelia-framework.js",
      "npm:aurelia-history-browser@1.4.0.json",
      "npm:aurelia-history-browser@1.4.0/aurelia-history-browser.js",
      "npm:aurelia-history@1.2.1.json",
      "npm:aurelia-history@1.2.1/aurelia-history.js",
      "npm:aurelia-loader-default@1.2.1.json",
      "npm:aurelia-loader-default@1.2.1/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.2.json",
      "npm:aurelia-loader@1.0.2/aurelia-loader.js",
      "npm:aurelia-logging-console@1.1.1.json",
      "npm:aurelia-logging-console@1.1.1/aurelia-logging-console.js",
      "npm:aurelia-logging@1.5.2.json",
      "npm:aurelia-logging@1.5.2/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.7.json",
      "npm:aurelia-metadata@1.0.7/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.8.1.json",
      "npm:aurelia-pal-browser@1.8.1/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.8.2.json",
      "npm:aurelia-pal@1.8.2/aurelia-pal.js",
      "npm:aurelia-path@1.1.5.json",
      "npm:aurelia-path@1.1.5/aurelia-path.js",
      "npm:aurelia-polyfills@1.3.4.json",
      "npm:aurelia-polyfills@1.3.4/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.3.2.json",
      "npm:aurelia-route-recognizer@1.3.2/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.7.1.json",
      "npm:aurelia-router@1.7.1/aurelia-router.js",
      "npm:aurelia-task-queue@1.3.3.json",
      "npm:aurelia-task-queue@1.3.3/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.5.3.json",
      "npm:aurelia-templating-binding@1.5.3/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.13.1.json",
      "npm:aurelia-templating-resources@1.13.1/aurelia-templating-resources.js",
      "npm:aurelia-templating-router@1.4.0.json",
      "npm:aurelia-templating-router@1.4.0/aurelia-templating-router.js",
      "npm:aurelia-templating@1.10.4.json",
      "npm:aurelia-templating@1.10.4/aurelia-templating.js",
      "npm:jquery@2.2.4.json",
      "npm:jquery@2.2.4/dist/jquery.js"
    ]
  }
});