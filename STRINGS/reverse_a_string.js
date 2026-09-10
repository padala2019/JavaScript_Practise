/* 1. reverse a string in JavaScript using a for loop */

let originalString = "hello";

function reverseString(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
}

console.log(" Reverse String:", reverseString(originalString)); // olleh */

//---------------------------------------------------------------------------------------------//

/* reverse a string in JavaScript using a methods */

/* let originalString1 = "hello"; */
/*  */
/* console.log(" Reverse String:", originalString1.split("").reverse().join("")); */

//---------------------------------------------------------------------------------------------//
