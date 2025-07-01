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

const sealObject = {
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
console.log("sealObject:", sealObject); // sealObject: { name: 'BCA', age: 35 }

// let normalObject = {
//   name: "Raveendra",
//   age: 25,
// };
// normalObject["city"] = "RMP";
// delete normalObject.age;
// console.log("normalObject:", normalObject);

let freezeObject = {
  name: "Naveen",
  age: 25,
};
console.log("freezeObject_before:", freezeObject); // freezeObject_before: { name: 'Naveen', age: 25 }

Object.freeze(freezeObject);
freezeObject.name = "Krish";
freezeObject.city = "Pune";
freezeObject.age = 40;
delete freezeObject.age;
console.log("freezeObject:", freezeObject); // freezeObject: { name: 'Naveen', age: 25 }
