// let x = 5;
// let y = x;
// y = 20;
// console.log("X:", x);
// console.log("Y:", y);

const { useEffect, use } = require("react");

// let xObj = {
//   name: "ABC",
//   address: {
//     city: "GNT",
//   },
// };
// let yObj = xObj;
// yObj.name = "XYZ";
// console.log("XObj:", xObj);
// console.log("YObj:", yObj);

let bikes = ["Yamaha", "hero", "TVS", "Pulsar", "Royal"];
console.log(delete bikes[1]);
console.log(bikes);
console.log([..."hello"]);

useEffect(() => {
  fetch("https://www.google.com/")
    .then((response) => response.json())
    .then((data) => console.log("Data:", data));
}, []);

fetchUser = async () => {
  let response = await fetch("https://www.google.com/");
  let data = await response.json();
  return data;
};

useEffect(() => {
  let dataUsers = fetchUser();
}, []);

let userData = use(fetchUser());
