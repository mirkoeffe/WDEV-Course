//! Arrays
const myArray = [];

// add elements to an array
myArray[0] = "Mirko";
myArray[1] = "1001";
myArray[2] = false;
myArray[3] = "Mare";

// refer to an array
console.log(myArray);

// length property
// this returns the lenght of the array(in this case 4)
console.log(myArray.length); 

// last element in an array
console.log(myArray[myArray.length - 1]);

// this returns the element n.1(1001)
console.log(myArray[1]); 

// The push() method adds one or more elements to the end of an array 
// and returns the new length of the array.
myArray.push("school");
// Now that "school" is pushed, it's included to the log
console.log(myArray); 

// The pop() method removes the last element from an array and returns
// that element without printing the value in the console. 
// This method changes the length of the array.
myArray.pop();

console.log(myArray);

// this prints only the last item of the array. In this case "Mare" because "school"
// was popped off the array
const lastItem = myArray.pop();

console.log(lastItem);

// The unshift() method adds one or more elements to the beginning of
// an array and returns the new length of the array.
myArray.unshift(26);

console.log(myArray);

const newLength = myArray.unshift(11);
// prints the new length of the array with "11" and "26" are at the front
console.log(newLength);
console.log(myArray);

// The shift() method removes the first element from an array and 
// returns that removed element. This method changes the length of the array.
const firstItem = myArray.shift();

console.log(firstItem); // this returns the item "11" that was removed
console.log(myArray); // and with this log we'll see that the "11" value was removed

// The delete operator removes a property from an object. If the property's 
// value is an object and there are no more references to the object, 
// the object held by that property is eventually released automatically.
delete myArray[1];

console.log(myArray); // it returns the array with an empty value at the 1 position

// The splice() method changes the contents of an array by removing 
// or replacing existing elements and/or adding new elements in place

// this will delete the value and the position n.1
myArray.splice(1, 1);

console.log(myArray);

// this will add a new value to the array where
// 1 stands for, in which position we want to add the value
// 0 stands for, don't replace any values
// 91 stans for the value we want to add
myArray.splice(1, 0, 91);

console.log(myArray);

// The slice() method returns a shallow copy of a portion of an array 
// into a new array object selected from start to end (end not included) 
// where start and end represent the index of items in that array. 
// The original array will not be modified.
const ourArray = ["A", "B", "C", "D", "E"];
// 2 stands for the starting point and 4 for the ending point
const newArray = ourArray.slice(2,4);

console.log(newArray);

// The reverse method reverses an array
ourArray.reverse();

console.log(ourArray);

// The join() method creates and returns a new string by concatenating all of the 
// elements in an array (or an array-like object), separated by commas or a 
// specified separator string. If the array has only one item, then that 
// item will be returned without using the separator.
const newString = ourArray.join();

console.log(newString);

// The split() method takes a pattern and divides a String into an ordered 
// list of substrings by searching for the pattern, puts these substrings 
// into an array, and returns the array.
const anArray = newString.split(",");

console.log(anArray);

// The concat() method concatenates the string arguments to the calling 
// string and returns a new string.
const myArrayA = ["A", "B", "C"];
const myArrayB = ["D", "E", "F"];

const newArrayA = myArrayB.concat(myArrayA);

console.log(newArrayA);

// this returns [Array(3), Array(3)] because there are no spread operators(...)
const newArrayAB = [myArrayB, myArrayB];

console.log(newArrayAB);

// this returns ['D', 'E', 'F', 'A', 'B', 'C'] because there are spread operators
const newArrayABC = [...myArrayB, ...myArrayA];

console.log(newArrayABC);

//! Nested Arrays
const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf balls", "tennis balls"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["swat tops", "sweat pants", "hoodies"];

// position 0 of the equipShelfA returns baseball
console.log(equipShelfA[0]);
// position 0 of the clothesShelfB returns swat tops
console.log(clothesShelfB[0]); 

const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];

// equipDept, equipShelfB, position 2 returns tennis balls
console.log(equipDept[1][2]);
// clothesDept, clothesSelfB, position 2 returns hoodies
console.log(clothesDept[1][2]);

const sportsStore = [equipDept, clothesDept];
// sportsStore, equipDept, equipShelfB, position 1 returns golf balls
console.log(sportsStore[0][1][1]);
// sportsStore, clothesDept, clothesShelfA, position 2 returns jerseys
console.log(sportsStore[1][0][2]);