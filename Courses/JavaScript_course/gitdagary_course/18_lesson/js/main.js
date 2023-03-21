// JSON: JavaScript Object Notation
/*
JSON is used to send and receive data.
JSON is a text format that is completely language independent.
Meaning JSON is used to send & receive data in many languages
...not just in JavaScript.
*/

const myObj = {
  name: "Mirko",
  hobbies: ["eat", "sleep", "code", "music"],
  hello: function () {
    console.log("Hello!");
  },
};

console.log(myObj); // {name: 'Mirko', hobbies: Array(4), hello: ƒ}  main.js:17
console.log(myObj.name); // Mirko                   main.js:18
myObj.hello(); // Hello!                            main.js:13
console.log(typeof myObj); // object                main.js:20

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON); // {"name":"Mirko","hobbies":["eat","sleep","code","music"]} main.js:23
console.log(typeof sendJSON); // string             main.js:24
console.log(sendJSON.name); // undefined            main.js:25

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON); // {name: 'Mirko', hobbies: Array(4)} main.js:28
console.log(typeof receiveJSON); // object          main.js:29
