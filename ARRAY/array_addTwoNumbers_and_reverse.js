/* array_addTwoNumbers_and_reverse */

function addTwoNumbers(l1, l2) {
  let newVal = parseInt(l1.join("")) + parseInt(l2.join(""));
  return newVal.toString().split("").reverse().join("");
}

let l1 = [2, 4, 3];
let l2 = [5, 6, 4];
console.log("AddTwo:", addTwoNumbers(l1, l2));
