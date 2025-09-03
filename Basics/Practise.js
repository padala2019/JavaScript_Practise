/* const categories = ["Laptops", "watches", "TV", "mobiles", "Tablets"];
// O/P: Provide 10 records when user select any category from list with id, categoryName, price, quatity.

const productList = {
  id: 0,
  categoryName: "mobiles",
  price: 20,
  quantity: 3,
};

function getParticularProductData(catgry) {
  let results = [];
  for (let i = 0; i < 10; i++) {
    results.push({
      ...productList,
      id: i,
      categoryName: `${catgry}${i}`,
      price: 20 + i,
      quantity: 3,
    });
  }
  return results;
}
const getFinalVal = getParticularProductData(categories[2]);
console.log("getFinalData:", getFinalVal);
 */

const input = [
  [1, 2, 3],
  [3, 2, 1],
  [4, 5, 6],
  [6, 5, 4],
  [1, 1, 2],
];

const groupSimilarArrays = (arr) => {
  const map = new Map();

  for (const subArr of arr) {
    const sortedKey = subArr.sort((a, b) => a - b).toString();
    console.log("sortedKey:", sortedKey);

    if (!map.has(sortedKey)) {
      map.set(sortedKey, []);
    }
    map.get(sortedKey).push(subArr);
    console.log("map:", map.values());
  }
  return Array.from(map.values());
};

const result = groupSimilarArrays(input);
console.log("Result:", result);
// result will be: [ [ [1, 2, 3], [3, 2, 1] ], [ [4, 5, 6], [6, 5, 4] ], [ [1, 1, 2] ] ]
