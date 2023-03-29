// Web Storage API

// Not part of the DOM - refers to the Window API
// Available to JS via the global variable: window

// We do not have to type window. It is implied:

/* window.alert(window.location);
alert(location); */

const myArray = ["eat", "sleep", "code"];

const myObject = {
  name: "Mirko",
  age: 31,
  hobbies: ["eat", "sleep", "code"],
  logName: function () {
    console.log(this.name);
    console.log(this.age);
  },
};

localStorage.setItem("myLocalStore", JSON.stringify(myArray));
// localStorage.removeItem("myLocalStore"); same as the following line
// localStorage.clear();
const key = localStorage.key(0);
const mySessionData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(mySessionData);
console.log(key);
