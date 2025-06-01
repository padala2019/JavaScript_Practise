// All Questions list available in README.MD File in this path
/* 3. Remove duplicates from a string — efficiently.*/

function removeDuplicateFromString(str) {
  let seen = new Set();
  let result = "";

  for (const c of str) {
    if (!seen.has(c)) {
      result += c;
      seen.add(c);
    }
  }
  return result;
}

let s = "geeksforgeeks";
//let s = "1234589712340";
let orginalStr = removeDuplicateFromString(s);
console.log("OrginalStr:", orginalStr);
