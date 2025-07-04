function oddintinarray(arr) {
  return arr.reduce((a, b) => a ^ b, 0);
}

console.log(oddintinarray([1, 2, 1, 3, 4, 1, 5]));
console.log(oddintinarray([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
