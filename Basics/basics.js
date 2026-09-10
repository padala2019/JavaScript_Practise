console.log("Hello World!");

/* const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.reject("Error occurred");

const result = Promise.race([promise1, promise2, promise3])
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

/*----------------------------------------------------------------*/

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => console.log("DATA:", data));

/*----------------------------------------------------------------*/

/* const originalObj = {
  name: "Raveendra",
  address: {
    city: "USA",
  },
};

const shallowCopy = { ...originalObj };
const deepCopy = JSON.parse(JSON.stringify(originalObj));
shallowCopy.name = "ABC";
//shallowCopy.address.city = "Texas";

deepCopy.name = "123";
deepCopy.address.city = "Irving";

//console.log("Original:", originalObj.address.city);
console.log("shallowCopy:", shallowCopy.name);
console.log("deepCopy:", deepCopy.name); */

/*----------------------------------------------------------------*/

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

// const users = {
//   name: "John",
//   greet() {
//     console.log(this.name);
//   },
// };

// const greetFn = users.greet;
// greetFn();

// console.log(add(5, 3));
// let add = function (a, b) {
//   return a + b;
// };

// function sumNestedArray(arr) {
//   //console.log("Arr_length:", arr.length);
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     console.log("Array.isArray:", Array.isArray(arr[i]), arr[i]);
//     console.log("Before_SUM:", sum);
//     sum += Array.isArray(arr[i]) ? sumNestedArray(arr[i]) : arr[i];
//     console.log("SUM:", sum);
//   }
//   return sum;
// }

// const nestedArray = [1, 2, [3, [4, 5], 6], 7];
// const result = sumNestedArray(nestedArray);
// console.log(result);

// function loop(i) {
//   if (i < 3) {
//     setTimeout(() => console.log(i), 100);
//     loop(i + 1);
//   }
// }
// loop(0);
/*----------------------------------------------------------------*/
// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };
// console.log(a[b]);

// a[b] = 123;
// a[c] = 456;
// console.log(a[c]);

// Name Change

// Demo Changes More details

// let formData = {
//   name: "",
//   email: "",
//   password: "",
// };

// let newData = { ...formData, ["name"]: "Ravi", ["email"]: "ravi90@gmail.com" };

//console.log("newData:", newData);
// import React, { useState } from "react";
// import { TextInput } from "react-native";

// const [formData, setFormData] = useState({
//   name: "",
//   email: "",
//   password: "",
// });
// const onChange = (e) => {
//   console.log("E:", e);
//   const [name, email, password] = e.target;
//   setFormData({
//     ...formData,
//     [name]: e.target.value,
//     [email]: e.target.value,
//     [password]: e.target.value,
//   });
// };
// <TextInput placeholder="" value="" onChange={onChange} name="name" />;
// <TextInput placeholder="" value="" onChange={onChange} name="email" />;
// <TextInput placeholder="" value="" onChange={onChange} name="password" />;

// const obj = [
//   { name: "apple", category: "fruit" },
//   { name: "mango", category: "fruit" },
//   { name: "carrot", category: "vegitable" },
// ];

// const groupedByCategoryObject = Object.groupBy(obj, (item) => item.category);
// console.log(groupedByCategoryObject);

/*----------------------------------------------------------------*/

// const user = { name: "Raveendra", role: "Mobile developer", location: "Texas" };
// const reslts = Object.entries(user).forEach(([key, value]) => {
//   console.log(`${key}: ${value}`);
// });

/********************************************************************************* */
/* const person = {
  name: "Raveendra",
  city: "GNT",
  adress: {
    area: "Guntur",
  },
};
function greetName(firstname, email) {
  console.log(`${firstname} ${this.name} email is: ${email}`);
}
greetName.apply(person, ["Padala", "abc@gmail.com", "123"]); */

/*********************************************************************************** */

/* function checkGivenStringPalindrome(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr === str ? "Palindrome" : "Not a palindrome";
}
let str = "121";
const result = checkGivenStringPalindrome(str);
console.log("Given String is:", result);
 */

/********************************************************************************* */

/* fetch("https://www.google.com", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name: "Raveendra" }),
})
  .then((response) => response.json())
  .then((data) => console.log(data)); */

/******************************************************************* */

/* let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved");
  }, 4000);
});

async function test() {
  console.log("This is async function");
  //let result = await promise;
  //console.log(result);
  let result = Promise.resolve("Before");
  console.log("Hello");
  return result;
}

test().then((result) => {
  console.log("Result:", result);
}); */

/************************************************************************ */

/* console.log("A");

setTimeout(() => {
  console.log("B");
}, 4000);

function test() {
  return Promise.resolve("C");
}
test().then((result) => {
  console.log(result);
});
console.log("D"); */

/******************************************************************************* */

/* for (var i = 0; i < 5; i++) {
  print(i);
}
function print(val) {
  setTimeout(() => {
    console.log("i=", val);
  }, 1000);
}
 */

/********************************************************************************** */

