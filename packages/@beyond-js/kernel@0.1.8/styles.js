System.register(["@beyond-js/kernel@0.1.8/bundle","@beyond-js/kernel@0.1.8/core"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.8"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.8/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.8/core', dep)],
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

// .beyond/uimport/@beyond-js/kernel/styles.0.1.8.js
var styles_0_1_8_exports = {};
__export(styles_0_1_8_exports, {
  DependenciesStyles: () => DependenciesStyles,
  V1Styles: () => V1Styles,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  styles: () => styles
});
module.exports = __toCommonJS(styles_0_1_8_exports);

// node_modules/@beyond-js/kernel/styles/styles.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.8/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.8/core"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/kernel@0.1.8/styles"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1]]);
var ims = /* @__PURE__ */new Map();
ims.set("./dependencies-styles", {
  hash: 282408023,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DependenciesStyles = void 0;
    var _bundle = require2("@beyond-js/kernel/bundle");
    var _core = require2("@beyond-js/kernel/core");
    var _registry = require2("./registry");
    class DependenciesStyles2 extends _core.Events {
      #vspecifier;
      #elements;
      get elements() {
        return this.#elements;
      }
      constructor(vspecifier) {
        super();
        this.#vspecifier = vspecifier;
        const change = () => this.trigger("change");
        this.#elements = /* @__PURE__ */new Set();
        const recursive = vspecifier2 => {
          if (!vspecifier2) {
            console.trace("Bundle vspecifier not defined");
            return;
          }
          if (!_bundle.instances.has(vspecifier2)) {
            console.error(`Bundle id "${vspecifier2}" not found. Try refreshing the page.
If the problem still persist, delete the BeyondJS cache and try again.`);
            return;
          }
          const bundle = _bundle.instances.get(vspecifier2);
          if (vspecifier2 !== this.#vspecifier && bundle.type === "widget") return;
          const styles2 = _registry.styles.get(vspecifier2);
          if (styles2 && styles2.engine !== "legacy") {
            this.#elements.add(styles2);
            styles2.on("change", change);
          }
          const {
            dependencies
          } = bundle.package();
          dependencies.forEach(dependency => {
            const pkg = dependency.__beyond_pkg;
            if (!pkg) return;
            recursive(pkg.vspecifier);
          });
        };
        recursive(this.#vspecifier);
      }
    }
    exports.DependenciesStyles = DependenciesStyles2;
  }
});
ims.set("./legacy", {
  hash: 859564821,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    class _default {
      get engine() {
        return "legacy";
      }
      #bundle;
      #value;
      get value() {
        return this.#value;
      }
      #appended = false;
      get appended() {
        return this.#appended;
      }
      constructor(bundle, value) {
        this.#bundle = bundle;
        const module2 = (() => {
          const module3 = bundle.split("/");
          module3.pop();
          return module3.join("/");
        })();
        const regexp = /#host\.([\w\d]*)#([^.]*\.[\w\d]*)/g;
        this.#value = value.replace(regexp, (match, host, resource) => {
          if (host === "module" || host === "library") {
            return `${module2}/${resource}`;
          } else if (host === "application") {
            return resource;
          }
          console.warn(`Invalid css host specification on bundle "${bundle}"`, match);
        });
      }
      appendToDOM(is) {
        if (this.#appended) {
          const previous = document.querySelectorAll(`:scope > [bundle="${this.#bundle}"]`)[0];
          previous && document.removeChild(previous);
        }
        const css = document.createElement("style");
        css.appendChild(document.createTextNode(this.#value));
        is && css.setAttribute("is", is);
        document.getElementsByTagName("head")[0].appendChild(css);
        this.#appended = true;
      }
    }
    exports.default = _default;
  }
});
ims.set("./registry", {
  hash: 2402124624,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.styles = void 0;
    var _legacy = require2("./legacy");
    var _v = require2("./v1");
    class Registry {
      #registry = /* @__PURE__ */new Map();
      register(vspecifier, value) {
        if (this.#registry.has(vspecifier)) return;
        const styles3 = value ? new _legacy.default(vspecifier, value) : new _v.V1Styles(vspecifier);
        this.#registry.set(vspecifier, styles3);
        return styles3;
      }
      has(vspecifier) {
        return this.#registry.has(vspecifier);
      }
      get(vspecifier) {
        return this.#registry.get(vspecifier);
      }
    }
    const styles2 = new Registry();
    exports.styles = styles2;
    globalThis.beyondLegacyStyles = styles2;
  }
});
ims.set("./v1", {
  hash: 1891964101,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.V1Styles = void 0;
    var _core = require2("@beyond-js/kernel/core");
    var _bundle = require2("@beyond-js/kernel/bundle");
    class V1Styles2 extends _core.Events {
      get engine() {
        return "v1";
      }
      #bundle;
      get bundle() {
        return this.#bundle;
      }
      #version = 0;
      get version() {
        return this.#version;
      }
      #resource;
      get resource() {
        return this.#resource;
      }
      get href() {
        const version = this.#version ? `?version=${this.#version}` : "";
        return `${this.#resource}${version}`;
      }
      constructor(resource) {
        super();
        this.#bundle = _bundle.instances.get(resource);
        this.#resource = (() => {
          if (typeof process === "object") {
            const split = resource.split("/");
            const pkg = split[0].startsWith("@") ? `${split.shift()}/${split.shift()}` : split.shift();
            const subpath = split.join("/");
            return `##_!${pkg}!_##${subpath}.css`;
          }
          let {
            uri
          } = this.#bundle;
          const regexp = new RegExp("^https?://cdn.beyondjs.com", "i");
          if (regexp.test(uri)) {
            const {
              origin,
              pathname,
              searchParams
            } = new URL(uri);
            const version = searchParams.has("version") ? `&version=${searchParams.get("version")}` : "";
            return origin + pathname + "?css" + version;
          }
          uri = uri.slice(0, uri.length - 3);
          return `${uri}.css`;
        })();
      }
      change() {
        this.#version++;
        this.trigger("change");
      }
    }
    exports.V1Styles = V1Styles2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./dependencies-styles",
  "from": "DependenciesStyles",
  "name": "DependenciesStyles"
}, {
  "im": "./registry",
  "from": "styles",
  "name": "styles"
}, {
  "im": "./v1",
  "from": "V1Styles",
  "name": "V1Styles"
}];
var DependenciesStyles, styles, V1Styles;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "DependenciesStyles") && (DependenciesStyles = require2 ? require2("./dependencies-styles").DependenciesStyles : value);
  (require2 || prop === "styles") && (styles = require2 ? require2("./registry").styles : value);
  (require2 || prop === "V1Styles") && (V1Styles = require2 ? require2("./v1").V1Styles : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL2tlcm5lbC9zdHlsZXMuMC4xLjguanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvc3R5bGVzL19fc291cmNlcy9zdHlsZXMvZGVwZW5kZW5jaWVzLXN0eWxlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9zdHlsZXMvX19zb3VyY2VzL3N0eWxlcy9sZWdhY3kudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvc3R5bGVzL19fc291cmNlcy9zdHlsZXMvcmVnaXN0cnkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvc3R5bGVzL19fc291cmNlcy9zdHlsZXMvdjEudHMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJEZXBlbmRlbmNpZXNTdHlsZXMiLCJWMVN0eWxlcyIsIl9fYmV5b25kX3BrZyIsImhtciIsInN0eWxlcyIsIm1vZHVsZSIsIkV2ZW50cyIsImVsZW1lbnRzIiwiY29uc3RydWN0b3IiLCJ2c3BlY2lmaWVyIiwiY2hhbmdlIiwidHJpZ2dlciIsIlNldCIsInJlY3Vyc2l2ZSIsImNvbnNvbGUiLCJ0cmFjZSIsImJ1bmRsZXMiLCJoYXMiLCJlcnJvciIsImJ1bmRsZSIsImdldCIsInR5cGUiLCJyZWdpc3RyeSIsImVuZ2luZSIsImFkZCIsIm9uIiwiZGVwZW5kZW5jaWVzIiwicGFja2FnZSIsImZvckVhY2giLCJkZXBlbmRlbmN5IiwicGtnIiwiZXhwb3J0cyIsInZhbHVlIiwiYXBwZW5kZWQiLCJzcGxpdCIsInBvcCIsImpvaW4iLCJyZWdleHAiLCJyZXBsYWNlIiwibWF0Y2giLCJob3N0IiwicmVzb3VyY2UiLCJ3YXJuIiwiYXBwZW5kVG9ET00iLCJpcyIsInByZXZpb3VzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVtb3ZlQ2hpbGQiLCJjc3MiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsInNldEF0dHJpYnV0ZSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiUmVnaXN0cnkiLCJNYXAiLCJyZWdpc3RlciIsIkxlZ2FjeVN0eWxlcyIsInNldCIsImdsb2JhbFRoaXMiLCJiZXlvbmRMZWdhY3lTdHlsZXMiLCJ2ZXJzaW9uIiwiaHJlZiIsInByb2Nlc3MiLCJzdGFydHNXaXRoIiwic2hpZnQiLCJzdWJwYXRoIiwidXJpIiwiUmVnRXhwIiwidGVzdCIsIm9yaWdpbiIsInBhdGhuYW1lIiwic2VhcmNoUGFyYW1zIiwiVVJMIiwic2xpY2UiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0FBQUE7QUFBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FBO0lBQ0E7SUFDQTtJQUdpQixNQUNYTCw0QkFBMkJNLGFBQU07TUFDMUI7TUFDQTtNQUNULElBQUlDLFdBQVE7UUFDUixPQUFPLEtBQUs7TUFDaEI7TUFFQUMsWUFBWUMsWUFBa0I7UUFDMUIsT0FBSztRQUNMLEtBQUssY0FBY0E7UUFFbkIsTUFBTUMsU0FBUyxNQUFNLEtBQUtDLFFBQVEsUUFBUTtRQUUxQyxLQUFLLFlBQVksbUJBQUlDLEtBQUc7UUFDeEIsTUFBTUMsWUFBYUosZUFBc0I7VUFDckMsSUFBSSxDQUFDQSxhQUFZO1lBQ2JLLFFBQVFDLE1BQU0sK0JBQStCO1lBQzdDOztVQUdKLElBQUksQ0FBQ0Msa0JBQVFDLElBQUlSLFdBQVUsR0FBRztZQUMxQkssUUFBUUksTUFBTSxjQUFjVDt1RUFDZ0Q7WUFDNUU7O1VBRUosTUFBTVUsU0FBU0gsa0JBQVFJLElBQUlYLFdBQVU7VUFDckMsSUFBSUEsZ0JBQWUsS0FBSyxlQUFlVSxPQUFPRSxTQUFTLFVBQVU7VUFHakUsTUFBTWpCLFVBQW1Ca0IsaUJBQVNGLElBQUlYLFdBQVU7VUFDaEQs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