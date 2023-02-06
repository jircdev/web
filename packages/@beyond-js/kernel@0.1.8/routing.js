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

// .beyond/uimport/@beyond-js/kernel/routing.0.1.8.js
var routing_0_1_8_exports = {};
__export(routing_0_1_8_exports, {
  URI: () => URI,
  routing: () => routing
});
module.exports = __toCommonJS(routing_0_1_8_exports);

// node_modules/@beyond-js/kernel/routing/routing.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.8/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.8/core"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/kernel@0.1.8/routing"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1]]);
var ims = /* @__PURE__ */new Map();
ims.set("./history/history", {
  hash: 1835933971,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondHistory = void 0;
    var _position = require2("./position");
    var _records = require2("./records");
    class BeyondHistory {
      #position;
      get position() {
        return this.#position;
      }
      #records;
      get records() {
        return this.#records;
      }
      get valid() {
        return this.#records.valid;
      }
      get current() {
        return this.valid ? this.#records.current.uri : void 0;
      }
      #initial = history.length;
      get initial() {
        return this.#initial;
      }
      #processBrowserURI(uri) {
        if (uri === void 0) return;
        const {
          routing: routing2
        } = require2("../routing");
        const RoutingModeEnum = require2("../routing").RoutingMode;
        return routing2.mode === RoutingModeEnum.Hash ? `#${uri.substr(1)}` : uri;
      }
      #push(uri) {
        this.#records.reset();
        this.#records.push(uri);
        this.#position.save(this.#records.length);
      }
      replaceState(state, title, uri) {
        state = state ? state : {};
        if (typeof state !== "object") throw new Error("Invalid state parameter");
        this.#records.updateCurrentURI(uri);
        const position = this.#position.value;
        history.replaceState(state, title, this.#processBrowserURI(uri));
        this.#position.save(position);
      }
      pushState(uri, state) {
        if (uri === `${location.pathname}${location.search}${location.hash}`) return;
        state = state ? state : {};
        if (typeof state !== "object") throw new Error("Invalid state parameter");
        history.pushState(state, null, this.#processBrowserURI(uri));
        this.#push(uri);
      }
      back() {
        const previous = this.#records.previous?.position;
        const current = this.#records.current?.position;
        if (!previous) return;
        history.go(previous - current);
      }
      forward() {
        const following = this.#records.following?.position;
        const current = this.#records.current?.position;
        if (!following) return;
        history.go(following - current);
      }
      constructor(routing2, Mode) {
        this.#position = new _position.HistoryPosition();
        this.#records = new _records.HistoryRecords(this.#position);
        if (this.#position.value === void 0) {
          let uri = routing2.mode === Mode.Hash ? location.hash.slice(1) : `${location.pathname}${location.search}${location.hash}`;
          this.#push(uri);
        }
      }
    }
    exports.BeyondHistory = BeyondHistory;
  }
});
ims.set("./history/position", {
  hash: 3613484025,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.HistoryPosition = void 0;
    class HistoryPosition {
      check() {
        if (this.value) return true;
        console.error("History state is not defined. This happen when state is changed outside the beyond defined navigation flows.");
        return false;
      }
      get value() {
        return history.state?.__beyond_navigation_position;
      }
      save(position) {
        const state = history.state ? history.state : {};
        state.__beyond_navigation_position = position;
        history.replaceState(state, null);
      }
    }
    exports.HistoryPosition = HistoryPosition;
  }
});
ims.set("./history/records", {
  hash: 3466552890,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.HistoryRecords = void 0;
    class HistoryRecords {
      #position;
      #valid = true;
      get valid() {
        return this.#valid;
      }
      #entries = [];
      get entries() {
        return this.#entries.slice();
      }
      get length() {
        return this.#entries.length;
      }
      get current() {
        return this.#entries[this.#position.value - 1];
      }
      get previous() {
        const previous = this.#position.value - 2;
        if (previous < 0) return;
        return this.#entries[previous];
      }
      get following() {
        const following = this.#position.value;
        if (following >= this.#entries.length) return;
        return this.#entries[following];
      }
      constructor(position) {
        this.#position = position;
        let parsed;
        try {
          const stored = sessionStorage.getItem("__beyond_navigation_records");
          if (!stored && position.value !== void 0) {
            this.#valid = false;
            return;
          }
          parsed = stored ? JSON.parse(stored) : [];
        } catch (exc) {
          this.#valid = false;
          console.error("Error loading beyond navigation state", exc instanceof Error ? exc.stack : exc);
          this.#entries = [];
        }
        if (!(parsed instanceof Array)) {
          const warning = "The beyond navigation data, stored in session store is invalid.";
          console.warn(warning, parsed);
        }
        this.#entries = parsed;
      }
      #sanitizeURI(uri) {
        if (uri === void 0) return;
        return uri.startsWith("/") ? uri : `/${uri}`;
      }
      get(index) {
        return this.#entries[index];
      }
      push(uri) {
        uri = this.#sanitizeURI(uri);
        this.#entries.push({
          uri,
          position: history.length
        });
        this.save();
      }
      reset() {
        const position = this.#position.value;
        if (position) return;
        this.#entries = this.#entries.filter(entry => entry.position < history.length);
      }
      updateCurrentURI(uri) {
        if (!this.#valid) return;
        const position = this.#position.value;
        uri = this.#sanitizeURI(uri);
        this.#entries[position - 1] = {
          uri,
          position: history.length
        };
        this.save();
      }
      save() {
        if (!this.#valid) return;
        sessionStorage.setItem("__beyond_navigation_records", JSON.stringify(this.#entries));
      }
    }
    exports.HistoryRecords = HistoryRecords;
  }
});
ims.set("./routing", {
  hash: 2780317025,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.routing = exports.RoutingMode = exports.Routing = void 0;
    var _uri2 = require2("./uri/uri");
    var _core = require2("@beyond-js/kernel/core");
    var _history = require2("./history/history");
    var RoutingMode;
    exports.RoutingMode = RoutingMode;
    (function (RoutingMode2) {
      RoutingMode2[RoutingMode2["Hash"] = 0] = "Hash";
      RoutingMode2[RoutingMode2["Pathname"] = 1] = "Pathname";
    })(RoutingMode || (exports.RoutingMode = RoutingMode = {}));
    const serverside = typeof process === "object";
    class Routing extends _core.Events {
      #mode;
      get mode() {
        return this.#mode;
      }
      #history;
      get history() {
        return this.#history;
      }
      #initialised = false;
      get initialised() {
        return this.#initialised;
      }
      #resolve;
      #ready = new Promise(resolve => this.#resolve = resolve);
      get ready() {
        return this.#ready;
      }
      #uri;
      get uri() {
        return this.#uri;
      }
      missing;
      redirect;
      #resolveConfigured;
      #configured = new Promise(resolve => this.#resolveConfigured = resolve);
      constructor() {
        super();
        const {
          specifier
        } = globalThis.__app_package;
        !serverside && bimport(`${specifier}/config`).then(({
          default: config
        }) => {
          let configured = config.routing?.mode;
          let routingMode = configured === "hash" ? RoutingMode.Hash : RoutingMode.Pathname;
          location.protocol === "file:" && (routingMode = RoutingMode.Hash);
          ![0, 1].includes(routingMode) && (routingMode = location.protocol === "file:" ? RoutingMode.Hash : RoutingMode.Pathname);
          this.#mode = routingMode;
          this.#history = new _history.BeyondHistory(this, RoutingMode);
          this.#resolveConfigured();
        });
      }
      #redirect = async uri => {
        if (typeof this.redirect !== "function") return;
        const redirected = await this.redirect(uri);
        if (!redirected) return;
        if (typeof redirected !== "string") {
          console.error(`Invalid route value set by custom routing function`, redirected);
          return;
        }
        if (uri.pathname === redirected) return;
        this.pushState(redirected);
        return true;
      };
      pushState(uri, state) {
        this.#configured.then(() => {
          this.#history.pushState(uri, state);
          this.update().catch(exc => console.error(exc.stack));
        });
      }
      replaceState(state, title, uri) {
        this.#configured.then(() => {
          this.#history.replaceState(state, title, uri);
          this.update().catch(exc => console.error(exc.stack));
        });
      }
      #cancellationToken = new _core.CancellationToken();
      update = async () => {
        const cancellationTokenId = this.#cancellationToken.reset();
        const {
          hash,
          pathname,
          search
        } = location;
        const _uri = this.#mode === RoutingMode.Hash ? `/${hash.slice(1)}` : pathname + search + hash;
        if (this.#uri?.uri === _uri) return;
        const uri = this.#uri = new _uri2.URI(_uri);
        const redirected = await this.#redirect(uri);
        if (!this.#cancellationToken.check(cancellationTokenId)) return;
        if (redirected) return;
        this.#history && uri.uri !== this.#history.current && console.error(`History current "${this.#history.current}" is not equal to actual uri "${uri.uri}"`);
        this.#initialised ? this.trigger("change") : this.#resolve();
        this.#initialised = true;
      };
      #started = false;
      setup() {
        this.#started = true;
        !serverside && this.update().catch(exc => console.error(exc.stack));
      }
      back() {
        this.#history.back();
      }
      forward() {
        this.#history.forward();
      }
    }
    exports.Routing = Routing;
    const routing2 = new Routing();
    exports.routing = routing2;
    globalThis.routing = routing2;
    !serverside && (beyond.navigate = (uri, state) => routing2.pushState(uri, state));
    !serverside && (beyond.pushState = (uri, state) => routing2.pushState(uri, state));
    !serverside && (beyond.back = () => routing2.back());
    !serverside && (beyond.forward = () => routing2.forward());
    !serverside && window.addEventListener("popstate", () => routing2.update().catch(exc => console.error(exc.stack)));
  }
});
ims.set("./uri/querystring", {
  hash: 187911159,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.QueryString = void 0;
    class QueryString extends Map {
      constructor(search) {
        super();
        if (search.trim() === "") return;
        search = search.slice(0, 1) === "?" ? search.slice(1) : search;
        const split = search.split("&");
        for (let i = 0; i < split.length; ++i) {
          const param = split[i].split("=", 2);
          const value = param[1] ? decodeURIComponent(param[1].replace(/\+/g, " ")) : void 0;
          this.set(param[0], value);
        }
      }
    }
    exports.QueryString = QueryString;
  }
});
ims.set("./uri/uri", {
  hash: 748332499,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.URI = void 0;
    var _querystring = require2("./querystring");
    class URI2 {
      #uri;
      get uri() {
        return this.#uri;
      }
      #pathname;
      get pathname() {
        return this.#pathname;
      }
      #search;
      get search() {
        return this.#search;
      }
      #qs;
      get qs() {
        return this.#qs;
      }
      #hash;
      get hash() {
        return this.#hash;
      }
      constructor(uri) {
        this.#uri = uri;
        const [u, hash] = uri.split("#");
        const [pathname, search] = u.split("?");
        this.#pathname = pathname.startsWith("/") ? pathname : `/${pathname}`;
        this.#search = search ? search : "";
        this.#qs = new _querystring.QueryString(this.#search);
        this.#hash = hash;
      }
    }
    exports.URI = URI2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./routing",
  "from": "routing",
  "name": "routing"
}, {
  "im": "./uri/uri",
  "from": "URI",
  "name": "URI"
}];
var routing, URI;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "routing") && (routing = require2 ? require2("./routing").routing : value);
  (require2 || prop === "URI") && (URI = require2 ? require2("./uri/uri").URI : value);
};
__pkg.initialise(ims);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL2tlcm5lbC9yb3V0aW5nLjAuMS44LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvaGlzdG9yeS9oaXN0b3J5LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvaGlzdG9yeS9wb3NpdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9yb3V0aW5nL19fc291cmNlcy9yb3V0aW5nL2hpc3RvcnkvcmVjb3Jkcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9yb3V0aW5nL19fc291cmNlcy9yb3V0aW5nL3JvdXRpbmcudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvcm91dGluZy9fX3NvdXJjZXMvcm91dGluZy91cmkvcXVlcnlzdHJpbmcudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvcm91dGluZy9fX3NvdXJjZXMvcm91dGluZy91cmkvdXJpLnRzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiVVJJIiwicm91dGluZyIsIm1vZHVsZSIsIkJleW9uZEhpc3RvcnkiLCJwb3NpdGlvbiIsInJlY29yZHMiLCJ2YWxpZCIsImN1cnJlbnQiLCJ1cmkiLCJoaXN0b3J5IiwibGVuZ3RoIiwiaW5pdGlhbCIsInJlcXVpcmUiLCJSb3V0aW5nTW9kZUVudW0iLCJSb3V0aW5nTW9kZSIsIm1vZGUiLCJIYXNoIiwic3Vic3RyIiwicmVzZXQiLCJwdXNoIiwic2F2ZSIsInJlcGxhY2VTdGF0ZSIsInN0YXRlIiwidGl0bGUiLCJFcnJvciIsInVwZGF0ZUN1cnJlbnRVUkkiLCJ2YWx1ZSIsInB1c2hTdGF0ZSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzZWFyY2giLCJoYXNoIiwiYmFjayIsInByZXZpb3VzIiwiZ28iLCJmb3J3YXJkIiwiZm9sbG93aW5nIiwiY29uc3RydWN0b3IiLCJNb2RlIiwiSGlzdG9yeVBvc2l0aW9uIiwiSGlzdG9yeVJlY29yZHMiLCJzbGljZSIsImV4cG9ydHMiLCJjaGVjayIsImNvbnNvbGUiLCJlcnJvciIsIl9fYmV5b25kX25hdmlnYXRpb25fcG9zaXRpb24iLCJlbnRyaWVzIiwicGFyc2VkIiwic3RvcmVkIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiZXhjIiwic3RhY2siLCJBcnJheSIsIndhcm5pbmciLCJ3YXJuIiwic3RhcnRzV2l0aCIsImdldCIsImluZGV4IiwiZmlsdGVyIiwiZW50cnkiLCJzZXRJdGVtIiwic3RyaW5naWZ5Iiwic2VydmVyc2lkZSIsInByb2Nlc3MiLCJSb3V0aW5nIiwiRXZlbnRzIiwiaW5pdGlhbGlzZWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlYWR5IiwibWlzc2luZyIsInJlZGlyZWN0Iiwic3BlY2lmaWVyIiwiZ2xvYmFsVGhpcyIsIl9fYXBwX3BhY2thZ2UiLCJiaW1wb3J0IiwidGhlbiIsImRlZmF1bHQiLCJjb25maWciLCJjb25maWd1cmVkIiwicm91dGluZ01vZGUiLCJQYXRobmFtZSIsInByb3RvY29sIiwiaW5jbHVkZXMiLCJyZWRpcmVjdGVkIiwidXBkYXRlIiwiY2F0Y2giLCJDYW5jZWxsYXRpb25Ub2tlbiIsImNhbmNlbGxhdGlvblRva2VuSWQiLCJfdXJpIiwidHJpZ2dlciIsInNldHVwIiwiYmV5b25kIiwibmF2aWdhdGUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiUXVlcnlTdHJpbmciLCJNYXAiLCJ0cmltIiwic3BsaXQiLCJpIiwicGFyYW0iLCJkZWNvZGVVUklDb21wb25lbnQiLCJyZXBsYWNlIiwidW5kZWZpbmVkIiwic2V0IiwicXMiLCJ1Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztFQUFBQztBQUFBO0FBQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQTtJQUNBO0lBT00sTUFBT0MsY0FBYTtNQUNiO01BQ1QsSUFBSUMsV0FBUTtRQUNSLE9BQU8sS0FBSztNQUNoQjtNQUVTO01BQ1QsSUFBSUMsVUFBTztRQUNQLE9BQU8sS0FBSztNQUNoQjtNQUVBLElBQUlDLFFBQUs7UUFDTCxPQUFPLEtBQUssU0FBU0E7TUFDekI7TUFFQSxJQUFJQyxVQUFPO1FBQ1AsT0FBTyxLQUFLRCxRQUFRLEtBQUssU0FBU0MsUUFBUUMsTUFBTTtNQUNwRDtNQUVBLFdBQW1CQyxRQUFRQztNQUMzQixJQUFJQyxVQUFPO1FBQ1AsT0FBTyxLQUFLO01BQ2hCO01BU0EsbUJBQW1CSCxLQUFXO1FBRTFCLElBQUlBLFFBQVEsUUFBUTtRQUVwQixNQUFNO1VBQUNQO1FBQU8sSUFBSVcsU0FBUSxZQUFZO1FBQ3RDLE1BQU1DLGtCQUF1Q0QsU0FBUSxZQUFZLEVBQUdFO1FBRXBFLE9BQU9iLFNBQVFjLFNBQVNGLGdCQUFnQkcsT0FBTyxJQUFJUixJQUFJUyxPQUFPLENBQUMsTUFBTVQ7TUFDekU7TUFFQSxNQUFNQSxLQUFXO1FBQ2IsS0FBSyxTQUFTVSxPQUFLO1FBQ25CLEtBQUssU0FBU0MsS0FBS1gsR0FBRztRQUN0QixLQUFLLFVBQVVZLEtBQUssS0FBSyxTQUFTVixNQUFNO01BQzVDO01BRUFXLGFBQWFDLE9BQVlDLE9BQWVmLEtBQVc7UUFDL0NjLFFBQVFBLFFBQVFBLFFBQVE7UUFDeEIsSUFBSSxPQUFPQSxVQUFVLFVBQVUsTUFBTSxJQUFJRSxNQUFNLHlCQUF5QjtRQUV4RSxLQUFLLFNBQVNDLGlCQUFpQmpCLEdBQUc7UUFHbEMsTUFBTUosV0FBVyxLQUFLLFVBQVVzQjtRQUNoQ2pCLFFBQVFZLGFBQWFDLE9BQU9DLE9BQU8sS0FBSyxtQkFBbUJmLEdBQUcsQ0FBQztRQUMvRCxLQUFLLFVBQVVZLEtBQUtoQixRQUFRO01BQ2hDO01BRUF1QixVQUFVbkIsS0FBYWMsT0FBVTtRQUM3QixJQUFJZCxRQUFRLEdBQUdvQixTQUFTQyxXQUFXRCxTQUFTRSxTQUFTRixTQUFTRyxRQUFRO1FBRXRFVCxRQUFRQSxRQUFRQSxRQUFRO1FBQ3hCLElBQUksT0FBT0EsVUFBVSxVQUFVLE1BQU0sSUFBSUUsTUFBTSx5QkFBeUI7UUFFeEVmLFFBQVFrQixVQUFVTCxPQUFPLE1BQU0sS0FBSyxtQkFBbUJkLEdBQUcsQ0FBQztRQUMzRCxLQUFLLE1BQU1BLEdBQUc7TUFDbEI7TUFFQXdCLE9BQUk7UUFDQSxNQUFNQyxXQUFXLEtBQUssU0FBU0EsVUFBVTdCO1FBQ3pDLE1BQU1HLFVBQVUsS0FBSyxTQUFTQSxTQUFTSDtRQUN2QyxJQUFJLENBQUM2QixVQUFVO1FBQ2Z4QixRQUFReUIsR0FBR0QsV0FBVzFCLE9BQU87TUFDakM7TUFFQTRCLFVBQU87UUFDSCxNQUFNQyxZQUFZLEtBQUssU0FBU0EsV0FBV2hDO1FBQzNDLE1BQU1HLFVBQVUsS0FBSyxTQUFTQSxTQUFTSDtRQUN2QyxJQUFJLENBQUNnQyxXQUFXO1FBQ2hCM0IsUUFBUXlCLEdBQUdFLFlBQVk3QixPQUFPO01BQ2xDO01BRUE4QixZQUFZcEMsVUFBa0JxQyxNQUF3QjtRQUNsRCxLQUFLLFlBQVksSUFBSUMsMkJBQWU7UUFDcEMsS0FBSyxXQUFXLElBQUlDLHdCQUFlLEtBQUssU0FBUztRQUVqRCxJQUFJLEtBQUssVUFBVWQsVUFBVSxRQUFRO1VBRWpDLElBQUlsQixNQUFNUCxTQUFRYyxTQUFTdUIsS0FBS3RCLE9BQU9ZLFNBQVNHLEtBQUtVLE1BQU0sQ0FBQyxJQUN4RCxHQUFHYixTQUFTQyxXQUFXRCxTQUFTRSxTQUFTRixTQUFTRztVQUN0RCxLQUFLLE1BQU12QixHQUFHOztNQUV0Qjs7SUFDSGtDOzs7Ozs7Ozs7Ozs7SUMvRkssTUFBT0gsZ0JBQWU7TUFDeEJJLFFBQUs7UUFDRCxJQUFJLEtBQUtqQixPQUFPLE9BQU87UUFDdkJrQixRQUFRQyxNQUFNLDhHQUNzRTtRQUNwRixPQUFPO01BQ1g7TUFNQSxJQUFJbkIsUUFBSztRQUNMLE9BQU9qQixRQUFRYSxPQUFPd0I7TUFDMUI7TUFFQTFCLEtBQUtoQixVQUFnQjtRQUNqQixNQUFNa0IsUUFBUWIsUUFBUWEsUUFBUWIsUUFBUWEsUUFBUTtRQUM5Q0EsTUFBTXdCLCtCQUErQjFDO1FBQ3JDSyxRQUFRWSxhQUFhQyxPQUFPLElBQUk7TUFDcEM7O0lBQ0hvQjs7Ozs7Ozs7Ozs7O0lDckJLLE1BQU9GLGVBQWM7TUFDZDtNQUVBLFNBQWtCO01BQzNCLElBQUlsQyxRQUFLO1FBQ0wsT0FBTyxLQUFLO01BQ2hCO01BRUEsV0FBNEI7TUFDNUIsSUFBSXlDLFVBQU87UUFDUCxPQUFPLEtBQUssU0FBU04sT0FBSztNQUM5QjtNQUVBLElBQUkvQixTQUFNO1FBQ04sT0FBTyxLQUFLLFNBQVNBO01BQ3pCO01BRUEsSUFBSUgsVUFBTztRQUNQLE9BQU8sS0FBSyxTQUFTLEtBQUssVUFBVW1CLFFBQVE7TUFDaEQ7TUFFQSxJQUFJTyxXQUFRO1FBQ1IsTUFBTUEsV0FBVyxLQUFLLFVBQVVQLFFBQVE7UUFDeEMsSUFBSU8sV0FBVyxHQUFHO1FBQ2xCLE9BQU8sS0FBSyxTQUFTQTtNQUN6QjtNQUVBLElBQUlHLFlBQVM7UUFDVCxNQUFNQSxZQUFZLEtBQUssVUFBVVY7UUFDakMsSUFBSVUsYUFBYSxLQUFLLFNBQVMxQixRQUFRO1FBQ3ZDLE9BQU8sS0FBSyxTQUFTMEI7TUFDekI7TUFFQUMsWUFBWWpDLFVBQXlCO1FBQ2pDLEtBQUssWUFBWUE7UUFFakIsSUFBSTRDO1FBQ0osSUFBSTtVQUNBLE1BQU1DLFNBQVNDLGVBQWVDLFFBQVEsNkJBQTZCO1VBTW5FLElBQUksQ0FBQ0YsVUFBVTdDLFNBQVNzQixVQUFVLFFBQVE7WUFDdEMsS0FBSyxTQUFTO1lBQ2Q7O1VBR0pzQixTQUFTQyxTQUFTRyxLQUFLQyxNQUFNSixNQUFNLElBQUk7aUJBQ2xDSyxLQUFQO1VBQ0UsS0FBSyxTQUFTO1VBQ2RWLFFBQVFDLE1BQU0seUNBQXlDUyxlQUFlOUIsUUFBUThCLElBQUlDLFFBQVFELEdBQUc7VUFDN0YsS0FBSyxXQUFXOztRQUdwQixJQUFJLEVBQUVOLGtCQUFrQlEsUUFBUTtVQUM1QixNQUFNQyxVQUFVO1VBQ2hCYixRQUFRYyxLQUFLRCxTQUFTVCxNQUFNOztRQUdoQyxLQUFLLFdBQVdBO01BQ3BCO01BUUEsYUFBYXhDLEtBQVc7UUFFcEIsSUFBSUEsUUFBUSxRQUFRO1FBQ3BCLE9BQU9BLElBQUltRCxXQUFXLEdBQUcsSUFBSW5ELE1BQU0sSUFBSUE7TUFDM0M7TUFFQW9ELElBQUlDLE9BQWE7UUFDYixPQUFPLEtBQUssU0FBU0E7TUFDekI7TUFPQTFDLEtBQUtYLEtBQVc7UUFDWkEsTUFBTSxLQUFLLGFBQWFBLEdBQUc7UUFDM0IsS0FBSyxTQUFTVyxLQUFLO1VBQUNYO1VBQUtKLFVBQVVLLFFBQVFDO1FBQU0sQ0FBQztRQUNsRCxLQUFLVSxNQUFJO01BQ2I7TUFZQUYsUUFBSztRQUNELE1BQU1kLFdBQVcsS0FBSyxVQUFVc0I7UUFDaEMsSUFBSXRCLFVBQVU7UUFFZCxLQUFLLFdBQVcsS0FBSyxTQUFTMEQsT0FBT0MsU0FBU0EsTUFBTTNELFdBQVdLLFFBQVFDLE1BQU07TUFDakY7TUFFQWUsaUJBQWlCakIsS0FBVztRQUN4QixJQUFJLENBQUMsS0FBSyxRQUFRO1FBRWxCLE1BQU1KLFdBQVcsS0FBSyxVQUFVc0I7UUFFaENsQixNQUFNLEtBQUssYUFBYUEsR0FBRztRQUMzQixLQUFLLFNBQVNKLFdBQVcsS0FBSztVQUFDSTtVQUFLSixVQUFVSyxRQUFRQztRQUFNO1FBQzVELEtBQUtVLE1BQUk7TUFDYjtNQUVBQSxPQUFJO1FBQ0EsSUFBSSxDQUFDLEtBQUssUUFBUTtRQUNsQjhCLGVBQWVjLFFBQVEsK0JBQStCWixLQUFLYSxVQUFVLEtBQUssUUFBUSxDQUFDO01BQ3ZGOztJQUNIdkI7Ozs7Ozs7Ozs7OztJQ2pJRDtJQUNBO0lBQ0E7SUFJQSxJQUFZNUI7SUFBNEI0QjtJQUF4QyxXQUFZNUIsY0FBVztNQUFFQTtNQUFNQTtJQUFRLEdBQTNCQSxnQkFBVzRCLHNCQUFYNUIsY0FBVztJQUV2QixNQUFNb0QsYUFBYSxPQUFPQyxZQUFZO0lBRWhDLE1BQU9DLGdCQUFnQkMsYUFBTTtNQUMvQjtNQUNBLElBQUl0RCxPQUFJO1FBQ0osT0FBTyxLQUFLO01BQ2hCO01BRUE7TUFDQSxJQUFJTixVQUFPO1FBQ1AsT0FBTyxLQUFLO01BQ2hCO01BRUEsZUFBZTtNQUNmLElBQUk2RCxjQUFXO1FBQ1gsT0FBTyxLQUFLO01BQ2hCO01BRUE7TUFDQSxTQUFTLElBQUlDLFFBQVFDLFdBQVcsS0FBSyxXQUFXQSxPQUFPO01BQ3ZELElBQUlDLFFBQUs7UUFDTCxPQUFPLEtBQUs7TUFDaEI7TUFFQTtNQUNBLElBQUlqRSxNQUFHO1FBQ0gsT0FBTyxLQUFLO01BQ2hCO01BRUFrRTtNQUNBQztNQUVBO01BQ0EsY0FBYyxJQUFJSixRQUFRQyxXQUFXLEtBQUsscUJBQXFCQSxPQUFPO01BRXRFbkM7UUFDSSxPQUFLO1FBR0wsTUFBTTtVQUFDdUM7UUFBUyxJQUFVQyxXQUFZQztRQUN0QyxDQUFDWixjQUFjYSxRQUFRLEdBQUdILGtCQUFrQixFQUFFSSxLQUFLLENBQUM7VUFBQ0MsU0FBU0M7UUFBTSxNQUFLO1VBQ3JFLElBQUlDLGFBQWFELE9BQU9qRixTQUFTYztVQUNqQyxJQUFJcUUsY0FBc0JELGVBQWUsU0FBU3JFLFlBQVlFLE9BQU9GLFlBQVl1RTtVQUNqRnpELFNBQVMwRCxhQUFhLFlBQVlGLGNBQWN0RSxZQUFZRTtVQUU1RCxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUV1RSxTQUFTSCxXQUFXLE1BQzNCQSxjQUFjeEQsU0FBUzBELGFBQWEsVUFBVXhFLFlBQVlFLE9BQU9GLFlBQVl1RTtVQUU5RSxLQUFLLFFBQVFEO1VBRWIsS0FBSyxXQUFXLElBQUlqRix1QkFBYyxNQUFNVyxXQUFXO1VBQ25ELEtBQUssb0JBQWtCO1FBQzNCLENBQUM7TUFDTDtNQUVBLFlBQVksTUFBT04sT0FBOEI7UUFDN0MsSUFBSSxPQUFPLEtBQUttRSxhQUFhLFlBQVk7UUFFekMsTUFBTWEsYUFBYSxNQUFNLEtBQUtiLFNBQVNuRSxHQUFHO1FBQzFDLElBQUksQ0FBQ2dGLFlBQVk7UUFDakIsSUFBSSxPQUFPQSxlQUFlLFVBQVU7VUFDaEM1QyxRQUFRQyxNQUFNLHNEQUFzRDJDLFVBQVU7VUFDOUU7O1FBR0osSUFBSWhGLElBQUlxQixhQUFhMkQsWUFBWTtRQUVqQyxLQUFLN0QsVUFBVTZELFVBQVU7UUFDekIsT0FBTztNQUNYO01BRUE3RCxVQUFVbkIsS0FBYWMsT0FBYztRQUNqQyxLQUFLLFlBQVkwRCxLQUFLLE1BQUs7VUFDdkIsS0FBSyxTQUFTckQsVUFBVW5CLEtBQUtjLEtBQUs7VUFDbEMsS0FBS21FLFFBQU0sQ0FBR0MsTUFBT3BDLE9BQVFWLFFBQVFDLE1BQU1TLElBQUlDLEtBQUssQ0FBQztRQUN6RCxDQUFDO01BQ0w7TUFFQWxDLGFBQWFDLE9BQWVDLE9BQWVmLEtBQVk7UUFDbkQsS0FBSyxZQUFZd0UsS0FBSyxNQUFLO1VBQ3ZCLEtBQUssU0FBUzNELGFBQWFDLE9BQU9DLE9BQU9mLEdBQUc7VUFDNUMsS0FBS2lGLFFBQU0sQ0FBR0MsTUFBT3BDLE9BQVFWLFFBQVFDLE1BQU1TLElBQUlDLEtBQUssQ0FBQztRQUN6RCxDQUFDO01BQ0w7TUFHQSxxQkFBcUIsSUFBSW9DLHlCQUFpQjtNQUMxQ0YsU0FBUyxZQUFXO1FBQ2hCLE1BQU1HLHNCQUFzQixLQUFLLG1CQUFtQjFFLE9BQUs7UUFFekQsTUFBTTtVQUFDYTtVQUFNRjtVQUFVQztRQUFNLElBQUlGO1FBQ2pDLE1BQU1pRSxPQUFPLEtBQUssVUFBVS9FLFlBQVlFLE9BQU8sSUFBSWUsS0FBS1UsTUFBTSxDQUFDLE1BQU1aLFdBQVdDLFNBQVNDO1FBQ3pGLElBQUksS0FBSyxNQUFNdkIsUUFBUXFGLE1BQU07UUFFN0IsTUFBTXJGLE1BQU0sS0FBSyxPQUFPLElBQUlSLFVBQUk2RixJQUFJO1FBR3BDLE1BQU1MLGFBQWEsTUFBTSxLQUFLLFVBQVVoRixHQUFHO1FBQzNDLElBQUksQ0FBQyxLQUFLLG1CQUFtQm1DLE1BQU1pRCxtQkFBbUIsR0FBRztRQUN6RCxJQUFJSixZQUFZO1FBR2hCLEtBQUssWUFBWWhGLElBQUlBLFFBQVEsS0FBSyxTQUFTRCxXQUMzQ3FDLFFBQVFDLE1BQU0sb0JBQW9CLEtBQUssU0FBU3RDLHdDQUF3Q0MsSUFBSUEsTUFBTTtRQUVsRyxLQUFLLGVBQWUsS0FBS3NGLFFBQVEsUUFBUSxJQUFJLEtBQUssVUFBUTtRQUMxRCxLQUFLLGVBQWU7TUFDeEI7TUFHQSxXQUFXO01BRVhDLFFBQUs7UUFDRCxLQUFLLFdBQVc7UUFDaEIsQ0FBQzdCLGNBQWMsS0FBS3VCLFFBQU0sQ0FBR0MsTUFBTXBDLE9BQU9WLFFBQVFDLE1BQU1TLElBQUlDLEtBQUssQ0FBQztNQUN0RTtNQUVBdkIsT0FBSTtRQUNBLEtBQUssU0FBU0EsTUFBSTtNQUN0QjtNQUVBRyxVQUFPO1FBQ0gsS0FBSyxTQUFTQSxTQUFPO01BQ3pCOztJQUNITztJQUVpQixNQUFNekMsV0FBVSxJQUFJbUUsU0FBTztJQUFDMUI7SUFFN0NtQyxXQUFtQjVFLFVBQVVBO0lBSTlCLENBQUNpRSxlQUFxQjhCLE9BQVFDLFdBQVcsQ0FBQ3pGLEtBQWFjLFVBQW1CckIsU0FBUTBCLFVBQVVuQixLQUFLYyxLQUFLO0lBQ3RHLENBQUM0QyxlQUFxQjhCLE9BQVFyRSxZQUFZLENBQUNuQixLQUFhYyxVQUFtQnJCLFNBQVEwQixVQUFVbkIsS0FBS2MsS0FBSztJQUN2RyxDQUFDNEMsZUFBcUI4QixPQUFRaEUsT0FBTyxNQUFNL0IsU0FBUStCLE1BQUk7SUFDdkQsQ0FBQ2tDLGVBQXFCOEIsT0FBUTdELFVBQVUsTUFBTWxDLFNBQVFrQyxTQUFPO0lBRzdELENBQUMrQixjQUFjZ0MsT0FBT0MsaUJBQWlCLFlBQVksTUFDL0NsRyxTQUFRd0YsUUFBTSxDQUFHQyxNQUFNcEMsT0FBT1YsUUFBUUMsTUFBTVMsSUFBSUMsS0FBSyxDQUFDLENBQUM7Ozs7Ozs7Ozs7OztJQ25KckQsTUFBTzZDLG9CQUFvQkMsSUFBbUI7TUFDaERoRSxZQUFZUCxRQUFjO1FBQ3RCLE9BQUs7UUFFTCxJQUFJQSxPQUFPd0UsTUFBSSxLQUFPLElBQUk7UUFDMUJ4RSxTQUFVQSxPQUFPVyxNQUFNLEdBQUcsQ0FBQyxNQUFNLE1BQU9YLE9BQU9XLE1BQU0sQ0FBQyxJQUFJWDtRQUMxRCxNQUFNeUUsUUFBUXpFLE9BQU95RSxNQUFNLEdBQUc7UUFFOUIsU0FBU0MsSUFBSSxHQUFHQSxJQUFJRCxNQUFNN0YsUUFBUSxFQUFFOEYsR0FBRztVQUNuQyxNQUFNQyxRQUFRRixNQUFNQyxHQUFHRCxNQUFNLEtBQUssQ0FBQztVQUNuQyxNQUFNN0UsUUFBUStFLE1BQU0sS0FDaEJDLG1CQUFtQkQsTUFBTSxHQUFHRSxRQUFRLE9BQU8sR0FBRyxDQUFDLElBQUlDO1VBQ3ZELEtBQUtDLElBQUlKLE1BQU0sSUFBSS9FLEtBQUs7O01BRWhDOztJQUNIZ0I7Ozs7Ozs7Ozs7OztJQ1REO0lBRWlCLE1BQ1gxQyxLQUFHO01BQ0k7TUFDVCxJQUFJUSxNQUFHO1FBQ0gsT0FBTyxLQUFLO01BQ2hCO01BRVM7TUFDVCxJQUFJcUIsV0FBUTtRQUNSLE9BQU8sS0FBSztNQUNoQjtNQUVTO01BQ1QsSUFBSUMsU0FBTTtRQUNOLE9BQU8sS0FBSztNQUNoQjtNQUVTO01BQ1QsSUFBSWdGLEtBQUU7UUFDRixPQUFPLEtBQUs7TUFDaEI7TUFFUztNQUNULElBQUkvRSxPQUFJO1FBQ0osT0FBTyxLQUFLO01BQ2hCO01BRUFNLFlBQVk3QixLQUFXO1FBQ25CLEtBQUssT0FBT0E7UUFFWixNQUFNLENBQUN1RyxHQUFHaEYsSUFBSSxJQUFJdkIsSUFBSStGLE1BQU0sR0FBRztRQUMvQixNQUFNLENBQUMxRSxVQUFVQyxNQUFNLElBQUlpRixFQUFFUixNQUFNLEdBQUc7UUFFdEMsS0FBSyxZQUFZMUUsU0FBUzhCLFdBQVcsR0FBRyxJQUFJOUIsV0FBVyxJQUFJQTtRQUMzRCxLQUFLLFVBQVVDLFNBQVNBLFNBQVM7UUFDakMsS0FBSyxNQUFNLElBQUlzRSx5QkFBWSxLQUFLLE9BQU87UUFDdkMsS0FBSyxRQUFRckU7TUFDakI7O0lBQ0hXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvd2ViL291dCJ9