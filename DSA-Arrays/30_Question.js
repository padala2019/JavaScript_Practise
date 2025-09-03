// All Questions list available in README.MD File in this path
/* 8. Find the missing number from 1 to N. */
function findMissingNumber(arr) {
  const n = arr.length + 1; // Assuming the array should contain numbers from 1 to n
  const expectedSum = (n * (n + 1)) / 2;

  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }

  return expectedSum - actualSum;
}

const numbers = [1, 3, 4, 5, 7]; // Missing 3
const missingNumber = findMissingNumber(numbers);
console.log("The missing number is:", missingNumber); // Output: The missing number is: 3
