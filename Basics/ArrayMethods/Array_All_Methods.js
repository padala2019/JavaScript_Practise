//push(): Adds one or more elements to the end of an array and returns the new length of the array.
let fruits1 = ["apple", "banana"];
fruits1.push("orange"); // fruits is now ['apple', 'banana', 'orange']

//pop(): Removes the last element from an array and returns that element.
let fruits2 = ["apple", "banana", "orange"];
let removedFruit2 = fruits2.pop(); // removedFruit is 'orange', fruits is now ['apple', 'banana']

//shift(): Removes the first element from an array and returns that element.
let fruits3 = ["apple", "banana", "orange"];
let removedFruit3 = fruits3.shift(); // removedFruit is 'apple', fruits is now ['banana', 'orange']

//unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
let fruits4 = ["banana", "orange"];
fruits4.unshift("apple"); // fruits is now ['apple', 'banana', 'orange']

//forEach(): Executes a provided function once for each array element. It does not return a new array.
let numbers1 = [1, 2, 3];
numbers1.forEach(function (number) {
  console.log(number * 2); // Logs 2, 4, 6
});

//map(): Creates a new array populated with the results of calling a provided function on every element in the calling array.
let numbers2 = [1, 2, 3];
let doubledNumbers = numbers2.map(function (number) {
  return number * 2;
}); // doubledNumbers is [2, 4, 6]

//filter(): Creates a new array with all elements that pass the test implemented by the provided function.
let numbers3 = [1, 2, 3, 4, 5];
let evenNumbers = numbers3.filter(function (number) {
  return number % 2 === 0;
}); // evenNumbers is [2, 4]

//reduce(): Executes a reducer function on each element of the array, resulting in a single output value.
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0); // sum is 10

//find(): Returns the value of the first element in the array that satisfies the provided testing function. Otherwise, it returns undefined.
let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
let user = users.find(function (user) {
  return user.id === 2;
}); // user is {id: 2, name: 'Bob'}

//includes(): Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
let fruits5 = ["apple", "banana"];
let hasApple = fruits5.includes("apple"); // has Apple is true
let hasGrape = fruits5.includes("grape"); // has Grape is false

//splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
let fruits6 = ["apple", "banana", "orange", "grape"];
fruits6.splice(1, 2, "kiwi", "mango"); // Removes 'banana', 'orange' and adds 'kiwi', 'mango'. fruits is now ['apple', 'kiwi', 'mango', 'grape']

//slice(): Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified.
let fruits = ["apple", "banana", "orange", "grape"];
let citrus = fruits.slice(1, 3); // citrus is ['banana', 'orange'], fruits remains unchanged
