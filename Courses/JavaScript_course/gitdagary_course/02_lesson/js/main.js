//! Strings
const myVariable = "Mathematics";

//! The lenght property
//with this property the console will return the length of variable defined above
console.log(myVariable.length);

// with this property the console will return the length of the sentence
console.log("Every person should be educated".length);

//! String Methods
// with this method the console will return the fifth letter of the defined variable
// in this case const myVariable = "Mathematics";
// the position count start at 0
console.log(myVariable.charAt(5));

// The indexOf() method returns the first index at which a given element can be found 
// in the array, or -1 if it is not present.
console.log(myVariable.indexOf("ati"));

// The lastIndexOf() method returns the last index at which a given element can be found
// in the array, or -1 if it is not present. The array is searched backwards, starting 
// at fromIndex.
console.log(myVariable.lastIndexOf("ath"));

// The slice() method returns a portion of array where the value given(5) is the
// starting position
console.log(myVariable.slice(5));
// In this case the console will return the portion of the array
console.log(myVariable.slice(5, 7));

// The toUpperCase method returns the calling string value converted to uppercase
console.log(myVariable.toUpperCase());

// The toLowerCase method returns the calling string value converted to lowercase
console.log(myVariable.toLowerCase());

// The includes() method determines whether an array includes a certain value among its entries, returning true(if there are values) or false(if is empty) as appropriate.
console.log(myVariable.includes());

// The split() method splits the String wherever the character we provide occurs, 
// into an ordered list of substrings by searching for the pattern, puts these 
// substrings into an array, and returns the array. The "e" character will not be included.
console.log(myVariable.split("e"));
// Providing an empty quotes as the split characters returns every characters as separate strings within the resulting Array
console.log(myVariable.split(""));

console.log("Mirko, Simone, Davide".split(","));
