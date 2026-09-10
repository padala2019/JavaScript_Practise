// All Questions list available in README.MD File in this path
/* 27. Find the largest and smallest element. */
const numbers = [45, 12, 89, 3, 27, 56];

function findMinAndMaxElements(arr) {
  if (numbers.length === 0) return { min: null, max: null };
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }
  return { min, max };
}
const result = findMinAndMaxElements(numbers);
console.log("result:", result);
