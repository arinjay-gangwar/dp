// Finds maximum in a deeply nested array

function maxInDeeplyNestedArray(arr) {
  let max = -Infinity;

  for (const value of arr) {
    if (Array.isArray(value)) {
      max = Math.max(max, maxInDeeplyNestedArray(value));
    } else max = Math.max(max, value);
  }

  return max;

  // let resultArr = [];

  // for (const value of arr) {
  //   if (Array.isArray(value)) {
  //     resultArr.push(maxInDeeplyNestedArray(value));
  //   } else resultArr.push(value);
  // }

  // return resultArr.sort((a, b) => b - a)[0];
}

console.log(maxInDeeplyNestedArray([1, [2, [3, 4], 5], 6]));
