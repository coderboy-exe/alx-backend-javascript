const createInt8TypedArray = (length, position, value) => {
  if (position < 0 || position >= length) {
    return new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const int8View = new Int8Array(buffer);

  int8View.set([value], position);
  return new DataView(buffer);
};

export default createInt8TypedArray;
