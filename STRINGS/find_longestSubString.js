function longestSubString(s) {
  let maxLength = 0;
  let set = new Set();
  let left = 0;
  let right = 0;

  while (right < s.length) {
    let letters = s[right];
    if (!set.has(letters)) {
      set.add(letters);
      console.log(set);
      maxLength = Math.max(maxLength, set.size);
      // Math.max(maxLength, set.size) expression compares the values of maxLength and set.size and returns the larger one
      /*  let maxLength = 10;
                 let set = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]); // set.size = 11
                let largestValue = Math.max(maxLength, set.size); // largestValue will be 11 */
      right++;
      console.log("Letter:", letters);
    } else {
      set.delete(s[left]);
      left++;
    }
  }
  return maxLength;
}
let intialStr = "abcabcbb";
console.log(
  "LongestSubStringWithoutRepeatingCharacters:",
  longestSubString(intialStr)
);
