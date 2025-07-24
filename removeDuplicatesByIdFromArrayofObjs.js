// Remove Duplicates by ID from an Array of Objects

function removeDuplicatesByIdFromArrayofObjs(arr) {
  const seen = new Set();
  const result = [];

  for (const item of arr) {
    if (!seen.has(item.id)) {
      seen.add(item.id);
      result.push(item);
    }
  }

  return result;
}

const input = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 1, name: "Alice" },
  { id: 3, name: "Charlie" },
];

console.log(removeDuplicatesByIdFromArrayofObjs(input));
