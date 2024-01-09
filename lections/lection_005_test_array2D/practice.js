//---------------------------

/// Таблица с 1 рендером на основе 2мерного массива

// В двумерном массиве A размером n на m. Заполнить случайными числами.
//     1. Найти ряд, где сумма элементов наименьшая
//     2. Найти ряд, где сумма элементов найбольшая
//     3. Поменять ряды местами (1 и 2 пункт)

const n = 3;
const m = 3;

const A = [];

for (let i = 0; i < n; i++) {
  A[i] = new Array(m);

  for (let j = 0; j < m; j++) {
    A[i][j] = Math.round(Math.random() * 100);
  }
}

console.log(A, "a");

let maxRow;
let minRow;

sum = [];

let maxRowIndex = 0;
let minRowIndex = 0;

for (let i = 0; i < n; i++) {
  let total = 0;

  for (let j = 0; j < m; j++) {
    total += A[i][j];
  }

  sum.push(total);

  if (i === 0) {
    maxRow = total;
    minRow = total;
    continue;
  }

  if (total > maxRow) {
    maxRow = total;
    maxRowIndex = i;
  }

  if (total < minRow) {
    minRow = total;
    minRowIndex = i;
  }
}

console.log(sum);

console.log(maxRow, minRow);
