/* */ 
"use strict";
var _core = require("../core-js")["default"];
exports["default"] = function(strings, raw) {
  return _core.Object.freeze(Object.defineProperties(strings, {raw: {value: _core.Object.freeze(raw)}}));
};
exports.__esModule = true;
