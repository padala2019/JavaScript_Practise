//let arr = [1, 6, 4, 3, 2, 4, 5, 6];

//const numbers = [1, 3, 5, 7, 9, 11];

// Find minimum value:
/* const min = numbers.reduce((accumulator, currentValue) => {
  // If the value of "accumulator" is less than "currentValue"
  // return the "accumulator", else return the "currentValue":
  return accumulator > currentValue ? accumulator : currentValue;
});

// Log the result:
console.log("min:", min); */

/* function firstOccuerence(arr) {
  let map = {};
  for (let i = arr.length - 1; i >= 0; i--) {
    map[arr[i]] = (map[arr[i]] || 0) + 1;
    // if (map.has(arr[i])) {
    //   console.log("Element - Found");
    // } else {
    //   console.log("Element - Not Found");
    //   map.add(arr[i]);
    // }
  }
  console.log("Map:", map);
  for (let i = arr.length - 1; i >= 0; i--) {
    if (map[arr[i]] === 1) {
      return arr[i];
    }
  }
}
let result = firstOccuerence(arr);
console.log("RESULT:", result); */

/* const multiply = (x) => (y) => x * y;
const double = multiply(2);
const triple = multiply(3);
const numbers1 = [1, 2, 3, 4];
const doubledNumbers = numbers1.map(double); // [2, 4, 6, 8]
console.log(doubledNumbers);
const tripledNumbers = numbers1.map(triple); // [3, 6, 9, 12]
console.log(tripledNumbers); */

// Find Second Largest Number from given array.
/* let a = [10, 20, 4, 45, 99, 109];
a.sort((a, b) => b - a);
console.log("A:", a);
let first = a[0];
let res = null;

for (let i = 1; i < a.length; i++) {
  if (a[i] < first) {
    res = a[i];
    break;
  }
}
console.log(res !== null ? res : "No second largest element");
 */

const arrS = [3, 5, 4, 1, 9];
const sortedArr = [...arrS].sort((a, b) => b - a);
console.log("Sort:", sortedArr);
