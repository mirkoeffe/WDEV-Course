//! User Input
alert("Hello Mirko!");

let myBoolean = confirm("Ok === True\nCancel === False");
console.log(myBoolean);

let name = prompt("Please enter your name.");
console.log(typeof name); // this is not required
console.log(name);

let namee = prompt("Please enter your name.");
console.log(typeof namee); // this is not required
console.log(namee ?? "You didn't enter your name");


// this is the best way to use the prompt input
let nameee = prompt("Please enter your name.");
if (nameee) {
  console.log(nameee);
} else {
  console.log("You didn't enter your name");
}
