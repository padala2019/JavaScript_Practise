// All Questions list available in README.MD File in this path
/* 8. Find the missing number from 1 to N. */
function findMissingNumber(arr) {
  const n = arr.length + 1; // Assuming the array should contain numbers from 1 to n
  const expectedSum = (n * (n + 1)) / 2;
  console.log("expectedSum:", expectedSum);

  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }
  console.log("actualSum:", actualSum);
  return expectedSum - actualSum;
}

const numbers = [1, 2, 4, 5];
const missingNumber = findMissingNumber(numbers);
console.log("The missing number is:", missingNumber); // Output: The missing number is: 3

function findMultipleMissingNumbers(arr) {
  //const min = Math.min(...arr);
  let arrSort = arr.sort((a, b) => a - b);
  console.log("arrSort:", arrSort);

  //const max = Math.max(...arr);
  let min = arrSort[0];
  console.log("min:", min);
  const max = arrSort[arrSort.length - 1];
  console.log("max:", max);
  const numSet = new Set(arr);
  console.log("numSet:", numSet);
  const missingNumbers = [];

  // Loop through the entire range from min to max
  for (let i = min; i <= max; i++) {
    if (!numSet.has(i)) {
      missingNumbers.push(i);
    }
  }

  return missingNumbers;
}

// Example usage:
const mixedNums = [2, 3, 6, 7, 10]; // Missing: 4, 5, 8, 9
console.log(findMultipleMissingNumbers(mixedNums)); // Output: [4, 5, 8, 9]
