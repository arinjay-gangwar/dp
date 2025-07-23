// Finds the length of the smallest subarray with sum ≥ target

function maxSumInSmallestSubArray(arr, target) {
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

console.log(maxSumInSmallestSubArray([2, 1, 5, 2, 3, 2], 7));
