let xObj = {
  name: "ABC",
  address: {
    city: "GNT",
  },
};
let yObj = { ...xObj };
yObj.name = "XYZ";
console.log("XObj:", xObj.name);
console.log("YObj:", yObj.name);
