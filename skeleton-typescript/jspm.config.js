SystemJS.config({
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/"
  },
  browserConfig: {
    "paths": {
      "": "dist/",
      "aurelia-skeleton-navigation-typescript/": "/src/"
    }
  },
  nodeConfig: {
    "paths": {
      "aurelia-skeleton-navigation-typescript/": "src/"
    }
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
  packages: {
    "github:twbs/bootstrap@3.3.7": {
      "map": {
        "jquery": "npm:jquery@2.2.4"
      }
    },
    "npm:aurelia-animator-css@1.0.1": {
      "map": {
        "aurelia-metadata": "npm:aurelia-metadata@1.0.1",
        "aurelia-pal": "npm:aurelia-pal@1.0.0",
        "aurelia-templating": "npm:aurelia-templating@1.1.1"
      }
    },
    "npm:aurelia-binding@1.0.9": {
      "map": {
        "aurelia-logging": "npm:aurelia-logging@1.0.0",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.1",
        "aurelia-pal": "npm:aurelia-pal@1.0.0",
        "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0"
      }
    },
    "npm:aurelia-bootstrapper@1.0.0": {
      "map": {
        "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0",
        "aurelia-framework": "npm:aurelia-framework@1.0.6",
        "aurelia-history": "npm:aurelia-history@1.0.0",
        "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
        "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0",
        "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
        "aurelia-pal": "npm:aurelia-pal@1.0.0",
        "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0",
        "aurelia-polyfills": "npm:aurelia-polyfills@1.1.1",
        "aurelia-router": "npm:aurelia-router@1.0.6",
        "aurelia-templating": "npm:aurelia-templating@1.1.1",
        "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0",
        "aurelia-templating-resources": "npm:aurelia-templating-resources@1.1.1",
        "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0"
      }
    },
    "npm:aurelia-dependency-injection@1.1.0": {
      "map": {
        "aurelia-metadata": "npm:aurelia-metadata@1.0.1",
        "aurelia-pal": "npm:aurelia-pal@1.0.0"
      }
    },
    "npm:aurelia-event-aggregator@1.0.0": {
      "map": {
        "aurelia-logging": "npm:aurelia-logging@1.0.0"
      }
    },
    "npm:aurelia-framework@1.0.6": {
      "map": {
        "aurelia-binding": "npm:aurelia-binding@1.0.9",
        "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.1.0",
        "aurelia-loader": "npm:aurelia-loader@1.0.0",
        "aurelia-logging": "npm:aurelia-logging@1.0.0",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.1",
        "aurelia-pal": "npm:aurelia-pal@1.0.0",
        "aurelia-path": "npm:aurelia-path@1.1.1",
        "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0",
        "aurelia-templating": "npm:aurelia-templating@1.1.1"
      }
    },
    "npm:aurelia-history-browser@1.0.0": {
      "map": {
        "aurelia-history": "npm:aurelia-history@1.0.0",
        "aurelia-pal": "npm:aurelia-pal@1.0.0"
      }
    },
    "npm:aurelia-loader-default@1.0.0": {
      "map": {
        "aurelia-loader": "npm:aurelia-loader@1.0.0",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.1",
        "aurelia-pal": "npm:aurelia-pal@1.0.0"
      }
    },
    "npm:aurelia-loader@1.0.0": {
      "map": {
        "aurelia-metadata": "npm:aurelia-metadata@1.0.1",
        "aurelia-path": "npm:aurelia-path@1.1.1"
      }
    },
    "npm:aurelia-logging-console@1.0.0": {
      "map": {
        "aurelia-logging": "npm:aurelia-logging@1.0.0"
      }
    },
    "npm:aurelia-metadata@1.0.1": {
      "map": {
        "aurelia-pal": "npm:aurelia-pal@1.0.0"
      }
    },
    "npm:aurelia-pal-browser@1.0.0": {
      "map": {
        "aurelia-pal": "npm:aurelia-pal@1.0.0"
      }
    },
    "npm:aurelia-polyfills@1.1.1": {
      "map": {
        "aurelia-pal": "npm:aurelia-pal@1.0.0"
      }
    },
    "npm:aurelia-route-recognizer@1.1.0": {
      "map": {
        "aurelia-path": "npm:aurelia-path@1.1.1"
      }
    },
    "npm:aurelia-router@1.0.6": {
      "map": {
        "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.1.0",
        "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0",
        "aurelia-history": "npm:aurelia-history@1.0.0",
        "aurelia-logging": "npm:aurelia-logging@1.0.0",
        "aurelia-path": "npm:aurelia-path@1.1.1",
        "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.1.0"
      }
    },
    "npm:aurelia-task-queue@1.1.0": {
      "map": {
        "aurelia-pal": "npm:aurelia-pal@1.0.0"
      }
    },
    "npm:aurelia-templating-binding@1.0.0": {
      "map": {
        "aurelia-binding": "npm:aurelia-binding@1.0.9",
        "aurelia-logging": "npm:aurelia-logging@1.0.0",
        "aurelia-templating": "npm:aurelia-templating@1.1.1"
      }
    },
    "npm:aurelia-templating-resources@1.1.1": {
      "map": {
        "aurelia-binding": "npm:aurelia-binding@1.0.9",
        "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.1.0",
        "aurelia-loader": "npm:aurelia-loader@1.0.0",
        "aurelia-logging": "npm:aurelia-logging@1.0.0",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.1",
        "aurelia-pal": "npm:aurelia-pal@1.0.0",
        "aurelia-path": "npm:aurelia-path@1.1.1",
        "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0",
        "aurelia-templating": "npm:aurelia-templating@1.1.1"
      }
    },
    "npm:aurelia-templating-router@1.0.0": {
      "map": {
        "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.1.0",
        "aurelia-logging": "npm:aurelia-logging@1.0.0",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.1",
        "aurelia-pal": "npm:aurelia-pal@1.0.0",
        "aurelia-path": "npm:aurelia-path@1.1.1",
        "aurelia-router": "npm:aurelia-router@1.0.6",
        "aurelia-templating": "npm:aurelia-templating@1.1.1"
      }
    },
    "npm:aurelia-templating@1.1.1": {
      "map": {
        "aurelia-binding": "npm:aurelia-binding@1.0.9",
        "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.1.0",
        "aurelia-loader": "npm:aurelia-loader@1.0.0",
        "aurelia-logging": "npm:aurelia-logging@1.0.0",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.1",
        "aurelia-pal": "npm:aurelia-pal@1.0.0",
        "aurelia-path": "npm:aurelia-path@1.1.1",
        "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0"
      }
    },
    "npm:bluebird@3.4.1": {
      "map": {}
    },
    "npm:font-awesome@4.6.3": {
      "map": {
        "css": "github:systemjs/plugin-css@0.1.31"
      }
    }
  },
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.1",
    "aurelia-binding": "npm:aurelia-binding@1.0.9",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.1.0",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.1",
    "aurelia-framework": "npm:aurelia-framework@1.0.6",
    "aurelia-history": "npm:aurelia-history@1.0.0",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
    "aurelia-loader": "npm:aurelia-loader@1.0.0",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0",
    "aurelia-logging": "npm:aurelia-logging@1.0.0",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
    "aurelia-metadata": "npm:aurelia-metadata@1.0.1",
    "aurelia-pal": "npm:aurelia-pal@1.0.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0",
    "aurelia-path": "npm:aurelia-path@1.1.1",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.1.1",
    "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.1.0",
    "aurelia-router": "npm:aurelia-router@1.0.6",
    "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0",
    "aurelia-templating": "npm:aurelia-templating@1.1.1",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.1.1",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0",
    "bluebird": "npm:bluebird@3.4.1",
    "bootstrap": "github:twbs/bootstrap@3.3.7",
    "fetch": "github:github/fetch@1.0.0",
    "font-awesome": "npm:font-awesome@4.6.3",
    "jquery": "npm:jquery@2.2.4",
    "text": "github:systemjs/plugin-text@0.0.8"
  }
});