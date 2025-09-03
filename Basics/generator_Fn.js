function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const generators = numberGenerator();
console.log("Gen1:", generators.next()); // Gen1: { value: 1, done: false }
console.log("Gen2:", generators.next()); // Gen1: { value: 2, done: false }
console.log("Gen3:", generators.next()); // Gen1: { value: 3, done: false }
console.log("Gen4:", generators.next()); // Gen4: { value: undefined, done: true }
