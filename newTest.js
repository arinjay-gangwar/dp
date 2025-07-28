// Return true if the input string is a palindrome; otherwise, return false.

function palindromeString(str) {
  // // Using builtin Methods

  // return str === str.split("").reverse().join("");

  // Using Two Pointers

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }

  return true;
}

console.log(palindromeString("madam"));
console.log(palindromeString("johnson"));

// Return the index where the array is balanced (left sum == right sum), or -1 if not found.
// The element at the index itself is not included in either sum.

function balanced(arr) {
  // // Using Builtin Methods

  // for (let i = 0; i < arr.length; i++) {
  //   let left = arr.slice(0, i);
  //   let right = arr.slice(i + 1);

  //   let lsum = left.reduce((a, b) => a + b, 0);
  //   let rsum = right.reduce((a, b) => a + b, 0);

  //   if (lsum === rsum) return i;
  // }
  // return -1;

  // Using Optimal Approach

  let maxSum = arr.reduce((a, b) => a + b, 0);
  let lsum = 0;

  for (let i = 0; i < arr.length; i++) {
    let rsum = maxSum - lsum - arr[i];

    if (lsum === rsum) return i;

    lsum += arr[i];
  }
  return -1;
}

console.log(balanced([1, 2, 4, 3, 5, 2, 1, 3, 4]));

// Manually reverse a string (mimics str.split("").reverse().join("")) without using built-in reverse functions.

function mreverse(str) {
  let rev = "";

  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }

  return rev;
}

console.log(mreverse("olleH"));

// Find two distinct elements in an array whose sum equals a target. Return their indices.

function twoSum(arr, target) {
  // // Bruteforce

  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = i + 1; j < arr.length; j++) {
  //     if (arr[i] + arr[j] === target) return [i, j];
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

console.log(twoSum([1, 4, 6, 8, 3, 9], 15));

// Return an object containing the count of each character in a string.

function freqCounter(str) {
  const count = {};

  for (const char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  return count;
}

console.log(freqCounter("Johnny"));

// Find the third least frequently occurring number in an array.

function thirdLeastEle(arr) {
  const counts = {};

  for (const val of arr) {
    counts[val] = (counts[val] || 0) + 1;
  }

  let freq = Object.entries(counts);

  if (freq.length < 3) return null;

  return Number(freq.sort((a, b) => a[1] - b[1])[2][0]);
}

console.log(thirdLeastEle([14, 12, 12, 13, 13, 13, 11, 11, 11, 11, 15]));
