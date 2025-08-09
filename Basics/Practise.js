const arr = [1, [2, 3, 4], 5]; // [1, [4,9,16], 25]

function getNormalArray(arr) {
  return arr.map((num) => {
    //Approach 1
    return Array.isArray(num) ? getNormalArray(num) : num * num;

    // Approach 2
    // if (Array.isArray(num)) return getNormalArray(num);
    // else return num * num;
  });
}

const finalArray = getNormalArray(arr);
console.log("FinalArray:", finalArray); // [ 1, [ 4, 9, 16 ], 25 ]
