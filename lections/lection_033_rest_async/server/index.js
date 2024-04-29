const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

const white_list = ["http://127.0.0.1:5500"];

app.use((req, res, next) => {
  console.log("----Hello-----", req.headers);
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500"); // *
  res.setHeader("Access-Control-Allow-Methods", "PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-type, Token");
  res.setHeader("Access-Control-Expose-Headers", "Foo");
  res.setHeader("Access-Control-Max-Age", "60");
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

app.get("/test", (req, res) => {
  res.json({ foo: 123 });
});

app.post("/test", (req, res) => {
  res.json({ foo: 123 });
});

app.put("/test", (req, res) => {
  console.log(req.body, "body !!!!!!!!");
  res.setHeader("Foo", "aaaaaaa");

  setTimeout(() => {
    res.json({ success: true, users: ["a1", "a2"] });
  }, 10000);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
