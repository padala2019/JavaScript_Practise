/* 4. How do you find the count for the occurrence of a particular character in a string?
 */

let str = "Hello Greeks";
let charCount = "e";

function findCountOccurrenceOfParCharGivenString(inputStr, targetChar) {
  let count = 0;
  for (let i = 0; i < inputStr.length; i++) {
    if (inputStr[i] === targetChar) {
      count++;
    }
  }
  return count;
}

console.log(
  "count for the occurrence of a particular character in a string is:",
  findCountOccurrenceOfParCharGivenString(str, charCount)
); // 3
