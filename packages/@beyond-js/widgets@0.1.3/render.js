System.register(["@beyond-js/kernel@0.1.8/bundle","@beyond-js/kernel@0.1.8/core"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.8"],["@beyond-js/widgets","0.1.3"]]);
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

// .beyond/uimport/@beyond-js/widgets/render.0.1.3.js
var render_0_1_3_exports = {};
__export(render_0_1_3_exports, {
  BeyondWidget: () => BeyondWidget,
  GlobalCSS: () => GlobalCSS,
  IBeyondWidgetController: () => IBeyondWidgetController,
  IWidgetSpecs: () => IWidgetSpecs,
  NodeWidget: () => NodeWidget,
  StylesManager: () => StylesManager,
  WidgetCSR: () => WidgetCSR,
  __beyond_pkg: () => __beyond_pkg,
  attributes: () => attributes,
  hmr: () => hmr,
  prerender: () => prerender,
  widgets: () => widgets
});
module.exports = __toCommonJS(render_0_1_3_exports);

// node_modules/@beyond-js/widgets/render/render.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.8/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.8/core"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/widgets@0.1.3/render"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1]]);
var ims = /* @__PURE__ */new Map();
ims.set("./anchor", {
  hash: 1014568902,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    typeof process !== "object" && customElements.define("beyond-link", class extends HTMLElement {
      #routing;
      constructor() {
        super();
        bimport("@beyond-js/kernel/routing").then(({
          routing
        }) => this.#routing = routing);
      }
      connectedCallback() {
        this.addEventListener("click", () => {
          if (!this.hasAttribute("data-url")) return;
          const url = this.getAttribute("data-url");
          this.#routing?.pushState(url);
        });
      }
    });
  }
});
ims.set("./attributes", {
  hash: 1262494723,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.attributes = exports.Attributes = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class Attributes extends _core.Events {
      #values = /* @__PURE__ */new Map();
      get values() {
        return this.#values;
      }
      add(name, value) {
        this.#values.set(name, value);
        this.trigger("add", name, value);
        this.trigger("change");
      }
      remove(name) {
        this.#values.delete(name);
        this.trigger("remove", name);
        this.trigger("change");
      }
    }
    exports.Attributes = Attributes;
    const attributes2 = new Attributes();
    exports.attributes = attributes2;
  }
});
ims.set("./instances/index", {
  hash: 2022060609,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.instances = void 0;
    var _node = require2("./node");
    const instances = new class extends Set {
      register(widget) {
        this.add(widget);
        const parent = (() => {
          let parent2 = widget;
          while (true) {
            const root = parent2.getRootNode();
            if (root === document) return;
            parent2 = root.host;
            if (this.has(parent2)) return parent2;
          }
        })();
        const node = new _node.NodeWidget(widget, parent);
        parent?.wnode.children.add(widget);
        this.add(widget);
        return node;
      }
    }();
    exports.instances = instances;
  }
});
ims.set("./instances/node", {
  hash: 3167083658,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.NodeWidget = void 0;
    class NodeWidget2 {
      #widget;
      get widget() {
        return this.#widget;
      }
      #parent;
      get parent() {
        return this.#parent;
      }
      #children = /* @__PURE__ */new Set();
      get children() {
        return this.#children;
      }
      constructor(widget, parent) {
        this.#widget = widget;
        this.#parent = parent;
      }
    }
    exports.NodeWidget = NodeWidget2;
  }
});
ims.set("./prerendered/index", {
  hash: 483738484,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.prerender = void 0;
    const prerender2 = new class {
      #ssr = [];
      get ssr() {
        return this.#ssr;
      }
      find(element, attrs) {
        return this.#ssr.find(item => {
          if (item.element !== element) return false;
          const iattrs = new Map(item.attributes);
          return [...attrs].reduce((prev, [name, value]) => prev || iattrs.get(name) === value, true);
        });
      }
    }();
    exports.prerender = prerender2;
  }
});
ims.set("./widget/attributes", {
  hash: 1029410984,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetGlobalAttributes = void 0;
    var _attributes = require2("../attributes");
    class WidgetGlobalAttributes {
      #holder;
      get holder() {
        return this.#holder;
      }
      #set = (name, value) => {
        this.#holder.setAttribute(name, value);
      };
      #remove = name => {
        this.#holder.removeAttribute(name);
      };
      initialise(holder) {
        this.#holder = holder;
        _attributes.attributes.values.forEach((value, name) => this.#set(name, value));
        _attributes.attributes.on("add", this.#set);
        _attributes.attributes.on("remove", this.#remove);
      }
      destroy() {
        _attributes.attributes.off("add", this.#set);
        _attributes.attributes.off("remove", this.#remove);
      }
    }
    exports.WidgetGlobalAttributes = WidgetGlobalAttributes;
  }
});
ims.set("./widget/checksum", {
  hash: 1702419318,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _default;
    function _default(s) {
      let hash = 0,
        i,
        c;
      const length = s.length;
      if (length === 0) {
        return hash;
      }
      for (i = 0; i < length; i++) {
        c = s.charCodeAt(i);
        hash = (hash << 5) - hash + c;
        hash = hash & hash;
      }
      return hash.toString().replace("-", "n");
    }
    ;
  }
});
ims.set("./widget/csr", {
  hash: 1023760945,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetCSR = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class WidgetCSR2 extends _core.Events {
      #widget;
      #bundle;
      get bundle() {
        return this.#bundle;
      }
      #controller;
      get controller() {
        return this.#controller;
      }
      #error;
      get error() {
        return this.#error;
      }
      #loading = false;
      get loading() {
        return this.#loading;
      }
      #loaded = false;
      get loaded() {
        return this.#loaded;
      }
      #holders = /* @__PURE__ */new Set(["initialised", "loaded"]);
      initialise() {
        if (!this.#widget.specs.render.csr) return;
        if (!this.#holders.has("initialised")) throw new Error("Widget CSR already initialised");
        this.#holders.delete("initialised");
        this.#render();
      }
      constructor(widget) {
        super();
        const {
          specifier,
          specs
        } = this.#widget = widget;
        if (!specs.render.csr) return;
        bimport(specifier).then(bundle => {
          this.#bundle = bundle;
          this.#loading = false;
          this.#loaded = true;
          this.#holders.delete("loaded");
          this.#render();
        }).catch(exc => {
          console.error(`Error loading widget "${specifier}"`, exc.stack);
          this.#error = exc.message;
          this.#loading = false;
        });
      }
      #render = () => {
        if (this.#holders.size) return;
        const {
          Controller
        } = this.#bundle;
        if (!Controller || typeof Controller !== "function") {
          const message = `Widget "${this.#widget.localName}" does not export its Controller`;
          console.error(message);
          this.#error = message;
          return;
        }
        this.#controller = new Controller(this.#widget);
        this.#controller.initialise().then(() => this.trigger("controller.initialised")).catch(exc => console.log(exc instanceof Error ? exc.stack : exc));
      };
      disconnect() {
        this.#controller?.disconnect?.();
      }
      attributeChanged(name, old, value) {
        this.#controller?.attributeChanged(name, old, value);
      }
    }
    exports.WidgetCSR = WidgetCSR2;
  }
});
ims.set("./widget/index", {
  hash: 2251972216,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondWidget = void 0;
    var _instances = require2("../instances");
    var _sr = require2("./sr");
    var _csr = require2("./csr");
    var _ssr = require2("./ssr");
    var _attributes = require2("./attributes");
    var _styles = require2("./styles");
    const Element = typeof HTMLElement === "undefined" ? null : HTMLElement;
    class BeyondWidget2 extends Element {
      #specs;
      get specs() {
        return this.#specs;
      }
      get name() {
        return this.#specs.name;
      }
      get vspecifier() {
        return this.#specs.vspecifier;
      }
      #specifier;
      get specifier() {
        return this.#specifier;
      }
      get host() {
        return `${location.origin}/`;
      }
      get is() {
        return this.#specs.is;
      }
      get route() {
        return this.#specs.route;
      }
      get layout() {
        return this.#specs.layout;
      }
      #holder;
      get holder() {
        return this.#holder;
      }
      #sr;
      get sr() {
        return this.#sr;
      }
      #csr;
      get csr() {
        return this.#csr;
      }
      get controller() {
        return this.#csr.controller;
      }
      #ssr;
      get ssr() {
        return this.#ssr;
      }
      #attributes;
      #styles;
      get styles() {
        return this.#styles;
      }
      #wnode;
      get wnode() {
        return this.#wnode;
      }
      get wparent() {
        return this.#wnode.parent;
      }
      get wchildren() {
        return [...this.#wnode.children];
      }
      #oncontroller = () => {
        const event = new CustomEvent("controller.initialised", {
          bubbles: false,
          composed: false
        });
        this.dispatchEvent(event);
      };
      constructor(specs) {
        super();
        this.#specs = specs;
        this.attachShadow({
          mode: "open"
        });
        this.#specifier = (() => {
          const split = specs.vspecifier.split("/");
          const scope = split[0].startsWith("@") ? split.shift() : void 0;
          const [name] = split.shift().split("@");
          const subpath = split.join("/");
          return (scope ? `${scope}/${name}` : name) + (subpath ? `/${subpath}` : "");
        })();
        this.#attributes = new _attributes.WidgetGlobalAttributes();
        this.#sr = new _sr.WidgetSR(this);
        this.#ssr = new _ssr.WidgetSSR(this);
        this.#csr = new _csr.WidgetCSR(this);
        this.#csr?.on("controller.initialised", this.#oncontroller);
        this.#styles = new _styles.StylesManager(this);
      }
      connectedCallback() {
        this.#wnode = _instances.instances.register(this);
        this.#holder = document.createElement("span");
        this.#holder.style.display = "none";
        this.shadowRoot.append(this.#holder);
        this.#attributes.initialise(this.#holder);
        this.#ssr.initialise().catch(exc => console.error(exc.stack));
        this.#sr.initialise().catch(exc => console.error(exc.stack));
        this.#csr.initialise();
      }
      disconnectedCallback() {
        this.#csr.disconnect();
      }
      attributeChangedCallback(name, old, value) {
        this.#csr.attributeChanged(name, old, value);
      }
    }
    exports.BeyondWidget = BeyondWidget2;
  }
});
ims.set("./widget/renderer", {
  hash: 571206461,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Renderer = void 0;
    class Renderer {
      #widget;
      constructor(widget) {
        this.#widget = widget;
      }
      #ct = 0;
      async render(sr) {
        const ct = ++this.#ct;
        const {
          name,
          holder,
          styles
        } = this.#widget;
        if (sr.errors?.length) {
          console.error(`Error fetching static rendered widget "${name}":`, sr.errors);
          return;
        }
        if (holder.children.length) return;
        if (!sr.html) return "";
        const host = await this.#widget.host;
        holder.innerHTML = (() => sr.html.replace(/##_!(.*?)!_##/g, () => host))();
        const links = [];
        const resources = holder.querySelectorAll("link");
        resources.forEach(node => links.push(node.href));
        links.length && (await styles.initialise(links));
        resources.forEach(node => node.localName === "link" && node.addEventListener("load", styles.onloaded));
        await styles?.ready;
        if (this.#ct !== ct) return;
        holder.style.display = "";
      }
    }
    exports.Renderer = Renderer;
  }
});
ims.set("./widget/sr", {
  hash: 2731121275,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetSR = void 0;
    var _checksum = require2("./checksum");
    var _renderer = require2("./renderer");
    class WidgetSR {
      #widget;
      #renderer;
      #prerender;
      get prerender() {
        return this.#prerender;
      }
      constructor(widget) {
        this.#widget = widget;
        this.#renderer = new _renderer.Renderer(widget);
      }
      #initialised = false;
      async initialise() {
        if (this.#initialised) throw new Error("Widget SSR already initialised");
        this.#initialised = true;
        const {
          specs
        } = this.#widget;
        if (!specs.render.sr) return;
        const language = (() => {
          const {
            multilanguage
          } = specs.render;
          if (!multilanguage) return "";
          let language2 = localStorage.__beyond_language;
          language2 = language2 ? language2 : navigator.language;
          language2 = language2.slice(0, 2);
          return `${language2}:`;
        })();
        let resource;
        if (specs.is === "page") {
          let key = `${language}${specs.name}//${location.pathname}${location.search}`;
          resource = (0, _checksum.default)(key);
        } else if (specs.is === "layout") {
          resource = (0, _checksum.default)(`${language}${specs.name}`);
        } else {
          const compute = /* @__PURE__ */new Map();
          specs.attrs?.forEach(attr => {
            const value = this.#widget.getAttribute(attr);
            value && compute.set(attr, value);
          });
          let key = language;
          [...compute].sort((a, b) => a[0] < b[0] ? 1 : 0).forEach(([k, v]) => key += `${k}//${v}///`);
          resource = (0, _checksum.default)(key);
        }
        const host = await this.#widget.host;
        const url = `${host}__sr_widgets__/${specs.name}.${resource}.js`;
        try {
          const response = await fetch(url);
          if (response.status !== 200) {
            console.error(`Error fetching static rendered widget "${specs.name}". Status code: ${response.status}`);
            return;
          }
          const sr = await response.json();
          this.#prerender = sr;
          await this.#renderer.render(sr);
        } catch (exc) {
          console.error("Widget static content fetch error:", exc.message);
        }
      }
    }
    exports.WidgetSR = WidgetSR;
  }
});
ims.set("./widget/ssr", {
  hash: 2834037449,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetSSR = void 0;
    var _prerendered = require2("../prerendered");
    var _renderer = require2("./renderer");
    class WidgetSSR {
      #widget;
      #renderer;
      #prerender;
      get prerender() {
        return this.#prerender;
      }
      constructor(widget) {
        this.#widget = widget;
        this.#renderer = new _renderer.Renderer(widget);
      }
      #initialised = false;
      async initialise() {
        if (!this.#widget.specs.render.ssr) return;
        if (this.#initialised) throw new Error("Widget SSR already initialised");
        this.#initialised = true;
        const widget = this.#widget;
        const {
          specs
        } = widget;
        const attrs = new Map(specs.attrs ? specs.attrs.map(attr => [attr, widget.getAttribute(attr)]) : void 0);
        const found = _prerendered.prerender.find(specs.name, attrs);
        if (!found) {
          return await this.#load();
        }
        this.#prerender = found;
        await this.#renderer.render(found);
      }
      async #load() {
        const {
          specifier,
          name
        } = this.#widget;
        const host = await (async () => {
          const split = specifier.split("/");
          const pkg = split[0].startsWith("@") ? `${split.shift()}/${split.shift()}` : split.shift();
          const {
            ssr: config
          } = (await bimport(`${pkg}/config`)).default;
          if (!config || !config.host) {
            console.error(`Project "${pkg}" does not support SSR (host not configured). Required by "${name}" widget.`);
            return;
          }
          return config.host;
        })();
        if (!host) return;
        const language = (() => {
          const {
            specs
          } = this.#widget;
          const {
            multilanguage
          } = specs.render;
          if (!multilanguage) return "";
          let language2 = localStorage.__beyond_language;
          language2 = language2 ? language2 : navigator.language;
          language2 = language2.slice(0, 2);
          return `&language=${language2}`;
        })();
        let attrs = (() => {
          const {
            specs
          } = this.#widget;
          if (!specs.attrs?.length) return "";
          let attrs2 = "&attrs=" + specs.attrs.join(",");
          specs.attrs.forEach(attr => {
            const value = this.#widget.getAttribute(attr);
            if (!value) return;
            attrs2 += `&attr.${attr}=${value}`;
          });
        })();
        const url = `${host}/widget?name=${name}${language}${attrs}`;
        try {
          const response = await fetch(url);
          if (response.status !== 200) {
            console.error(`Error fetching SSR of widget "${name}". Status code: ${response.status}`);
            return;
          }
          const sr = await response.json();
          this.#prerender = sr;
          await this.#renderer.render(sr);
        } catch (exc) {
          console.error(exc.stack);
        }
      }
    }
    exports.WidgetSSR = WidgetSSR;
  }
});
ims.set("./widget/styles/global", {
  hash: 1566285625,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GlobalCSS = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class GlobalCSS2 extends _core.Events {
      #widget;
      #version = 0;
      constructor(widget) {
        super();
        this.#widget = widget;
        const {
          host
        } = this.#widget;
        const version = this.#version !== 0 ? `?version=${this.#version}` : "";
        this.#link = `${host}global.css${version}`;
      }
      #link;
      get link() {
        return this.#link;
      }
      update() {
        this.#version++;
        this.trigger("change");
      }
    }
    exports.GlobalCSS = GlobalCSS2;
  }
});
ims.set("./widget/styles/index", {
  hash: 1538919774,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.StylesManager = void 0;
    var _core = require2("@beyond-js/kernel/core");
    var _link = require2("./link");
    var _global = require2("./global");
    class StylesManager2 {
      #events = new _core.Events();
      on = (event, listener) => this.#events.on(event, listener);
      off = (event, listener) => this.#events.off(event, listener);
      #loaded = /* @__PURE__ */new Map();
      #globalcss;
      #version = 0;
      get version() {
        return this.#version;
      }
      #changed() {
        this.#version++;
        this.#resolved && this.#events.trigger("change");
      }
      get resources() {
        return /* @__PURE__ */new Set([...this.#loaded.keys()]);
      }
      get loaded() {
        this.#check();
        return this.#resolved;
      }
      #promise;
      #resolved = false;
      #resolve;
      get ready() {
        this.#check();
        return this.#promise;
      }
      onloaded = event => {
        const href = typeof event === "string" ? event : event.currentTarget.getAttribute("href");
        if (!this.#loaded.has(href)) {
          console.warn(`Stylesheet href="${href}" not registered`);
          return;
        }
        this.#loaded.set(href, true);
        this.#check();
        const changed = this.#purge();
        changed && this.#changed();
        return true;
      };
      #check() {
        if (this.#resolved) return true;
        const loaded = [...this.#loaded.values()].reduce((prev, loaded2) => prev && loaded2, true);
        loaded && this.#resolve();
        return this.#resolved = loaded;
      }
      #purge() {
        const versions = {
          last: /* @__PURE__ */new Map(),
          values: /* @__PURE__ */new Map(),
          lastLoaded: /* @__PURE__ */new Map()
        };
        [...this.#loaded.keys()].forEach(href => {
          const link = new _link.default(href);
          const prevLast = versions.last.get(link.resource);
          const last = prevLast && prevLast > link.version ? prevLast : link.version;
          versions.last.set(link.resource, last);
          if (this.#loaded.get(link.href)) {
            const prevLastLoaded = versions.lastLoaded.get(link.resource);
            const lastLoaded = prevLastLoaded && prevLastLoaded > link.version ? prevLastLoaded : link.version;
            versions.lastLoaded.set(link.resource, lastLoaded);
          }
          const values = versions.values.has(link.resource) ? versions.values.get(link.resource) : /* @__PURE__ */new Set();
          values.add(link.version);
          versions.values.set(link.resource, values);
        });
        const purge = [];
        [...this.#loaded.keys()].forEach(href => {
          const link = new _link.default(href);
          const lastLoaded = versions.lastLoaded.get(link.resource);
          link.version < lastLoaded && purge.push(link);
        });
        purge.forEach(link => this.#loaded.delete(link.href));
        return !!purge.length;
      }
      #last;
      #refresh = () => {
        if (!this.#last) return;
        const changed = this.#update(this.#last);
        changed && this.#changed();
      };
      #update(_links) {
        this.#last = _links;
        _links.unshift(this.#globalcss.link);
        const links = _links.map(link => new _link.default(link));
        let changed = false;
        links.forEach(link => {
          if (this.#loaded.has(link.href)) return;
          this.#loaded.set(link.href, false);
          changed = true;
        });
        return changed;
      }
      update(links) {
        const changed = this.#update(links);
        changed && this.#changed();
      }
      constructor(widget) {
        this.#globalcss = new _global.GlobalCSS(widget);
        this.#promise = new Promise(resolve => this.#resolve = resolve);
      }
      #initialised = false;
      get initialised() {
        return this.#initialised;
      }
      async initialise(links) {
        if (this.#initialised) throw new Error(`Widget styles already initialised`);
        this.#initialised = true;
        this.#update(links);
        this.#globalcss.on("change", this.#refresh);
      }
      destroy() {
        this.#globalcss.off("change", this.#refresh);
      }
    }
    exports.StylesManager = StylesManager2;
  }
});
ims.set("./widget/styles/link", {
  hash: 3219871066,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    class _default {
      #href;
      get href() {
        return this.#href;
      }
      #resource;
      get resource() {
        return this.#resource;
      }
      #version;
      get version() {
        return this.#version;
      }
      constructor(href) {
        this.#href = href;
        const iv = href.split("?version=");
        this.#resource = iv[0];
        this.#version = iv[1] ? parseInt(iv[1]) : 0;
      }
    }
    exports.default = _default;
  }
});
ims.set("./widgets", {
  hash: 3986250608,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.widgets = void 0;
    var _widget = require2("./widget");
    var _instances = require2("./instances");
    var _attributes = require2("./attributes");
    require2("./anchor");
    class BeyondWidgets extends Map {
      #ssr = true;
      get ssr() {
        return this.#ssr;
      }
      constructor() {
        super();
      }
      setup(config) {
        this.#ssr = typeof config?.ssr === "boolean" ? config.ssr : true;
      }
      get instances() {
        return _instances.instances;
      }
      get attributes() {
        return _attributes.attributes;
      }
      register(specs) {
        specs.forEach(specs2 => {
          if (this.has(specs2.name)) return;
          specs2.render = specs2.render ? specs2.render : {
            csr: true,
            ssr: false,
            sr: false
          };
          const {
            name,
            render
          } = specs2;
          render.csr = typeof render.csr === "boolean" ? render.csr : true;
          this.set(name, specs2);
          if (typeof process === "object") return;
          customElements.define(name, class extends _widget.BeyondWidget {
            static get observedAttributes() {
              return specs2.attrs ? specs2.attrs : [];
            }
            constructor() {
              super(specs2);
            }
          });
        });
      }
    }
    const widgets2 = new BeyondWidgets();
    exports.widgets = widgets2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./attributes",
  "from": "attributes",
  "name": "attributes"
}, {
  "im": "./instances/node",
  "from": "NodeWidget",
  "name": "NodeWidget"
}, {
  "im": "./prerendered/index",
  "from": "prerender",
  "name": "prerender"
}, {
  "im": "./widget/csr",
  "from": "IBeyondWidgetController",
  "name": "IBeyondWidgetController"
}, {
  "im": "./widget/csr",
  "from": "WidgetCSR",
  "name": "WidgetCSR"
}, {
  "im": "./widget/index",
  "from": "IWidgetSpecs",
  "name": "IWidgetSpecs"
}, {
  "im": "./widget/index",
  "from": "BeyondWidget",
  "name": "BeyondWidget"
}, {
  "im": "./widget/styles/global",
  "from": "GlobalCSS",
  "name": "GlobalCSS"
}, {
  "im": "./widget/styles/index",
  "from": "StylesManager",
  "name": "StylesManager"
}, {
  "im": "./widgets",
  "from": "widgets",
  "name": "widgets"
}];
var attributes, NodeWidget, prerender, IBeyondWidgetController, WidgetCSR, IWidgetSpecs, BeyondWidget, GlobalCSS, StylesManager, widgets;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "attributes") && (attributes = require2 ? require2("./attributes").attributes : value);
  (require2 || prop === "NodeWidget") && (NodeWidget = require2 ? require2("./instances/node").NodeWidget : value);
  (require2 || prop === "prerender") && (prerender = require2 ? require2("./prerendered/index").prerender : value);
  (require2 || prop === "IBeyondWidgetController") && (IBeyondWidgetController = require2 ? require2("./widget/csr").IBeyondWidgetController : value);
  (require2 || prop === "WidgetCSR") && (WidgetCSR = require2 ? require2("./widget/csr").WidgetCSR : value);
  (require2 || prop === "IWidgetSpecs") && (IWidgetSpecs = require2 ? require2("./widget/index").IWidgetSpecs : value);
  (require2 || prop === "BeyondWidget") && (BeyondWidget = require2 ? require2("./widget/index").BeyondWidget : value);
  (require2 || prop === "GlobalCSS") && (GlobalCSS = require2 ? require2("./widget/styles/global").GlobalCSS : value);
  (require2 || prop === "StylesManager") && (StylesManager = require2 ? require2("./widget/styles/index").StylesManager : value);
  (require2 || prop === "widgets") && (widgets = require2 ? require2("./widgets").widgets : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyLjAuMS4zLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci9hbmNob3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL2F0dHJpYnV0ZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL2luc3RhbmNlcy9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL19fc291cmNlcy9yZW5kZXIvaW5zdGFuY2VzL25vZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL3ByZXJlbmRlcmVkL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci93aWRnZXQvYXR0cmlidXRlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL19fc291cmNlcy9yZW5kZXIvd2lkZ2V0L2NoZWNrc3VtLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci93aWRnZXQvY3NyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci93aWRnZXQvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL3dpZGdldC9yZW5kZXJlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL19fc291cmNlcy9yZW5kZXIvd2lkZ2V0L3NyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci93aWRnZXQvc3NyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci93aWRnZXQvc3R5bGVzL2dsb2JhbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL19fc291cmNlcy9yZW5kZXIvd2lkZ2V0L3N0eWxlcy9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL19fc291cmNlcy9yZW5kZXIvd2lkZ2V0L3N0eWxlcy9saW5rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci93aWRnZXRzLnRzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiQmV5b25kV2lkZ2V0IiwiR2xvYmFsQ1NTIiwiSUJleW9uZFdpZGdldENvbnRyb2xsZXIiLCJJV2lkZ2V0U3BlY3MiLCJOb2RlV2lkZ2V0IiwiU3R5bGVzTWFuYWdlciIsIldpZGdldENTUiIsIl9fYmV5b25kX3BrZyIsImF0dHJpYnV0ZXMiLCJobXIiLCJwcmVyZW5kZXIiLCJ3aWRnZXRzIiwibW9kdWxlIiwicHJvY2VzcyIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwiSFRNTEVsZW1lbnQiLCJjb25zdHJ1Y3RvciIsImJpbXBvcnQiLCJ0aGVuIiwicm91dGluZyIsImNvbm5lY3RlZENhbGxiYWNrIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhc0F0dHJpYnV0ZSIsInVybCIsImdldEF0dHJpYnV0ZSIsInB1c2hTdGF0ZSIsIkF0dHJpYnV0ZXMiLCJFdmVudHMiLCJNYXAiLCJ2YWx1ZXMiLCJhZGQiLCJuYW1lIiwidmFsdWUiLCJzZXQiLCJ0cmlnZ2VyIiwicmVtb3ZlIiwiZGVsZXRlIiwiZXhwb3J0cyIsImluc3RhbmNlcyIsIlNldCIsInJlZ2lzdGVyIiwid2lkZ2V0IiwicGFyZW50Iiwicm9vdCIsImdldFJvb3ROb2RlIiwiZG9jdW1lbnQiLCJob3N0IiwiaGFzIiwibm9kZSIsIndub2RlIiwiY2hpbGRyZW4iLCJzc3IiLCJmaW5kIiwiZWxlbWVudCIsImF0dHJzIiwiaXRlbSIsImlhdHRycyIsInJlZHVjZSIsInByZXYiLCJnZXQiLCJXaWRnZXRHbG9iYWxBdHRyaWJ1dGVzIiwiaG9sZGVyIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiaW5pdGlhbGlzZSIsImZvckVhY2giLCJvbiIsImRlc3Ryb3kiLCJvZmYiLCJzIiwiaGFzaCIsImkiLCJjIiwibGVuZ3RoIiwiY2hhckNvZGVBdCIsInRvU3RyaW5nIiwicmVwbGFjZSIsImJ1bmRsZSIsImNvbnRyb2xsZXIiLCJlcnJvciIsImxvYWRpbmciLCJsb2FkZWQiLCJzcGVjcyIsInJlbmRlciIsImNzciIsIkVycm9yIiwic3BlY2lmaWVyIiwiY2F0Y2giLCJleGMiLCJjb25zb2xlIiwic3RhY2siLCJtZXNzYWdlIiwic2l6ZSIsIkNvbnRyb2xsZXIiLCJsb2NhbE5hbWUiLCJsb2ciLCJkaXNjb25uZWN0IiwiYXR0cmlidXRlQ2hhbmdlZCIsIm9sZCIsIkVsZW1lbnQiLCJ2c3BlY2lmaWVyIiwibG9jYXRpb24iLCJvcmlnaW4iLCJpcyIsInJvdXRlIiwibGF5b3V0Iiwic3IiLCJzdHlsZXMiLCJ3cGFyZW50Iiwid2NoaWxkcmVuIiwiZXZlbnQiLCJDdXN0b21FdmVudCIsImJ1YmJsZXMiLCJjb21wb3NlZCIsImRpc3BhdGNoRXZlbnQiLCJhdHRhY2hTaGFkb3ciLCJtb2RlIiwic3BsaXQiLCJzY29wZSIsInN0YXJ0c1dpdGgiLCJzaGlmdCIsInN1YnBhdGgiLCJqb2luIiwiV2lkZ2V0U1IiLCJXaWRnZXRTU1IiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJkaXNwbGF5Iiwic2hhZG93Um9vdCIsImFwcGVuZCIsImRpc2Nvbm5lY3RlZENhbGxiYWNrIiwiYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIiwiUmVuZGVyZXIiLCJjdCIsImVycm9ycyIsImh0bWwiLCJpbm5lckhUTUwiLCJsaW5rcyIsInJlc291cmNlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwdXNoIiwiaHJlZiIsIm9ubG9hZGVkIiwicmVhZHkiLCJsYW5ndWFnZSIsIm11bHRpbGFuZ3VhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJfX2JleW9uZF9sYW5ndWFnZSIsIm5hdmlnYXRvciIsInNsaWNlIiwicmVzb3VyY2UiLCJrZXkiLCJwYXRobmFtZSIsInNlYXJjaCIsImNvbXB1dGUiLCJhdHRyIiwic29ydCIsImEiLCJiIiwiayIsInYiLCJyZXNwb25zZSIsImZldGNoIiwic3RhdHVzIiwianNvbiIsIm1hcCIsImZvdW5kIiwicGtnIiwiY29uZmlnIiwiZGVmYXVsdCIsInZlcnNpb24iLCJsaW5rIiwidXBkYXRlIiwibGlzdGVuZXIiLCJrZXlzIiwiY3VycmVudFRhcmdldCIsIndhcm4iLCJjaGFuZ2VkIiwidmVyc2lvbnMiLCJsYXN0IiwibGFzdExvYWRlZCIsIkxpbmsiLCJwcmV2TGFzdCIsInByZXZMYXN0TG9hZGVkIiwicHVyZ2UiLCJfbGlua3MiLCJ1bnNoaWZ0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJpbml0aWFsaXNlZCIsIml2IiwicGFyc2VJbnQiLCJyZXF1aXJlIiwiQmV5b25kV2lkZ2V0cyIsInNldHVwIiwib2JzZXJ2ZWRBdHRyaWJ1dGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztBQUFBO0FBQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0tBLE9BQU9DLFlBQVksWUFBWUMsZUFBZUMsT0FBTyxlQUFlLGNBQWNDLFlBQVc7TUFD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