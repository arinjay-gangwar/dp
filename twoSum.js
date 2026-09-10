/** Find two distinct elements in the array whose sum equals the target, and return their indices. */

function twoSum(arr, target) {
  // // Bruteforce -> TC : O(n^2)

  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = i + 1; j < arr.length; j++) {
  //     if (arr[i] + arr[j] === target) {
  //       return [i, j];
  //     }
  //   }
  // }
  // return [];

  // Optimal -> TC : O(n) using Hash

  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const diff = target - arr[i];

    if (map.has(diff)) {
      return [map.get(diff), i];
    }

    map.set(arr[i], i);
  }
  return [];
}

console.log(twoSum([3, 2, 8, 3, 7, 9], 16));
console.log(twoSum([3, 2, 8, 3, 7, 9], 15));
console.log(twoSum([3, 2, 8, 3, 7, 9], 10));
console.log(twoSum([3, 2, 8, 3, 7, 9], 8));
