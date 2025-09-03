// All Questions list available in README.MD File in this path
/* 8. Longest substring without repeats — sliding window style. */

function longestSubStringWithOutRepeatChar(s) {
  let left = 0;
  let maxLength = 0;
  let set = new Set();
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}
let str = "pwwkew";
let longestSubStr = longestSubStringWithOutRepeatChar(str);
console.log("LongestSubString:", longestSubStr); // 3
