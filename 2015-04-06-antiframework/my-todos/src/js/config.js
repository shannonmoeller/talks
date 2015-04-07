System.config({
  "baseURL": "./",
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "vendor/github/*.js",
    "npm:*": "vendor/npm/*.js"
  }
});

System.config({
  "map": {
    "babel": "npm:babel@4.7.16",
    "babel-runtime": "npm:babel-runtime@4.7.16",
    "document-register-element": "github:WebReflection/document-register-element@0.3.0",
    "todomvc-app-css": "npm:todomvc-app-css@2.0.0",
    "todomvc-common": "npm:todomvc-common@1.0.0",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:babel-runtime@4.7.16": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

