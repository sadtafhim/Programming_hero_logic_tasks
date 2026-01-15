/*
Problem 4: Find the Maximum Number
Write a function that takes an array of numbers and returns the largest number.

Example:

Input: [5, 1, 9, 3]
Output: 9
*/

function highestFinder(input) {
  let highest = -9999999;
  let i = 0;
  while (i < input.length) {
    if (input[i] > highest) {
      highest = input[i];
    }
    i++;
  }

  return highest;
}

console.log(highestFinder([5, 1, 9, 3]));
