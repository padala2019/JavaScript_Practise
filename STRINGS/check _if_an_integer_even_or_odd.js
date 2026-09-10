/* 14. How do you check if an integer is even or odd?*/
function isEven(num) {
  return num % 2 == 0 ? "Even" : "Odd";
}

let n = 3;
console.log("This number is:", isEven(n));
