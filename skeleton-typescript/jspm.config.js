System.config({
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
    "assert": "npm:jspm-nodelibs-assert@0.2.1",
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
    "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.1",
    "events": "npm:jspm-nodelibs-events@0.2.2",
    "fetch": "github:github/fetch@1.0.0",
    "font-awesome": "npm:font-awesome@4.6.3",
    "fs": "npm:jspm-nodelibs-fs@0.2.1",
    "jquery": "npm:jquery@2.2.4",
    "net": "npm:jspm-nodelibs-net@0.2.1",
    "os": "npm:jspm-nodelibs-os@0.2.2",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "stream": "npm:jspm-nodelibs-stream@0.2.1",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.2",
    "text": "github:systemjs/plugin-text@0.0.8",
    "ts": "github:frankwallis/plugin-typescript@9.0.0",
    "typescript": "npm:typescript@2.9.2",
    "util": "npm:jspm-nodelibs-util@0.2.2",
    "vm": "npm:jspm-nodelibs-vm@0.2.1"
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
    },
    "npm:typescript@2.9.2": {
      "map": {
        "source-map-support": "npm:source-map-support@0.5.19"
      }
    },
    "npm:jspm-nodelibs-os@0.2.2": {
      "map": {
        "os-browserify": "npm:os-browserify@0.3.0"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.1": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.12.0"
      }
    },
    "npm:source-map-support@0.5.19": {
      "map": {
        "buffer-from": "npm:buffer-from@1.1.2",
        "source-map": "npm:source-map@0.6.1"
      }
    },
    "npm:crypto-browserify@3.12.0": {
      "map": {
        "browserify-cipher": "npm:browserify-cipher@1.0.1",
        "inherits": "npm:inherits@2.0.4",
        "create-hash": "npm:create-hash@1.2.0",
        "randomfill": "npm:randomfill@1.0.4",
        "create-ecdh": "npm:create-ecdh@4.0.4",
        "create-hmac": "npm:create-hmac@1.1.7",
        "randombytes": "npm:randombytes@2.1.0",
        "browserify-sign": "npm:browserify-sign@4.2.1",
        "diffie-hellman": "npm:diffie-hellman@5.0.3",
        "public-encrypt": "npm:public-encrypt@4.0.3",
        "pbkdf2": "npm:pbkdf2@3.1.2"
      }
    },
    "npm:create-hash@1.2.0": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "cipher-base": "npm:cipher-base@1.0.4",
        "ripemd160": "npm:ripemd160@2.0.2",
        "md5.js": "npm:md5.js@1.3.5",
        "sha.js": "npm:sha.js@2.4.11"
      }
    },
    "npm:randomfill@1.0.4": {
      "map": {
        "randombytes": "npm:randombytes@2.1.0",
        "safe-buffer": "npm:safe-buffer@5.2.1"
      }
    },
    "npm:create-hmac@1.1.7": {
      "map": {
        "create-hash": "npm:create-hash@1.2.0",
        "inherits": "npm:inherits@2.0.4",
        "cipher-base": "npm:cipher-base@1.0.4",
        "ripemd160": "npm:ripemd160@2.0.2",
        "sha.js": "npm:sha.js@2.4.11",
        "safe-buffer": "npm:safe-buffer@5.2.1"
      }
    },
    "npm:browserify-cipher@1.0.1": {
      "map": {
        "browserify-des": "npm:browserify-des@1.0.2",
        "browserify-aes": "npm:browserify-aes@1.2.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3"
      }
    },
    "npm:browserify-sign@4.2.1": {
      "map": {
        "create-hash": "npm:create-hash@1.2.0",
        "create-hmac": "npm:create-hmac@1.1.7",
        "inherits": "npm:inherits@2.0.4",
        "safe-buffer": "npm:safe-buffer@5.2.1",
        "elliptic": "npm:elliptic@6.5.4",
        "browserify-rsa": "npm:browserify-rsa@4.1.0",
        "bn.js": "npm:bn.js@5.2.0",
        "parse-asn1": "npm:parse-asn1@5.1.6",
        "readable-stream": "npm:readable-stream@3.6.0"
      }
    },
    "npm:diffie-hellman@5.0.3": {
      "map": {
        "randombytes": "npm:randombytes@2.1.0",
        "bn.js": "npm:bn.js@4.12.0",
        "miller-rabin": "npm:miller-rabin@4.0.1"
      }
    },
    "npm:public-encrypt@4.0.3": {
      "map": {
        "create-hash": "npm:create-hash@1.2.0",
        "randombytes": "npm:randombytes@2.1.0",
        "safe-buffer": "npm:safe-buffer@5.2.1",
        "browserify-rsa": "npm:browserify-rsa@4.1.0",
        "bn.js": "npm:bn.js@4.12.0",
        "parse-asn1": "npm:parse-asn1@5.1.6"
      }
    },
    "npm:randombytes@2.1.0": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.2.1"
      }
    },
    "npm:browserify-des@1.0.2": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.4",
        "inherits": "npm:inherits@2.0.4",
        "safe-buffer": "npm:safe-buffer@5.2.1",
        "des.js": "npm:des.js@1.0.1"
      }
    },
    "npm:pbkdf2@3.1.2": {
      "map": {
        "create-hash": "npm:create-hash@1.2.0",
        "create-hmac": "npm:create-hmac@1.1.7",
        "ripemd160": "npm:ripemd160@2.0.2",
        "safe-buffer": "npm:safe-buffer@5.2.1",
        "sha.js": "npm:sha.js@2.4.11"
      }
    },
    "npm:create-ecdh@4.0.4": {
      "map": {
        "elliptic": "npm:elliptic@6.5.4",
        "bn.js": "npm:bn.js@4.12.0"
      }
    },
    "npm:evp_bytestokey@1.0.3": {
      "map": {
        "md5.js": "npm:md5.js@1.3.5",
        "safe-buffer": "npm:safe-buffer@5.2.1"
      }
    },
    "npm:browserify-aes@1.2.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.4",
        "create-hash": "npm:create-hash@1.2.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "inherits": "npm:inherits@2.0.4",
        "safe-buffer": "npm:safe-buffer@5.2.1",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:cipher-base@1.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "safe-buffer": "npm:safe-buffer@5.2.1"
      }
    },
    "npm:ripemd160@2.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "hash-base": "npm:hash-base@3.1.0"
      }
    },
    "npm:md5.js@1.3.5": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "safe-buffer": "npm:safe-buffer@5.2.1",
        "hash-base": "npm:hash-base@3.1.0"
      }
    },
    "npm:sha.js@2.4.11": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "safe-buffer": "npm:safe-buffer@5.2.1"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.3": {
      "map": {
        "buffer": "npm:buffer@5.7.1"
      }
    },
    "npm:elliptic@6.5.4": {
      "map": {
        "bn.js": "npm:bn.js@4.12.0",
        "inherits": "npm:inherits@2.0.4",
        "hmac-drbg": "npm:hmac-drbg@1.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
        "brorand": "npm:brorand@1.1.0",
        "hash.js": "npm:hash.js@1.1.7"
      }
    },
    "npm:browserify-rsa@4.1.0": {
      "map": {
        "bn.js": "npm:bn.js@5.2.0",
        "randombytes": "npm:randombytes@2.1.0"
      }
    },
    "npm:parse-asn1@5.1.6": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.2.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "pbkdf2": "npm:pbkdf2@3.1.2",
        "safe-buffer": "npm:safe-buffer@5.2.1",
        "asn1.js": "npm:asn1.js@5.4.1"
      }
    },
    "npm:miller-rabin@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.12.0",
        "brorand": "npm:brorand@1.1.0"
      }
    },
    "npm:des.js@1.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
      }
    },
    "npm:hash-base@3.1.0": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "readable-stream": "npm:readable-stream@3.6.0",
        "safe-buffer": "npm:safe-buffer@5.2.1"
      }
    },
    "npm:readable-stream@3.6.0": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "string_decoder": "npm:string_decoder@1.1.1"
      }
    },
    "npm:buffer@5.7.1": {
      "map": {
        "ieee754": "npm:ieee754@1.2.1",
        "base64-js": "npm:base64-js@1.5.1"
      }
    },
    "npm:hmac-drbg@1.0.1": {
      "map": {
        "hash.js": "npm:hash.js@1.1.7",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
      }
    },
    "npm:hash.js@1.1.7": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.2": {
      "map": {
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.1": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.2"
      }
    },
    "npm:asn1.js@5.4.1": {
      "map": {
        "bn.js": "npm:bn.js@4.12.0",
        "inherits": "npm:inherits@2.0.4",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
        "safer-buffer": "npm:safer-buffer@2.1.2"
      }
    },
    "npm:stream-browserify@2.0.2": {
      "map": {
        "readable-stream": "npm:readable-stream@2.3.7",
        "inherits": "npm:inherits@2.0.4"
      }
    },
    "npm:readable-stream@2.3.7": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "string_decoder": "npm:string_decoder@1.1.1",
        "inherits": "npm:inherits@2.0.4",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "core-util-is": "npm:core-util-is@1.0.2",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@2.0.1"
      }
    },
    "npm:string_decoder@1.1.1": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2"
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
    ],
    "github:twbs/bootstrap@3.3.7/dist/js/bootstrap.js": [
      "jquery"
    ],
    "npm:aurelia-history-browser@1.4.0/aurelia-history-browser.js": [
      "aurelia-history",
      "aurelia-pal"
    ],
    "npm:aurelia-loader-default@1.2.1/aurelia-loader-default.js": [
      "aurelia-loader",
      "aurelia-pal",
      "aurelia-metadata"
    ],
    "npm:aurelia-loader@1.0.2/aurelia-loader.js": [
      "aurelia-path",
      "aurelia-metadata"
    ],
    "npm:aurelia-metadata@1.0.7/aurelia-metadata.js": [
      "aurelia-pal"
    ],
    "npm:aurelia-templating-router@1.4.0/aurelia-templating-router.js": [
      "aurelia-router",
      "aurelia-metadata",
      "aurelia-path",
      "aurelia-templating",
      "aurelia-dependency-injection",
      "aurelia-binding",
      "aurelia-pal",
      "aurelia-logging"
    ],
    "npm:aurelia-router@1.7.1/aurelia-router.js": [
      "aurelia-logging",
      "aurelia-dependency-injection",
      "aurelia-history",
      "aurelia-route-recognizer",
      "aurelia-event-aggregator"
    ],
    "npm:aurelia-templating@1.10.4/aurelia-templating.js": [
      "aurelia-logging",
      "aurelia-metadata",
      "aurelia-pal",
      "aurelia-loader",
      "aurelia-path",
      "aurelia-binding",
      "aurelia-dependency-injection",
      "aurelia-task-queue"
    ],
    "npm:aurelia-dependency-injection@1.5.2/aurelia-dependency-injection.js": [
      "aurelia-metadata",
      "aurelia-pal"
    ],
    "npm:aurelia-binding@2.5.4/aurelia-binding.js": [
      "aurelia-logging",
      "aurelia-pal",
      "aurelia-task-queue",
      "aurelia-metadata"
    ],
    "npm:aurelia-route-recognizer@1.3.2/aurelia-route-recognizer.js": [
      "aurelia-path"
    ],
    "npm:aurelia-event-aggregator@1.0.3/aurelia-event-aggregator.js": [
      "aurelia-logging"
    ],
    "npm:aurelia-task-queue@1.3.3/aurelia-task-queue.js": [
      "aurelia-pal"
    ],
    "npm:aurelia-templating-resources@1.13.1/aurelia-templating-resources.js": [
      "aurelia-dependency-injection",
      "aurelia-pal",
      "aurelia-task-queue",
      "aurelia-templating",
      "aurelia-binding",
      "aurelia-logging",
      "aurelia-loader",
      "aurelia-path",
      "aurelia-metadata"
    ],
    "npm:aurelia-polyfills@1.3.4/aurelia-polyfills.js": [
      "aurelia-pal"
    ],
    "npm:aurelia-pal-browser@1.8.1/aurelia-pal-browser.js": [
      "aurelia-pal"
    ],
    "npm:aurelia-templating-binding@1.5.3/aurelia-templating-binding.js": [
      "aurelia-logging",
      "aurelia-binding",
      "aurelia-templating"
    ],
    "npm:aurelia-animator-css@1.0.1/aurelia-animator-css.js": [
      "aurelia-templating",
      "aurelia-pal"
    ],
    "npm:aurelia-bootstrapper@2.3.3/aurelia-bootstrapper.js": [
      "aurelia-pal",
      "aurelia-polyfills"
    ],
    "npm:aurelia-framework@1.3.1/aurelia-framework.js": [
      "aurelia-dependency-injection",
      "aurelia-binding",
      "aurelia-metadata",
      "aurelia-templating",
      "aurelia-loader",
      "aurelia-task-queue",
      "aurelia-path",
      "aurelia-pal",
      "aurelia-logging"
    ]
  }
});