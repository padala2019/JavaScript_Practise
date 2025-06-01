// All Questions list available in README.MD File in this path
/* 5. Count how many times each character appears.*/

function calCountStringEachCharacterAppears(str) {
  let charMap = {};
  for (const char of str) {
    charMap[char] = (charMap[char] || 0) + 1;
  }
  return charMap;
}

const myString = "hello world";
let strObj = calCountStringEachCharacterAppears(myString);
console.log("strObj:", strObj);
