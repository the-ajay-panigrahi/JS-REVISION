// +, - *....

// Arithmetic Operator
// Logical Operator
// Comparison/Relational Operator
// Bitwise Operator
// Unary Operator
// Assignment Operator

// Operation
let a = 2;
let b = 3;
console.log(a + b); // 5
console.log(a - b); // -1
console.log(a * b); // 6
console.log(a / b); // 0.666666
console.log(a % b); // 2
console.log(a ** b); // 8
console.log(a == b); // false
console.log(a === b); // false
console.log(a > b); // false
console.log(a < b); //true
console.log(a >= b); // false
console.log(a <= b); // true
console.log(a != b); // true
console.log(true && true); // true
console.log(true && false); // false
console.log(true || false); // true
console.log(!false); //true
console.log(++a);
console.log(--a);
console.log(a--);
console.log(a++);

console.log(null >= 0); // null ==> 0
console.log(null == 0); // false
console.log(null === 0); // false

// Operator precedence(priorty)
// Operator Associativity
// console.log(2 * 4 * 7 / 6 % 2);
console.log(((2 * 4 * 7) / 6) % 2); // Code Readabilty

// Type Casting && Type Casting

// Type Conversion - One data type to another data type
// 23 => "23"

/*
 Type Conversion => 1) Implicit Conversion(Type Coercion) - Automatically by js


                 => 2) Explicit Conversion (Type Casting) - manually done by programmers
*/

/*
   Truthy => Excluding falsy value
   Falsy => 0, -0, 0n, false, "", null, undefined, NaN
*/

let demo = 1 * "8";
let demo2 = "1" + "2";
console.log(demo, typeof demo); // 8
console.log(demo2, typeof demo2); //12 string

let sample = true + 5;
console.log(sample, typeof sample);

let num1 = "23";
console.log(num1, typeof num1); // "23" string
let realNum1 = Number(num1);
console.log(realNum1, typeof realNum1); // 23 number

/*
Constructor functions
Number()
String()
Boolean()
BigInt()
*/

let anotherVariable = Number("1abc");
console.log(anotherVariable, typeof anotherVariable);

console.log(NaN == NaN); // interview
console.log(NaN === NaN); // interview
