let height = 160;
height = "200";

let height2: number = 120;
height2 = "200";

// let TypeScript itself inferes as much as possible

let amount; // type any -- declaratiion only; not initialized yet
amount = 120;
amount = "Daniel";
amount = true;
amount = [];
amount = {};

//  multiple type

let amount2: number | string = 120;
amount2 = "hello";
