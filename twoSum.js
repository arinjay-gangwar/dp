// Find two distinct elements in the array whose sum equals the target, and return their indices.

function twoSum(arr, target) {
  // // Bruteforce -> TC : O(n^2)

  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = i + 1; j < arr.length; j++) {
  //     if (arr[i] + arr[j] === target) {
  //       return [i, j];
  //     }
  //   }
  // }
  // return null;

  // Optimal -> TC : O(n) using Hash

  var lookup = {};

  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];

    if (lookup.hasOwnProperty(diff)) {
      return [lookup[diff], i];
    }

    lookup[arr[i]] = i;
  }
  return null;
}

console.log(twoSum([3, 2, 8, 3, 7, 9], 15));
