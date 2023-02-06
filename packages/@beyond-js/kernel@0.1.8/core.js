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

// .beyond/uimport/@beyond-js/kernel/core.0.1.8.js
var core_0_1_8_exports = {};
__export(core_0_1_8_exports, {
  CancellationToken: () => CancellationToken,
  Events: () => Events,
  Languages: () => Languages,
  ListenerFunction: () => ListenerFunction,
  PendingPromise: () => PendingPromise,
  SingleCall: () => SingleCall,
  __beyond_pkg: () => __beyond_pkg,
  beyond: () => beyond,
  hmr: () => hmr,
  languages: () => languages
});
module.exports = __toCommonJS(core_0_1_8_exports);

// node_modules/@beyond-js/kernel/core/core.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.8/bundle"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/kernel@0.1.8/core"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([]);
var ims = /* @__PURE__ */new Map();
ims.set("./beyond", {
  hash: 959081709,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.beyond = exports.Beyond = void 0;
    var _languages = require2("./languages");
    class Beyond {
      get languages() {
        return _languages.languages;
      }
      async import(resource, version) {
        return await bimport(resource, version);
      }
    }
    exports.Beyond = Beyond;
    const beyond2 = new Beyond();
    exports.beyond = beyond2;
    globalThis.beyond = beyond2;
  }
});
ims.set("./languages/index", {
  hash: 2966511149,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.languages = exports.Languages = void 0;
    var _events = require2("../utils/events/events");
    class Languages2 extends _events.Events {
      #project;
      #specs;
      #storage = typeof localStorage === "object" ? localStorage : void 0;
      #supported;
      get supported() {
        return this.#supported;
      }
      get default() {
        return this.#specs?.default;
      }
      #current;
      get current() {
        return this.#current;
      }
      #resolve;
      #ready = new Promise(resolve => this.#resolve = resolve);
      get ready() {
        return this.#ready;
      }
      #fetched = false;
      get fetched() {
        return this.#fetched;
      }
      constructor(project) {
        super();
        this.#project = project;
        bimport(`${project}/config`).then(({
          default: config
        }) => {
          this.#setup(config.languages);
          this.#fetched = true;
          this.#resolve();
        });
      }
      #configure(value) {
        if (this.#current === value) return true;
        if (typeof value !== "string" || value.length !== 2) {
          console.warn(`Configured language "${value}" is invalid`);
          return false;
        }
        if (value && !this.#supported.has(value)) {
          console.log(`Language "${value}" is not supported`);
          return false;
        }
        const previous = this.#current;
        this.#current = value;
        previous && this.trigger("change");
        return true;
      }
      set current(value) {
        if (!this.#configure(value)) return;
        this.#storage?.setItem("__beyond_language", value);
      }
      #setup(specs) {
        if (specs.default && typeof specs.default !== "string" || specs.default.length !== 2) {
          console.log(`Default language "${specs.default}" is invalid`);
          specs.default = void 0;
        }
        const def = specs.default ? specs.default : "en";
        specs.supported = specs.supported instanceof Array ? specs.supported : [def];
        !specs.supported.length && specs.supported.push(def);
        this.#supported = new Set(specs.supported);
        specs.default = specs.default ? specs.default : [...this.#supported][0];
        if (!this.#supported.has(specs.default)) {
          console.warn(`Default language "${specs.default}" is not supported by current application`);
          specs.default = [...this.#supported][0];
        }
        this.#specs = specs;
        const configured = this.#storage?.getItem("__beyond_language");
        if (configured && this.#configure(configured)) return;
        const device = typeof location === "object" ? navigator.language.split("-")[0] : void 0;
        if (device && this.#configure(device)) return;
        this.#configure(specs.default);
      }
    }
    exports.Languages = Languages2;
    const languages2 = new Languages2(globalThis.__app_package.specifier);
    exports.languages = languages2;
  }
});
ims.set("./utils/events/events", {
  hash: 3993267980,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Events = void 0;
    class Events2 {
      #specs;
      #listeners = /* @__PURE__ */new Map();
      #destroyed = false;
      get destroyed() {
        return this.#destroyed;
      }
      constructor(specs) {
        specs = specs ? specs : {};
        if (specs.supported && !(specs.supported instanceof Array)) throw new Error("Invalid parameters");
        this.#specs = specs;
        if (specs.bind) {
          specs.bind.bind = (event, listener, priority) => this.on(event, listener, priority);
          specs.bind.unbind = (event, listener) => this.off(event, listener);
        }
      }
      on(event, listener, priority) {
        if (this.#destroyed) {
          throw new Error("Events object is destroyed");
        }
        if (this.#specs.supported && !this.#specs.supported.includes(event)) {
          throw new Error(`Event "${event}" is not defined`);
        }
        if (typeof listener !== "function") {
          throw new Error("Listener is not a function");
        }
        this.off(event, listener);
        const l = this.#listeners.has(event) ? this.#listeners.get(event) : [];
        this.#listeners.set(event, l);
        l.push({
          listener,
          priority: priority ? priority : 0
        });
        return this;
      }
      bind = (event, listener, priority) => this.on(event, listener, priority);
      off(event, listener, force) {
        if (this.#destroyed) {
          throw new Error("Events object is destroyed");
        }
        if (!event) {
          throw new Error(`Event name not specified`);
        }
        if (this.#specs.supported && !this.#specs.supported.includes(event)) {
          throw new Error(`Event "${event}" is not defined`);
        }
        if (!listener) {
          if (!force) throw new Error("Listener function not set");
          this.#listeners.delete(event);
          return this;
        }
        if (!this.#listeners.has(event)) {
          return this;
        }
        const e = this.#listeners.get(event);
        const filtered = e.filter(item => item.listener !== listener);
        this.#listeners.set(event, filtered);
        return this;
      }
      unbind = (event, listener, force) => this.off(event, listener, force);
      trigger(event, ...rest) {
        if (this.#destroyed) {
          throw new Error("Events object is destroyed");
        }
        event = typeof event === "string" ? {
          "name": event
        } : event;
        if (typeof event !== "object") throw new Error("Invalid parameters");
        if (typeof event.name !== "string") throw new Error("Invalid event name");
        if (this.#specs.supported && !this.#specs.supported.includes(event.name)) {
          throw new Error(`Event "${event.name}" is not defined`);
        }
        let args = [...arguments];
        args.shift();
        if (!this.#listeners.has(event.name)) return;
        let l = this.#listeners.get(event.name);
        l.sort((a, b) => b.priority - a.priority);
        if (event.async) {
          const trigger = async function () {
            const promises = [];
            for (let listener of l) {
              promises.push(listener.listener(...args));
            }
            await Promise.all(promises);
          };
          return trigger.call(this, ...args).catch(exc => console.error(exc.stack));
        } else {
          for (let listener of l) {
            listener.listener(...args);
          }
        }
      }
      destroy() {
        this.#destroyed = true;
        this.#listeners.clear();
      }
    }
    exports.Events = Events2;
    globalThis.Events = Events2;
  }
});
ims.set("./utils/events/types", {
  hash: 1632705009,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
ims.set("./utils/execution-control/cancellation-token/cancellation-token", {
  hash: 4200323006,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CancellationToken = void 0;
    class CancellationToken2 {
      #id = 0;
      get current() {
        return this.#id;
      }
      reset = () => ++this.#id;
      check = id => id === this.#id;
    }
    exports.CancellationToken = CancellationToken2;
  }
});
ims.set("./utils/execution-control/single-call/single-call", {
  hash: 783668127,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SingleCall = SingleCall2;
    function SingleCall2(target, propertyKey, descriptor) {
      const originalMethod = descriptor.value;
      let promises = /* @__PURE__ */new WeakMap();
      descriptor.value = function (...args) {
        if (promises.has(this)) return promises.get(this);
        const promise = originalMethod.apply(this, args);
        promises.set(this, promise);
        const clean = () => promises.delete(this);
        promise.then(clean).catch(clean);
        return promise;
      };
      return descriptor;
    }
  }
});
ims.set("./utils/pending-promise/pending-promise", {
  hash: 3255928960,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PendingPromise = void 0;
    class PendingPromise2 extends Promise {
      resolve;
      reject;
      constructor(executor) {
        if (executor instanceof Function) {
          super(executor);
          return;
        }
        let resolve = void 0;
        let reject = void 0;
        super((a, b) => {
          resolve = a;
          reject = b;
        });
        this.resolve = resolve;
        this.reject = reject;
      }
    }
    exports.PendingPromise = PendingPromise2;
    typeof globalThis.process !== "object" && (window.PendingPromise = PendingPromise2);
  }
});
__pkg.exports.descriptor = [{
  "im": "./beyond",
  "from": "beyond",
  "name": "beyond"
}, {
  "im": "./languages/index",
  "from": "Languages",
  "name": "Languages"
}, {
  "im": "./languages/index",
  "from": "languages",
  "name": "languages"
}, {
  "im": "./utils/events/events",
  "from": "Events",
  "name": "Events"
}, {
  "im": "./utils/events/types",
  "from": "ListenerFunction",
  "name": "ListenerFunction"
}, {
  "im": "./utils/execution-control/cancellation-token/cancellation-token",
  "from": "CancellationToken",
  "name": "CancellationToken"
}, {
  "im": "./utils/execution-control/single-call/single-call",
  "from": "SingleCall",
  "name": "SingleCall"
}, {
  "im": "./utils/pending-promise/pending-promise",
  "from": "PendingPromise",
  "name": "PendingPromise"
}];
var beyond, Languages, languages, Events, ListenerFunction, CancellationToken, SingleCall, PendingPromise;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "beyond") && (beyond = require2 ? require2("./beyond").beyond : value);
  (require2 || prop === "Languages") && (Languages = require2 ? require2("./languages/index").Languages : value);
  (require2 || prop === "languages") && (languages = require2 ? require2("./languages/index").languages : value);
  (require2 || prop === "Events") && (Events = require2 ? require2("./utils/events/events").Events : value);
  (require2 || prop === "ListenerFunction") && (ListenerFunction = require2 ? require2("./utils/events/types").ListenerFunction : value);
  (require2 || prop === "CancellationToken") && (CancellationToken = require2 ? require2("./utils/execution-control/cancellation-token/cancellation-token").CancellationToken : value);
  (require2 || prop === "SingleCall") && (SingleCall = require2 ? require2("./utils/execution-control/single-call/single-call").SingleCall : value);
  (require2 || prop === "PendingPromise") && (PendingPromise = require2 ? require2("./utils/pending-promise/pending-promise").PendingPromise : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL2tlcm5lbC9jb3JlLjAuMS44LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL2NvcmUvX19zb3VyY2VzL2NvcmUvYmV5b25kLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL2NvcmUvX19zb3VyY2VzL2NvcmUvbGFuZ3VhZ2VzL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL2NvcmUvX19zb3VyY2VzL2NvcmUvdXRpbHMvZXZlbnRzL2V2ZW50cy50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9jb3JlL19fc291cmNlcy9jb3JlL3V0aWxzL2V2ZW50cy90eXBlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9jb3JlL19fc291cmNlcy9jb3JlL3V0aWxzL2V4ZWN1dGlvbi1jb250cm9sL2NhbmNlbGxhdGlvbi10b2tlbi9jYW5jZWxsYXRpb24tdG9rZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvY29yZS9fX3NvdXJjZXMvY29yZS91dGlscy9leGVjdXRpb24tY29udHJvbC9zaW5nbGUtY2FsbC9zaW5nbGUtY2FsbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9jb3JlL19fc291cmNlcy9jb3JlL3V0aWxzL3BlbmRpbmctcHJvbWlzZS9wZW5kaW5nLXByb21pc2UudHMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJDYW5jZWxsYXRpb25Ub2tlbiIsIkV2ZW50cyIsIkxhbmd1YWdlcyIsIkxpc3RlbmVyRnVuY3Rpb24iLCJQZW5kaW5nUHJvbWlzZSIsIlNpbmdsZUNhbGwiLCJfX2JleW9uZF9wa2ciLCJiZXlvbmQiLCJobXIiLCJsYW5ndWFnZXMiLCJtb2R1bGUiLCJCZXlvbmQiLCJpbXBvcnQiLCJyZXNvdXJjZSIsInZlcnNpb24iLCJiaW1wb3J0IiwiZXhwb3J0cyIsImdsb2JhbFRoaXMiLCJsb2NhbFN0b3JhZ2UiLCJzdXBwb3J0ZWQiLCJkZWZhdWx0IiwiY3VycmVudCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVhZHkiLCJmZXRjaGVkIiwiY29uc3RydWN0b3IiLCJwcm9qZWN0IiwidGhlbiIsImNvbmZpZyIsInZhbHVlIiwibGVuZ3RoIiwiY29uc29sZSIsIndhcm4iLCJoYXMiLCJsb2ciLCJwcmV2aW91cyIsInRyaWdnZXIiLCJzZXRJdGVtIiwic3BlY3MiLCJ1bmRlZmluZWQiLCJkZWYiLCJBcnJheSIsInB1c2giLCJTZXQiLCJjb25maWd1cmVkIiwiZ2V0SXRlbSIsImRldmljZSIsImxvY2F0aW9uIiwibmF2aWdhdG9yIiwibGFuZ3VhZ2UiLCJzcGxpdCIsIl9fYXBwX3BhY2thZ2UiLCJzcGVjaWZpZXIiLCJNYXAiLCJkZXN0cm95ZWQiLCJFcnJvciIsImJpbmQiLCJldmVudCIsImxpc3RlbmVyIiwicHJpb3JpdHkiLCJvbiIsInVuYmluZCIsIm9mZiIsImluY2x1ZGVzIiwibCIsImdldCIsInNldCIsImZvcmNlIiwiZGVsZXRlIiwiZSIsImZpbHRlcmVkIiwiZmlsdGVyIiwiaXRlbSIsInJlc3QiLCJuYW1lIiwiYXJncyIsImFyZ3VtZW50cyIsInNoaWZ0Iiwic29ydCIsImEiLCJiIiwiYXN5bmMiLCJwcm9taXNlcyIsImFsbCIsImNhbGwiLCJjYXRjaCIsImV4YyIsImVycm9yIiwic3RhY2siLCJkZXN0cm95IiwiY2xlYXIiLCJPYmplY3QiLCJyZXNldCIsImNoZWNrIiwiaWQiLCJ0YXJnZXQiLCJwcm9wZXJ0eUtleSIsImRlc2NyaXB0b3IiLCJvcmlnaW5hbE1ldGhvZCIsIldlYWtNYXAiLCJwcm9taXNlIiwiYXBwbHkiLCJjbGVhbiIsInJlamVjdCIsImV4ZWN1dG9yIiwiRnVuY3Rpb24iLCJwcm9jZXNzIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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