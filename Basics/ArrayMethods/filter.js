let arr = [1, 2, 3, 4, 2, 5, 4, 1, 3, 8, 9];
//let arr = ["a", "b", "c", "d", "a", "e", "b", "c", "a"];

let arra1 = [1, 2, 4, 5, 7, 8];
let arr2 = [2, 5, 3, 9, 4, 11];

let combinedArray = [...arra1, ...arr2];
console.log("CombinedArray:", combinedArray);

let sortTedArray = combinedArray.sort((a, b) => {
  a - b;
});
let removeDuplicate = [...new Set(sortTedArray)];
console.log("removeDuplicate:", removeDuplicate);

let filterArr = combinedArray.filter(
  (item, index) => combinedArray.indexOf(item) == index,
);
console.log("FilterArray:", filterArr);

const str = "abcd";
const strArr = ["b", "b", "c", "d"];

let strSplit = str.split(""); // Convert String to Array Elements
console.log("strSplit:", strSplit); // [ 'a', 'b', 'c', 'd' ]
//console.log("strSplit_Reverse:", strSplit.reverse());
let revers = strSplit.reverse();
console.log("revers:", revers); // [ 'd', 'c', 'b', 'a' ]
console.log("strSplit_Reverse_Join:", revers.join("")); // dcba

let strJoin = strArr.join(""); // Convert Array Elements to String
console.log("strJoin:", strJoin); // bbcd

// let arr = "abcd";
// console.log("Str Length:", arr.length);
// console.log("Str Length:", arr[4]);
// console.log("Str Length:", arr[3]);

// function reverseString() {
//   let rev = "";
//   // join('')=>  Adds all the elements of an array into a string,
//   for (let i = arr.length - 1; i >= 0; i--) {
//     rev += arr[i];
//     console.log("rev:", rev);
//   }
//   return rev;
// }

// console.log("Reverse:", reverseString(arr));

// const objStr = { r: 2, a: 2, c: 2, e: 1 };
// console.log("CharCount:", objStr["e"]);

// const items = [
//   { name: "venilla", price: 2.0, quatity: 5 },
//   { name: "bananna", price: 5.0, quatity: 4 },
//   { name: "lemon", price: 6.0, quatity: 10 },
// ];

// function calToatalVal() {
//   let total = 0;
//   items.map((item, index) => {
//     total += item.price * item.quatity;
//     //total += itemVal;
//   });
//   return total;
// }
// const getTotal = calToatalVal();
// console.log("getTotal:", `${"$"}${getTotal}`);
