/*
Write a function that checks if a string is a palindrome (reads the same forward and backward).

Example:

Input: "madam"
Output: true
Input: "hello"
Output: false
*/

let input = "madam";
let checker = true;
let i = 0;
let j = input.length - 1;

while (i < j) {
  if (input[i] == input[j]) {
    j -= 1;
    i += 1;
    continue;
  } else {
    checker = false;
    break;
  }
}
console.log(checker);
