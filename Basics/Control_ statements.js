// In JavaScript, for, for...of, for...in, while, do...while,
// and if are fundamental control flow statements used for iteration and conditional execution.

//for loop: Executes a block of code a specified number of times. It's typically used when the number of iterations is known in advance.
for (let i = 0; i < 5; i++) {
  console.log(i); // Prints 0, 1, 2, 3, 4
}

console.log("---------for Loop with Var----------- ");

for (var i = 0; i < 5; i++) {
  console.log(i); // Prints 0, 1, 2, 3, 4
}

console.log("---------END----------- ");

//for...of loop: Iterates over the values of iterable objects like Arrays, Strings, Maps, Sets, etc.
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log(color); // Prints 'red', 'green', 'blue'
}

//for...in loop: Iterates over the enumerable properties of an object. It's generally not recommended for iterating over arrays due to potential issues with property order and inherited properties.
const person = { name: "Alice", age: 30 };
for (const key in person) {
  console.log(`${key}: ${person[key]}`); // Prints 'name: Alice', 'age: 30'
}

//while loop: Executes a block of code as long as a specified condition is true. The condition is evaluated before each iteration.
let count = 0;
while (count < 3) {
  console.log(count); // Prints 0, 1, 2
  count++;
}

//do...while loop: Similar to while, but guarantees that the code block executes at least once, as the condition is evaluated after the first iteration.
let x = 0;
do {
  console.log(x); // Prints 0
  x++;
} while (x < 0);

//Conditional Statement:
//if statement: Executes a block of code only if a specified condition is true. It can be extended with else if and else for multiple conditions.
const temperature = 25;
if (temperature > 30) {
  console.log("It's hot!");
} else if (temperature > 20) {
  console.log("It's warm.");
} else {
  console.log("It's cool.");
}

console.log("---------for Loop with Var SetTimeOut----------- ");

for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log("Vale:", i); // Prints 0, 1, 2, 3, 4
  }, 2000);
}

console.log("---------END----------- ");

console.log("---------for Loop with Var SetTimeOut Callback func----------- ");

function getValue(i) {
  setTimeout(() => {
    console.log("callbackVal:", i); // Prints 0, 1, 2, 3, 4
  }, 1000);
  return i;
}
for (var i = 0; i < 5; i++) {
  getValue(i);
}

console.log("---------END----------- ");
