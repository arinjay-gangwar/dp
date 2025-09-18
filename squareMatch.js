/** Write a function, which accepts 2 arrays. The function should return true if every value in the,
 arr1 has it's corresponding value squared in the arr2.
 - The frequency of values must be the same.
*/

function squareMatch(arr1, arr2) {
  // if (arr1.length !== arr2.length) {
  //   return false;
  // }

  // for (let i = 0; i < arr1.length; i++) {
  //   let index = arr2.indexOf(arr1[i] ** 2);
  //   if (index === -1) {
  //     return false;
  //   }

  //   arr2.splice(index, 1);
  // }

  // return true;

  if (arr1.length !== arr2.length) {
    return false;
  }

  let freq1 = {},
    freq2 = {};

  for (const val of arr1) {
    freq1[val] = (freq1[val] || 0) + 1;
  }
  for (const val of arr2) {
    freq2[val] = (freq2[val] || 0) + 1;
  }

  for (const key in freq1) {
    if (!(key ** 2 in freq2)) {
      return false;
    }
    if (freq2[key ** 2] !== freq1[key]) {
      return false;
    }
  }

  return true;
}

console.log(squareMatch([1, 2, 3], [1, 4, 9]));
console.log(squareMatch([1, 2, 3], [1, 9]));
console.log(squareMatch([1, 2, 1], [1, 4, 1]));
console.log(squareMatch([1, 2, 1], [1, 4, 4]));
