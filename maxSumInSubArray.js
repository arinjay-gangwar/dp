// Finds the maximum sum of any subarray of size k in the given array

function maxSumInSubArray(arr, k) {
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

console.log(maxSumInSubArray([2, 1, 5, 1, 3, 2], 3));
console.log(maxSumInSubArray([1, 4, 3, 5, 7, 6, 9], 2));
