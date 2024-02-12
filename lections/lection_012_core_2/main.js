/*
  a = undefined;
*/

// TDZ
// console.log(undefined);

var a = 12;
const h = 12;

function foo() {
  // Foo.LE = {}
  // FOO.scope =
  // var, let, const , func
  // =>  FOO.LE = null
  // -------
  // --> this
  //   Foo.LE = null;
}
// foo();
// foo();

// const arrow = () => {
//     // LE = {};
//     // arrow.scope = global;
//   console.log(this, "this");
// };

// const obj = {
//   toDo: function() {
//     // const this
//     // LE = { this: obj }

//     console.log(this)

//     const arrow = () => {
//         // LE = {};
//         // arrow.scope = toDo.LE;
//       console.log(this, "this");
//     };

//     arrow();
//   },
// };

// obj.toDo();

/// --------------------- CLOSURE -----------------------

function increment() {
  let i = 0;
  // LE = {i: 0}

  return function () {
    console.log(i, "inner");
    return ++i;
  };

  // LE = null;
}

// const iterator = increment();

// increment = null;

// iterator();
// iterator();
// iterator();
// iterator();
// iterator();

//--------------

function iterator(collection) {
  let index = 0,
    max = collection.length;

  const hasNext = () => {
    return index < max;
  };

  const next = () => {
    if (!hasNext()) {
      return null;
    }

    return collection[index++];
  };

  const reset = () => {
    index = 0;
  };

  return {
    next, // next: next
    reset,
  };
}

const slider = iterator(["pic1.jpg", "pic2.jpg", "pict3.jpg"]);

// console.log(slider, "slider");
// console.log(slider.next());
// console.log(slider.next());
// console.log(slider.next());

// -------------THIS: call, apply and bind() ----

let obj = {
  a: 1,
  b: 2,
};

function sum(arg1, arg2, arg3) {
  //   console.log(arg1, "arg1");
  //   console.log(arg2, "arg2");
  //   console.log(arg3, "arg3");
  console.log(arguments);
  //   console.log(this, "this");
  return this.a + this.b;
}

// sum = () => this.a + this.b;

// let result = sum.call(obj);

// result = sum.call(obj);
// obj.a = 12;

// result = sum.call(obj);
// result = sum.call(obj);
// var a = 12;
// var b = 13;

// result = sum();
// result = sum.call(obj);
const cpSum = sum.bind(obj, "valera", "pety");

// cpSum(1);
// cpSum(7);
// cpSum(5);

// console.log(cpSum, "cpSum");
// console.log(sum === cpSum);

// ----- myBind -----

function myBind(context) {
  const fn = this;
  const args = [].slice.call(arguments, 1);

  return function () {
    const argsLocal = [].slice.call(arguments);
    return fn.apply(context, args.concat(argsLocal));
  };
}

obj = {
  a: 1,
  b: 2,
};

function sum2(arg1, arg2, arg3) {
  //   console.log(this, "this");
  console.log(arguments, "arguments");
  return this.a + this.b;
}

sum2.myBind = myBind;

const cpSum2 = sum2.myBind(obj, "valera", "pety", "alex");

// cpSum2(1, 2);
// cpSum2(20, 30, "Friz Briz");
// cpSum2();

// ------------------- Solve Problems with bind -----

const person = {
  firstName: "Valera",
  run: function () {
    // console.log(this.firstName + " running");
    console.log(this);
  },
};

// person.run();

/// lost context
function toDoSomething(callback) {
  // callback = person.run.bind(person)
  // HOF
//   console.log(callback);
//   callback();
}

// toDoSomething(person.run.bind(person));

// callback = person.run;

// callback();

// setTimeout(function() {
//     console.log('call')
// }, 4000);
// setTimeout(person.run, 4000);
// setTimeout(person.run.bind(person), 4000);
// setTimeout(() => person.run(), 2000);
