// Finds the lowest and second lowest distinct values from an array of integers

function lowest_secondlowest(arr) {
  if (!arr || arr.length === 0) return [];

  var lowest = Infinity;
  var secondLowest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < lowest) {
      secondLowest = lowest;
      lowest = arr[i];
    } else if (arr[i] > lowest && arr[i] < secondLowest) {
      secondLowest = arr[i];
    }
  }

  return secondLowest === Infinity ? [lowest, null] : [lowest, secondLowest];
}

console.log(lowest_secondlowest([10, 343445353, 3453445, 3453545353453]));
