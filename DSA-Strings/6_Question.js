// All Questions list available in README.MD File in this path
/* 6. Flip the words in a sentence, not the letters.*/

function flipTheWord(str) {
  let s = str.split(" ");
  console.log(s);
  let result = [];

  for (let i = s.length - 1; i >= 0; i--) {
    result.push(s[i]);
  }
  //console.log("Results:", result.join().replaceAll(",", " "));
  return result.join(" ").replaceAll(",", "");
}
let s = "the sky is blue";
let flipWord = flipTheWord(s);
console.log("flipWord:", flipWord); // blue is sky the
