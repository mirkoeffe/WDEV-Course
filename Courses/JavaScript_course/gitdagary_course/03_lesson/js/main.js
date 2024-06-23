//!Numbers

// An integer is a whole number.
const myNumber = 26;

console.log(myNumber);

// A number with a decimal point is a float which references the "floating point"
const myFloat = 26.01;

console.log(myFloat);

const myString = "26";

// this will give a false result because myString is not a number
 console.log(myNumber === myString);

// this will give a true result because myString is converted into a number
console.log(Number(myString) === myNumber);

// this will return NaN which is an acronym of Not a Number
console.log(Number("Mirko"));
console.log(Number(undefined));

// this will return 1(true) and 0(false)
console.log(Number(true));
console.log(Number(false));

//!Number Methods

// The Number.isInteger() method determines wheter the passed value is an integer
console.log(Number.isInteger(myNumber)); // true
console.log(Number.isInteger(myFloat)); // false

// The Number.parseFloat() method parses an argument and returns a floating point 
// number. If a number cannot be parsed from the argument, it returns NaN
console.log(Number.parseFloat(myFloat)); // this will return 26.01
console.log(Number.parseFloat(myNumber)); // this will return 26
console.log(Number.parseFloat(myString)); // this will return 26

// The toFixed() method formats a number according to how many decimal points you
// provide as the parameter.
const myStringg = "26.112"

console.log(Number.parseFloat(myStringg).toFixed(3)); // this will return 26.112

// The Number.parseInt() method parses a string argument and returns an integer
// also removes the decimal numbers
console.log(Number.parseInt(myFloat)); // this will return 26
console.log(Number.parseInt(myStringg)); // this will return 26

// The toString() method returns a string representing the number
console.log(myFloat.toString());
console.log(typeof Number.parseFloat(myString)); // this will return the type

//! Chaining = Using several methods chained together
console.log(Number.parseFloat("1.23325abc").toFixed(4).toString());

// The Number.isNan() method determines whether the passed value is NaN AND 
// its type is Number
console.log(Number.isNaN("Mirko"));

// The global isNan() function determines whether a value is NaN or not.
console.log(isNaN("Mirko")); // this will return true
console.log(isNaN("26")); // this will return false because is a number