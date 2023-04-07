// const credits = 0;

// if (credits) {
//   console.log("Let's play 🎰");
// } else {
//   console.log("Sorry, you have no credits 😭");
// }

// falsy

// false
// 0
// ""
// null -> how you as a developer signalize emptiness
// undefined -> how JavaScript signalizes emptiness
// NaN

// truthy

// true
// any number major to 0
// "fdjakl" string with at least one value

let currentViewers = null;

currentViewers = ["jane", "nick"];

console.log(currentViewers);

function letViewers() {
  if (currentViewers) {
    // do something , e.g. notify the live streamers
    console.log("we have viewers");
  } else {
    console.log("There are no viewers");
  }
}

letViewers();

currentViewers = null;

letViewers();

currentViewers = 5;

letViewers();
