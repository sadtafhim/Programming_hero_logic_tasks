/*
Problem 6: Sum of All Numbers in an Array
Write a function that returns the sum of all numbers in an array.

Example:

Input: [1, 2, 3, 4]
Output: 10
*/

function totalFinder(input) {
  let total = 0;
  let i = 0;
  while (i < input.length) {
    total += input[i];
    i++;
  }

  return total;
}

console.log(totalFinder([1, 2, 3, 4]));
