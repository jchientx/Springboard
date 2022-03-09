// What does the following code return?
new Set([1, 1, 2, 2, 3, 4]);
// Set {1, 2, 3, 4}

// What does the following code return?
[...new Set("referee")].join("");
// ref

// What does the Map m look like after running the following code?
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
// Map { [ 1, 2, 3 ] => true, [ 1, 2, 3 ] => false }

// hasDuplicate ***
const hasDuplicate = (arr) => {
  return arr.length !== new Set(arr).size;
};
console.log(hasDuplicate([1, 3, 2, 1])); // true
console.log(hasDuplicate([1, 5, -1, 4])); // false

// vowelCount ***
function hasVowel(char) {
  const vowel = "aeiou";
  return vowel.includes(char);
}

function vowelCount(str) {
  const vowelMap = new Map();
  for (let char of str) {
    let lowerChar = char.toLowerCase();
    if (hasVowel(lowerChar)) {
      if (vowelMap.has(lowerChar)) {
        vowelMap.set(lowerChar, vowelMap.get(lowerChar) + 1);
      } else {
        vowelMap.set(lowerChar, 1);
      }
    }
  }
  return vowelMap;
}

console.log(vowelCount("awesome")); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
console.log(vowelCount("Colt")); // Map { 'o' => 1 }
