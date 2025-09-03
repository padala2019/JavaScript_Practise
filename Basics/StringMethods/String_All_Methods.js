//length: Returns the length of a string.
let text1 = "Hello";
console.log(text1.length); // Output: 5

//charAt(index): Returns the character at a specified index.
let text2 = "World";
console.log(text2.charAt(0)); // Output: W

//charCodeAt(index): Returns the Unicode value of the character at a specified index.
let text3 = "A";
console.log(text3.charCodeAt(0)); // Output: 65

//concat(string1, string2, ...): Joins two or more strings.
let text11 = "Hello";
let text22 = "World";
let result = text11.concat(" ", text22);
console.log(result); // Output: Hello World

//indexOf(substring, start): Returns the index of the first occurrence of a specified substring. Returns -1 if not found.
let text4 = "Hello World";
console.log(text4.indexOf("World")); // Output: 6

//lastIndexOf(substring, start): Returns the index of the last occurrence of a specified substring.
let text5 = "Hello World World";
console.log(text5.lastIndexOf("World")); // Output: 12

//slice(start, end): Extracts a part of a string and returns a new string.
let text6 = "JavaScript";
console.log(text6.slice(0, 4)); // Output: Java

//substring(start, end): Similar to slice(), but handles negative arguments differently.
let text7 = "JavaScript";
console.log(text7.substring(4, 9)); // Output: Script

//substr(start, length): Extracts a specified number of characters from a starting index.
// Syntax: string.substr(start, length)
let text8 = "JavaScript";
console.log(text8.substr); // Output: Script

//replace(searchValue, replaceValue): Replaces occurrences of a specified value with another value.
let text9 = "Hello World";
let newText9 = text9.replace("World", "Universe");
console.log(newText9); // Output: Hello Universe

//replaceAll(searchValue, replaceValue): Replaces all occurrences of a specified value.
let text10 = "Hello World World";
let newText = text10.replaceAll("World", "Universe");
console.log(newText); // Output: Hello Universe Universe

//toUpperCase(): Converts a string to uppercase.
let text111 = "hello";
console.log(text111.toUpperCase()); // Output: HELLO

//toLowerCase(): Converts a string to lowercase.
let text12 = "WORLD";
console.log(text12.toLowerCase()); // Output: world

//trim(): Removes whitespace from both ends of a string.
let text13 = "   Hello World   ";
console.log(text13.trim()); // Output: Hello World

//startsWith(searchString, position): Checks if a string starts with a specified value.
let text14 = "Hello World";
console.log(text14.startsWith("Hello")); // Output: true

//endsWith(searchString, length): Checks if a string ends with a specified value.
let text15 = "Hello World";
console.log(text15.endsWith("World")); // Output: true

//includes(searchString, position): Checks if a string contains a specified value.
let text16 = "Hello World";
console.log(text16.includes("World")); // Output: true

//split(separator, limit): Splits a string into an array of substrings.
let text = "apple,banana,orange";
let fruits = text.split(",");
console.log(fruits); // Output: ["apple", "banana", "orange"]
