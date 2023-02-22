// basic function constructor

const add = (num1, num2) => {
  return num1 + num2;
};

add(true, 1); // Accepted, but Not Logic

//--------------------------------

const add2 = (num1: any, num2: any) => {
  return num1 + num2;
};

add2(true, 1); // Accepted, but Not Logic

//--------------------------------

const add3 = (num1: number, num2: number) => {
  return num1 + num2;
};

add3(4, 1); // Correct
add3(true, 1); // X Incorrect
add3([], 1); // X Incorrect
add3({}, 1); // X Incorrect
//--------------------------------

// ADVICE: Never let TypeScript infer your function return, DO it yourself !
const subtract = (num1: number, num2: number): number => {
  return num1 + num2;
};

subtract(true, 1); // X Incorrect
subtract(4, 1); // Correct
subtract([], 1); // X Incorrect
subtract({}, 1); // X Incorrect

//-------------------------------------------------------
const logic = (num1: number, num2: number): boolean => {
  // ...
  // Logic
  // Logic
  // Logic
  //...
  return num1 > num2;
};

// function that return void

const voidFunction = (num1: number, num2: number): void => {
  // ...
  // Logic
  // Logic
  // Logic
  //...
  console.log(num1 > num2);
};
