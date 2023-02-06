System.register(["engine.io-parser@5.0.6","@socket.io/component-emitter@3.1.0","engine.io-client@6.2.3","socket.io-parser@4.2.2"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["engine.io-parser","5.0.6"],["@socket.io/component-emitter","3.1.0"],["engine.io-client","6.2.3"],["socket.io-client","4.5.4"],["socket.io-parser","4.2.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('engine.io-parser@5.0.6', dep), dep => dependencies.set('@socket.io/component-emitter@3.1.0', dep), dep => dependencies.set('engine.io-client@6.2.3', dep), dep => dependencies.set('socket.io-parser@4.2.2', dep)],
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

// .beyond/uimport/socket.io-client.4.5.4.js
var socket_io_client_4_5_4_exports = {};
__export(socket_io_client_4_5_4_exports, {
  Manager: () => Manager,
  Socket: () => Socket,
  connect: () => lookup,
  default: () => socket_io_client_4_5_4_default,
  io: () => lookup,
  protocol: () => import_socket4.protocol
});
module.exports = __toCommonJS(socket_io_client_4_5_4_exports);

// node_modules/socket.io-client/build/esm/url.js
var import_engine = require("engine.io-client@6.2.3");
function url(uri, path = "", loc) {
  let obj = uri;
  loc = loc || typeof location !== "undefined" && location;
  if (null == uri) uri = loc.protocol + "//" + loc.host;
  if (typeof uri === "string") {
    if ("/" === uri.charAt(0)) {
      if ("/" === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }
    if (!/^(https?|wss?):\/\//.test(uri)) {
      if ("undefined" !== typeof loc) {
        uri = loc.protocol + "//" + uri;
      } else {
        uri = "https://" + uri;
      }
    }
    obj = (0, import_engine.parse)(uri);
  }
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = "80";
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = "443";
    }
  }
  obj.path = obj.path || "/";
  const ipv6 = obj.host.indexOf(":") !== -1;
  const host = ipv6 ? "[" + obj.host + "]" : obj.host;
  obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
  obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
  return obj;
}

// node_modules/socket.io-client/build/esm/on.js
function on(obj, ev, fn) {
  obj.on(ev, fn);
  return function subDestroy() {
    obj.off(ev, fn);
  };
}

// node_modules/socket.io-client/build/esm/socket.js
var import_socket = require("socket.io-parser@4.2.2");
var import_component_emitter = require("@socket.io/component-emitter@3.1.0");
var RESERVED_EVENTS = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1
});
var Socket = class extends import_component_emitter.Emitter {
  constructor(io, nsp, opts) {
    super();
    this.connected = false;
    this.receiveBuffer = [];
    this.sendBuffer = [];
    this.ids = 0;
    this.acks = {};
    this.flags = {};
    this.io = io;
    this.nsp = nsp;
    if (opts && opts.auth) {
      this.auth = opts.auth;
    }
    if (this.io._autoConnect) this.open();
  }
  get disconnected() {
    return !this.connected;
  }
  subEvents() {
    if (this.subs) return;
    const io = this.io;
    this.subs = [on(io, "open", this.onopen.bind(this)), on(io, "packet", this.onpacket.bind(this)), on(io, "error", this.onerror.bind(this)), on(io, "close", this.onclose.bind(this))];
  }
  get active() {
    return !!this.subs;
  }
  connect() {
    if (this.connected) return this;
    this.subEvents();
    if (!this.io["_reconnecting"]) this.io.open();
    if ("open" === this.io._readyState) this.onopen();
    return this;
  }
  open() {
    return this.connect();
  }
  send(...args) {
    args.unshift("message");
    this.emit.apply(this, args);
    return this;
  }
  emit(ev, ...args) {
    if (RESERVED_EVENTS.hasOwnProperty(ev)) {
      throw new Error('"' + ev.toString() + '" is a reserved event name');
    }
    args.unshift(ev);
    const packet = {
      type: import_socket.PacketType.EVENT,
      data: args
    };
    packet.options = {};
    packet.options.compress = this.flags.compress !== false;
    if ("function" === typeof args[args.length - 1]) {
      const id = this.ids++;
      const ack = args.pop();
      this._registerAckCallback(id, ack);
      packet.id = id;
    }
    const isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
    const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);
    if (discardPacket) {} else if (this.connected) {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    } else {
      this.sendBuffer.push(packet);
    }
    this.flags = {};
    return this;
  }
  _registerAckCallback(id, ack) {
    const timeout = this.flags.timeout;
    if (timeout === void 0) {
      this.acks[id] = ack;
      return;
    }
    const timer = this.io.setTimeoutFn(() => {
      delete this.acks[id];
      for (let i = 0; i < this.sendBuffer.length; i++) {
        if (this.sendBuffer[i].id === id) {
          this.sendBuffer.splice(i, 1);
        }
      }
      ack.call(this, new Error("operation has timed out"));
    }, timeout);
    this.acks[id] = (...args) => {
      this.io.clearTimeoutFn(timer);
      ack.apply(this, [null, ...args]);
    };
  }
  packet(packet) {
    packet.nsp = this.nsp;
    this.io._packet(packet);
  }
  onopen() {
    if (typeof this.auth == "function") {
      this.auth(data => {
        this.packet({
          type: import_socket.PacketType.CONNECT,
          data
        });
      });
    } else {
      this.packet({
        type: import_socket.PacketType.CONNECT,
        data: this.auth
      });
    }
  }
  onerror(err) {
    if (!this.connected) {
      this.emitReserved("connect_error", err);
    }
  }
  onclose(reason, description) {
    this.connected = false;
    delete this.id;
    this.emitReserved("disconnect", reason, description);
  }
  onpacket(packet) {
    const sameNamespace = packet.nsp === this.nsp;
    if (!sameNamespace) return;
    switch (packet.type) {
      case import_socket.PacketType.CONNECT:
        if (packet.data && packet.data.sid) {
          const id = packet.data.sid;
          this.onconnect(id);
        } else {
          this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
        }
        break;
      case import_socket.PacketType.EVENT:
      case import_socket.PacketType.BINARY_EVENT:
        this.onevent(packet);
        break;
      case import_socket.PacketType.ACK:
      case import_socket.PacketType.BINARY_ACK:
        this.onack(packet);
        break;
      case import_socket.PacketType.DISCONNECT:
        this.ondisconnect();
        break;
      case import_socket.PacketType.CONNECT_ERROR:
        this.destroy();
        const err = new Error(packet.data.message);
        err.data = packet.data.data;
        this.emitReserved("connect_error", err);
        break;
    }
  }
  onevent(packet) {
    const args = packet.data || [];
    if (null != packet.id) {
      args.push(this.ack(packet.id));
    }
    if (this.connected) {
      this.emitEvent(args);
    } else {
      this.receiveBuffer.push(Object.freeze(args));
    }
  }
  emitEvent(args) {
    if (this._anyListeners && this._anyListeners.length) {
      const listeners = this._anyListeners.slice();
      for (const listener of listeners) {
        listener.apply(this, args);
      }
    }
    super.emit.apply(this, args);
  }
  ack(id) {
    const self = this;
    let sent = false;
    return function (...args) {
      if (sent) return;
      sent = true;
      self.packet({
        type: import_socket.PacketType.ACK,
        id,
        data: args
      });
    };
  }
  onack(packet) {
    const ack = this.acks[packet.id];
    if ("function" === typeof ack) {
      ack.apply(this, packet.data);
      delete this.acks[packet.id];
    } else {}
  }
  onconnect(id) {
    this.id = id;
    this.connected = true;
    this.emitBuffered();
    this.emitReserved("connect");
  }
  emitBuffered() {
    this.receiveBuffer.forEach(args => this.emitEvent(args));
    this.receiveBuffer = [];
    this.sendBuffer.forEach(packet => {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    });
    this.sendBuffer = [];
  }
  ondisconnect() {
    this.destroy();
    this.onclose("io server disconnect");
  }
  destroy() {
    if (this.subs) {
      this.subs.forEach(subDestroy => subDestroy());
      this.subs = void 0;
    }
    this.io["_destroy"](this);
  }
  disconnect() {
    if (this.connected) {
      this.packet({
        type: import_socket.PacketType.DISCONNECT
      });
    }
    this.destroy();
    if (this.connected) {
      this.onclose("io client disconnect");
    }
    return this;
  }
  close() {
    return this.disconnect();
  }
  compress(compress) {
    this.flags.compress = compress;
    return this;
  }
  get volatile() {
    this.flags.volatile = true;
    return this;
  }
  timeout(timeout) {
    this.flags.timeout = timeout;
    return this;
  }
  onAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.push(listener);
    return this;
  }
  prependAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.unshift(listener);
    return this;
  }
  offAny(listener) {
    if (!this._anyListeners) {
      return this;
    }
    if (listener) {
      const listeners = this._anyListeners;
      for (let i = 0; i < listeners.length; i++) {
        if (listener === listeners[i]) {
          listeners.splice(i, 1);
          return this;
        }
      }
    } else {
      this._anyListeners = [];
    }
    return this;
  }
  listenersAny() {
    return this._anyListeners || [];
  }
  onAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.push(listener);
    return this;
  }
  prependAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.unshift(listener);
    return this;
  }
  offAnyOutgoing(listener) {
    if (!this._anyOutgoingListeners) {
      return this;
    }
    if (listener) {
      const listeners = this._anyOutgoingListeners;
      for (let i = 0; i < listeners.length; i++) {
        if (listener === listeners[i]) {
          listeners.splice(i, 1);
          return this;
        }
      }
    } else {
      this._anyOutgoingListeners = [];
    }
    return this;
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  notifyOutgoingListeners(packet) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const listeners = this._anyOutgoingListeners.slice();
      for (const listener of listeners) {
        listener.apply(this, packet.data);
      }
    }
  }
};

