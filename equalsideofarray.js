// Returns the index where the array is balanced (left sum == right sum), or -1 if not found
// arr[i] itself is not included in either sum (standard behavior)

function equalsideofarray(arr) {
  //   // Bruteforce -> TC : O(n^2)

  //   for (let i = 0; i < arr.length; i++) {
  //     var left = arr.slice(0, i);
  //     var right = arr.slice(i + 1);

  //     var lsum = left.reduce((a, b) => a + b, 0);
  //     var rsum = right.reduce((a, b) => a + b, 0);

  //     if (lsum === rsum) {
  //       return i;
  //     }
  //   }

  //   return -1;

  // Optimal (Running Sum Appraoch) -> TC -> O(n)

  var tot = arr.reduce((a, b) => a + b, 0);
  var lsum = 0;

  for (let i = 0; i < arr.length; i++) {
    var rsum = tot - lsum - arr[i];

    if (lsum === rsum) {
      return i;
    }

    lsum += arr[i];
  }

  return -1;
}

console.log(equalsideofarray([1, 2, 3, 4, 2, 3, 1]));
console.log(equalsideofarray([6, 7, 1, 2, 3, 4, 2, 3, 1, 6, 1]));
