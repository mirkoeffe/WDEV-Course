//! Loops


// The while statement creates a loop that executes a specified statement
// as long as the test condition evaluates to true. The condition is 
// evaluated before executing the statement.
let myNumber = 0;
while (myNumber < 50) {
  myNumber++;
  console.log(myNumber);
}

// this increments the numbers by the value that we give(in this case 2)
while (myNumber < 50) {
  myNumber += 2;
  console.log(myNumber);
}

// don't create an endless loop because it'll run forever until we run out
// of memory

// The do...while statement creates a loop that executes a specified statement 
// until the test condition evaluates to false. The condition is evaluated 
// after executing the statement, resulting in the specified statement 
// executing at least once.
do {
  myNumber += 2;
  console.log(myNumber);
} while (myNumber < 50);

do {
  console.log(myNumber);
} while (myNumber < 50 );

// The for statement creates a loop that consists of three optional expressions, 
// enclosed in parentheses and separated by semicolons, followed by 
// a statement (usually a block statement) to be executed in the loop.

// this returns from 0 to 10 adding 1 number each time
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// this returns from 0 to 9 adding 1 number each time
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// this returns from 1 to 9 adding 1 number each time
for (let i = 1; i < 10; i++) {
  console.log(i);
}

// this returns from M to O 1 letter each time
let name = "Mirko";
for (let i = 0; i < name.length; i++) {
  console.log(name.charAt(i));
}

// this returns M r o
for (let i = 0; i < name.length; i+=2) {
  console.log(name.charAt(i));
}

// if the while loop is not broken(break) will run forever
let counter = 0;
let myLetter;
while (true) {
  myLetter = name[counter];
  console.log(myLetter);
  if (myLetter === "k") break;
  counter++;
}

while (counter <= 3) {
  myLetter = name[counter];
  console.log(myLetter);
  if (counter === 1) {
    counter += 2;
    continue;
  }
  if (myLetter === "k") break;
  counter++;
}
console.log(counter);
// 