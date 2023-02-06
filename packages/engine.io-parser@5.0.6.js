System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["engine.io-parser","5.0.6"]]);
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

// .beyond/uimport/engine.io-parser.5.0.6.js
var engine_io_parser_5_0_6_exports = {};
__export(engine_io_parser_5_0_6_exports, {
  decodePacket: () => decodePacket_browser_default,
  decodePayload: () => decodePayload,
  encodePacket: () => encodePacket_browser_default,
  encodePayload: () => encodePayload,
  protocol: () => protocol
});
module.exports = __toCommonJS(engine_io_parser_5_0_6_exports);

// node_modules/engine.io-parser/build/esm/commons.js
var PACKET_TYPES = /* @__PURE__ */Object.create(null);
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
var PACKET_TYPES_REVERSE = /* @__PURE__ */Object.create(null);
Object.keys(PACKET_TYPES).forEach(key => {
  PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
var ERROR_PACKET = {
  type: "error",
  data: "parser error"
};

// node_modules/engine.io-parser/build/esm/encodePacket.browser.js
var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
var withNativeArrayBuffer = typeof ArrayBuffer === "function";
var isView = obj => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
};
var encodePacket = ({
  type,
  data
}, supportsBinary, callback) => {
  if (withNativeBlob && data instanceof Blob) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(data, callback);
    }
  } else if (withNativeArrayBuffer && (data instanceof ArrayBuffer || isView(data))) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(new Blob([data]), callback);
    }
  }
  return callback(PACKET_TYPES[type] + (data || ""));
};
var encodeBlobAsBase64 = (data, callback) => {
  const fileReader = new FileReader();
  fileReader.onload = function () {
    const content = fileReader.result.split(",")[1];
    callback("b" + (content || ""));
  };
  return fileReader.readAsDataURL(data);
};
var encodePacket_browser_default = encodePacket;

// node_modules/engine.io-parser/build/esm/contrib/base64-arraybuffer.js
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (let i = 0; i < chars.length; i++) {
  lookup[chars.charCodeAt(i)] = i;
}
var encode = arraybuffer => {
  let bytes = new Uint8Array(arraybuffer),
    i,
    len = bytes.length,
    base64 = "";
  for (i = 0; i < len; i += 3) {
    base64 += chars[bytes[i] >> 2];
    base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
    base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
    base64 += chars[bytes[i + 2] & 63];
  }
  if (len % 3 === 2) {
    base64 = base64.substring(0, base64.length - 1) + "=";
  } else if (len % 3 === 1) {
    base64 = base64.substring(0, base64.length - 2) + "==";
  }
  return base64;
};
var decode = base64 => {
  let bufferLength = base64.length * 0.75,
    len = base64.length,
    i,
    p = 0,
    encoded1,
    encoded2,
    encoded3,
    encoded4;
  if (base64[base64.length - 1] === "=") {
    bufferLength--;
    if (base64[base64.length - 2] === "=") {
      bufferLength--;
    }
  }
  const arraybuffer = new ArrayBuffer(bufferLength),
    bytes = new Uint8Array(arraybuffer);
  for (i = 0; i < len; i += 4) {
    encoded1 = lookup[base64.charCodeAt(i)];
    encoded2 = lookup[base64.charCodeAt(i + 1)];
    encoded3 = lookup[base64.charCodeAt(i + 2)];
    encoded4 = lookup[base64.charCodeAt(i + 3)];
    bytes[p++] = encoded1 << 2 | encoded2 >> 4;
    bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
    bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
  }
  return arraybuffer;
};

// node_modules/engine.io-parser/build/esm/decodePacket.browser.js
var withNativeArrayBuffer2 = typeof ArrayBuffer === "function";
var decodePacket = (encodedPacket, binaryType) => {
  if (typeof encodedPacket !== "string") {
    return {
      type: "message",
      data: mapBinary(encodedPacket, binaryType)
    };
  }
  const type = encodedPacket.charAt(0);
  if (type === "b") {
    return {
      type: "message",
      data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
    };
  }
  const packetType = PACKET_TYPES_REVERSE[type];
  if (!packetType) {
    return ERROR_PACKET;
  }
  return encodedPacket.length > 1 ? {
    type: PACKET_TYPES_REVERSE[type],
    data: encodedPacket.substring(1)
  } : {
    type: PACKET_TYPES_REVERSE[type]
  };
};
var decodeBase64Packet = (data, binaryType) => {
  if (withNativeArrayBuffer2) {
    const decoded = decode(data);
    return mapBinary(decoded, binaryType);
  } else {
    return {
      base64: true,
      data
    };
  }
};
var mapBinary = (data, binaryType) => {
  switch (binaryType) {
    case "blob":
      return data instanceof ArrayBuffer ? new Blob([data]) : data;
    case "arraybuffer":
    default:
      return data;
  }
};
var decodePacket_browser_default = decodePacket;

