// Finds the longest string formed by concatenating k consecutive strings from an array

function longestconsecutivestring(arr, k) {
  if (k <= 0 || k > arr.length) return "";

  let longest = "";

  for (let i = 0; i <= arr.length - k; i++) {
    let temp = "";
    for (let j = i; j < i + k; j++) {
      temp += arr[j];
    }

    if (temp.length > longest.length) {
      longest = temp;
    }
  }

  return longest;
}

console.log(
  longestconsecutivestring(
    ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"],
    2
  )
);
console.log(
  longestconsecutivestring(
    ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"],
    2
  )
);
