/* 6.How do you find out if the two given strings are anagrams? */

function areAnagram(str1, str2) {
  // Get lengths of both strings
  let n1 = str1.length;
  let n2 = str2.length;

  // If length of both strings is not
  // same, then they cannot be anagram
  if (n1 != n2) return false;

  // Sort both strings
  console.log("str1_Sort:", str1.sort());
  console.log("str1_Sort:", str2.sort());

  str1.sort();
  str2.sort();

  // Compare sorted strings
  for (let i = 0; i < n1; i++) if (str1[i] != str2[i]) return false;

  return true;
}

let s1 = "abcd";
let s2 = "dabc";
// Driver Code
let str1 = s1.split("");
console.log("str1:", str1);
let str2 = s2.split("");
console.log("str2:", str2);

// Function Call
let result = areAnagram(str1, str2);

result
  ? console.log("The two strings are anagram of each other")
  : console.log("The two strings are not anagram of each other");
