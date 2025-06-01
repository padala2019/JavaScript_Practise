// All Questions list available in README.MD File in this path
/* 4. First non-repeating character — who stands alone?*/

// First Approach
function firstNonRepeatCharFirstApproach(str) {
  let charObj = {};
  for (let i = 0; i < str.length; i++) {
    charObj[str[i]] = (charObj[str[i]] || 0) + 1;
  }
  //console.log(charObj);
  //console.log(Object.keys(charObj));
  for (let i = 0; i < str.length; i++) {
    if (charObj[str[i]] === 1) {
      return str[i];
    }
  }
  // Using Built in methods
  //return Object.keys(charObj).find((key) => charObj[key] === 1);
}

function firstNonRepeatCharSecondApproach(str) {
  let map = new Map();
  for (let i = 0; i < str.length; i++) {
    map.set(str[i], (map.get(str[i]) || 0) + 1);
  }
  console.log(map);

  for (let i = 0; i < str.length; i++) {
    if (map.get(str[i]) === 1) {
      return str[i];
    }
  }
}

let s = "racecar";
let nonRepeatChar = firstNonRepeatCharSecondApproach(s);
console.log("NonRepeatChar:", nonRepeatChar);
