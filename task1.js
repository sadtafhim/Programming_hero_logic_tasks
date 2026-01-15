/*
Write a function that takes a string and returns it reversed.

Example:

Input: "hello"
Output: "olleh"
*/

let input = "hello";

let checker = [];
let i = input.length - 1;

while (i >= 0) {
  checker.push(input.charAt(i));
  i--;
}

checker = checker.join("");
console.log(checker);
