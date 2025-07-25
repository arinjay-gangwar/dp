// Merges and sorts two sorted arrays

function mergeAndSortTwoSortedArrays(arr1, arr2) {
  const resultArr = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      resultArr.push(arr1[i]);
      i++;
    } else {
      resultArr.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    resultArr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    resultArr.push(arr2[j]);
    j++;
  }

  return resultArr;
}

console.log(mergeAndSortTwoSortedArrays([1, 3, 5], [2, 4, 6, 7]));
