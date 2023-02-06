System.register(["@beyond-js/kernel@0.1.8/bundle","@beyond-js/kernel@0.1.8/core","@beyond-js/widgets@0.1.3/render"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.8"],["@beyond-js/widgets","0.1.3"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.8/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.8/core', dep), dep => dependencies.set('@beyond-js/widgets@0.1.3/render', dep)],
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

// .beyond/uimport/@beyond-js/widgets/layout.0.1.3.js
var layout_0_1_3_exports = {};
__export(layout_0_1_3_exports, {
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  ssr: () => ssr
});
module.exports = __toCommonJS(layout_0_1_3_exports);

// node_modules/@beyond-js/widgets/layout/layout.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.8/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/widgets@0.1.3/render"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/widgets@0.1.3/layout"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/widgets/render", dependency_1]]);
var ims = /* @__PURE__ */new Map();
ims.set("./children", {
  hash: 1491145116,
  creator: function (require2, exports) {
    "use strict";

    var _render = require2("@beyond-js/widgets/render");
    var _ssr = require2("./ssr");
    let manager;
    customElements.define("beyond-layout-children", class extends HTMLElement {
      #layout;
      #active;
      connectedCallback() {
        this.attachShadow({
          mode: "open"
        });
        const managed = () => {
          const start = () => this.#start().catch(exc => console.error(exc.stack));
          manager.initialised ? start() : manager.ready.then(start);
        };
        if (manager) return managed();
        _ssr.ssr.page ? this.#onssr() : _ssr.ssr.addEventListener("received", this.#onssr);
        const promises = [];
        promises.push(bimport("@beyond-js/widgets/routing"));
        promises.push(bimport("@beyond-js/kernel/core"));
        const {
          specifier
        } = globalThis.__app_package;
        promises.push(bimport(`${specifier}/start`));
        Promise.all(promises).then(([routing]) => {
          ({
            manager
          } = routing);
          managed();
        }).catch(exc => console.log(exc.stack));
      }
      #container;
      get container() {
        if (this.#container !== void 0) return this.#container;
        const container = (() => {
          let parent = this;
          while (true) {
            const root = parent.getRootNode();
            if (root === document) return root;
            parent = root.host;
            if (_render.widgets.instances.has(parent)) return parent;
          }
        })();
        if (!container) {
          console.error(`Widget container of beyond-layout-children not found`);
          return this.#container = null;
        }
        return this.#container = container;
      }
      #onssr = () => {
        _ssr.ssr.removeEventListener("received", this.#onssr);
        const {
          container
        } = this;
        if (container === null) return;
        const {
          element,
          error
        } = (() => {
          const {
            hierarchy
          } = _ssr.ssr;
          if (container === document) return {
            element: hierarchy[0]
          };
          const {
            localName
          } = container;
          const index = hierarchy.indexOf(localName);
          if (index === -1) return {
            error: `Container widget of beyond-layout-children "${localName}" not found in ssr hierarchy`
          };
          if (index === hierarchy.length - 1) return {
            error: `Container widget of beyond-layout-children "${localName}" is the page, not a layout`
          };
          return {
            element: hierarchy[index + 1]
          };
        })();
        if (error) {
          console.error(error, this);
          return;
        }
        this.shadowRoot.appendChild(document.createElement(element));
      };
      #render = () => {
        this.#layout.children.forEach(child => {
          const {
            children
          } = this.shadowRoot;
          let element = [...children].find(element2 => element2.getAttribute("data-child-id") === child.id);
          if (!element) {
            element = document.createElement(child.element);
            element.setAttribute("data-child-id", child.id);
            this.shadowRoot.append(element);
          }
          const active = this.#layout.active === child;
          const controller = element.controller;
          if (active && element !== this.#active) {
            this.#active = element;
            const show = () => {
              element.removeEventListener("controller.initialised", show);
              if (element !== this.#active) return;
              const controller2 = element.controller;
              if (!controller2) {
                throw new Error(`Controller of element widget "${child.element}" is undefined`);
              }
              this.#active === element && controller2.show?.();
            };
            controller ? controller.show?.() : element.addEventListener("controller.initialised", show);
          } else if (!element.hidden && !active) {
            controller?.hide?.();
          }
          element.hidden = !active;
        });
      };
      #hydrate() {
        const {
          children
        } = this.shadowRoot;
        const layout = this.#layout;
        if (!children.length) return;
        if (children.length > 1) {
          console.error("Only one child was expected on beyond-layout-children start", this);
          return;
        }
        children[0].setAttribute("data-child-id", [...layout.children.keys()][0]);
      }
      async #start() {
        _ssr.ssr.removeEventListener("received", this.#onssr);
        if (this.container === null) return;
        const done = layout => {
          this.#layout = layout;
          this.#hydrate();
          this.#layout.on("change", this.#render);
          this.#render();
        };
        if (this.container === document) return done(manager.main);
        const {
          localName
        } = this.container;
        if (localName === manager.main.element) return done(manager.main);
        if (!manager.layouts.has(localName)) {
          console.error(`Layout "${localName}" not found`, [...manager.layouts], manager);
          return;
        }
        done(manager.layouts.get(localName));
      }
    });
  }
});
ims.set("./ssr", {
  hash: 2390596202,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ssr = void 0;
    const ssr2 = new class extends EventTarget {
      #main;
      get main() {
        return this.#main;
      }
      #page;
      get page() {
        return this.#page;
      }
      #layouts;
      get layouts() {
        return this.#layouts;
      }
      #hierarchy = [];
      get hierarchy() {
        return this.#hierarchy;
      }
      data(main, page) {
        this.#main = main;
        this.#page = page.element;
        this.#layouts = page.parents;
        main && this.#hierarchy.push(main);
        page.parents && (this.#hierarchy = this.#hierarchy.concat(page.parents));
        this.#hierarchy.push(page.element);
        const event = new Event("received");
        this.dispatchEvent(event);
      }
    }();
    exports.ssr = ssr2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./ssr",
  "from": "ssr",
  "name": "ssr"
}];
var ssr;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "ssr") && (ssr = require2 ? require2("./ssr").ssr : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3dpZGdldHMvbGF5b3V0LjAuMS4zLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9sYXlvdXQvX19zb3VyY2VzL2xheW91dC9jaGlsZHJlbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvbGF5b3V0L19fc291cmNlcy9sYXlvdXQvc3NyLnRzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiX19iZXlvbmRfcGtnIiwiaG1yIiwic3NyIiwibW9kdWxlIiwibWFuYWdlciIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwiSFRNTEVsZW1lbnQiLCJjb25uZWN0ZWRDYWxsYmFjayIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJtYW5hZ2VkIiwic3RhcnQiLCJjYXRjaCIsImV4YyIsImNvbnNvbGUiLCJlcnJvciIsInN0YWNrIiwiaW5pdGlhbGlzZWQiLCJyZWFkeSIsInRoZW4iLCJwYWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByb21pc2VzIiwicHVzaCIsImJpbXBvcnQiLCJzcGVjaWZpZXIiLCJnbG9iYWxUaGlzIiwiX19hcHBfcGFja2FnZSIsIlByb21pc2UiLCJhbGwiLCJyb3V0aW5nIiwibG9nIiwiY29udGFpbmVyIiwicGFyZW50Iiwicm9vdCIsImdldFJvb3ROb2RlIiwiZG9jdW1lbnQiLCJob3N0Iiwid2lkZ2V0cyIsImluc3RhbmNlcyIsImhhcyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlbGVtZW50IiwiaGllcmFyY2h5IiwibG9jYWxOYW1lIiwiaW5kZXgiLCJpbmRleE9mIiwibGVuZ3RoIiwic2hhZG93Um9vdCIsImFwcGVuZENoaWxkIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkIiwiZmluZCIsImdldEF0dHJpYnV0ZSIsImlkIiwic2V0QXR0cmlidXRlIiwiYXBwZW5kIiwiYWN0aXZlIiwiY29udHJvbGxlciIsInNob3ciLCJFcnJvciIsImhpZGRlbiIsImhpZGUiLCJsYXlvdXQiLCJrZXlzIiwiZG9uZSIsIm9uIiwibWFpbiIsImxheW91dHMiLCJnZXQiLCJFdmVudFRhcmdldCIsImRhdGEiLCJwYXJlbnRzIiwiY29uY2F0IiwiZXZlbnQiLCJFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztFQUFBQztFQUFBQztBQUFBO0FBQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0NBO0lBQ0E7SUFJQSxJQUFJQztJQUVKQyxlQUFlQyxPQUFPLDBCQUEwQixjQUFjQyxZQUFXO01BQ3JFO01BQ0E7TUFFQUMsb0JBQWlCO1FBQ2IsS0FBS0MsYUFBYTtVQUFDQyxNQUFNO1FBQU0sQ0FBQztRQUVoQyxNQUFNQyxVQUFVLE1BQUs7VUFDakIsTUFBTUMsUUFBUSxNQUFNLEtBQUssUUFBTSxDQUFHQyxNQUFNQyxPQUFPQyxRQUFRQyxNQUFNRixJQUFJRyxLQUFLLENBQUM7VUFDdkViLFFBQVFjLGNBQWNOLE9BQUssR0FBS1IsUUFBUWUsTUFBTUMsS0FBS1IsS0FBSztRQUM1RDtRQUdBLElBQUlSLFNBQVMsT0FBT08sU0FBTztRQUczQlQsU0FBSW1CLE9BQU8sS0FBSyxRQUFNLEdBQUtuQixTQUFJb0IsaUJBQWlCLFlBQVksS0FBSyxNQUFNO1FBRXZFLE1BQU1DLFdBQTJCO1FBQ2pDQSxTQUFTQyxLQUFLQyxRQUFRLDRCQUE0QixDQUFDO1FBQ25ERixTQUFTQyxLQUFLQyxRQUFRLHdCQUF3QixDQUFDO1FBRS9DLE1BQU07VUFBQ0M7UUFBUyxJQUFVQyxXQUFZQztRQUN0Q0wsU0FBU0MsS0FBS0MsUUFBUSxHQUFHQyxpQkFBaUIsQ0FBQztRQUUzQ0csUUFBUUMsSUFBSVAsUUFBUSxFQUFFSCxLQUFLLENBQUMsQ0FBQ1csT0FBTyxNQUFLO1VBQ3JDLENBQUM7WUFBQzNCO1VBQU8s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LEtBQUtIO1FBQ3hCLE1BQU1pQixTQUFTLEtBQUs7UUFFcEIsSUFBSSxDQUFDZCxTQUFTSixRQUFRO1FBQ3RCLElBQUlJLFNBQVNKLFNBQVMsR0FBRztVQUNyQmpDLFFBQVFDLE1BQU0sK0RBQStELElBQUk7VUFDakY7O1FBRUpvQyxTQUFTLEdBQUdNLGFBQWEsaUJBQWlCLENBQUMsR0FBR1EsT0FBT2QsU0FBU2UsTUFBTSxFQUFFLEVBQUU7TUFDNUU7TUFFQSxNQUFNLFNBQU07UUFDUmpFLFNBQUl3QyxvQkFBb0IsWUFBWSxLQUFLLE1BQU07UUFDL0MsSUFBSSxLQUFLVCxjQUFjLE1BQU07UUFFN0IsTUFBTW1DLE9BQVFGLFVBQWtCO1VBQzVCLEtBQUssVUFBVUE7VUFDZixLQUFLLFVBQVE7VUFDYixLQUFLLFFBQVFHLEdBQUcsVUFBVSxLQUFLLE9BQU87VUFDdEMsS0FBSyxTQUFPO1FBQ2hCO1FBR0EsSUFBSSxLQUFLcEMsY0FBY0ksVUFBVSxPQUFPK0IsS0FBS2hFLFFBQVFrRSxJQUFJO1FBR3pELE1BQU07VUFBQ3pCO1FBQVMsSUFBa0IsS0FBS1o7UUFDdkMsSUFBSVksY0FBY3pDLFFBQVFrRSxLQUFLM0IsU0FBUyxPQUFPeUIsS0FBS2hFLFFBQVFrRSxJQUFJO1FBR2hFLElBQUksQ0FBQ2xFLFFBQVFtRSxRQUFROUIsSUFBSUksU0FBUyxHQUFHO1VBQ2pDOUIsUUFBUUMsTUFBTSxXQUFXNkIsd0JBQXdCLENBQUMsR0FBR3pDLFFBQVFtRSxPQUFPLEdBQUduRSxPQUFPO1VBQzlFOztRQUVKZ0UsS0FBS2hFLFFBQVFtRSxRQUFRQyxJQUFJM0IsU0FBUyxDQUFDO01BQ3ZDO0tBQ0g7Ozs7Ozs7Ozs7OztJQzdLaUIsTUFBTTNDLE9BQU0sSUFBSSxjQUFjdUUsWUFBVztNQUV2RDtNQUNBLElBQUlILE9BQUk7UUFDSixPQUFPLEtBQUs7TUFDaEI7TUFHQTtNQUNBLElBQUlqRCxPQUFJO1FBQ0osT0FBTyxLQUFLO01BQ2hCO01BR0E7TUFDQSxJQUFJa0QsVUFBTztRQUNQLE9BQU8sS0FBSztNQUNoQjtNQUlBLGFBQXVCO01BQ3ZCLElBQUkzQixZQUFTO1FBQ1QsT0FBTyxLQUFLO01BQ2hCO01BRUE4QixLQUFLSixNQUFjakQsTUFBYTtRQUM1QixLQUFLLFFBQVFpRDtRQUNiLEtBQUssUUFBUWpELEtBQUtzQjtRQUNsQixLQUFLLFdBQVd0QixLQUFLc0Q7UUFFckJMLFFBQVEsS0FBSyxXQUFXOUMsS0FBSzhDLElBQUk7UUFDakNqRCxLQUFLc0QsWUFBWSxLQUFLLGFBQWEsS0FBSyxXQUFXQyxPQUFPdkQsS0FBS3NELE9BQU87UUFDdEUsS0FBSyxXQUFXbkQsS0FBS0gsS0FBS3NCLE9BQU87UUFFakMsTUFBTWtDLFFBQVEsSUFBSUMsTUFBTSxVQUFVO1FBQ2xDLEtBQUtDLGNBQWNGLEtBQUs7TUFDNUI7T0FDSDtJQUFBRyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3dlYi9vdXQifQ==