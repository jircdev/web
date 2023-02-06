System.register(["engine.io-parser@5.0.6","@socket.io/component-emitter@3.1.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["engine.io-parser","5.0.6"],["@socket.io/component-emitter","3.1.0"],["engine.io-client","6.2.3"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('engine.io-parser@5.0.6', dep), dep => dependencies.set('@socket.io/component-emitter@3.1.0', dep)],
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

// .beyond/uimport/engine.io-client.6.2.3.js
var engine_io_client_6_2_3_exports = {};
__export(engine_io_client_6_2_3_exports, {
  Socket: () => Socket,
  Transport: () => Transport,
  installTimerFunctions: () => installTimerFunctions,
  nextTick: () => nextTick,
  parse: () => parse,
  protocol: () => protocol2,
  transports: () => transports
});
module.exports = __toCommonJS(engine_io_client_6_2_3_exports);

// node_modules/engine.io-client/build/esm/globalThis.browser.js
var globalThisShim = (() => {
  if (typeof self !== "undefined") {
    return self;
  } else if (typeof window !== "undefined") {
    return window;
  } else {
    return Function("return this")();
  }
})();

// node_modules/engine.io-client/build/esm/util.js
function pick(obj, ...attr) {
  return attr.reduce((acc, k) => {
    if (obj.hasOwnProperty(k)) {
      acc[k] = obj[k];
    }
    return acc;
  }, {});
}
var NATIVE_SET_TIMEOUT = setTimeout;
var NATIVE_CLEAR_TIMEOUT = clearTimeout;
function installTimerFunctions(obj, opts) {
  if (opts.useNativeTimers) {
    obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThisShim);
    obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThisShim);
  } else {
    obj.setTimeoutFn = setTimeout.bind(globalThisShim);
    obj.clearTimeoutFn = clearTimeout.bind(globalThisShim);
  }
}
var BASE64_OVERHEAD = 1.33;
function byteLength(obj) {
  if (typeof obj === "string") {
    return utf8Length(obj);
  }
  return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
}
function utf8Length(str) {
  let c = 0,
    length2 = 0;
  for (let i2 = 0, l = str.length; i2 < l; i2++) {
    c = str.charCodeAt(i2);
    if (c < 128) {
      length2 += 1;
    } else if (c < 2048) {
      length2 += 2;
    } else if (c < 55296 || c >= 57344) {
      length2 += 3;
    } else {
      i2++;
      length2 += 4;
    }
  }
  return length2;
}

// node_modules/engine.io-client/build/esm/transport.js
var import_engine = require("engine.io-parser@5.0.6");
var import_component_emitter = require("@socket.io/component-emitter@3.1.0");
var TransportError = class extends Error {
  constructor(reason, description, context) {
    super(reason);
    this.description = description;
    this.context = context;
    this.type = "TransportError";
  }
};
var Transport = class extends import_component_emitter.Emitter {
  constructor(opts) {
    super();
    this.writable = false;
    installTimerFunctions(this, opts);
    this.opts = opts;
    this.query = opts.query;
    this.readyState = "";
    this.socket = opts.socket;
  }
  onError(reason, description, context) {
    super.emitReserved("error", new TransportError(reason, description, context));
    return this;
  }
  open() {
    if ("closed" === this.readyState || "" === this.readyState) {
      this.readyState = "opening";
      this.doOpen();
    }
    return this;
  }
  close() {
    if ("opening" === this.readyState || "open" === this.readyState) {
      this.doClose();
      this.onClose();
    }
    return this;
  }
  send(packets) {
    if ("open" === this.readyState) {
      this.write(packets);
    } else {}
  }
  onOpen() {
    this.readyState = "open";
    this.writable = true;
    super.emitReserved("open");
  }
  onData(data) {
    const packet = (0, import_engine.decodePacket)(data, this.socket.binaryType);
    this.onPacket(packet);
  }
  onPacket(packet) {
    super.emitReserved("packet", packet);
  }
  onClose(details) {
    this.readyState = "closed";
    super.emitReserved("close", details);
  }
};

// node_modules/engine.io-client/build/esm/contrib/yeast.js
var alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
  length = 64,
  map = {};
var seed = 0,
  i = 0,
  prev;
function encode(num) {
  let encoded = "";
  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);
  return encoded;
}
function decode(str) {
  let decoded = 0;
  for (i = 0; i < str.length; i++) {
    decoded = decoded * length + map[str.charAt(i)];
  }
  return decoded;
}
function yeast() {
  const now = encode(+new Date());
  if (now !== prev) return seed = 0, prev = now;
  return now + "." + encode(seed++);
}
for (; i < length; i++) map[alphabet[i]] = i;

