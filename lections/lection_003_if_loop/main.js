// ------ Повторення --------

console.log(+undefined); // NaN
console.log(+null); // 0
console.log(parseInt("213")); //213
console.log(+""); // 0
console.log(+"abc"); // NaN
console.log(+true, +false); // 1, 0

// --------
// -- 0, NaN, '', undefind, null

// --------- isNaN ----

let result = isNaN(undefined);

result = isNaN(false);
result = isNaN("123abc");

console.log(result, "result");

// ---  !

const a = "";
const b = 123;

console.log(!a); // !null => !false => true
console.log(!123); // !123 => !true => false

console.log(!!a, "!!");
console.log(Boolean(a), "Boolean");

console.log(!!123);

// console.log(!a && b && alert("Hello")); // null && 123

login = null;

// !login && alert("Incorrect login");

// login || alert("Incorrect login");

//--------------------------------------
// if - else

/*
 if (conditional) {
    // if conditional == true
 } 

  if (conditional) {
    // if conditional == true
  } else {
    conditional === false
  }

  if (a && b || c > 10) {

  } 
  
*/

// const age = +prompt();

// console.log(age, "age");
// console.log(typeof age, "typeof");
/*
if (age && typeof age === "number" && age > 20) {
  // 0 => false =
  console.log("Hello");
  console.log("");
} else {
  console.log("--else --");
}
*/

const login2 = "";

if (!login2) {
  console.log("--- iccorrect login --");
}
console.log("outside");

/*
if (cond) {

} else if (cond) {

} else if (cond) {

} else { ?

}
*/

const time = 15;

if (time < 10) {
  console.log("good morning");
} else if (time <= 20) {
  console.log("good day");

  if (time >= 12 && time < 19) {
    console.log("Done!");
  }
} else {
  console.log("good night");
}

// ----------------------------------
// loop

// player1 = '...'
// player2 = '...'
// player3 = '...'

/*
do {
 // body
} while(conditional) // зроби а потім переівр
*/

// let count = 3;
// let index = 0;

// do {
//   const user = prompt();
//   console.log(user, "user");
//   index++;
// } while (index < count);

// do {
//   const user = prompt();
//   console.log(user, "user");
//   console.log(count, "count");
// } while (--count); // 3 2 1 0

//--------

/**
 while(conditional) {
    body
 }

 */

const count = 3;
let index = 0;

while (index <= count) {
  console.log(index, count, "index, count");

  index++;
}

//

/*

stage - 1 - блок створення змінних
stage - 2 -  умова
stage - 3 -- блок збільшення лічильника
stage - 4 - тіло цикла for

for (stage - 1; stage - 2; stage - 3) {
    stage - 4
}

*/

// for (let index = 0, count = 3; index < count; index++) {
//   console.log("body");
// }

let i = 0,
  size = 3;

// for (; i < size; i++) {
//   console.log("body");
// }

/*
  1 stage - 1 => stage - 2 => true => stage - 4
  2 stage - 3 => stage - 2 => true => stage - 4
  3 stage - 3 => srage - 2 => true => stage -4
  4 stage - 3 => stage - 2 => false => END
*/

// for (let k = 0, u = 5; k < 3 || u != 0; k++, u--) {
//   console.log(k, u);
// }

const size2 = 5;

for (let o = 1; o < size2; o++) {
  
  for (let p = 1; p < size2; p++) {
    document.write("*");
  }

  document.write("</br>");
}
