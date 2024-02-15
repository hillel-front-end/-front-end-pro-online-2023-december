// ------ ___proto___ -------

const modalWindow = {
  open: function () {
    console.log("---open----");
  },
  close: function () {
    console.log("---- close ---");
  },
};

let modalSignIn = {
  signIn: function () {
    console.log("---- signIn ---");
  },
  //   __proto__: modalWindow,
};

const modalEditProfile = {
  editProfile: function () {
    console.log("---- signIn ---");
  },
  //   __proto__: modalWindow,
};

// ------ Methods ------

// const obj = Object.create(modalWindow); // { __proto__: modalWindow}
// modalSignIn = Object.assign(obj, modalSignIn);

modalSignIn = Object.assign(Object.create(modalWindow), modalSignIn);

console.log(modalSignIn, "modalSignIn");

// console.log(obj.__proto__, "obj");
// console.log(obj.__proto__ === modalWindow, "obj");

modalSignIn.signIn();
modalSignIn.open();

// modalSignIn.editProfile(); error
// modalEditProfile.editProfile();
// modalEditProfile.open();

// ----------------

// const obj = Object.freeze({
//   a: 1,
//   b: 2,
// });

const obj = Object.seal({
  a: 1,
  b: 2,
});

// modify
obj.a = 3;

// delete
delete obj.b;

//add
obj.c = 4;

// obj = { a1: 1, a2: 2 }; // error

console.log(obj, "obj");

// ----------------------

console.log(modalSignIn, "modalSignIn!!");

for (let key in modalSignIn) {
  //   console.log(key, "key");
  if (modalSignIn.hasOwnProperty(key)) {
    // console.log(key, "own");
  }

  //   if (key in modalSignIn) {
  //     console.log(key);
  //   }

  //   if (modalSignIn[key]) {
  //     console.log(key, "key");
  //   }
}

// --------------- Object.values() and Object.keys() ---------
// const keys = Object.keys(modalSignIn);
const obj3 = { a: "aaa", b: "bbbb", c: "ccc" };
const keys = Object.keys(obj3);

console.log(keys, "keys of modalSignIn");

keys.forEach((key) => console.log(obj3[key]));

const values = Object.values(obj3);

console.log(values);
