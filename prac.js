// // Q1) Find two distinct elements in the array whose sum equals the target, and return their indices.

// function solve(arr, target) {
//   // BruteForce Method

//   // for (let i = 0; i < arr.length; i++) {
//   //   for (let j = i + 1; j < arr.length; j++) {
//   //     if (arr[i] + arr[j] === target) {
//   //       return [i, j];
//   //     }
//   //   }
//   // }
//   // return null;

//   // Optimal Method

//   let lookup = {};

//   for (let i = 0; i < arr.length; i++) {
//     let diff = target - arr[i];

//     if (lookup.hasOwnProperty(diff)) return [lookup[diff], i];

//     lookup[arr[i]] = i;
//   }
//   return null;
// }

// console.log(solve([12, 24, 43, 6, 3, 8, 9, 10], 21));

// // Q2) Finds a subset of the array whose elements add up to the target

// function solve(arr, target) {
//   // Using backtracking to find a subset of elements that sum up to the target

//   let ans = [];

//   function track(start, sum) {
//     if (sum === target) return true;
//     if (sum > target) return false;

//     for (let i = start; i < arr.length; i++) {
//       ans.push(arr[i]);
//       if (track(i + 1, sum + arr[i])) return true;
//       ans.pop();
//     }
//     return false;
//   }

//   return track(0, 0) ? ans : null;
// }

// console.log(solve([1, 2, 3, 4, 2, 1, 3, 5], 9));

// // Q3) Returns true if the string is a palindrome, false otherwise

// function solve(str) {
//   // // Using builtin methods

//   // return str === str.split("").reverse().join("");

//   // Using two-pointer method

//   let left = 0;
//   let right = str.length - 1;

//   while (left < right) {
//     if (str[left] !== str[right]) return false;
//     left++;
//     right--;
//   }
//   return true;
// }

// console.log(solve("madam"));
// console.log(solve("jacob"));

// // Q4) Finds the number that appears an odd number of times in the array
// // Assumes exactly one such number, and all others appear an even number of times

// function solve(arr) {
//   // Using XOR

//   return arr.reduce((a, b) => a ^ b, 0);
// }

// console.log(solve([1, 2, 2, 1, 3])); // 3
// console.log(solve([7, 3, 7, 5, 5, 3, 9])); // 9
// console.log(solve([4, 4, 6, 6, 9, 9, 2, 2, 11])); // 11
// console.log(solve([42])); // 42
// console.log(solve([1, 1, 2, 2, 3, 3])); // ❌ No number appears an odd number of times

// // Q5) Manually splits a string using space as the delimiter (mimics split(" "))

// function solve(str) {
//   let word = "";
//   let arr = [];

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== " ") word += str[i];

//     if (str[i] === " ") {
//       arr.push(word);
//       word = "";
//     }
//   }
//   arr.push(word);

//   return arr;
// }

// console.log(solve("This is a Sentence"));

// // Q6) Manually reverses a string (mimics str.split("").reverse().join(""))

// function solve(str) {
//   let rev = "";

//   for (let i = str.length - 1; i >= 0; i--) rev += str[i];

//   return rev;
// }

// console.log(solve("olleH"));

// // Q7) Finds the maximum sum of any subarray of size k in the given array

// function solve(arr, k) {
//   if (k <= 0 || k > arr.length) return null;

//   let currentSum = 0,
//     maxSum = 0;

//   for (let i = 0; i < k; i++) currentSum += arr[i];

//   maxSum = currentSum;

//   for (let i = k; i < arr.length; i++) {
//     currentSum += arr[i] - arr[i - k];

//     if (currentSum > maxSum) maxSum = currentSum;
//   }

//   return maxSum;
// }

// console.log(solve([1, 4, 3, 5, 7, 6, 9], 2));

// // Q8) Finds the length of the smallest subarray with sum ≥ target

// function solve(arr, target) {
//   let currentSum = 0,
//     start = 0,
//     minLength = Infinity;

//   for (let end = 0; end < arr.length; end++) {
//     currentSum += arr[end];

