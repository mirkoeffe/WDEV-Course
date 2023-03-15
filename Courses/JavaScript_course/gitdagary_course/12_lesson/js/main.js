// Functions

// Function Declaration Syntax:

function sum() {
  return 2 + 2;
}

console.log(sum());

function sum(num11, num22) {
  return num11 + num22;
}

console.log(sum(2,6));

function sum(num1, num2) {
  console.log(num1);
  console.log(num2);
  return num1 + num2;
}

console.log(sum(2));

function sum(num111, num222) {
  if (num222 === undefined) {
    return num111 + num111;
  }
  return num111 + num222;
}

console.log(sum(5));


// this returns playerOne because of the indexOf methods
function getUserNameFunction(email) {
  return email.slice(0, email.indexOf("@"));
};

console.log(getUserNameFunction("playerOne@email.com"));

// this returns mirko
const getUserNameEmail = function (emaill) {
  return emaill.slice(0, emaill.indexOf("@"));
};

console.log(getUserNameEmail("mirko@mirkodomain.com"));

// this a newer way to write functions and it returns mirko too
const getUserNameEmaill = (emaill) => {
  return emaill.slice(0, emaill.indexOf("@"));
};

console.log(getUserNameEmaill("mirko@mirkodomain.com"));

// any strings we pass to the function it'll set to a propercase(toProperCase)
const toProperCase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(toProperCase("mIrKo"));