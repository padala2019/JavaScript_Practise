// All Questions list available in README.MD File in this path
/* 1. Reverse a string — without using built-ins. */

function reverseString(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }

  return reverseStr;
}

const str = "abcdef";
let reverseStr = reverseString(str);
console.log("ReverseString:", reverseStr);
