// All Questions list available in README.MD File in this path
/* 6. Flip the words in a sentence, not the letters.*/

function flipTheWord(str) {
  let s = str.split(" ");
  let result = [];

  for (let i = s.length - 1; i >= 0; i--) {
    result.push(s[i]);
  }
  return result.join(" ");
}
let s = "the sky is blue";
let flipWord = flipTheWord(s);
console.log("flipWord:", flipWord);
