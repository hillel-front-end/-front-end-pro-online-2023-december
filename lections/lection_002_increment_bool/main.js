/*
  1. повторення
  2. alert, confirm, prompt
  3. smart operation, ++, --
  4. review var, let, const
  5. null, undefined
  6. bool, isNaN
  7. logical operators [>,<, >=, <=, ==, ====, !] 
  8. таблиця істиності (&&, ||)
  8.1 default value with prompt (next lesson)
  13. консоль розробника, debugger (next lesson)


*/

// -------------- № 1 - Повторення -----------------------
a = 1;
b = "12.6";

result = a * b; // number * string => number * numbre
console.log(result, "result");

result = a + b; // number + string => string + string => string
console.log(result, "result 2");

console.log(String(123));
console.log(+b, "b");
console.log(Number(b), "NUmber");
console.log(parseInt(b), "parseInt");
console.log(parseFloat(b), "parseFloat");

b = parseFloat(b);

console.log(b, " original b");

//---------------- Check Type:
// typeof

b = "12.6";
console.log(typeof b);

b = parseFloat(b);
console.log(typeof b);

// ------------------- #2 alert, confirm, prompt --------

// alert("Hello world");
// console.log(firstName, "");

// firstName = prompt("Input name");
// console.log(firstName, "firstName");

// ------------- #3 smart operation, ++, -- --------

counter = 0;

console.log(counter, "counter 0");

counter = counter + 1; // 0 + 1

console.log(counter, "counter 1");

counter = counter - 1; // 0 - 1.
console.log(counter, "counter 2");

//---

counter += 2; // counter = counter + 1;
console.log(counter, "counter += 1");
// counter += 1; // counter = counter + 1;
// console.log(counter, "counter += 1");
// counter += 1; // counter = counter + 1;
// console.log(counter, "counter += 1");

//---- increment, decrement (++, --) ---

counter++;
console.log(counter, "counter++");

++counter;
console.log(counter, "++counter");

--counter;
console.log(counter, "--counter");

result = counter++;
console.log(result, "result");
console.log(counter, "post counter");

result = ++counter;
console.log(result, "reult");
console.log(counter, "prev counter");

// ------------- var, let/const, -----------------

// console.log(foo, "foo"); //foo is not defined
// foo = 123;
// foo;

console.log(foo + 1, "foo"); //Without Error before init

var foo; // undefined
var foo;

foo = 1;

console.log(typeof foo, "foo");

// ---------------
// console.log(foo2, "foo2"); //Error dead zone

let foo2; // ES6

foo2 = 12;
// let foo2; // Error

console.log(foo2, "foo2");

// console.log(foo3, "foo3");
const foo3 = 12;

// foo3 = 15; // Error

// const foo3 = 14;

const PI = 3.14;
const FIRST_NAME = "Valera";

// console.log(foo3, "foo3");

// --------------- undefined , null ---------

let f1; // undefined;

let f2 = null;

// ----------------------------------------

/*
  *********************ШПОРГАЛКА********************************
  ============== Важно помнить преобразования к Number =============
   +null  ->  0
   +""    ->  0      (пустая строка - 0)
   +"123" -> 123 (число в строке - число)
   +"abc" -> NaN (при ошибке результат NaN)
   +undefined -> NaN
   +true\false -> 1\0
  *****************************************************


*/

// --------------------------------------
//--- Boolean

/*
Java: 
 Boolean bool = true or false

Javascript

let bool = true or false

*/

let bool = true;

console.log(bool, "bool");
console.log(typeof bool, "typeof bool");

bool = false;

console.log(bool, "bool");
console.log(+bool, "bool to number");

a1 = true;
a2 = false;

result = a1 + a2; // bool + bool =>  number number => number
//1  + 0 => 1

result = true + "Hello";
console.log(result, "result");

const a3 = 12;
const a4 = 12;

console.log("------ a3 = " + a4, "----- a4 = " + a4 + "---");

let result_2 = a3 > a4;
console.log(result_2, "a3 > a4");

result_2 = a3 >= a4;
console.log(result_2, "a3 >= a4");

result_2 = a3 < a4;
console.log(result_2, "a3 < a4");

result_2 = a3 <= a4;
console.log(result_2, "a3 <= a4");
// =, == or ===

// a1 = a2
// a1 == a2, a1 === a2

const a5 = 10;
const a6 = "10";

// з перетворенням
result_2 = a5 == a6; // number == string => number == number => bool
console.log(result_2, "a3 == a4");

result_2 = a5 === a6; // без перетворення
console.log(result_2, "a3 === a4");

const str1 = "hello";
const str2 = "Hello";

console.log(str1 === str2);
console.log(str1 > str2);

// ---------------  8. таблиця істиності (&&, ||) ------------

/* 
********************ШПОРГАЛКА*********************************
============= Важно помнить преобразования к Boolean ===============
    1) 0, null, undefined, NaN, "" -> false
    2) все остальное -> true
*****************************************************
*/

// &&
/*
 Таблиця істеності (Логічне І спотикається на лжи)
 
 true && false => false
 false && true => false
 false && false => false
 true && true => true

*/

const o1 = 12;
const o2 = null;
const o3 = 14;

let result_3 = o1 && o2 && o3;
//            true && false && true

console.log(result_3, "result");

// ||

/*
 Таблиця істеності (Логічне АБО спотикається на правді)
 
 true || false => true
 false || true => true
 true || true => true
 false || false => false

*/

const p1 = "1";
const p2 = "";
const p3 = 14;

let result_4 = p1 || p2 || p3;
//            false || false || true

console.log(result_4, "result_4");

// && -- має вищій пріорітет над или
result_4 = (p1 && p2) || p3;

// p1 && p2 && alert("Welcome"); // не виконається якщо хочаб один лож

(p1 || p2) && alert("Welcome"); // не виконається якщо обидва лож
