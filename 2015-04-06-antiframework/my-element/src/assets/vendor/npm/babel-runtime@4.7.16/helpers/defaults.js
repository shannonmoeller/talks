/* */ 
"use strict";
var _core = require("../core-js")["default"];
exports["default"] = function(obj, defaults) {
  var keys = _core.Object.getOwnPropertyNames(defaults);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = _core.Object.getOwnPropertyDescriptor(defaults, key);
    if (value && value.configurable && obj[key] === undefined) {
      Object.defineProperty(obj, key, value);
    }
  }
  return obj;
};
exports.__esModule = true;
