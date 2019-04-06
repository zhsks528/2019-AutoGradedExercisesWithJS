// Write a function called "modulo".

// Given 2 numbers, "modulo" returns the remainder after dividing num1 by num2.

// It should behave as described in the canonical documentation (MDN) for the JavaScript remainder operator:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()

// Notes:
// * Do NOT use the actual built-in modulo (aka "remainder") operator (%) in your implementation.
// * 0 % ANYNUMBER = 0.
// * ANYNUMBER % 0 = NaN.
// * If either operand is NaN, then the result is NaN.
// * Modulo always returns the sign of the first number.

// var output = modulo(25, 4);
// console.log(output); // --> 1

function modulo(num1, num2) {
  let quotient = Math.floor(num1 / num2);
  let product = quotient * num2;

  return num1 - product;
}

var output = modulo(25, 4);
console.log(output);
