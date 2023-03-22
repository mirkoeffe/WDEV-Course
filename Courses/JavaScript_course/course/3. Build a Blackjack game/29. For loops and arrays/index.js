let messages = [
  "Hey, how's it going?",
  "I'm great, thank you! How about you?",
  "All good. Been working on my portfolio lately.",
  "Same here!",
  "Great to hear",
];

// DRY - Don't repeat yourself
// console.log(messages[0])
// console.log(messages[1])
// console.log(messages[2])
// console.log(messages[3])

// for (let i = 0; i < 5; i += 1) {
//  console.log(i);
//  console.log(messages[i]);
// }

// using the messages.length property the loop will always count up to the final index
for (let i = 0; i < messages.length; i += 1) {
    console.log(i); // it logs the numbers
    console.log(messages[i]); // it logs the strings
  }
