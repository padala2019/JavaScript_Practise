/* how to count repeated items in a string */

function countRepeatedItems(str) {
  const charCounts = {};
  for (const char of str) {
    charCounts[char] = (charCounts[char] || 0) + 1;
  }
  return charCounts;
}

const myString = "abracadabra";
const counts = countRepeatedItems(myString);
console.log(counts); // Output: { a: 5, b: 2, r: 2, c: 1, d: 1 }
