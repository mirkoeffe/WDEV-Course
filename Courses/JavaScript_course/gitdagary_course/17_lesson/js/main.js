//!! Javascript Classes
// Classes are a template for creating objects. They encapsulate data
// with code to work on that data. Classes in JS are built on
// prototypes but also have some syntax and semantics that
// are unique to classes.

// class Pizza {
//   constructor(/* pizzaType,  */ pizzaSize) {
//     /* this.type = pizzaType; */
//     this.size = pizzaSize;
//     this.crust = "original";
/* this.toppings = []; */
//   }
/* get pizzaCrust() {
    return this.crust;
  }
  set pizzaCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  } */

// creating a method doesn't interfere by having the same name as crust

//   getCrust() {
//     return this.crust;
//   }
//   setCrust(pizzaCrust) {
//    this.crust = pizzaCrust;
//  }
/* getToppings() {
    return this.toppings;
  }
  setToppings(topping) {
    this.toppings.push(topping);
  } 
  bake() {
    console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust Pizza`);
  }*/
// }

//!! child class //

// this is a child class where super calls the constructor of the parent(Pizza)

// class SpecialtyPizza extends Pizza {
//  constructor(pizzaSize) {
//     super(pizzaSize);
//     this.type = "Regina";
//   }
//   slice() {
//     console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`);
// Our Regina medium pizza has 8 slices. is returned
//   }
// }
//
// const mySpecialty = new SpecialtyPizza("medium");
// mySpecialty.slice(); */
//
// const myPizza = new Pizza("salami", "small");
// myPizza.setCrust("thin");
// myPizza.bake();
// myPizza.setToppings("salsiccia");
// myPizza.setToppings("olives");
// console.log(myPizza.getCrust()); // thin is returned
// console.log(myPizza.getToppings()); // ['salsiccia', 'olives']

//!! Factory Function

// these are supported and were used before ES6
// this is a solution to a problem of not being able to create objects that have private fields
/* function pizzaFactory(pizzaSize) {
  const crust = "original";
  const size = pizzaSize;
  return {
    bake: () => console.log(`Baking a ${size} ${crust} crust Pizza.`),
  };
}

const myPizza = pizzaFactory("small");
myPizza.bake(); */

// public field can be accessed also outside of the class
// private field can be accessed only inside the class

class Pizza {
  crust = "original"; // public field
  #sauce = "pomodoro"; // private field
  #size; // private field
  constructor(pizzaSize) {
    this.#size = pizzaSize;
  }
  getCrust() {
    return this.crust;
  }
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }
  hereYouGo() {
    console.log(
      `Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`
    );
  }
}

const myPizza = new Pizza("large");
myPizza.hereYouGo();
console.log(myPizza.crust); // original is returned
// console.log(myPizza.#sauce); // Private field '#sauce' must be declared in an enclosing class
