const TYPEMAP = {
  int8: Int8Array,
  uint8: Uint8Array,
  int16: Int16Array,
  uint16: Uint16Array,
  int32: Int32Array,
  uint32: Uint32Array,
  float32: Float32Array,
  float64: Float64Array
}

function decode (message, metadata) {
  if (typeof message.data === 'string') {
    return JSON.parse(message.data)
  } else {
    const TypedArray = TYPEMAP[metadata.dtype]
    return TypedArray(message.data)
  }
}

export {
  decode
}
