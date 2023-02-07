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
          "vspecifier": "@jircdev/web@0.0.1/roadmap",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['react/jsx-runtime', dependency_5]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "jircdev-roadmap",
        "vspecifier": "@jircdev/web@0.0.1/roadmap.widget",
        "is": "page",
        "route": "/roadmap"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@jircdev/web@0.0.1/roadmap.widget');
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
        hash: 1478029019,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          /*bundle*/
          function View() {
            return React.createElement("h2", null, "Hello i'm a page");
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/mdx/css.mdx
      ***********************************/

      ims.set('./views/mdx/css.mdx', {
        hash: 1874876588,
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
              h1: "h1",
              p: "p",
              ol: "ol",
              li: "li",
              ul: "ul",
              code: "code"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_components.h1, {
                children: "CSS"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Es un lenguaje de estilo utilizado para describir la apariencia de un documento HTML. Aquí están algunos de los conceptos básicos que se deben aprender sobre CSS:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "Selectores."
                  }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                    children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "de etiqueta."
                    }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: ["de clases, por ejemplo ", (0, _jsxRuntime.jsx)(_components.code, {
                        children: ".class-name"
                      }), " que equivale al atributo ", (0, _jsxRuntime.jsx)(_components.code, {
                        children: "class"
                      }), " en HTML o ", (0, _jsxRuntime.jsx)(_components.code, {
                        children: "className"
                      }), " desde JavaScript."]
                    }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: ["id: ", (0, _jsxRuntime.jsx)(_components.code, {
                        children: "#id-name"
                      }), "."]
                    }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: ["Selectores de atributos: ", (0, _jsxRuntime.jsx)(_components.code, {
                        children: "input[type=\"text\"]"
                      }), ".."]
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "Selector Universal \"*\"."
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "Selectores descendientes, hermanos"
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "Jerarquía."
                    }), "\n"]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "Propiedades y custom properties."
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "Unidades de medida."
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "Valores de color: Hexadecimal, HSL, rgb y rgba."
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "Box Model:"
                  }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                    children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "contenido."
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "Paddings"
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "Margins"
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "borders"
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "Opacidad."
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "Shadows."
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "Transiciones."
                    }), "\n"]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["Layout: Posicionamiento y flujo de elementos en la web. Uso de : ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "display"
                    }), ", ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "float"
                    }), ", ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "flexbox"
                    }), ", ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "grid"
                    }), ", entre otros."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "media-queries."
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "Flexbox en detalle."
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "Grid en detalle."
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "Tipografia."
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "Animaciones."
                  }), "\n"]
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

      /************************************
      INTERNAL MODULE: ./views/mdx/html.mdx
      ************************************/

      ims.set('./views/mdx/html.mdx', {
        hash: 820836554,
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
              h1: "h1",
              ol: "ol",
              li: "li",
              code: "code",
              ul: "ul"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_components.h1, {
                children: "Aprendizaje en HTML"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Etiquetas o Selectores."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Atributos."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Encabezados."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Enlaces."
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Imagenes: etiquetas ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "<img>"
                  }), ", ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "<picture>"
                  }), ", ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "<figcaption>"
                  }), ", ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "<figure>"
                  }), ".", "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                    children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: ["Selector ", (0, _jsxRuntime.jsx)(_components.code, {
                        children: "<picture>"
                      }), ".", "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                        children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                          children: ["Atributos ", (0, _jsxRuntime.jsx)(_components.code, {
                            children: "srcset"
                          }), ", ", (0, _jsxRuntime.jsx)(_components.code, {
                            children: "sizes"
                          }), "."]
                        }), "\n"]
                      }), "\n"]
                    }), "\n"]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Lista ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "<ul>"
                  }), ", ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "<ol>"
                  }), ", y ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "<li>"
                  }), "."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Tablas ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "<table>"
                  }), ", ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "<thead>"
                  }), ", ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "<tbody>"
                  }), ", ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "<th>"
                  }), ", ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "<td>"
                  }), " y ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "<tr>"
                  }), "."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Formularios.", "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                    children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "Tipos de inputs."
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "Textarea"
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "Select"
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "Atributos"
                    }), "\n"]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Iframes"
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Video: Etiqueta ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "<video>"
                  }), " y ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "sources"
                  }), ".", "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                    children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: ["atributos ", (0, _jsxRuntime.jsx)(_components.code, {
                        children: "src"
                      }), " y ", (0, _jsxRuntime.jsx)(_components.code, {
                        children: "controls"
                      })]
                    }), "\n"]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Componentes Web."
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

      /******************************************
      INTERNAL MODULE: ./views/mdx/javascript.mdx
      ******************************************/

      ims.set('./views/mdx/javascript.mdx', {
        hash: 438689772,
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
              h1: "h1",
              ul: "ul",
              li: "li",
              p: "p"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_components.h1, {
                children: "Aprendizaje en JavaScript"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "Entornos de ejecución"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "Paquetes Javascript"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "TypeScript y procesadores (Concepto)."
                  }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                    children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                        children: "Variables y tipos de datos."
                      }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                        children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                          children: "number: para números enteros o decimales."
                        }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                          children: "0 string: para cadenas de caracteres."
                        }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                          children: "boolean: para valores verdaderos o falsos."
                        }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                          children: "any: para valores de cualquier tipo."
                        }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                          children: "void: para indicar que una función no devuelve ningún valor."
                        }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                          children: "null y undefined: para indicar valores nulos o no definidos."
                        }), "\n"]
                      }), "\n"]
                    }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                        children: "Operadores."
                      }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                        children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                          children: "Matemáticos"
                        }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                          children: "Lógicos"
                        }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                          children: "De comparación."
                        }), "\n"]
                      }), "\n"]
                    }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                        children: "Funciones"
                      }), "\n"]
                    }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                        children: "Arreglos y Objetos"
                      }), "\n"]
                    }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                        children: "Eventos"
                      }), "\n"]
                    }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                        children: "Programación Orientada a objetos."
                      }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                        children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                          children: "Clases"
                        }), "\n"]
                      }), "\n"]
                    }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                        children: "Tipos de datos en Typescript\r\n-Arreglos: para almacenar colecciones de valores."
                      }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                        children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                          children: "Tuplas: para almacenar arrays de tamaño fijo con elementos de diferentes tipos."
                        }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                          children: "Enums: para crear tipos de datos personalizados con valores numéricos o de cadena fijos."
                        }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                          children: "Interfaces: para definir tipos de datos personalizados con propiedades y métodos específicos."
                        }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                          children: "Union Types: para especificar que una variable puede tener varios tipos diferentes."
                        }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                          children: "Type Aliases: para crear un alias de un tipo de datos existente."
                        }), "\n"]
                      }), "\n"]
                    }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                        children: "Decoradores"
                      }), "\n"]
                    }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                        children: "Generics"
                      }), "\n"]
                    }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                        children: "Namespaces"
                      }), "\n"]
                    }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                        children: "Métodos de propagación."
                      }), "\n"]
                    }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                        children: "Interfaces de contrato: para definir las formas de los objetos y asegurarse de que cumplan con un conjunto específico de reglas."
                      }), "\n"]
                    }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                        children: "Tipos de Inferencia:"
                      }), "\n"]
                    }), "\n"]
                  }), "\n"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBO1VBRU87VUFBVSxNQUNYQSxVQUFXLFNBQVFDLCtCQUF5QjtZQUM5QyxJQUFJQyxNQUFNO2NBQ04sT0FBT0MsV0FBSTtZQUNmOztVQUNIQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSRDtVQUVPO1VBQVUsU0FDUkQsSUFBSTtZQUNULE9BQ0lFLG1EQUF5QjtVQUVqQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkNQRTs7MEJBRUY7Ozs7OEJBRUc7OztnQ0FDRzs7aUNBQ0E7OzBCQUFvQzs7MEJBQWlDOzswQkFBc0I7O2lDQUMzRjs7MEJBQWM7O2lDQUNkOzswQkFBNkM7O2dDQUM3Qzs7Z0NBQ0E7O2dDQUNBOzs7Ozs4QkFDSDs7Ozs4QkFDQTs7Ozs4QkFDQTs7Ozs4QkFDQTs7O2dDQUNHOztnQ0FDQTs7Z0NBQ0E7O2dDQUNBOztnQ0FDQTs7Z0NBQ0E7O2dDQUNBOzs7OzsrQkFDSDs7d0JBQTBFOzt3QkFBUzs7d0JBQVc7O3dCQUFROzs7OzhCQUV0Rzs7Ozs4QkFDQTs7Ozs4QkFDQTs7Ozs4QkFDQzs7Ozs4QkFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQzdCRjs7OzRCQUVDOzs0QkFDQTs7NEJBQ0E7OzRCQUNBOzs2QkFDQTs7c0JBQTJCOztzQkFBYTs7c0JBQWdCOztzQkFBWTs7aUNBQ2pFOzswQkFBb0I7O3FDQUNoQjs7OEJBQWtCOzs4QkFBUzs7Ozs7OzZCQUNsQzs7c0JBQVk7O3NCQUFROztzQkFBVTs7NkJBQzlCOztzQkFBZ0I7O3NCQUFXOztzQkFBVzs7c0JBQVE7O3NCQUFROztzQkFBUzs7NkJBQy9EOztnQ0FDRzs7Z0NBQ0E7O2dDQUNBOztnQ0FDQTs7Ozs0QkFDSDs7NkJBQ0M7O3NCQUF5Qjs7c0JBQVk7O2lDQUNuQzs7MEJBQWU7Ozs7Ozs0QkFDakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJDbkJGOzs7OzhCQUVFOzs7OzhCQUNBOzs7OzhCQUNBOzs7O2tDQUVJOzs7b0NBRUk7O29DQUNBOztvQ0FDQTs7b0NBQ0E7O29DQUNBOztvQ0FDQTs7Ozs7a0NBRUo7OztvQ0FDSTs7b0NBQ0E7O29DQUNBOzs7OztrQ0FDSjs7OztrQ0FDQTs7OztrQ0FDQTs7OztrQ0FDQTs7O29DQUNJOzs7OztrQ0FDSjs7O29DQUVJOztvQ0FDQTs7b0NBQ0E7O29DQUNBOztvQ0FDQTs7Ozs7a0NBQ0o7Ozs7a0NBQ0E7Ozs7a0NBQ0E7Ozs7a0NBQ0E7Ozs7a0NBQ0E7Ozs7a0NBQ0EiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiUmVhY3QiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbIndpZGdldC90cy9jb250cm9sbGVyLnRzIiwid2lkZ2V0L3RzL3ZpZXdzL2luZGV4LnRzeCIsIndpZGdldC90cy92aWV3cy9tZHgvdmlld3NcXG1keFxcY3NzLm1keCIsIndpZGdldC90cy92aWV3cy9tZHgvdmlld3NcXG1keFxcaHRtbC5tZHgiLCJ3aWRnZXQvdHMvdmlld3MvbWR4L3ZpZXdzXFxtZHhcXGphdmFzY3JpcHQubWR4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=