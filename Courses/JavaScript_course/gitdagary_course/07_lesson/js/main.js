// Conditionals: Switch Statements

// The switch statement evaluates an expression, matching the expression's
// value against a series of case clauses, and executes statements after
// the first case clause with a matching value, until a break statement is encountered.
// The default clause of a switch statement will be jumped to if
// no case matches the expression's value.

// syntax
// this will return No Match because Switch Statements needs strict
// matches(without "").
switch ("2") {
  case 1:
    console.log("1");
    break;

  case 2:
    console.log("2");
    break;

  case 3:
    console.log("3");
    break;

  default:
    console.log("No Match");
}

// this returns 1
switch (1) {
  case 1:
    console.log("1");
    break;

  case 2:
    console.log("2");
    break;

  case 3:
    console.log("3");
    break;

  default:
    console.log("No Match");
}

// this returns a random number
switch (Math.floor(Math.random() * 3 + 1)) {
  case 1:
    console.log("1");
    break;

  case 2:
    console.log("2");
    break;

  case 3:
    console.log("3");
    break;

  default:
    console.log("No Match");
}

// this is a tie game
let playerOne = "rock";
let computer = "rock";

switch (playerOne) {
  case computer:
    console.log("Tie game!");
    break;
  case "rock":
    if (computer === "paper") {
      console.log("computer wins!");
    } else {
      console.log("playerOne wins!");
    }
    break;
  case "paper":
    if (computer === "scissors") {
      console.log("computer wins!");
    } else {
      console.log("playerOne wins!");
    }
    break;
  default:
    if (computer === "rock") {
      console.log("computer wins!");
    } else {
      console.log("playerOne wins!");
    }
}

// computer wins
let playerOnee = "rock";
let computerr = "paper";

switch (playerOnee) {
  case computerr:
    console.log("Tie game!");
    break;
  case "rock":
    if (computerr === "paper") {
      console.log("computer wins!");
    } else {
      console.log("playerOne wins!");
    }
    break;
  case "paper":
    if (computerr === "scissors") {
      console.log("computer wins!");
    } else {
      console.log("playerOne wins!");
    }
    break;
  default:
    if (computerr === "rock") {
      console.log("computer wins!");
    } else {
      console.log("playerOne wins!");
    }
}

// playerOne wins
let playerOneee = "rock";
let computerrr = "scissors";

switch (playerOneee) {
  case computerrr:
    console.log("Tie game!");
    break;
  case "rock":
    if (computerrr === "paper") {
      console.log("computer wins!");
    } else {
      console.log("playerOne wins!");
    }
    break;
  case "paper":
    if (computerrr === "scissors") {
      console.log("computer wins!");
    } else {
      console.log("playerOne wins!");
    }
    break;
  default:
    if (computerrr === "rock") {
      console.log("computer wins!");
    } else {
      console.log("playerOne wins!");
    }
}
