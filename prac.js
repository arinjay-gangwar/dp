// function solve(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let left = arr.slice(0, i);
//     let right = arr.slice(i + 1);

//     let lsum = left.reduce((a, b) => a + b, 0);
//     let rsum = right.reduce((a, b) => a + b, 0);

//     if (lsum === rsum) {
//       return i;
//     }
//   }
//   return -1;
// }

// function solve(arr) {
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

// function solve2(str) {
//   let nstr = str.split(" ");
//   nstr = nstr.map((s) => s[0].toUpperCase() + s.slice(1));
//   return nstr.join(" ");
// }

// console.log(solve2("this is a sentence"));

// function solve3(arr) {
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

// console.log(solve3([1, 2, 3, 4, 5, 8, 7, 6, 9]));

// function solve4(arr) {
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

// console.log(solve4([10, 343445353, 3453445, 3453545353453]));

function solve5(arr, k) {
  // if (k <= 0 || k > arr.length) return "";

  // let longest = "";

  // for (let i = 0; i <= arr.length - k; i++) {
  //   let temp = "";
  //   for (let j = i; j < i + k; j++) {
  //     temp += arr[j];
  //   }

  //   if (temp.length > longest.length) {
  //     longest = temp;
  //   }
  // }

  // return longest;

  if (k <= 0 || k > arr.length) return "";

  let curSum = 0,
    maxSum = 0,
    maxIdx = 0;

  const lengths = arr.map((s) => s.length);

  for (let i = 0; i < k; i++) {
    curSum += lengths[i];
  }

  maxSum = curSum;

  for (let i = 1; i <= arr.length - k; i++) {
    curSum = curSum - lengths[i - 1] + lengths[i + k - 1];

    if (curSum > maxSum) {
      maxSum = curSum;
      maxIdx = i;
    }
  }

  return arr.slice(maxIdx, maxIdx + k).join("");
}

console.log(
  solve5(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2)
);
console.log(
  solve5(
    ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"],
    2
  )
);
