/* EXERCISE 1

Write a function that takes numbers and check whether one of the numbers is 100 or if the sum of the numbers is 100
 */

function checkNumbers(num1, num2) {
    if (num1 || num2 === 100 || (num1 + num2) === 100) {
        return true
    } return false
}

console.log(checkNumbers(0, 1));
console.log(checkNumbers(100, 1));
console.log(checkNumbers(0, 100));
console.log(checkNumbers(50, 50));


/* EXERCISE 2

Write a function to get the extension of a filename
 */

function getFileExtension(str) {
    return str.slice(str.lastIndexOf("."));
}

console.log(getFileExtension("index.html")); // .html
console.log(getFileExtension("webpack.config.js")); // .js

/*  EXERCISE 3

Write a function to create a new string adding "New!" in front of a give string.
If the given string begins with "New!" already then return the original string.
 */

const oldString = "New! Offers!";
function createString(str) {
    // step 1
    let newString = "";

    if (!str.startsWith("New!")) {
        newString = `New! ${str}`;
        return newString;
    }
    return str;


}


console.log(createString("oldString"));


