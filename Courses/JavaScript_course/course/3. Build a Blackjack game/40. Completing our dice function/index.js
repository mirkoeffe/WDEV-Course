// Try to modify the expression so that we get a range from 1 to 6
let randomNumber = Math.floor(Math.random() * 6) + 1;

console.log(randomNumber);

// Create a function, rolldice(), that returns a random number between 1 and 6

function rollDice() {
  let someNumber = Math.floor(Math.random() * 6) + 1;
  return someNumber;
}

console.log(rollDice());
