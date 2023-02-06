System.register(["@beyond-js/kernel@0.1.8/bundle"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.8"],["@beyond-js/widgets","0.1.3"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.8/bundle', dep)],
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

// .beyond/uimport/@beyond-js/widgets/application.0.1.3.js
var application_0_1_3_exports = {};
__export(application_0_1_3_exports, {
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(application_0_1_3_exports);

// node_modules/@beyond-js/widgets/application/application.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.8/bundle"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/widgets@0.1.3/application"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([]);
var ims = /* @__PURE__ */new Map();
ims.set("./startup", {
  hash: 3577862121,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function createLayout(config) {
      const {
        layout
      } = config;
      const element = document.createElement(layout ? layout : "beyond-layout-children");
      document.body.append(element);
    }
    function startup() {
      const promises = [];
      const {
        specifier
      } = globalThis.__app_package;
      promises.push(bimport(`${specifier}/config`));
      promises.push(bimport(`${specifier}/start`));
      promises.push(bimport("@beyond-js/kernel/core"));
      promises.push(bimport("@beyond-js/kernel/routing"));
      promises.push(bimport("@beyond-js/widgets/routing"));
      promises.push(bimport("@beyond-js/widgets/layout"));
      Promise.all(promises).then(([{
        default: config
      }]) => createLayout(config)).catch(exc => console.log(exc.stack));
    }
    (() => {
      if (!globalThis.__ssr_fetch) {
        startup();
        return;
      }
      window.__ssr_fetch.then(ssr => {
        if (!ssr.json || ssr.json.errors?.length) {
          console.error("Error getting ssr data:", ssr.json.errors);
          startup();
          return;
        }
        const promises = [];
        const {
          specifier
        } = globalThis.__app_package;
        promises.push(bimport(`${specifier}/config`));
        promises.push(bimport(`${specifier}/start`));
        promises.push(bimport("@beyond-js/widgets/render"));
        promises.push(bimport("@beyond-js/widgets/layout"));
        Promise.all(promises).then(([{
          default: config
        },, render, layout]) => {
          const specs = new Map(ssr.json.widgets.specs);
          render.widgets.register([...specs.values()]);
          const instances = ssr.json.widgets.instances;
          const prerender = render.prerender;
          instances.forEach(instance => prerender.ssr.push(instance));
          const lssr = layout.ssr;
          lssr.data(ssr.json.main, ssr.json.page);
          createLayout(config);
        }).catch(exc => console.log(exc.stack));
      });
    })();
  }
});
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {};
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3dpZGdldHMvYXBwbGljYXRpb24uMC4xLjMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL2FwcGxpY2F0aW9uL19fc291cmNlcy9hcHBsaWNhdGlvbi9zdGFydHVwLnRzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiY3JlYXRlTGF5b3V0IiwiY29uZmlnIiwibGF5b3V0IiwiZWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJvZHkiLCJhcHBlbmQiLCJzdGFydHVwIiwicHJvbWlzZXMiLCJzcGVjaWZpZXIiLCJnbG9iYWxUaGlzIiwiX19hcHBfcGFja2FnZSIsInB1c2giLCJiaW1wb3J0IiwiUHJvbWlzZSIsImFsbCIsInRoZW4iLCJkZWZhdWx0IiwiY2F0Y2giLCJleGMiLCJjb25zb2xlIiwibG9nIiwic3RhY2siLCJfX3Nzcl9mZXRjaCIsIndpbmRvdyIsInNzciIsImpzb24iLCJlcnJvcnMiLCJsZW5ndGgiLCJlcnJvciIsInJlbmRlciIsInNwZWNzIiwiTWFwIiwid2lkZ2V0cyIsInJlZ2lzdGVyIiwidmFsdWVzIiwiaW5zdGFuY2VzIiwicHJlcmVuZGVyIiwiZm9yRWFjaCIsImluc3RhbmNlIiwibHNzciIsImRhdGEiLCJtYWluIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7RUFBQUM7QUFBQTtBQUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0tBLFNBQVNDLGFBQWFDLFFBQVc7TUFDN0IsTUFBTTtRQUFDQztNQUFNLElBQUlEO01BQ2pCLE1BQU1FLFVBQVVDLFNBQVNDLGNBQWNILFNBQVNBLFNBQVMsd0JBQXdCO01BQ2pGRSxTQUFTRSxLQUFLQyxPQUFPSixPQUFPO0lBQ2hDO0lBRUEsU0FBU0ssVUFBTztNQUNaLE1BQU1DLFdBQTJCO01BRWpDLE1BQU07UUFBQ0M7TUFBUyxJQUFVQyxXQUFZQztNQUN0Q0gsU0FBU0ksS0FBS0MsUUFBUSxHQUFHSixrQkFBa0IsQ0FBQztNQUM1Q0QsU0FBU0ksS0FBS0MsUUFBUSxHQUFHSixpQkFBaUIsQ0FBQztNQUUzQ0QsU0FBU0ksS0FBS0MsUUFBUSx3QkFBd0IsQ0FBQztNQUMvQ0wsU0FBU0ksS0FBS0MsUUFBUSwyQkFBMkIsQ0FBQztNQUNsREwsU0FBU0ksS0FBS0MsUUFBUSw0QkFBNEIsQ0FBQztNQUNuREwsU0FBU0ksS0FBS0MsUUFBUSwyQkFBMkIsQ0FBQztNQUVsREMsUUFBUUMsSUFBSVAsUUFBUSxFQUNmUSxLQUFLLENBQUMsQ0FBQztRQUFDQyxTQUFTakI7TUFBTSxDQUFDLE1BQU1ELGFBQWFDLE1BQU0sQ0FBQyxFQUNsRGtCLE1BQU1DLE9BQU9DLFFBQVFDLElBQUlGLElBQUlHLEtBQUssQ0FBQztJQUM1QztJQUVBLENBQUMsTUFBSztNQUNGLElBQUksQ0FBT1osV0FBWWEsYUFBYTtRQUNoQ2hCLFNBQU87UUFDUDs7TUFNRWlCLE9BQVFELFlBQVlQLEtBQU1TLE9BQVk7UUFDeEMsSUFBSSxDQUFDQSxJQUFJQyxRQUFRRCxJQUFJQyxLQUFLQyxRQUFRQyxRQUFRO1VBQ3RDUixRQUFRUyxNQUFNLDJCQUEyQkosSUFBSUMsS0FBS0MsTUFBTTtVQUN4RHBCLFNBQU87VUFDUDs7UUFHSixNQUFNQyxXQUEyQjtRQUVqQyxNQUFNO1VBQUNDO1FBQVMsSUFBVUMsV0FBWUM7UUFDdENILFNBQVNJLEtBQUtDLFFBQVEsR0FBR0osa0JBQWtCLENBQUM7UUFDNUNELFNBQVNJLEtBQUtDLFFBQVEsR0FBR0osaUJBQWlCLENBQUM7UUFFM0NELFNBQVNJLEtBQUtDLFFBQVEsMkJBQTJCLENBQUM7UUFDbERMLFNBQVNJLEtBQUtDLFFBQVEsMkJBQTJCLENBQUM7UUFFbERDLFFBQVFDLElBQUlQLFFBQVEsRUFBRVEsS0FBSyxDQUFDLENBQUM7VUFBQ0MsU0FBU2pCO1FBQU0sSUFBSzhCLFFBQVE3QixNQUFNLE1BQUs7VUFFakUsTUFBTThCLFFBQVEsSUFBSUMsSUFBSVAsSUFBSUMsS0FBS08sUUFBUUYsS0FBSztVQUM1Q0QsT0FBT0csUUFBUUMsU0FBUyxDQUFDLEdBQUdILE1BQU1JLFFBQVEsQ0FBQztVQUczQyxNQUFNQyxZQUFZWCxJQUFJQyxLQUFLTyxRQUFRRztVQUNuQyxNQUFNQyxZQUFzQlAsT0FBT087VUFDbkNELFVBQVVFLFFBQVNDLFlBQWtCRixVQUFVWixJQUFJYixLQUFLMkIsUUFBUSxDQUFDO1VBR2pFLE1BQU1DLE9BQWlCdkMsT0FBT3dCO1VBQzlCZSxLQUFLQyxLQUFLaEIsSUFBSUMsS0FBS2dCLE1BQU1qQixJQUFJQyxLQUFLaUIsSUFBSTtVQUN0QzVDLGFBQWFDLE1BQU07UUFDdkIsQ0FBQyxFQUFFa0IsTUFBTUMsT0FBT0MsUUFBUUMsSUFBSUYsSUFBSUcsS0FBSyxDQUFDO01BQzFDLENBQUM7SUFDTCxJQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvd2ViL291dCJ9