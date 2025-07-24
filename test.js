// Q13) Finds the largest and second largest distinct values from an array of integers

function solve(arr) {
  if (!arr || arr.length === 0) return null;

  let l = -Infinity;
  let sl = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > l) {
      sl = l;
      l = arr[i];
    } else if (arr[i] < l && arr[i] > sl) sl = arr[i];
  }

  return sl === -Infinity ? [l, null] : [l, sl];
}

console.log(solve([2, 1, 3, 4, 6, 5, 8, 9, 7]));

// Q14) Converts a clean string to Title Case (first letter of each word capitalized)
// Assumes input has no extra spaces or punctuation

function solve2(str) {
  return str
    .split(" ")
    .map((a) => a[0].toUpperCase() + a.slice(1))
    .join(" ");
}

console.log(solve2("this is a sentence"));

// Q10) Finds the longest word in a sentence (ignores punctuation)
// Returns the first longest word in case of a tie

function solve3(str) {
  // // First Appraoch

  // let words = str.split(" ");
  // let longIndex = 0,
  //   longest = "";

  // for (let i = 0; i < words.length; i++) {
  //   let temp = words[i];

  //   if (temp.length > longest.length) {
  //     longest = temp;
  //     longIndex = i;
  //   }
  // }

  // return words[longIndex];

  // Second Approach

  return str.split(" ").reduce((a, b) => (a.length > b.length ? a : b));
}

console.log(solve3("this is a sentence"));

// Q1) Find two distinct elements in the array whose sum equals the target, and return their indices.

function solve4(arr, target) {
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

console.log(solve4([2, 1, 3, 4, 6, 5, 8, 9, 7], 15));

// Q5) Manually splits a string using space as the delimiter (mimics split(" "))

function solve5(str) {
  let word = "";
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") word += str[i];

    if (str[i] === " ") {
      arr.push(word);
      word = "";
    }
  }
  arr.push(word);

  return arr;
}

console.log(solve5("Hello World"));

// Q15) Returns true if the number is a palindrome, false otherwise

function solve6(num) {
  if (num < 0) return false;

  let rev = 0;
  let org = num;

  while (num > 0) {
    let digit = num % 10;
    rev = rev * 10 + digit;
    num = Math.floor(num / 10);
  }

  return org === rev;
}

console.log(solve6(1221));

// Q11) Finds the longest string formed by concatenating k consecutive strings from an array

function solve7(arr, k) {
  // // Approach one
  // if (k <= 0 || k > arr.length) return "";
  // let longest = "";
  // for (let i = 0; i < arr.length - k; i++) {
  //   let temp = "";
  //   for (let j = i; j < i + k; j++) temp += arr[j];
  //   if (temp.length > longest.length) longest = temp;
  // }
  // return longest;

  // Appraoch two

  if (k <= 0 || k > arr.length) return "";

  const lengths = arr.map((s) => s.length);
  let currentLen = 0,
    maxLength = 0,
    maxIndex = 0;

  for (let i = 0; i < k; i++) currentLen += lengths[i];
  maxLength = currentLen;

  for (let i = 1; i <= arr.length - k; i++) {
    currentLen += lengths[i + k - 1] - lengths[i - 1];

    if (currentLen > maxLength) {
      maxLength = currentLen;
      maxIndex = i;
    }
  }

  return arr.slice(maxIndex, maxIndex + k).join("");
}

console.log(
  solve7(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2)
);
console.log(
  solve7(
    ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"],
    2
  )
);

// Q6) Manually reverses a string (mimics str.split("").reverse().join(""))

function solve8(str) {
  if (!str) return null;

  let rev = "";

  for (let i = str.length - 1; i >= 0; i--) rev += str[i];

  return rev;
}

console.log(solve8("olleH"));

// Q7) Finds the maximum sum of any subarray of size k in the given array

function solve9(arr, k) {
  if (k <= 0 || k > arr.length) return null;

  let currentSum = 0,
    maxSum = 0;

  for (let i = 0; i < k; i++) currentSum += arr[i];

  maxSum = currentSum;

  for (let i = k; i < arr.length; i++) {
    currentSum += arr[i] - arr[i - k];

    if (currentSum > maxSum) maxSum = currentSum;
  }

  return maxSum;
}

console.log(solve9([2, 1, 5, 1, 3, 2], 3));
console.log(solve9([1, 4, 3, 5, 7, 6, 9], 2));

// Q18) Alternates the case of each character in the string
// Converts uppercase to lowercase and vice versa

function solve10(str) {
  return str
    .split("")
    .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
    .join("");
}

console.log(solve10("hELLO wORLD"));

// Q9) Finds the lowest and second lowest distinct values from an array of integers

