System.register(["@beyond-js/widgets@0.1.3/render", "@beyond-js/kernel@0.1.8/bundle", "@beyond-js/react-18-widgets@0.0.3/base", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets013Render) {
      dependency_0 = _beyondJsWidgets013Render;
    }, function (_beyondJsKernel018Bundle) {
      dependency_1 = _beyondJsKernel018Bundle;
    }, function (_beyondJsReact18Widgets003Base) {
      dependency_2 = _beyondJsReact18Widgets003Base;
    }, function (_react) {
      dependency_3 = _react;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/kernel", "0.1.8"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/backend", "0.1.4"], ["@beyond-js/react-18-widgets", "0.0.3"], ["socket.io-client", "4.5.4"], ["@jircdev/web", "0.0.1"], ["@jircdev/web", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@jircdev/web@0.0.1/layout/main"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/base', dependency_2], ['react', dependency_3]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "main-layout",
        "vspecifier": "@jircdev/web@0.0.1/layout/main",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@jircdev/web@0.0.1/layout/main');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2328700451,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            get Widget() {
              return _views.Layout;
            }
          }
          exports.Controller = Controller;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3160385668,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Layout = Layout;
          var React = require("react");
          function Layout() {
            return React.createElement("main", {
              className: "container"
            }, React.createElement("beyond-layout-children", null));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
      };
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBO1VBRU87VUFBVSxNQUNYQSxVQUFXLFNBQVFDLDJCQUFxQjtZQUMxQyxJQUFJQyxNQUFNO2NBQ04sT0FBT0MsYUFBTTtZQUNqQjs7VUFDSEM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUkQ7VUFXTSxTQUFVRCxNQUFNO1lBQ2xCLE9BQ0lFO2NBQU1DLFNBQVMsRUFBQztZQUFXLEdBQ3ZCRCxtREFBMEIsQ0FDdkI7VUFFZiIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJMYXlvdXQiLCJleHBvcnRzIiwiUmVhY3QiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NvbnRyb2xsZXIudHMiLCJ0cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdfQ==