/* 8.How do you total all of the matching integer elements in an array */

function matchingTotalIntegerElements(arr) {
  let count = {};
  for (const element of arr) {
    count[element] = (count[element] || 0) + 1;
  }
  return count;
}

let arrElemnts = ["1", "2", "3", "4", "2", "5", "3"];
console.log(
  "Total matching Integer Elements:",
  matchingTotalIntegerElements(arrElemnts)
);
