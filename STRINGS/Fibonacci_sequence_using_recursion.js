/* 12. How do you print a Fibonacci sequence using recursion */

function FibonacciSequence(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log("Fibonacci:", FibonacciSequence(5));
