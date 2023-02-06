System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@socket.io/component-emitter","3.1.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/@socket.io/component-emitter.3.1.0.js
var component_emitter_3_1_0_exports = {};
__export(component_emitter_3_1_0_exports, {
  Emitter: () => Emitter
});
module.exports = __toCommonJS(component_emitter_3_1_0_exports);

// node_modules/@socket.io/component-emitter/index.mjs
function Emitter(obj) {
  if (obj) return mixin(obj);
}
function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}
Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};
  (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn);
  return this;
};
Emitter.prototype.once = function (event, fn) {
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }
  on.fn = fn;
  this.on(event, on);
  return this;
};
Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }
  var callbacks = this._callbacks["$" + event];
  if (!callbacks) return this;
  if (1 == arguments.length) {
    delete this._callbacks["$" + event];
    return this;
  }
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  if (callbacks.length === 0) {
    delete this._callbacks["$" + event];
  }
  return this;
};
Emitter.prototype.emit = function (event) {
  this._callbacks = this._callbacks || {};
  var args = new Array(arguments.length - 1),
    callbacks = this._callbacks["$" + event];
  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }
  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }
  return this;
};
Emitter.prototype.emitReserved = Emitter.prototype.emit;
Emitter.prototype.listeners = function (event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks["$" + event] || [];
};
Emitter.prototype.hasListeners = function (event) {
  return !!this.listeners(event).length;
};
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9Ac29ja2V0LmlvL2NvbXBvbmVudC1lbWl0dGVyLjMuMS4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0Bzb2NrZXQuaW8vY29tcG9uZW50LWVtaXR0ZXIvaW5kZXgubWpzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiRW1pdHRlciIsIm1vZHVsZSIsIm9iaiIsIm1peGluIiwia2V5IiwicHJvdG90eXBlIiwib24iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJmbiIsIl9jYWxsYmFja3MiLCJwdXNoIiwib25jZSIsIm9mZiIsImFwcGx5IiwiYXJndW1lbnRzIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibGVuZ3RoIiwiY2FsbGJhY2tzIiwiY2IiLCJpIiwic3BsaWNlIiwiZW1pdCIsImFyZ3MiLCJBcnJheSIsInNsaWNlIiwibGVuIiwiZW1pdFJlc2VydmVkIiwibGlzdGVuZXJzIiwiaGFzTGlzdGVuZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztBQUFBO0FBQUFDOzs7QUNNTyxTQUFTRCxRQUFRRSxLQUFLO0VBQzNCLElBQUlBLEtBQUssT0FBT0MsTUFBTUQsR0FBRztBQUMzQjtBQVVBLFNBQVNDLE1BQU1ELEtBQUs7RUFDbEIsU0FBU0UsT0FBT0osUUFBUUssV0FBVztJQUNqQ0gsSUFBSUUsT0FBT0osUUFBUUssVUFBVUQ7RUFDL0I7RUFDQSxPQUFPRjtBQUNUO0FBV0FGLFFBQVFLLFVBQVVDLEtBQ2xCTixRQUFRSyxVQUFVRSxtQkFBbUIsVUFBU0MsT0FBT0MsSUFBRztFQUN0RCxLQUFLQyxhQUFhLEtBQUtBLGNBQWMsQ0FBQztFQUN0QyxDQUFDLEtBQUtBLFdBQVcsTUFBTUYsU0FBUyxLQUFLRSxXQUFXLE1BQU1GLFVBQVUsRUFBQyxFQUM5REcsS0FBS0YsRUFBRTtFQUNWLE9BQU87QUFDVDtBQVlBVCxRQUFRSyxVQUFVTyxPQUFPLFVBQVNKLE9BQU9DLElBQUc7RUFDMUMsU0FBU0gsS0FBSztJQUNaLEtBQUtPLElBQUlMLE9BQU9GLEVBQUU7SUFDbEJHLEdBQUdLLE1BQU0sTUFBTUMsU0FBUztFQUMxQjtFQUVBVCxHQUFHRyxLQUFLQTtFQUNSLEtBQUtILEdBQUdFLE9BQU9GLEVBQUU7RUFDakIsT0FBTztBQUNUO0FBWUFOLFFBQVFLLFVBQVVRLE1BQ2xCYixRQUFRSyxVQUFVVyxpQkFDbEJoQixRQUFRSyxVQUFVWSxxQkFDbEJqQixRQUFRSyxVQUFVYSxzQkFBc0IsVUFBU1YsT0FBT0MsSUFBRztFQUN6RCxLQUFLQyxhQUFhLEtBQUtBLGNBQWMsQ0FBQztFQUd0QyxJQUFJLEtBQUtLLFVBQVVJLFFBQVE7SUFDekIsS0FBS1QsYUFBYSxDQUFDO0lBQ25CLE9BQU87RUFDVDtFQUdBLElBQUlVLFlBQVksS0FBS1YsV0FBVyxNQUFNRjtFQUN0QyxJQUFJLENBQUNZLFdBQVcsT0FBTztFQUd2QixJQUFJLEtBQUtMLFVBQVVJLFFBQVE7SUFDekIsT0FBTyxLQUFLVCxXQUFXLE1BQU1GO0lBQzdCLE9BQU87RUFDVDtFQUdBLElBQUlhO0VBQ0osU0FBU0MsSUFBSSxHQUFHQSxJQUFJRixVQUFVRCxRQUFRRyxLQUFLO0lBQ3pDRCxLQUFLRCxVQUFVRTtJQUNmLElBQUlELE9BQU9aLE1BQU1ZLEdBQUdaLE9BQU9BLElBQUk7TUFDN0JXLFVBQVVHLE9BQU9ELEdBQUcsQ0FBQztNQUNyQjtJQUNGO0VBQ0Y7RUFJQSxJQUFJRixVQUFVRCxXQUFXLEdBQUc7SUFDMUIsT0FBTyxLQUFLVCxXQUFXLE1BQU1GO0VBQy9CO0VBRUEsT0FBTztBQUNUO0FBVUFSLFFBQVFLLFVBQVVtQixPQUFPLFVBQVNoQixPQUFNO0VBQ3RDLEtBQUtFLGFBQWEsS0FBS0EsY0FBYyxDQUFDO0VBRXRDLElBQUllLE9BQU8sSUFBSUMsTUFBTVgsVUFBVUksU0FBUyxDQUFDO0lBQ3JDQyxZQUFZLEtBQUtWLFdBQVcsTUFBTUY7RUFFdEMsU0FBU2MsSUFBSSxHQUFHQSxJQUFJUCxVQUFVSSxRQUFRRyxLQUFLO0lBQ3pDRyxLQUFLSCxJQUFJLEtBQUtQLFVBQVVPO0VBQzFCO0VBRUEsSUFBSUYsV0FBVztJQUNiQSxZQUFZQSxVQUFVTyxNQUFNLENBQUM7SUFDN0IsU0FBU0wsSUFBSSxHQUFHTSxNQUFNUixVQUFVRCxRQUFRRyxJQUFJTSxLQUFLLEVBQUVOLEdBQUc7TUFDcERGLFVBQVVFLEdBQUdSLE1BQU0sTUFBTVcsSUFBSTtJQUMvQjtFQUNGO0VBRUEsT0FBTztBQUNUO0FBR0F6QixRQUFRSyxVQUFVd0IsZUFBZTdCLFFBQVFLLFVBQVVtQjtBQVVuRHhCLFFBQVFLLFVBQVV5QixZQUFZLFVBQVN0QixPQUFNO0VBQzNDLEtBQUtFLGFBQWEsS0FBS0EsY0FBYyxDQUFDO0VBQ3RDLE9BQU8sS0FBS0EsV0FBVyxNQUFNRixVQUFVLEVBQUM7QUFDMUM7QUFVQVIsUUFBUUssVUFBVTBCLGVBQWUsVUFBU3ZCLE9BQU07RUFDOUMsT0FBTyxDQUFDLENBQUUsS0FBS3NCLFVBQVV0QixLQUFLLEVBQUVXO0FBQ2xDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvd2ViL291dCJ9