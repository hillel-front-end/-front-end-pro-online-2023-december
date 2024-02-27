"use strict";
// number, undefined, null, string, bool, symbol

// mass = [];
// arr = mass;

//arr[0] = 1;

// object = {};
// function(){}

function foo(args) {
  // LE = { args, b, c, h, dec };
  // SCOPE =
  //   console.log(this);

  //   a = 1;

  var b = 2;
  let c = 3;
  const h = 6;

  function dec() {}
}

foo();

// obj.foo();

// foo.call(obj) and foo.apply(obj)

// const fooClone = foo.bind(obj);
// fooClone();

// console.log(a, "a");
// console.log(b, "b");

//esModule

// --------------- accessor properties ------------------

// get (getter), set (setter)

const obj = {
  a1: "Hello",
  a2: "World",
  // a3: obj.a1 + obj.a2
  //   getA3: function () {
  //     return this.a1 + this.a2;
  //   },
  getA3() {
    return this.a1 + this.a2;
  },
  get a3() {
    console.log("--call--");
    return this.a1 + this.a2 + " " + this.getA3();
  },
};

// --- read
// obj.a3 = obj.a1 + obj.a2;

// console.log(obj.getA3());

console.log(obj.a3, "before obj.a3");

obj.a1 = "Brizz";
// console.log(obj.getA3());

console.log(obj, "obj");
console.log(obj.a3, "after obj.a3");

const arr = ["aaa"];

console.log(arr.length, "arr");
arr.push("bb");
console.log(arr.length, "arr");

// --- exmp - 2

const person = {
  firstName: "Valera",
  lastName: "Ternavsky",
  get fullName() {
    // нічого не записують, а тільки повертають значення
    console.log("call get fullName");
    return this.firstName + " " + this.lastName;
  },

  set fullName(value) {
    // console.log("call set fullName");

    if (typeof value === "string" && value.length > 5) {
      const splitedValue = value.split(" ");
      this.firstName = splitedValue[0];
      this.lastName = splitedValue[1];
    }

    // return 12;
  },
};

// read

console.log(person.fullName, "fullName");

// console.log(person.lastName);
// person.lastName = "Penkin";
// person.lastName = NaN;

// console.log(person.fullName, "fullName");

// write

person.fullName = "Alex Sidorov";
// console.log(person, "person");
// console.log(Object.keys(person));

// for (let i in person) {
//   console.log(i);
// }

// -----------
// exmp - 3 (computed)

const rectangle = {
  left: 100,
  top: 200,
  right: 300,
  bottom: 400,

  get width() {
    return this.right - this.left;
  },

  get height() {
    return this.bottom - this.top;
  },
};

console.log(rectangle.width);
console.log(rectangle.height);

rectangle.right = 500;

console.log(rectangle.width);

// -----------
// exmp - 4 (proxy)

const state = {
  data: [],
};

const obj2 = {
  a1: {
    a2: {
      a3: {
        a4: {
          foo: 111,
        },
      },
    },
  },

  get foo() {
    // from context
    return this.a1.a2.a3.a4.foo;
  },

  get data() {
    // from scope
    return state.data;
  },
};

// console.log(obj2.a1.a2.a3.a4.foo);
// console.log(obj2.foo);

/// --------------------
//-- exmp 5 (side effect) __ Home task

const history = {
  records: [],
  
  add(item) {
    if (item) {
      this.records.push(item);
    }
  },

  draw() {
    let html = "<ol>";
    html += this.records
      .map((record) => "<li>" + JSON.stringify(record) + "</li>")
      .join("");
    html += "</ol>";

    document.write(html);
  },
};

const shape = {
  props: {
    left: 100,
    right: 200,
    top: 100,
    bottom: 400,
  },

  get perimeter() {
    // ----------------
    // -----------------
    const total = Object.values(this.props).reduce(
      (accum, item) => accum + item,
      0
    );

    history.add({
      total: total,
      props: this.props,
    });

    return total;
  },
};

console.log(shape.perimeter);

console.log(shape.perimeter);
console.log(shape.perimeter);

shape.props.right = 600;

// shape.props.foo = 'aaa';
// console.log(shape.props);

console.log(shape.perimeter);

// console.log(history.records);

history.draw();
