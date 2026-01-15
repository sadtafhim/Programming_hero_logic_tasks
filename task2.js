/*
Problem 2: Count Vowels in a String
Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

Example:

Input: "programming"
Output: 3
*/

function vowelCounter(input) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  i = 0;

  while (i < input.length) {
    if (vowels.includes(input[i])) {
      count += 1;
    }
    i++;
  }

  return count;
}

console.log(vowelCounter("programming"));
