// Given a deeply nested object, return a flat object where the keys are the paths in dot notation

function flattenObject(obj, parentKey = "", result = {}) {
  for (const key in obj) {
    const fullKey = parentKey ? `${parentKey}.${key}` : key;

    if (
      typeof obj[key] === "object" &&
      obj[key] !== null &&
      !Array.isArray(obj[key])
    ) {
      flattenObject(obj[key], fullKey, result);
    } else {
      result[fullKey] = obj[key];
    }
  }
  return result;
}

const nested = {
  a: { b: { c: 1, d: 2 } },
  x: 3,
};

console.log(flattenObject(nested));