/* let myObject = { value: 10 };

function changeObject(obj) {
  obj.value = 20; // Modifying the object through the reference
  obj = { value: 40 };
}

console.log("Before:", myObject.value); // Output: Before: 10
changeObject(myObject);
console.log("After:", myObject.value); // Output: After: 20

function reassignObject(obj) {
  obj = { newValue: 30 }; // Reassigns the local 'obj' variable
}

let anotherObject = { originalValue: 100 };
reassignObject(anotherObject);
console.log(anotherObject.originalValue); // Output: 100 (original object unchanged) */

/************************************************************************************/

/* const sealObject = {
  name: "Abc",
  age: 30,
};
console.log("sealObject_before:", sealObject); // sealObject_before: { name: 'Abc', age: 30 }
Object.seal(sealObject);
sealObject.name = "BCA";
sealObject.age = 35;
sealObject.city = "GnT";
delete sealObject.age;
delete sealObject.name;
console.log("sealObject:", sealObject); // sealObject: { name: 'BCA', age: 35 } */

// let normalObject = {
//   name: "Raveendra",
//   age: 25,
// };
// normalObject["city"] = "RMP";
// delete normalObject.age;
// console.log("normalObject:", normalObject);

/* let freezeObject = {
  name: "Naveen",
  age: 25,
};
console.log("freezeObject_before:", freezeObject); // freezeObject_before: { name: 'Naveen', age: 25 }

Object.freeze(freezeObject);
freezeObject.name = "Krish";
freezeObject.city = "Pune";
freezeObject.age = 40;
delete freezeObject.age;
console.log("freezeObject1:", freezeObject); // freezeObject: { name: 'Naveen', age: 25 } */

//You are given an array of integer arrays (e.g., number[][]). Group arrays that contain the same elements, regardless of order.

// console.log(['1','2'].join(''))
// let str = '12';

// const input = [
//   [1, 2, 3],
//   [3, 2, 1],
//   [4, 5, 6],
//   [6, 5, 4],
//   [1, 1, 2],
// ];

// // output: [
// //   [ [1, 2, 3], [3, 2, 1] ],
// //   [ [4, 5, 6], [6, 5, 4] ],
// //   [ [1, 1, 2] ]
// // ]
//===========================================================
// let arr = [3, "Abc", [4, 8]];
// console.log(arr[90]); // undefined

// let obj = { name: "AAAA" };

// function passByReference(obj) {
//   obj = { name: "CCCC" };
//   console.log("Inside:", obj.name);
// }
// passByReference(obj);
// console.log(obj.name);

// Find Second Largest Number from given array.
/* let a = [10, 20, 4, 45, 99, 109];
a.sort((a, b) => b - a);

let first = a[0];
let res = null;

for (let i = 1; i < a.length; i++) {
  if (a[i] < first) {
    res = a[i];
    break;
  }
}
console.log(res !== null ? res : "No second largest element"); */

// Find The maximum number from given array.
/* let a = [10, 20, 4, 45, 99, 109];
function findLargetNumber(arr) {
  console.log(arr);
  // arr.sort((a, b) => b - a);
  console.log("New:", arr);
  let maxNumber = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (maxNumber < arr[i]) {
      maxNumber = arr[i];
    }
  }
  console.log(maxNumber);
  return maxNumber;
}
let result = findLargetNumber(a);
console.log("result:", result); */

// const animal = {
//   eats: true,
//   walk() {
//     console.log("Dog walk");
//     return "WALKING";
//   },
// };

// const dog = Object.create(animal);
// dog.barks = true;

// const myPuppy = Object.create(dog);
// console.log(myPuppy.barks);
// console.log(myPuppy.eats);
// const walk = myPuppy.walk();
// console.log(walk);

// undefined
//myFunc(); // TypeError: myFunc is not a function

// let str = "racecar";
// let right = str.split("");
// console.log("Len:", right.join());

// let numbers1 = [1, 2, 3];
// numbers1.forEach((number) => {
//   console.log(number * 2); // Logs 2, 4, 6
// });

// Define a standard function
// function greet() {
//   return "Hello!";
// }

// // Attach custom properties directly to the function object
// greet.language = "English";
// greet.status = "Active";
// greet.id = 1;

// console.log(greet()); // Output: "Hello!"
// console.log(greet.language); // Output: "English"
// console.log(typeof greet); // Output: "function" (a callable object type)
// console.log(greet instanceof Object); // Output: true
// console.log(greet.id); // Output: 1
// if (true) {
//   let blockScoped = "Stay inside";
//   var functionScoped = "I can escape blocks";
// }
// console.log(functionScoped); // "I can escape blocks"
// console.log(blockScoped);

const globalVar = "I am Global";
function outerFunction() {
  const outerVar = "I am from Outer";
  function innerFunction() {
    const innerVar = "I am from Inner";
    // 1. Can access its own local variables
    console.log(innerVar); // Output: "I am from Inner"

    // 2. Can access variables from its parent's scope (Lexical Scoping)
    console.log(outerVar); // Output: "I am from Outer"

    // 3. Can access variables from the global scope
    console.log(globalVar); // Output: "I am Global"
  }
  innerFunction();
  // ERROR: Outer functions cannot look down into inner scopes
  console.log(innerVar); // ReferenceError: innerVar is not defined
}

outerFunction();
