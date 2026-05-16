// All Questions list available in README.MD File in this path
/* 8. Remove duplicates — return only unique values.. */

const arr = [1, 2, 2, 3, 4, 4, 5];
//const removeDup = [...new Set(arr)];
//console.log("removeDup:", removeDup);

const filterArr = arr.filter((val, index) => val !== index);
console.log("filterArr:", filterArr);

arr.reduce(() => {});
