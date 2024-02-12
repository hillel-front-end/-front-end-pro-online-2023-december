// ------------------

const arr = [
  { name: "sprite", price: 70 },
  { name: "juice", price: 100 },
  { name: "cola", price: 82 },
  { name: "sprite", price: 50 },
  { name: "soda", price: 30 },
  { name: "fanta", price: 70 },
  { name: "soda", price: 70 },
  { name: "juice", price: 70 },
  { name: "sprite", price: 70 },
];

// arr.forEach((item, index, array) => {
//   console.log(item, index, array);
//   console.log(this);
// });

function myForEach(callback, mass) {
  for (let index = 0; index < mass.length; index++) {
    callback.call(mass, mass[index], index, mass);
  }
}

// myForEach(function (item, index, array) {
//   //   console.log(item, index, array);
//   console.log(this, "this");
// }, arr);

// -------- filter

// let mass = arr.filter((item, index, array) => {
//   console.log(item, index);
//   //   console.log(this);
//   return item.price <= 50;
// });

function myFilter(callback, mass) {
  const newArray = [];

  for (let index = 0; index < mass.length; index++) {
    const item = mass[item];

    if (callback(item, index, mass)) {
      newArray.push(item);
    }
  }

  return newArray;
}

// let mass = myFilter((item) => {
//   return item.price <= 50;
// }, arr);

// console.log(mass, "mass");

// map

mass = arr.map((item) => {
  return item.name;
});

// console.log(mass, "mass");

function myMap(callback, mass) {
  const newArray = [];

  for (let index = 0; index < mass.length; index++) {
    newArray.push(callback(mass[index], index, mass));
  }

  return newArray;
}

mass = myMap((item) => {
  return item.name + " = " + item.price;
}, arr);

// console.log(mass, "mass");

// reduce

result = arr.reduce((accum, item) => {
  //   console.log(accum, "accum");
  return accum + item.price;
}, 0);

// console.log(result, "result");

function myReduce(callback, mass, accumulation) {
  for (let index = 0; index < mass.length; index++) {
    accumulation = callback(accumulation, mass[index], index, mass);
  }

  return accumulation;
}

result = myReduce((accum, item) => accum + item.price + " ", arr, "");

// console.log(result, "result");

// ------------- Hash table -----------------

// let hashTable = {};

// hashTable["a"] = 1;
// hashTable.a = 2;

// console.log(hashTable, "hashTable");

// for (let i = 0; i < arr.length; i++) {
//   const count = hashTable[arr[i].name];

//   hashTable[arr[i].name] = count ? count + 1 : 1;
// }

// for (let item of arr) {
//     console.log(item, 'item');
//   const count = hashTable[item.name];

//   hashTable[item.name] = count ? count + 1 : 1;
// }

// hashTable = arr.reduce((accum, item) => {
//   const count = accum[item.name];
//   accum[item.name] = count ? count + 1 : 1;

//   return accum;
// }, hashTable);

// console.log(hashTable, "hashTable");

// -------------------------------------------------------
// ------ імперативність та декларативність -------------

const arr2 = [1, 2, 3, 4, 5];
let arr3 = [];

// for (let i = 0; i < arr2.length; i++) {
//   if (arr2[i] % 2) {
//     arr3.push(arr2[i]);
//   }
// }

let arr4 = [];

// for (let i = 0; i < arr3.length; i++) {
//   arr4[i] = arr3[i] * arr3[i];
// }

arr3 = arr2.filter((item) => item % 2);
arr4 = arr3.map((item) => item * item);

const filterEven = (arr) => arr.filter((item) => item % 2);
const pow = (arr) => arr.map((item) => item * item);

arr3 = filterEven(arr2);
arr4 = pow(arr3);

console.log(arr3, "arr3");
console.log(arr4, "arr4");

// -------------------------------------------
// функціонально композиція

// result = pow(filterEven(arr2)); /// result = f1(f2(f3(f4([1,2,3]))))

// console.log(result, "result");

// helper

function compose(fns) {
  return function (value) {
    return fns.reduce((accum, fn) => fn(accum), value);
  };
}

/*
  compose([fn4,fn3,fn2,fn1])
*/

const pipe = compose([filterEven, pow]);

result = pipe(arr2);

console.log(result, "result");

// -------------------------------------
//--- carry
// https://translate.google.com/path

async function loadData(protocol, domain, path) {
  const url = protocol + "://" + domain + "/" + path;

  return await (await fetch(url)).json();
}

// loadData("https", "dummyjson.com", "products").then((v) =>
//   console.log(v.products)
// );

// loadData("https", "dummyjson.com", "users").then((v) => console.log(v.users));

// loadData("https", "dummyjson.com", "posts").then((v) => console.log(v.posts));

const carryLoadData = (protocol) => {
  return (domain) => {
    return (path) => {
      return loadData(protocol, domain, path);
    };
  };
};

// const loadByHttps = carryLoadData("https");
// const loadDummyJson = loadByHttps("dummyjson.com");

const loadDummyJson = carryLoadData("https")("dummyjson.com");

loadDummyJson("product").then((v) => console.log(v.products));
loadDummyJson("users").then((v) => console.log(v.users));
loadDummyJson("posts").then((v) => console.log(v.posts));
