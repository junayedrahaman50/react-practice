"use strict";

/* Some Operators like and or or in Javascript has a feature called short-circuiting, short-circuiting in logical operators means that In ceratain conditions the operator will immedietly return the first value and not even look at the second value */
/* When first value is true the and operator will automatically return the second operand. No matter what that is*/
/* When first value is false the and operator will automatically return first value and doesn't check the second value. That is short circuiting. This acts little bit like if statement */
console.log(true && "some string"); // No short circuiting
console.log(false && "some text...."); // Short
// falsy values in js: 0, "", NaN, null, undefined, 0n: BigInt zero (0n), -0: The number negative zero (-0).

// Apart from this any value is truthy value. "Junayed" is truthy
console.log("Junayed" && "Junayed is truthy value");
console.log(0 && "Some text.."); // Short circuiting

// Or operator works exactly the opposite way
/* It short circuits when the 1st operand is true and will then return it. If 1st operand is false it will return the 2nd operand(No short circuiting)  */

console.log(true || "some text");
console.log(false || "some string");
