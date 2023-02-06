System.register(["@beyond-js/kernel@0.1.8/bundle", "@beyond-js/kernel@0.1.8/transversals", "@beyond-js/widgets@0.1.3/render"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, Transversal, __beyond_transversal, widgets, bundles;
  return {
    setters: [function (_beyondJsKernel018Bundle) {
      dependency_0 = _beyondJsKernel018Bundle;
    }, function (_beyondJsKernel018Transversals) {
      dependency_1 = _beyondJsKernel018Transversals;
    }, function (_beyondJsWidgets013Render) {
      dependency_2 = _beyondJsWidgets013Render;
    }],
    execute: function () {
      ({
        Transversal
      } = brequire('@beyond-js/kernel/transversals'));
      _export("__beyond_transversal", __beyond_transversal = new Transversal('start', ''));
      __beyond_transversal.dependencies.update([['@beyond-js/kernel/transversals', dependency_1], ['@beyond-js/widgets/render', dependency_2]]);

      /*************
      BUNDLE: WIDGET
      *************/
      ({
        widgets
      } = brequire('@beyond-js/widgets/render'));
      widgets.register([{
        "name": "jircdev-fullstack-workshop",
        "vspecifier": "@jircdev/web@0.0.1/workshops/fullstack",
        "is": "page",
        "route": "/workshops/fullstack"
      }, {
        "name": "home-page",
        "vspecifier": "@jircdev/web@0.0.1/home",
        "is": "page",
        "route": "/"
      }, {
        "name": "main-layout",
        "vspecifier": "@jircdev/web@0.0.1/layout/main",
        "is": "layout"
      }]);
      bundles = [];
      __beyond_transversal.initialise(bundles);
    }
  };
});