System.register(["@socket.io/component-emitter@3.1.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@socket.io/component-emitter","3.1.0"],["socket.io-parser","4.2.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@socket.io/component-emitter@3.1.0', dep)],
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

// .beyond/uimport/socket.io-parser.4.2.2.js
var socket_io_parser_4_2_2_exports = {};
__export(socket_io_parser_4_2_2_exports, {
  Decoder: () => Decoder,
  Encoder: () => Encoder,
  PacketType: () => PacketType,
  protocol: () => protocol
});
module.exports = __toCommonJS(socket_io_parser_4_2_2_exports);

// node_modules/socket.io-parser/build/esm/is-binary.js
var withNativeArrayBuffer = typeof ArrayBuffer === "function";
var isView = obj => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};
var toString = Object.prototype.toString;
var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
function isBinary(obj) {
  return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
}
function hasBinary(obj, toJSON) {
  if (!obj || typeof obj !== "object") {
    return false;
  }
  if (Array.isArray(obj)) {
    for (let i = 0, l = obj.length; i < l; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }
    return false;
  }
  if (isBinary(obj)) {
    return true;
  }
  if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }
  return false;
}

// node_modules/socket.io-parser/build/esm/binary.js
function deconstructPacket(packet) {
  const buffers = [];
  const packetData = packet.data;
  const pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length;
  return {
    packet: pack,
    buffers
  };
}
function _deconstructPacket(data, buffers) {
  if (!data) return data;
  if (isBinary(data)) {
    const placeholder = {
      _placeholder: true,
      num: buffers.length
    };
    buffers.push(data);
    return placeholder;
  } else if (Array.isArray(data)) {
    const newData = new Array(data.length);
    for (let i = 0; i < data.length; i++) {
      newData[i] = _deconstructPacket(data[i], buffers);
    }
    return newData;
  } else if (typeof data === "object" && !(data instanceof Date)) {
    const newData = {};
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        newData[key] = _deconstructPacket(data[key], buffers);
      }
    }
    return newData;
  }
  return data;
}
function reconstructPacket(packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  delete packet.attachments;
  return packet;
}
function _reconstructPacket(data, buffers) {
  if (!data) return data;
  if (data && data._placeholder === true) {
    const isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;
    if (isIndexValid) {
      return buffers[data.num];
    } else {
      throw new Error("illegal attachments");
    }
  } else if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      data[i] = _reconstructPacket(data[i], buffers);
    }
  } else if (typeof data === "object") {
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        data[key] = _reconstructPacket(data[key], buffers);
      }
    }
  }
  return data;
}

