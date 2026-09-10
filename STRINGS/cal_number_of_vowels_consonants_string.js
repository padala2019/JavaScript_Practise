/* 7.How do you calculate the number of vowels and consonants in a string? */

function cVowels(s1) {
  const vowles = "aeiouAEIOU";
  let countV = 0;
  let countC = 0;

  for (const char of s1) {
    if (vowles.includes(char)) {
      countV++;
    } else {
      countC++;
    }
  }
  return [countV, countC]; // Array format
  //return { vowels: countV, consts: countC }; // Object format
}
const s = "HelloWorld";
let res = cVowels(s);
console.log("Res:", res);
console.log("vowels are:", res[0] + " " + "consonants are:", +res[1]);
// console.log("vowels are:", res.vowels + " " + "consonants are:", res.consts);
// console.log(
//   "vowels are:",
//   res["vowels"] + " " + "consonants are:",
//   res["consts"]
// );
