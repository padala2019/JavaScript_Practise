/* const categories = ["Laptops", "watches", "TV", "mobiles", "Tablets"];
// O/P: Provide 10 records when user select any category from list with id, categoryName, price, quatity.

const productList = {
  id: 0,
  categoryName: "mobiles",
  price: 20,
  quantity: 3,
};

function getParticularProductData(catgry) {
  let results = [];
  for (let i = 0; i < 10; i++) {
    results.push({
      ...productList,
      id: i,
      categoryName: `${catgry}${i}`,
      price: 20 + i,
      quantity: 3,
    });
  }
  return results;
}
const getFinalVal = getParticularProductData(categories[2]);
console.log("getFinalData:", getFinalVal);
 */

// const input = [
//   [1, 2, 3],
//   [3, 2, 1],
//   [4, 5, 6],
//   [6, 5, 4],
//   [1, 1, 2],
// ];

/* const groupSimilarArrays = (arr) => {
  const map = new Map();

  for (const subArr of arr) {
    const sortedKey = subArr.sort((a, b) => a - b).toString();
    console.log("sortedKey:", sortedKey);

    if (!map.has(sortedKey)) {
      map.set(sortedKey, []);
    }
    map.get(sortedKey).push(subArr);
    console.log("map:", map.values());
  }
  return Array.from(map.values());
};

const result = groupSimilarArrays(input);
console.log("Result:", result); */
// result will be: [ [ [1, 2, 3], [3, 2, 1] ], [ [4, 5, 6], [6, 5, 4] ], [ [1, 1, 2] ] ]

/* const str = "i love @ india 22 in my % 42.2 percentage peoples #";

function findOutNumericNumbersFromString(str) {
  let arr = str.split(" ");
  let mainArr = [];
  console.log("Arr:", arr);
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      console.log("TRUE:", arr[i]);
      mainArr.push(arr[i]);
    } else {
      console.log("FALSE:", arr[i]);
    }
  }
  return mainArr;
}

let result = findOutNumericNumbersFromString(str);
console.log("result:", result[0]);
console.log("result:", result[1]); */

// const property = "ABC";
// const name = "Raveendra";

// const objNew = {
//   a: 100,
//   b: 200,
//   title: "My Nums",
// };
// multipleByTwo(objNew);
// function multipleByTwo(obj) {
//   for (const key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] *= 2;
//     }
//   }
// }
// console.log(objNew);

//const str = "i love @ india 22 in my % 42.2 percentage peoples #";

// const fast = new Promise((reject) =>
//   setTimeout(() => reject("Fast one!"), 500),
// );
// const slow = new Promise((resolve) =>
//   setTimeout(() => resolve("Slow one!"), 2000),
// );

// Promise.race([fast, slow]).then((result) => console.log(result)); // "Fast on

/* new Promise((resolve, reject) => {
  reject("Success!");
})
  .then((result) => {
    console.log(result); // Logs "Success!"
    //throw new Error("Something went wrong!"); // Jumps to the nearest handler
  })
  .then(() => {
    // This is SKIPPED because of the rejection above
    console.log("I will never run");
    throw new Error("Something went 1 wrong!");
  })
  .catch((error) => {
    // The closest rejection handler
    console.error("Caught_1:", error.message);
    //throw new Error("Something went 1 wrong!"); // Logs "Caught: Something went wrong!"
  })
  .then(() => {
    console.log("I will never run after catch");
  })
  .catch((error) => {
    // The closest rejection handler
    console.error("Caught:", error.message); // Logs "Caught: Something went wrong!"
  });
new Promise((resolve, reject) => {
  resolve("Sucess");
})
  .then(() => {
    throw new Error("Error ");
  })
  .catch(() => {}); */

// const arr = [1, 2, 3];
// const sum = arr.reduce((acc, num) => acc + num, 9);
// console.log(sum); // 6

// let person = {
//   name: "rahual",
//   age: 22,
//   printInfo() {
//     console.log(`Person name is ${this.name} age is: ${this.age}`);
//   },
// };
// person.printInfo();

// const obj = {
//   a: 1,
//   b: 2,
//   sum() {
//     return this.a + this.b;
//   },
// };
// const res = obj.sum();
// console.log("SUM:", res);

// const cart = [
//   { item: "Laptop", price: 1000 },
//   { item: "Mouse", price: 25 },
//   { item: "Keyboard", price: 75 },
// ];

// const totalSpent = cart.reduce((acc, currentItem) => {
//   console.log("acc:", acc);
//   console.log("currentItem:", currentItem);
//   return acc + currentItem.price;
// }, 0);

