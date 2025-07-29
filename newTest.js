// Find two distinct elements in an array whose sum equals a target. Return their indices.

function twoSum(arr, target) {
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

  // const lookup = {};

  // for (let i = 0; i < arr.length; i++) {
  //   let diff = target - arr[i];

  //   if (lookup.hasOwnProperty(diff)) {
  //     return [lookup[diff], i];
  //   }

  //   lookup[arr[i]] = i;
  // }
  // return null;

  // Similar to Object but uses Map();

  const nmap = new Map();

  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];

    if (nmap.has(diff)) {
      return [nmap.get(diff), i];
    }

    nmap.set(arr[i], i);
  }
  return null;
}

console.log(twoSum([4, 6, 2, 8, 9, 21, 65, 345], 366));

// Find the length of the longest substring without repeating characters. Optionally, also return the actual substring.

function longestSubString(str) {
  // const nmap = new Map();

  // let start = 0,
  //   maxLen = 0,
  //   maxIndex = 0;

  // for (let end = 0; end < str.length; end++) {
  //   let char = str[end];

  //   if (nmap.has(char) && nmap.get(char) >= start) {
  //     start = nmap.get(char) + 1;
  //   }

  //   nmap.set(char, end);

  //   if (end - start + 1 > maxLen) {
  //     maxIndex = start;
  //     maxLen = end - start + 1;
  //   }
  // }

  // return str.slice(maxIndex, maxIndex + maxLen);
  // // return maxLen; // Uncomment for getting length

  const nset = new Set();

  let start = 0,
    maxLen = 0,
    maxIndex = 0;

  for (let end = 0; end < str.length; end++) {
    while (nset.has(str[end])) {
      nset.delete(str[start]);
      start++;
    }

    nset.add(str[end]);
    // maxLen = Math.max(maxLen, end - start + 1);

    if (end - start + 1 > maxLen) {
      maxIndex = start;
      maxLen = end - start + 1;
    }
  }

  // return maxLen;
  return str.slice(maxIndex, maxIndex + maxLen);
}

console.log(longestSubString("abcbccabab"));
console.log(longestSubString("bbbbb"));
console.log(longestSubString("pwwkew"));
console.log(longestSubString(""));
console.log(longestSubString("dvdf"));

// Return an object containing the count of each character in a string.

function counts(str) {
  let count = {};

  for (const char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  return count;
}

console.log(counts("Johnny"));

// Return the index where the array is balanced (i.e., sum of elements on the left equals the sum on the right).
// The element at that index is not included in either sum.
// If no such index exists, return -1.

function balanced(arr) {
  // // Bruteforce

  // for (let i = 0; i < arr.length; i++) {
  //   let left = arr.slice(0, i);
  //   let right = arr.slice(i + 1);

  //   let lsum = left.reduce((a, b) => a + b, 0);
  //   let rsum = right.reduce((a, b) => a + b, 0);

  //   if (lsum === rsum) {
  //     return i;
  //   }
  // }
  // return -1;

  // Optimal

  const maxSum = arr.reduce((a, b) => a + b, 0);
  let lsum = 0;

  for (let i = 0; i < arr.length; i++) {
    let rsum = maxSum - lsum - arr[i];

    if (lsum === rsum) return i;

    lsum += arr[i];
  }
  return -1;
}

console.log(balanced([3, 4, 2, 1, 5, 2, 3, 4, 1]));

// Manually reverse a string (without using built-in reverse methods like split("").reverse().join("")).

function mreverse(str) {
  let rev = [];

  for (let i = str.length - 1; i >= 0; i--) {
    rev.push(str[i]);
  }

  return rev.join("");
}

console.log(mreverse("olleH"));

// Return the number that appears an odd number of times in the array.
// Assume exactly one such number exists, and all others appear an even number of times.

function odd(arr) {
  return arr.reduce((a, b) => a ^ b, 0);
}

console.log(odd([1, 2, 2, 1, 3]));
console.log(odd([7, 3, 7, 5, 5, 3, 9]));
console.log(odd([4, 4, 6, 6, 9, 9, 2, 2, 11]));
console.log(odd([42]));
console.log(odd([1, 1, 2, 2, 3, 3])); // Edge Case

// Manually split a string using space as the delimiter (like str.split(" ")), without using .split().

function msplit(str) {
  let word = "";
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") word += str[i];
    else {
      arr.push(word);
      word = "";
    }
  }
  arr.push(word);

  return arr;
}

console.log(msplit("The quick brown fox"));

// Convert a string to Title Case, meaning capitalize the first letter of each word.
// Assume the input has no extra spaces or punctuation.

function titleCase(str) {
  let nstr = str.split(" ");
  nstr = nstr.map((s) => s[0].toUpperCase() + s.slice(1));
  return nstr.join(" ");
}

console.log(titleCase("the quick brown fox"));

// Reverse the order of words in a sentence (not the characters within the words).
// Assume the input is clean (no extra spaces or punctuation).

function revOrder(str) {
  let word = "";
  let nstr = [];
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      word += str[i];
    }
    if (str[i] === " ") {
      arr.push(word);
      word = "";
    }
  }
  arr.push(word);

  for (let i = arr.length - 1; i >= 0; i--) {
    nstr.push(arr[i]);
  }

  return nstr.join(" ");
}

console.log(revOrder("the quick brown fox"));

// Given a deeply nested array (may contain other arrays within arrays), find the maximum number.

function maxInDeepNestedArr(arr) {
  let maxi = -Infinity;

  for (const val of arr) {
    if (Array.isArray(val)) {
      maxi = Math.max(maxi, maxInDeepNestedArr(val));
    } else maxi = Math.max(maxi, val);
  }

  return maxi;
}

console.log(maxInDeepNestedArr([1, [2, [3, 4], 5], 6]));
console.log(maxInDeepNestedArr([1, [2, [3, [4, [5]]]], 6]));

// Alternate the case of each character in a string.

function altCase(str) {
  return str
    .split("")
    .map((s) => (s === s.toUpperCase() ? s.toLowerCase() : s.toUpperCase()))
    .join("");
}

console.log(altCase("hELLO"));
