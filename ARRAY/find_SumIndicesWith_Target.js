/* findSumIndicesWith_Target */

function findSumIndices(arr, target) {
  let currentSum = 0;
  let startIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum = currentSum + arr[i];
    if (currentSum > target) {
      currentSum = currentSum - arr[startIndex];
      startIndex++;
    }
    if (currentSum === target) {
      return [startIndex, i];
    }
  }
  return [-1];
}

const numbers = [2, 7, 11, 15];
const targetSum = 9;
console.log("The Indices:", findSumIndices(numbers, targetSum));
