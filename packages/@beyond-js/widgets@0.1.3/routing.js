System.register(["@beyond-js/kernel@0.1.8/bundle","@beyond-js/kernel@0.1.8/core","@beyond-js/widgets@0.1.3/render","@beyond-js/kernel@0.1.8/routing"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.8"],["@beyond-js/widgets","0.1.3"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.8/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.8/core', dep), dep => dependencies.set('@beyond-js/widgets@0.1.3/render', dep), dep => dependencies.set('@beyond-js/kernel@0.1.8/routing', dep)],
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

// .beyond/uimport/@beyond-js/widgets/routing.0.1.3.js
var routing_0_1_3_exports = {};
__export(routing_0_1_3_exports, {
  Layout: () => Layout,
  PageInstance: () => PageInstance,
  PageURI: () => PageURI,
  Route: () => Route,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  manager: () => manager
});
module.exports = __toCommonJS(routing_0_1_3_exports);

// node_modules/@beyond-js/widgets/routing/routing.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.8/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.8/core"), 0);
var dependency_2 = __toESM(require("@beyond-js/widgets@0.1.3/render"), 0);
var dependency_3 = __toESM(require("@beyond-js/kernel@0.1.8/routing"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/widgets@0.1.3/routing"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1], ["@beyond-js/widgets/render", dependency_2], ["@beyond-js/kernel/routing", dependency_3]]);
var ims = /* @__PURE__ */new Map();
ims.set("./layouts/index", {
  hash: 2940970575,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    class _default extends Map {
      register(layout) {
        this.set(layout.id, layout);
      }
    }
    exports.default = _default;
  }
});
ims.set("./layouts/layout", {
  hash: 2602064878,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Layout = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class Layout2 extends _core.Events {
      get is() {
        return "layout";
      }
      #layouts;
      #element;
      get element() {
        return this.#element;
      }
      get id() {
        return this.#element;
      }
      #active;
      get active() {
        return this.#active;
      }
      #parent;
      #children = /* @__PURE__ */new Map();
      get children() {
        return this.#children;
      }
      constructor(layouts, element, parent) {
        super();
        this.#layouts = layouts;
        this.#element = element ? element : "main";
        this.#parent = parent;
      }
      select(page, descending) {
        if (descending.length && descending[0].name === this.#element) {
          console.log(`Invalid layout configuration. Layout element "${this.#element}" is already created`);
          return;
        }
        const child = (() => {
          if (!descending.length) return page;
          const {
            name: element
          } = descending[0];
          const found = [...this.#children.values()].find(child2 => child2.element === element);
          if (found) return found;
          const layout = new Layout2(this.#layouts, element, this);
          this.#layouts.register(layout);
          return layout;
        })();
        this.#children.set(child.id, child);
        const changed = this.#active !== child;
        this.#active = child;
        descending.shift();
        child.is === "layout" && child.select(page, descending);
        changed && this.trigger("change");
      }
    }
    exports.Layout = Layout2;
  }
});
ims.set("./manager", {
  hash: 1504779151,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.manager = void 0;
    var _core = require2("@beyond-js/kernel/core");
    var _routing = require2("@beyond-js/kernel/routing");
    var _layout = require2("./layouts/layout");
    var _pages = require2("./pages");
    var _layouts = require2("./layouts");
    var _route = require2("./route");
    const manager2 = typeof process === "object" ? void 0 : new class Manager {
      #instances = {
        layouts: new _layouts.default(),
        pages: new _pages.default()
      };
      #initialised = false;
      get initialised() {
        return this.#initialised;
      }
      #resolve;
      #ready = new Promise(resolve => this.#resolve = resolve);
      get ready() {
        return this.#ready;
      }
      constructor() {
        const set = () => this.set(_routing.routing.uri).catch(exc => console.log(exc.stack));
        const {
          specifier
        } = globalThis.__app_package;
        Promise.all([bimport(`${specifier}/config`), bimport(`${specifier}/start`)]).then(([{
          default: config
        }]) => {
          this.#main = new _layout.Layout(this.#instances.layouts, config.layout);
          _routing.routing.on("change", set);
          _routing.routing.initialised ? set() : _routing.routing.ready.then(set);
        });
      }
      get layouts() {
        return this.#instances.layouts;
      }
      get pages() {
        return this.#instances.pages;
      }
      #main;
      get main() {
        return this.#main;
      }
      #ct = new _core.CancellationToken();
      async set(uri) {
        const cid = this.#ct.reset();
        const route = new _route.Route(uri.pathname);
        await route.process();
        if (!this.#ct.check(cid)) return;
        const done = () => {
          !this.#initialised && this.#resolve();
          this.#initialised = true;
        };
        const {
          page: element
        } = route;
        if (!element) {
          console.error(`Pathname "${uri.pathname}" does not have a page widget associated to it`);
          return done();
        }
        const page = this.#instances.pages.register(uri, route);
        const {
          error,
          value: descending
        } = page.parents;
        if (error) {
          console.error(`Page on "${uri.uri}" cannot be shown: ${error}`);
          return done();
        }
        this.#main.select(page, descending);
        return done();
      }
    }();
    exports.manager = manager2;
  }
});
ims.set("./pages/index", {
  hash: 635174642,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _instance = require2("./instance");
    class _default extends Map {
      instance(id) {
        return [...this.values()].find(instance => instance.id === id);
      }
      register(uri, route) {
        const {
          pathname
        } = uri;
        let instance = this.has(pathname) ? this.get(pathname) : void 0;
        instance = instance ? instance : new _instance.PageInstance(uri, route);
        this.set(pathname, instance);
        return instance;
      }
    }
    exports.default = _default;
  }
});
ims.set("./pages/instance", {
  hash: 2192565275,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PageInstance = void 0;
    var _render = require2("@beyond-js/widgets/render");
    let id = 0;
    class PageInstance2 {
      #uri;
      get uri() {
        return this.#uri;
      }
      #route;
      get route() {
        return this.#route;
      }
      get element() {
        return this.#route.page;
      }
      get is() {
        return "page";
      }
      #id;
      get id() {
        return `${this.element}:${this.#id}`;
      }
      get parents() {
        const value = [];
        let {
          layout
        } = _render.widgets.get(this.element);
        while (layout) {
          const found = [..._render.widgets.values()].find(({
            name
          }) => name === layout);
          if (!found) {
            const error = `Layout "${layout}" not found`;
            return {
              error
            };
          }
          value.unshift(found);
          layout = found.layout;
        }
        return {
          value
        };
      }
      constructor(uri, route) {
        this.#uri = uri;
        this.#route = route;
        this.#id = ++id;
      }
    }
    exports.PageInstance = PageInstance2;
  }
});
ims.set("./route", {
  hash: 408835594,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Route = void 0;
    var _render = require2("@beyond-js/widgets/render");
    var _routing = require2("@beyond-js/kernel/routing");
    class Route2 {
      #pathname;
      get pathname() {
        return this.#pathname;
      }
      #page;
      get page() {
        return this.#page;
      }
      #vars;
      get vars() {
        return this.#vars;
      }
      constructor(pathname) {
        this.#pathname = pathname;
      }
      async process() {
        const pathname = this.#pathname.split("/");
        const registered = /* @__PURE__ */new Map();
        _render.widgets.forEach(({
          is,
          name,
          route
        }) => is === "page" && registered.set(name, route.split("/")));
        const target = [...registered].filter(([, route]) => route.length === pathname.length);
        this.#vars = /* @__PURE__ */new Map();
        const found = target.find(([, route]) => {
          this.#vars.clear();
          for (let i = 0; i < pathname.length; i++) {
            const dir = route[i];
            if (dir.startsWith("${") && dir.endsWith("}")) {
              const vname = dir.slice(2, dir.length - 1);
              this.#vars.set(vname, pathname[i]);
              continue;
            }
            if (dir !== pathname[i]) return false;
          }
          return true;
        });
        this.#page = found ? found[0] : await _routing.routing.missing?.(this.#pathname);
      }
    }
    exports.Route = Route2;
  }
});
ims.set("./uri", {
  hash: 615392904,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PageURI = void 0;
    var _manager = require2("./manager");
    class PageURI2 {
      #uri;
      #route;
      get uri() {
        return this.#uri;
      }
      get pathname() {
        return this.#uri.pathname;
      }
      get search() {
        return this.#uri.search;
      }
      get qs() {
        return this.#uri.qs;
      }
      get hash() {
        return this.#uri.hash;
      }
      get vars() {
        return this.#route.vars;
      }
      constructor({
        widget,
        uri,
        route
      }) {
        if (widget) {
          const child = widget.getAttribute("data-child-id");
          const page = _manager.manager.pages.instance(child);
          if (!page) {
            throw new Error(`Element "${widget.localName}" is not a page, or page not found`);
          }
          ({
            uri,
            route
          } = page);
        }
        this.#uri = uri;
        this.#route = route;
      }
    }
    exports.PageURI = PageURI2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./layouts/layout",
  "from": "Layout",
  "name": "Layout"
}, {
  "im": "./manager",
  "from": "manager",
  "name": "manager"
}, {
  "im": "./pages/instance",
  "from": "PageInstance",
  "name": "PageInstance"
}, {
  "im": "./route",
  "from": "Route",
  "name": "Route"
}, {
  "im": "./uri",
  "from": "PageURI",
  "name": "PageURI"
}];
var Layout, manager, PageInstance, Route, PageURI;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "Layout") && (Layout = require2 ? require2("./layouts/layout").Layout : value);
  (require2 || prop === "manager") && (manager = require2 ? require2("./manager").manager : value);
  (require2 || prop === "PageInstance") && (PageInstance = require2 ? require2("./pages/instance").PageInstance : value);
  (require2 || prop === "Route") && (Route = require2 ? require2("./route").Route : value);
  (require2 || prop === "PageURI") && (PageURI = require2 ? require2("./uri").PageURI : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3dpZGdldHMvcm91dGluZy4wLjEuMy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcm91dGluZy9fX3NvdXJjZXMvcm91dGluZy9sYXlvdXRzL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yb3V0aW5nL19fc291cmNlcy9yb3V0aW5nL2xheW91dHMvbGF5b3V0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yb3V0aW5nL19fc291cmNlcy9yb3V0aW5nL21hbmFnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvcGFnZXMvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvcGFnZXMvaW5zdGFuY2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvcm91dGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvdXJpLnRzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiTGF5b3V0IiwiUGFnZUluc3RhbmNlIiwiUGFnZVVSSSIsIlJvdXRlIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibWFuYWdlciIsIm1vZHVsZSIsIk1hcCIsInJlZ2lzdGVyIiwibGF5b3V0Iiwic2V0IiwiaWQiLCJleHBvcnRzIiwiRXZlbnRzIiwiaXMiLCJlbGVtZW50IiwiYWN0aXZlIiwiY2hpbGRyZW4iLCJjb25zdHJ1Y3RvciIsImxheW91dHMiLCJwYXJlbnQiLCJzZWxlY3QiLCJwYWdlIiwiZGVzY2VuZGluZyIsImxlbmd0aCIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwiY2hpbGQiLCJmb3VuZCIsInZhbHVlcyIsImZpbmQiLCJjaGFuZ2VkIiwic2hpZnQiLCJ0cmlnZ2VyIiwicHJvY2VzcyIsIk1hbmFnZXIiLCJMYXlvdXRzIiwicGFnZXMiLCJQYWdlcyIsImluaXRpYWxpc2VkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWFkeSIsInJvdXRpbmciLCJ1cmkiLCJjYXRjaCIsImV4YyIsInN0YWNrIiwic3BlY2lmaWVyIiwiZ2xvYmFsVGhpcyIsIl9fYXBwX3BhY2thZ2UiLCJhbGwiLCJiaW1wb3J0IiwidGhlbiIsImRlZmF1bHQiLCJjb25maWciLCJvbiIsIm1haW4iLCJDYW5jZWxsYXRpb25Ub2tlbiIsImNpZCIsInJlc2V0Iiwicm91dGUiLCJwYXRobmFtZSIsImNoZWNrIiwiZG9uZSIsImVycm9yIiwidmFsdWUiLCJwYXJlbnRzIiwiaW5zdGFuY2UiLCJoYXMiLCJnZXQiLCJ1bmRlZmluZWQiLCJ3aWRnZXRzIiwidW5zaGlmdCIsInZhcnMiLCJzcGxpdCIsInJlZ2lzdGVyZWQiLCJmb3JFYWNoIiwidGFyZ2V0IiwiZmlsdGVyIiwiY2xlYXIiLCJpIiwiZGlyIiwic3RhcnRzV2l0aCIsImVuZHNXaXRoIiwidm5hbWUiLCJzbGljZSIsIm1pc3NpbmciLCJzZWFyY2giLCJxcyIsImhhc2giLCJ3aWRnZXQiLCJnZXRBdHRyaWJ1dGUiLCJFcnJvciIsImxvY2FsTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7QUFBQTtBQUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNLYyx1QkFBZUMsSUFBbUI7TUFDNUNDLFNBQVNDLFFBQWM7UUFDbkIsS0FBS0MsSUFBSUQsT0FBT0UsSUFBSUYsTUFBTTtNQUM5Qjs7SUFDSEc7Ozs7Ozs7Ozs7OztJQ1BEO0lBS2lCLE1BQ1hiLGdCQUFlYyxhQUFN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