const user = {
  name: "Alice",
  greet: function (message) {
    console.log(`${message}, my name is ${this.name}`);
  },
};

const admin = {
  name: "Bob",
};
user.greet.call("Hello!");
user.greet.call(admin, "Hello"); // Output: Hello, my name is Bob
