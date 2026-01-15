/*
Write a function that takes a string and returns it reversed.

Example:

Input: "hello"
Output: "olleh"
*/

function reverser(input) {
  let checker = [];
  let i = input.length - 1;

  while (i >= 0) {
    checker.push(input.charAt(i));
    i--;
  }

  checker = checker.join("");
  return checker;
}

let input = "hello";
console.log(reverser(input));
