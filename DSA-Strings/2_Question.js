// All Questions list available in README.MD File in this path
/* 2. Is it a palindrome? Let's find out. */

function checkGivenStringPalindrome(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return str === reverseStr ? "string is Palindrome" : "Not a Palindrome";
}

let str = "madam";
let stringVal = checkGivenStringPalindrome(str);
console.log(stringVal);
