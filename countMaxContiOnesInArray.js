// Counts the maximum consecutive 1's in an array

function countMaxContiOnesInArray(arr) {
  let count = 0,
    max = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count++;
      max = Math.max(max, count);
    } else count = 0;
  }

  return max;
}

console.log(countMaxContiOnesInArray([1, 1, 0, 1, 1, 1]));
console.log(countMaxContiOnesInArray([0, 0, 0]));
console.log(countMaxContiOnesInArray([1, 1, 1, 1]));
