// TypeScript auto infers

const obj = {
  firstName: "Daniel",
  lastName: "Ouattara",
  phone: "123-123-123",
  age: 38,
  genderMale: true,
};

obj.age = 39; // correct
obj.age = "39"; // X incorrect
obj.city = "Timbuktu"; // X Incorrect,

//-------------------------------------------------------

// I declare the type of item in this object
const obj2: {
  firstName: string;
  lastName: string;
  phone: string;
  age: number;
  genderMale: boolean;
} = {
  firstName: "Daniel",
  lastName: "Ouattara",
  phone: "123-123-123",
  age: 38,
  genderMale: true,
};

/* later We shall see how interface can help reduce 
the size of of the total declaration */

// No w auto-completion is automatic:

obj2.age = 39; // correct
obj2.age = "39"; // X incorrect
obj2.city = "Tumbuctu"; // X Incorrect,

obj2.firstName.toUpperCase; // correct: I have access to all methods available for string
obj2.age.toExponential(2); // correct: I have access to all methods available for number
