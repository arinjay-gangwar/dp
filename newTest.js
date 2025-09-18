/** Find two distinct elements in an array whose sum equals a target; Return their indices. */

function twoSum(arr, target) {
  // Bruteforce

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
}

console.log(twoSum([1, 3, 2, 5, 4, 6, 8, 7, 9], 5));

/** Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 - Checks if two strings are anagrams, accounting for all Unicode characters.
*/

function anagram(s, t) {
  if (s.length !== t.length) return false;

  const counts = {};

  for (const char of s) {
    counts[char] = (counts[char] || 0) + 1;
  }

  for (const char of t) {
    if (!counts[char]) return false;
    counts[char]--;
  }

  return true;
}

console.log(anagram("anagram", "nagaram"));
console.log(anagram("rat", "cat"));
console.log(anagram("plane", "dog"));
console.log(anagram("👍😀a", "a😀👍"));
console.log(anagram("👍😀a", "a😀😅"));

/** Finds the 3rd least occurred number in an array */

function thlocele(arr) {
  let counts = {};

  for (const val of arr) {
    counts[val] = (counts[val] || 0) + 1;
  }
  const freq = Object.entries(counts);

  if (freq.length < 3) return null;

  return Number(freq.sort((a, b) => a[1] - b[1])[2][0]);
}

console.log(thlocele([14, 12, 12, 13, 13, 13, 11, 11, 11, 11, 15]));

/** Finds a subset of the array whose elements add up to the target. */

function subsum(arr, target) {
  const nums = [];

  function track(start, sum) {
    if (sum === target) return true;
    if (sum > target) return false;

    for (let i = start; i < arr.length; i++) {
      nums.push(arr[i]);
      if (track(i + 1, sum + arr[i])) return true;
      nums.pop();
    }

    return false;
  }

  return track(0, 0) ? nums : -1;
}

console.log(subsum([1, 2, 3, 4, 2, 1, 3, 5], 9));

/** Write a function, which accepts 2 arrays. The function should return true if every value in the,
 arr1 has it's corresponding value squared in the arr2.
 - The frequency of values must be the same.
*/

function sqarray(arr1, arr2) {
  // // Bruteforce

  // if (arr1.length !== arr2.length) return false;

  // for (let i = 0; i < arr1.length; i++) {
  //   let idx = arr2.indexOf(arr1[i] ** 2);
  //   if (idx === -1) return false;

  //   arr2.splice(idx, 1);
  // }

  // return true;

  if (arr1.length !== arr2.length) return false;

  let freq1 = {},
    freq2 = {};

  for (const val of arr1) {
    freq1[val] = (freq1[val] || 0) + 1;
  }

  for (const val of arr2) {
    freq2[val] = (freq2[val] || 0) + 1;
  }

  for (const key in freq1) {
    if (!(key ** 2 in freq2)) return false;

    if (freq2[key ** 2] !== freq1[key]) return false;
  }

  return true;
}

console.log(sqarray([1, 2, 3], [1, 4, 9]));
console.log(sqarray([1, 2, 3], [1, 9]));
console.log(sqarray([1, 2, 1], [1, 4, 1]));
console.log(sqarray([1, 2, 3], [1, 4, 4]));
