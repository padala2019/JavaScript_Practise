/* 9. How do you reverse an array */

function reverseArray(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    //newArr.push(arr[i]);
    //console.log((newArr[newArr.length] = arr[i]));
    newArr[newArr.length] = arr[i];
  }
  return newArr;
}
let arr = ["1", "2", "3", "4", "5"];
console.log("Reverse Array:", reverseArray(arr));
