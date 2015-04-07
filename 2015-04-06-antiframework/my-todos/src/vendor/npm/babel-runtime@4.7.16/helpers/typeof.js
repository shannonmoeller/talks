/* */ 
"use strict";
var _core = require("../core-js")["default"];
exports["default"] = function(obj) {
  return obj && obj.constructor === _core.Symbol ? "symbol" : typeof obj;
};
exports.__esModule = true;
