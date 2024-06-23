// Modules

import playGuitar from "./guitar.js";
// functions renamed
import {shredding as shred, plucking as fingerpicking} from "./guitar.js";
import User from "./user.js";

const me = new User("email@email.com", "Mirko");
console.log(me);
console.log(me.greeting());
console.log(playGuitar());
console.log(shred());
console.log(fingerpicking());

// We can import all(*) the functions with the following method but is not recommended
// import * as Guitars from "./guitar.js";
//
// console.log(Guitars.default());
// console.log(Guitars.shredding());
// console.log(Guitars.plucking());
