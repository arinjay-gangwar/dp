// Given an array of strings `arr` and an integer `k`,
// return the first longest string formed by concatenating `k` consecutive strings from the array.

// Using a sliding window on string lengths to avoid repeated joins.
// True O(n) single pass — optimal for large arrays and values of `k`.

function solve(arr, k) {
  if (k <= 0 || k > arr.length) return "";

  const lengths = arr.map((a) => a.length);
  let curSum = 0,
    maxSum = 0,
    maxIdx = 0;

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

console.log(solve(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2));
console.log(
  solve(
    ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"],
    2
  )
);
