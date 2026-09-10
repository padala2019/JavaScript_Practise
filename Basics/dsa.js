/* maximum sum of any contiguous subarray of size k */
let arr1 = [2, 3, 4, 1, 5];
let targetEle = 3;
function maxSumSubArray(arr1, n) {
  let maxSum = 0;
  let CurrentSum = 0;
  let left = 0;

  for (let right = 0; right < arr1.length; right++) {
    CurrentSum += arr1[right];
    if (right - left + 1 === n) {
      console.log("CurrentSum_1:", CurrentSum);
      maxSum = Math.max(CurrentSum, maxSum);
      console.log("maxSum_1:", maxSum);

      CurrentSum -= arr1[left];
      left++;
      console.log("before");
      console.log("right:", right);
      console.log("After");
    }
  }
  console.log("maxSum:", maxSum);

  console.log("CurrentSum:", CurrentSum);
  return maxSum;
}
let result1 = maxSumSubArray(arr1, targetEle);

/* Maximum Subarray Sum - Kadane's Algorithm */
const arr2 = [2, 3, -8, 7, -1, 2, 3];

function findMaximumSubArraySum(arr) {
  let currentSum = arr[0];
  let maxSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(currentSum + arr[i], arr[i]); // Key Point this line, check sum of Current + element, or Next Element
    console.log("cSum:", currentSum);
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
}

let result2 = findMaximumSubArraySum(arr);
console.log("result:", result2);

/* findSumIndicesWith_Target  or Two SUM */
let arr3 = [2, 3, 5, 8];
let target = 8;

function findTwoSum(arr, target) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], i);
  }
  console.log("MAP:", map);

  for (let i = 0; i < arr.length; i++) {
    let pairedToFind = target - arr[i];
    if (map.has(pairedToFind) && map.get(pairedToFind) !== i) {
      // map.get(pairedToFind) !== i // For avoid Duplicate from Given Input [7, 2, 12, 16];target = 14;
      return [i, map.get(pairedToFind)];
    }
  }
}

let result = findTwoSum(arr, target);
console.log("result:", result);

//Reverse an array in-place.
//Find the largest and smallest element.
//Check for duplicates in an array.
//Remove duplicates — return only unique values.
//Find the missing number from 1 to N.
