// ---------- Symbol ---------------
const symbol1 = Symbol("id1");
const symbol2 = Symbol("id1");

console.log(symbol1, "symbol1");
console.log(symbol2, "symbol2");
console.log(typeof symbol1);

console.log(symbol1 === symbol2);

const uniqKey1 = "id1";

const obj = {
  a: 1,
  b: 2,
  a: 3,
  [uniqKey1]: "Valera",
  [symbol1]: "Valera",
};

const uniqKey2 = "id1";

obj[uniqKey2] = "Petro";
obj[symbol2] = "Petro";
console.log(obj, "obj");

console.log(obj[symbol1], "sym1");
console.log(obj[symbol2], "sym2");

console.log(Object.keys(obj));

console.log(Object.values(obj));

// ------- Iterator ------

const arr = ["a", "b", "c"];

for (let item of arr) {
  console.log(item);
}
for (let item in arr) {
  console.log(arr[item]);
}

const obj2 = {
  firstName: "Valera",
  lastName: "Ternavsky",
  age: "22",
  foo: "aaa",
};

// for (let item of obj2) {
//   console.log(item);
// }

/* 
 cosnt iterator = makeIterator([1, 2, 3]) // { next() {}}

 iterator.next() // { value: '..', done: boolen[true, false] }
 iterator.next() // { value: '..', done: boolen[true, false] }
*/

const iterator = arr.entries();

console.log(iterator, "iterator");

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// --------- Symbol.iterator -----

console.log(Symbol.iterator, "Symbol.iterator");
obj2[Symbol.iterator] = function () {
  const keys = Object.keys(this);
  let current = 0;
  const self = this;

  return {
    next() {
      //   console.log(self, "self");
      //   console.log(keys, "keys");
      //   console.log(current, "current");
      if (current < keys.length) {
        return { done: false, value: self[keys[current++]] };
      }

      return { done: true, value: undefined };
    },
  };
};

// const iterator2 = obj2[Symbol.iterator]();

// console.log(iterator2.next());

// console.log(iterator2.next());

// console.log(iterator2.next());
// console.log(iterator2.next());

for (let item of obj2) {
  console.log(item, "item");
}

// ------------ Generator -----------

function* generator(a) {
  // first - part
  console.log(a, "11111a");
  // ---------
  const args1 = yield "First Part";
  console.log(args1, "args1");
  //   second - part

  yield "second Part";
  // -------
  // third part
  yield "Third Part";

  console.log(123);
}

const iterator3 = generator(1);

console.log(iterator3.next(), "iterator3");
// console.log(iterator3.next("argument - 1"), "iterator3");
const value = iterator3.next("argument - 1").value;

console.log(value, "value");
console.log(iterator3.next(), "iterator3");
console.log(iterator3.next(), "iterator3");

// -----------------------------------

function* queue(arr) {
  console.log("----queue---");
  while (arr.length) {
    const task = arr.shift(); //FIFO
    yield task;
  }
}

//===================

const iterator4 = queue(["a1", "a2", "a3"]);

task1 = iterator4.next().value;

console.log(task1, "task1");

task2 = iterator4.next().value;

console.log(task2, "task2");
