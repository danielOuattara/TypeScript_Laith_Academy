/* Classes in JavaScript 
==========================*/

// --> class : a blueprint to create objects

class Car {
  constructor(model, color, age) {
    this.model = model;
    this.color = color;
    this.age = age;
  }

  describe() {
    console.log("I am pretty");
  }

  climb = function () {
    console.log("I can climb");
  };

  get getModel() {
    return this.model;
  }
  set setModel(newModel = "BMW") {
    return (this.model = newModel);
  }
}

const bmw = new Car("Z5", "Green", 5);

console.log(bmw);
bmw.climb();

console.log(bmw.getModel);
bmw.setModel;
console.log(bmw.getModel);

//---------------------------------------------------------

class Car2 {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    console.log("Hello ! from a static method");
  }
}

let myCar = new Car2("Ford");

// You can call 'hello()' on the Car Class:
Car2.hello();

// But NOT on a Car Object:
// document.getElementById("demo").innerHTML = myCar.hello();
// this will raise an error.

try {
  myCar.hello();
} catch (error) {
  console.log(error.message);
}