//     while (currentSum >= target) {
//       minLength = Math.min(minLength, end - start + 1);
//       currentSum -= arr[start];
//       start++;
//     }
//   }
//   return minLength === Infinity ? null : minLength;
// }

// console.log(solve([2, 5, 4, 7, 8, 3, 9], 15));

// // Q9) Finds the lowest and second lowest distinct values from an array of integers

// function solve(arr) {
//   if (!arr || arr.length === 0) return null;

//   let l = Infinity;
//   let sl = Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < l) {
//       sl = l;
//       l = arr[i];
//     } else if (arr[i] > l && arr[i] < sl) {
//       sl = arr[i];
//     }
//   }

//   return sl === Infinity ? [l, null] : [l, sl];
// }

// console.log(solve([2, 4, 5, 3, 7, 8, 9, 6]));

// Q10) Finds the longest word in a sentence (ignores punctuation)
// Returns the first longest word in case of a tie

// function solve(str) {
//   // Using built-in methods to find the longest word after removing punctuation

//   if (!str || str.trim() === "") return null;

//   return str
//     .replace(/[^\w\s]/g, "")
//     .split(" ")
//     .reduce((a, b) => (a.length > b.length ? a : b));

//   // Using loop to find the longest word after removing punctuation

//   // if (!str || str.trim() === "") return null;

//   // let word = str.replace(/[^\w\s]/g, "").split(" ");
//   // let index = 0;
//   // let maxLen = 0;

//   // for (let i = 0; i < word.length; i++) {
//   //   let len = word[i].length;

//   //   if (len > maxLen) {
//   //     maxLen = len;
//   //     index = i;
//   //   }
//   // }

//   // return word[index];
// }

// console.log(solve("This is a sentence"));

// // Q11) Finds the longest string formed by concatenating k consecutive strings from an array

// function solve(arr, k) {
//   // // Appraoch 1) BruteForce - Using two loops

//   // if (k <= 0 || k > arr.length) return "";

//   // let longest = "";

//   // for (let i = 0; i < arr.length - k; i++) {
//   //   let temp = "";

//   //   for (let j = i; j < i + k; j++) {
//   //     temp += arr[j];
//   //   }

//   //   if (temp.length > longest.length) longest = temp;
//   // }

//   // return longest;

//   // Appraoch 2) Optimal - Using Sliding window

//   if (k <= 0 || k > arr.length) return "";

//   const lengths = arr.map((s) => s.length);
//   let maxIndex = 0,
//     curLen = 0,
//     maxLen = 0;

//   for (let i = 0; i < k; i++) {
//     curLen += lengths[i];
//   }

//   maxLen = curLen;

//   for (let i = 1; i <= arr.length - k; i++) {
//     curLen += lengths[i + k - 1] - lengths[i - 1];

//     if (curLen > maxLen) {
//       maxLen = curLen;
//       maxIndex = i;
//     }
//   }

//   return arr.slice(maxIndex, maxIndex + k).join("");
// }

// console.log(solve(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2));
// console.log(
//   solve(
//     ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"],
//     2
//   )
// );

// // Q12) Finds the length of the longest substring without repeating characters
// // Optionally, it can return the actual longest substring instead of just its length

// function solve(str) {
//   // --------- Approach 1: Using Set (Brute-force sliding window) ---------

//   /*
//   let nset = new Set();           // Stores unique characters in the current window
//   let start = 0, maxLen = 0;

//   for (let end = 0; end < str.length; end++) {
//     // If the character is already in the set, shrink the window from the start
//     while (nset.has(str[end])) {
//       nset.delete(str[start]);
//       start++;
//     }
//     nset.add(str[end]);           // Add current character to the window
//     maxLen = Math.max(maxLen, end - start + 1); // Update max length if needed
//   }

//   return maxLen;
//   */

//   // --------- Approach 2: Using Map (Optimized sliding window) ---------

