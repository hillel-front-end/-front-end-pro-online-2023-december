/*

Lection 1 - JavaScript Intro
  * JS Введение, jsfiddle, codepen
  * підключення скриптів
  * базові команди виводу даних
  * створення, найменування та використання змінних (create, copy)
  * тип даних Number + мат. операції, групи
  * тип даних String + мат. операції, break line, NaN
  * мат операції Number + String (перетворення типів (явне, неявне), parseInt)
  * prompt, confirm
  * smart оператори, інкремент, декремент
  

*/

// ---------------
// Comments

// some text

/* 
  some 
  text 
  x
  
*/


// -----------------------
//--- Output

console.log(1234, 333);
console.log(10 + 20);
console.log(20 - 10);
console.log(30 * 10);
console.log(30 / 10);


document.write(1234);



// ---------------------------
// --- Variables

/*
 a --- назва змінної
 = -- оператор запису у змінну
 12 -- значення змінної А
*/


// bad code style
a=12;

// створення змінної
a = 12;

console.log(a);

// перезапис змінної
a = 24;
console.log(a);

// Помилка: використання змінних до створення - заборонено.
// console.log(b);  ReferenceError: b is not defined
b = a;
console.log(b);


//------------------------
// --- Data Type: Number

/*
 Java:

 Integer age = 12;
 Float foo = 12.5;

 Javascript:
 
 a = 12; // Number
 b = 12.5; // Number

*/


a = 12;
b = 10;

console.log('------')
console.log(a, b);

result = a + b;// 12 + 10
console.log(result);

result = a - b;// 12 - 10
console.log(result);

result = a * b;// 12 - 10
console.log(result);


result = a / b;// 12 - 10
console.log(result);

console.log(a, b);

c = 10;


a = 1;
b = 2;
c = 3;

result = a * (b + c);

a = 13;
b = 2;

result = a % b; /// напр: перевірка на парність

// ---------------------------------------
// Data Type: String


/*
Java:
 String brand = 'VW'

 Javascript

 brand = 'VW';

*/

brand = 'VW';
brand = "Audi"
brand = `Mercedes`; //ES6

// mistake
// foo = 'Hello 

// world';

foo = 'Hello' +
'World';

console.log(brand, 'brand');

brand = 12;
console.log(brand, 'brand 12'); 

//---------------------
// Строки з цифрами

/*
!!!!!!!!!!!!!!!!!!
  Операція  Строки + Строки = Конкатенація 
  Конкатенція - це об єднання двох строк в одну


  'Hello' + 'world' = 'Helloworld'
  'Hello' + ' ' + 'World' = 'Hello world'
*/

a = '12';
b = '10';

result = a + b;
console.log(result, 'result = a + b');

firstName = 'Valera';
lastName = 'Ternavslk';
separator = ' ! ';

fullName = firstName + separator + lastName; /// 'Valera' + ' ' + 'Ternavslk' => 'Valera  Ternavslk'

console.log(fullName, 'fullName');


//-----------------------------------
// Перетворення типів даних

// Не явні перетворення

/*
!!!!!!!!
 Не явні перетворення
 
1) Якщо один з операнд строка, а інший не строка, а між ними +(бінарний), то  числові
   перетворюється до строки 
String + Number => String + String => String

2) Операції відмінні від додавання(+), викликають перетворення не числового типу до числа, якщо 
це можливо, напр:
   String * Number => Number * Number => Number
   String * String => Number * Number => Number
*/


a = '10';
b = '11';


console.log(a + b, 'a + b');

console.log(a * b, 'a * b'); // string * string => 10(number) * 11(number) =>> 110 number
console.log(a / b, 'a / b');
console.log(a - b, 'a - b');


a = 10;
b = '12';

result = a * b;
console.log(result, 'result');

result = a + b; // 10(number) + '12'(string) => '10'(string) + '12'(string) => '1012'
console.log(result, 'result')
result = 12 + '10';

//----

a = '12one';
b = 12;

console.log(a + b); // 'one12'

//NaN -- Not a Number
console.log(a * b);// 'one'(string) * 12(number) => NAN * 12 => NAN

//---------------------- Явні перетворення

a = 1000;
b = String(a);

h = '123';

console.log(a, 'a');
console.log(b, 'b');

console.log(+'123', '+');

o = '12';
b = '10';

result = (+o) + (+b); // +string + +string => number + number => 22
console.log(result, 'унарний +');


result = parseInt(o) + parseInt(b);
console.log(result, 'parseInt');


console.log(+'123 abc')// NAN
console.log(parseInt('a123 abc')); // NAN
console.log(parseInt('1a123')); //1
console.log(parseInt('123 abc')); // 123

// -------------------------
// Іменування змінних

brand = 'Audi';
brand1 = 'something';
$brand = 'foo';
_brand = 'foo';

// car brand

//---- camelCase

carBrand = 'VW';
carBrandSecond = '...';

// ---- snake_case

car_brand = 'VW';


// --  kebab-case ---> mistake
// car-brand = 12;

// 1brand = 12; // mistake
//


