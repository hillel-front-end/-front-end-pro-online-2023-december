// ------------  Test      ---------------------

/*

level 1

* Массив [1, 2, 3, 4, 5] вывести на экран через разделитель ‘_’

* Организовать вывод массива [1, 2, 3, 4, 5] в виде списка, при помощи тегов ul-li
<ul>
 <li> 1 </li>
 ...
 <li> 5 </li>
</ul>

* В массиве [1,2,3,4,5] вырезать центральный элемент, если длина массива парная – вырезать два элемента,
  которые можно считать центральными

level 2

* Организовать циклический ввод с клавиатуры элементов, которые будут добавляться к существующему массиву A = [1,2,3] в конец. 
  Предусмотреть символ прекращения ввода «&»


*/

const mass = [1, 2, 3, 4, 5];

console.log(mass.join("_"));
// solution - 1
// document.write('<ul>');
// for (let i = 0, max = mass.length; i < max; i++) {
//     document.write('<li>' + mass[i] + '</li>')
// }
// document.write('</ul>')

// solution - 2
// let template = "<ul>";

// for (let i = 0, max = mass.length; i < max; i++) {
//   template += "<li>" + mass[i] + "</li>";
// }

// template += "</ul>";

// document.write(template);

// solution - 3

// const template = "<ul><li>" + mass.join("</li><li>") + "</li></ul>";

document.write("<ul><li>" + mass.join("</li><li>") + "</li></ul>");
// <ul><li> 1 </li><li> 2 </li><li>

// -------------------------------

/*
* В массиве [1,2,3,4,5] вырезать центральный элемент, если длина массива парная – вырезать два элемента,
  которые можно считать центральными

*/

/*
 [1, 2, 3, 5, 6, 7]; --> 6 / 2 -> 3 - 1 = 2
 [1. 2, 3, 4, 5]; --> 5 / 2 => 2.5 - 1 => ceil(1.5) => 2
*/

const array = [1, 2, 3, 5, 6, 7];
const count = array.length % 2 === 0 ? 2 : 1;
const position = Math.ceil(array.length / 2) - 1;

array.splice(position, count);

// if (array.length % 2 === 0) {
//   array.splice(array.length / 2 - 1, count); // splice(pos, count)
// } else {
//   array.splice(array.length / 2, count); // splice(pos, count)
// }

console.log(array, "array");

// ---------------------------

const arr1 = ["A", "B", "C", "D", "E"];
const arr2 = ["A1", "B2", "C1", "D1", "E1"];

const b = [
  ["A", "B", "C", "D", "E"],
  ["A1", "B2", "C1", "D1", "E1"],
];

const row = b[1];
column = row[2];

console.log(row, "row");
console.log(column, "column");

const name = b[1][2]; //  ["A1", "B2", "C1", "D1", "E1"]

console.log(name, "name");

// ----------------
// read

for (let i = 0, max = b.length; i < max; i++) {
  console.log(b[i], i);
  for (let j = 0, count = b[i].length; j < count; j++) {
    console.log(b[i][j]);
  }
  console.log("---end --");
}

// --------------------
// write

const count_row = 5;
const count_column = 5;

const arr3 = new Array(count_row);

for (let i = 0; i < count_row; i++) {
  //   console.log(arr3[i], i);
  arr3[i] = new Array(count_column);

  for (let j = 0; j < count_column * (i + 1); j++) {
    arr3[i][j] = Math.round(Math.random() * 100);
    console.log(arr3[i][j]);
  }
  //   console.log(arr3[i], i);
  console.log("-----");
}

console.log(arr3, "arr3");
const arr4 = [null, true, 1, "22fff"];
console.log(arr4, "arr4");

// -------------------------------------
