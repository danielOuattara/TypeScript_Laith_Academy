/* Types and Interfaces
========================== */

//-----------------------------
const object_1 = {
  firstName: "Daniel",
  lastName: "Ouattara",
  age: 38,
  genderMale: true,
};

//-----------------------------
// type of variable provided in the object itself
const object_2: {
  firstName: string;
  lastName: string;
  age: number;
  genderMale: boolean;
} = {
  firstName: "Daniel",
  lastName: "Ouattara",
  age: 38,
  genderMale: true,
};

//-----------------------------

//  Using interface: cleaner code

interface ObjectModel {
  firstName: string;
  lastName: string;
  age?: number;
  genderMale: boolean;
}

const object_3: ObjectModel = {
  firstName: "John",
  lastName: "Doe",
  age: 49,
  genderMale: true,
};

const object_4: ObjectModel = {
  firstName: "Jade",
  lastName: "Doe",
  genderMale: false,
};

// Using type :

type ObjectModelType = {
  firstName: string;
  lastName: string;
  age?: number;
  genderMale: boolean;
};

const object_5: ObjectModelType = {
  firstName: "Mickey",
  lastName: "Mousse",
  age: 90,
  genderMale: true,
};

type PersonType = string;

const person_1: PersonType = "Daniel ";

/*  When using interface ? When using Type ?

interface --> result in a object
type -->  better for array of objects 

*/

// below a type declaration for array of objects
type ArrayModelType = {
  firstName: string;
  lastName: string;
  age?: number;
  genderMale: boolean;
}[];

const listOfObjects: ArrayModelType = [
  { firstName: "daniel", lastName: "Boua", genderMale: true },
  { firstName: "john", lastName: "doe", genderMale: true },
  { firstName: "djana", lastName: "doe", genderMale: false },
];
