/* 13. How do you find the average of numbers in a list? */

function findAverage(list) {
  if (list.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum / list.length;
}
const numbers = [1, 2, 3, 4, 5];
const average = findAverage(numbers);
console.log(average);
