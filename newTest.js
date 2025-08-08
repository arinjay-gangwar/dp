// Given a deeply nested object, return a flat object where the keys are the paths in dot notation

function flatObj(obj, pkey = "", res = {}) {
  for (const key in obj) {
    const fullKey = pkey ? `${pkey}.${key}` : key;

    if (
      typeof obj[key] === "object" &&
      obj[key] !== null &&
      !Array.isArray(obj[key])
    ) {
      flatObj(obj[key], fullKey, res);
    } else {
      res[fullKey] = obj[key];
    }
  }

  return res;
}

const nested = {
  a: { b: { c: 1, d: 2 } },
  x: 3,
};

console.log(flatObj(nested));

// Implementation of Bubble Sort algorithm

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }

  return arr;
}

console.log(bubbleSort([12, 43, 54, 6, 587, 23, 63]));

// Character Occurrence

function solve(str) {
  let count = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    count[char] = (count[char] || 0) + 1;
  }

  return count;
}

console.log(solve("arinjay"));

// Palindrome string

function solve2(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}

console.log(solve2("madam"));
console.log(solve2("abccba"));
console.log(solve2("abcdcbad"));
