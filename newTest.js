/** Find two distinct elements in an array whose sum equals a target; Return their indices. */

function prac(arr, target) {
  // // Bruteforce

  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = i + 1; j < arr.length; j++) {
  //     if (arr[i] + arr[j] === target) {
  //       return [i, j];
  //     }
  //   }
  // }
  // return null;

  // Optimal

  let lookup = {};

  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];

    if (lookup.hasOwnProperty(diff)) {
      return [lookup[diff], i];
    }

    lookup[arr[i]] = i;
  }
  return null;
}

console.log(prac([11, 12, 13, 14, 15, 16, 17, 18, 19], 37));

/** Given two strings s and t, return true if t is an anagram of s, and false otherwise.
Checks if two strings are anagrams, accounting for all Unicode characters.
*/

function anagram(s, t) {
  if (s.length !== t.length) return false;

  let counts = {};

  for (let char of s) {
    counts[char] = (counts[char] || 0) + 1;
  }

  for (let char of t) {
    if (!counts[char]) return false;
    counts[char]--;
  }

  return true;
}

console.log(anagram("anagram", "nagaram"));

/** Finds the 3rd least occurred number in an array */

function thleast(arr) {
  let counts = {};

  for (let val of arr) {
    counts[val] = (counts[val] || 0) + 1;
  }

  let freq = Object.entries(counts);

  if (freq.length < 3) return null;

  return Number(freq.sort((a, b) => a[1] - b[1])[2][0]);
}

console.log(thleast([14, 12, 12, 13, 13, 13, 11, 11, 11, 11, 15]));

/** Finds a subset of the array whose elements add up to the target. */

function subsum(arr, tot) {
  let num = [];

  function track(start, sum) {
    if (sum === tot) return true;
    if (sum > tot) return false;

    for (let i = start; i < arr.length; i++) {
      num.push(arr[i]);
      if (track(i + 1, sum + arr[i])) return true;
      num.pop();
    }

    return false;
  }

  return track(0, 0) ? num : -1;
}

console.log(subsum([1, 2, 3, 4, 2, 1, 3, 5], 9));
