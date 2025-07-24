// Remove Duplicates from an Array

function removeDuplicates(arr) {
  // Option 1: Using Set to automatically remove duplicates
  // return Array.from(new Set(arr)); // Converts Set back to array

  // Option 2: Spread operator with Set
  // return [...new Set(arr)]; // Cleaner and more idiomatic

  const result = [];
  const seen = {};

  for (const value of arr) {
    if (!seen[value]) {
      seen[value] = true;
      result.push(value);
    }
  }

  return result;
}

console.log(removeDuplicates([1, 1, 2, 3, 3, 4, 5, 6, 7, 7]));
