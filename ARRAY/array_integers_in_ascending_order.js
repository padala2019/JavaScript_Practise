/* 11. How do you sort an array of integers in ascending order*/

function arraySorting(arr) {
  let temp = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      i = -1;
    }
  }
  return arr;

  // Another way
  // for (var i = 1; i < Arr.length; i++) {
  //   for (var j = 0; j < i; j++) {
  //     if (Arr[i] < Arr[j]) {
  //       let x = Arr[i];
  //       Arr[i] = Arr[j];
  //       Arr[j] = x;
  //     }
  //   }
  // }
  // return Arr;
}
let arr = [1, 2, 99, 9, 8, 7, 6, 0, 5, 4, 3];
// console.log(
//   "Array Sort:",
//   arr.sort((a, b) => a - b)
// );

console.log("Array Sort:", arraySorting(arr));
