/* 5.How do you find the non-matching characters in a string */

let s1 = "sweet";
let s2 = "sour";

function findUnCommonCharactersOfTwoStrings(str1, str2) {
  let nonMatching = "";
  const maxLength = Math.max(str1.length, str2.length);
  console.log("Max Length:", maxLength);

  for (let i = 0; i < maxLength; i++) {
    if (str1[i] != str2[i]) {
      if (str1[i]) {
        nonMatching += str1[i];
      }
      if (str2[i]) {
        nonMatching += str2[i];
      }
    }
  }
  return nonMatching;
}
console.log(
  "Find Non matching uncommon chars String:",
  findUnCommonCharactersOfTwoStrings(s1, s2)
); // woeuert
