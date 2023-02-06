System.register(["@beyond-js/kernel@0.1.8/bundle","react@18.2.0","scheduler@0.23.0","react-dom@18.2.0","react-dom@18.2.0/client","@beyond-js/kernel@0.1.8/core","@beyond-js/widgets@0.1.3/render","@beyond-js/kernel@0.1.8/styles","@beyond-js/widgets@0.1.3/controller","@beyond-js/react-18-widgets@0.0.3/base","@beyond-js/kernel@0.1.8/routing","@beyond-js/widgets@0.1.3/routing"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.8"],["react","18.2.0"],["scheduler","0.23.0"],["react-dom","18.2.0"],["@beyond-js/widgets","0.1.3"],["@beyond-js/react-18-widgets","0.0.3"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.8/bundle', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('scheduler@0.23.0', dep), dep => dependencies.set('react-dom@18.2.0', dep), dep => dependencies.set('react-dom@18.2.0/client', dep), dep => dependencies.set('@beyond-js/kernel@0.1.8/core', dep), dep => dependencies.set('@beyond-js/widgets@0.1.3/render', dep), dep => dependencies.set('@beyond-js/kernel@0.1.8/styles', dep), dep => dependencies.set('@beyond-js/widgets@0.1.3/controller', dep), dep => dependencies.set('@beyond-js/react-18-widgets@0.0.3/base', dep), dep => dependencies.set('@beyond-js/kernel@0.1.8/routing', dep), dep => dependencies.set('@beyond-js/widgets@0.1.3/routing', dep)],
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/@beyond-js/react-18-widgets/page.0.0.3.js
var page_0_0_3_exports = {};
__export(page_0_0_3_exports, {
  PageReactWidgetController: () => PageReactWidgetController,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(page_0_0_3_exports);

// node_modules/@beyond-js/react-18-widgets/page/page.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.8/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/react-18-widgets@0.0.3/base"), 0);
var dependency_2 = __toESM(require("@beyond-js/widgets@0.1.3/routing"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/react-18-widgets@0.0.3/page"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/react-18-widgets/base", dependency_1], ["@beyond-js/widgets/routing", dependency_2]]);
var ims = /* @__PURE__ */new Map();
ims.set("./page", {
  hash: 2113815253,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PageReactWidgetController = void 0;
    var _base = require2("@beyond-js/react-18-widgets/base");
    var _routing = require2("@beyond-js/widgets/routing");
    class PageReactWidgetController2 extends _base.ReactWidgetController {
      #uri;
      get uri() {
        return this.#uri;
      }
      mount() {
        return super.mount({
          uri: this.#uri
        });
      }
      async initialise() {
        this.#uri = new _routing.PageURI({
          widget: this.widget
        });
        await super.initialise();
      }
    }
    exports.PageReactWidgetController = PageReactWidgetController2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./page",
  "from": "PageReactWidgetController",
  "name": "PageReactWidgetController"
}];
var PageReactWidgetController;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "PageReactWidgetController") && (PageReactWidgetController = require2 ? require2("./page").PageReactWidgetController : value);
};
var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;
  this.off = (event, listener) => void 0;
}();
__pkg.initialise(ims);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3JlYWN0LTE4LXdpZGdldHMvcGFnZS4wLjAuMy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0LTE4LXdpZGdldHMvcGFnZS9fX3NvdXJjZXMvcGFnZS9wYWdlLnRzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIl9fYmV5b25kX3BrZyIsImhtciIsIm1vZHVsZSIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInVyaSIsIm1vdW50IiwiaW5pdGlhbGlzZSIsIlBhZ2VVUkkiLCJ3aWRnZXQiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztFQUFBQztFQUFBQztBQUFBO0FBQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQUE7SUFDQTtJQUVpQixNQUNGSCxtQ0FBa0NJLDRCQUFxQjtNQUNsRTtNQUNBLElBQUlDLE1BQUc7UUFDSCxPQUFPLEtBQUs7TUFDaEI7TUFFQUMsUUFBSztRQUNELE9BQU8sTUFBTUEsTUFBTTtVQUFDRCxLQUFLLEtBQUs7UUFBSSxDQUFDO01BQ3ZDO01BRUEsTUFBTUUsYUFBVTtRQUNaLEtBQUssT0FBTyxJQUFJQyxpQkFBUTtVQUFDQyxRQUFhLEtBQUtBO1FBQU0sQ0FBQztRQUNsRCxNQUFNLE1BQU1GLFlBQVU7TUFDMUI7O0lBQ0hHIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvd2ViL291dCJ9