"use strict";

/*

**.**   context: method
**.**   context: function use strict(undefined) and window
**.**   arrow + this, nesten in function
**.**   call apply + method borrowing

*/

/*
---------------- 1 ----------------------
As method: object.method() ==>>> this === object
*/

let person = {
  name: "Valera",
  sayName: function () {
    console.log("---call---");
    // return "My name is " + person.name;
    console.log(this, "this");
    return "My name is " + this.name;
  },
};

// console.log(person.name, "name");

const name = person.sayName();

const person_2 = person;

person = null;

// console.log(name);
// console.log(person, 'person!!');
// console.log(person_2, "person_2");
// console.log(person_2.name, "name");

// const name2 = person_2.sayName();

// console.log(name2, "name2");

const google = { x: 123, y: 222, name: "google" };
const mapbox = { x: 555, y: 55, name: "mapbox" };

function getCoords(a, b) {
  // ['apply', 'bbb']
  console.log(arguments, "args");
  console.log(this, "this");
  a = a || "";

  return "coords x = " + this.x + " y = " + this.y + " " + a;
}

function setCoords(x, y) {
  this.x = x;
  this.y = y;
}

// google.getCoords = getCoords;
// mapbox.getCoords = getCoords;

// let result = google.getCoords();
// console.log(result, "result");

// result = mapbox.getCoords();
// console.log(result, "result");

// delete google.getCoords;
// delete mapbox.getCoords;

/*
   ---------- 2 ----------
   func() ===> this === window 
   if "use strict" ===> this === undefined
*/

/*
window: alert, confirm, new Array()
*/
// window.alert()
// alert();
// console.log(window.alert === alert, "alert");

// window.getCoords();
// const result5 = getCoords("Hello");
// console.log(result5, "result5");
// setCoords(10, 10);

// console.log(window.x, window.y, "x,y");

// ------------------ 3  call, apply ------------------------------

// getCoords.foo = 'aaaa';
// console.dir(getCoords, 'getCoords')
/*
 func.call(object, arg1, arg2, .... , argN ); ===> this === object
 func.apply(object,) ===> this === object
*/

let result2 = getCoords.call(google, "AAA", "BBBB");
console.log(result2, "res");

result2 = getCoords.call(mapbox, "BbBBB");
console.log(result2, "res");

// console.log(['aa', 'bb'])

const args = ["apply"];
getCoords.apply(google, args);

// --- diff: apply and call ---

const obj = { PI: 3.14 };

function sum(a, b, c) {
  console.log(a, b, c, this.PI, "a, b, c, d");
  return a + b + c + this.PI;
}

let result6 = sum.call(obj, 10, 20, 30);
console.log(result6, "result6");

result6 = sum.apply(obj, [11, 12, 33]);
console.log(result6, "result6");

const person3 = { name: "Alex" };
const name3 = person_2.sayName.call(person3);

// ------------------ 4 arrow ------------------------------
// --- arrow --> не має this

const arrow = () => {
  console.log(this, "this in arrow");
};

// arrow.call(person_2);

const obj2 = {
  name: "obj2",
  toDo: function () {
    const arrow2 = () => {
      console.log(this, "this in arrow2");
    };

    arrow2();
  },
};

obj2.toDo();
obj2.toDo.call(person_2);
obj2.toDo.call(person3);

//------------------ borrow -------------------------------

function toDo2() {
  const slice = [].slice;
  // const slice = Array.prototype.slice;
  //   const args = slice.call(arguments);
  const args = [].slice.call(arguments);

  console.log(arguments, "arguments");
  console.log(args, "args");


}

toDo2(1, 2, 3, 4, 5, 6);
