let myMap = new Map();
myMap.set("name", "Alice");
myMap.set(1, "one");
myMap.set(2, "one");

let objKey = { id: 1 };
let myFun = function greetings() {};
myMap.set(objKey, "object value");
myMap.set(myFun, "Hello");

console.log("Map:", myMap);
console.log(myMap.get("name")); // Output: Alice
console.log(myMap.get(objKey)); // Output: object value
console.log(myMap.get(myFun)); // Output: object value

console.log(myMap.has(1)); // Output: true
