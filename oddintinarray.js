// Finds the number that appears an odd number of times in the array
// Assumes exactly one such number, and all others appear an even number of times

function oddinitinarray(arr) {
  // Using XOR

  return arr.reduce((a, b) => a ^ b, 0);
}

console.log(oddinitinarray([1, 2, 2, 1, 3])); // 3
console.log(oddinitinarray([7, 3, 7, 5, 5, 3, 9])); // 9
console.log(oddinitinarray([4, 4, 6, 6, 9, 9, 2, 2, 11])); // 11
console.log(oddinitinarray([42])); // 42
console.log(oddinitinarray([1, 1, 2, 2, 3, 3])); // 0 ❌ No number appears an odd number of times
