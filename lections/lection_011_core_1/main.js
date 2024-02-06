// "use strict";
function foo() {}

// foo();  ---> this ==> window or use strict ==>  undefined

const obj = {};

obj.foo = foo;

// 2 obj.foo(); ==> obj

const obj2 = {};

// 3 this === call(obj)

obj.foo.call(obj2, 1, 2, 3);
let foo2 = obj.foo;

// foo2.call(obj2);
foo2.apply(obj2, [1, 2, 3]);
// obj.foo.apply(obj2);

// 4 -- arrow

const arrow = () => {};

arrow();

//---------------------- Hoisting ------------------------------

/*

function toDo() {
    console.log('--- todo ----')
}

 o = undefined;
 funcExpress = unefined;
 arrow2 = undefined;
*/

console.log(o, "o");

var o;

toDo();

function toDo() {
  console.log("--- todo ----");
}

var funcExpress = function () {};
var arrow2 = () => {};

// --- let, const

// ------- TDZ
// a = Uninitialized;

let a;
const b = 13;

console.log(a);

// -------- Global Scope --------

console.log(window, "window");

var o2 = 12;

function dec() {}

dec();

console.log(window.o2, "o2");
console.log(window.dec);

const o3 = 12;
let p4 = 13;

console.log(window.o3, "window.o3");

// if (false) {
//     const o = 16;
//     let o2 = 15;
// }

// ---------- Lexical Environment (LE) -------------

const a4 = 5;
let i = 7;
const y = 111;

function toDo3() {
  // toDo3.SCOPE = window == global scope
  // LE.toDo3 = {};

  // LE.toDo3 = { a4: uninit, n: undefined, c: func(){}, i: uninit};

  let a4 = 1;
  // LE.toDo3 = { a4: 1, n: undefined, c: func(){}, i: uninit};

  const i = 2;
  // LE.toDo3 = { a4: 1, n: undefined, c: func(){}, i: 2};

  var n = function () {};
  // LE.toDo3 = { a4: 1, n: func(){}, c: func(){}, i: 2};

  function c() {}
  // LE.toDo3 = { a4: 1, b: func, c: func, i: 2};
  //LE.toDo3.a4
  console.log(a4 + 1 + i); //1 + 1 + 2
  console.log(y, "y"); // toDo3.scope.y

  // h = 12;

  /// LE = null
}

toDo3();
toDo3();
// console.log(h, "h");
//  h = 12; буде створена нова змінна

// --------- Nested SCOPE -------------

const t = "global scope";

function c1() {
//   const t = "local scope C1";/
  //C1.LE = { c2: func(){} }
  //C1.SCOPE = global scope

  function c2() {
    // const t = "local scope C2";
    //C2.LE = {}
    //C2.SCOPE = C1.LE

    console.log(t, "t");
  }

  c2();
}

c1();


// --- exmp -----
const u = 15;
// create


var b7 = 15;


function p3() {
    /*
      b = undefined;
      p1: function(){}
    */
    //p3.LE = {p1: func, u: 7, b : undefined}
    //p3.scope = global scope
    const u = 7;

    function p1() {
        // p1.le = {}
       // p1.scope = p3.LE
        //  console.log(u, 'u');
     }

     p1();

     b7 = 5; /// global write

     console.log(u, 'u');
}


function p2() {
    const u = 16;
    let b7 = 1;
    p3(); // call
}

console.log(b7, 'before')
p2()
console.log(b7, 'after')
/*
  16(3), undefined, 15(2), error (1)
*/