/*
Problem 5: Remove Duplicates from an Array
Write a function that removes all duplicate numbers from an array.

Example:

Input: [1, 2, 2, 3, 4, 4]
Output: [1, 2, 3, 4]
 */

function duplicateFinder(input) {
  let checked = [];
  let i = 0;
  while (i < input.length) {
    if (checked.includes(input[i])) {
      i++;
      continue;
    } else {
      checked.push(input[i]);
      i++;
    }
  }

  return checked;
}

console.log(duplicateFinder([1, 2, 2, 3, 4, 4]));
