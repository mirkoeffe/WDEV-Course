//! Math Methods and Properties

// This math method returns the value of PI(3.141592653589793)
console.log(Math.PI);

// The Math.trunc() static method returns the integer part of a number by removing 
// any fractional digits.
console.log(Math.trunc(Math.PI));

// The Math.round() static method returns the value of a number rounded to 
// the nearest integer.
console.log(Math.round(Math.PI));
console.log(Math.round(3.3)); // this returns 3
console.log(Math.round(3.5)); // this returns 4
console.log(Math.round(5.57346)); // this returns 6

// The Math.ceil() static method always rounds up and returns the smaller 
// integer greater than or equal to a given number.
console.log(Math.ceil(0.95)); // this returns 1
console.log(Math.ceil(1.0095)); // this returns 2
console.log(Math.ceil(Math.PI)); // this returns 4

// The Math.floor() static method always rounds down and returns the 
// largest integer less than or equal to a given number.
console.log(Math.floor(Math.PI)); // this returns 3
console.log(Math.floor(7.99987)); // this returns 7
console.log(Math.floor(2.09653)); // this returns 2

// The Math.pow() static method returns the value of a base raised to a power.
console.log(Math.pow(2, 10)); // this returns 1024
console.log(Math.pow(2, 3)); // this returns 8 (2x2x2)
console.log(Math.pow(7, -2)); // this returns 0.02040816326530612 (1/49) or (7/7/7)

// The Math.min() static method returns the smallest of the numbers given as 
// input parameters, or Infinity if there are no parameters.
console.log(Math.min(12, 7, 10)); // this returns 7 or the smallest number
console.log(Math.min()); // this returns Infinity

const array1 = [2, 3, 12];
// this returns the smallest number among the numbers provided in the array
console.log(Math.min(...array1)); 

// The Math.max() static method returns the largest of the numbers given as input parameters, or -Infinity if there are no parameters.
console.log(Math.max(12, 7, 10)); // this returns 12 or the largest number

const array2 = [2, 3, 22];
// this returns the largest number among the numbers provided in the array
console.log(Math.max(...array2));

// The Math.random() static method returns a floating-point, pseudo-random number 
// that's greater than or equal to 0 and less than 1, with approximately uniform 
// distribution over that range — which you can then scale to your desired range. 
// The implementation selects the initial seed to the random number generation 
// algorithm; it cannot be chosen or reset by the user.
// From 0 to 1
console.log(Math.random());
console.log(Math.random());

// From 1 to 10
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

// From 1 to 20
console.log(Math.floor(Math.random() * 20) + 1);
console.log(Math.floor(Math.random() * 20) + 1);