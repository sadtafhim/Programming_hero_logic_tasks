/*
Problem 7: Find Even Numbers in an Array
Write a function that returns all even numbers from a given array.

Example:

Input: [1, 2, 3, 4, 5, 6]
Output: [2, 4, 6]
*/
function evenFinder(input) {
  let even = [];
  let i = 0;
  while (i < input.length) {
    if (input[i] % 2 != 0) {
      i++;
      continue;
    } else {
      even.push(input[i]);
      i++;
    }
  }

  return even;
}

console.log(evenFinder([1, 2, 3, 4, 5, 6]));
