/* type inference 
------------------*/

// Number
let age = 24; // implict type decalration by TypeScript: --> inference

age = 38; // correct
age = "39"; // incorrect

let weight: number = 170; // explicit type declaration

weight = 180; // correct
weight = 160; // correct
weight = true; // incorrect

// String

let myName = "Daniel";
let myDogName: string = "Bobby";

myName = "Daniel".length; // X incorrect
myName = "Daniel".length === 0; // X incorrect

// Boolean

let isAwesome = false;
isAwesome = "Daniel".length !== 0; // correct
