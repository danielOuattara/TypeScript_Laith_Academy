/*  Classes in TypeScript
========================== */
var Car = /** @class */ (function () {
    function Car(model, color, age) {
        this.climb = function () {
            console.log("I can climb");
        };
        this.model = model;
        this.color = color;
        this.age = age;
    }
    Car.prototype.describe = function () {
        console.log("I am pretty");
    };
    return Car;
}());
//---------------------------------------
var Car2 = /** @class */ (function () {
    function Car2(model, color, age) {
        this.driversAuthorized = ["Dan", "John", "Anna"];
        this.repairCenters = ["London", "Oxford", "New-York"];
        this.initialManufacturingYear = "1919";
        this.climb = function () {
            console.log("I can climb");
        };
        this.model = model;
        this.color = color;
        this.age = age;
    }
    Car2.prototype.describe = function () {
        console.log("I am pretty");
    };
    Car2.prototype.addDrivers = function (name) {
        this.driversAuthorized.push(name);
    };
    Car2.prototype.addRepairCenter = function (city) {
        this.repairCenters.push(city);
    };
    Car2.prototype.listRepairCenters = function () {
        this.addRepairCenter("Toronto");
    };
    Car2.findInsuranceForJuaguar = function () {
        console.log("Searching for an insurrance compagny... wait ");
    };
    Car2.assemblageCountries = ["England", "Germany"];
    return Car2;
}());
var myJaguar = new Car2("storm", "blue", 3);
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
var Car3 = /** @class */ (function () {
    function Car3(model, color, age) {
        this.model = model;
        this.color = color;
        this.age = age;
        this.driversAuthorized = ["Dan", "John", "Anna"];
        this.repairCenters = ["London", "Oxford", "New-York"];
        this.initialManufacturingYear = "1919";
        this.climb = function () {
            console.log("I can climb");
        };
    }
    Car3.prototype.describe = function () {
        console.log("I am pretty");
    };
    Car3.prototype.addDrivers = function (name) {
        this.driversAuthorized.push(name);
    };
    Car3.prototype.addRepairCenter = function (city) {
        this.repairCenters.push(city);
    };
    Car3.prototype.listRepairCenters = function () {
        this.addRepairCenter("Toronto");
    };
    Car3.findInsuranceForJuaguar = function () {
        console.log("Searching for an insurrance compagny... wait ");
    };
    Car3.assemblageCountries = ["England", "Germany"];
    return Car3;
}());
