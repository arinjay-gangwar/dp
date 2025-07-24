// Insertion Sort (Classic Shifting Style)
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
}

// Swap-Based (Bubble-Style Insertion)
// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = i; j > 0 && arr[j - 1] > arr[j]; j--) {
//       let temp = arr[j];
//       arr[j] = arr[j - 1];
//       arr[j - 1] = temp;
//     }
//   }
//   return arr;
// }

console.log(
  insertionSort([10, 343445353, 3453445, 3453545353453, 3, 7, 2, 1, 4])
);
