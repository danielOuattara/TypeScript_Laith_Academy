//

const arrayOfString = ["string_1", "string_2", "string_3"];

arrayOfString.push("string_4"); // correct

// arrayOfString.push(false); // X Incorrect

//----------------------------

// const array2: (string | boolean)[] = ["string_1", false, "string_3"];

const arrayOfBoolean = [2 === 2, false, true];
arrayOfBoolean.push(true);
// arrayOfBoolean.push("true"); // X Incorrect

const arrayOfBoolean2: boolean[] = [true, false, true];
arrayOfBoolean2.push(false);

//----------------------------

const arrayOfNumber = [1, 3, 3];
const arrayOfNumber2: number[] = [1, 3, 3];

//----------------------------

const anyArray = []; // array of type any (any type)

//----------------------------

// Array of object
let arrayOfObjectStructure: {}[] = [];

// Array of objects with different structure
let arrayOfObject0: {}[] = [
  {
    lastName: "Ouattara",
    phone: "123-123-123",
    age: 38,
    genderMale: true,
  },
  {
    firstName: "Julie",
    lastName: "Tango",
    hasDog: true,
  },
  {
    phone: "555-123-6537",
    age: 86,
    genderMale: true,
    country: "Mali",
  },
];

console.log("arrayOfObject0 = ", arrayOfObject0);

//--------

// Array of same structure objects
let arrayOfObject: {}[] = [
  {
    firstName: "Daniel",
    lastName: "Ouattara",
    phone: "123-123-123",
    age: 38,
    genderMale: true,
  },
  {
    firstName: "Julie",
    lastName: "Tango",
    phone: "555-554-123",
    age: 36,
    genderMale: false,
  },
  {
    firstName: "John",
    lastName: "Doe",
    phone: "555-123-6537",
    age: 86,
    genderMale: true,
  },
];
console.log("arrayOfObject = ", arrayOfObject);

//--------

// Array of object with interface inside: object structure must conform the interface declaration
let arrayOfObject2: {
  firstName: string;
  lastName: string;
  phone: string;
  age: number;
  genderMale: boolean;
}[] = [
  {
    firstName: "Daniel",
    lastName: "Ouattara",
    phone: "123-123-123",
    age: 38,
    genderMale: true,
  },
  {
    firstName: "Julie",
    lastName: "Tango",
    phone: "555-554-123",
    age: 36,
    genderMale: false,
  },
  {
    firstName: "John",
    lastName: "Doe",
    phone: "555-123-6537",
    age: 86,
    genderMale: true,
  },
];
console.log("arrayOfObject2 = ", arrayOfObject2);

//--------

// Array of object with interface outside + multiple insert by push()
let arrayOfObject3: {
  firstName: string;
  lastName: string;
  phone: string;
  age: number;
  genderMale: boolean;
}[] = [];

arrayOfObject3.push(
  {
    firstName: "Daniel",
    lastName: "Ouattara",
    phone: "123-123-123",
    age: 38,
    genderMale: true,
  },
  {
    firstName: "Julie",
    lastName: "Tango",
    phone: "555-554-123",
    age: 36,
    genderMale: false,
  },
);
console.log("arrayOfObject3 = ", arrayOfObject3);

//---------

// Array of object with interface outside + individual insert by push()
let arrayOfObject4: {
  firstName: string;
  lastName: string;
  phone: string;
  age: number;
  genderMale: boolean;
}[] = [];

arrayOfObject4.push({
  firstName: "Daniel",
  lastName: "Ouattara",
  phone: "123-123-123",
  age: 38,
  genderMale: true,
});

arrayOfObject4.push({
  firstName: "Julie",
  lastName: "Tango",
  phone: "555-554-123",
  age: 36,
  genderMale: false,
});

console.log("arrayOfObject4 = ", arrayOfObject4);

//----------

// Array of Array

let arrayOfArrayStructure = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

// Array of different possible objects
let arrayOfArray0: string[][] = [
  ["John", "123-123-111"],
  ["Jana", "123-123-222"],
  ["Mike", "123-123-333"],
];

let arrayOfArrayOfArrayStructure: string[][][] = [[[""], [""], [""]]];
