console.log("Hello World!");

/* const promise1 = Promise.reject(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve("Error occurred");

const result = Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log("Resolved:", results);
  })
  .catch((error) => {
    console.error("Rejected:", error); // Output: Rejected: Error occurred
  });
 */

/* console.log(x);

var x;

greetName();

function greetName() {
  console.log("Welcome World");
}

const greetNameArrow = () => {
  console.log("Arrow Function");
  setTimeout(() => {
    console.log("Arrow Function Time Out");
  }, 2000);
};

greetNameArrow(); */

// let promise = new Promise((resolve, reject) => {
//   resolve("resolve");
// });
// promise.then(() => console.log("Promise Resolve"));

// async function f() {
//   let result = "new!";
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 1000);
//   });
//   result = await promise;
//   console.log(result);
// }
// f();

// const originalObject = {
//   name: "John",
//   address: {
//     city: "New York",
//   },
// };

// // Using the spread operator for shallow copy
// const shallowCopyObject = { ...originalObject };

// const deepcopy = JSON.parse(JSON.stringify(originalObject));
// deepcopy.name = "Ravi";

// console.log("Original:", originalObject.name);
// console.log("deepcopy:", deepcopy.name);

/* const obj = { name: "John", age: 30, city: "New York" };
const myJSON = JSON.stringify(obj);
// Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
console.log("myJSON:", myJSON);
// {"name":"John","age":30,"city":"New York"}

const txt = '{"name":"John", "age":30, "city":"New York"}';
const myParseJSON = JSON.parse(txt);
// Converts a JavaScript Object Notation (JSON) string into an object.
console.log("Parse_JSON:", myParseJSON);
// { name: 'John', age: 30, city: 'New York' } */

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => console.log("DATA:", data));

/* const originalObj = {
  name: "Raveendra",
  address: {
    city: "USA",
  },
};

const shallowCopy = { ...originalObj };
const deepCopy = JSON.parse(JSON.stringify(originalObj));
// shallowCopy.name = "ABC";
shallowCopy.address.city = "Texas";

deepCopy.name = "123";
deepCopy.address.city = "Irving";

console.log("Original:", originalObj.address.city);
console.log("shallowCopy:", shallowCopy.address.city);
console.log("deepCopy:", deepCopy.address.city); */

/* function checkMail() {
  return new Promise((resolve, reject) => {
    reject("10");
  });
}

checkMail()
  .then((mail) => {
    console.log("Mail:", mail);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log("Experiment completed");
  });
 */
/* const user = { nameLast: "Ravi", age: 35 };
const { nameLast, city = "GNT" } = user;
console.log(nameLast);
console.log(city); */

const users = {
  name: "John",
  greet() {
    console.log(this.name);
  },
};

const greetFn = users.greet;
greetFn();
