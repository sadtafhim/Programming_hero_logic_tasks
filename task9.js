/*
Problem 9: Find the Factorial of a Number
Write a function that calculates the factorial of a number using a loop.

Example:

Input: 5
Output: 120
*/
function factorial(input) {
  let factorialTotal = 1;
  let i = input;

  while (i > 0) {
    factorialTotal *= i;
    i--;
  }

  return factorialTotal;
}
console.log(factorial(5));
