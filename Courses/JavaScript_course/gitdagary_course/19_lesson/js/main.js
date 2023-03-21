//! JavaScript Errors and Error Handling
"use strict";
// if the following value(mirko) is not defined as it's been done at line 14
// will always return an error

//! ReferenceError
// The ReferenceError object represents an error when a variable
// that doesn't exist (or hasn't yet been initialized) in the
// current scope is referenced.

// variable = "mirko";
// console.log(variable);

/* const variablee = "mirko";
console.log(variablee); */

//! SyntaxError
// The SyntaxError object represents an error when trying to
// interpret syntactically invalid code. It is thrown when
// the JavaScript engine encounters tokens or token order
// that does not conform to the syntax of the language when parsing code.
// it will stop to execute the script

// Object..create()

//! TypeError
// The TypeError object represents an error when an operation could
// not be performed, typically (but not exclusively) when a value
// is not of the expected type.
// const name = "mirko";
// name = "Dave";

const makeError = () => {
  let i = 1;
  while (1 <= 5) {
    try {
      if (i % 2 !== 0) {
        throw new Error("Odd Number!");
      }
      console.log("even Number!");
    } catch (err) {
      console.error(err.stack); // Error: This is a custom error!
      //    at makeError (main.js:35:11)
      //    at main.js:42:1
      // console.error(err.name); // Error
      // console.error(err.message); // This is a custom error!
    } finally {
      console.log("...finally");
      i++;
    }
  }
};
makeError();
