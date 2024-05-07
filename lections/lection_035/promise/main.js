// sendAjax({
//     success: () => {
//         sendAjax({
//             success: () => {

//             }
//         });
//     }
// });

/*
For rejected:
    1)throw new Error('123');
    2)return Promise.reject()
    3)new Promise((resolve, reject) => {
        if (false) {
            resolve
        } else {
            reject()
        }
   
    })
*/

// const promise = new Promise(function (resolve, reject) {
//   // reselve();
//   // reject();
// });

// promise
//   .then(
//     () => {},
//     () => {}
//   )
//   .then(null, () => {});

// promise.then(() => {}).then(() => {});

/// --------------------

function sendAjax({ url, method = "GET", data = null }) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else if (xhr.status === 500) {
        reject(new Error(`${JSON.parse(xhr.responseText).message}`));
      } else {
        reject(new Error(`${xhr.status} ${xhr.statusText}`));
      }
    };

    xhr.onerror = () => reject(new Error(`${xhr.status} ${xhr.statusText}`));

    xhr.open(method, url);

    method === "GET" ? xhr.send() : xhr.send(data);
  });
}
// ----------------

const promise1 = new Promise((resolve, reject) => {
  resolve(JSON.stringify({ id: 1 }));
});

// console.log(promise1, "promise1");

const promise2 = promise1.then((jsonData) => {
  return JSON.parse(jsonData);
});

const promise3 = promise2.then(({ id }) => {
  //   return new Promise((resolve) => {
  //     if (true) {
  //       resolve(111111);
  //     }
  //   });
  return 2;
});

console.log(promise3, "promise3");

promise3.then((arg) => {
  /// arg = 2
  console.log(arg);
});

const renderAvatar = (avatarUrl) => {
  const img = new Image();
  img.src = avatarUrl;

  document.body.append(img);
};

console.log("start lodaer");
// sendAjax({
//   url: "http://localhost:3000/sign-in2",
// })
//   .then(JSON.parse)
//   //   .then(null, (error) => console.log(error, "error then - reject"))
// .then(({ id }) => {
//     return sendAjax({
//     url: `http://localhost:3000/users/${0}`,
// });
//   })
//   //   .then(null, (error) => console.log(error, "error"))
//   .then(JSON.parse)
//   .then((resp) => resp.user)
//   .then((user) => renderAvatar(user.image))
//   //   .then(null, (error) => console.log(error, "error then - reject"))
//   .catch((error) => console.log(error.message, "error -- catch"))
//   .finally(() => console.log("finish lodaer"));

/// ------------ all --------

// sendAjax({
//   url: `http://localhost:3000/users/${1}`,
// }).then((resp) => console.log(resp));

// sendAjax({
//   url: `http://localhost:3000/users/${2}`,
// }).then((resp) => console.log(resp));

// const promises = [
//   sendAjax({
//     url: `http://localhost:3000/users/${1}`,
//   }),

//   sendAjax({
//     url: `http://localhost:3000/users/${0}`,
//   }),

//   sendAjax({
//     url: `http://localhost:3000/users/${3}`,
//   }),
// ];
// const promise = Promise.all(promises);

// console.log(promise, "Promise.all()");

// promise
//   .then((data) => {
//     console.log(data, "data");
//   })
//   .catch((e) => console.log(e.message));

// Promise.allSettled(promises).then((data) => {
//   console.log(data, "data");
// });

//

// Promise.race(promises).then((resp) => console.log(resp));

/// ------ fetch -----

// fetch("http://localhost:3000/sign-in")
//   .then((response) => response.json())
//   .then((data) => console.log(data, "data"));

//------- async await -----------

async function getData() {
  console.log("--before---");

  //   const answer = await new Promise(function (resolve, reject) {
  //     setTimeout(() => {
  //       console.log("--setTimeout---");
  //       resolve("Hello world");
  //     }, 3000);
  //   });

  const response = await fetch("http://localhost:3000/sign-in");

  console.log("--- hello ----");

  const data = await response.json();

  const data2 = await (
    await fetch(`http://localhost:3000/users/${data.id}`)
  ).json();

  return data;
}

getData().then((data) => console.log(data));

// console.log("----after getData----");
// debugger;
// console.log(data, "data");
