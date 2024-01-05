/*
Lection 3 - Array
 * Math
 * [], [].length
 * new Array()
 * Доступ по индексу
 * Обращение к первому/последнему элементу массива
 * Добавление элемента в массив
 * [].length = 20 || data[30] = 'foo'
 * Заполнения массива случайными числами
 * Пример - перебор (for - for - of)
 * 
 * Практика:
  - min, max (10 - 20),
*/

// '12' * '10' //
// +null = 0
// false/true => 0/1
// undefined => NaN
// '' => 0
// '123' => 123
// +'123bas' => NaN

// -----------
// foo = 0, '', null, NaN, undefined ==> false

// if (!foo) {

// }

// ------------ # 1 - infinity loop + break --------------

console.log("---start---");

// while (true) {
//   const isContinue = confirm();

//   if (!isContinue) {
//     break;
//   }

//   console.log("---loop----");
// }

// for (;;) {
//   const isContinue = confirm();

//   if (!isContinue) {
//     break;
//   }

//   console.log("---loop---");
// }

console.log("---finish---");

// ------------ # 2 Math -----------------
/*
  1. Math
  Math.round() - возвращает число, округлённое к ближайшему целом
  Math.floor() - возвращает целое число, которое меньше или равно данному 
  Math.ceil() - округляет аргумент до ближайшего большего целого.
  Math.random() - получени случайного числа от 0 - 1
  Форумула получени случайного числа в диапазоне от min (включительно) до max (не включительно):
    Math.random() * (max - min) + min;
*/

console.log(Math.round(1.5)); // 2
console.log(Math.round(1.3)); // 1
console.log(Math.ceil(1.2)); //2
console.log(Math.floor(1.9)); // 1

console.log(Math.random());
console.log(Math.round(Math.random()));

console.log(Math.round(Math.random() * 10)); // 0 - 10

const max = 20;
const min = -10;

const randomValue = Math.round(Math.random() * (max - min) + min);

console.log(randomValue, "randomValue");

// ----------------- #3 Array ---------------------------

let team = "";
const MAX_COUNT = 3;

// for (let i = 0; i < MAX_COUNT; i++) {
//   const playerName = prompt("Input name");

//   if (playerName) {
//     team += playerName + " ";
//   }
// }

// console.log(team, "team");
// team = "Alex, Sava, Valera";
// console.log(team, "team");

/// ------- Create Array --------

team = []; // літералу

console.log(team, "team");

team = ["Alex", "Sava", "Valera"];

console.log(team, "team");

// prompt() --> функції

team = new Array("Alex", "Sava", "Valera"); // конструктор

console.log(team, "team");

mass = [];
console.log(mass.length, "len"); // довжина масива
mass.length = 10;

console.log(mass, "mass");

mass2 = new Array(10);
console.log(mass2, "mass2");

mass2 = new Array(10, 20);
console.log(mass2, "mass2");

// ----------- read ----------------

console.log(team[0]); // first --> 0
console.log(team[1]);
console.log(team[2]);
// console.log(team[3]);
// console.log(team[9999])

console.log("----");
let i = 0;
console.log(team[i++]); // first --> 0
console.log(team[i++]);
console.log(team[i++]);

console.log("-----");
console.log(team.length);

for (let j = 0; j < team.length; j++) {
  console.log(j, "j");
  console.log(team[j]);
}

console.log("-----");
// last element
console.log(team.length, "team.length");

const last = team[team.length - 1];
console.log(last, "last");

// first element
first = team[0];

// ---------- write ---------

const mass3 = [];

console.log(mass3[0], "mass3[0]");

console.log(mass3.length, "len");

mass3[0] = "Valera";

console.log(mass3, "mass3");
console.log(mass3.length, "len");

// mass3[mass3.length] = prompt(); // append last

console.log(mass3, "mass3");

// mass3[mass3.length - 1] = "Foo";

mass3[mass3.length] = "Foo1";
mass3[mass3.length - 1] = "Foo2";

console.log(mass3, "mass3");

const mass4 = new Array(2);

// const mass4 = [];
// mass4.length = 4;
// const count = 4;

// for (let i = 0; i < mass4.length; i++) {
//   console.log(mass4[i], "i");
//   mass4[i] = prompt("Input nama");
// }

// for (let i = 0; i <= mass4.length; i++) {
//   mass4[i] = prompt("Input nama");
//   console.log(mass4[i], "mass4[i]");
// }

// for (let i = 0, max = mass4.length; i <= max; i++) {
//   mass4[i] = prompt("Input nama");
//   console.log(mass4[i], "mass4[i]");
// }


// console.log(mass4, "mass4");
/*
 i = 0; length = 2 [Valera]
 i = 1; length = 2 [Valera, Alex]
 i = 2; length = 3 [Valera, Alex, Oleg]
 i = 3; length = 4        [Valera, Alex, Oleg, Foo]
 i = 4; 
*/
