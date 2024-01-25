// ---------------- privimitive && reference -------------------

//---- privimitive (null, undefined, string, number, boolean, symbol)

let a = 12;
const b = a;

console.log(a, "a");
console.log(b, "b");

a = 13;
console.log(a, "a");
console.log(b, "b");

let c = "aaaa";
let o = c;

console.log(o, c);
o = 2222;
console.log(o, c);

const a1 = 2,
  a2 = 3;

const sum = (b1, b2) => {
  // b1 = a1; b2 = a2;
  console.log(b1, b2, "b1, b2");

  b1 = 10;
};

sum(a1, a2);

console.log(a1, a2, "a1, a2");

//---------------------------------------------------
//--reference (array, function, object)

const arr = [1, 2, 3];
const arr2 = arr;

arr2.push("4");

console.log(arr2, "arr2");

console.log(arr, "arr");

const arr3 = arr;

arr.push(5);

console.log(arr, arr2, arr3);

// const arrayFiller = (arr, len) => {
//   // let arr = mass
//   for (let i = 0; i < len; i++) {
//     arr.push(Math.random() * 100);
//   }

//   return arr;
// };

// const mass = arrayFiller([], 10);

let mass = [1, 2, 3];

// let mass2 = mass.slice();

// mass2.push(11);
// console.log(mass, "mass");
// console.log(mass2, "mass2");

const arrayFiller = (original, len) => {
  const clone = original.slice();

  // let arr = mass
  for (let i = 0; i < len; i++) {
    clone.push(Math.random() * 100);
  }

  return clone;
};

const result = arrayFiller(mass, 4);

console.log(result, "result");
console.log(mass, "mass");

// --------------------- object -------------------------------

// const player = ["Valera", 29, "Ternavsky"];
// const ageKey = 2;
// const age = player[ageKey];

// console.log(age, "age");
//
//-----------------------------
// ------ Create object

/*
.box {
    width: 200px;
    height: 300px;
    background-color: red;
}
*/

const box = {
  width: 200,
  height: "300px",
  backgroundColor: "red",
};

// function run() {

// }

// if () {

// }

const player = {
  name: "Valera",
  age: 29,
  isMarried: true,
  children: [{ name: "Alex" }],
  run: function () {
    console.log("Running");
  },
  swim: () => {
    console.log("Swimming");
  },
};

console.log(player, "player");

const person2 = { name: "Valera", 12: "aa", age: 12 };

//-----------------------
// ---- read
// object.key
console.log(console.log, "console");

// console.log()

// case - 1
console.log(player.run);
player.run(); // Методами

console.log(player.age, "age");
console.log(player.name, "name");
console.log(player.foo, "foo");

// case - 2
let key = "age";
console.log(player[key], "age");

// console.log(player.key, 'player.key')

key = "swim";
console.log(player[key], "swim method");

// key = 'foo';
// console.log(player[key], 'foo 2')

// if (player.foo) {
//     console.log('Todo');
// }

console.log("age" in player, "key in player");

if (key in player) {
  console.log("Todo");
}

console.log(typeof player === "object");
console.log(Array.isArray([]), "array");

function onClick() {
  const actions = {
    save: function () {
      console.log("---save---");
    },
    edit: function () {
      console.log("---edit---");
    },
    close: function () {
      console.log("---close---");
    },
  };

  const action = "close";

  console.log(typeof actions[action] === "function");

  if (typeof actions[action] === "function") {
    actions[action]();
  }
}

onClick();

//------

// ---------------------------------------
//---- write

const person3 = { name: "Pety" };
const KEY_NAME = "name";
const KEY_AGE = "age";

console.log(person3, "person3");

person3[KEY_NAME] = "Valera"; // rewrite
// person3.name = "Valera";// rewrite
// person3["name"] = "Valera"; // rewrite

// write
person3[KEY_AGE] = 29;

// person3.age = 29;

// console.log(person3[KEY_AGE]);
// person3[KEY_AGE] = 29;

// console.log(person3.age);
// person3.age = 29;

console.log(person3, "person3");

person3.firstName = person3.name;

// -------------------
// delete

// delete a4.name;

const person5 = {
  firstName: person3.name,
};

const team = [{ name: "valera" }, { name: "alex" }, { name: "pety" }];

for (let i = 0; i < team.length; i++) {
  const player = team[i];

  if (player.name) {
    delete player.name;
  }
}

console.log(team.name);
console.log(team.length);
// delete team[0].name

//--------------
console.log(team, "team");

const person6 = {
  name: "Valera",
  age: 29,
  children: [],
  isMarried: false,
};

// person7.name = "Pety";

// console.log(person6, "person6");
// console.log(person7, "person7");

// -------- loop and copy

function assignObject(obj) {
  const newObj = {};

  for (let key in obj) {
    // key = 'age'
    // console.log(key, "key");
    const value = obj[key];

    console.log(obj[key], "value"); // read by key

    // newObj[key] = obj[key];

    newObj[key] = value;
  }

  console.log(newObj, "newObj");

  return newObj;
}

const person7 = assignObject(person6);

person7.name = "Pety";

console.log(person6, "person6");
console.log(person7, "person7");
