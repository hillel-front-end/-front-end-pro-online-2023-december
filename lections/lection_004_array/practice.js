/*
  Задача. Разсортировать положительные и отрицательные числа по разным массивам. 
   *   30 случайных чисел в деапазоне от -5 до 5 разсортировать по массивам А и В, где А - массив положительных чисел, 
        В - отрицательных.
       Если число равно нуля, то игнорируем его.
   *   В массиве A найти min - значение, и max - значение. Min - max поменять местами.
*/

const count = 30;

const mass = [];
mass.length = count;

const min = -5;
const max = 5;

const A = [], // pos
  B = []; // neg

for (let i = 0; i < count; i++) {
  //   console.log(i, "i");
  //   console.log(mass[i]);

  mass[i] = Math.round(Math.random() * (max - min) + min);

  if (mass[i] > 0) {
    A[A.length] = mass[i];
  }

  if (mass[i] < 0) {
    B[B.length] = mass[i];
  }
}

console.log(mass, "mass");
console.log(A, "A");
console.log(B, "B");

let maxValue = A[0];
let maxValueIndex = 0;

let minValue = A[0];
let minValueIndex = 0;

for (let i = 1, len = A.length; i < len; i++) {
  //   console.log(A[i]);
  if (A[i] > maxValue) {
    maxValue = A[i];
    maxValueIndex = i;
    continue;
  }

  if (A[i] < minValue) {
    minValue = A[i];
    minValueIndex = i;
  }
}

console.log(maxValue, "maxValue");
console.log(minValue, "minValue");

console.log(maxValueIndex, "maxValueIndex");
console.log(minValueIndex, "minValueIndex");

const buffer = A[maxValueIndex];
A[maxValueIndex] = A[minValueIndex];
A[minValueIndex] = buffer;


/*
Заповнити масив А випадковими числами (діапазон на ваш розсуд). Замінити кожен елемент масиву з непарним індексом на нуль.

 ['aaa', '0', 'c']

Заповнити масив розмірністю n(обирається юзером) значеннями із клавіатури.

Перевірити, що вказав користувач: якщо введене значення користувача не число, або негативне значення, запитати повторне введення даних. 
Питати до тих пір поки значення буде валідним.


Створити масив А розмірністю n(розмірність вказується користувачем). Заповнити випадковими числами будь-якому діапазоні.

Знайти максимальне число та мінімальне число.
Елементи масиву між min - max записати масив B.

 [2, 4, 1, 3, 2, 8, 2] -> [ 3, 2 ]

Перевернути масив, тобто. якщо був масив [1, 5, 6, 2, 4] - ми повинні отримати [4, 2, 6, 5, 1]. 
Не можна використовувати стандартний метод reverse(). Намагайтеся не використовувати додатковий масив.


 
*/