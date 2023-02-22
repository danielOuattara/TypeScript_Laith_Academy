/* Union Type
~~~~~~~~~~~~~~~~~~~~*/
let numberOrString = "Daniel Boy";
numberOrString = "John Doe";

numberOrString = 23; // X Incorrect

//----------------------------------------
let numberOrString2: string | number = "Daniel Boy";
numberOrString2 = "John Doe";

numberOrString2 = 23; //  Correct
numberOrString2 = false; // X Incorrect

//----------------------------------------
let numberOrString3: string | number | boolean = "Daniel Boy";
numberOrString3 = "John Doe";

numberOrString3 = 23; //  Correct
numberOrString3 = false; // Correct

/* undefined Type and null Type 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

let undefinedVariable: undefined = undefined;
let nullVariable: null = undefined;

let undefinedOrNullVariable: undefined | null = undefined;
undefinedOrNullVariable = null;

let arrayNew: (string | number)[] = ["", 4, null]; // Correct

let arrayNew2: (string | number)[] = ["", 4, null, {}]; // X InCorrect

let arrayNew3: (string | number | {})[] = ["", 4, null, {}]; // Correct

/* object type (again) 
~~~~~~~~~~~~~~~~~~~~~~~~*/

let myObject: {
  value: string | number;
  person: string;
  listing: string[];
  country: {};
};

//------------------------------------------------------

/* Literal Type :
~~~~~~~~~~~~~~~~~ 
 How to restrict string to a certain values => union type + literal type */

let rainbowColor: "red" | "orange" | "green" | "yellow" | "indigo" | "violet"; // <-- union type + literal type type declaration
rainbowColor = "orange"; // Correct, as part of a list of desired string
rainbowColor = "pink"; // X Incorrect: pink not as a rainbow color

//------------------------------------------------------

/* Enum Type:  
~~~~~~~~~~~~~~ 
cleaner than Literal type: a set of values that can be assigned to a variable */

enum RainbowTypes {
  RED,
  ORANGE,
  GREEN,
  YELLOW,
  INDIGO,
  VIOLET,
}

let rainbowColor2: RainbowTypes = RainbowTypes.RED;
rainbowColor2 = "orange";

let rainbowColor3: RainbowTypes; // correct
rainbowColor3 = "orange"; // X Incorrect
rainbowColor3 = RainbowTypes.GREEN; // correct

/* Optional type for Objects structure
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
let playerObject: {
  age?: string | number;
  teams: string[];
  country?: {};
} = {
  age: 30,
  teams: ["blue bird", "yankee"],
};

let objectOpt: {
  property_1: string;
  property_2?: string;
} = {
  property_1: "Hello",
  property_2: 43, // X Incorrect
};
