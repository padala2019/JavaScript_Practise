/* 3. How do you calculate the number of numerical digits in a string? */

let numStr = "jhkj7682834hhdg237";
console.log("Given String:", numStr);

function extractNumbersFromString(str) {
  let nums = "";
  let charStr = "";
  let obj = { number: "", stra: "" };
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      //nums += str[i];
      obj.number += str[i];
    } else {
      //charStr += str[i];
      obj.stra += str[i];
    }
  }
  //console.log(obj);
  return obj;
}
let finalObj = extractNumbersFromString(numStr);
console.log(
  `Extract Number: ${finalObj.number}\nExtract Char String:${finalObj.stra}`, //7682834237  jhkjhhdg
);
