//

const arrayOfString = ["string_1", "string_2", "string_3"];

arrayOfString.push("string_4"); // correct

arrayOfString.push(false); // X Incorrect

//----------------------------

// const array2: (string | boolean)[] = ["string_1", false, "string_3"];

const arrayOfBoolean = [2 === 2, false, true, {} === {}];
arrayOfBoolean.push(true);
arrayOfBoolean.push("true"); // X Incorrect

const arrayOfBoolean2: boolean[] = [true, false, true];
arrayOfBoolean2.push(false);

//----------------------------

const arrayOfNumber = [1, 3, 3];
const arrayOfNumber2: number[] = [1, 3, 3];

//----------------------------

const anyArray = []; // aray of type any (any type)

//----------------------------

// Array of object
let arrayOfObjectStructure: {}[] = [{}, {}, {}];

// Array of different possible objects
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

// Array of object with interface inside
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
  }
);

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

// Array of Array

let arrayOfArrayStructure = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

// Array of different possible objects
let arrayOfArray0: string[][] = [
  ["Ouattara", "123-123-123"],
  ["Ouattara", "123-123-123"],
  ["Ouattara", "123-123-123"],
];

let arrayOfArrayOfArrayStructure = [[[""], [""], [""]]];
