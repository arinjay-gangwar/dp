function maxSumInSmallestSubArray(arr, target) {
  let currentSum = 0,
    start = 0,
    minLength = Infinity;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    while (currentSum >= target) {
      minLength = Math.min(minLength, i - start + 1);
      currentSum -= arr[start];
      start++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

console.log(maxSumInSmallestSubArray([2, 1, 5, 2, 3, 2], 7));
