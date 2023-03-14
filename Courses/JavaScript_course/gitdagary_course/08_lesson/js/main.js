//! Conditionals: Ternary Operator
// The conditional (ternary) operator is the only JavaScript operator that
// takes three operands: a condition followed by a question mark (?),
// then an expression to execute if the condition is truthy followed by
// a colon (:), and finally the expression to execute if the condition is falsy.
// This operator is frequently used as an alternative to an if...else statement.

// syntax
// condition ? ifTrue : ifFalse;

let soup = "Chicken Noodle Soup";
let response = soup ? "Yes, we have a soup." : "Sorry, no soup today.";
console.log(response);

// this returns "Sorry, no soup for you! because the isCustomerBanned = true"
let soupp = "Chicken Noodle Soup";
let isCustomerBanned = true;
let soupAccess = isCustomerBanned
  ? "Sorry, no soup for you!"
  : soupp
  ? `Yes, we have ${soupp} today.`
  : "Sory, no soup.";
console.log(soupAccess);

// this returns `Yes, we have ${souppp} today.` because the isCustomerBanned = false"
let souppp = "Chicken Noodle Soup";
let isCustomerBannedd = false;
let soupAccesss = isCustomerBannedd
  ? "Sorry, no soup for you!"
  : souppp
  ? `Yes, we have ${souppp} today.`
  : "Sory, no soup.";
console.log(soupAccesss);

// this returns "Sorry, no soup for you! because the isCustomerBanned = true"
let soupppp;
let isCustomerBanneddd = true;
let soupAccessss = isCustomerBanneddd
  ? "Sorry, no soup for you!"
  : soupppp
  ? `Yes, we have ${soupppp} today.`
  : "Sory, no soup.";
console.log(soupAccessss);

// this returns "Sory, no soup." because souppppp is undefined and the 2nd Ternary Operator will evalueate souppppp as false"
let souppppp;
let isCustomerBannedddd = false;
let soupAccesssss = isCustomerBannedddd
  ? "Sorry, no soup for you!"
  : souppppp
  ? `Yes, we have ${souppppp} today.`
  : "Sory, no soup.";
console.log(soupAccesssss);

let testScore = 55;
let myGrade =
  testScore > 89
    ? "A"
    : testScore > 79
    ? "B"
    : testScore > 69
    ? "C"
    : testScore > 59
    ? "D"
    : "F";
console.log(`My test grade is ${myGrade}.`);

// changing the values of the variables will change the result of the game!
let playerOne = "paper";
let computer = "scissors";
let result =
  playerOne === computer
    ? "Tie Game!"
    : playerOne === "rock" && computer === "paper"
    ? "Computer wins!"
    : playerOne === "paper" && computer === "scissors"
    ? "Computer wins!"
    : playerOne === "scissors" && computer === "rock"
    ? "Computer wins!"
    : "playerOne wins!";
console.log(result);
