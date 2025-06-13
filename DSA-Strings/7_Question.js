// All Questions list available in README.MD File in this path
/* 7. Are two strings anagrams? Prove it. */

function checkGivenStringsAreAnagrams(s1, s2) {
  let result = "";
  console.log(s1.length);
  console.log(s2.length);
  if (!(s1.length === s2.length)) {
    return "Not Anagrams";
  }
  return "Anagrams";
}

let s1 = "geeks";
let s2 = "kseeg";
let stringsAreAnagrams = checkGivenStringsAreAnagrams(s1, s2);
console.log("Given Strings are:", stringsAreAnagrams);
