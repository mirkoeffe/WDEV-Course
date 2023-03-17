//! Objects
// key-value pairs in curly braces
const myObj = {name: "Mirko"};

const anotherObj = {
  alive: true,
  answer: 42,
  hobbies: ["Eat", "Sleep", "Code"],
  beverage: {
    morning: "Coffee",
    afternoon: "Negroni",
  },
  favTv: {
    adventure: ["First", "Second"],
    horror: ["Scream", "The Ring"],
  },
  action: function () {
    return "Hello World!";
  },
  action1: function () {
    return `Time for ${this.beverage.morning}`;
  },
};

console.log(myObj); // {name: 'Mirko'}
console.log(myObj.name); // Mirko
console.log(anotherObj.hobbies); // ['Eat', 'Sleep', 'Code']
console.log(anotherObj["alive"]); // true
console.log(anotherObj.hobbies[1]); // Sleep
console.log(anotherObj.beverage.morning); // Coffee
console.log(anotherObj.favTv.adventure[0]); // First
console.log(anotherObj.action()); // Hello World!
console.log(anotherObj.action1()); // Time for Coffee

const vehicle = {
  wheels: 4,
  engine: function () {
    return "Vrrooooom!";
  },
};

/* const truck = Object.create(vehicle);
truck.doors = 2;

console.log(truck); // {doors: 2}
console.log(truck.engine()); // Vrrooooom!
console.log(truck.wheels); // 4 */

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function () {
  return "Whooosh!";
};

console.log(car.engine()); // Whooosh!
console.log(car.doors); // 4

const tesla = Object.create(car);
console.log(tesla.wheels); // 4
console.log(tesla.engine()); // Whooosh! because inherited from the car.engine
tesla.engine = function () {
  return "Shhhhhhssh...";
};
console.log(tesla.engine()); // Shhhhhhssh...

const band = {
  vocals: "Robert Plant",
  guitar: "Jimmy Page",
  bass: "John Paul Jones",
  drums: "John Bonham",
};

console.log(Object.keys(band)); // ['vocals', 'guitar', 'bass', 'drums']
console.log(Object.values(band)); // ['Robert Plant', 'Jimmy Page', 'John Paul Jones', 'John Bonham']

for (let job in band) {
  console.log(band[job]);
  // Output expected:

  // Robert Plant
  // Jimmy Page
  // John Paul Jones
  // John Bonham

  console.log(`On ${job}, it's ${band[job]}!`);
  // Output expected:

  // On vocals, it's Robert Plant!
  // On guitar, it's Jimmy Page!
  // On bass, it's John Paul Jones!
  // On drums, it's John Bonham!
}

delete band.drums;
console.log(band.hasOwnProperty("drums")); // False because the value it was deleted
console.log(Object.values(band)); // ['Robert Plant', 'Jimmy Page', 'John Paul Jones'] is missing the drummer

// destructuring objects

const band1 = {
  vocalss: "John Lennon",
  guitarr: "George Harrison",
  basss: "Paul McCartney",
  drumss: "Ringo Starr",
};

// defining variables using the objects above
const {guitarr: myVariable, basss: myBass} = band1;
console.log(myVariable); // George Harrison
console.log(myBass); // Paul McCartney

const {vocalss, guitarr, basss, drumss} = band1;
console.log(vocalss); // John Lennon
console.log(drumss); // Ringo Starr

//

function sings({vocalss}) {
  return `${vocalss} sings!`;
}
console.log(sings(band1)); // John Lennon sings!
