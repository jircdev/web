System.register(["react@18.2.0","scheduler@0.23.0","react-dom@18.2.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.2.0"],["scheduler","0.23.0"],["react-dom","18.2.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('scheduler@0.23.0', dep), dep => dependencies.set('react-dom@18.2.0', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
    exports: {}
  }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// node_modules/react-dom/client.js
var require_client = __commonJS({
  "node_modules/react-dom/client.js"(exports) {
    "use strict";

    var m = require("react-dom@18.2.0");
    if (false) {
      exports.createRoot = m.createRoot;
      exports.hydrateRoot = m.hydrateRoot;
    } else {
      i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      exports.createRoot = function (c, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.createRoot(c, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
      exports.hydrateRoot = function (c, h, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.hydrateRoot(c, h, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
    }
    var i;
  }
});

// .beyond/uimport/react-dom/client.18.2.0.js
var client_18_2_0_exports = {};
__export(client_18_2_0_exports, {
  default: () => client_18_2_0_default
});
module.exports = __toCommonJS(client_18_2_0_exports);
__reExport(client_18_2_0_exports, __toESM(require_client()), module.exports);
var import_client = __toESM(require_client());
var client_18_2_0_default = import_client.default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vY2xpZW50LmpzIiwiLi4vLmJleW9uZC91aW1wb3J0L3JlYWN0LWRvbS9jbGllbnQuMTguMi4wLmpzIl0sIm5hbWVzIjpbIm0iLCJyZXF1aXJlIiwiZXhwb3J0cyIsImNyZWF0ZVJvb3QiLCJoeWRyYXRlUm9vdCIsImkiLCJfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCIsImMiLCJvIiwidXNpbmdDbGllbnRFbnRyeVBvaW50IiwiaCIsIl9fZXhwb3J0IiwiZGVmYXVsdCIsIm1vZHVsZSIsIl9fcmVFeHBvcnQiLCJfX3RvRVNNIiwiY2xpZW50XzE4XzJfMF9kZWZhdWx0IiwiaW1wb3J0X2NsaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7RUFBQTtJQUFBOztJQUVBLElBQUlBLElBQUlDLFFBQVE7SUFDaEIsSUFBSSxPQUF1QztNQUN6Q0MsUUFBUUMsYUFBYUgsRUFBRUc7TUFDdkJELFFBQVFFLGNBQWNKLEVBQUVJO0lBQzFCLE9BQU87TUFDREMsSUFBSUwsRUFBRU07TUFDVkosUUFBUUMsYUFBYSxVQUFTSSxHQUFHQyxHQUFHO1FBQ2xDSCxFQUFFSSx3QkFBd0I7UUFDMUIsSUFBSTtVQUNGLE9BQU9ULEVBQUVHLFdBQVdJLEdBQUdDLENBQUM7UUFDMUIsVUFBRTtVQUNBSCxFQUFFSSx3QkFBd0I7UUFDNUI7TUFDRjtNQUNBUCxRQUFRRSxjQUFjLFVBQVNHLEdBQUdHLEdBQUdGLEdBQUc7UUFDdENILEVBQUVJLHdCQUF3QjtRQUMxQixJQUFJO1VBQ0YsT0FBT1QsRUFBRUksWUFBWUcsR0FBR0csR0FBR0YsQ0FBQztRQUM5QixVQUFFO1VBQ0FILEVBQUVJLHdCQUF3QjtRQUM1QjtNQUNGO0lBQ0Y7SUFqQk07RUFBQTtBQUFBOzs7QUNQTjtBQUFBRTtFQUFBQztBQUFBO0FBQUFDO0FBQUFDLGtDQUFjQywyQkFBZEY7QUFFQSxvQkFBcUJFO0FBQ3JCLElBQU9DLHdCQUFRQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3dlYi9vdXQifQ==