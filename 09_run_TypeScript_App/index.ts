/* 
Running a TypeScript application :

--> npm init --yes
 --> npm install typescript ts-node
--> npx tsc --init

*/

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

  static findInsuranceForJaguar() {
    console.log("Searching for an insurance company... wait ");
  }
}

const myJaguar = new Car3("storm", "blue", 3);
myJaguar.addDrivers("Julie"); // Correct
myJaguar.driversAuthorized.push("Gaïa"); // Correct but not secure !

Car3.findInsuranceForJaguar(); // Correct but not  !
console.log(Car3.assemblageCountries); // Correct
Car3.assemblageCountries.push("Russia"); // Correct
console.log(Car3.assemblageCountries); // Correct
