// function solve(str) {
//   let newStr = str.split(" ");
//   newStr = newStr.map((a) => a[0].toUpperCase() + a.slice(1));
//   return newStr.join(" ");
// }

// console.log(solve("This is a string"));

// function solve(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }

// function solve(arr, target) {
//   let lookup = {};

//   for (let i = 0; i < arr.length; i++) {
//     let diff = target - arr[i];

//     if (lookup.hasOwnProperty(diff)) {
//       return [lookup[diff], i];
//     }

//     lookup[arr[i]] = i;
//   }
// }

// console.log(solve([3, 2, 8, 3], 5));

// function solve(arr, tot) {
//   let ans = [];

//   function track(start, sum) {
//     if (sum === tot) return true;
//     if (sum > tot) return false;

//     for (let i = start; i < arr.length; i++) {
//       ans.push(arr[i]);
//       if (track(i + 1, sum + arr[i])) return true;
//       ans.pop();
//     }

//     return false;
//   }

//   return track(0, 0) ? ans : -1;
// }

// console.log(solve([1, 2, 3, 4, 2, 1, 3, 5], 9));

// function solve(arr) {
//   return arr.reduce((a, b) => a ^ b, 0);
// }

// console.log(solve([1, 2, 1, 3, 4, 1, 5]));
// console.log(solve([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));

// function solve(arr) {
//   let l = Infinity;
//   let sl = Infinity;

//   if (!arr || arr.length === 0) return [];

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

// console.log(solve([10, 343445353, 3453445, 3453545353453]));

function solve(arr) {
  // for (let i = 0; i < arr.length; i++) {
  //   let left = arr.slice(0, i);
  //   let right = arr.slice(i + 1);

  //   let lsum = left.reduce((a, b) => a + b, 0);
  //   let rsum = right.reduce((a, b) => a + b, 0);

  //   if (lsum === rsum) {
  //     return i;
  //   }

  //   return -1;
  // }

  let totalSum = arr.reduce((a, b) => a + b, 0);
  let lsum = 0;

  for (let i = 0; i < arr.length; i++) {
    let rsum = totalSum - lsum - arr[i];

    if (lsum === rsum) {
      return i;
    }

    lsum = lsum + arr[i];
  }

  return -1;
}

console.log(solve([1, 2, 3, 4, 2, 3, 1]));
