/// async example - 1 setTimeout

const timer1 = () => {
  console.log("timer -- 1");
};

// setTimeout(timer1, 30000);

// timer1();

// function factorial(n) {
//   if (n === 1) {
//     return 1;
//   }

//   // factorial()
//   console.log("factorial");
// }

// function toDo() {
//   console.log("---ToDo---");
// }

// function main() {
//   console.log("---main---");
//   factorial(3);
// }

// main();

// toDo();

function sendAjax({ url, method = "GET", data = null, success, error }) {
  console.log("--send ajax---");
  const xhr = new XMLHttpRequest();

  xhr.onload = () => {
    const response = xhr.responseText;

    if (typeof response === "string") {
      success(JSON.parse(response));
      return;
    }

    success(response);
  };

  xhr.onerror = error;

  xhr.open(method, url);

  method === "GET" ? xhr.send() : xhr.send(data);
}

// sendAjax({
//   url: "http://localhost:3000/test",
//   method: "PUT",
//   data: JSON.stringify({
//     userName: "Valera",
//     userSureName: "....",
//   }),
//   success: (data) => {
//     console.log(data, "data");
//   },
// });

/// async example - 2 -- event

function handler() {
  console.log("handler");
}

// node.addEventListener("click", handler);

// handler();

// removeEventListenter()

// -------------------------------

// setTimeout(() => {
//   console.log("timer - 1");
// }, 3000);

// setTimeout(() => {
//   console.log("timer - 2");
// }, 2999);

// sendAjax();

// sendAjax();

/// ------------------ callback hell ---------------------

let id = null;

console.log(1);

// sendAjax({
//   url: "http://localhost:3000/sign-in",
//   method: "GET",
//   success: (response) => {
//     console.log("---- response sign in ---");
//     id = response.id;

//     sendAjax({
//       url: `http://localhost:3000/users/${id}`,
//       method: "GET",
//       success: (user) => {
//         console.log("---- users-- ---");

//         // console.log(user, "user");
//         sendAjax({
//           url: `http://localhost:3000/users/${id}`,
//           method: "GET",
//           success: (user) => {
//             console.log("---- users-- ---");

//             console.log(user, "user");
//             sendAjax({
//               url: `http://localhost:3000/users/${id}`,
//               method: "GET",
//               success: (user) => {
//                 console.log("---- users-- ---");

//                 console.log(user, "user");
//               },
//             });
//           },
//         });
//       },
//     });
//   },
// });

// console.log(2, id);
// () => {
//     () => {
//         () => {
//             () => {

//             }
//         }
//     }
// }

// ----------- Promise ---------------

// fetch
// async await

/*
 new Promise()
   true --> resolve()
   false --> reject()
*/

/*
    PromiseState: [pending, fulfilled or rejected]
    PromiseResult: undefined
*/

// console.log("---------!!!!!!");

// #if --> fulfilled
// promise.then((data) => {
//   console.log("---fulfilled---", data);
// });

console.log("---before--");
const flag = false;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(0);
    if (flag) {
      console.log("---success--- flag ==>", flag);
      resolve("some info");
      //   reject();
    } else {
      reject(new Error("Eroorr!!!!!! Opps"));
      //   reject('Eroorr!!!!!! Opps"');
      //   resolve();
    }
  }, 3000);
});

// #if --> rejected
// -- then #1
const promise2 = promise.then(
  (data) => {
    console.log("---fulfilled 1.1---", data);
    // return [1, 2, 3];
    // throw new Error("Throw errroe");
  },
  (error) => {
    console.log("---rejected 1.2-----", error.message);
    // return 1.2;
    // throw new Error("Throw errroe");
    return "Something";
  }
);

/*
For rejected:
    new Error('123');
    return Promise.reject()
*/

// -- then #2
promise2.then(
  (data) => {
    console.log("---fulfilled 2.1---", data);
  },
  (error) => {
    console.log("---rejected 2.2---", error);
  }
);