//console.log(totalSpent); // Output: 1100

// const resolvedPromise = Promise.resolve();

// // 1. Async/Await version
// async function testAsync() {
//   await resolvedPromise;
//   console.log("Async/Await finished"); // Scheduled as Microtask #1
// }

// // 2. Promise version
// resolvedPromise.then(() => {
//   console.log("Promise .then() finished"); // Scheduled as Microtask #2
// });

// testAsync();

// const arr = [1, 2, 3, 4];
// const result = arr.filter((num) => num % 2 !== 0).map((num) => num * 2);
// console.log(result);

// console.log(String([1, 2, 3]));

// const scores = [1, 2, 3];
// const updatedScores = [...scores, 4];
// console.log("scores:", scores);
// console.log("updatedScores:", updatedScores);

// let arrV = new Array(2).fill(2);

// console.log("Array:", arrV);

/* maximum sum of any contiguous subarray of size k */
// let arr = [2, 3, 4, 1, 5];
// let targetEle = 3;

// function maxSumSubArray(arr, n) {
//   let maxSum = 0;
//   let CurrentSum = 0;
//   let left = 0;
//   let right = 0;

//   for (let right = 0; right < arr.length; right++) {
//     CurrentSum += arr[right];
//     if (right - left + 1 === n) {
//       console.log("CurrentSum_1:", CurrentSum);
//       maxSum = Math.max(CurrentSum, maxSum);
//       console.log("maxSum_1:", maxSum);

//       CurrentSum -= arr[left];
//       left++;
//       console.log("before");
//       console.log("right:", right);
//       console.log("After");
//     }
//   }
//   console.log("maxSum:", maxSum);

//   console.log("CurrentSum:", CurrentSum);
//   return maxSum;
// }
// let result = maxSumSubArray(arr, targetEle);

// /* Maximum Subarray Sum - Kadane's Algorithm */
// const arr = [2, 3, -8, 7, -1, 2, 3];

// function findMaximumSubArraySum(arr) {
//   let currentSum = arr[0];
//   let maxSum = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     currentSum = Math.max(currentSum + arr[i], arr[i]); // Key Point this line, check sum of Current + element, or Next Element
//     console.log("cSum:", currentSum);
//     maxSum = Math.max(currentSum, maxSum);
//   }
//   return maxSum;
// }

// let result = findMaximumSubArraySum(arr);
// console.log("result:", result);

/* findSumIndicesWith_Target  or Two SUM */

let arr = [2, 3, 5, 8];
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

// (function () {
//   // Code here runs immediately
//   console.log("IIFE executed!");
// })();

// async function getData() {
//   await console.log("getData Called");
// }
// (function () {
//   getData();
// })();

// const p1 = new Promise((resolve, reject) =>
//   setTimeout(() => resolve("Fast data!"), 50),
// );
// const p2 = new Promise((resolve, reject) =>
//   setTimeout(() => resolve("Too slow!"), 200),
// );

// Promise.race([p1, p2])
//   .then((value) => console.log("Winner:", value)) // Output: Winner: Fast data!
//   .catch((error) => console.error("Loser:", error));

/* Generating All Subarrays */
// let input = [1, 2, 3];
// function generateAllSubArray(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       result.push(arr.slice(i, j + 1));
//     }
//   }
//   return result;
// }
// let rsult = generateAllSubArray(input);
// console.log("rsult:", rsult); // [ [ 1 ], [ 1, 2 ], [ 1, 2, 3 ], [ 2 ], [ 2, 3 ], [ 3 ] ]

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let res = fruits.splice(1, 1, "a");
// console.log("res:", res);

// let arrFlat = [1, [2, 3], [4, [5]]];
// let flatRes = arrFlat.flat(Infinity); // [1, 2, 3, 4, 5]
// console.log("flatRes:", flatRes);

// const map = new Map();
// let obj = { name: "Ravi" };
// map.set("key", obj);
// console.log("MAP:", map);
//obj = null; // you drop your variable reference
// BUT the object still lives inside the Map

let count = 0;

function test() {
  return new Promise((resolve) => {
    setTimeout(() => {
      count++;
      resolve(count);
    }, 0);
  });
}

async function main() {
  console.log("A", count);

  const p1 = test();

  count++;

  const p2 = test();

  const result1 = await p1;

  console.log("B", result1, count);

  const result2 = await p2;

  console.log("C", result2, count);
}

main();

console.log("D", count);
