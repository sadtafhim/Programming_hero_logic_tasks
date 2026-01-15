/*
Problem 4: Find the Maximum Number
Write a function that takes an array of numbers and returns the largest number.

Example:

Input: [5, 1, 9, 3]
Output: 9
*/

let input = [5, 1, 9, 3];
let highest = -9999999;
let i = 0;
while (i < input.length) {
  if (input[i] > highest) {
    highest = input[i];
  }
  i++;
}

console.log(highest);
