/*
Problem 8: Capitalize First Letter of Each Word
Write a function that capitalizes the first letter of each word in a string.

Example:

Input: "hello world"
Output: "Hello World"
*/
function capitalization(input) {
  let result = "";
  let i = 0;
  let capitalizeNext = true;

  while (i < input.length) {
    if (capitalizeNext && input[i] !== " ") {
      result += input[i].toUpperCase();
      capitalizeNext = false;
    } else {
      result += input[i];
    }

    if (input[i] === " ") {
      capitalizeNext = true;
    }

    i++;
  }

  return result;
}

console.log(capitalization("hello"));
