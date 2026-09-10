/* 10. How do you find the maximum element in an array?*/

function findMaxElementGivenArray(arr) {
  // let maxEle = 0;
  let max = arr[0];
  let min = arr[0];
  console.log("Max:", max);

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    } else if (min > arr[i]) {
      min = arr[i];
    }
  }
  return [max, min];
}
let arr = [50, 60, 20, 10, 5, 2, 90, 120, 150, 1];
// console.log(
//   "Min Array:",
//   Math.min(...Arr) + "\n" + "Max Array:",
//   Math.max(...Arr)
// );
let res = findMaxElementGivenArray(arr);
console.log("Result:", res);
console.log("Find Max:", res[0] + ", " + "Min:", res[1]);
