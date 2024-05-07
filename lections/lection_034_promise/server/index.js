const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // *
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

app.get("/sign-in", (req, res) => {
  res.json({ success: true, id: 1 });
});

function readFile({ url, callback }) {
  return fs.readFile(url, "utf-8", callback);
}

app.get("/users/:id", (req, res) => {
  readFile({
    url: "./users.json",
    callback: (_, data) => {
      try {
        const user = JSON.parse(data).users.find(
          (user) => user.id == req.params.id
        );

        if (!user) throw new Error(`User ${req.params.id} ==> NOT FOUND`);

        res.json({
          user,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
      }
    },
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
