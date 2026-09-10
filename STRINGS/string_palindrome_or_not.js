/* 2.whether a given value is a palindrome or not */

let givenStr = "racecar";
function checkGivenStringPalindromeOrNot(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr == str ? "palindrome" : "Not palindrome";
}

let strMsg = checkGivenStringPalindromeOrNot(givenStr);

console.log("Given string is:", strMsg);
