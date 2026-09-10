/* Find First non Repeating characters in a given string */

//let strFirst = "GeeksForGeeks";
let strFirst = "racecar";
function nonRepeatingFirstCharcter(strFirst) {
  let charMap = {};
  for (let chr of strFirst) {
    charMap[chr] = (charMap[chr] || 0) + 1; // In JavaScript, the "default or" pattern utilizes the logical OR operator (||) to provide a default value if a variable is falsy (e.g., false, 0, '', null, undefined, NaN)
  }
  console.log(charMap);

  // First non Repeating characters in a given string
  for (let i = 0; i < strFirst.length; i++) {
    if (charMap[strFirst[i]] == 1) {
      return strFirst[i];
    }
  }
}

console.log(" First non repeat Char:", nonRepeatingFirstCharcter(strFirst));
