/** Finds a subset of the array whose elements add up to the target. */

function subsetsuminarray(arr, tot) {
  var num = [];

  function track(start, sum) {
    if (sum === tot) return true;
    if (sum > tot) return false;

    for (let i = start; i < arr.length; i++) {
      num.push(arr[i]);
      if (track(i + 1, sum + arr[i])) return true;
      num.pop();
    }

    return false;
  }

  return track(0, 0) ? num : -1;
}

console.log(subsetsuminarray([1, 2, 3, 4, 2, 1, 3, 5], 9));
