//------------------- ----------------------

const ref = Object.freeze({ a: 12, b: Object.freeze({}) });
const prim = "aa";

// prim = "bb"; error
// ref = []; error

ref.a = 13;
ref.b.c = 16;

console.log(ref);

// TDZ

// console.log(a, "a");

let a = 12;
a = 14;

// let a = 13; error

// ------

console.log(f, "");
var f = 12;
var f = 13;

// ------------------ Lexical Scope ----

let a2 = "global";
const a1 = "global";

function foo() {
  var a0 = 12;
  const a1 = 13;
  let a2 = 14;

  function f1() {
    const a1 = "nested f1";
    let a2 = "nested f1";
  }

  f1();
}

foo();

// console.log(a0, "a0");
// console.log(a1, "a1");
// console.log(a2, "a2");

//---------- block scope ------

let c1 = 1;
const c2 = 2;
var c3 = "aaa";

{
  let c1 = 4;
  const c2 = 3;
  var c3 = "vbbb";

  {
    let c1 = 4;
    const c2 = 3;
  }
}

// console.log(c3, "c3");

const flag = true;

var o1 = "global o1";
let o2 = "global o2";
const o3 = "global o3";

if (flag) {
  var o1 = 12;
  let o2 = 13;
  //   const o3 = 15;

  if (true) {
    var o1 = "nested";
    // let o2 = "nested o2";
    // const o3 = "nesteed o3";

    console.log(o3, "o3"); // read

    o2 = "rewrite";
  }

  console.log(o2, "02");
}

// console.log(o1, "o1"); // 12
// console.log(o2, "o2"); // Error
// console.log(o3, "o3"); // Error

// ---------------
var i = 0; // from global sope

for (let i = 0; i < 3; i = i + 1) {
  //   console.log(i);

  // LE.for[1] = {i : 1}

  //   console.log(i, "i from for");

  //   (function F2 (i) {

  // LE.F2 = { i: 0 }

  setTimeout(() => {
    // SCOPE = FOR[1].LE
    // console.log("hello", "i");
    // console.log(i, "i");
  }, 3000);

  //   })(i);
}

console.log("after");

/*

var i = 0;

for(i < 3) {

}

*/

/*

 for(let i = 0) {
    ...
    setTimeout(() => ..0.)
 }

 for(let i = 1) {
    ...
    setTimeout(() => ..1.)
 }

 for (let i = 2) {
    ...
    setTimeout(() => ..2.)
 }

*/

// ----------------------
let flag2 = true;

if (flag2) {
  (function () {
    var p1 = 12;
  })();
}

// console.log(p1);

// ---------------- object -----------------

const CAR_MODEL_KEY = "carModel";
const SET_FULL_NAME = "setFullName";

const obj = {
  // run: function(){}
  run() {},
  [CAR_MODEL_KEY]: "R350",
  carModel3: "E200",
  [SET_FULL_NAME](value) {
    this.fullName = value;
  },
};

// obj[CAR_MODEL_KEY] = "R350";

// console.log(obj[CAR_MODEL_KEY], "read");

obj[CAR_MODEL_KEY] = "ML350"; //write

// console.log(obj.carModel2);

// obj.carModel2 = "E350";

// obj[SET_FULL_NAME]("Valera");

// console.log(obj);

// ---------- default params ------

function foo2(arg1 = "default value", arg2 = "default value") {
  //   arg1 = arg1 || "default value";
  //   arg2 = arg2 || "default value";
  console.log(arg1, arg2);
}

foo2();

//  ---- destruction ------
// -- object
const obj3 = {
  w11: 1,
  w2: 2,
  w3: {
    valera: "hello",
  },
};

// const w1 = obj3.w1;
// const b1 = obj3.w3.b1;

const {
  w3: { valera },
  w11,
  w2,
} = obj3;

console.log(w2, w11, valera);

// --- array

const arr = ["aaaa", "bbb", "ccc"];

// const elem0 = arr[0];
// const elem1 = arr[1];

// const [elem0, elem1] = arr;

// console.log(elem0, "elem");
// console.log(elem1, "elem1");

let [, , elem2] = arr;

// console.log(elem0, "elem");
console.log(elem2, "elem2");

// ---> v1
// function makeURL(protocol, domain, path) {
//   // https://somedomain/path

//   return protocol + "://" + domain + "/" + path;
// }

// const url = makeURL("http", "facebook", "profile");

// console.log(url, "url");

// const url2 = makeURL("http", "profile", "facebook");

// console.log(url2, "url2");

// ---> v2
// function makeURL(params) {
//   // https://somedomain/path

//   return params.protocol + "://" + params.domain + "/" + params.path;
// }

// const url3 = makeURL({
//   domain: "facebook",
//   protocol: "http",
//   path: "profile",
// });

// console.log(url3);

// ---> v3

function makeURL({ domain, path, protocol }, hello) {
  // let {protocol, domain, path} = params
  // https://somedomain/path

  console.log(hello, "hello");

  return protocol + "://" + domain + "/" + path;
}

const url4 = makeURL(
  {
    path: "profile",
    protocol: "http",
    domain: "facebook",
  },
  "Hello"
);

console.log(url4);

// --------------- template string -------------------

const name = "Valera";
const lastName = "Fooo";

// const fullName = name + " " + lastName;

const getPI = () => 3.14;

const fullName = `${name} ${lastName + getPI()}

1
`;
console.log(fullName);

const users = [{ name: "Valera", source: 'valera-avatar' }, { name: "Alex", source: 'alex-avatar' }];

// let tempalte = "<ul>";
// tempalte += users.map((user) => "<li>" + user.name + "</li>").join("");
// tempalte += "</ul>";

// nested template string

const getUser = ({source, name }) => (`<li> 
   <img src="${makeURL({protocol: 'https', domain: 'storage', path: source})}" />
   <span>${name}</span>
</li>`);

let tempalte = `
  <ul>
    ${users.map((user) => getUser(user)).join(" ")}
  </ul>
`

console.log(tempalte, "tempalte");

document.write(tempalte);


 /// -------- decomposition --------------


 const fetchAllProducts = async () => {
  return (await fetch("https://dummyjson.com/products")).json();
};


const renderProducts = async () => {
  const products = await fetchAllProducts();

  console.log(products, 'products');

  let template = ` .... `;

  document.body.innerHTML = template;
}

renderProducts();