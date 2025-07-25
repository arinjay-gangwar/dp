// Given a flat object with dot-separated keys, convert it to a nested object

function expandFlatObject(obj) {
  const result = {};

  for (const [fullKey, value] of Object.entries(obj)) {
    const keys = fullKey.split(".");
    let current = result;

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];

      if (i === keys.length - 1) {
        current[key] = value;
      } else {
        if (!current[key]) {
          current[key] = {};
        }
        current = current[key];
      }
    }
  }

  return result;
}

const flat = {
  "a.b.c": 1,
  "a.b.d": 2,
  x: 3,
};

console.log(expandFlatObject(flat));
