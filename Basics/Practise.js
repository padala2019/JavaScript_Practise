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

let person = {
  name: "rahual",
  age: 22,
  printInfo() {
    console.log(`Person name is ${this.name} age is: ${this.age}`);
  },
};
person.printInfo();

const obj = {
  a: 1,
  b: 2,
  sum() {
    return this.a + this.b;
  },
};
const res = obj.sum();
console.log("SUM:", res);

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