// node_modules/socket.io-client/build/esm/contrib/backo2.js
function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 1e4;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}
Backoff.prototype.duration = function () {
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand = Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};
Backoff.prototype.reset = function () {
  this.attempts = 0;
};
Backoff.prototype.setMin = function (min) {
  this.ms = min;
};
Backoff.prototype.setMax = function (max) {
  this.max = max;
};
Backoff.prototype.setJitter = function (jitter) {
  this.jitter = jitter;
};

// node_modules/socket.io-client/build/esm/manager.js
var import_engine2 = require("engine.io-client@6.2.3");
var parser = __toESM(require("socket.io-parser@4.2.2"), 0);
var import_component_emitter2 = require("@socket.io/component-emitter@3.1.0");
var Manager = class extends import_component_emitter2.Emitter {
  constructor(uri, opts) {
    var _a;
    super();
    this.nsps = {};
    this.subs = [];
    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = void 0;
    }
    opts = opts || {};
    opts.path = opts.path || "/socket.io";
    this.opts = opts;
    (0, import_engine2.installTimerFunctions)(this, opts);
    this.reconnection(opts.reconnection !== false);
    this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
    this.reconnectionDelay(opts.reconnectionDelay || 1e3);
    this.reconnectionDelayMax(opts.reconnectionDelayMax || 5e3);
    this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
    this.backoff = new Backoff({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    });
    this.timeout(null == opts.timeout ? 2e4 : opts.timeout);
    this._readyState = "closed";
    this.uri = uri;
    const _parser = opts.parser || parser;
    this.encoder = new _parser.Encoder();
    this.decoder = new _parser.Decoder();
    this._autoConnect = opts.autoConnect !== false;
    if (this._autoConnect) this.open();
  }
  reconnection(v) {
    if (!arguments.length) return this._reconnection;
    this._reconnection = !!v;
    return this;
  }
  reconnectionAttempts(v) {
    if (v === void 0) return this._reconnectionAttempts;
    this._reconnectionAttempts = v;
    return this;
  }
  reconnectionDelay(v) {
    var _a;
    if (v === void 0) return this._reconnectionDelay;
    this._reconnectionDelay = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
    return this;
  }
  randomizationFactor(v) {
    var _a;
    if (v === void 0) return this._randomizationFactor;
    this._randomizationFactor = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
    return this;
  }
  reconnectionDelayMax(v) {
    var _a;
    if (v === void 0) return this._reconnectionDelayMax;
    this._reconnectionDelayMax = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
    return this;
  }
  timeout(v) {
    if (!arguments.length) return this._timeout;
    this._timeout = v;
    return this;
  }
  maybeReconnectOnOpen() {
    if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
      this.reconnect();
    }
  }
  open(fn) {
    if (~this._readyState.indexOf("open")) return this;
    this.engine = new import_engine2.Socket(this.uri, this.opts);
    const socket = this.engine;
    const self = this;
    this._readyState = "opening";
    this.skipReconnect = false;
    const openSubDestroy = on(socket, "open", function () {
      self.onopen();
      fn && fn();
    });
    const errorSub = on(socket, "error", err => {
      self.cleanup();
      self._readyState = "closed";
      this.emitReserved("error", err);
      if (fn) {
        fn(err);
      } else {
        self.maybeReconnectOnOpen();
      }
    });
    if (false !== this._timeout) {
      const timeout = this._timeout;
      if (timeout === 0) {
        openSubDestroy();
      }
      const timer = this.setTimeoutFn(() => {
        openSubDestroy();
        socket.close();
        socket.emit("error", new Error("timeout"));
      }, timeout);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(function subDestroy() {
        clearTimeout(timer);
      });
    }
    this.subs.push(openSubDestroy);
    this.subs.push(errorSub);
    return this;
  }
  connect(fn) {
    return this.open(fn);
  }
  onopen() {
    this.cleanup();
    this._readyState = "open";
    this.emitReserved("open");
    const socket = this.engine;
    this.subs.push(on(socket, "ping", this.onping.bind(this)), on(socket, "data", this.ondata.bind(this)), on(socket, "error", this.onerror.bind(this)), on(socket, "close", this.onclose.bind(this)), on(this.decoder, "decoded", this.ondecoded.bind(this)));
  }
  onping() {
    this.emitReserved("ping");
  }
  ondata(data) {
    try {
      this.decoder.add(data);
    } catch (e) {
      this.onclose("parse error", e);
    }
  }
  ondecoded(packet) {
    (0, import_engine2.nextTick)(() => {
      this.emitReserved("packet", packet);
    }, this.setTimeoutFn);
  }
  onerror(err) {
    this.emitReserved("error", err);
  }
  socket(nsp, opts) {
    let socket = this.nsps[nsp];
    if (!socket) {
      socket = new Socket(this, nsp, opts);
      this.nsps[nsp] = socket;
    }
    return socket;
  }
  _destroy(socket) {
    const nsps = Object.keys(this.nsps);
    for (const nsp of nsps) {
      const socket2 = this.nsps[nsp];
      if (socket2.active) {
        return;
      }
    }
    this._close();
  }
  _packet(packet) {
    const encodedPackets = this.encoder.encode(packet);
    for (let i = 0; i < encodedPackets.length; i++) {
      this.engine.write(encodedPackets[i], packet.options);
    }
  }
  cleanup() {
    this.subs.forEach(subDestroy => subDestroy());
    this.subs.length = 0;
    this.decoder.destroy();
  }
  _close() {
    this.skipReconnect = true;
    this._reconnecting = false;
    this.onclose("forced close");
    if (this.engine) this.engine.close();
  }
  disconnect() {
    return this._close();
  }
  onclose(reason, description) {
    this.cleanup();
    this.backoff.reset();
    this._readyState = "closed";
    this.emitReserved("close", reason, description);
    if (this._reconnection && !this.skipReconnect) {
      this.reconnect();
    }
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this;
    const self = this;
    if (this.backoff.attempts >= this._reconnectionAttempts) {
      this.backoff.reset();
      this.emitReserved("reconnect_failed");
      this._reconnecting = false;
    } else {
      const delay = this.backoff.duration();
      this._reconnecting = true;
      const timer = this.setTimeoutFn(() => {
        if (self.skipReconnect) return;
        this.emitReserved("reconnect_attempt", self.backoff.attempts);
        if (self.skipReconnect) return;
        self.open(err => {
          if (err) {
            self._reconnecting = false;
            self.reconnect();
            this.emitReserved("reconnect_error", err);
          } else {
            self.onreconnect();
          }
        });
      }, delay);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(function subDestroy() {
        clearTimeout(timer);
      });
    }
  }
  onreconnect() {
    const attempt = this.backoff.attempts;
    this._reconnecting = false;
    this.backoff.reset();
    this.emitReserved("reconnect", attempt);
  }
};

