/* Find Last non Repeating characters in a given string */
let str = "GeeksForGeeks";

function nonRepeatingLastCharcter(str) {
  console.log("Length:", str.length - 1);
  let charMap = {};
  for (let chr of str) {
    charMap[chr] = (charMap[chr] || 0) + 1;
  }
  console.log(charMap);

  for (let i = str.length - 1; i >= 0; i--) {
    if (charMap[str[i]] == 1) {
      return str[i];
    }
  }
}
console.log(" Last non repeat Char:", nonRepeatingLastCharcter(str));
