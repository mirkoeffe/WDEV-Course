//! var, let, and const

// The var statement declares a function-scoped or globally-scoped
// variable, optionally initializing it to a value.

// var will allow reassignement like this which returns 2.
var x = 1;
var x = 2;
console.log(x);

// The let declaration declares a block-scoped local variable,
// optionally initializing it to a value.

// let will allow reassignement but in a different way, still it returns 1.
let y = 1;
y = 2;
console.log(y);

// The const declaration creates block-scoped constants, much like variables
//  declared using the let keyword. The value of a constant can't be
// changed through reassignment (i.e. by using the assignment operator), and it
// can't be redeclared (i.e. through a variable declaration). However,
// if a constant is an object or array its properties or items can
// be updated or removed.

// this returns an error because const can't be reassigned/redeclared
//
/* const z = 1;
z = 2;
console.log(z); */

// global scope
var b = 1;
let c = 2;
const d = 3;

// local scope
// function scope
function myFunc() {
  const z = 5;
  console.log(y);

  // local scope
  // block scope
  {
    let y = 4;
    console.log(y);
  }
}

myFunc();

// global scope
var xx = 1; // function scope
let yy = 2; // block scope
const zz = 3;

console.log(`global: ${xx}`); // global scope
console.log(`global: ${yy}`); // global scope
console.log(`global: ${zz}`); // global scope

function myFunct() {
  console.log(`function: ${xx}`); // function scope
  console.log(`function: ${yy}`); // function scope
  console.log(`function: ${zz}`); // function scope

  {
    console.log(`block: ${xx}`); // block scope
    console.log(`block: ${yy}`); // block scope
    console.log(`block: ${zz}`); // block scope
  }
}

myFunct();

function myFunctt() {
  var xx = 10; // function scope
  const zz = 5; // function scope
  console.log(`function: ${xx}`); // function scope
  console.log(`function: ${yy}`); // function scope
  console.log(`function: ${zz}`); // function scope

  {
    console.log(`block: ${xx}`); // block scope
    console.log(`block: ${yy}`); // block scope
    console.log(`block: ${zz}`); // block scope
  }
}

myFunctt();

function myFuncttt() {
  var xx = 10;
  const zz = 5;
  console.log(`function: ${xx}`);
  console.log(`function: ${yy}`);
  console.log(`function: ${zz}`);

  {
    var xx = 11;
    const zz = 6;
    console.log(`block: ${xx}`);
    console.log(`block: ${yy}`);
    console.log(`block: ${zz}`);
  }
}

myFuncttt();