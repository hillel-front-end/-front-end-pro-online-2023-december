const http = require("http");
const express = require("express");

console.log("Hello from server.js");
console.log(process.env.NODE_ENV);

const env = process.env.NODE_ENV;

// const readDB = () => {
//   console.log("---- reading DB ----");
// };

// const readJSONFile = () => {
//   console.log("---- reading JSON File ----");

//   return JSON.stringify({
//     firstName: "Valera",
//     lastName: "....",
//   });
// };

// if (env === "production") {
//   readDB();
// } else {
//   readJSONFile();
// }

// ------- vanilla NODE JS -------

const readInfo = () => {
  if (env === "production") {
    return readDB();
  } else {
    return readJSONFile();
  }
};

const getActions = {
  "/phones": () => {
    return JSON.stringify(["phone - 1", "phone - 2"]);
  },
  "/laptops": () => {
    return JSON.stringify(["laptop - 1", "laptop - 2"]);
  },
};

// const postActions = {

// }

const controller = {
  get(actionPath) {
    const action = getActions[actionPath];

    if (action) {
      return action();
    }
  },
  post(action) {},
};

// const server = http.createServer((request, response) => {
//   // request || response
//   console.log("Knok knok", request.url, request.method); // request.method = 'get', request.url = '/phones'

//   response.end(controller[request.method.toLocaleLowerCase()](request.url)); // controller['get'](request.url)
// });
// const port = 4000;

// server.listen(port, "localhost", () => {
//   console.log("App is listinning on port " + port);
// });

// ---> http:://localhost:port/pathname

// method --> GET:  http:://localhost:4000/phones
// method --> POST:  http:://localhost:4000/phones

// method --> GET http:://localhost:4000/laptops

// ----- Framework EXPRESS  ----

const app = express();

// console.log(app, "app");
const port_2 = 4000;

// ------ ROUTES ------

//method --> GET:  http:://localhost:4000/
app.get("/", (req, res) => {
  res.send("OK");
});

//method --> GET:  http:://localhost:4000/phones
app.get("/phones", (req, res) => {
  res.send(JSON.stringify(["phone - 1", "phone - 2"]));
});

//method --> GET:  http:://localhost:4000/laptop
app.get("/laptops", (req, res) => {
  console.log(req.query);
  //   res.send(JSON.stringify(["laptop - 1", "laptop - 2"]));
  res.send(["laptop - 1", "laptop - 3"]);
});

// app.post
app.listen(port_2, () => {
  console.log("App is running on port " + port_2);
});
