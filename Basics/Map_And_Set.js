/****************************************************************************************** */
/* Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

Methods and properties are:

new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the element (the key/value pair) by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.
*/

console.log(
  "************************** Map() Method************************************"
);
// Create a new Map
const myMap = new Map();

// 1. set(key, value): Adds a new key-value pair to the Map.
myMap.set("name", "Alice");
myMap.set(1, "One");
myMap.set(true, "Boolean Key");
const user = { id: 1, name: "Bob" };
myMap.set(user, user); // Objects can be keys

console.log("After set():", myMap);

// 2. get(key): Returns the value associated with the specified key.
console.log('get("name"):', myMap.get("name"));
console.log("get(1):", myMap.get(1));
console.log("get(false):", myMap.get(false)); // Returns undefined if key not found
console.log("get(Object):", myMap.get(user).name); // Returns undefined if key not found

// 3. has(key): Returns a boolean indicating whether an element with the specified key exists.
console.log('has("name"):', myMap.has("name"));
console.log('has("age"):', myMap.has("age"));

// 4. size: Returns the number of key-value pairs in the Map.
console.log("size:", myMap.size);

// 5. delete(key): Removes the specified element from the Map.
myMap.delete(true);
console.log("After delete(true):", myMap);
console.log("has(true) after delete:", myMap.has(true));

// 6. clear(): Removes all elements from the Map.
// myMap.clear();
// console.log('After clear():', myMap);
// console.log('size after clear:', myMap.size);

// 7. forEach(callbackFn, thisArg): Executes a provided callback function once for each key-value pair.
console.log("\nforEach() examples:");
myMap.forEach((value, key) => {
  console.log(`Key: ${key}, Value: ${value}`);
});

// 8. keys(): Returns a new Iterator object that contains the keys for each element in the Map in insertion order.
console.log("\nkeys() iterator:");
for (const key of myMap.keys()) {
  console.log(key);
}

// 9. values(): Returns a new Iterator object that contains the values for each element in the Map in insertion order.
console.log("\nvalues() iterator:");
for (const value of myMap.values()) {
  console.log(value);
}

// 10. entries(): Returns a new Iterator object that contains an array of [key, value] for each element in the Map in insertion order.
console.log("\nentries() iterator:");
for (const [key, value] of myMap.entries()) {
  console.log(`Entry: [${key}, ${value}]`);
}

// Map can be iterated directly, which uses the entries() method by default
console.log("\nDirect Map iteration (uses entries() by default):");
for (const [key, value] of myMap) {
  console.log(`Direct Entry: [${key}, ${value}]`);
}

/*************************************************************************************************/

console.log(
  "************************** Set() ************************************"
);
/* A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

Its main methods are:

new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count. */
// Set()

// 1. Creating a new Set
const mySet = new Set();
console.log("Initial Set:", mySet); // Output: Initial Set: Set(0) {}

// 2. add(): Adds a new element to the Set.
mySet.add(1);
mySet.add("hello");
mySet.add(true);
mySet.add(1); // Adding a duplicate, it will be ignored as Sets only store unique values.
console.log("After adding elements:", mySet); // Output: After adding elements: Set(3) { 1, 'hello', true }

// 3. has(): Returns a boolean indicating whether an element exists in the Set.
console.log("Does mySet have 1?", mySet.has(1)); // Output: Does mySet have 1? true
console.log('Does mySet have "world"?', mySet.has("world")); // Output: Does mySet have "world"? false

// 4. delete(): Removes a specified element from the Set.
mySet.delete("hello");
console.log('After deleting "hello":', mySet); // Output: After deleting "hello": Set(2) { 1, true }

// 5. size: Returns the number of unique elements in the Set.
console.log("Size of mySet:", mySet.size); // Output: Size of mySet: 2

// 6. forEach(): Iterates over each element in the Set.
console.log("Iterating with forEach:");
mySet.forEach((value) => {
  console.log(value);
});
// Output:
// 1
// true

// 7. entries(): Returns a new Iterator object that contains an array of [value, value] for each element.
// (For Sets, the key and value are the same to maintain similarity with Map's entries())
const entriesIterator = mySet.entries();
console.log("Entries:", entriesIterator.next().value); // Output: Entries: [ 1, 1 ]

// 8. values(): Returns a new Iterator object that contains all values in insertion order.
// (keys() is an alias for values() in Sets)
const valuesIterator = mySet.values();
console.log("Values:", valuesIterator.next().value); // Output: Values: 1

// 9. clear(): Removes all elements from the Set.
mySet.clear();
console.log("After clearing the Set:", mySet); // Output: After clearing the Set: Set(0) {}
