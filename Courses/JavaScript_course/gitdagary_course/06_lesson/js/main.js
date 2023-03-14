let customerIsBanned = true;
let soup = "chicken noodle soup";
let crackers = true;
let reply;
if (customerIsBanned) {
  reply = "No soup for you!";
} else if (soup && crackers) {
  reply = `Here's your order of ${soup} & crackers.`;
} else if (soup) {
  reply = `Here's your order of ${soup}`;
} else {
  reply = `Sorry, we're out of soup`;
}
console.log(reply);

////////////////
// This will return A

let testScore = 94;
let collegeStudent = true;
let grade;

if (testScore >= 90) {
  grade = "A";
} else if (testScore >= 80) {
  grade = "B";
} else if (testScore >= 70) {
  grade = "C";
} else if (testScore >= 60) {
  grade = "D";
} else {
  if (collegeStudent) {
    grade = "U";
  } else {
    grade = "F";
  }
}
console.log(grade);

////////////////
// This will return B

let testScore1 = 80;
let collegeStudent1 = true;
let grade1;

if (testScore1 >= 90) {
  grade1 = "A";
} else if (testScore1 >= 80) {
  grade1 = "B";
} else if (testScore1 >= 70) {
  grade1 = "C";
} else if (testScore1 >= 60) {
  grade1 = "D";
} else {
  if (collegeStudent1) {
    grade1 = "U";
  } else {
    grade1 = "F";
  }
}
console.log(grade1);

////////////////
// This will return U because the testScore is less than 60

let testScore2 = 59;
let collegeStudent2 = true;
let grade2;

if (testScore2 >= 90) {
  grade2 = "A";
} else if (testScore2 >= 80) {
  grade2 = "B";
} else if (testScore2 >= 70) {
  grade2 = "C";
} else if (testScore2 >= 60) {
  grade2 = "D";
} else {
  if (collegeStudent2) {
    grade2 = "U";
  } else {
    grade2 = "F";
  }
}
console.log(grade2);

////////////////
// This will return F because the testScore is < than 60 and the collegeStudent is false

let testScore3 = 59;
let collegeStudent3 = false;
let grade3;

if (testScore3 >= 90) {
  grade3 = "A";
} else if (testScore3 >= 80) {
  grade3 = "B";
} else if (testScore3 >= 70) {
  grade3 = "C";
} else if (testScore3 >= 60) {
  grade3 = "D";
} else {
  if (collegeStudent3) {
    grade3 = "U";
  } else {
    grade3 = "F";
  }
}
console.log(grade3);
