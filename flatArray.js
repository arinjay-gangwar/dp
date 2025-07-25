// Flattens a nested array to a 1D array

function flatArray(arr) {
  const resultArr = [];

  for (const value of arr) {
    if (Array.isArray(value)) {
      resultArr.push(...flatArray(value));
    } else resultArr.push(value);
  }

  return resultArr;
}

console.log(flatArray([1, [2, [3, 4], 5], 6]));
console.log(flatArray([1, [2, [3, [4, [5]]]], 6]));

function flatArrayDepth(arr, depth = 1) {
  const resultArr = [];

  for (const value of arr) {
    if (Array.isArray(value) && depth > 0) {
      resultArr.push(...flatArrayDepth(value, depth - 1));
    } else resultArr.push(value);
  }

  return resultArr;
}

console.log(flatArrayDepth([1, [2, [3, [4]]]]));
console.log(flatArrayDepth([1, [2, [3, [4]]]], 2));
console.log(flatArrayDepth([1, [2, [3, [4]]]], 3));
