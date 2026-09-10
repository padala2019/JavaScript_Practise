/* 16. Reverse read vowels and replace in string */

function reverseVowels(s) {
  let vowelStr = "";
  let notVowelStr = "";

  // Store all vowels in vowelStr
  for (let i = 0; i < s.length; i++) {
    if ("aeiou".includes(s[i])) {
      vowelStr += s[i];
    } else {
      notVowelStr += s[i];
    }
  }

  console.log("vowelStr:", vowelStr);
  console.log("notVowelStr:", notVowelStr);

  // Reverse read vowels and replace in string
  let result = s.split("");
  console.log("result:", result, result.length, s.length);

  let idx = vowelStr.length - 1;
  console.log("idx_before:", vowelStr.length);
  console.log("idx:", idx);

  for (let i = 0; i < s.length; i++) {
    if (vowelStr.includes(s[i])) {
      result[i] = vowelStr[idx--];
    }
    console.log("idx:", idx);
  }

  return result.join("");
}

let sStr = "helloworld";
console.log("Reverse Vowels:", reverseVowels(sStr));
