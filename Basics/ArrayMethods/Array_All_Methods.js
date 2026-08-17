//push(): Adds one or more elements to the end of an array and returns the new length of the array.
let fruits1 = ["apple", "banana"];
fruits1.push("orange"); // fruits is now ['apple', 'banana', 'orange']

//unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
let fruits2 = ["banana", "orange"];
fruits2.unshift("apple"); // fruits is now ['apple', 'banana', 'orange']

//pop(): Removes the last element from an array and returns that element.
let fruits3 = ["apple", "banana", "orange"];
let removedFruit = fruits3.pop(); // removedFruit is 'orange', fruits is now ['apple', 'banana']

//shift(): Removes the first element from an array and returns that element.
let fruits4 = ["apple", "banana", "orange"];
let removedFruit4 = fruits4.shift(); // removedFruit is 'apple', fruits is now ['banana', 'orange']

//forEach(): Executes a provided function once for each array element. It does not return a new array.
let numbers1 = [1, 2, 3];
numbers1.forEach((number) => {
  console.log(number * 2); // Logs 2, 4, 6
});

//map(): Creates a new array populated with the results of calling a provided function on every element in the calling array.
let numbers2 = [1, 2, 3];
let doubledNumbers = numbers2.map((number) => {
  return number * 2;
}); // doubledNumbers is [2, 4, 6]
console.log(doubledNumbers);

//filter(): Creates a new array with all elements that pass the test implemented by the provided function.
let numbers3 = [1, 2, 3, 4, 5];
let evenNumbers = numbers3.filter((number) => {
  return number % 2 === 0;
}); // evenNumbers is [2, 4]

let even = numbers3.filter((num) => num % 2 === 0);

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

// isArray() method in JavaScript is used to determine whether a given value is an array or not. This method returns true if the argument passed is an array else it returns false
//Syntax: Array.isArray(obj);
//Convert Nested Array into Normal Array ElementInternals.

const arr1 = [1, [2, 3, 4], 5];
let result = [];

function getNormalArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      console.log(arr[i]);
      getNormalArray(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

const finalArray1 = getNormalArray(arr1);
console.log("FinalArray:", finalArray1); // [ 1, 2, 3, 4, 5 ]

/*****************************************************************************************/

const arr2 = [1, [2, 3, 4], 5]; // [1, [4,9,16], 25]

function getNormalArray(arr) {
  return arr.map((num) => {
    if (Array.isArray(num)) {
      console.log("TrUE");
      return getNormalArray(num);
    } else {
      console.log("FALSE");

      return num * num;
    }
  });
}

const finalArray2 = getNormalArray(arr2);
console.log("FinalArray2:", finalArray2); // [ 1, [ 4, 9, 16 ], 25 ]

/***************************************************************************************/

const arr = [1, [2, 3, 4], 5]; // [1, [4,9,16], 25]

function getNormalArray(arr) {
  return arr.map((num) => {
    //Approach 1
    return Array.isArray(num) ? getNormalArray(num) : num * num;

    // Approach 2
    // if (Array.isArray(num)) return getNormalArray(num);
    // else return num * num;
  });
}

const finalArray = getNormalArray(arr);
console.log("FinalArray:", finalArray); // [ 1, [ 4, 9, 16 ], 25 ]

/*************************************************************************** */

const arr11 = [1, [2, 3, 4], 5];
let result1 = [];

function getNormalArray(arr11) {
  for (let i = 0; i < arr11.length; i++) {
    if (Array.isArray(arr11[i])) {
      getNormalArray(arr11[i]);
    } else {
      result.push(arr11[i]);
    }
  }
  return result;
}

const finalArray11 = getNormalArray(arr);
console.log("FinalArray:", finalArray11); //[ 1, 2, 3, 4, 5 ]
