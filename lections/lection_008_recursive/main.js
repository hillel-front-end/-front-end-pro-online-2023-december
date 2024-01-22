function todo(c, b) {
  //const, let, var
  var a = 12;

  console.log(arguments, "arguments");

  a = 15;
  h = 13;
  console.log(h, "h");
  return a;
}

todo(1, 2);
let result = todo();
todo();

console.log(h, "h");

// console.log(a, "a");
// console.log(c, b);

let total = 0;

for (let i = 0; i < 5; i++) {
  total += i;
}

// ------- recursive --------
// ---- expm-1
function recursive(i) {
  if (!i) {
    return i;
  }

  console.log(i, "i before call");
  recursive(i - 1);
  console.log(i, "after call");
}

// recursive(5);

// sum(4); // 4 + 3 + 2 + 1

// ---- expm-2

function sum(n) {
  console.log(n, "n");
  if (n === 1) {
    return n;
  }

  const result = n + sum(n - 1);

  return result;
}

result = sum(4);

console.log(result, "result");

// function foo() {
//     recursive();
// }

// foo();

// ------------- expm-3

// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array[i].length; j++) {
//     const item = array[i][j];

//     if (Array.isArray(item)) {
//       for (let k = 0; k < array[i][j].length; k++) {
//         console.log(array[i][j][k]);
//       }
//       continue;
//     }
//     console.log(array[i][j]);
//   }
// }
const array = [
  [1, 2, 3, 4, 5],
  [6, 7, [3.1, [4.1, 4.2], 3.3], 9, 10],
  [11, 12, 13, 14, [6.2, 66, [7.2, 8, 9]]],
  16,
  17,
];

const array2 = [
  new Array(8),
  new Array(
    new Array(5),
    new Array(8),
    new Array(
      new Array(5),
      new Array(new Array(5), new Array(2), new Array(7)),
      new Array(4)
    )
  ),
];

function recursiveLoop(mass) {
  //   console.log(mass, "mass");
  for (let i = 0; i < mass.length; i++) {
    const item = mass[i];

    if (Array.isArray(item)) {
      //   console.log("Detected array ==>", item);
      recursiveLoop(item);
    } else {
      console.log("It`s not array", item);
    }
  }
}

// recursiveLoop(array);

console.log(array2, "array2");

const random = (min, max) => Math.round(Math.random() * (max - min) + min);

function fillArray(mass) {
  for (let i = 0; i < mass.length; i++) {
    const item = mass[i];

    if (Array.isArray(item)) {
      //   console.log("Detected array ==>", item);
      fillArray(item);
    } else {
      mass[i] = random(5, 10);
    }
  }
}

fillArray(array2);
