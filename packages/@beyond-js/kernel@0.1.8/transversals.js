System.register(["@beyond-js/kernel@0.1.8/bundle"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.8"]]);
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

// .beyond/uimport/@beyond-js/kernel/transversals.0.1.8.js
var transversals_0_1_8_exports = {};
__export(transversals_0_1_8_exports, {
  Transversal: () => Transversal,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(transversals_0_1_8_exports);

// node_modules/@beyond-js/kernel/transversals/transversals.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.8/bundle"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/kernel@0.1.8/transversals"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([]);
var ims = /* @__PURE__ */new Map();
ims.set("./dependencies", {
  hash: 916907578,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    class _default extends Map {
      update(deps) {
        this.clear();
        deps?.forEach(([specifier, dependency]) => this.set(specifier, dependency));
      }
    }
    exports.default = _default;
  }
});
ims.set("./transversal", {
  hash: 2292377186,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Transversal = void 0;
    var _bundle = require2("@beyond-js/kernel/bundle");
    var _dependencies = require2("./dependencies");
    class Transversal2 {
      #name;
      get name() {
        return this.#name;
      }
      #language;
      get language() {
        return this.#language;
      }
      #bundles = /* @__PURE__ */new Map();
      get bundles() {
        return this.#bundles;
      }
      #dependencies = new _dependencies.default();
      get dependencies() {
        return this.#dependencies;
      }
      constructor(name, language) {
        this.#name = name;
        this.#language = language;
      }
      #initialised = false;
      initialise(bundles) {
        if (this.#initialised) throw new Error(`Transversal "${this.#name}" already initialised`);
        this.#initialised = true;
        const packages = /* @__PURE__ */new Map();
        bundles.forEach(([specs, creator]) => {
          const pkg = new _bundle.Bundle(specs).package(this.#language);
          const ims2 = /* @__PURE__ */new Map();
          const exports2 = {};
          const response = creator(ims2, exports2);
          const {
            dependencies
          } = response ? response : {
            dependencies: void 0
          };
          pkg.exports.descriptor = exports2.descriptor;
          packages.set(pkg.specifier, {
            pkg,
            dependencies,
            ims: ims2
          });
        });
        packages.forEach(({
          pkg,
          dependencies,
          ims: ims2
        }) => {
          const register = (() => {
            const register2 = [];
            dependencies?.forEach(specifier => {
              if (this.#dependencies.has(specifier)) {
                register2.push([specifier, this.#dependencies.get(specifier)]);
                return;
              }
              if (!packages.has(specifier)) {
                const data = `
	Dependencies: ${JSON.stringify([...this.#dependencies.keys()])}. 
	Bundles: ${JSON.stringify([...packages.keys()])}`;
                throw new Error(`Dependency "${specifier}" not found on "${this.#name}" transversal. ${data}`);
              }
              const {
                pkg: pkg2
              } = packages.get(specifier);
              register2.push([specifier, pkg2.exports.values]);
            });
            return register2;
          })();
          packages.forEach(({
            pkg: pkg2
          }) => this.#bundles.set(pkg2.specifier, pkg2.exports.values));
          register && pkg.dependencies.update(register);
          pkg.ims.register(ims2);
        });
        packages.forEach(({
          pkg
        }) => !pkg.initialised && pkg.initialise());
      }
    }
    exports.Transversal = Transversal2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./transversal",
  "from": "Transversal",
  "name": "Transversal"
}];
var Transversal;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "Transversal") && (Transversal = require2 ? require2("./transversal").Transversal : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL2tlcm5lbC90cmFuc3ZlcnNhbHMuMC4xLjguanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvdHJhbnN2ZXJzYWxzL19fc291cmNlcy90cmFuc3ZlcnNhbHMvZGVwZW5kZW5jaWVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL3RyYW5zdmVyc2Fscy9fX3NvdXJjZXMvdHJhbnN2ZXJzYWxzL3RyYW5zdmVyc2FsLnRzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiVHJhbnN2ZXJzYWwiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtb2R1bGUiLCJNYXAiLCJ1cGRhdGUiLCJkZXBzIiwiY2xlYXIiLCJmb3JFYWNoIiwic3BlY2lmaWVyIiwiZGVwZW5kZW5jeSIsInNldCIsImV4cG9ydHMiLCJuYW1lIiwibGFuZ3VhZ2UiLCJidW5kbGVzIiwiRGVwZW5kZW5jaWVzIiwiZGVwZW5kZW5jaWVzIiwiY29uc3RydWN0b3IiLCJpbml0aWFsaXNlIiwiRXJyb3IiLCJwYWNrYWdlcyIsInNwZWNzIiwiY3JlYXRvciIsInBrZyIsIkJ1bmRsZSIsInBhY2thZ2UiLCJpbXMiLCJyZXNwb25zZSIsImRlc2NyaXB0b3IiLCJyZWdpc3RlciIsImhhcyIsInB1c2giLCJnZXQiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImtleXMiLCJ2YWx1ZXMiLCJpbml0aWFsaXNlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7RUFBQUM7RUFBQUM7QUFBQTtBQUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBYyx1QkFBZUMsSUFBZ0I7TUFDekNDLE9BQU9DLE1BQXNCO1FBQ3pCLEtBQUtDLE9BQUs7UUFDVkQsTUFBTUUsUUFBUSxDQUFDLENBQUNDLFdBQVdDLFVBQVUsTUFBTSxLQUFLQyxJ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