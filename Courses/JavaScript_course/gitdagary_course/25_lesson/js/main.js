// Fetch API requires a discussion of...
// Callbacks, Promises, Thenables, and Async/Await

// Callbacks
//
// A callback function is a function passed into another function
// as an argument, which is then invoked inside the outer function
// to complete some kind of routine or action.

// function firstFunction(paramters, callback) {
// do stuff
//   callback();
// }

// AKA "callback hell"
// not commonly used

// firstFunction(para, function () {
//   secondFunction(para, function () {
//     thirdFunction(para, function () {});
//   });
// });

// Promises
//
//The Promise object represents the eventual completion (or failure)
// of an asynchronous operation and its resulting value.
//
// 3 states: Pending, Fullfilled, Rejected
//
const myPromise = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve("Yes! Resolved the promise!");
  } else {
    reject("No! Rejected the promise.");
  }
});
/* 
console.log(myPromise);

myPromise
  .then((value) => {
    return value + 1;
  })
  .then((newValue) => {
    console.log(newValue);
  })
  .catch((err) => {
    console.error(err);
  });
 */

const myNextPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("myNextPromise resolved!");
  }, 3000);
});

myNextPromise.then((value) => {
  console.log(value);
});

myPromise.then((value) => {
  console.log(value);
});

// Pending

const users = fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((user) => {
      console.log(user);
    });
  });

console.log(users);

// Async / Await

const myUsers = {
  userList: [],
};

const myCoolFunction = async () => {
  const responseOne = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await responseOne.json();
  console.log(jsonUserData);
  return jsonUserData;
};

const anotherFunc = async () => {
  const newData = await myCoolFunction();
  myUsers.userList = newData;
  console.log(myUsers.userList);
};

anotherFunc();
console.log(myUsers.userList);

// workflow funciton

const getAllUserEmails = async () => {
  const responseTwo = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserDataTwo = await responseTwo.json();

  const userEmailArray = jsonUserDataTwo.map((userTwo) => {
    return userTwo.email;
  });

  postToWebPage(userEmailArray);
};

const postToWebPage = (dataThree) => {
  console.log(dataThree);
};

getAllUserEmails();

// 2nd parameter of Fetch is a object

/* const requestJoke = async (firstName, lastName) => {
  const responseThree = await fetch(
    `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
  );
  const jsonResponse = await responseThree.json();

  console.log(jsonResponse.value.joke);
};

requestJoke("Clint","Eastwood"); */

// abstract into functions

// maybe from a form

const getDataFromForm = () => {
  const requestObj = {
    firstName: "Bruce",
    lastName: "Lee",
    categories: ["nerdy"],
  };
  return requestObj;
};

const buildRequestUrl = (requestData) => {
  return `http://api.icndb.com/jokes/random?firstName${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`;
};

const requestJoke = async (url) => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  const joke = jsonResponse.value.joke;
  postJokeToPage(joke);
};

const postJokeToPage = (joke) => {
  console.log(joke);
};

const processJokeRequest = async () => {
  const requestData = getDataFromForm();
  const requestUrl = buildRequestUrl(requestData);
  await requestJoke(requestUrl);
  console.log("finished");
};

processJokeRequest();
