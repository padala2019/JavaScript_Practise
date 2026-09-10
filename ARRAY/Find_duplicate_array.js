/* Find duplicate array */
function findDuplicates(arr) {
  // code here
  const storage = new Map();
  const duplicates = [];

  for (const n of arr) {
    if (storage.has(n)) {
      duplicates.push(n);
    } else {
      storage.set(n, true);
    }
  }

  return duplicates;
}
const arr = [2, 3, 1, 2, 3];

const duplicate = findDuplicates(arr);
console.log("Array Duplicate:", duplicate);