//   let nmap = new Map(); // Map stores the last seen index of each character
//   let start = 0,
//     maxLen = 0;
//   let maxStart = 0; // Tracks the starting index of the longest substring

//   for (let end = 0; end < str.length; end++) {
//     let char = str[end];

//     // If char is repeated and its last index is within the current window
//     if (nmap.has(char) && nmap.get(char) >= start) {
//       start = nmap.get(char) + 1; // Move the window's start just past the previous occurrence
//     }

//     nmap.set(char, end); // Update last seen index

//     // Check if current window is longer than previously recorded
//     if (end - start + 1 > maxLen) {
//       maxLen = end - start + 1;
//       maxStart = start;
//     }
//   }

//   return maxLen;
//   // return str.slice(maxStart, maxStart + maxLen); // Uncomment to return the actual longest substring
// }

// console.log(solve("abcbccabab"));
// console.log(solve("bbbbb"));
// console.log(solve("pwwkew"));
// console.log(solve(""));
// console.log(solve("dvdf"));

// // Q13) Finds the largest and second largest distinct values from an array of integers

// function solve(arr) {
//   if (!arr || arr.length === 0) return null;

//   let l = -Infinity;
//   let sl = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > l) {
//       sl = l;
//       l = arr[i];
//     } else if (arr[i] < l && arr[i] > sl) sl = arr[i];
//   }

//   return sl === -Infinity ? [l, null] : [l, sl];
// }

// console.log(solve([2, 1, 4, 3, 6, 7, 9, 5]));

// // Q14) Converts a clean string to Title Case (first letter of each word capitalized)
// // Assumes input has no extra spaces or punctuation

// function solve(str) {
//   if (!str) return "";

//   let nstr = str.split(" ");

//   nstr = nstr.map((s) => s[0].toUpperCase() + s.slice(1));

//   return nstr.join(" ");
// }

// console.log(solve(""));
// console.log(solve("this is a title"));
// console.log(solve("This Is Already Title"));
// console.log(solve("example title case"));

// // Q15) Returns true if the number is a palindrome, false otherwise

// function solve(num) {
//   if (num < 0) return false;

//   let rev = 0;
//   let org = num;

//   while (num > 0) {
//     let digit = num % 10;
//     rev = rev * 10 + digit;
//     num = Math.floor(num / 10);
//   }

//   return org === rev;
// }

// console.log(solve(1221));
// console.log(solve(-1221));

// // Q16) Returns the index where the array is balanced (left sum == right sum), or -1 if not found
// // arr[i] itself is not included in either sum (standard behavior)

// function solve(arr) {
//   // // Naive Approach

//   // for (let i = 0; i < arr.length; i++) {
//   //   let left = arr.slice(0, i);
//   //   let right = arr.slice(i + 1);

//   //   let lsum = left.reduce((a, b) => a + b, 0);
//   //   let rsum = right.reduce((a, b) => a + b, 0);

//   //   if (lsum === rsum) {
//   //     return i;
//   //   }
//   // }
//   // return -1;

//   // Optimal Approach - Prefix Sum

//   let tot = arr.reduce((a, b) => a + b, 0);
//   let lsum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let rsum = tot - lsum - arr[i];

//     if (lsum === rsum) {
//       return i;
//     }

//     lsum += arr[i];
//   }
//   return -1;
// }

// console.log(solve([1, 2, 3, 4, 2, 3, 1]));
// console.log(solve([6, 7, 1, 2, 3, 4, 2, 3, 1, 6, 1]));

// // Q17) Returns an object containing the count of each character in a string

// function solve(str) {
//   let counts = {};

//   for (let char of str) {
//     counts[char] = (counts[char] || 0) + 1;
//   }

//   return counts;
// }

// console.log(solve("asddfgjhk"));

// Q18) Alternates the case of each character in the string
// Converts uppercase to lowercase and vice versa

function solve(str) {
  return str
    .split("")
    .map((s) => (s === s.toUpperCase() ? s.toLowerCase() : s.toUpperCase()))
    .join("");
}

console.log(solve("hELLO"));