// node_modules/socket.io-client/build/esm/index.js
var import_socket4 = require("socket.io-parser@4.2.2");
var cache = {};
function lookup(uri, opts) {
  if (typeof uri === "object") {
    opts = uri;
    uri = void 0;
  }
  opts = opts || {};
  const parsed = url(uri, opts.path || "/socket.io");
  const source = parsed.source;
  const id = parsed.id;
  const path = parsed.path;
  const sameNamespace = cache[id] && path in cache[id]["nsps"];
  const newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
  let io;
  if (newConnection) {
    io = new Manager(source, opts);
  } else {
    if (!cache[id]) {
      cache[id] = new Manager(source, opts);
    }
    io = cache[id];
  }
  if (parsed.query && !opts.query) {
    opts.query = parsed.queryKey;
  }
  return io.socket(parsed.path, opts);
}
Object.assign(lookup, {
  Manager,
  Socket,
  io: lookup,
  connect: lookup
});

// .beyond/uimport/socket.io-client.4.5.4.js
var socket_io_client_4_5_4_default = lookup;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9zb2NrZXQuaW8tY2xpZW50LjQuNS40LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvYnVpbGQvZXNtL3VybC5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL2VzbS9vbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL2VzbS9zb2NrZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9lc20vY29udHJpYi9iYWNrbzIuanMiLCIuLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9lc20vbWFuYWdlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL2VzbS9pbmRleC5qcyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsIk1hbmFnZXIiLCJTb2NrZXQiLCJjb25uZWN0IiwiZGVmYXVsdCIsImlvIiwicHJvdG9jb2wiLCJtb2R1bGUiLCJyZXF1aXJlIiwidXJsIiwidXJpIiwicGF0aCIsImxvYyIsIm9iaiIsImxvY2F0aW9uIiwiaG9zdCIsImNoYXJBdCIsInRlc3QiLCJpbXBvcnRfZW5naW5lIiwicG9ydCIsImlwdjYiLCJpbmRleE9mIiwiaWQiLCJocmVmIiwib24iLCJldiIsImZuIiwic3ViRGVzdHJveSIsIm9mZiIsIlJFU0VSVkVEX0VWRU5UUyIsIk9iamVjdCIsImZyZWV6ZSIsImNvbm5lY3RfZXJyb3IiLCJkaXNjb25uZWN0IiwiZGlzY29ubmVjdGluZyIsIm5ld0xpc3RlbmVyIiwicmVtb3ZlTGlzdGVuZXIiLCJpbXBvcnRfY29tcG9uZW50X2VtaXR0ZXIiLCJjb25zdHJ1Y3RvciIsIm5zcCIsIm9wdHMiLCJjb25uZWN0ZWQiLCJyZWNlaXZlQnVmZmVyIiwic2VuZEJ1ZmZlciIsImlkcyIsImFja3MiLCJmbGFncyIsImF1dGgiLCJfYXV0b0Nvbm5lY3QiLCJvcGVuIiwiZGlzY29ubmVjdGVkIiwic3ViRXZlbnRzIiwic3VicyIsIm9ub3BlbiIsImJpbmQiLCJvbnBhY2tldCIsIm9uZXJyb3IiLCJvbmNsb3NlIiwiYWN0aXZlIiwiX3JlYWR5U3RhdGUiLCJzZW5kIiwiYXJncyIsInVuc2hpZnQiLCJlbWl0IiwiYXBwbHkiLCJoYXNPd25Qcm9wZXJ0eSIsIkVycm9yIiwidG9TdHJpbmciLCJwYWNrZXQiLCJ0eXBlIiwiaW1wb3J0X3NvY2tldCIsIkVWRU5UIiwiZGF0YSIsIm9wdGlvbnMiLCJjb21wcmVzcyIsImxlbmd0aCIsImFjayIsInBvcCIsIl9yZWdpc3RlckFja0NhbGxiYWNrIiwiaXNUcmFuc3BvcnRXcml0YWJsZSIsImVuZ2luZSIsInRyYW5zcG9ydCIsIndyaXRhYmxlIiwiZGlzY2FyZFBhY2tldCIsInZvbGF0aWxlIiwibm90aWZ5T3V0Z29pbmdMaXN0ZW5lcnMiLCJwdXNoIiwidGltZW91dCIsInRpbWVyIiwic2V0VGltZW91dEZuIiwiaSIsInNwbGljZSIsImNhbGwiLCJjbGVhclRpbWVvdXRGbiIsIl9wYWNrZXQiLCJDT05ORUNUIiwiZXJyIiwiZW1pdFJlc2VydmVkIiwicmVhc29uIiwiZGVzY3JpcHRpb24iLCJzYW1lTmFtZXNwYWNlIiwic2lkIiwib25jb25uZWN0IiwiQklOQVJZX0VWRU5UIiwib25ldmVudCIsIkFDSyIsIkJJTkFSWV9BQ0siLCJvbmFjayIsIkRJU0NPTk5FQ1QiLCJvbmRpc2Nvbm5lY3QiLCJDT05ORUNUX0VSUk9SIiwiZGVzdHJveSIsIm1lc3NhZ2UiLCJlbWl0RXZlbnQiLCJfYW55TGlzdGVuZXJzIiwibGlzdGVuZXJzIiwic2xpY2UiLCJsaXN0ZW5lciIsInNlbGYiLCJzZW50IiwiZW1pdEJ1ZmZlcmVkIiwiZm9yRWFjaCIsImNsb3NlIiwib25BbnkiLCJwcmVwZW5kQW55Iiwib2ZmQW55IiwibGlzdGVuZXJzQW55Iiwib25BbnlPdXRnb2luZyIsIl9hbnlPdXRnb2luZ0xpc3RlbmVycyIsInByZXBlbmRBbnlPdXRnb2luZyIsIm9mZkFueU91dGdvaW5nIiwibGlzdGVuZXJzQW55T3V0Z29pbmciLCJCYWNrb2ZmIiwibXMiLCJtaW4iLCJtYXgiLCJmYWN0b3IiLCJqaXR0ZXIiLCJhdHRlbXB0cyIsInByb3RvdHlwZSIsImR1cmF0aW9uIiwiTWF0aCIsInBvdyIsInJhbmQiLCJyYW5kb20iLCJkZXZpYXRpb24iLCJmbG9vciIsInJlc2V0Iiwic2V0TWluIiwic2V0TWF4Iiwic2V0Sml0dGVyIiwiX190b0VTTSIsImltcG9ydF9jb21wb25lbnRfZW1pdHRlcjIiLCJfYSIsIm5zcHMiLCJyZWNvbm5lY3Rpb24iLCJyZWNvbm5lY3Rpb25BdHRlbXB0cyIsIkluZmluaXR5IiwicmVjb25uZWN0aW9uRGVsYXkiLCJyZWNvbm5lY3Rpb25EZWxheU1heCIsInJhbmRvbWl6YXRpb25GYWN0b3IiLCJiYWNrb2ZmIiwiX3BhcnNlciIsInBhcnNlciIsImVuY29kZXIiLCJFbmNvZGVyIiwiZGVjb2RlciIsIkRlY29kZXIiLCJhdXRvQ29ubmVjdCIsInYiLCJhcmd1bWVudHMiLCJfcmVjb25uZWN0aW9uIiwiX3JlY29ubmVjdGlvbkF0dGVtcHRzIiwiX3JlY29ubmVjdGlvbkRlbGF5IiwiX3JhbmRvbWl6YXRpb25GYWN0b3IiLCJfcmVjb25uZWN0aW9uRGVsYXlNYXgiLCJfdGltZW91dCIsIm1heWJlUmVjb25uZWN0T25PcGVuIiwiX3JlY29ubmVjdGluZyIsInJlY29ubmVjdCIsImltcG9ydF9lbmdpbmUyIiwic29ja2V0Iiwic2tpcFJlY29ubmVjdCIsIm9wZW5TdWJEZXN0cm95IiwiZXJyb3JTdWIiLCJjbGVhbnVwIiwiYXV0b1VucmVmIiwidW5yZWYiLCJjbGVhclRpbWVvdXQiLCJvbnBpbmciLCJvbmRhdGEiLCJvbmRlY29kZWQiLCJhZGQiLCJlIiwiX2Rlc3Ryb3kiLCJrZXlzIiwiX2Nsb3NlIiwiZW5jb2RlZFBhY2tldHMiLCJlbmNvZGUiLCJ3cml0ZSIsImRlbGF5Iiwib25yZWNvbm5lY3QiLCJhdHRlbXB0IiwiY2FjaGUiLCJsb29rdXAiLCJwYXJzZWQiLCJzb3VyY2UiLCJuZXdDb25uZWN0aW9uIiwiZm9yY2VOZXciLCJtdWx0aXBsZXgiLCJxdWVyeSIsInF1ZXJ5S2V5IiwiYXNzaWduIiwic29ja2V0X2lvX2NsaWVudF80XzVfNF9kZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztBQUFBO0FBQUFDOzs7QUNBQSxvQkFBc0JDO0FBVWYsU0FBU0MsSUFBSUMsS0FBS0MsT0FBTyxJQUFJQyxLQUFLO0VBQ3JDLElBQUlDLE1BQU1IO0VBRVZFLE1BQU1BLE9BQVEsT0FBT0UsYUFBYSxlQUFlQTtFQUNqRCxJQUFJLFFBQVFKLEtBQ1JBLE1BQU1FLElBQUlOLFdBQVcsT0FBT00sSUFBSUc7RUFFcEMsSUFBSSxPQUFPTCxRQUFRLFVBQVU7SUFDekIsSUFBSSxRQUFRQSxJQUFJTSxPQUFPLENBQUMsR0FBRztNQUN2QixJQUFJLFFBQVFOLElBQUlNLE9BQU8sQ0FBQyxHQUFHO1FBQ3ZCTixNQUFNRSxJQUFJTixXQUFXSTtNQUN6QixPQUNLO1FBQ0RBLE1BQU1FLElBQUlHLE9BQU9MO01BQ3JCO0lBQ0o7SUFDQSxJQUFJLENBQUMsc0JBQXNCTyxLQUFLUCxHQUFHLEdBQUc7TUFDbEMsSUFBSSxnQkFBZ0IsT0FBT0UsS0FBSztRQUM1QkYsTUFBTUUsSUFBSU4sV0FBVyxPQUFPSTtNQUNoQyxPQUNLO1FBQ0RBLE1BQU0sYUFBYUE7TUFDdkI7SUFDSjtJQUVBRyxVQUFNSyxxQkFBTVIsR0FBRztFQUNuQjtFQUVBLElBQUksQ0FBQ0csSUFBSU0sTUFBTTtJQUNYLElBQUksY0FBY0YsS0FBS0osSUFBSVAsUUFBUSxHQUFHO01BQ2xDTyxJQUFJTSxPQUFPO0lBQ2YsV0FDUyxlQUFlRixLQUFLSixJQUFJUCxRQUFRLEdBQUc7TUFDeENPLElBQUlNLE9BQU87SUFDZjtFQUNKO0VBQ0FO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QUNyQjVELEtBQUs2RCxXQUFVO1lBQ2YsS0FBS2xGLGFBQWEsbUJBQW1CRCxHQUFHO1VBQzVDLE9BQ0s7WUFDRHNCLEtBQUttRixhQUFZO1VBQ3JCO1FBQ0osQ0FBQztNQUNMLEdBQUdELEtBQUs7TUFDUixJQUFJLEtBQUtoSyxLQUFLa0osV0FBVztRQUNyQmxHLE1BQU1tRyxPQUFNO01BQ2hCO01BQ0EsS0FBS3ZJLEtBQUtrQyxLQUFLLFNBQVMzRCxhQUFhO1FBQ2pDaUssYUFBYXBHLEtBQUs7TUFDdEIsQ0FBQztJQUNMO0VBQ0o7RUFNQWlILGNBQWM7SUFDVixNQUFNQyxVQUFVLEtBQUt6QyxRQUFRdkI7SUFDN0IsS0FBS3dDLGdCQUFnQjtJQUNyQixLQUFLakIsUUFBUWQsT0FBTTtJQUNuQixLQUFLbEQsYUFBYSxhQUFheUcsT0FBTztFQUMxQztBQUNKOzs7QUNuVEEscUJBQXlCbE07QUE1Q3pCLElBQU1tTSxRQUFRLENBQUM7QUFDZixTQUFTQyxPQUFPbE0sS0FBSzhCLE1BQU07RUFDdkIsSUFBSSxPQUFPOUIsUUFBUSxVQUFVO0lBQ3pCOEIsT0FBTzlCO0lBQ1BBLE1BQU07RUFDVjtFQUNBOEIsT0FBT0EsUUFBUSxDQUFDO0VBQ2hCLE1BQU1xSyxTQUFTcE0sSUFBSUMsS0FBSzhCLEtBQUs3QixRQUFRLFlBQVk7RUFDakQsTUFBTW1NLFNBQVNELE9BQU9DO0VBQ3RCLE1BQU14TCxLQUFLdUwsT0FBT3ZMO0VBQ2xCLE1BQU1YLE9BQU9rTSxPQUFPbE07RUFDcEIsTUFBTXlGLGdCQUFnQnVHLE1BQU1yTCxPQUFPWCxRQUFRZ00sTUFBTXJMLElBQUk7RUFDckQsTUFBTXlMLGdCQUFnQnZLLEtBQUt3SyxZQUN2QnhLLEtBQUssMkJBQ0wsVUFBVUEsS0FBS3lLLGFBQ2Y3RztFQUNKLElBQUkvRjtFQUNKLElBQUkwTSxlQUFlO0lBQ2YxTSxLQUFLLElBQUlKLFFBQVE2TSxRQUFRdEssSUFBSTtFQUNqQyxPQUNLO0lBQ0QsSUFBSSxDQUFDbUssTUFBTXJMLEtBQUs7TUFDWnFMLE1BQU1yTCxNQUFNLElBQUlyQixRQUFRNk0sUUFBUXRLLElBQUk7SUFDeEM7SUFDQW5DLEtBQUtzTSxNQUFNckw7RUFDZjtFQUNBLElBQUl1TCxPQUFPSyxTQUFTLENBQUMxSyxLQUFLMEssT0FBTztJQUM3QjFLLEtBQUswSyxRQUFRTCxPQUFPTTtFQUN4QjtFQUNBLE9BQU85TSxHQUFHZ0wsT0FBT3dCLE9BQU9sTSxNQUFNNkIsSUFBSTtBQUN0QztBQUdBVixPQUFPc0wsT0FBT1IsUUFBUTtFQUNsQjNNO0VBQ0FDO0VBQ0FHLElBQUl1TTtFQUNKek0sU0FBU3lNO0FBQ2IsQ0FBQzs7O0FOekNELElBQU9TLGlDQUFRVCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3dlYi9vdXQifQ==