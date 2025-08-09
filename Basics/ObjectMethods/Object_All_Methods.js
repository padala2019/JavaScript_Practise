//Object.keys(obj): Returns an array of a given object's own enumerable property names.
const person = { name: "Alice", age: 30 };
const keys = Object.keys(person);
console.log(keys); // Output: ['name', 'age']

//Object.values(obj): Returns an array of a given object's own enumerable property values.
const person1 = { name: "Alice", age: 30 };
const values = Object.values(person1);
console.log(values); // Output: ['Alice', 30]

//Object.entries(obj): Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
const person2 = { name: "Alice", age: 30 };
const entries = Object.entries(person2);
console.log(entries); // Output: [['name', 'Alice'], ['age', 30]]

//Object.assign(target, ...sources): Copies all enumerable own properties from one or more source objects to a target object. It returns the target object.
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = Object.assign({}, obj1, obj2);
console.log(mergedObj); // Output: { a: 1, b: 2, c: 3, d: 4 }

//Object.freeze(obj): Freezes an object, preventing new properties from being added to it, existing properties from being removed, and existing properties—or their enumerability, configurability, or writability—from being changed.
const config = { setting: "value" };
Object.freeze(config);
config.setting = "new value"; // This will not change the value
console.log(config.setting); // Output: 'value'

//Object.create(proto, [propertiesObject]): Creates a new object, using an existing object as the prototype of the newly created object.
const protoObj = {
  greet() {
    console.log("Hello!");
  },
};
const newObj = Object.create(protoObj);
newObj.greet(); // Output: Hello!

//Object.hasOwnProperty(prop): Returns a boolean indicating whether the object has the specified property as its own property (not inherited).
const person3 = { name: "Alice" };
console.log(person3.hasOwnProperty("name")); // Output: true
console.log(person3.hasOwnProperty("toString")); // Output: false (inherited from Object.prototype)
