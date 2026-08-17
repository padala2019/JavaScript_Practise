// function User(name, email) {
//   this.name = name;
//   this.email = email;
// }

// User.__proto__.getProfileInfo = function () {
//   return `${this.name} - ${this.email}`;
// };

// const user = new User("ABC", "abc@gmail.com");
// const res = user.getProfileInfo();
// console.log("Res:", res);
function test() {
  try {
    ("Value from try");
  } finally {
    console.log("Finally runs anyway!");
  }
}

console.log(test());
