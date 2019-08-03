class Pizza {

  constructor(size, crust) { //pass the default value into an object (not hard-coded) as toppings does
    this.size = size;
    this.crust = crust;
    this.toppings = ["cheese"];
  }

  setSize(size) {
    if (size === 's' || size === 'm' || size === 'l') {
      this.size = size;
    }
    // else we could throw an error, return false, etc.
    // We choose here to ignore all other values!
  }

  getSize() {
    return this.size;
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  checkTopping(toppings) {
    console.log(this.toppings);
  }

  getPrice() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + (this.toppings.length * toppingPrice);
  }

}

class SomeClass {
  methodName(parameters) {
    this.hello = "hi"; // this is a method
  }
}

// Pizza.addTopping(); not calling the source

let pizza1 = new Pizza();
console.log(pizza1.toppings);
pizza1.addTopping("mushrooms");
pizza1.addTopping('peppers');
console.log(pizza1.toppings);

let pizza2 = new Pizza();
console.log(pizza2.toppings); // ["cheese"]
pizza2.addTopping("more cheese");
console.log(pizza2.toppings); // ["cheese", "more cheese"];

pizza2.checkTopping();

// DRIVER CODE
const pizza = new Pizza();
pizza.setSize('m');
pizza.getSize(); // m