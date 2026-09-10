/* 15. Remove Duplicate from a string */

function removeDuplicate(str) {
  let charArray = str.split("");
  console.log("CharArray:", charArray);
  let uniqueChars = [...new Set(charArray)];
  console.log("uniqueChars:", uniqueChars);
  return uniqueChars.join("");
}
let str1 = "geeksforgeeks";
console.log(removeDuplicate(str1));
