/*  Classes in TypeScript
========================== */

class Car {
  model: string;
  color: string;
  age: number;
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
}

//---------------------------------------
class Car2 {
  model: string;
  color: string;
  age: number;
  driversAuthorized: string[] = ["Dan", "John", "Anna"];
  private repairCenters: string[] = ["London", "Oxford", "New-York"];
  static assemblageCountries: string[] = ["England", "Germany"];
  readonly initialManufacturingYear: string = "1919";

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

  addDrivers(name: string): void {
    this.driversAuthorized.push(name);
  }

  private addRepairCenter(city: string): void {
    this.repairCenters.push(city);
  }

  listRepairCenters() {
    this.addRepairCenter("Toronto");
  }

  static findInsuranceForJuaguar() {
    console.log("Searching for an insurrance compagny... wait ");
  }

  //   updateAssemblageCountries() {

  //   }
}

const myJaguar = new Car2("storm", "blue", 3);
myJaguar.addDrivers("Julie"); // Correct
myJaguar.driversAuthorized.push("Gaïa"); // Correct but not secure !

// private property
myJaguar.repairCenters.push("Gaïa"); // X Incorrect: private property; only accessible within class

// private method
myJaguar.addRepairCenter("Chicago"); // X Incorrect: private property; only accessible within class

// static method
myJaguar.findInsuranceForJuaguar(); // X Incorrect: static method; only accessible by the class
Car2.findInsuranceForJuaguar(); // Correct but not  !

// static properties
console.log(myJaguar.assemblageCountries); // X Incorrect :static property, usable in class only
console.log(Car2.assemblageCountries); // Correct
Car2.assemblageCountries.push("Russia"); // Correct
console.log(Car2.assemblageCountries); // Correct

//---------------------------------------
// Towards a cleaner code

class Car3 {
  driversAuthorized: string[] = ["Dan", "John", "Anna"];
  private repairCenters: string[] = ["London", "Oxford", "New-York"];
  static assemblageCountries: string[] = ["England", "Germany"];
  readonly initialManufacturingYear: string = "1919";

  constructor(public model: string, public color: string, public age: number) {}

  describe() {
    console.log("I am pretty");
  }

  climb = function () {
    console.log("I can climb");
  };

  addDrivers(name: string): void {
    this.driversAuthorized.push(name);
  }

  private addRepairCenter(city: string): void {
    this.repairCenters.push(city);
  }

  listRepairCenters() {
    this.addRepairCenter("Toronto");
  }

  static findInsuranceForJuaguar() {
    console.log("Searching for an insurrance compagny... wait ");
  }

  //   updateAssemblageCountries() {

  //   }
}
