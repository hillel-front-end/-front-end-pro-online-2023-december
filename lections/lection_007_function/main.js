let i = 0;

function calcSum(a, b, c) {
  let total = 0;

  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  //   i = 'abvc';

  return total + i;
}

result = calcSum(1, 2); // 3
console.log(result, "result");

result = calcSum(1, 2); // 3
console.log(result, "result");

// ------------------------------------

// ---- function declaration

doDoSomething();

function doDoSomething() {
  console.log(1);
}

doDoSomething();

// console.log(a, 'a');
// var a = 12;

// function expression

// console.log(doDoSomething2, "doDoSomething2");
// doDoSomething2();

const doDoSomething2 = function () {
  console.log(2, "2");
};

// doDoSomething2();

// ------ arrow

// const calcSum2 = (a, b) => {
//   return a + b;
// };

// const calcSum2 = (a, b) => a + b;

const valuePlusOne = (a) => a + 1;

const MAIN_COLOR = 12;
const MAX_SPEED = 200;

let toDo;

if (true) {
  toDo = (a) => a + 1;
} else {
  toDo = (a) => a - 1;
}

toDo(1);

// if (true) console.log(123);

// result = calcSum2(1, 2);
// console.log(result, "result");
//----------------------------------
// without arguments

const calcSum3 = (a, b) => {
  console.log(arguments, "arg");
};

// calcSum3();

function toDo4() {
  const PI = 3.14;

  const calcSum3 = (a, b) => {
    console.log(arguments, "arg");
    console.log(PI * 2);
  };

  calcSum3(2, 5);
}

toDo4(1, 2, 3);

// ----------- IIFE (old style module) -----
const a = "global";

(function () {
  console.log("IIFE - 1");
  const a = 12;
  console.log(a, "a");
})();

(function () {
  console.log("IIFE - 2");
  const a = 14;
  console.log(a, "a");
})();

(() => {
  console.log("--arrow--");
})();

// console.log(hello, "hello");

// ----------------- HOF ----------------------------
// --- callback

function toDo5HOF(callback, a, b) {
  console.log(callback, "callback");

  if (typeof callback !== "function") {
    return null;
  }

  const result = callback(a, b);
  return result;
}

function mul(a, b) {
  return a * b;
}
// toDo5(function() {

// })

function div(a, b) {
  return a / b;
}

const a3 = 15;
const b4 = 16;

console.log(div, "div");

toDo5HOF(mul, a3, b4);
toDo5HOF(div, a3, b4);

// toDo5((a, b) => a * b, a3, b4);
// toDo5((a, b) => a / b, a3, b4);

//-----------
console.log("---------------");

function toDo6HOF(outerArgs) {
  const PI = 3.14;

  //   return function () {
  //     const a = 12;
  //     console.log("nested function");
  //   };

  function nested(ownArgs) {
    const a = 12;
    console.log("own vars", a);
    console.log("nested function", ownArgs);
    console.log("outer args", outerArgs);
    console.log("PI", PI);
  }

  return nested;
}

const fn = toDo6HOF("ARGS FOR HOF");

fn("ARGS FOR NESTED");
// console.log(nested, "nested");

// ------ decorator ---------

const calcSum5 = (a, b) => {
  return a + b;
};

const calcDiv = (a, b) => {
  return a / b;
};

function decoratePlusOne(cb) {
  return function (a, b) {
    return cb(a, b) + 1;
  };
}

const result5 = calcSum5(1, 2);
// console.log(result5, "result5");

const sumPlusOne = decoratePlusOne(calcSum5);
// console.log(sumPlusOne, "sumPlusOne");

sumPlusOne(1, 2);
sumPlusOne(10, 5);

// const divPlusOne = decoratePlusOne(calcDiv);

// const result6 = sumPlusOne(1, 2);
// console.log(result6, "result");

// let result7 = divPlusOne(10, 5);
// console.log(result7, "result7");

// result7 = calcDiv(10, 5);
// console.log(result7, "result7");

// function sumPlusOne2(cb, a, b) {
//   return cb(a, b) + 1;
// }

// let res = sumPlusOne2(calcSum5, 10, 2);

// console.log(res, "res");

// res = sumPlusOne2(calcSum5, 12, 12);
// res = sumPlusOne2(calcSum5, 15, 12);

function decoratePlusValue(cb, value) {
  return function (a, b) {
    return cb(a, b) + value;
  };
}

const sumPlusHello = decoratePlusValue(calcSum5, " Hello ");

res = sumPlusHello(1, 2);
console.log(res, "res");

res = sumPlusHello(10, 12);
console.log(res, "res");

// ---------------------------

function logger(message) {
  console.info(message);
}

function loggerWarn(message) {
  console.warn(message);
}

function loggerError(message) {
  console.error(message);
}

logger("Some message");
loggerWarn("Some message");
loggerError("Some message");

function decorateLogger(cb) {
  return (message) => {
    cb(message);
    console.info(new Date().toLocaleString());
  };
}

const loggerWithTime = decorateLogger(logger);
const loggerWarnWithTime = decorateLogger(loggerWarn);
const loggerErrorWithTime = decorateLogger(loggerError);

loggerWithTime("Some message with time");
loggerWithTime("Some fri briz with time 222");

console.log("-------");

loggerWarnWithTime("Some warn aaaaaaaa");
loggerWarnWithTime("Some warn2 bbbbbbbb");

console.log("-------");

loggerErrorWithTime("Some Error aaaaaaaa");
loggerErrorWithTime("Some Error bbbbbbbb");
