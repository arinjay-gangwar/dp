function lowest_secondlowest(arr) {
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

  return [lowest, secondLowest];
}

console.log(lowest_secondlowest([10, 343445353, 3453445, 3453545353453]));
