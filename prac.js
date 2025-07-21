// function solve(str) {
//   return str
//     .split("")
//     .map((s) => (s === s.toUpperCase() ? s.toLowerCase() : s.toUpperCase()))
//     .join("");
// }

// console.log(solve("tHIS IS A aLT cASE sTRING aND tHIS iS fUN"));

// function solve(arr) {
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

//   let total = arr.reduce((a, b) => a + b, 0);
//   let lsum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let rsum = total - lsum - arr[i];

//     if (lsum === rsum) {
//       return i;
//     }

//     lsum += arr[i];
//   }

//   return -1;
// }

// console.log(solve([1, 2, 3, 4, 5, 3, 4, 2, 1]));

// function solve(str) {
//   let nstr = str.split(" ");
//   nstr = nstr.map((a) => a[0].toUpperCase() + a.slice(1));
//   return nstr.join(" ");
// }

// console.log(solve("this is a string"));

// function solve(arr) {
//   if (!arr || arr.length === 0) return [];

//   let l = -Infinity;
//   let sl = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > l) {
//       sl = l;
//       l = arr[i];
//     } else if (arr[i] < l && arr[i] > sl) {
//       sl = arr[i];
//     }
//   }

//   return sl === -Infinity ? [l, null] : [l, sl];
// }

// console.log(
//   solve([1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])
// );

// function solve(arr, k) {
//   // if (k <= 0 || k > arr.length) return "";

//   // let longest = "";

//   // for (let i = 0; i < arr.length - k; i++) {
//   //   let temp = "";
//   //   for (let j = i; j < i + k; j++) {
//   //     temp += arr[j];
//   //   }

//   //   if (temp.length > longest.length) {
//   //     longest = temp;
//   //   }
//   // }

//   // return longest;

//   if (k <= 0 || k > arr.length) return "";

//   const lengths = arr.map((s) => s.length);
//   let currentSum = 0,
//     maxSum = 0,
//     maxIndex = 0;

//   for (let i = 0; i < k; i++) {
//     currentSum += lengths[i];
//   }

//   maxSum = currentSum;

//   for (let i = 1; i <= arr.length; i++) {
//     currentSum = currentSum - lengths[i - 1] + lengths[i + k - 1];

//     if (currentSum > maxSum) {
//       maxSum = currentSum;
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

// function solve(s) {
//   // let nset = new Set();
//   // let maxLength = 0,
//   //   start = 0;

//   // for (let end = 0; end < s.length; end++) {
//   //   while (nset.has(s[end])) {
//   //     nset.delete(s[start]);
//   //     start++;
//   //   }
//   //   nset.add(s[end]);
//   //   maxLength = Math.max(maxLength, end - start + 1);
//   // }

//   // return maxLength;

//   let nmap = new Map();
//   let maxLength = 0,
//     start = 0;

//   for (let end = 0; end < s.length; end++) {
//     let char = s[end];

//     if (nmap.has(char) && nmap.get(char) >= start) {
//       start = nmap.get(char) + 1;
//     }

//     nmap.set(char, end);

//     maxLength = Math.max(maxLength, end - start + 1);
//   }

//   return maxLength;
// }

// console.log(solve("abcbccabab"));
// console.log(solve("bbbbb"));
// console.log(solve("pwwkew"));
// console.log(solve(""));
// console.log(solve("dvdf"));

// function solve(arr) {
//   if (!arr || arr.length === 0) return [];

//   let s = Infinity;
//   let ss = Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < s) {
//       ss = s;
//       s = arr[i];
//     } else if (arr[i] > s && arr[i] < ss) {
//       ss = arr[i];
//     }
//   }

//   return ss === Infinity ? [s, null] : [s, ss];
// }

// console.log(
//   solve([1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])
// );

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

//   return minLength === Infinity ? 0 : minLength;
// }

// console.log(solve([2, 1, 5, 2, 3, 2], 7));

// function solve(arr, k) {
//   if (k <= 0 || k > arr.length) return null;

//   let currentSum = 0,
//     maxSum = 0;

//   for (let i = 0; i < k; i++) {
//     currentSum += arr[i];
//   }

//   maxSum = currentSum;

//   for (let i = k; i < arr.length; i++) {
//     currentSum = currentSum - arr[i - k] + arr[i];

//     if (currentSum > maxSum) {
//       maxSum = currentSum;
//     }
//   }

//   return maxSum;
// }

// console.log(solve([2, 1, 5, 1, 3, 2], 3));

// function solve(str) {
//   let word = "";
//   let arr = [];

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== " ") {
//       word += str[i];
//     }

//     if (str[i] === " ") {
//       arr.push(word);
//       word = "";
//     }
//   }
//   arr.push(word);

//   return arr;
// }

// console.log(solve("This is a Sentence"));

// function solve(str) {
//   let nstr = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     nstr += str[i];
//   }

//   return nstr;
// }

// console.log(solve("hello"));

// function solve(arr) {
//   return arr.reduce((a, b) => a ^ b, 0);
// }

// console.log(solve([1, 2, 1, 3, 4, 1, 5]));
// console.log(solve([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));

// function solve(arr, target) {
//   let num = [];

//   function track(start, sum) {
//     if (sum === target) return true;
//     if (sum > target) return false;

//     for (let i = start; i < arr.length; i++) {
//       num.push(arr[i]);
//       if (track(i + 1, sum + arr[i])) return true;
//       num.pop();
//     }

//     return false;
//   }

//   return track(0, 0) ? num : -1;
// }

// console.log(solve([1, 2, 3, 4, 2, 1, 3, 5], 9));

// function solve(arr, tot) {
//   // for (let i = 0; i < arr.length; i++) {
//   //   for (let j = i + 1; j < arr.length; j++) {
//   //     if (arr[i] + arr[j] === tot) {
//   //       return [i, j];
//   //     }
//   //   }
//   // }

//   let lookup = {};

//   for (let i = 0; i < arr.length; i++) {
//     let diff = tot - arr[i];

//     if (lookup.hasOwnProperty(diff)) {
//       return [lookup[diff], i];
//     }

//     lookup[arr[i]] = i;
//   }
// }

// console.log(solve([3, 2, 8, 3, 7, 9], 15));
