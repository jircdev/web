System.register(["@beyond-js/widgets@0.1.3/render", "@beyond-js/kernel@0.1.8/bundle", "@beyond-js/kernel@0.1.8/styles", "@beyond-js/react-18-widgets@0.0.3/page", "react@18.2.0", "react@18.2.0/jsx-runtime"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets013Render) {
      dependency_0 = _beyondJsWidgets013Render;
    }, function (_beyondJsKernel018Bundle) {
      dependency_1 = _beyondJsKernel018Bundle;
    }, function (_beyondJsKernel018Styles) {
      dependency_2 = _beyondJsKernel018Styles;
    }, function (_beyondJsReact18Widgets003Page) {
      dependency_3 = _beyondJsReact18Widgets003Page;
    }, function (_react) {
      dependency_4 = _react;
    }, function (_react1820JsxRuntime) {
      dependency_5 = _react1820JsxRuntime;
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
          "vspecifier": "@jircdev/web@0.0.1/workshops/fullstack"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['react/jsx-runtime', dependency_5]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "jircdev-fullstack-workshop",
        "vspecifier": "@jircdev/web@0.0.1/workshops/fullstack",
        "is": "page",
        "route": "/workshops/fullstack"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@jircdev/web@0.0.1/workshops/fullstack');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3303386583,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            get Widget() {
              return _views.View;
            }
          }
          exports.Controller = Controller;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1180916814,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _index = require("./mdx/index.mdx");
          /*bundle*/
          function View() {
            return React.createElement(React.Fragment, null, React.createElement("h1", null, "Desarrollo FullStack ", React.createElement("br", null), " con Typescript"), React.createElement(_index.default, null));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/mdx/index.mdx
      *************************************/

      ims.set('./views/mdx/index.mdx', {
        hash: 1275544144,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              h3: "h3",
              p: "p",
              blockquote: "blockquote",
              ul: "ul",
              li: "li"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_components.h3, {
                children: "Que veremos"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El workShop es para ti si te identificas con algunos de estos casos de uso:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                  children: "¿Estás empezando en el mundo del desarrollo web y te sientes abrumado con todas las cosas que existen para aprender? Este workshop te ayudará a tener un panorama\r\nclaro de todo el ecosistema actual de programación web a partir del cúal podrás definir en que especializarte con una base que te permita tener una perspectiva\r\nlo mas completa posible."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.blockquote, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                  children: "Ya tienes cierto nivel de experiencia, pero sientes que hay muchos tópicos, terminos y librerias a tu alrededor que desconoces y no sabes\r\nsi conviene o no estudiar alguno. Este workshop tambien es para ti.\r\nSi quieres conocer una buena forma de manejar todo tu entorno integrado de desarrollo, tambien."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "Repaso general y detallado del estado actual del mundo Javascript."
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "Durante todo el proyecto:"
                  }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                    children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "Análisis y forma de abordar requerimientos."
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "Git"
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "Estándares."
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "Metodología Agíl."
                    }), "\n"]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "Comportamiento de las aplicaciones."
                  }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                    children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "Node.js"
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "FrontEnd"
                    }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: ["Frontends Monóliticos", "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                        children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                          children: "JSX Runtimes y libre de renderizado."
                        }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                          children: "Manejo de rutas multiplataforma"
                        }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                          children: "Web Components."
                        }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                          children: "Microfrontends"
                        }), "\n"]
                      }), "\n"]
                    }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: ["Backend", "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                        children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                          children: "Backends Monoliticas"
                        }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                          children: "Backends basados en microservicios"
                        }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                          children: "Protolos y tipos de conexiones, usos.\r\n' Bases de datos, tipos."
                        }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                          children: "TypeScript vs Javascript ¿Xq si alguno de los dos?"
                        }), "\n"]
                      }), "\n"]
                    }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: ["Universal:", "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                        children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                          children: "Javascript"
                        }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                          children: "Entornos de ejecución."
                        }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                          children: "Formas de distribuir el código"
                        }), "\n"]
                      }), "\n"]
                    }), "\n"]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "Desarrollo de la app"
                  }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                    children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "Tecnologías"
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "Bundles"
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "E stilos: conceptos, preprocesadores, estandares actuales."
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "Websockets: Integración de backend"
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "Creación de APIs cliente."
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "Creación de APIs Backend."
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "Procesadores"
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "Estados de una pantalla"
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "Estado general de un proyecto"
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "Datos en el cliente."
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "Soporte para desarrollo Móvil"
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "Soporte para desarrollo desktop."
                    }), "\n"]
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Que se necesita ?"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Conocimiento de lo que es un lenguaje de programación", "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                    children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "Conocimiento en Funciones, variables y estructuras de control."
                    }), "\n"]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Conocimiento de HTML."
                }), "\n"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFFTztVQUFVLE1BQ1hBLFVBQVcsU0FBUUMsK0JBQXlCO1lBQzlDLElBQUlDLE1BQU07Y0FDTixPQUFPQyxXQUFJO1lBQ2Y7O1VBQ0hDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JEO1VBQ0E7VUFFTztVQUFVLFNBQ1JELElBQUk7WUFDVCxPQUNJRSwwQ0FDSUEseURBQ3lCQSwrQkFBTSxvQkFDMUIsRUFDTEEsb0JBQUNDLGNBQVEsT0FBRyxDQUNiO1VBRVg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkNiSTs7MEJBRUo7Ozs0QkFFRTs7Ozs0QkFJQTs7Ozs7OEJBSUU7Ozs7OEJBQ0E7OztnQ0FFSTs7Z0NBQ0E7O2dDQUNBOztnQ0FDQTs7Ozs7OEJBRUo7OztnQ0FFSTs7Z0NBQ0E7O2lDQUNBOztvQ0FDSTs7b0NBQ0E7O29DQUNBOztvQ0FDQTs7OztpQ0FDSjs7b0NBQ0k7O29DQUNBOztvQ0FDQTs7b0NBRUE7Ozs7aUNBQ0o7O29DQUNJOztvQ0FDQTs7b0NBQ0E7Ozs7Ozs7OEJBRVI7OztnQ0FDSTs7Z0NBQ0E7O2dDQUNBOztnQ0FDQTs7Z0NBQ0E7O2dDQUNBOztnQ0FDQTs7Z0NBQ0E7O2dDQUNBOztnQ0FDQTs7Z0NBQ0E7O2dDQUNBOzs7OzswQkFFSjs7OzZCQUVBOztnQ0FDSTs7Ozs0QkFDSiIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiVmlldyIsImV4cG9ydHMiLCJSZWFjdCIsIldvcmtzaG9wIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ3aWRnZXQvdHMvY29udHJvbGxlci50cyIsIndpZGdldC90cy92aWV3cy9pbmRleC50c3giLCJ3aWRnZXQvdHMvdmlld3MvbWR4L3ZpZXdzXFxtZHhcXGluZGV4Lm1keCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXX0=