// node_modules/engine.io-client/build/esm/contrib/parseqs.js
function encode2(obj) {
  let str = "";
  for (let i2 in obj) {
    if (obj.hasOwnProperty(i2)) {
      if (str.length) str += "&";
      str += encodeURIComponent(i2) + "=" + encodeURIComponent(obj[i2]);
    }
  }
  return str;
}
function decode2(qs) {
  let qry = {};
  let pairs = qs.split("&");
  for (let i2 = 0, l = pairs.length; i2 < l; i2++) {
    let pair = pairs[i2].split("=");
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
}

// node_modules/engine.io-client/build/esm/contrib/has-cors.js
var value = false;
try {
  value = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();
} catch (err) {}
var hasCORS = value;

// node_modules/engine.io-client/build/esm/transports/xmlhttprequest.browser.js
function XHR(opts) {
  const xdomain = opts.xdomain;
  try {
    if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) {}
  if (!xdomain) {
    try {
      return new globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (e) {}
  }
}

// node_modules/engine.io-client/build/esm/transports/polling.js
var import_engine2 = require("engine.io-parser@5.0.6");
var import_component_emitter2 = require("@socket.io/component-emitter@3.1.0");
function empty() {}
var hasXHR2 = function () {
  const xhr = new XHR({
    xdomain: false
  });
  return null != xhr.responseType;
}();
var Polling = class extends Transport {
  constructor(opts) {
    super(opts);
    this.polling = false;
    if (typeof location !== "undefined") {
      const isSSL = "https:" === location.protocol;
      let port = location.port;
      if (!port) {
        port = isSSL ? "443" : "80";
      }
      this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
      this.xs = opts.secure !== isSSL;
    }
    const forceBase64 = opts && opts.forceBase64;
    this.supportsBinary = hasXHR2 && !forceBase64;
  }
  get name() {
    return "polling";
  }
  doOpen() {
    this.poll();
  }
  pause(onPause) {
    this.readyState = "pausing";
    const pause = () => {
      this.readyState = "paused";
      onPause();
    };
    if (this.polling || !this.writable) {
      let total = 0;
      if (this.polling) {
        total++;
        this.once("pollComplete", function () {
          --total || pause();
        });
      }
      if (!this.writable) {
        total++;
        this.once("drain", function () {
          --total || pause();
        });
      }
    } else {
      pause();
    }
  }
  poll() {
    this.polling = true;
    this.doPoll();
    this.emitReserved("poll");
  }
  onData(data) {
    const callback = packet => {
      if ("opening" === this.readyState && packet.type === "open") {
        this.onOpen();
      }
      if ("close" === packet.type) {
        this.onClose({
          description: "transport closed by the server"
        });
        return false;
      }
      this.onPacket(packet);
    };
    (0, import_engine2.decodePayload)(data, this.socket.binaryType).forEach(callback);
    if ("closed" !== this.readyState) {
      this.polling = false;
      this.emitReserved("pollComplete");
      if ("open" === this.readyState) {
        this.poll();
      } else {}
    }
  }
  doClose() {
    const close = () => {
      this.write([{
        type: "close"
      }]);
    };
    if ("open" === this.readyState) {
      close();
    } else {
      this.once("open", close);
    }
  }
  write(packets) {
    this.writable = false;
    (0, import_engine2.encodePayload)(packets, data => {
      this.doWrite(data, () => {
        this.writable = true;
        this.emitReserved("drain");
      });
    });
  }
  uri() {
    let query = this.query || {};
    const schema = this.opts.secure ? "https" : "http";
    let port = "";
    if (false !== this.opts.timestampRequests) {
      query[this.opts.timestampParam] = yeast();
    }
    if (!this.supportsBinary && !query.sid) {
      query.b64 = 1;
    }
    if (this.opts.port && ("https" === schema && Number(this.opts.port) !== 443 || "http" === schema && Number(this.opts.port) !== 80)) {
      port = ":" + this.opts.port;
    }
    const encodedQuery = encode2(query);
    const ipv6 = this.opts.hostname.indexOf(":") !== -1;
    return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
  }
  request(opts = {}) {
    Object.assign(opts, {
      xd: this.xd,
      xs: this.xs
    }, this.opts);
    return new Request(this.uri(), opts);
  }
  doWrite(data, fn) {
    const req = this.request({
      method: "POST",
      data
    });
    req.on("success", fn);
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr post error", xhrStatus, context);
    });
  }
  doPoll() {
    const req = this.request();
    req.on("data", this.onData.bind(this));
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr poll error", xhrStatus, context);
    });
    this.pollXhr = req;
  }
};
var Request = class extends import_component_emitter2.Emitter {
  constructor(uri, opts) {
    super();
    installTimerFunctions(this, opts);
    this.opts = opts;
    this.method = opts.method || "GET";
    this.uri = uri;
    this.async = false !== opts.async;
    this.data = void 0 !== opts.data ? opts.data : null;
    this.create();
  }
  create() {
    const opts = pick(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    opts.xdomain = !!this.opts.xd;
    opts.xscheme = !!this.opts.xs;
    const xhr = this.xhr = new XHR(opts);
    try {
      xhr.open(this.method, this.uri, this.async);
      try {
        if (this.opts.extraHeaders) {
          xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
          for (let i2 in this.opts.extraHeaders) {
            if (this.opts.extraHeaders.hasOwnProperty(i2)) {
              xhr.setRequestHeader(i2, this.opts.extraHeaders[i2]);
            }
          }
        }
      } catch (e) {}
      if ("POST" === this.method) {
        try {
          xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch (e) {}
      }
      try {
        xhr.setRequestHeader("Accept", "*/*");
      } catch (e) {}
      if ("withCredentials" in xhr) {
        xhr.withCredentials = this.opts.withCredentials;
      }
      if (this.opts.requestTimeout) {
        xhr.timeout = this.opts.requestTimeout;
      }
      xhr.onreadystatechange = () => {
        if (4 !== xhr.readyState) return;
        if (200 === xhr.status || 1223 === xhr.status) {
          this.onLoad();
        } else {
          this.setTimeoutFn(() => {
            this.onError(typeof xhr.status === "number" ? xhr.status : 0);
          }, 0);
        }
      };
      xhr.send(this.data);
    } catch (e) {
      this.setTimeoutFn(() => {
        this.onError(e);
      }, 0);
      return;
    }
    if (typeof document !== "undefined") {
      this.index = Request.requestsCount++;
      Request.requests[this.index] = this;
    }
  }
  onError(err) {
    this.emitReserved("error", err, this.xhr);
    this.cleanup(true);
  }
  cleanup(fromError) {
    if ("undefined" === typeof this.xhr || null === this.xhr) {
      return;
    }
    this.xhr.onreadystatechange = empty;
    if (fromError) {
      try {
        this.xhr.abort();
      } catch (e) {}
    }
    if (typeof document !== "undefined") {
      delete Request.requests[this.index];
    }
    this.xhr = null;
  }
  onLoad() {
    const data = this.xhr.responseText;
    if (data !== null) {
      this.emitReserved("data", data);
      this.emitReserved("success");
      this.cleanup();
    }
  }
  abort() {
    this.cleanup();
  }
};
Request.requestsCount = 0;
Request.requests = {};
if (typeof document !== "undefined") {
  if (typeof attachEvent === "function") {
    attachEvent("onunload", unloadHandler);
  } else if (typeof addEventListener === "function") {
    const terminationEvent = "onpagehide" in globalThisShim ? "pagehide" : "unload";
    addEventListener(terminationEvent, unloadHandler, false);
  }
}
function unloadHandler() {
  for (let i2 in Request.requests) {
    if (Request.requests.hasOwnProperty(i2)) {
      Request.requests[i2].abort();
    }
  }
}

// node_modules/engine.io-client/build/esm/transports/websocket-constructor.browser.js
var nextTick = (() => {
  const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
  if (isPromiseAvailable) {
    return cb => Promise.resolve().then(cb);
  } else {
    return (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
  }
})();
var WebSocket = globalThisShim.WebSocket || globalThisShim.MozWebSocket;
var usingBrowserWebSocket = true;
var defaultBinaryType = "arraybuffer";

// node_modules/engine.io-client/build/esm/transports/websocket.js
var import_engine3 = require("engine.io-parser@5.0.6");
var isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
var WS = class extends Transport {
  constructor(opts) {
    super(opts);
    this.supportsBinary = !opts.forceBase64;
  }
  get name() {
    return "websocket";
  }
  doOpen() {
    if (!this.check()) {
      return;
    }
    const uri = this.uri();
    const protocols = this.opts.protocols;
    const opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    if (this.opts.extraHeaders) {
      opts.headers = this.opts.extraHeaders;
    }
    try {
      this.ws = usingBrowserWebSocket && !isReactNative ? protocols ? new WebSocket(uri, protocols) : new WebSocket(uri) : new WebSocket(uri, protocols, opts);
    } catch (err) {
      return this.emitReserved("error", err);
    }
    this.ws.binaryType = this.socket.binaryType || defaultBinaryType;
    this.addEventListeners();
  }
  addEventListeners() {
    this.ws.onopen = () => {
      if (this.opts.autoUnref) {
        this.ws._socket.unref();
      }
      this.onOpen();
    };
    this.ws.onclose = closeEvent => this.onClose({
      description: "websocket connection closed",
      context: closeEvent
    });
    this.ws.onmessage = ev => this.onData(ev.data);
    this.ws.onerror = e => this.onError("websocket error", e);
  }
  write(packets) {
    this.writable = false;
    for (let i2 = 0; i2 < packets.length; i2++) {
      const packet = packets[i2];
      const lastPacket = i2 === packets.length - 1;
      (0, import_engine3.encodePacket)(packet, this.supportsBinary, data => {
        const opts = {};
        if (!usingBrowserWebSocket) {
          if (packet.options) {
            opts.compress = packet.options.compress;
          }
          if (this.opts.perMessageDeflate) {
            const len = "string" === typeof data ? Buffer.byteLength(data) : data.length;
            if (len < this.opts.perMessageDeflate.threshold) {
              opts.compress = false;
            }
          }
        }
        try {
          if (usingBrowserWebSocket) {
            this.ws.send(data);
          } else {
            this.ws.send(data, opts);
          }
        } catch (e) {}
        if (lastPacket) {
          nextTick(() => {
            this.writable = true;
            this.emitReserved("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }
  doClose() {
    if (typeof this.ws !== "undefined") {
      this.ws.close();
      this.ws = null;
    }
  }
  uri() {
    let query = this.query || {};
    const schema = this.opts.secure ? "wss" : "ws";
    let port = "";
    if (this.opts.port && ("wss" === schema && Number(this.opts.port) !== 443 || "ws" === schema && Number(this.opts.port) !== 80)) {
      port = ":" + this.opts.port;
    }
    if (this.opts.timestampRequests) {
      query[this.opts.timestampParam] = yeast();
    }
    if (!this.supportsBinary) {
      query.b64 = 1;
    }
    const encodedQuery = encode2(query);
    const ipv6 = this.opts.hostname.indexOf(":") !== -1;
    return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
  }
  check() {
    return !!WebSocket;
  }
};

// node_modules/engine.io-client/build/esm/transports/index.js
var transports = {
  websocket: WS,
  polling: Polling
};

// node_modules/engine.io-client/build/esm/contrib/parseuri.js
var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
var parts = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
function parse(str) {
  const src = str,
    b = str.indexOf("["),
    e = str.indexOf("]");
  if (b != -1 && e != -1) {
    str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ";") + str.substring(e, str.length);
  }
  let m = re.exec(str || ""),
    uri = {},
    i2 = 14;
  while (i2--) {
    uri[parts[i2]] = m[i2] || "";
  }
  if (b != -1 && e != -1) {
    uri.source = src;
    uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ":");
    uri.authority = uri.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
    uri.ipv6uri = true;
  }
  uri.pathNames = pathNames(uri, uri["path"]);
  uri.queryKey = queryKey(uri, uri["query"]);
  return uri;
}
function pathNames(obj, path) {
  const regx = /\/{2,9}/g,
    names = path.replace(regx, "/").split("/");
  if (path.slice(0, 1) == "/" || path.length === 0) {
    names.splice(0, 1);
  }
  if (path.slice(-1) == "/") {
    names.splice(names.length - 1, 1);
  }
  return names;
}
function queryKey(uri, query) {
  const data = {};
  query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
    if ($1) {
      data[$1] = $2;
    }
  });
  return data;
}

// node_modules/engine.io-client/build/esm/socket.js
var import_component_emitter3 = require("@socket.io/component-emitter@3.1.0");
var import_engine4 = require("engine.io-parser@5.0.6");
var Socket = class extends import_component_emitter3.Emitter {
  constructor(uri, opts = {}) {
    super();
    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = null;
    }
    if (uri) {
      uri = parse(uri);
      opts.hostname = uri.host;
      opts.secure = uri.protocol === "https" || uri.protocol === "wss";
      opts.port = uri.port;
      if (uri.query) opts.query = uri.query;
    } else if (opts.host) {
      opts.hostname = parse(opts.host).host;
    }
    installTimerFunctions(this, opts);
    this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
    if (opts.hostname && !opts.port) {
      opts.port = this.secure ? "443" : "80";
    }
    this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
    this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
    this.transports = opts.transports || ["polling", "websocket"];
    this.readyState = "";
    this.writeBuffer = [];
    this.prevBufferLen = 0;
    this.opts = Object.assign({
      path: "/engine.io",
      agent: false,
      withCredentials: false,
      upgrade: true,
      timestampParam: "t",
      rememberUpgrade: false,
      rejectUnauthorized: true,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: true
    }, opts);
    this.opts.path = this.opts.path.replace(/\/$/, "") + "/";
    if (typeof this.opts.query === "string") {
      this.opts.query = decode2(this.opts.query);
    }
    this.id = null;
    this.upgrades = null;
    this.pingInterval = null;
    this.pingTimeout = null;
    this.pingTimeoutTimer = null;
    if (typeof addEventListener === "function") {
      if (this.opts.closeOnBeforeunload) {
        this.beforeunloadEventListener = () => {
          if (this.transport) {
            this.transport.removeAllListeners();
            this.transport.close();
          }
        };
        addEventListener("beforeunload", this.beforeunloadEventListener, false);
      }
      if (this.hostname !== "localhost") {
        this.offlineEventListener = () => {
          this.onClose("transport close", {
            description: "network connection lost"
          });
        };
        addEventListener("offline", this.offlineEventListener, false);
      }
    }
    this.open();
  }
  createTransport(name) {
    const query = Object.assign({}, this.opts.query);
    query.EIO = import_engine4.protocol;
    query.transport = name;
    if (this.id) query.sid = this.id;
    const opts = Object.assign({}, this.opts.transportOptions[name], this.opts, {
      query,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    });
    return new transports[name](opts);
  }
  open() {
    let transport;
    if (this.opts.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) {
      transport = "websocket";
    } else if (0 === this.transports.length) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    } else {
      transport = this.transports[0];
    }
    this.readyState = "opening";
    try {
      transport = this.createTransport(transport);
    } catch (e) {
      this.transports.shift();
      this.open();
      return;
    }
    transport.open();
    this.setTransport(transport);
  }
  setTransport(transport) {
    if (this.transport) {
      this.transport.removeAllListeners();
    }
    this.transport = transport;
    transport.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", reason => this.onClose("transport close", reason));
  }
  probe(name) {
    let transport = this.createTransport(name);
    let failed = false;
    Socket.priorWebsocketSuccess = false;
    const onTransportOpen = () => {
      if (failed) return;
      transport.send([{
        type: "ping",
        data: "probe"
      }]);
      transport.once("packet", msg => {
        if (failed) return;
        if ("pong" === msg.type && "probe" === msg.data) {
          this.upgrading = true;
          this.emitReserved("upgrading", transport);
          if (!transport) return;
          Socket.priorWebsocketSuccess = "websocket" === transport.name;
          this.transport.pause(() => {
            if (failed) return;
            if ("closed" === this.readyState) return;
            cleanup();
            this.setTransport(transport);
            transport.send([{
              type: "upgrade"
            }]);
            this.emitReserved("upgrade", transport);
            transport = null;
            this.upgrading = false;
            this.flush();
          });
        } else {
          const err = new Error("probe error");
          err.transport = transport.name;
          this.emitReserved("upgradeError", err);
        }
      });
    };
    function freezeTransport() {
      if (failed) return;
      failed = true;
      cleanup();
      transport.close();
      transport = null;
    }
    const onerror = err => {
      const error = new Error("probe error: " + err);
      error.transport = transport.name;
      freezeTransport();
      this.emitReserved("upgradeError", error);
    };
    function onTransportClose() {
      onerror("transport closed");
    }
    function onclose() {
      onerror("socket closed");
    }
    function onupgrade(to) {
      if (transport && to.name !== transport.name) {
        freezeTransport();
      }
    }
    const cleanup = () => {
      transport.removeListener("open", onTransportOpen);
      transport.removeListener("error", onerror);
      transport.removeListener("close", onTransportClose);
      this.off("close", onclose);
      this.off("upgrading", onupgrade);
    };
    transport.once("open", onTransportOpen);
    transport.once("error", onerror);
    transport.once("close", onTransportClose);
    this.once("close", onclose);
    this.once("upgrading", onupgrade);
    transport.open();
  }
  onOpen() {
    this.readyState = "open";
    Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
    this.emitReserved("open");
    this.flush();
    if ("open" === this.readyState && this.opts.upgrade && this.transport.pause) {
      let i2 = 0;
      const l = this.upgrades.length;
      for (; i2 < l; i2++) {
        this.probe(this.upgrades[i2]);
      }
    }
  }
  onPacket(packet) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      this.emitReserved("packet", packet);
      this.emitReserved("heartbeat");
      switch (packet.type) {
        case "open":
          this.onHandshake(JSON.parse(packet.data));
          break;
        case "ping":
          this.resetPingTimeout();
          this.sendPacket("pong");
          this.emitReserved("ping");
          this.emitReserved("pong");
          break;
        case "error":
          const err = new Error("server error");
          err.code = packet.data;
          this.onError(err);
          break;
        case "message":
          this.emitReserved("data", packet.data);
          this.emitReserved("message", packet.data);
          break;
      }
    } else {}
  }
  onHandshake(data) {
    this.emitReserved("handshake", data);
    this.id = data.sid;
    this.transport.query.sid = data.sid;
    this.upgrades = this.filterUpgrades(data.upgrades);
    this.pingInterval = data.pingInterval;
    this.pingTimeout = data.pingTimeout;
    this.maxPayload = data.maxPayload;
    this.onOpen();
    if ("closed" === this.readyState) return;
    this.resetPingTimeout();
  }
  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer);
    this.pingTimeoutTimer = this.setTimeoutFn(() => {
      this.onClose("ping timeout");
    }, this.pingInterval + this.pingTimeout);
    if (this.opts.autoUnref) {
      this.pingTimeoutTimer.unref();
    }
  }
  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen);
    this.prevBufferLen = 0;
    if (0 === this.writeBuffer.length) {
      this.emitReserved("drain");
    } else {
      this.flush();
    }
  }
  flush() {
    if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const packets = this.getWritablePackets();
      this.transport.send(packets);
      this.prevBufferLen = packets.length;
      this.emitReserved("flush");
    }
  }
  getWritablePackets() {
    const shouldCheckPayloadSize = this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
    if (!shouldCheckPayloadSize) {
      return this.writeBuffer;
    }
    let payloadSize = 1;
    for (let i2 = 0; i2 < this.writeBuffer.length; i2++) {
      const data = this.writeBuffer[i2].data;
      if (data) {
        payloadSize += byteLength(data);
      }
      if (i2 > 0 && payloadSize > this.maxPayload) {
        return this.writeBuffer.slice(0, i2);
      }
      payloadSize += 2;
    }
    return this.writeBuffer;
  }
  write(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }
  send(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }
  sendPacket(type, data, options, fn) {
    if ("function" === typeof data) {
      fn = data;
      data = void 0;
    }
    if ("function" === typeof options) {
      fn = options;
      options = null;
    }
    if ("closing" === this.readyState || "closed" === this.readyState) {
      return;
    }
    options = options || {};
    options.compress = false !== options.compress;
    const packet = {
      type,
      data,
      options
    };
    this.emitReserved("packetCreate", packet);
    this.writeBuffer.push(packet);
    if (fn) this.once("flush", fn);
    this.flush();
  }
  close() {
    const close = () => {
      this.onClose("forced close");
      this.transport.close();
    };
    const cleanupAndClose = () => {
      this.off("upgrade", cleanupAndClose);
      this.off("upgradeError", cleanupAndClose);
      close();
    };
    const waitForUpgrade = () => {
      this.once("upgrade", cleanupAndClose);
      this.once("upgradeError", cleanupAndClose);
    };
    if ("opening" === this.readyState || "open" === this.readyState) {
      this.readyState = "closing";
      if (this.writeBuffer.length) {
        this.once("drain", () => {
          if (this.upgrading) {
            waitForUpgrade();
          } else {
            close();
          }
        });
      } else if (this.upgrading) {
        waitForUpgrade();
      } else {
        close();
      }
    }
    return this;
  }
  onError(err) {
    Socket.priorWebsocketSuccess = false;
    this.emitReserved("error", err);
    this.onClose("transport error", err);
  }
  onClose(reason, description) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      this.clearTimeoutFn(this.pingTimeoutTimer);
      this.transport.removeAllListeners("close");
      this.transport.close();
      this.transport.removeAllListeners();
      if (typeof removeEventListener === "function") {
        removeEventListener("beforeunload", this.beforeunloadEventListener, false);
        removeEventListener("offline", this.offlineEventListener, false);
      }
      this.readyState = "closed";
      this.id = null;
      this.emitReserved("close", reason, description);
      this.writeBuffer = [];
      this.prevBufferLen = 0;
    }
  }
  filterUpgrades(upgrades) {
    const filteredUpgrades = [];
    let i2 = 0;
    const j = upgrades.length;
    for (; i2 < j; i2++) {
      if (~this.transports.indexOf(upgrades[i2])) filteredUpgrades.push(upgrades[i2]);
    }
    return filteredUpgrades;
  }
};
Socket.protocol = import_engine4.protocol;

