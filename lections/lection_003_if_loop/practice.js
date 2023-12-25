/*
  
    Ввести с клавиатуры 2 числа a и b (где a <<< b). 
    Запустить цикл перебора от a до b. 
    Вывести в консоль квадраты чётных чисел.
    Возвести в 3тую степень четные числа при помощи цикла do{} while()

*/

// 2^3 = 2 * 2 * 2;

let a = prompt("Input a");
let b = prompt("Input b");

console.log(typeof a, "a");
console.log(typeof b, "b");

if (typeof a !== "number" && typeof b !== "number") {
  a = parseInt(a);
  b = parseInt(b);
}

console.log(typeof a, typeof b);

console.log(a, b, "a, b before");

if (a > b) {
  const temp = a;
  a = b;
  b = temp;
}

console.log(a, b, "a, b after");

// for (let i = a, max = b; i <= max; i++) {
//   console.log(i);
// }


for (; a < b; a++) {
  //   console.log(a, "a");
  //   console.log(b, "b");


  if (a % 2 !== 0) {
    // continue;
    break;
  }
  
  let total = 1;
  let stepen = 5;

  console.log(a, "a");
  do {
    total *= a;
  } while (--stepen);

  console.log("total = ", total);
}
