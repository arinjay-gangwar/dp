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

// function solve(str) {
//   let newStr = str.split(" ");
//   newStr = newStr.map((a) => a[0].toUpperCase() + a.slice(1));
//   return newStr.join(" ");
// }

// console.log(solve("this is a string boss"));

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

// console.log(solve([10, 343445353, 3453445, 3453545353453]));

// function solve(arr) {
//   return arr.reduce((a, b) => a ^ b, 0);
// }

// console.log(solve([1, 2, 1, 3, 4, 1, 5]));
// console.log(solve([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));

// function solve(arr, tot) {
//   let nums = [];

//   function track(start, sum) {
//     if (sum === tot) return true;
//     if (sum > tot) return false;

//     for (let i = start; i < arr.length; i++) {
//       nums.push(arr[i]);
//       if (track(i + 1, sum + arr[i])) return true;
//       nums.pop();
//     }

//     return false;
//   }

//   return track(0, 0) ? nums : -1;
// }

// console.log(solve([1, 2, 3, 4, 2, 1, 3, 5], 9));

// function solve(arr, target) {
//   // for (let i = 0; i < arr.length; i++) {
//   //   for (let j = i + 1; j < arr.length; j++) {
//   //     if (arr[i] + arr[j] === target) {
//   //       return [i, j];
//   //     }
//   //   }
//   // }

//   let lookup = {};

//   for (let i = 0; i < arr.length; i++) {
//     let diff = target - arr[i];

//     if (lookup.hasOwnProperty(diff)) {
//       return [lookup[diff], i];
//     }

//     lookup[arr[i]] = i;
//   }
// }

// console.log(solve([1, 2, 3, 4, 5, 6, 7, 8], 11));

// function solve(arr, k) {
//   if (k <= 0 || k > arr.length) return "";

//   let longest = "";

//   for (let i = 0; i <= arr.length - k; i++) {
//     let temp = "";

//     for (let j = i; j < i + k; j++) {
//       temp += arr[j];
//     }

//     if (temp.length > longest.length) {
//       longest = temp;
//     }
//   }

//   return longest;
// }

// console.log(solve(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2));
// console.log(
//   solve(
//     ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"],
//     2
//   )
// );

function solve(str) {
  let word = "";
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

  return arr;
}

console.log(solve("This is a Sentence"));
