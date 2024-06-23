/* EXERCISE 1

Write a function to create a new string from a given string taking the first 3 characters and the last 3 characters of the original string and concatenating them together. The string length must be 3 or more, if not, the original string is returned.

first thing to do in a function is to check if the length of the string is 3 or more. If not, return
second thing to do is to take the first 3 characters and the last 3 characters of the string
 */


function createNewString(str) {
    if (str.length < 3) {
        return str;
    }
    return str.slice(0, 3) + str.slice(-3);
}

console.log(createNewString("hel")); // "hel"
console.log(createNewString("abcdef"));

/* EXERCISE 2

Write a function to create a new string from a given string taking the first 3 characters and the last 3 characters of the original string and concatenating them together. The string length must be 3 or more, if not, the original string is returned.

In addition to the previous requirements, the function should also remove any duplicate characters from the concatenated string before returning it.

first thing to do in a function is to check if the length of the string is 3 or more. If not, return
second thing to do is to take the first 3 characters and the last 3 characters of the string
third thing to do is to concatenate the first 3 characters and the last 3 characters
fourth thing to do is to remove any duplicate characters from the concatenated string
fifth thing to do is to return the modified string
 */

function createNewStringWithoutDuplicate(str) {
    if (str.length < 3) {
        return str;
    }

    const concatenatedString = str.slice(0, 3) + str.slice(-3);
    const uniqueChars = [];

    for (const char of concatenatedString) {
        if (!uniqueChars.includes(char)) {
            uniqueChars.push(char);
        }
    }
    return uniqueChars.join('');
}

console.log(createNewStringWithoutDuplicate("helloo")); // helo
console.log(createNewStringWithoutDuplicate("iloveBerlin")); // ilon


/* EXERCISE 3

Write a function to extract the first half of a string of even length.

first thing to do in a function is to check if the length of the string is even. If not, return an error message
second thing to do is to divide the string into two equal halves
third thing to do is to return the first half of the string
fourth thing to do is to test the function with different inputs
*/

const extractFirstHalf = (str) => {
    if (str.length % 2 !== 0) {
        return 'The length is not even';
    } else {
        return str.slice(0, str.length / 2);
    }
}

console.log(extractFirstHalf("Mirk"));