// node_modules/engine.io-client/build/esm/index.js
var protocol2 = Socket.protocol;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9lbmdpbmUuaW8tY2xpZW50LjYuMi4zLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2dsb2JhbFRoaXMuYnJvd3Nlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS91dGlsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3RyYW5zcG9ydC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS9jb250cmliL3llYXN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2NvbnRyaWIvcGFyc2Vxcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS9jb250cmliL2hhcy1jb3JzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3RyYW5zcG9ydHMveG1saHR0cHJlcXVlc3QuYnJvd3Nlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnRzL3BvbGxpbmcuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vdHJhbnNwb3J0cy93ZWJzb2NrZXQtY29uc3RydWN0b3IuYnJvd3Nlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnRzL3dlYnNvY2tldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnRzL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2NvbnRyaWIvcGFyc2V1cmkuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vc29ja2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2luZGV4LmpzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiU29ja2V0IiwiVHJhbnNwb3J0IiwiaW5zdGFsbFRpbWVyRnVuY3Rpb25zIiwibmV4dFRpY2siLCJwYXJzZSIsInByb3RvY29sIiwidHJhbnNwb3J0cyIsIm1vZHVsZSIsImdsb2JhbFRoaXNTaGltIiwic2VsZiIsIndpbmRvdyIsIkZ1bmN0aW9uIiwicGljayIsIm9iaiIsImF0dHIiLCJyZWR1Y2UiLCJhY2MiLCJrIiwiaGFzT3duUHJvcGVydHkiLCJOQVRJVkVfU0VUX1RJTUVPVVQiLCJzZXRUaW1lb3V0IiwiTkFUSVZFX0NMRUFSX1RJTUVPVVQiLCJjbGVhclRpbWVvdXQiLCJvcHRzIiwidXNlTmF0aXZlVGltZXJzIiwic2V0VGltZW91dEZuIiwiYmluZCIsImNsZWFyVGltZW91dEZuIiwiQkFTRTY0X09WRVJIRUFEIiwiYnl0ZUxlbmd0aCIsInV0ZjhMZW5ndGgiLCJNYXRoIiwiY2VpbCIsInNpemUiLCJzdHIiLCJjIiwibGVuZ3RoIiwiaSIsImwiLCJjaGFyQ29kZUF0IiwicmVxdWlyZSIsIlRyYW5zcG9ydEVycm9yIiwiRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJlYXNvbiIsImRlc2NyaXB0aW9uIiwiY29udGV4dCIsInR5cGUiLCJpbXBvcnRfY29tcG9uZW50X2VtaXR0ZXIiLCJ3cml0YWJsZSIsInF1ZXJ5IiwicmVhZHlTdGF0ZSIsInNvY2tldCIsIm9uRXJyb3IiLCJlbWl0UmVzZXJ2ZWQiLCJvcGVuIiwiZG9PcGVuIiwiY2xvc2UiLCJkb0Nsb3NlIiwib25DbG9zZSIsInNlbmQiLCJwYWNrZXRzIiwid3JpdGUiLCJvbk9wZW4iLCJvbkRhdGEiLCJkYXRhIiwicGFja2V0IiwiaW1wb3J0X2VuZ2luZSIsImJpbmFyeVR5cGUiLCJvblBhY2tldCIsImRldGFpbHMiLCJhbHBoYWJldCIsInNwbGl0IiwibWFwIiwic2VlZCIsInByZXYiLCJlbmNvZGUiLCJudW0iLCJlbmNvZGVkIiwiZmxvb3IiLCJkZWNvZGUiLCJkZWNvZGVkIiwiY2hhckF0IiwieWVhc3QiLCJub3ciLCJEYXRlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicXMiLCJxcnkiLCJwYWlycyIsInBhaXIiLCJkZWNvZGVVUklDb21wb25lbnQiLCJ2YWx1ZSIsIlhNTEh0dHBSZXF1ZXN0IiwiZXJyIiwiaGFzQ09SUyIsIlhIUiIsInhkb21haW4iLCJlIiwiY29uY2F0Iiwiam9pbiIsImVtcHR5IiwiaGFzWEhSMiIsInhociIsInJlc3BvbnNlVHlwZSIsIlBvbGxpbmciLCJwb2xsaW5nIiwibG9jYXRpb24iLCJpc1NTTCIsInBvcnQiLCJ4ZCIsImhvc3RuYW1lIiwieHMiLCJzZWN1cmUiLCJmb3JjZUJhc2U2NCIsInN1cHBvcnRzQmluYXJ5IiwibmFtZSIsInBvbGwiLCJwYXVzZSIsIm9uUGF1c2UiLCJ0b3RhbCIsIm9uY2UiLCJkb1BvbGwiLCJjYWxsYmFjayIsImZvckVhY2giLCJkb1dyaXRlIiwidXJpIiwic2NoZW1hIiwidGltZXN0YW1wUmVxdWVzdHMiLCJ0aW1lc3RhbXBQYXJhbSIsInNpZCIsImI2NCIsIk51bWJlciIsImVuY29kZWRRdWVyeSIsImlwdjYiLCJpbmRleE9mIiwicGF0aCIsInJlcXVlc3QiLCJPYmplY3QiLCJhc3NpZ24iLCJSZXF1ZXN0IiwiZm4iLCJyZXEiLCJtZXRob2QiLCJvbiIsInhoclN0YXR1cyIsInBvbGxYaHIiLCJpbXBvcnRfY29tcG9uZW50X2VtaXR0ZXIyIiwiYXN5bmMiLCJjcmVhdGUiLCJ4c2NoZW1lIiwiZXh0cmFIZWFkZXJzIiwic2V0RGlzYWJsZUhlYWRlckNoZWNrIiwic2V0UmVxdWVzdEhlYWRlciIsIndpdGhDcmVkZW50aWFscyIsInJlcXVlc3RUaW1lb3V0IiwidGltZW91dCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInN0YXR1cyIsIm9uTG9hZCIsImRvY3VtZW50IiwiaW5kZXgiLCJyZXF1ZXN0c0NvdW50IiwicmVxdWVzdHMiLCJjbGVhbnVwIiwiZnJvbUVycm9yIiwiYWJvcnQiLCJyZXNwb25zZVRleHQiLCJhdHRhY2hFdmVudCIsInVubG9hZEhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwidGVybWluYXRpb25FdmVudCIsImlzUHJvbWlzZUF2YWlsYWJsZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2IiLCJ0aGVuIiwiV2ViU29ja2V0IiwiTW96V2ViU29ja2V0IiwidXNpbmdCcm93c2VyV2ViU29ja2V0IiwiZGVmYXVsdEJpbmFyeVR5cGUiLCJpc1JlYWN0TmF0aXZlIiwibmF2aWdhdG9yIiwicHJvZHVjdCIsInRvTG93ZXJDYXNlIiwiV1MiLCJjaGVjayIsInByb3RvY29scyIsImhlYWRlcnMiLCJ3cyIsImFkZEV2ZW50TGlzdGVuZXJzIiwib25vcGVuIiwiYXV0b1VucmVmIiwiX3NvY2tldCIsInVucmVmIiwib25jbG9zZSIsImNsb3NlRXZlbnQiLCJvbm1lc3NhZ2UiLCJldiIsIm9uZXJyb3IiLCJsYXN0UGFja2V0Iiwib3B0aW9ucyIsImNvbXByZXNzIiwicGVyTWVzc2FnZURlZmxhdGUiLCJsZW4iLCJCdWZmZXIiLCJ0aHJlc2hvbGQiLCJ3ZWJzb2NrZXQiLCJyZSIsInBhcnRzIiwic3JjIiwiYiIsInN1YnN0cmluZyIsInJlcGxhY2UiLCJtIiwiZXhlYyIsInNvdXJjZSIsImhvc3QiLCJhdXRob3JpdHkiLCJpcHY2dXJpIiwicGF0aE5hbWVzIiwicXVlcnlLZXkiLCJyZWd4IiwibmFtZXMiLCJzbGljZSIsInNwbGljZSIsIiQwIiwiJDEiLCIkMiIsImltcG9ydF9jb21wb25lbnRfZW1pdHRlcjMiLCJ3cml0ZUJ1ZmZlciIsInByZXZCdWZmZXJMZW4iLCJhZ2VudCIsInVwZ3JhZGUiLCJyZW1lbWJlclVwZ3JhZGUiLCJyZWplY3RVbmF1dGhvcml6ZWQiLCJ0cmFuc3BvcnRPcHRpb25zIiwiY2xvc2VPbkJlZm9yZXVubG9hZCIsImlkIiwidXBncmFkZXMiLCJwaW5nSW50ZXJ2YWwiLCJwaW5nVGltZW91dCIsInBpbmdUaW1lb3V0VGltZXIiLCJiZWZvcmV1bmxvYWRFdmVudExpc3RlbmVyIiwidHJhbnNwb3J0IiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwib2ZmbGluZUV2ZW50TGlzdGVuZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJFSU8iLCJpbXBvcnRfZW5naW5lNCIsInByaW9yV2Vic29ja2V0U3VjY2VzcyIsInNoaWZ0Iiwic2V0VHJhbnNwb3J0Iiwib25EcmFpbiIsInByb2JlIiwiZmFpbGVkIiwib25UcmFuc3BvcnRPcGVuIiwibXNnIiwidXBncmFkaW5nIiwiZmx1c2giLCJmcmVlemVUcmFuc3BvcnQiLCJlcnJvciIsIm9uVHJhbnNwb3J0Q2xvc2UiLCJvbnVwZ3JhZGUiLCJ0byIsInJlbW92ZUxpc3RlbmVyIiwib2ZmIiwib25IYW5kc2hha2UiLCJKU09OIiwicmVzZXRQaW5nVGltZW91dCIsInNlbmRQYWNrZXQiLCJjb2RlIiwiZmlsdGVyVXBncmFkZXMiLCJtYXhQYXlsb2FkIiwiZ2V0V3JpdGFibGVQYWNrZXRzIiwic2hvdWxkQ2hlY2tQYXlsb2FkU2l6ZSIsInBheWxvYWRTaXplIiwicHVzaCIsImNsZWFudXBBbmRDbG9zZSIsIndhaXRGb3JVcGdyYWRlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImZpbHRlcmVkVXBncmFkZXMiLCJqIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztBQUFBO0FBQUFDOzs7QUNBTyxJQUFNQyxrQkFBa0IsTUFBTTtFQUNqQyxJQUFJLE9BQU9DLFNBQVMsYUFBYTtJQUM3QixPQUFPQTtFQUNYLFdBQ1MsT0FBT0MsV0FBVyxhQUFhO0lBQ3BDLE9BQU9BO0VBQ1gsT0FDSztJQUNELE9BQU9DLFNBQVMsYUFBYSxHQUFFO0VBQ25DO0FBQ0osSUFBRzs7O0FDVEksU0FBU0MsS0FBS0MsUUFBUUMsTUFB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ekIsS0FBSzlKLEtBQUssV0FBVzZKLGVBQWU7TUFDcEMsS0FBSzdKLEtBQUssZ0JBQWdCNkosZUFBZTtJQUM3QztJQUNBLElBQUksY0FBYyxLQUFLbk8sY0FBYyxXQUFXLEtBQUtBLFlBQVk7TUFDN0QsS0FBS0EsYUFBYTtNQUNsQixJQUFJLEtBQUttTCxZQUFZbE0sUUFBUTtRQUN6QixLQUFLcUYsS0FBSyxTQUFTLE1BQU07VUFDckIsSUFBSSxLQUFLeUksV0FBVztZQUNoQnFCLGdCQUFlO1VBQ25CLE9BQ0s7WUFDRDlOLE9BQU07VUFDVjtRQUNKLENBQUM7TUFDTCxXQUNTLEtBQUt5TSxXQUFXO1FBQ3JCcUIsZ0JBQWU7TUFDbkIsT0FDSztRQUNEOU4sT0FBTTtNQUNWO0lBQ0o7SUFDQSxPQUFPO0VBQ1g7RUFNQUosUUFBUXlDLEtBQUs7SUFDVDlGLE9BQU8wUCx3QkFBd0I7SUFDL0IsS0FBS3BNLGFBQWEsU0FBU3dDLEdBQUc7SUFDOUIsS0FBS25DLFFBQVEsbUJBQW1CbUMsR0FBRztFQUN2QztFQU1BbkMsUUFBUWYsUUFBUUMsYUFBYTtJQUN6QixJQUFJLGNBQWMsS0FBS00sY0FDbkIsV0FBVyxLQUFLQSxjQUNoQixjQUFjLEtBQUtBLFlBQVk7TUFFL0IsS0FBS3hCLGVBQWUsS0FBS3VOLGdCQUFnQjtNQUV6QyxLQUFLRSxVQUFVQyxtQkFBbUIsT0FBTztNQUV6QyxLQUFLRCxVQUFVM0wsT0FBTTtNQUVyQixLQUFLMkwsVUFBVUMsb0JBQW1CO01BQ2xDLElBQUksT0FBT21DLHdCQUF3QixZQUFZO1FBQzNDQSxvQkFBb0IsZ0JBQWdCLEtBQUtyQywyQkFBMkIsS0FBSztRQUN6RXFDLG9CQUFvQixXQUFXLEtBQUtsQyxzQkFBc0IsS0FBSztNQUNuRTtNQUVBLEtBQUtuTSxhQUFhO01BRWxCLEtBQUsyTCxLQUFLO01BRVYsS0FBS3hMLGFBQWEsU0FBU1YsUUFBUUMsV0FBVztNQUc5QyxLQUFLeUwsY0FBYyxFQUFDO01BQ3BCLEtBQUtDLGdCQUFnQjtJQUN6QjtFQUNKO0VBUUF5QyxlQUFlakMsVUFBVTtJQUNyQixNQUFNMEMsbUJBQW1CLEVBQUM7SUFDMUIsSUFBSXBQLEtBQUk7SUFDUixNQUFNcVAsSUFBSTNDLFNBQVMzTTtJQUNuQixPQUFPQyxLQUFJcVAsR0FBR3JQLE1BQUs7TUFDZixJQUFJLENBQUMsS0FBSy9CLFdBQVdpSSxRQUFRd0csU0FBUzFNLEdBQUUsR0FDcENvUCxpQkFBaUJKLEtBQUt0QyxTQUFTMU0sR0FBRTtJQUN6QztJQUNBLE9BQU9vUDtFQUNYO0FBQ0o7QUFDQXpSLE9BQU9LLFdBQVdvUDs7O0FDbGtCWCxJQUFNcFAsWUFBV0wsT0FBT0siLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii93ZWIvb3V0In0=