// node_modules/socket.io-parser/build/esm/index.js
var import_component_emitter = require("@socket.io/component-emitter@3.1.0");
var protocol = 5;
var PacketType;
(function (PacketType2) {
  PacketType2[PacketType2["CONNECT"] = 0] = "CONNECT";
  PacketType2[PacketType2["DISCONNECT"] = 1] = "DISCONNECT";
  PacketType2[PacketType2["EVENT"] = 2] = "EVENT";
  PacketType2[PacketType2["ACK"] = 3] = "ACK";
  PacketType2[PacketType2["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
  PacketType2[PacketType2["BINARY_EVENT"] = 5] = "BINARY_EVENT";
  PacketType2[PacketType2["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType || (PacketType = {}));
var Encoder = class {
  constructor(replacer) {
    this.replacer = replacer;
  }
  encode(obj) {
    if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
      if (hasBinary(obj)) {
        return this.encodeAsBinary({
          type: obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK,
          nsp: obj.nsp,
          data: obj.data,
          id: obj.id
        });
      }
    }
    return [this.encodeAsString(obj)];
  }
  encodeAsString(obj) {
    let str = "" + obj.type;
    if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
      str += obj.attachments + "-";
    }
    if (obj.nsp && "/" !== obj.nsp) {
      str += obj.nsp + ",";
    }
    if (null != obj.id) {
      str += obj.id;
    }
    if (null != obj.data) {
      str += JSON.stringify(obj.data, this.replacer);
    }
    return str;
  }
  encodeAsBinary(obj) {
    const deconstruction = deconstructPacket(obj);
    const pack = this.encodeAsString(deconstruction.packet);
    const buffers = deconstruction.buffers;
    buffers.unshift(pack);
    return buffers;
  }
};
var Decoder = class extends import_component_emitter.Emitter {
  constructor(reviver) {
    super();
    this.reviver = reviver;
  }
  add(obj) {
    let packet;
    if (typeof obj === "string") {
      if (this.reconstructor) {
        throw new Error("got plaintext data when reconstructing a packet");
      }
      packet = this.decodeString(obj);
      const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
      if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
        packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
        this.reconstructor = new BinaryReconstructor(packet);
        if (packet.attachments === 0) {
          super.emitReserved("decoded", packet);
        }
      } else {
        super.emitReserved("decoded", packet);
      }
    } else if (isBinary(obj) || obj.base64) {
      if (!this.reconstructor) {
        throw new Error("got binary data when not reconstructing a packet");
      } else {
        packet = this.reconstructor.takeBinaryData(obj);
        if (packet) {
          this.reconstructor = null;
          super.emitReserved("decoded", packet);
        }
      }
    } else {
      throw new Error("Unknown type: " + obj);
    }
  }
  decodeString(str) {
    let i = 0;
    const p = {
      type: Number(str.charAt(0))
    };
    if (PacketType[p.type] === void 0) {
      throw new Error("unknown packet type " + p.type);
    }
    if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
      const start = i + 1;
      while (str.charAt(++i) !== "-" && i != str.length) {}
      const buf = str.substring(start, i);
      if (buf != Number(buf) || str.charAt(i) !== "-") {
        throw new Error("Illegal attachments");
      }
      p.attachments = Number(buf);
    }
    if ("/" === str.charAt(i + 1)) {
      const start = i + 1;
      while (++i) {
        const c = str.charAt(i);
        if ("," === c) break;
        if (i === str.length) break;
      }
      p.nsp = str.substring(start, i);
    } else {
      p.nsp = "/";
    }
    const next = str.charAt(i + 1);
    if ("" !== next && Number(next) == next) {
      const start = i + 1;
      while (++i) {
        const c = str.charAt(i);
        if (null == c || Number(c) != c) {
          --i;
          break;
        }
        if (i === str.length) break;
      }
      p.id = Number(str.substring(start, i + 1));
    }
    if (str.charAt(++i)) {
      const payload = this.tryParse(str.substr(i));
      if (Decoder.isPayloadValid(p.type, payload)) {
        p.data = payload;
      } else {
        throw new Error("invalid payload");
      }
    }
    return p;
  }
  tryParse(str) {
    try {
      return JSON.parse(str, this.reviver);
    } catch (e) {
      return false;
    }
  }
  static isPayloadValid(type, payload) {
    switch (type) {
      case PacketType.CONNECT:
        return typeof payload === "object";
      case PacketType.DISCONNECT:
        return payload === void 0;
      case PacketType.CONNECT_ERROR:
        return typeof payload === "string" || typeof payload === "object";
      case PacketType.EVENT:
      case PacketType.BINARY_EVENT:
        return Array.isArray(payload) && payload.length > 0;
      case PacketType.ACK:
      case PacketType.BINARY_ACK:
        return Array.isArray(payload);
    }
  }
  destroy() {
    if (this.reconstructor) {
      this.reconstructor.finishedReconstruction();
      this.reconstructor = null;
    }
  }
};
var BinaryReconstructor = class {
  constructor(packet) {
    this.packet = packet;
    this.buffers = [];
    this.reconPack = packet;
  }
  takeBinaryData(binData) {
    this.buffers.push(binData);
    if (this.buffers.length === this.reconPack.attachments) {
      const packet = reconstructPacket(this.reconPack, this.buffers);
      this.finishedReconstruction();
      return packet;
    }
    return null;
  }
  finishedReconstruction() {
    this.reconPack = null;
    this.buffers = [];
  }
};
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9zb2NrZXQuaW8tcGFyc2VyLjQuMi4yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1wYXJzZXIvYnVpbGQvZXNtL2lzLWJpbmFyeS5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL2J1aWxkL2VzbS9iaW5hcnkuanMiLCIuLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLXBhcnNlci9idWlsZC9lc20vaW5kZXguanMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJEZWNvZGVyIiwiRW5jb2RlciIsIlBhY2tldFR5cGUiLCJwcm90b2NvbCIsIm1vZHVsZSIsIndpdGhOYXRpdmVBcnJheUJ1ZmZlciIsIkFycmF5QnVmZmVyIiwiaXNWaWV3Iiwib2JqIiwiYnVmZmVyIiwidG9TdHJpbmciLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ3aXRoTmF0aXZlQmxvYiIsIkJsb2IiLCJjYWxsIiwid2l0aE5hdGl2ZUZpbGUiLCJGaWxlIiwiaXNCaW5hcnkiLCJoYXNCaW5hcnkiLCJ0b0pTT04iLCJBcnJheSIsImlzQXJyYXkiLCJpIiwibCIsImxlbmd0aCIsImFyZ3VtZW50cyIsImtleSIsImhhc093blByb3BlcnR5IiwiZGVjb25zdHJ1Y3RQYWNrZXQiLCJwYWNrZXQiLCJidWZmZXJzIiwicGFja2V0RGF0YSIsImRhdGEiLCJwYWNrIiwiX2RlY29uc3RydWN0UGFja2V0IiwiYXR0YWNobWVudHMiLCJwbGFjZWhvbGRlciIsIl9wbGFjZWhvbGRlciIsIm51bSIsInB1c2giLCJuZXdEYXRhIiwiRGF0ZSIsInJlY29uc3RydWN0UGFja2V0IiwiX3JlY29uc3RydWN0UGFja2V0IiwiaXNJbmRleFZhbGlkIiwiRXJyb3IiLCJyZXF1aXJlIiwiY29uc3RydWN0b3IiLCJyZXBsYWNlciIsImVuY29kZSIsInR5cGUiLCJFVkVOVCIsIkFDSyIsImVuY29kZUFzQmluYXJ5IiwiQklOQVJZX0VWRU5UIiwiQklOQVJZX0FDSyIsIm5zcCIsImlkIiwiZW5jb2RlQXNTdHJpbmciLCJzdHIiLCJKU09OIiwic3RyaW5naWZ5IiwiZGVjb25zdHJ1Y3Rpb24iLCJ1bnNoaWZ0IiwiaW1wb3J0X2NvbXBvbmVudF9lbWl0dGVyIiwicmV2aXZlciIsImFkZCIsInJlY29uc3RydWN0b3IiLCJkZWNvZGVTdHJpbmciLCJpc0JpbmFyeUV2ZW50IiwiQmluYXJ5UmVjb25zdHJ1Y3RvciIsImVtaXRSZXNlcnZlZCIsImJhc2U2NCIsInRha2VCaW5hcnlEYXRhIiwicCIsIk51bWJlciIsImNoYXJBdCIsInN0YXJ0IiwiYnVmIiwic3Vic3RyaW5nIiwiYyIsIm5leHQiLCJwYXlsb2FkIiwidHJ5UGFyc2UiLCJzdWJzdHIiLCJpc1BheWxvYWRWYWxpZCIsInBhcnNlIiwiZSIsIkNPTk5FQ1QiLCJESVNDT05ORUNUIiwiQ09OTkVDVF9FUlJPUiIsImRlc3Ryb3kiLCJmaW5pc2hlZFJlY29uc3RydWN0aW9uIiwicmVjb25QYWNrIiwiYmluRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7QUFBQTtBQUFBQzs7O0FDQUEsSUFBTUMsd0JBQXdCLE9BQU9DLGdCQUFnQjtBQUNyRCxJQUFNQyxTQUFVQyxPQUFRO0VBQ3BCLE9BQU8sT0FBT0YsWUFBWUMsV0FBVyxhQUMvQkQsWUFBWUMsT0FBT0MsR0FBRyxJQUN0QkEsSUFBSUMsa0JBQWtCSDtBQUNoQztBQUNBLElBQU1JLFdBQVdDLE9BQU9DLFVBQVVGO0FBQ2xDLElBQU1HLGlCQUFpQixPQUFPQyxTQUFTLGNBQ2xDLE9BQU9BLFNBQVMsZUFDYkosU0FBU0ssS0FBS0QsSUFBSSxNQUFNO0FBQ2hDLElBQU1FLGlCQUFpQixPQUFPQyxTQUFTLGNBQ2xDLE9BQU9BLFNBQVMsZUFDYlAsU0FBU0ssS0FBS0UsSUFBSSxNQUFNO0FBTXpCLFNBQVNDLFNBQVNWLEtBQUs7RUFDMUIsT0FBU0gsMEJBQTBC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