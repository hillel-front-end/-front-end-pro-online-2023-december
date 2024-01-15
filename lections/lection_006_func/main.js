/*
Problems:

* DRY --- Don`t repeat yourself
* Separation concept, 
* old style module

Concept:

* SOLID --- S  --  single responsibility


*/

// alert(), prompt(), confirm()

// alert();

// alert(); // call function
console.log(alert, "alert"); //

// -----  own functions -----

// опис функції
function arrayFiller() {
  // body

  //   array = []; //запис у зовніше оточення (погано)
  //   return ; // === return undefined;

  const array = [],
    foo = "1";

  if (!foo) {
    return null; //
  }

  //   console.log("continue");

  for (let j = 0; j < 5; j++) {
    array[j] = Math.round(Math.random() * 100);
  }

  //   console.log(array, "array");

  return array;
}

// виклик функції
// arrayFiller();
// arrayFiller();

// console.log(inside); /// Error
// console.log(inside2, "inside2");

// for (let i = 0; i < 3; i++) {
//     arrayFiller();
// }

// const a = arrayFiller();
// console.log(a, "A outside");

// const b = arrayFiller();
// console.log(b, "B outside");
// ------------ Scope -------------

const outside = "OUTSIDE VAR";

function toDo() {
  // var, let, const, args --- локальні змінні, не доступні зовні ф-ї

  const inside = "INSIDE VAR"; // змінна яка не доступна зовні тіла ф-ї (локальна змінна)
  inside2 = "INSIDE VAR 2"; // змінна яка доступна зовні тіла ф-ї
  console.log(outside, "outside"); // доступ до зовнішньох змінної
}

// toDo();

// --------- arguments --------------

const myArr = [];
const myArr2 = [];

function arraFiller2(array, min, max, length) {
  // arraFiller2(arg1, arg2, ... , argN);
  // let min, max, array;

  min = min || 1;
  max = max || 100;
  length = length || 5;

  //   array = array.slice();

  if (!Array.isArray(array)) {
    return null;
  }

  for (let j = 0; j < length; j++) {
    array[j] = Math.round(Math.random() * (max - min) + min);
  }

  return array;
}

// alert('Hello')
// arraFiller2();

// let result = arraFiller2(myArr, 10, 20, 100); /// arraFiller2(фактичні аргументи)

// console.log(result, "result 1 ");
// console.log(myArr, "myArr");

// result = arraFiller2(myArr2, 10, 20);

// console.log(result, "result 2 ");
// console.log(myArr2, "myArr");

// --------------

function copyArgumentsToArray(args) {
  // arguments = [[1,2,3,4,5,6]]
  const newArray = [];

  console.log(args, "args");
  console.log(arguments, "arguments from copyArgumentsToArray");

  for (let i = 0; i < args.length; i++) {
    newArray.push(args[i]);
  }

  return newArray;
}

function sum(a, b, c) {
  //console.log(a, b, c, "a, b, c"); // a = arguments[0], b = arguments[1], c = arguments[2]
  console.log(arguments, "arguments from sum");
  let sum = 0;

  const array = copyArgumentsToArray(arguments);

  for (let i = 0; i < array.length; i++) {
    // sum += arguments[i]
    //console.log(arguments[i]);

    sum += array[i];
  }

  return sum;
}

result = sum(1, 2, 3, 4, 5, 6);

console.log(result, "result");

result = sum(1, 2, 3);
console.log(result, "result");
// console.log(arguments, "arguments");