function solve11(arr) {
  if (!arr || arr.length === 0) return null;

  let s = Infinity;
  let ss = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < s) {
      ss = s;
      s = arr[i];
    } else if (arr[i] > s && arr[i] < ss) ss = arr[i];
  }

  return ss === Infinity ? [s, null] : [s, ss];
}

console.log(solve11([2, 1, 3, 4, 6, 5, 8, 9, 7]));

// Q17) Returns an object containing the count of each character in a string

function solve12(str) {
  let counts = {};

  for (let char of str) {
    counts[char] = (counts[char] || 0) + 1;
  }

  return counts;
}

console.log(solve12("arinjay"));

// Q2) Finds a subset of the array whose elements add up to the target

function solve13(arr, target) {
  let nums = [];

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

console.log(solve13([1, 2, 3, 4, 2, 1, 3, 5], 9));

// Q16) Returns the index where the array is balanced (left sum == right sum), or -1 if not found
// arr[i] itself is not included in either sum (standard behavior)

function solve14(arr) {
  // // Bruteforce

  // for (let i = 0; i < arr.length; i++) {
  //   let left = arr.slice(0, i);
  //   let right = arr.slice(i + 1);

  //   let lsum = left.reduce((a, b) => a + b, 0);
  //   let rsum = right.reduce((a, b) => a + b, 0);

  //   if (lsum === rsum) return i;
  // }
  // return -1;

  // Optimal

  let totSum = arr.reduce((a, b) => a + b, 0);
  let lsum = 0;

  for (let i = 0; i < arr.length; i++) {
    let rsum = totSum - lsum - arr[i];

    if (lsum === rsum) return i;

    lsum += arr[i];
  }

  return -1;
}

console.log(solve14([1, 2, 3, 4, 2, 3, 1]));
console.log(solve14([6, 7, 1, 2, 3, 4, 2, 3, 1, 6, 1]));

// Q3) Returns true if the string is a palindrome, false otherwise

function solve15(str) {
  // // Approach one

  // return str === str.split("").reverse().join("");

  // Approach two

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}

console.log(solve15("madam"));
console.log(solve15("abcddcba"));
console.log(solve15("abcddcbaabd"));

// Q12) Finds the length of the longest substring without repeating characters
// Optionally, it can return the actual longest substring instead of just its length

function solve16(str) {
  // // Approach one using Set()

  // let nset = new Set();
  // let start = 0,
  //   maxLen = 0,
  //   maxIndex = 0;

  // for (let end = 0; end < str.length; end++) {
  //   while (nset.has(str[end])) {
  //     nset.delete(str[start]);
  //     start++;
  //   }
  //   nset.add(str[end]);
  //   // maxLen = Math.max(maxLen, end - start + 1);
  //   if (end - start + 1 > maxLen) {
  //     maxLen = end - start + 1;
  //     maxIndex = start;
  //   }
  // }

  // // return maxLen;
  // return str.slice(maxIndex, maxIndex + maxLen);

  // Approach two using Map()

  let nmap = new Map();
  let start = 0,
    maxLen = 0,
    maxIndex = 0;

  for (end = 0; end < str.length; end++) {
    let char = str[end];

    if (nmap.has(char) && nmap.get(char) >= start) {
      start = nmap.get(char) + 1;
    }

    nmap.set(char, end);

    // maxLen = Math.max(maxLen, end - start + 1);
    if (end - start + 1 > maxLen) {
      maxLen = end - start + 1;
      maxIndex = start;
    }
  }

  // return maxLen;
  return str.slice(maxIndex, maxIndex + maxLen);
}

console.log(solve16("abcbccabab"));
console.log(solve16("bbbbb"));
console.log(solve16("pwwkew"));
console.log(solve16(""));
console.log(solve16("dvdf"));

// Q8) Finds the length of the smallest subarray with sum ≥ target

function solve17(arr, target) {
  let currentSum = 0,
    start = 0,
    minLength = Infinity;

  for (let end = 0; end < arr.length; end++) {
    currentSum += arr[end];

    while (currentSum >= target) {
      minLength = Math.min(minLength, end - start + 1);
      currentSum -= arr[start];
      start++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

console.log(solve17([2, 1, 5, 2, 3, 2], 7));

// Q4) Finds the number that appears an odd number of times in the array
// Assumes exactly one such number, and all others appear an even number of times

function solve18(arr) {
  return arr.reduce((a, b) => a ^ b, 0);
}

console.log(solve18([1, 2, 2, 1, 3])); // 3
console.log(solve18([7, 3, 7, 5, 5, 3, 9])); // 9
console.log(solve18([4, 4, 6, 6, 9, 9, 2, 2, 11])); // 11
console.log(solve18([42])); // 42
console.log(solve18([1, 1, 2, 2, 3, 3])); // 0 ❌ No number appears an odd number of times
