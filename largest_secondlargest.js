function largest_secondlargest(arr) {
  if (!arr || arr.length === 0) return [];

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest === -Infinity
    ? [largest, null]
    : [largest, secondLargest];
}

console.log(
  largest_secondlargest([
    1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ])
);
