function set(y) {
  // y = x

  y = 1;
  //   LE = {}

  return y;
}

var x = 0; // P: number, undefined, null, boolean, symbol, string

let result = set(x);

console.log(result, "result");
// console.log(y, 'y')

console.log(x, "x"); // 0

// -------
//R:  [], {}, function(){}

const fruits = [];

function addFruit(basket) {
  // basket = fruits;
  basket[0] = "Apple";
}

addFruit(fruits);

console.log(fruits, "fruits");

// ----------

var foo = 1;

function bar() {
  // LE  = {foo : undefined }
  if (!foo) {
    var foo = 10;
  }
  // LE  = {foo : 10 }

  console.log(foo);
}

bar();

// if (false) {
//   var a = 12;
// }

// console.log(a, "a");

// ---------------

var user = {
  firstName: "Вася",
  sayHi: function () {

    console.log(this.firstName);
  },
};

const sayHi = user.sayHi;

// setTimeout(() => user.sayHi(), 1000);

// setTimeout(sayHi.bind(user), 1000);
// setTimeout(user.sayHi.bind(user), 1000);

// function setTimeout(callback, mls) {
//   //callback =
//   callback(); // 80% : window, use strict - undefined, 20% : arrow,  <-.bind()
// }
