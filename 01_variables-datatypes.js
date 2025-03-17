// Variables  - It is a box that stores values
// Data Types

// Variables - var, let, const

// let firstName = "Ajay"; // block scope

// {
//   let firstName = "Ravi";
//   console.log(firstName);
// }
// console.log(firstName);
// const pi = 3.14; // block scope

// Data Types
/*
     Primitive Type
    1) Number => 2,4,-23, 56.34
    2) Boolean => true / false
    3) String => "ajay" "" '' `` 
    4) BigInt => 2535756876799978n
    5) Null => stand alone value(empty)
    6) Symbol => Unique 
    7) Undefined => not yet defined

    Non Primitive(Reference) Type
    8)Object => {}
        => 1) Object
        => 2) Array
        => 3) Function Object
 */

// number
let age = 24;
console.log(age, typeof age);

// bigInt
let largeNumber = 436457566867755n;
let largeNumber2 = BigInt(999999999999999999999999);
console.log(largeNumber, typeof largeNumber);
console.log(largeNumber2, typeof largeNumber2);

// boolean
let piyushSirMaritalStatus = !true;
console.log(piyushSirMaritalStatus, typeof piyushSirMaritalStatus);

// null
let temperature = null;
console.log(temperature, typeof temperature);

// undefined
// let favCourse;
let favCourse = undefined;
console.log(favCourse, typeof favCourse);

// string
let lastName = "Choudhary";
console.log(lastName, typeof lastName);

// symbol
let uniqueValue1 = Symbol("123");
let uniqueValue2 = Symbol("123");
// console.log(uniqueValue, typeof uniqueValue);

console.log(uniqueValue1 == uniqueValue2); // false
console.log(uniqueValue1 === uniqueValue2); // false

// Object

let user = {
  naam: "Ajay",
  age: 21,
  isStudent: true,
};

let demoArray = [1, 56, 756, 3423, true, null, undefined];

function printName(pehlaNaam) {
  console.log(pehlaNaam);
}

// console.log(demoArray, typeof demoArray);
printName("Ajay");
console.log(typeof printName);