// node_modules/engine.io-parser/build/esm/index.js
var SEPARATOR = String.fromCharCode(30);
var encodePayload = (packets, callback) => {
  const length = packets.length;
  const encodedPackets = new Array(length);
  let count = 0;
  packets.forEach((packet, i) => {
    encodePacket_browser_default(packet, false, encodedPacket => {
      encodedPackets[i] = encodedPacket;
      if (++count === length) {
        callback(encodedPackets.join(SEPARATOR));
      }
    });
  });
};
var decodePayload = (encodedPayload, binaryType) => {
  const encodedPackets = encodedPayload.split(SEPARATOR);
  const packets = [];
  for (let i = 0; i < encodedPackets.length; i++) {
    const decodedPacket = decodePacket_browser_default(encodedPackets[i], binaryType);
    packets.push(decodedPacket);
    if (decodedPacket.type === "error") {
      break;
    }
  }
  return packets;
};
var protocol = 4;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9lbmdpbmUuaW8tcGFyc2VyLjUuMC42LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1wYXJzZXIvYnVpbGQvZXNtL2NvbW1vbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9idWlsZC9lc20vZW5jb2RlUGFja2V0LmJyb3dzZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9idWlsZC9lc20vY29udHJpYi9iYXNlNjQtYXJyYXlidWZmZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9idWlsZC9lc20vZGVjb2RlUGFja2V0LmJyb3dzZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9idWlsZC9lc20vaW5kZXguanMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJkZWNvZGVQYWNrZXQiLCJkZWNvZGVQYXlsb2FkIiwiZW5jb2RlUGFja2V0IiwiZW5jb2RlUGF5bG9hZCIsInByb3RvY29sIiwibW9kdWxlIiwiUEFDS0VUX1RZUEVTIiwiY3JlYXRlIiwiUEFDS0VUX1RZUEVTX1JFVkVSU0UiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsIkVSUk9SX1BBQ0tFVCIsInR5cGUiLCJkYXRhIiwid2l0aE5hdGl2ZUJsb2IiLCJCbG9iIiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwid2l0aE5hdGl2ZUFycmF5QnVmZmVyIiwiQXJyYXlCdWZmZXIiLCJpc1ZpZXciLCJvYmoiLCJidWZmZXIiLCJzdXBwb3J0c0JpbmFyeSIsImNhbGxiYWNrIiwiZW5jb2RlQmxvYkFzQmFzZTY0IiwiZmlsZVJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJjb250ZW50IiwicmVzdWx0Iiwic3BsaXQiLCJyZWFkQXNEYXRhVVJMIiwiZW5jb2RlUGFja2V0X2Jyb3dzZXJfZGVmYXVsdCIsImNoYXJzIiwibG9va3VwIiwiVWludDhBcnJheSIsImkiLCJsZW5ndGgiLCJjaGFyQ29kZUF0IiwiZW5jb2RlIiwiYXJyYXlidWZmZXIiLCJieXRlcyIsImxlbiIsImJhc2U2NCIsInN1YnN0cmluZyIsImRlY29kZSIsImJ1ZmZlckxlbmd0aCIsInAiLCJlbmNvZGVkMSIsImVuY29kZWQyIiwiZW5jb2RlZDMiLCJlbmNvZGVkNCIsImVuY29kZWRQYWNrZXQiLCJiaW5hcnlUeXBlIiwibWFwQmluYXJ5IiwiY2hhckF0IiwiZGVjb2RlQmFzZTY0UGFja2V0IiwicGFja2V0VHlwZSIsImRlY29kZWQiLCJkZWNvZGVQYWNrZXRfYnJvd3Nlcl9kZWZhdWx0IiwiU0VQQVJBVE9SIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwicGFja2V0cyIsImVuY29kZWRQYWNrZXRzIiwiQXJyYXkiLCJjb3VudCIsInBhY2tldCIsImpvaW4iLCJlbmNvZGVkUGF5bG9hZCIsImRlY29kZWRQYWNrZXQiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztBQUFBO0FBQUFDOzs7QUNBQSxJQUFNQyxlQUFlLHNCQUFPQyxPQUFPLElBQUk7QUFDdkNELGFBQWEsVUFBVTtBQUN2QkEsYUFBYSxXQUFXO0FBQ3hCQSxhQUFhLFVBQVU7QUFDdkJBLGFBQWEsVUFBVTtBQUN2QkEsYUFBYSxhQUFhO0FBQzFCQSxhQUFhLGFBQWE7QUFDMUJBLGFBQWEsVUFBVTtBQUN2QixJQUFNRSx1QkFBdUIsc0JBQU9ELE9BQU8sSUFBSTtBQUMvQ0UsT0FBT0MsS0FBS0osWUFBWSxFQUFFSyxRQUFRQyxPQUFPO0VBQ3JDSixxQkFBcUJGLGFBQWFNLFFBQVFBO0FBQzlDLENBQUM7QUFDRCxJQUFNQyxlQUFlO0VBQUVDLE1BQU07RUFBU0MsTUFBTTtBQUFlOzs7QUNYM0QsSUFBTUMsaUJBQWlCLE9BQU9DLFNBQVMsY0FDbEMsT0FBT0EsU0FBUyxlQUNiUixP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